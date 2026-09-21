import type { Exercise } from "@/content/types";

export const assistantsIaExercises: Exercise[] = [
  {
    id: "comparer-les-assistants-guided",
    skillId: "comparer-les-assistants",
    type: "guided",
    title: "Rendre explicite ton choix d'assistant",
    instructions:
      "Reviens sur une tâche récente où tu as utilisé un assistant IA, et interroge le choix que tu as fait.",
    steps: [
      {
        id: "step-1",
        prompt:
          "Choisis une tâche récente où tu as utilisé un assistant IA. Quel outil as-tu utilisé, et pourquoi (même si le choix n'était pas conscient) ?",
        expectedAnswer:
          "Il n'y a pas de bonne réponse unique : l'objectif est de rendre explicite un choix qui était peut-être purement automatique ou lié à l'habitude.",
      },
      {
        id: "step-2",
        prompt:
          "Si tu avais testé un autre assistant sur la même tâche, qu'est-ce qui aurait probablement changé (résultat, rapidité, intégration avec tes autres outils) ?",
        expectedAnswer:
          "L'idée est de raisonner en termes de forces pratiques (intégrations, longueur de contexte, capacités multimodales), pas seulement de qualité perçue de la réponse.",
      },
      {
        id: "step-3",
        prompt: "Pour ta prochaine tâche similaire, quel critère utiliseras-tu pour choisir l'assistant ?",
        expectedAnswer:
          "Une réponse valable identifie un critère concret (intégration avec un outil existant, longueur du document, besoin de sources vérifiées...), pas juste \"le meilleur\".",
      },
    ],
  },
  {
    id: "comparer-les-assistants-quiz",
    skillId: "comparer-les-assistants",
    type: "quiz",
    title: "Quiz — Choisir le bon assistant pour la tâche",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question:
          "Pourquoi choisir un assistant IA plutôt qu'un autre ne devrait-il pas se limiter à \"lequel est le meilleur\" ?",
        options: [
          "Parce qu'ils sont tous rigoureusement identiques",
          "Parce que leurs forces pratiques diffèrent (intégrations, contexte, multimodalité) selon la tâche",
          "Parce qu'un seul assistant existe réellement",
          "Parce que le prix est toujours le seul critère valable",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Que privilégier si l'essentiel de ton travail se fait déjà dans Google Docs et Gmail ?",
        options: [
          "Un assistant qui n'a aucun lien avec Google Workspace",
          "Un assistant intégré nativement à cet écosystème",
          "Peu importe, aucun assistant ne s'intègre à Google",
          "Toujours celui qui a le prix le plus élevé",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Que font souvent les utilisateurs avancés plutôt que de chercher \"un seul assistant pour tout\" ?",
        options: [
          "Ils n'utilisent jamais plusieurs outils",
          "Ils utilisent plusieurs assistants pour des usages différents selon leurs forces respectives",
          "Ils changent d'assistant au hasard chaque jour",
          "Ils évitent tous les assistants IA",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "recherche-augmentee-autonomous",
    skillId: "recherche-augmentee",
    type: "autonomous",
    title: "Vérifier une réponse issue d'une recherche augmentée",
    instructions:
      "Pose une question sur un sujet récent (actualité, sortie récente d'un produit...) à un assistant avec la recherche web activée. Vérifie ensuite chaque source citée en l'ouvrant réellement, et rapporte ce que tu trouves.",
    criteria: [
      {
        id: "c1",
        description:
          "La question porte bien sur un sujet récent qui nécessite une recherche web, pas une question à réponse stable dans le temps.",
      },
      {
        id: "c2",
        description: "Le rapport indique le nombre de sources citées par l'assistant.",
      },
      {
        id: "c3",
        description:
          "Au moins une source a été réellement ouverte et son contenu comparé à ce que l'assistant en a dit.",
      },
      {
        id: "c4",
        description:
          "Le rapport conclut si la synthèse de l'assistant représentait fidèlement la ou les sources vérifiées.",
      },
    ],
  },
  {
    id: "recherche-augmentee-quiz",
    skillId: "recherche-augmentee",
    type: "quiz",
    title: "Quiz — Recherche augmentée par IA",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Quelle est la différence entre un LLM \"classique\" et un assistant avec recherche augmentée ?",
        options: [
          "Aucune différence",
          "L'assistant avec recherche augmentée va chercher des pages web réelles avant de répondre",
          "Le LLM classique est toujours plus récent",
          "La recherche augmentée désactive toute génération de texte",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Que faut-il faire face à une réponse qui cite des sources ?",
        options: [
          "Faire confiance automatiquement sans vérifier",
          "Vérifier réellement le contenu d'au moins une source citée",
          "Ignorer systématiquement les sources",
          "Changer immédiatement d'assistant",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "En quoi la recherche augmentée réduit-elle (sans l'éliminer) le risque d'hallucination ?",
        options: [
          "Elle l'élimine totalement et garantit zéro erreur",
          "Elle ancre la réponse sur des pages réelles plutôt que sur la seule mémoire du modèle",
          "Elle n'a aucun effet sur les hallucinations",
          "Elle remplace le modèle par un moteur de recherche classique",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "analyser-des-fichiers-autonomous",
    skillId: "analyser-des-fichiers",
    type: "autonomous",
    title: "Extraire et vérifier des données d'une image",
    instructions:
      "Prends une capture d'écran d'un tableau, graphique ou tableur, envoie-la à un assistant IA, et demande-lui d'en extraire les données sous forme de tableau structuré. Vérifie chaque valeur extraite par rapport à l'image d'origine.",
    criteria: [
      {
        id: "c1",
        description:
          "Le rapport précise le type de fichier/image utilisé (tableau, graphique, capture de tableur...).",
      },
      {
        id: "c2",
        description: "Le résultat extrait est bien structuré (tableau ou liste claire), pas un paragraphe descriptif.",
      },
      {
        id: "c3",
        description:
          "Chaque valeur extraite a été comparée individuellement à l'image d'origine, pas seulement une impression générale de justesse.",
      },
      {
        id: "c4",
        description: "Le rapport signale toute erreur ou donnée manquante trouvée lors de la vérification.",
      },
    ],
  },
  {
    id: "analyser-des-fichiers-quiz",
    skillId: "analyser-des-fichiers",
    type: "quiz",
    title: "Quiz — Analyser des fichiers concrets",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Que faut-il vérifier après avoir demandé à un assistant d'extraire des données d'une image de tableau ?",
        options: [
          "Rien, l'extraction est toujours parfaite",
          "Chaque valeur extraite, en la comparant à l'image d'origine",
          "Uniquement la mise en forme du résultat",
          "Le nombre de mots de la réponse",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Pourquoi un très grand tableur envoyé à un assistant peut-il poser problème ?",
        options: [
          "Il peut être tronqué silencieusement sans que ce soit évident",
          "Les assistants refusent toujours les tableurs",
          "Cela change automatiquement le format de sortie",
          "Aucun problème n'est possible",
        ],
        correctOptionIndex: 0,
      },
      {
        id: "q3",
        question: "Sur quoi repose la fiabilité de l'analyse d'une image de tableau ou de graphique ?",
        options: [
          "Uniquement la taille du fichier",
          "Notamment sur la qualité et la netteté de l'image fournie",
          "La couleur de l'arrière-plan uniquement",
          "Le nom du fichier",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "assistants-personnalises-quiz",
    skillId: "assistants-personnalises",
    type: "quiz",
    title: "Quiz — Assistants personnalisés partageables",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question:
          "Quelle est la principale différence entre un projet personnel et un assistant personnalisé partageable (Custom GPT, Gem) ?",
        options: [
          "Aucune différence, ce sont des synonymes",
          "Le second peut être découvert et utilisé par d'autres, pas seulement par toi",
          "Le projet personnel est toujours plus puissant",
          "Un assistant personnalisé utilise un modèle différent et plus intelligent",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Sur quoi repose la personnalisation d'un Custom GPT ou d'un Gem ?",
        options: [
          "Un modèle secret réservé à cet usage",
          "Des instructions et des connaissances configurées, sur le même modèle sous-jacent",
          "Une intelligence artificielle totalement différente",
          "Rien, c'est identique à une conversation classique sans aucun réglage",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Quand est-il pertinent de construire un assistant personnalisé plutôt qu'utiliser une conversation classique ?",
        options: [
          "Jamais, ce n'est jamais utile",
          "Pour une tâche répétée qu'on veut rendre réutilisable ou partageable avec d'autres",
          "Uniquement pour une question posée une seule fois",
          "Uniquement si on n'a aucune connaissance à fournir",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "assistants-personnalises-challenge",
    skillId: "assistants-personnalises",
    type: "challenge",
    title: "Concevoir un assistant personnalisé pour un tiers",
    instructions:
      "Crée un assistant personnalisé (instructions, et documents/connaissances attachées si l'outil le permet) destiné à être utilisé par quelqu'un d'autre que toi (collègue, ami, famille) pour une tâche précise. Rédige les instructions pour qu'elles soient compréhensibles sans toi à côté pour les expliquer. Fais-le tester par cette personne, ou simule sérieusement son usage avec un regard extérieur, et note ce qui a manqué de clarté.",
    criteria: [
      {
        id: "c1",
        description:
          "Les instructions de l'assistant sont rédigées pour un tiers, sans référence implicite compréhensible seulement par son créateur.",
      },
      {
        id: "c2",
        description:
          "Le rapport identifie au moins un point ayant nécessité clarification lors du test par un tiers (réel ou simulé sérieusement).",
      },
      {
        id: "c3",
        description: "Les instructions ont été révisées après ce retour pour corriger le point identifié.",
      },
      {
        id: "c4",
        description:
          "Une conclusion explicite distingue ce qui relevait de la personnalisation de ce qui aurait nécessité un modèle ou un outil différent.",
      },
    ],
  },
];
