import type { Module } from "@/content/types";

export const fondationsIaModules: Module[] = [
  {
    id: "comprendre-les-llm",
    domainId: "fondations-ia",
    title: "Comprendre les LLM",
    description:
      "Ce qu'est un grand modèle de langage, comment il génère du texte, et comment il perçoit ce qu'on lui écrit (tokens, contexte).",
    skillIds: ["llm-bases", "tokens-contexte"],
  },
  {
    id: "capacites-limites",
    domainId: "fondations-ia",
    title: "Capacités et limites des modèles",
    description:
      "Ce que les modèles modernes savent faire au-delà du texte (multimodalité, raisonnement) et ce qu'il faut absolument savoir sur leurs limites (hallucinations).",
    skillIds: ["multimodalite", "raisonnement", "hallucinations-limites"],
  },
];
