import { prisma } from "@/lib/db";
import { getSkillActivityState } from "@/lib/skill-progress";
import { skillById, getLessonsBySkill, getExercisesBySkill } from "@/content/registry";

/**
 * Recalcule le niveau de maîtrise (0-3) d'une compétence à partir des vraies
 * activités enregistrées, puis persiste le résultat. Les niveaux 4 et 5
 * (Maîtrise, Expertise pratique) ne sont pas calculables automatiquement à
 * ce stade — ils viendront avec les projets et le Coach IA.
 *
 * Règle, en cascade (chaque palier suppose le précédent acquis) :
 *   1. Découverte  : toutes les leçons de la compétence ont été lues
 *   2. Compréhension : le quiz de la compétence est réussi (condition vide,
 *      donc considérée vraie, si la compétence n'a pas de quiz)
 *   3. Utilisation : au moins un exercice guidé/autonome/challenge est
 *      validé (condition vide, donc considérée vraie, si aucun n'existe)
 */
export async function recomputeSkillLevel(skillId: string): Promise<number> {
  const skill = skillById.get(skillId);
  if (!skill) throw new Error(`Compétence inconnue : ${skillId}`);

  const lessons = getLessonsBySkill(skillId);
  const exercises = getExercisesBySkill(skillId);
  const quizExercises = exercises.filter((e) => e.type === "quiz");
  const practiceExercises = exercises.filter(
    (e) => e.type === "guided" || e.type === "autonomous" || e.type === "challenge",
  );

  const { readLessonIds, quizBestByExercise, submissionByExercise } =
    await getSkillActivityState(skillId);

  const lessonRead = lessons.every((lesson) => readLessonIds.has(lesson.id));

  const quizPassed =
    quizExercises.length === 0
      ? true
      : quizExercises.some((quiz) => quizBestByExercise.get(quiz.id)?.passed === true);

  const practiceDone =
    practiceExercises.length === 0
      ? true
      : practiceExercises.some(
          (exercise) => submissionByExercise.get(exercise.id)?.status === "validated",
        );

  const gate1 = lessonRead;
  const gate2 = gate1 && quizPassed;
  const gate3 = gate2 && practiceDone;

  const level = gate3 ? 3 : gate2 ? 2 : gate1 ? 1 : 0;

  await prisma.skillProgress.upsert({
    where: { skillId },
    create: { skillId, level },
    update: { level },
  });

  return level;
}
