import type { Module } from "@/content/types";

export const contextEngineeringModules: Module[] = [
  {
    id: "construire-le-contexte",
    domainId: "context-engineering",
    title: "Construire le contexte",
    description:
      "Donner à un assistant un cadre permanent plutôt que de tout répéter à chaque conversation : instructions durables et documents de référence.",
    skillIds: ["instructions-personnalisees", "fournir-des-documents"],
  },
  {
    id: "gerer-le-contexte-dans-la-duree",
    domainId: "context-engineering",
    title: "Gérer le contexte dans la durée",
    description:
      "Ce qui persiste (ou pas) d'une conversation à l'autre : mémoire, bases de connaissances par projet, et outils réellement disponibles.",
    skillIds: ["memoire-assistant", "bases-de-connaissances", "contexte-outils"],
  },
];
