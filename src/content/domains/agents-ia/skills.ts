import type { Skill } from "@/content/types";
import { levelDescriptors as descriptors } from "@/content/level-descriptors";

export const agentsIaSkills: Skill[] = [
  {
    id: "chatbot-vs-agent",
    moduleId: "comprendre-ce-quest-un-agent",
    title: "Chatbot ou agent ?",
    description:
      "Distinguer un chatbot, qui répond à un message à la fois, d'un agent, qui poursuit un objectif de façon autonome sur plusieurs étapes en décidant lui-même de la suite.",
    prerequisites: ["llm-bases"],
    lessonIds: ["chatbot-vs-agent-lesson"],
    exerciseIds: ["chatbot-vs-agent-guided", "chatbot-vs-agent-quiz"],
    levelDescriptors: descriptors(
      "la distinction entre chatbot et agent",
      "Identifie si une interaction donnée relève d'un usage chatbot ou d'une tâche d'agent, selon le nombre de décisions autonomes en jeu.",
      "Reformule une tâche chatbot en objectif d'agent multi-étapes quand c'est pertinent, ou inversement simplifie une tâche qui n'a pas besoin d'autonomie.",
      "Anticipe les risques propres à une tâche d'agent (plusieurs décisions non validées) avant même de la lancer.",
    ),
  },
  {
    id: "outils-dun-agent",
    moduleId: "comprendre-ce-quest-un-agent",
    title: "Les outils d'un agent",
    description:
      "Comprendre qu'un agent décide activement quel outil utiliser et quand, au fil de sa progression vers un objectif — pas seulement qu'un outil est disponible.",
    prerequisites: ["chatbot-vs-agent", "contexte-outils"],
    lessonIds: ["outils-dun-agent-lesson"],
    exerciseIds: ["outils-dun-agent-quiz"],
    levelDescriptors: descriptors(
      "les outils utilisés par un agent",
      "Identifie quels outils un agent a mobilisés pour accomplir une tâche donnée, à partir des actions qu'il a réellement effectuées.",
      "Anticipe qu'élargir les outils disponibles à un agent élargit aussi les façons possibles qu'un plan imparfait cause un dégât réel.",
      "Limite volontairement les outils accessibles à un agent à ce qui est strictement nécessaire pour une tâche donnée.",
    ),
  },
  {
    id: "objectifs-et-planification",
    moduleId: "piloter-un-agent-en-confiance",
    title: "Objectifs et planification",
    description:
      "Donner à un agent un objectif avec un critère de réussite explicite, et comprendre sa boucle interne : observer, décider, agir, recommencer.",
    prerequisites: ["chatbot-vs-agent", "gestion-erreurs-automatisation"],
    lessonIds: ["objectifs-et-planification-lesson"],
    exerciseIds: ["objectifs-et-planification-autonomous", "objectifs-et-planification-quiz"],
    levelDescriptors: descriptors(
      "les objectifs et la planification d'un agent",
      "Formule un critère de réussite explicite avant de lancer une tâche d'agent, plutôt qu'un objectif vague.",
      "Observe la boucle de planification d'un agent (étapes suivies) pour diagnostiquer un résultat inattendu.",
      "Ajuste un objectif en cours de tâche quand la planification de l'agent révèle une ambiguïté non anticipée.",
    ),
  },
  {
    id: "supervision-agent",
    moduleId: "piloter-un-agent-en-confiance",
    title: "Superviser un agent",
    description:
      "Vérifier le plan ou les actions intermédiaires d'un agent avant qu'il n'aille trop loin, plutôt que de ne contrôler que le résultat final.",
    prerequisites: ["outils-dun-agent", "objectifs-et-planification"],
    lessonIds: ["supervision-agent-lesson"],
    exerciseIds: ["supervision-agent-quiz"],
    levelDescriptors: descriptors(
      "la supervision d'un agent",
      "Relit le plan ou les actions intermédiaires d'un agent sur une tâche longue, plutôt que de ne vérifier que le résultat final.",
      "Interrompt un agent dès qu'une action intermédiaire s'écarte de l'objectif prévu, plutôt que de le laisser continuer.",
      "Définit à l'avance les limites d'action d'un agent (outils, systèmes accessibles) avant de lui confier une tâche.",
    ),
  },
  {
    id: "validation-humaine",
    moduleId: "piloter-un-agent-en-confiance",
    title: "Validation humaine",
    description:
      "Classer à l'avance les actions qu'un agent peut effectuer seul, celles qui demandent une confirmation explicite, et celles qui ne devraient jamais lui être confiées sans validation.",
    prerequisites: ["supervision-agent"],
    lessonIds: ["validation-humaine-lesson"],
    exerciseIds: ["validation-humaine-autonomous", "validation-humaine-quiz", "validation-humaine-challenge"],
    levelDescriptors: descriptors(
      "la validation humaine des actions d'un agent",
      "Distingue une action réversible et sans enjeu d'une action irréversible ou à fort enjeu avant de la confier à un agent.",
      "Définit à l'avance une politique claire (autonome / confirmation requise / jamais autorisée) plutôt que de juger au cas par cas dans l'urgence.",
      "Applique une politique de validation cohérente entre des actions de risque comparable, sans exception arbitraire.",
    ),
  },
];
