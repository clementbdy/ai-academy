"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { parseCommaList, parseLineList, serializeStringArray } from "@/lib/json-fields";
import { requireUserId, requireOwnedRecord } from "@/lib/current-user";

function requireField(formData: FormData, key: string): string {
  const value = String(formData.get(key) ?? "").trim();
  if (!value) throw new Error(`Le champ "${key}" est requis.`);
  return value;
}

function optionalField(formData: FormData, key: string): string {
  return String(formData.get(key) ?? "").trim();
}

export async function createPromptAction(formData: FormData): Promise<void> {
  const userId = await requireUserId();
  const title = requireField(formData, "title");
  const prompt = requireField(formData, "prompt");
  const notes = optionalField(formData, "notes");
  const tags = serializeStringArray(parseCommaList(optionalField(formData, "tags")));

  const created = await prisma.savedPrompt.create({
    data: { userId, title, prompt, notes: notes || null, tags },
  });
  revalidatePath("/lab");
  redirect(`/lab/prompts/${created.id}`);
}

export async function updatePromptAction(id: string, formData: FormData): Promise<void> {
  const userId = await requireUserId();
  await requireOwnedRecord(() => prisma.savedPrompt.findUnique({ where: { id } }), userId);

  const title = requireField(formData, "title");
  const prompt = requireField(formData, "prompt");
  const notes = optionalField(formData, "notes");
  const tags = serializeStringArray(parseCommaList(optionalField(formData, "tags")));

  await prisma.savedPrompt.update({
    where: { id },
    data: { title, prompt, notes: notes || null, tags },
  });
  revalidatePath("/lab");
  revalidatePath(`/lab/prompts/${id}`);
}

export async function deletePromptAction(id: string): Promise<void> {
  const userId = await requireUserId();
  await requireOwnedRecord(() => prisma.savedPrompt.findUnique({ where: { id } }), userId);

  await prisma.savedPrompt.delete({ where: { id } });
  revalidatePath("/lab");
  redirect("/lab");
}

export async function createWorkflowAction(formData: FormData): Promise<void> {
  const userId = await requireUserId();
  const title = requireField(formData, "title");
  const description = optionalField(formData, "description");
  const steps = serializeStringArray(parseLineList(optionalField(formData, "steps")));

  const created = await prisma.workflow.create({
    data: { userId, title, description: description || null, steps },
  });
  revalidatePath("/lab");
  redirect(`/lab/workflows/${created.id}`);
}

export async function updateWorkflowAction(id: string, formData: FormData): Promise<void> {
  const userId = await requireUserId();
  await requireOwnedRecord(() => prisma.workflow.findUnique({ where: { id } }), userId);

  const title = requireField(formData, "title");
  const description = optionalField(formData, "description");
  const steps = serializeStringArray(parseLineList(optionalField(formData, "steps")));

  await prisma.workflow.update({
    where: { id },
    data: { title, description: description || null, steps },
  });
  revalidatePath("/lab");
  revalidatePath(`/lab/workflows/${id}`);
}

export async function deleteWorkflowAction(id: string): Promise<void> {
  const userId = await requireUserId();
  await requireOwnedRecord(() => prisma.workflow.findUnique({ where: { id } }), userId);

  await prisma.workflow.delete({ where: { id } });
  revalidatePath("/lab");
  redirect("/lab");
}
