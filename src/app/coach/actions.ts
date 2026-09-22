"use server";

import type Anthropic from "@anthropic-ai/sdk";
import { getAnthropicClient, COACH_MODEL } from "@/lib/anthropic";
import { buildCoachSystemPrompt } from "@/lib/coach-context";
import { requireUserId } from "@/lib/current-user";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export type SendCoachMessageResult = { reply: string } | { error: string };

export async function sendCoachMessageAction(
  history: ChatMessage[],
): Promise<SendCoachMessageResult> {
  const userId = await requireUserId();

  let client;
  try {
    client = getAnthropicClient();
  } catch {
    return {
      error:
        'Clé API manquante. Ajoute ANTHROPIC_API_KEY dans le fichier .env à la racine du projet (clé disponible sur console.anthropic.com/settings/keys), puis relance le serveur de développement.',
    };
  }

  const systemPrompt = await buildCoachSystemPrompt(userId);

  try {
    const response = await client.messages.create({
      model: COACH_MODEL,
      max_tokens: 1024,
      system: systemPrompt,
      messages: history.map((m) => ({ role: m.role, content: m.content })),
    });

    const reply = response.content
      .filter((block): block is Anthropic.TextBlock => block.type === "text")
      .map((block) => block.text)
      .join("\n")
      .trim();

    return { reply: reply || "Je n'ai pas de réponse à te proposer pour l'instant." };
  } catch (error) {
    console.error("Coach IA — erreur API Anthropic :", error);
    return {
      error: "L'appel à l'API Claude a échoué. Vérifie ta clé API et ta connexion, puis réessaie.",
    };
  }
}
