"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { requireUserId } from "@/lib/current-user";

export async function toggleToolFavoriteAction(toolId: string): Promise<void> {
  const userId = await requireUserId();
  const existing = await prisma.toolFavorite.findUnique({
    where: { userId_toolId: { userId, toolId } },
  });
  if (existing) {
    await prisma.toolFavorite.delete({ where: { userId_toolId: { userId, toolId } } });
  } else {
    await prisma.toolFavorite.create({ data: { userId, toolId } });
  }
  revalidatePath("/outils");
}

export async function saveToolNoteAction(toolId: string, formData: FormData): Promise<void> {
  const userId = await requireUserId();
  const note = String(formData.get("note") ?? "").trim();
  await prisma.toolFavorite.update({
    where: { userId_toolId: { userId, toolId } },
    data: { note: note || null },
  });
  revalidatePath("/outils");
}
