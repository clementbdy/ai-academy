import type { Skill } from "@/content/types";
import { levelDescriptors as descriptors } from "@/content/level-descriptors";

export const assistantsIaSkills: Skill[] = [
  {
    id: "comparer-les-assistants",
    moduleId: "choisir-le-bon-assistant",
    title: "Choisir le bon assistant pour la tâche",
    description:
      "Comprendre que ChatGPT, Claude et Gemini ont des forces pratiques différentes (intégrations, contexte, multimodalité), et choisir en fonction de la tâche plutôt que par habitude.",
    prerequisites: ["llm-bases"],
    lessonIds: ["comparer-les-assistants-lesson"],
    exerciseIds: ["comparer-les-assistants-guided", "comparer-les-assistants-quiz"],
    levelDescriptors: descriptors(
      "le choix entre assistants IA",
      "Choisit consciemment un assistant selon la tâche (intégrations, longueur de document, écosystème) plutôt que par habitude.",
      "Utilise plusieurs assistants pour des usages différents plutôt que de chercher 'le seul meilleur' outil.",
      "Anticipe qu'une tâche donnée sera mieux servie par un assistant précis avant même de la commencer, sur la base de ses forces connues.",
    ),
  },
  {
    id: "recherche-augmentee",
    moduleId: "choisir-le-bon-assistant",
    title: "Recherche augmentée par IA",
    description:
      "Comprendre la différence entre un assistant qui répond de mémoire et un assistant qui va chercher des pages web réelles, et vérifier systématiquement les sources citées.",
    prerequisites: ["comparer-les-assistants"],
    lessonIds: ["recherche-augmentee-lesson"],
    exerciseIds: ["recherche-augmentee-autonomous", "recherche-augmentee-quiz"],
    levelDescriptors: descriptors(
      "la recherche augmentée par IA",
      "Active la recherche web quand une question porte sur une information récente, plutôt que de compter sur la mémoire figée du modèle.",
      "Vérifie réellement au moins une source citée avant de réutiliser une information issue d'une recherche augmentée.",
      "Repère qu'une synthèse déforme une source qu'il a vérifiée, et ajuste sa confiance dans l'outil en conséquence.",
    ),
  },
  {
    id: "analyser-des-fichiers",
    moduleId: "aller-plus-loin-avec-les-assistants",
    title: "Analyser des fichiers concrets",
    description:
      "Utiliser un assistant pour extraire et structurer l'information contenue dans une image, un tableur ou un PDF, et vérifier systématiquement le résultat.",
    prerequisites: ["multimodalite"],
    lessonIds: ["analyser-des-fichiers-lesson"],
    exerciseIds: ["analyser-des-fichiers-autonomous", "analyser-des-fichiers-quiz"],
    levelDescriptors: descriptors(
      "l'analyse de fichiers concrets",
      "Envoie directement l'image ou le fichier source à l'assistant plutôt que de retranscrire son contenu à la main.",
      "Vérifie chaque donnée extraite d'un fichier par rapport à la source, plutôt que de faire confiance au résultat global.",
      "Anticipe qu'un fichier volumineux peut être tronqué silencieusement, et vérifie la complétude du résultat en conséquence.",
    ),
  },
  {
    id: "assistants-personnalises",
    moduleId: "aller-plus-loin-avec-les-assistants",
    title: "Assistants personnalisés partageables",
    description:
      "Comprendre la différence entre un espace de travail personnel et un assistant personnalisé (Custom GPT, Gem) conçu pour être découvert et réutilisé par d'autres.",
    prerequisites: ["bases-de-connaissances"],
    lessonIds: ["assistants-personnalises-lesson"],
    exerciseIds: ["assistants-personnalises-quiz"],
    levelDescriptors: descriptors(
      "les assistants personnalisés partageables",
      "Identifie qu'une tâche répétée et partagée avec d'autres personnes justifierait un assistant personnalisé plutôt qu'un usage individuel.",
      "Distingue clairement ce qui relève de la personnalisation (instructions, connaissances attachées) de ce qui relèverait d'un modèle différent.",
      "Conçoit un assistant personnalisé pensé pour être compris et réutilisé par quelqu'un d'autre que lui-même, pas seulement pour son propre usage.",
    ),
  },
];
