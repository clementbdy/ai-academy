"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { recomputeSkillLevel } from "@/lib/evaluation";
import { exerciseById } from "@/content/registry";
import type { CriterionResult } from "@/lib/criteria";

function revalidateAfterProgress(skillId: string) {
  revalidatePath("/");
  revalidatePath("/formation");
  revalidatePath(`/formation/${skillId}`);
}

export async function markLessonReadAction(
  skillId: string,
  lessonId: string,
  timeSpentSec: number,
): Promise<void> {
  const existing = await prisma.activityLog.findFirst({
    where: { skillId, activityType: "lesson", activityId: lessonId },
  });
  if (!existing) {
    await prisma.activityLog.create({
      data: { skillId, activityType: "lesson", activityId: lessonId, result: "read", timeSpentSec },
    });
  }
  await recomputeSkillLevel(skillId);
  revalidateAfterProgress(skillId);
}

export interface QuizResult {
  score: number;
  passed: boolean;
  correctCount: number;
  total: number;
  correctByQuestion: Record<string, boolean>;
}

export async function submitQuizAction(
  skillId: string,
  exerciseId: string,
  answers: Record<string, number>,
  timeSpentSec: number,
): Promise<QuizResult> {
  const exercise = exerciseById.get(exerciseId);
  if (!exercise || exercise.type !== "quiz" || exercise.skillId !== skillId) {
    throw new Error("Quiz introuvable pour cette compétence.");
  }

  const correctByQuestion: Record<string, boolean> = {};
  let correctCount = 0;
  for (const question of exercise.questions) {
    const isCorrect = answers[question.id] === question.correctOptionIndex;
    correctByQuestion[question.id] = isCorrect;
    if (isCorrect) correctCount++;
  }
  const total = exercise.questions.length;
  const score = total === 0 ? 0 : Math.round((correctCount / total) * 100);
  const passed = score >= exercise.passingScore;

  await prisma.activityLog.create({
    data: {
      skillId,
      activityType: "quiz",
      activityId: exerciseId,
      result: JSON.stringify({ score, passed }),
      timeSpentSec,
    },
  });

  await recomputeSkillLevel(skillId);
  revalidateAfterProgress(skillId);

  return { score, passed, correctCount, total, correctByQuestion };
}

export interface GuidedStepResult {
  stepId: string;
  answer: string;
  selfAssessedCorrect: boolean;
}

export async function submitGuidedExerciseAction(
  skillId: string,
  exerciseId: string,
  steps: GuidedStepResult[],
  timeSpentSec: number,
): Promise<{ status: string }> {
  const exercise = exerciseById.get(exerciseId);
  if (!exercise || exercise.type !== "guided" || exercise.skillId !== skillId) {
    throw new Error("Exercice introuvable pour cette compétence.");
  }

  const status = steps.length > 0 && steps.every((s) => s.selfAssessedCorrect)
    ? "validated"
    : "needs_revision";

  const existing = await prisma.exerciseSubmission.findFirst({ where: { exerciseId } });
  const data = {
    exerciseId,
    skillId,
    content: JSON.stringify(steps),
    status,
    criteriaResults: null,
    timeSpentSec: (existing?.timeSpentSec ?? 0) + timeSpentSec,
  };
  if (existing) {
    await prisma.exerciseSubmission.update({ where: { id: existing.id }, data });
  } else {
    await prisma.exerciseSubmission.create({ data });
  }

  await recomputeSkillLevel(skillId);
  revalidateAfterProgress(skillId);

  return { status };
}

export async function submitCriteriaExerciseAction(
  skillId: string,
  exerciseId: string,
  content: string,
  criteria: CriterionResult[],
  timeSpentSec: number,
): Promise<{ status: string }> {
  const exercise = exerciseById.get(exerciseId);
  if (
    !exercise ||
    (exercise.type !== "autonomous" && exercise.type !== "challenge") ||
    exercise.skillId !== skillId
  ) {
    throw new Error("Exercice introuvable pour cette compétence.");
  }

  const status = criteria.length > 0 && criteria.every((c) => c.met) ? "validated" : "needs_revision";

  const existing = await prisma.exerciseSubmission.findFirst({ where: { exerciseId } });
  const data = {
    exerciseId,
    skillId,
    content,
    status,
    criteriaResults: JSON.stringify(criteria),
    timeSpentSec: (existing?.timeSpentSec ?? 0) + timeSpentSec,
  };
  if (existing) {
    await prisma.exerciseSubmission.update({ where: { id: existing.id }, data });
  } else {
    await prisma.exerciseSubmission.create({ data });
  }

  await recomputeSkillLevel(skillId);
  revalidateAfterProgress(skillId);

  return { status };
}
