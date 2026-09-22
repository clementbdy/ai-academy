import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

/**
 * Le vrai socle d'autorisation de l'app — pas le proxy seul, puisque les
 * Server Actions contournent ses matchers (voir proxy.ts). Appelée en tête
 * de chaque Server Action et chaque fonction de lecture de données.
 */
export async function requireUserId(): Promise<string> {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) redirect("/login");
  return userId;
}

/**
 * Va chercher un enregistrement et vérifie que son userId correspond à
 * l'appelant avant de laisser une action le modifier/supprimer — évite que
 * chaque actions.ts réimplémente son propre "fetch puis compare".
 */
export async function requireOwnedRecord<T extends { userId: string }>(
  finder: () => Promise<T | null>,
  userId: string,
): Promise<T> {
  const record = await finder();
  if (!record || record.userId !== userId) {
    throw new Error("Introuvable ou non autorisé.");
  }
  return record;
}
