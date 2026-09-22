import { prisma } from "@/lib/db";
import { skillById, lessonById, exerciseById } from "@/content/registry";

export interface ActivityFeedItem {
  id: string;
  skillTitle: string;
  label: string;
  date: Date;
  outcome: "positive" | "negative" | "neutral";
}

interface QuizLogResult {
  score: number;
  passed: boolean;
}

export async function getRecentActivityFeed(userId: string, limit = 15): Promise<ActivityFeedItem[]> {
  const [logs, submissions] = await Promise.all([
    prisma.activityLog.findMany({ where: { userId }, orderBy: { completedAt: "desc" }, take: limit }),
    prisma.exerciseSubmission.findMany({ where: { userId }, orderBy: { updatedAt: "desc" }, take: limit }),
  ]);

  const items: ActivityFeedItem[] = [];

  for (const log of logs) {
    const skillTitle = skillById.get(log.skillId)?.title ?? log.skillId;

    if (log.activityType === "lesson") {
      const lesson = lessonById.get(log.activityId);
      items.push({
        id: log.id,
        skillTitle,
        label: `Leçon lue — ${lesson?.title ?? log.activityId}`,
        date: log.completedAt,
        outcome: "neutral",
      });
      continue;
    }

    if (log.activityType === "quiz") {
      const exercise = exerciseById.get(log.activityId);
      let outcome: ActivityFeedItem["outcome"] = "neutral";
      let scoreLabel = "";
      if (log.result) {
        try {
          const parsed = JSON.parse(log.result) as QuizLogResult;
          scoreLabel = ` — ${parsed.score}% (${parsed.passed ? "réussi" : "échoué"})`;
          outcome = parsed.passed ? "positive" : "negative";
        } catch {
          // entrée malformée : on garde le libellé générique
        }
      }
      items.push({
        id: log.id,
        skillTitle,
        label: `Quiz — ${exercise?.title ?? log.activityId}${scoreLabel}`,
        date: log.completedAt,
        outcome,
      });
    }
  }

  for (const submission of submissions) {
    const skillTitle = skillById.get(submission.skillId)?.title ?? submission.skillId;
    const exercise = exerciseById.get(submission.exerciseId);
    const validated = submission.status === "validated";
    items.push({
      id: submission.id,
      skillTitle,
      label: `${exercise?.title ?? submission.exerciseId} — ${
        validated ? "validé" : "à retravailler"
      }`,
      date: submission.updatedAt,
      outcome: validated ? "positive" : "negative",
    });
  }

  items.sort((a, b) => b.date.getTime() - a.date.getTime());
  return items.slice(0, limit);
}

export async function getActivityCount(userId: string): Promise<number> {
  const [logCount, submissionCount] = await Promise.all([
    prisma.activityLog.count({ where: { userId } }),
    prisma.exerciseSubmission.count({ where: { userId } }),
  ]);
  return logCount + submissionCount;
}
