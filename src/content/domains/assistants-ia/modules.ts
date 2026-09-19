import type { Module } from "@/content/types";

export const assistantsIaModules: Module[] = [
  {
    id: "choisir-le-bon-assistant",
    domainId: "assistants-ia",
    title: "Choisir le bon assistant",
    description:
      "Les grands assistants généralistes ne se valent pas également pour toutes les tâches — savoir lequel choisir, et comment vérifier une réponse issue d'une recherche web.",
    skillIds: ["comparer-les-assistants", "recherche-augmentee"],
  },
  {
    id: "aller-plus-loin-avec-les-assistants",
    domainId: "assistants-ia",
    title: "Aller plus loin avec les assistants",
    description:
      "Exploiter des capacités concrètes au-delà de la conversation classique : analyser des fichiers réels, et construire un assistant personnalisé réutilisable.",
    skillIds: ["analyser-des-fichiers", "assistants-personnalises"],
  },
];
