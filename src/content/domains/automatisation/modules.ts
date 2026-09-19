import type { Module } from "@/content/types";

export const automatisationModules: Module[] = [
  {
    id: "les-briques-de-lautomatisation",
    domainId: "automatisation",
    title: "Les briques de l'automatisation",
    description:
      "Les deux notions de base présentes dans tout scénario : ce qui le déclenche, et comment les données circulent d'une étape à l'autre.",
    skillIds: ["declencheurs-actions", "variables-donnees"],
  },
  {
    id: "construire-des-automatisations-fiables",
    domainId: "automatisation",
    title: "Construire des automatisations fiables",
    description:
      "Aller au-delà du scénario linéaire : logique conditionnelle, connexion à des services externes, et gestion des échecs pour un scénario qui tourne sans surveillance.",
    skillIds: ["conditions-boucles", "webhooks-api", "gestion-erreurs-automatisation"],
  },
];
