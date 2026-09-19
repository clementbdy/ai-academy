import type { Skill } from "@/content/types";
import { levelDescriptors as descriptors } from "@/content/level-descriptors";

export const promptEngineeringSkills: Skill[] = [
  {
    id: "role-contexte-objectif",
    moduleId: "structurer-un-prompt",
    title: "Rôle, contexte et objectif",
    description:
      "Donner à un prompt les trois informations de base qui remplacent les suppositions du modèle par des faits : qui il doit incarner, ce qu'il sait de la situation, et ce que tu attends comme résultat.",
    prerequisites: ["llm-bases"],
    lessonIds: ["role-contexte-objectif-lesson"],
    exerciseIds: ["role-contexte-objectif-guided", "role-contexte-objectif-quiz"],
    levelDescriptors: descriptors(
      "le rôle, le contexte et l'objectif d'un prompt",
      "Ajoute systématiquement un rôle, un contexte et un objectif explicite à ses prompts sur des tâches qui comptent.",
      "Adapte le niveau de détail du contexte à la difficulté réelle de la tâche, sans sur-contextualiser une demande simple.",
      "Diagnostique qu'une mauvaise réponse vient d'un rôle/contexte/objectif mal posé, et corrige le prompt en conséquence plutôt que de reformuler au hasard.",
    ),
  },
  {
    id: "contraintes-format",
    moduleId: "structurer-un-prompt",
    title: "Contraintes et format de sortie",
    description:
      "Préciser les limites (longueur, ton, ce qu'il faut éviter) et la forme attendue de la réponse (liste, tableau, JSON...) pour obtenir un résultat directement utilisable.",
    prerequisites: ["role-contexte-objectif"],
    lessonIds: ["contraintes-format-lesson"],
    exerciseIds: ["contraintes-format-quiz"],
    levelDescriptors: descriptors(
      "les contraintes et le format de sortie",
      "Précise systématiquement le format de sortie attendu quand la réponse doit être réutilisée ailleurs (liste, tableau, JSON, longueur).",
      "Anticipe qu'un format mal spécifié entraînera une réponse inutilisable, et le précise avant même de lancer le prompt.",
      "Combine plusieurs contraintes (ton + longueur + format + interdits) sans qu'elles se contredisent entre elles.",
    ),
  },
  {
    id: "exemples-few-shot",
    moduleId: "fiabiliser-un-prompt",
    title: "Exemples et few-shot prompting",
    description:
      "Utiliser un ou plusieurs exemples d'entrée/sortie pour montrer au modèle exactement le style ou le format voulu, plutôt que de le décrire par des adjectifs.",
    prerequisites: ["contraintes-format"],
    lessonIds: ["exemples-few-shot-lesson"],
    exerciseIds: ["exemples-few-shot-autonomous", "exemples-few-shot-quiz"],
    levelDescriptors: descriptors(
      "les exemples et le few-shot prompting",
      "Ajoute un exemple concret quand une description par adjectifs ('professionnel', 'concis') ne suffit pas à cadrer le style voulu.",
      "Choisit le nombre d'exemples adapté à la tâche (un seul suffit parfois, une tâche plus subtile en demande deux ou trois).",
      "Construit des exemples qui couvrent aussi les cas limites, pas seulement le cas le plus simple, pour cadrer la généralisation du modèle.",
    ),
  },
  {
    id: "criteres-verification",
    moduleId: "fiabiliser-un-prompt",
    title: "Critères de qualité et vérification",
    description:
      "Intégrer dans le prompt les critères que la réponse doit remplir, et vérifier systématiquement le résultat par rapport à ces critères avant de l'utiliser.",
    prerequisites: ["exemples-few-shot"],
    lessonIds: ["criteres-verification-lesson"],
    exerciseIds: ["criteres-verification-quiz"],
    levelDescriptors: descriptors(
      "les critères de qualité et la vérification",
      "Relit systématiquement une réponse produite par un LLM par rapport aux critères attendus avant de la réutiliser.",
      "Formule les critères directement dans le prompt ('la réponse doit inclure X, éviter Y') plutôt que de les vérifier seulement après coup.",
      "Repère qu'un critère mal formulé dans le prompt est la cause d'un résultat récurrent insatisfaisant, et le reformule en conséquence.",
    ),
  },
  {
    id: "iteration-prompt",
    moduleId: "fiabiliser-un-prompt",
    title: "Itérer sur un prompt",
    description:
      "Traiter un prompt raté comme un point de départ à corriger méthodiquement plutôt qu'un échec : identifier ce qui a manqué, ajuster une variable à la fois, et garder trace de ce qui fonctionne.",
    prerequisites: ["criteres-verification"],
    lessonIds: ["iteration-prompt-lesson"],
    exerciseIds: ["iteration-prompt-autonomous", "iteration-prompt-quiz"],
    levelDescriptors: descriptors(
      "l'itération sur un prompt",
      "Face à une réponse décevante, ajuste le prompt de façon ciblée (une variable à la fois) plutôt que de tout reformuler au hasard.",
      "Sauvegarde les prompts qui fonctionnent pour les réutiliser, plutôt que de repartir de zéro à chaque fois sur une tâche récurrente.",
      "Diagnostique en un ou deux essais la cause précise d'un échec de prompt (rôle, contexte, contraintes, exemples ou critères).",
    ),
  },
];
