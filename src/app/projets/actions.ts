"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { projectById } from "@/content/registry";
import type { CriterionResult } from "@/lib/criteria";

export async function submitProjectAction(
  projectId: string,
  content: string,
  criteria: CriterionResult[],
  timeSpentSec: number,
): Promise<{ status: string }> {
  const project = projectById.get(projectId);
  if (!project) throw new Error("Projet introuvable.");

  const status =
    criteria.length > 0 && criteria.every((c) => c.met) ? "validated" : "needs_revision";

  const existing = await prisma.projectSubmission.findFirst({ where: { projectId } });
  const data = {
    projectId,
    content,
    status,
    criteriaResults: JSON.stringify(criteria),
    timeSpentSec: (existing?.timeSpentSec ?? 0) + timeSpentSec,
  };
  if (existing) {
    await prisma.projectSubmission.update({ where: { id: existing.id }, data });
  } else {
    await prisma.projectSubmission.create({ data });
  }

  revalidatePath("/projets");
  revalidatePath(`/projets/${projectId}`);
  revalidatePath("/");

  return { status };
}
