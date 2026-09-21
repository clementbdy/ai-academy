import type { Skill } from "@/content/types";
import { levelDescriptors as descriptors } from "@/content/level-descriptors";

export const fondationsIaSkills: Skill[] = [
  {
    id: "llm-bases",
    moduleId: "comprendre-les-llm",
    title: "Qu'est-ce qu'un LLM",
    description:
      "Comprendre ce qu'est un grand modèle de langage, comment il est entraîné et comment il génère une réponse, token par token.",
    prerequisites: [],
    lessonIds: ["llm-bases-lesson"],
    exerciseIds: ["llm-bases-guided", "llm-bases-quiz"],
    levelDescriptors: descriptors(
      "les LLM",
      "Sait situer un modèle donné (ChatGPT, Claude, Gemini...) comme un LLM et anticiper qu'il génère du texte de façon probabiliste.",
      "Distingue clairement un LLM d'une IA classique basée sur des règles, et explique pourquoi cela change la façon de l'utiliser.",
      "Peut expliquer à un tiers, avec des exemples concrets, comment un LLM produit sa réponse et pourquoi deux réponses au même prompt peuvent différer.",
    ),
  },
  {
    id: "tokens-contexte",
    moduleId: "comprendre-les-llm",
    title: "Tokens et fenêtre de contexte",
    description:
      "Comprendre comment un modèle découpe le texte en tokens et pourquoi la taille de la fenêtre de contexte limite ce qu'il peut lire et retenir.",
    prerequisites: ["llm-bases"],
    lessonIds: ["tokens-contexte-lesson"],
    exerciseIds: ["tokens-contexte-quiz"],
    levelDescriptors: descriptors(
      "les tokens et le contexte",
      "Sait qu'un document trop long peut dépasser la fenêtre de contexte et adapte la longueur de ce qu'il envoie au modèle.",
      "Anticipe les pertes d'information sur de longues conversations et sait réorganiser un prompt pour garder l'essentiel dans le contexte.",
      "Sait estimer approximativement le coût en tokens d'une tâche et choisir un modèle/une stratégie de contexte adaptée en conséquence.",
    ),
  },
  {
    id: "multimodalite",
    moduleId: "capacites-limites",
    title: "Modèles multimodaux",
    description:
      "Comprendre ce que signifie 'multimodal' et ce que les modèles peuvent réellement faire avec des images, de l'audio ou de la vidéo en entrée.",
    prerequisites: ["llm-bases"],
    lessonIds: ["multimodalite-lesson"],
    exerciseIds: ["multimodalite-quiz"],
    levelDescriptors: descriptors(
      "la multimodalité",
      "Utilise volontairement une image ou un document comme entrée quand c'est plus efficace qu'une description textuelle.",
      "Choisit la bonne modalité d'entrée/sortie selon la tâche et sait quand un modèle multimodal se trompe sur une image (angle, résolution, texte flou).",
      "Combine plusieurs modalités dans un même workflow (ex. image + texte + audio) pour une tâche complexe.",
    ),
  },
  {
    id: "raisonnement",
    moduleId: "capacites-limites",
    title: "Modèles de raisonnement",
    description:
      "Comprendre la différence entre un modèle qui répond directement et un modèle de raisonnement qui déroule des étapes intermédiaires avant de conclure.",
    prerequisites: ["llm-bases"],
    lessonIds: ["raisonnement-lesson"],
    exerciseIds: ["raisonnement-quiz"],
    levelDescriptors: descriptors(
      "les modèles de raisonnement",
      "Choisit un modèle/mode de raisonnement adapté quand une tâche demande plusieurs étapes logiques plutôt qu'une réponse directe.",
      "Sait quand le raisonnement étendu apporte un vrai gain (problèmes complexes) et quand il n'est qu'un coût inutile (questions simples).",
      "Structure ses prompts pour guider explicitement le raisonnement d'un modèle sur des problèmes à forts enjeux.",
    ),
  },
  {
    id: "hallucinations-limites",
    moduleId: "capacites-limites",
    title: "Hallucinations et limites des modèles",
    description:
      "Comprendre pourquoi les modèles peuvent affirmer des choses fausses avec assurance, et connaître les limites structurelles à garder en tête.",
    prerequisites: ["tokens-contexte", "raisonnement"],
    lessonIds: ["hallucinations-limites-lesson"],
    exerciseIds: [
      "hallucinations-limites-autonomous",
      "hallucinations-limites-quiz",
      "hallucinations-limites-challenge",
    ],
    levelDescriptors: descriptors(
      "les hallucinations et limites",
      "Vérifie systématiquement les faits, chiffres et citations produits par un modèle avant de les réutiliser.",
      "Repère les signaux qui augmentent le risque d'hallucination (question hors connaissances du modèle, absence de source, sur-confiance) et adapte sa demande en conséquence.",
      "Met en place des garde-fous méthodiques (vérification croisée, sources, RAG) dans ses propres workflows pour limiter l'impact des hallucinations.",
    ),
  },
];
