import type { Skill } from "@/content/types";
import { levelDescriptors as descriptors } from "@/content/level-descriptors";

export const contextEngineeringSkills: Skill[] = [
  {
    id: "instructions-personnalisees",
    moduleId: "construire-le-contexte",
    title: "Instructions personnalisées et system prompt",
    description:
      "Configurer une fois pour toutes le ton, le format ou les règles qu'un assistant doit toujours suivre, au lieu de les répéter dans chaque prompt.",
    prerequisites: ["iteration-prompt"],
    lessonIds: ["instructions-personnalisees-lesson"],
    exerciseIds: ["instructions-personnalisees-guided", "instructions-personnalisees-quiz"],
    levelDescriptors: descriptors(
      "les instructions personnalisées",
      "Configure des instructions personnalisées pour les règles qu'il répète dans presque tous ses prompts (ton, format, contraintes récurrentes).",
      "Fait la différence entre une règle à mettre en instruction permanente et une contrainte propre à une seule tâche, sans mélanger les deux.",
      "Revoit et ajuste ses instructions personnalisées quand elles produisent un effet différent de celui recherché sur certaines tâches.",
    ),
  },
  {
    id: "fournir-des-documents",
    moduleId: "construire-le-contexte",
    title: "Fournir des documents comme contexte",
    description:
      "Donner à un assistant un document réel plutôt que de compter sur sa mémoire générale, et le structurer pour qu'il soit exploité efficacement.",
    prerequisites: ["instructions-personnalisees"],
    lessonIds: ["fournir-des-documents-lesson"],
    exerciseIds: ["fournir-des-documents-quiz"],
    levelDescriptors: descriptors(
      "l'apport de documents comme contexte",
      "Fournit le document source plutôt que de demander au modèle de 'connaître' un contenu précis de mémoire.",
      "Sélectionne l'extrait pertinent d'un document trop long plutôt que de tout envoyer d'un bloc, en s'appuyant sur ce qu'il sait des limites de contexte.",
      "Structure un document collé (titres, délimiteurs) pour que le modèle distingue clairement les instructions du contenu à traiter.",
    ),
  },
  {
    id: "memoire-assistant",
    moduleId: "gerer-le-contexte-dans-la-duree",
    title: "Mémoire et continuité entre conversations",
    description:
      "Comprendre ce qu'un assistant retient réellement d'une conversation à l'autre (rien, par défaut, sauf fonctionnalité dédiée), et les risques que ça comporte.",
    prerequisites: ["fournir-des-documents"],
    lessonIds: ["memoire-assistant-lesson"],
    exerciseIds: ["memoire-assistant-autonomous", "memoire-assistant-quiz"],
    levelDescriptors: descriptors(
      "la mémoire d'un assistant",
      "Vérifie ce qu'un assistant a mémorisé sur lui avant de s'appuyer dessus pour une tâche importante.",
      "Sépare volontairement des contextes différents (projets, sujets) plutôt que de laisser une mémoire générale les mélanger.",
      "Diagnostique qu'une réponse inattendue vient d'une information obsolète en mémoire, et la corrige ou la supprime.",
    ),
  },
  {
    id: "bases-de-connaissances",
    moduleId: "gerer-le-contexte-dans-la-duree",
    title: "Bases de connaissances et projets",
    description:
      "Utiliser les espaces de type 'projet' pour attacher un ensemble de documents de référence qui s'appliquent automatiquement à toutes les conversations d'un même sujet.",
    prerequisites: ["fournir-des-documents"],
    lessonIds: ["bases-de-connaissances-lesson"],
    exerciseIds: ["bases-de-connaissances-quiz"],
    levelDescriptors: descriptors(
      "les bases de connaissances et projets",
      "Crée un projet dédié avec ses documents de référence pour un sujet récurrent, plutôt que de rejoindre les mêmes fichiers à chaque conversation.",
      "Choisit entre un projet dédié et un document ponctuel selon que le sujet est récurrent ou non.",
      "Maintient à jour les documents d'un projet quand la référence change, plutôt que de laisser une base de connaissances devenir obsolète.",
    ),
  },
  {
    id: "contexte-outils",
    moduleId: "gerer-le-contexte-dans-la-duree",
    title: "Contexte des outils disponibles",
    description:
      "Comprendre que les outils activés (recherche web, exécution de code, applications connectées) font partie du contexte du modèle, et déterminent ce qu'il peut vraiment faire.",
    prerequisites: ["memoire-assistant", "bases-de-connaissances"],
    lessonIds: ["contexte-outils-lesson"],
    exerciseIds: ["contexte-outils-autonomous", "contexte-outils-quiz", "contexte-outils-challenge"],
    levelDescriptors: descriptors(
      "le contexte des outils disponibles",
      "Vérifie qu'un outil (recherche web, exécution de code...) est bien activé avant de compter dessus pour une tâche précise.",
      "Reconnaît les signes qu'une réponse a été produite sans l'outil attendu (ex. pas de sources réelles alors qu'une recherche était censée avoir lieu).",
      "Choisit consciemment quels outils activer ou désactiver selon la tâche, plutôt que de laisser la configuration par défaut.",
    ),
  },
];
