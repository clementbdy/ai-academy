import { prisma } from "@/lib/db";
import { skills, lessons, projects, skillById } from "@/content/registry";
import { getLevelMap } from "@/lib/skill-progress";
import { getSkillStatus, getLevel } from "@/lib/progress";
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
 * — pas de cache, le volume de données reste modeste tant qu'un seul domaine
 * existe.
 */
export async function buildCoachSystemPrompt(): Promise<string> {
  const [levels, feed, notes, projectSubmissions] = await Promise.all([
    getLevelMap(),
    getRecentActivityFeed(10),
    prisma.note.findMany({ orderBy: { updatedAt: "desc" }, take: 20 }),
    prisma.projectSubmission.findMany(),
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

  const lessonSections = lessons.map((lesson) => {
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

## Notes personnelles sauvegardées par l'utilisateur
${noteLines.join("\n") || "Aucune note pour le moment."}

## Contenu des leçons déjà publiées (pour rester cohérent avec ce qui a été enseigné)
${lessonSections.join("\n\n")}

Si on te demande "que dois-je apprendre maintenant ?", regarde les compétences non verrouillées dont le statut n'est pas "maîtrisée" et recommande la première dans l'ordre ci-dessus ; si toutes le sont, oriente vers un projet débloqué qui n'est pas encore validé.`;
}
