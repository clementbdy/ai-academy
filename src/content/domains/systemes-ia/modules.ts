import type { Module } from "@/content/types";

export const systemesIaModules: Module[] = [
  {
    id: "concevoir-un-systeme",
    domainId: "systemes-ia",
    title: "Concevoir un système",
    description:
      "Penser en briques assemblées plutôt qu'en outil isolé, et choisir la bonne brique pour le bon besoin plutôt que la plus impressionnante.",
    skillIds: ["architecture-dun-systeme-ia", "choisir-la-bonne-brique"],
  },
  {
    id: "faire-tenir-un-systeme-ensemble",
    domainId: "systemes-ia",
    title: "Faire tenir un système ensemble",
    description:
      "Connecter les briques entre elles, enchaîner plusieurs modalités, et fiabiliser l'ensemble — pas seulement chaque brique prise isolément.",
    skillIds: ["connecter-les-briques", "systemes-multimodaux", "fiabiliser-un-systeme-complet"],
  },
];
