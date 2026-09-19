"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";

export async function toggleToolFavoriteAction(toolId: string): Promise<void> {
  const existing = await prisma.toolFavorite.findUnique({ where: { toolId } });
  if (existing) {
    await prisma.toolFavorite.delete({ where: { toolId } });
  } else {
    await prisma.toolFavorite.create({ data: { toolId } });
  }
  revalidatePath("/outils");
}

export async function saveToolNoteAction(toolId: string, formData: FormData): Promise<void> {
  const note = String(formData.get("note") ?? "").trim();
  await prisma.toolFavorite.update({
    where: { toolId },
    data: { note: note || null },
  });
  revalidatePath("/outils");
}
