import type { Module } from "@/content/types";

export const analyseDeDonneesIaModules: Module[] = [
  {
    id: "explorer-des-donnees",
    domainId: "analyse-de-donnees-ia",
    title: "Explorer des données avec l'IA",
    description:
      "Préparer un jeu de données avant de le donner à une IA, et poser des questions d'analyse précises plutôt que de demander un résumé vague.",
    skillIds: ["preparer-des-donnees-pour-une-ia", "interroger-des-donnees-avec-lia"],
  },
  {
    id: "visualiser-et-verifier",
    domainId: "analyse-de-donnees-ia",
    title: "Visualiser et vérifier les résultats",
    description:
      "Obtenir des graphiques qui répondent réellement à la question posée, et vérifier les calculs et conclusions d'une IA avant de leur faire confiance.",
    skillIds: ["generer-des-visualisations-avec-lia", "verifier-les-calculs-et-conclusions-ia"],
  },
];
