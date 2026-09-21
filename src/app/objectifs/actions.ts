"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";

function requireField(formData: FormData, key: string): string {
  const value = String(formData.get(key) ?? "").trim();
  if (!value) throw new Error(`Le champ "${key}" est requis.`);
  return value;
}

function optionalField(formData: FormData, key: string): string {
  return String(formData.get(key) ?? "").trim();
}

function parseTargetDate(formData: FormData): Date | null {
  const raw = optionalField(formData, "targetDate");
  return raw ? new Date(raw) : null;
}

export async function createObjectiveAction(formData: FormData): Promise<void> {
  const title = requireField(formData, "title");
  const description = optionalField(formData, "description");
  const targetDate = parseTargetDate(formData);

  const created = await prisma.objective.create({
    data: { title, description: description || null, targetDate },
  });
  revalidatePath("/objectifs");
  revalidatePath("/");
  redirect(`/objectifs/${created.id}`);
}

export async function updateObjectiveAction(id: string, formData: FormData): Promise<void> {
  const title = requireField(formData, "title");
  const description = optionalField(formData, "description");
  const targetDate = parseTargetDate(formData);
  const status = requireField(formData, "status");

  await prisma.objective.update({
    where: { id },
    data: { title, description: description || null, targetDate, status },
  });
  revalidatePath("/objectifs");
  revalidatePath(`/objectifs/${id}`);
  revalidatePath("/");
}

export async function setObjectiveStatusAction(id: string, status: string): Promise<void> {
  await prisma.objective.update({ where: { id }, data: { status } });
  revalidatePath("/objectifs");
  revalidatePath("/");
}

export async function deleteObjectiveAction(id: string): Promise<void> {
  await prisma.objective.delete({ where: { id } });
  revalidatePath("/objectifs");
  revalidatePath("/");
  redirect("/objectifs");
}
