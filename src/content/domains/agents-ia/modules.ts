import type { Module } from "@/content/types";

export const agentsIaModules: Module[] = [
  {
    id: "comprendre-ce-quest-un-agent",
    domainId: "agents-ia",
    title: "Comprendre ce qu'est un agent",
    description:
      "Ce qui distingue un agent d'un simple chatbot, et comment il utilise concrètement des outils pour agir plutôt que seulement répondre.",
    skillIds: ["chatbot-vs-agent", "outils-dun-agent"],
  },
  {
    id: "piloter-un-agent-en-confiance",
    domainId: "agents-ia",
    title: "Piloter un agent en confiance",
    description:
      "Donner un objectif clair à un agent, comprendre sa boucle de planification, le superviser, et décider quelles actions nécessitent toujours ta validation.",
    skillIds: ["objectifs-et-planification", "supervision-agent", "validation-humaine"],
  },
];
