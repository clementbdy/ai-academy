import type { Module } from "@/content/types";

export const iaEntrepreneuriatModules: Module[] = [
  {
    id: "valider-une-idee-avec-lia",
    domainId: "ia-entrepreneuriat",
    title: "Valider une idée avec l'IA",
    description:
      "Vérifier qu'un vrai problème existe avant de construire quoi que ce soit, puis préciser à qui l'on s'adresse et ce qu'on leur propose.",
    skillIds: ["recherche-didee-et-de-marche", "definir-cible-et-offre"],
  },
  {
    id: "lancer-et-faire-tourner-avec-lia",
    domainId: "ia-entrepreneuriat",
    title: "Lancer et faire tourner avec l'IA",
    description:
      "Construire la version la plus simple qui teste une hypothèse, acquérir ses premiers clients par le contenu, et n'automatiser que ce qui a déjà fait ses preuves.",
    skillIds: ["construire-un-mvp", "acquisition-et-contenu", "automatiser-les-operations"],
  },
];
