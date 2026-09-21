import { prisma } from "@/lib/db";
import { skills, lessons, projects, skillById } from "@/content/registry";
import { getLevelMap } from "@/lib/skill-progress";
import { getSkillStatus, getLevel, getNextRecommendedSkill } from "@/lib/progress";
import { isProjectUnlocked } from "@/lib/project-progress";
import { getRecentActivityFeed } from "@/lib/activity-feed";

const STATUS_LABELS: Record<string, string> = {
  locked: "verrouillée",
  todo: "à commencer",
  in_progress: "en cours",
  mastered: "maîtrisée",
};

/**
 * Assemble le contexte réel de l'utilisateur (compétences, projets, activité
 * récente, notes, contenu des leçons) en un system prompt. Reconstruit à
 * chaque message pour rester à jour avec la dernière action de l'utilisateur
 * — pas de cache. Le contenu détaillé des leçons est volontairement limité
 * aux compétences "en cours" (voir plus bas) : avec 67+ leçons publiées,
 * tout embarquer à chaque message ferait exploser le coût en tokens sans
 * rapport avec ce que l'utilisateur travaille réellement.
 */
export async function buildCoachSystemPrompt(): Promise<string> {
  const [levels, feed, notes, projectSubmissions, objectives] = await Promise.all([
    getLevelMap(),
    getRecentActivityFeed(10),
    prisma.note.findMany({ orderBy: { updatedAt: "desc" }, take: 20 }),
    prisma.projectSubmission.findMany(),
    prisma.objective.findMany({ where: { status: "active" } }),
  ]);

  const skillLines = skills.map((skill) => {
    const status = getSkillStatus(skill, levels);
    const level = getLevel(levels, skill.id);
    return `- ${skill.title} (id: ${skill.id}) — niveau ${level}/5, ${STATUS_LABELS[status]}`;
  });

  const projectLines = projects.map((project) => {
    const unlocked = isProjectUnlocked(project, levels);
    const submission = projectSubmissions.find((s) => s.projectId === project.id);
    const status = !unlocked
      ? "verrouillé"
      : submission?.status === "validated"
        ? "validé"
        : submission
          ? "à retravailler"
          : "débloqué, pas encore commencé";
    return `- ${project.title} (id: ${project.id}) — ${status}`;
  });

  const activityLines = feed.map((item) => `- ${item.label} (compétence : ${item.skillTitle})`);

  const noteLines = notes.map((note) => `- ${note.title}`);

  const objectiveLines = objectives.map((objective) => {
    const deadline = objective.targetDate
      ? ` — échéance ${objective.targetDate.toLocaleDateString("fr-FR")}`
      : "";
    return `- ${objective.title}${deadline}`;
  });

  // N'embarquer le contenu complet des leçons que pour les compétences
  // réellement en cours d'apprentissage — pas tout le corpus publié. Avec
  // 67+ leçons, envoyer l'intégralité à chaque message coûterait des
  // dizaines de milliers de tokens par échange, pour un usage qui ne
  // dépasse jamais quelques compétences actives à la fois. Le statut de
  // chaque compétence (verrouillée/à commencer/en cours/maîtrisée) reste
  // listé plus haut pour le reste du programme.
  let relevantSkillIds = new Set(
    skills.filter((s) => getSkillStatus(s, levels) === "in_progress").map((s) => s.id),
  );
  if (relevantSkillIds.size === 0) {
    const next = getNextRecommendedSkill(levels);
    if (next) relevantSkillIds = new Set([next.id]);
  }

  const lessonSections = lessons
    .filter((lesson) => relevantSkillIds.has(lesson.skillId))
    .map((lesson) => {
      const skill = skillById.get(lesson.skillId);
      return `### ${lesson.title} (compétence : ${skill?.title ?? lesson.skillId})\n${lesson.body}`;
    });

  return `Tu es le Coach IA de "AI Academy", l'école personnelle de l'intelligence artificielle de l'utilisateur. Réponds toujours en français, tutoiement, ton direct et bienveillant.

Ton rôle est d'aider à APPRENDRE, pas de faire le travail à sa place. Si on te demande de résoudre directement un exercice ou un projet en cours (quiz, exercice guidé/autonome, livrable de projet), ne donne jamais la réponse finale attendue par la grille de correction : pose des questions, donne des indices, décompose le problème, mais laisse l'utilisateur produire sa propre réponse. Tu peux en revanche expliquer librement les concepts couverts par les leçons ci-dessous, y compris avec d'autres exemples.

## Compétences (statut réel)
${skillLines.join("\n")}

## Projets
${projectLines.join("\n") || "Aucun projet disponible pour l'instant."}

## Activité récente (plus récent en premier)
${activityLines.join("\n") || "Aucune activité enregistrée pour le moment."}

## Objectifs personnels en cours
${objectiveLines.join("\n") || "Aucun objectif fixé pour le moment."}

## Notes personnelles sauvegardées par l'utilisateur
${noteLines.join("\n") || "Aucune note pour le moment."}

## Contenu détaillé des leçons actuellement en cours
${lessonSections.join("\n\n") || "Aucune leçon en cours actuellement."}

Le contenu détaillé ci-dessus ne couvre que les compétences au statut "en cours" (ou la prochaine recommandée si aucune n'est en cours) — pas l'intégralité du programme, pour rester léger. Pour toute autre compétence, tu ne connais que son titre, sa description et son statut (liste plus haut) : si l'utilisateur pose une question précise dessus, réponds avec ce que tu sais du sujet en général, mais invite-le à ouvrir la leçon correspondante dans Formation pour un contenu fidèle à ce qui y est réellement enseigné.

Si on te demande "que dois-je apprendre maintenant ?", regarde les compétences non verrouillées dont le statut n'est pas "maîtrisée" et recommande la première dans l'ordre ci-dessus ; si toutes le sont, oriente vers un projet débloqué qui n'est pas encore validé.`;
}
