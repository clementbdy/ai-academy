import type { Exercise } from "@/content/types";

export const fondationsIaExercises: Exercise[] = [
  {
    id: "llm-bases-guided",
    skillId: "llm-bases",
    type: "guided",
    title: "Observer la variabilité d'un LLM",
    instructions:
      "Va sur l'assistant IA de ton choix (ChatGPT, Claude, Gemini) et pose exactement trois fois la même question ouverte (par exemple : \"Donne-moi une idée de nom pour une chaîne YouTube sur la cuisine\"), dans trois conversations séparées.",
    steps: [
      {
        id: "step-1",
        prompt:
          "Les trois réponses sont-elles identiques mot pour mot, ou varient-elles ? Décris ce que tu observes.",
        expectedAnswer:
          "Les réponses varient (au moins en partie), ce qui illustre le caractère probabiliste de la génération token par token.",
      },
      {
        id: "step-2",
        prompt:
          "D'après la leçon, pourquoi le modèle ne donne-t-il pas exactement la même réponse à chaque fois ?",
        expectedAnswer:
          "Parce qu'à chaque étape, plusieurs tokens suivants sont plausibles, et le modèle en tire un selon leurs probabilités — la génération n'est pas déterministe.",
      },
      {
        id: "step-3",
        prompt:
          "Est-ce que cette variabilité veut dire que le modèle 'invente' toujours n'importe quoi ? Justifie.",
        expectedAnswer:
          "Non : la variabilité porte sur la formulation/le choix parmi des options plausibles, pas sur une absence totale de cohérence — mais elle rappelle qu'il ne faut pas traiter une réponse comme une vérité figée et unique.",
      },
    ],
  },
  {
    id: "llm-bases-quiz",
    skillId: "llm-bases",
    type: "quiz",
    title: "Quiz — Qu'est-ce qu'un LLM",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Comment un LLM génère-t-il sa réponse ?",
        options: [
          "Il cherche la réponse dans une base de données",
          "Il prédit le texte le plus plausible, token par token",
          "Il exécute des règles écrites par des humains",
          "Il copie la réponse la plus proche trouvée sur internet en temps réel",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question:
          "Pourquoi deux réponses à la même question peuvent-elles différer ?",
        options: [
          "Le modèle change de version à chaque question",
          "C'est un bug qu'il faut signaler",
          "La génération est probabiliste : plusieurs tokens sont plausibles à chaque étape",
          "Le modèle se souvient de vos conversations précédentes",
        ],
        correctOptionIndex: 2,
      },
      {
        id: "q3",
        question: "Un LLM 'sait'-il des faits comme une base de données ?",
        options: [
          "Oui, il consulte une base de faits vérifiés à chaque réponse",
          "Non, sa connaissance est diffuse dans ses paramètres, sans garantie de véracité",
          "Oui, mais seulement pour les faits postérieurs à 2020",
          "Non, il ne connaît strictement rien de la réalité",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "tokens-contexte-quiz",
    skillId: "tokens-contexte",
    type: "quiz",
    title: "Quiz — Tokens et fenêtre de contexte",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Qu'est-ce qu'un token ?",
        options: [
          "Toujours un mot entier",
          "Un fragment de texte (mot, morceau de mot, ponctuation) utilisé par le modèle",
          "Une unité de facturation sans lien avec le texte",
          "Une phrase complète",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Que se passe-t-il quand une conversation dépasse la fenêtre de contexte ?",
        options: [
          "Le modèle plante systématiquement",
          "Rien, la fenêtre de contexte est infinie",
          "Les informations les plus anciennes peuvent être perdues ou tronquées",
          "Le modèle change automatiquement de langue",
        ],
        correctOptionIndex: 2,
      },
      {
        id: "q3",
        question:
          "Pourquoi 'nettoyer' un contexte trop chargé peut améliorer la qualité des réponses ?",
        options: [
          "Cela n'a aucun effet, seule la longueur totale compte",
          "Un contexte désordonné dilue les informations importantes pour le modèle",
          "Cela change le prix de l'abonnement",
          "Le modèle lit toujours seulement le dernier message",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "multimodalite-quiz",
    skillId: "multimodalite",
    type: "quiz",
    title: "Quiz — Modèles multimodaux",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Qu'est-ce qu'un modèle multimodal ?",
        options: [
          "Un modèle disponible sur plusieurs applications",
          "Un modèle capable de traiter plusieurs types de contenus (texte, image, audio...)",
          "Un modèle qui répond dans plusieurs langues",
          "Un modèle open source",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question:
          "Pourquoi envoyer directement une capture d'écran est souvent plus efficace que la décrire par écrit ?",
        options: [
          "Ce n'est jamais plus efficace, il faut toujours décrire",
          "Cela évite les pertes de précision liées à la description manuelle",
          "Les captures d'écran sont automatiquement plus rapides à traiter, sans lien avec la précision",
          "Le modèle refuse les descriptions textuelles",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Quel facteur dégrade le plus l'analyse d'image par un modèle ?",
        options: [
          "La couleur dominante de l'image",
          "Une image floue, mal cadrée ou un texte à angle",
          "Le format de fichier (PNG vs JPG)",
          "L'heure à laquelle l'image a été envoyée",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "raisonnement-quiz",
    skillId: "raisonnement",
    type: "quiz",
    title: "Quiz — Modèles de raisonnement",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question:
          "Qu'est-ce qui différencie un modèle de raisonnement d'un modèle standard ?",
        options: [
          "Il utilise un langage de programmation différent",
          "Il déroule des étapes intermédiaires avant de répondre",
          "Il est toujours plus rapide",
          "Il ne peut pas halluciner",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Pour quel type de tâche le raisonnement étendu est-il le plus utile ?",
        options: [
          "Reformuler une phrase simple",
          "Un problème à plusieurs étapes logiques dépendantes",
          "Traduire un mot isolé",
          "Toutes les tâches, sans exception",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Quel est le principal coût du raisonnement étendu ?",
        options: [
          "Aucun, c'est toujours gratuit et instantané",
          "Temps de réponse et coût d'usage plus élevés",
          "Une perte définitive de précision",
          "L'impossibilité de l'utiliser sur du texte",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "hallucinations-limites-autonomous",
    skillId: "hallucinations-limites",
    type: "autonomous",
    title: "Auditer une réponse pour détecter des hallucinations",
    instructions:
      "Pose à un assistant IA une question pointue avec plusieurs faits vérifiables (ex. \"Donne-moi 5 dates clés et noms précis liés à un sujet historique ou scientifique de ton choix, avec sources\"). Copie sa réponse, puis vérifie chaque fait un par un via une recherche indépendante. Rédige un court rapport listant : les faits corrects, les faits faux ou invérifiables, et les signaux qui auraient dû t'alerter avant même de vérifier.",
    criteria: [
      {
        id: "c1",
        description: "Le rapport liste au moins 5 faits vérifiés individuellement, pas une impression globale.",
      },
      {
        id: "c2",
        description: "Au moins un fait est explicitement confirmé OU infirmé avec la source utilisée pour vérifier.",
      },
      {
        id: "c3",
        description:
          "Le rapport identifie au moins un signal de risque d'hallucination présent dans la question posée ou la réponse obtenue (ex. absence de source, niveau de détail suspect, sur-confiance du ton).",
      },
      {
        id: "c4",
        description: "Une conclusion pratique est formulée : que faire différemment la prochaine fois pour limiter ce risque.",
      },
    ],
  },
  {
    id: "hallucinations-limites-quiz",
    skillId: "hallucinations-limites",
    type: "quiz",
    title: "Quiz — Hallucinations et limites",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Qu'est-ce qu'une hallucination dans le contexte d'un LLM ?",
        options: [
          "Un bug d'affichage dans l'interface",
          "Une information fausse produite avec la même assurance qu'une information vraie",
          "Un message d'erreur du modèle",
          "Une réponse trop longue",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Quel réflexe réduit le plus le risque d'hallucination sur des faits précis ?",
        options: [
          "Poser la question de façon plus autoritaire",
          "Fournir soi-même les sources/documents plutôt que de compter sur la mémoire du modèle",
          "Répéter la question plusieurs fois",
          "Utiliser uniquement des questions fermées oui/non",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Le ton confiant d'une réponse est-il un indicateur fiable de sa véracité ?",
        options: [
          "Oui, un modèle n'est jamais confiant sur une erreur",
          "Non, un modèle peut affirmer une erreur avec la même assurance qu'un fait vrai",
          "Oui, mais seulement pour les modèles les plus récents",
          "Cela dépend uniquement de la longueur de la réponse",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
];
