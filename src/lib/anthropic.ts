import Anthropic from "@anthropic-ai/sdk";

export const COACH_MODEL = "claude-sonnet-5";

let cachedClient: Anthropic | null = null;

export function getAnthropicClient(): Anthropic {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error("MISSING_API_KEY");
  }
  if (!cachedClient) {
    cachedClient = new Anthropic({ apiKey });
  }
  return cachedClient;
}
