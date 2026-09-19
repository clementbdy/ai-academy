"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { parseCommaList, serializeStringArray } from "@/lib/json-fields";

function requireField(formData: FormData, key: string): string {
  const value = String(formData.get(key) ?? "").trim();
  if (!value) throw new Error(`Le champ "${key}" est requis.`);
  return value;
}

function optionalField(formData: FormData, key: string): string {
  return String(formData.get(key) ?? "").trim();
}

export async function createNoteAction(formData: FormData): Promise<void> {
  const title = requireField(formData, "title");
  const content = requireField(formData, "content");
  const tags = serializeStringArray(parseCommaList(optionalField(formData, "tags")));
  const skillId = optionalField(formData, "skillId");

  const created = await prisma.note.create({
    data: { title, content, tags, skillId: skillId || null },
  });
  revalidatePath("/notes");
  redirect(`/notes/${created.id}`);
}

export async function updateNoteAction(id: string, formData: FormData): Promise<void> {
  const title = requireField(formData, "title");
  const content = requireField(formData, "content");
  const tags = serializeStringArray(parseCommaList(optionalField(formData, "tags")));
  const skillId = optionalField(formData, "skillId");

  await prisma.note.update({
    where: { id },
    data: { title, content, tags, skillId: skillId || null },
  });
  revalidatePath("/notes");
  revalidatePath(`/notes/${id}`);
}

export async function deleteNoteAction(id: string): Promise<void> {
  await prisma.note.delete({ where: { id } });
  revalidatePath("/notes");
  redirect("/notes");
}
