import type { Module } from "@/content/types";

export const productiviteModules: Module[] = [
  {
    id: "ecrire-et-analyser-plus-vite",
    domainId: "productivite",
    title: "Écrire et analyser plus vite",
    description:
      "Utiliser l'IA pour dépasser la page blanche à l'écriture, et pour synthétiser l'information de façon à ce qu'elle serve réellement à ce dont tu as besoin.",
    skillIds: ["assistance-a-la-redaction", "synthese-et-prise-de-notes"],
  },
  {
    id: "apprendre-et-organiser-avec-lia",
    domainId: "productivite",
    title: "Apprendre et organiser avec l'IA",
    description:
      "Accélérer ton propre apprentissage, organiser des tâches ponctuelles, et mesurer honnêtement si l'IA t'a réellement fait gagner du temps.",
    skillIds: ["ia-pour-apprendre", "organisation-des-taches", "mesurer-le-gain-reel"],
  },
];
