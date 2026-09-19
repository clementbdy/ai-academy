import { prisma } from "@/lib/db";
import type { LevelMap } from "@/lib/progress";
import type { ExerciseSubmission } from "@/generated/prisma/client";

export async function getLevelMap(): Promise<LevelMap> {
  const rows = await prisma.skillProgress.findMany();
  const map: LevelMap = {};
  for (const row of rows) {
    map[row.skillId] = row.level;
  }
  return map;
}

export interface QuizBestResult {
  score: number;
  passed: boolean;
}

export interface SkillActivityState {
  readLessonIds: Set<string>;
  quizBestByExercise: Map<string, QuizBestResult>;
  submissionByExercise: Map<string, ExerciseSubmission>;
}

/**
 * Reconstruit l'état d'avancement d'une compétence à partir des logs et
 * soumissions déjà enregistrés — utilisé à la fois pour recalculer le
 * niveau (src/lib/evaluation.ts) et pour préremplir l'UI au chargement.
 */
export async function getSkillActivityState(skillId: string): Promise<SkillActivityState> {
  const [lessonLogs, quizLogs, submissions] = await Promise.all([
    prisma.activityLog.findMany({ where: { skillId, activityType: "lesson" } }),
    prisma.activityLog.findMany({ where: { skillId, activityType: "quiz" } }),
    prisma.exerciseSubmission.findMany({ where: { skillId } }),
  ]);

  const readLessonIds = new Set(lessonLogs.map((log) => log.activityId));

  const quizBestByExercise = new Map<string, QuizBestResult>();
  for (const log of quizLogs) {
    if (!log.result) continue;
    try {
      const parsed = JSON.parse(log.result) as QuizBestResult;
      const current = quizBestByExercise.get(log.activityId);
      if (!current || parsed.score > current.score) {
        quizBestByExercise.set(log.activityId, parsed);
      }
    } catch {
      // entrée malformée : ignorée plutôt que de faire échouer tout le calcul
    }
  }

  const submissionByExercise = new Map(submissions.map((s) => [s.exerciseId, s]));

  return { readLessonIds, quizBestByExercise, submissionByExercise };
}
