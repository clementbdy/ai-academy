import { prisma } from "@/lib/db";

/** Somme du temps réellement mesuré (secondes) sur les leçons, quiz,
 * exercices et projets — mesuré côté client pendant qu'une page était
 * ouverte et active dans ce navigateur, plafonné par activité pour éviter
 * qu'un onglet oublié ouvert ne gonfle artificiellement le total. C'est un
 * temps réel enregistré, pas une estimation (voir @/lib/time-estimate). */
export async function getRealTimeSpentSeconds(): Promise<number> {
  const [activityAgg, exerciseAgg, projectAgg] = await Promise.all([
    prisma.activityLog.aggregate({ _sum: { timeSpentSec: true } }),
    prisma.exerciseSubmission.aggregate({ _sum: { timeSpentSec: true } }),
    prisma.projectSubmission.aggregate({ _sum: { timeSpentSec: true } }),
  ]);

  return (
    (activityAgg._sum.timeSpentSec ?? 0) +
    (exerciseAgg._sum.timeSpentSec ?? 0) +
    (projectAgg._sum.timeSpentSec ?? 0)
  );
}
