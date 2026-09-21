import { prisma } from "@/lib/db";
import { skills, lessons, projects, skillById, getExercisesBySkill } from "@/content/registry";
import { getLevelMap, getSkillActivityState } from "@/lib/skill-progress";
import { getSkillStatus, getLevel, getNextRecommendedSkill } from "@/lib/progress";
import { isProjectUnlocked } from "@/lib/project-progress";
import { getRecentActivityFeed } from "@/lib/activity-feed";
import type { GuidedStepResult } from "@/app/formation/[skillId]/actions";
import type { CriterionResult } from "@/lib/criteria";
import type { SkillActivityState } from "@/lib/skill-progress";
import type { Exercise } from "@/content/types";

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

  // Même logique de portée que pour les leçons : le détail des exercices
  // (consignes, grille de correction, ET ce que l'utilisateur a réellement
  // répondu) n'est utile que pour les compétences en cours — c'est ce qui
  // permet de répondre à "pourquoi j'ai raté cet exercice ?" sans avoir à
  // embarquer les 129 exercices du programme à chaque message.
  const exerciseSections = (
    await Promise.all(
      [...relevantSkillIds].map(async (skillId) => {
        const activityState = await getSkillActivityState(skillId);
        const skillTitle = skillById.get(skillId)?.title ?? skillId;
        const parts = getExercisesBySkill(skillId).map((exercise) =>
          formatExerciseForCoach(exercise, activityState),
        );
        return parts.length > 0 ? `### Exercices — ${skillTitle}\n${parts.join("\n\n")}` : null;
      }),
    )
  ).filter((section): section is string => section !== null);

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

## Détail des exercices des compétences en cours (consignes, grille de correction, et ce que l'utilisateur a réellement soumis)
${exerciseSections.join("\n\n") || "Aucun exercice détaillé pour le moment."}

Le contenu détaillé ci-dessus (leçons et exercices) ne couvre que les compétences au statut "en cours" (ou la prochaine recommandée si aucune n'est en cours) — pas l'intégralité du programme, pour rester léger. Pour toute autre compétence, tu ne connais que son titre, sa description et son statut (liste plus haut) : si l'utilisateur pose une question précise dessus, réponds avec ce que tu sais du sujet en général, mais invite-le à ouvrir la leçon ou l'exercice correspondant dans Formation pour un contenu fidèle à ce qui y est réellement proposé.

Pour "pourquoi ai-je échoué cet exercice ?" ou "donne-moi un indice", appuie-toi sur la grille de correction et sur ce que l'utilisateur a réellement répondu (visibles ci-dessus) pour cibler précisément ce qui a manqué — sans jamais recopier la réponse de référence, un critère de validation ou la bonne option d'un quiz mot pour mot.

Si on te demande "que dois-je apprendre maintenant ?", regarde les compétences non verrouillées dont le statut n'est pas "maîtrisée" et recommande la première dans l'ordre ci-dessus ; si toutes le sont, oriente vers un projet débloqué qui n'est pas encore validé.`;
}

function formatExerciseForCoach(exercise: Exercise, activityState: SkillActivityState): string {
  const header = `#### ${exercise.title} (${exercise.type})\n${exercise.instructions}`;

  if (exercise.type === "quiz") {
    const best = activityState.quizBestByExercise.get(exercise.id);
    const questions = exercise.questions
      .map((q, i) => `  ${i + 1}. ${q.question} — bonne réponse : ${q.options[q.correctOptionIndex]}`)
      .join("\n");
    const attempt = best
      ? `Meilleur essai de l'utilisateur : ${best.score}% (${best.passed ? "réussi" : "échoué"}).`
      : "L'utilisateur n'a pas encore tenté ce quiz.";
    return `${header}\nQuestions et bonnes réponses :\n${questions}\n${attempt}`;
  }

  if (exercise.type === "guided") {
    const submission = activityState.submissionByExercise.get(exercise.id);
    let userAnswers: GuidedStepResult[] = [];
    if (submission?.content) {
      try {
        userAnswers = JSON.parse(submission.content) as GuidedStepResult[];
      } catch {
        userAnswers = [];
      }
    }
    const byStepId = new Map(userAnswers.map((a) => [a.stepId, a]));
    const steps = exercise.steps
      .map((step, i) => {
        const userAnswer = byStepId.get(step.id);
        const userPart = userAnswer
          ? `réponse de l'utilisateur : "${userAnswer.answer}" (auto-évaluée ${
              userAnswer.selfAssessedCorrect ? "correcte" : "à retravailler"
            })`
          : "pas encore répondu";
        return `  ${i + 1}. ${step.prompt}\n     réponse de référence : ${step.expectedAnswer}\n     ${userPart}`;
      })
      .join("\n");
    return `${header}\nÉtapes :\n${steps}\nStatut global : ${submission?.status ?? "pas encore commencé"}.`;
  }

  // autonomous / challenge
  const submission = activityState.submissionByExercise.get(exercise.id);
  let criteriaResults: CriterionResult[] = [];
  if (submission?.criteriaResults) {
    try {
      criteriaResults = JSON.parse(submission.criteriaResults) as CriterionResult[];
    } catch {
      criteriaResults = [];
    }
  }
  const metById = new Map(criteriaResults.map((c) => [c.criterionId, c.met]));
  const criteria = exercise.criteria
    .map((c) => {
      const met = metById.get(c.id);
      const state = met === undefined ? "non évalué" : met ? "rempli" : "pas rempli";
      return `  - ${c.description} (${state})`;
    })
    .join("\n");
  const userContent = submission?.content
    ? `Ce que l'utilisateur a soumis :\n${submission.content}`
    : "L'utilisateur n'a pas encore soumis de réponse.";
  return `${header}\nGrille de correction :\n${criteria}\nStatut global : ${submission?.status ?? "pas encore commencé"}.\n${userContent}`;
}
