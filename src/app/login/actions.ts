"use server";

import { AuthError } from "next-auth";
import { signIn } from "@/lib/auth";

export async function loginAction(formData: FormData): Promise<void> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");

  try {
    await signIn("credentials", { email, password, redirectTo: "/" });
  } catch (error) {
    if (error instanceof AuthError) {
      throw new Error("Email ou mot de passe incorrect.");
    }
    throw error;
  }
}

export async function loginWithGoogleAction(): Promise<void> {
  await signIn("google", { redirectTo: "/" });
}
