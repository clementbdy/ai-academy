import type { Skill } from "@/content/types";
import { levelDescriptors as descriptors } from "@/content/level-descriptors";

export const ethiqueSecuriteIaSkills: Skill[] = [
  {
    id: "confidentialite-donnees-ia",
    moduleId: "confidentialite-donnees",
    title: "Ce que tu partages avec une IA",
    description:
      "Comprendre ce qui arrive réellement aux données envoyées à un assistant IA : stockage, utilisation possible pour l'entraînement, et différence entre offre grand public et offre professionnelle.",
    prerequisites: ["hallucinations-limites"],
    lessonIds: ["confidentialite-donnees-ia-lesson"],
    exerciseIds: ["confidentialite-donnees-ia-guided", "confidentialite-donnees-ia-quiz"],
    levelDescriptors: descriptors(
      "la confidentialité des données envoyées à une IA",
      "Vérifie les réglages de confidentialité d'un outil IA avant d'y envoyer une information un tant soit peu sensible.",
      "Distingue systématiquement offre grand public et offre pro/entreprise sur la question de l'usage des données, et choisit l'une ou l'autre selon ce qu'il partage.",
      "Définit, pour son propre usage ou celui d'une petite structure, une règle écrite et appliquée de ce qui peut ou ne peut jamais être envoyé à tel outil IA.",
    ),
  },
  {
    id: "choisir-outil-selon-confidentialite",
    moduleId: "confidentialite-donnees",
    title: "Choisir un outil IA selon sa politique de confidentialité",
    description:
      "Savoir lire rapidement une politique de confidentialité d'outil IA, désactiver l'entraînement sur ses données quand c'est possible, et repérer les données qui ne devraient jamais être partagées avec un outil grand public.",
    prerequisites: ["confidentialite-donnees-ia"],
    lessonIds: ["choisir-outil-selon-confidentialite-lesson"],
    exerciseIds: ["choisir-outil-selon-confidentialite-autonomous", "choisir-outil-selon-confidentialite-quiz"],
    levelDescriptors: descriptors(
      "le choix d'un outil IA selon sa confidentialité",
      "Repère dans les réglages d'un outil l'option qui désactive l'utilisation des conversations pour l'entraînement, et l'active quand c'est pertinent.",
      "Compare deux outils IA sur leur politique de confidentialité avant de choisir lequel utiliser pour une tâche donnée, sans se fier uniquement à leur réputation.",
      "Met en place, pour une équipe ou un usage personnel récurrent, une checklist de vérification avant d'adopter un nouvel outil IA impliquant des données sensibles.",
    ),
  },
  {
    id: "prompt-injection-manipulation",
    moduleId: "securite-responsabilite",
    title: "Prompt injection et manipulation",
    description:
      "Comprendre comment un contenu externe (email, page web, document) peut contenir des instructions cachées destinées à détourner un assistant IA de sa tâche, et comment s'en prémunir.",
    prerequisites: ["confidentialite-donnees-ia"],
    lessonIds: ["prompt-injection-manipulation-lesson"],
    exerciseIds: ["prompt-injection-manipulation-guided", "prompt-injection-manipulation-quiz"],
    levelDescriptors: descriptors(
      "le prompt injection et la manipulation d'assistants IA",
      "Reste vigilant quand un assistant IA lit du contenu externe (email, page web, document) et repère une instruction qui ne devrait pas s'y trouver.",
      "Explique pourquoi tout contenu lu par un assistant doit être traité comme une donnée et non comme une instruction, avec un exemple concret à l'appui.",
      "Met en place des garde-fous (validation humaine avant action sensible, séparation claire instructions/données) dans un workflow ou un agent qu'il configure lui-même.",
    ),
  },
  {
    id: "biais-responsabilite-ia",
    moduleId: "securite-responsabilite",
    title: "Biais et responsabilité humaine",
    description:
      "Comprendre que les modèles reproduisent des biais présents dans leurs données d'entraînement, et définir clairement quand une décision assistée par IA doit rester validée par un humain.",
    prerequisites: ["prompt-injection-manipulation", "choisir-outil-selon-confidentialite"],
    lessonIds: ["biais-responsabilite-ia-lesson"],
    exerciseIds: [
      "biais-responsabilite-ia-autonomous",
      "biais-responsabilite-ia-quiz",
      "biais-responsabilite-ia-challenge",
    ],
    levelDescriptors: descriptors(
      "les biais des modèles et la responsabilité humaine",
      "Reste conscient qu'une sortie de modèle peut refléter un biais présent dans ses données d'entraînement, et la relit avec ce filtre sur un sujet sensible.",
      "Teste explicitement un modèle sur un même cas avec des variables identitaires différentes pour vérifier si sa réponse varie sans raison légitime.",
      "Définit, pour un usage réel (recrutement, évaluation, décision affectant un tiers), les cas où une décision assistée par IA nécessite obligatoirement une validation humaine documentée.",
    ),
  },
];
