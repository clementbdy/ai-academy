import type { Module } from "@/content/types";

export const programmationAssisteeModules: Module[] = [
  {
    id: "comprendre-le-code-de-lia",
    domainId: "programmation-assistee",
    title: "Comprendre le code de l'IA",
    description:
      "Les briques universelles présentes dans presque tout code, et le format de données que tu croiseras partout : JSON.",
    skillIds: ["notions-de-base-du-code", "json-donnees-structurees"],
  },
  {
    id: "collaborer-avec-lia-sur-du-code",
    domainId: "programmation-assistee",
    title: "Collaborer avec l'IA sur du code",
    description:
      "Bien demander du code, vérifier ce qu'un assistant produit avant de lui faire confiance, et garder un historique sûr de ton travail.",
    skillIds: ["prompter-du-code", "verifier-du-code-genere", "git-github-bases"],
  },
];
