import type { Module } from "@/content/types";

export const promptEngineeringModules: Module[] = [
  {
    id: "structurer-un-prompt",
    domainId: "prompt-engineering",
    title: "Structurer un prompt",
    description:
      "Les briques de base d'un prompt qui fonctionne : rôle, contexte, objectif, contraintes et format de sortie.",
    skillIds: ["role-contexte-objectif", "contraintes-format"],
  },
  {
    id: "fiabiliser-un-prompt",
    domainId: "prompt-engineering",
    title: "Fiabiliser un prompt",
    description:
      "Aller au-delà du premier jet : donner des exemples, poser des critères de vérification, et itérer méthodiquement.",
    skillIds: ["exemples-few-shot", "criteres-verification", "iteration-prompt"],
  },
];
