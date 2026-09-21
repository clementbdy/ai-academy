import type { Exercise } from "@/content/types";

export const productiviteExercises: Exercise[] = [
  {
    id: "assistance-a-la-redaction-autonomous",
    skillId: "assistance-a-la-redaction",
    type: "autonomous",
    title: "Rédiger avec un premier jet IA, puis se réapproprier le texte",
    instructions:
      "Choisis un texte que tu dois réellement écrire (email, message, court rapport). Demande un premier jet à un assistant IA, puis réécris-le dans tes propres mots/ton avant de l'envoyer ou de le considérer terminé.",
    criteria: [
      {
        id: "c1",
        description: "Le texte de départ est une tâche réelle, pas un exercice fictif sans enjeu.",
      },
      {
        id: "c2",
        description: "Le premier jet généré par l'IA est bien un point de départ, pas le texte final utilisé tel quel.",
      },
      {
        id: "c3",
        description: "Le rapport identifie au moins un changement concret fait pour retrouver son propre ton/voix.",
      },
      {
        id: "c4",
        description: "Le rapport indique honnêtement si l'IA a fait gagner du temps sur cette tâche précise, ou non.",
      },
    ],
  },
  {
    id: "assistance-a-la-redaction-quiz",
    skillId: "assistance-a-la-redaction",
    type: "quiz",
    title: "Quiz — Accélérer sa rédaction avec l'IA",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Quelle est la vraie valeur d'un premier jet généré par IA sur une rédaction ?",
        options: [
          "C'est toujours le texte final à utiliser tel quel",
          "Il aide surtout à dépasser la page blanche, comme matière première à retravailler",
          "Il remplace complètement le besoin de relire",
          "Il n'a aucune utilité",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Pour quel type de tâche l'assistance à la rédaction par IA est-elle la plus utile ?",
        options: [
          "Un message très court et familier à envoyer immédiatement",
          "Un contenu avec une vraie structure (rapport, article, email long)",
          "Aucune tâche ne bénéficie de l'IA",
          "Uniquement les messages en anglais",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Que faire avant de considérer un texte généré par IA comme terminé ?",
        options: [
          "L'envoyer directement sans le relire",
          "Le retravailler pour qu'il reflète son propre ton et vérifier son contenu",
          "Le supprimer systématiquement",
          "Rien de plus n'est nécessaire",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "synthese-et-prise-de-notes-autonomous",
    skillId: "synthese-et-prise-de-notes",
    type: "autonomous",
    title: "Synthétiser un document réel et l'archiver",
    instructions:
      "Prends un document ou contenu long réel (article, transcription, long email). Formule d'abord clairement ce dont tu as besoin (décision à prendre, mémorisation, partage à quelqu'un), puis demande une synthèse adaptée à ce besoin précis. Sauvegarde le résultat dans une note de cette application.",
    criteria: [
      {
        id: "c1",
        description: "Le besoin précis (pourquoi cette synthèse) a été formulé avant de demander le résumé, pas après.",
      },
      {
        id: "c2",
        description: "La synthèse obtenue est adaptée à ce besoin précis, pas un résumé générique identique quel que soit l'usage.",
      },
      {
        id: "c3",
        description: "Le résultat a été réellement sauvegardé dans une note, pas seulement laissé dans la conversation.",
      },
      {
        id: "c4",
        description: "Le rapport indique si la synthèse omettait un point important qu'il a fallu rajouter manuellement.",
      },
    ],
  },
  {
    id: "synthese-et-prise-de-notes-quiz",
    skillId: "synthese-et-prise-de-notes",
    type: "quiz",
    title: "Quiz — Synthétiser l'information et prendre des notes utiles",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Pourquoi formuler ton besoin précis avant de demander une synthèse ?",
        options: [
          "Ce n'est jamais utile",
          "Parce qu'un résumé pour décider et un résumé pour mémoriser ne retiennent pas les mêmes informations",
          "Parce que ça change la langue de la réponse",
          "Parce que l'assistant refuse sinon de répondre",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Pourquoi sauvegarder une synthèse utile dans une note plutôt que de la laisser dans l'historique de conversation ?",
        options: [
          "Ce n'est jamais nécessaire",
          "Pour pouvoir la retrouver facilement plus tard, plutôt que de la perdre dans un historique qui défile",
          "Parce que les conversations sont automatiquement supprimées",
          "Parce qu'une note est plus rapide à générer",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Que risque une synthèse générée automatiquement, même bien formulée ?",
        options: [
          "Elle est toujours parfaite et exhaustive",
          "Elle peut omettre un point important qu'il faut vérifier et compléter",
          "Elle change automatiquement de sujet",
          "Elle ne peut jamais être sauvegardée",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "ia-pour-apprendre-guided",
    skillId: "ia-pour-apprendre",
    type: "guided",
    title: "Apprendre activement avec un assistant",
    instructions:
      "Choisis une notion que tu ne maîtrises pas encore bien, et utilise un assistant pour l'apprendre activement plutôt que passivement.",
    steps: [
      {
        id: "step-1",
        prompt:
          "Choisis une notion que tu ne maîtrises pas encore bien (dans cette formation ou ailleurs). Demande à un assistant de te l'expliquer en précisant ton niveau actuel.",
        expectedAnswer:
          "Il n'y a pas de bonne réponse unique : l'important est d'avoir précisé explicitement ton niveau dans le prompt, pas juste posé la question brute.",
      },
      {
        id: "step-2",
        prompt:
          "Demande-lui ensuite 2 ou 3 questions pour vérifier que tu as bien compris, et réponds-y sincèrement avant de vérifier.",
        expectedAnswer:
          "L'objectif est de tester réellement ta compréhension avant de voir la correction, pas de lire les questions et leurs réponses en même temps.",
      },
      {
        id: "step-3",
        prompt:
          "Si une question t'a fait trébucher, redemande une explication sous un angle différent (autre exemple, autre analogie). Est-ce que ça a aidé ?",
        expectedAnswer:
          "Une bonne réponse évalue honnêtement si changer d'angle a effectivement clarifié le point bloquant, ou non.",
      },
    ],
  },
  {
    id: "ia-pour-apprendre-quiz",
    skillId: "ia-pour-apprendre",
    type: "quiz",
    title: "Quiz — Utiliser l'IA pour apprendre plus vite",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Pourquoi préciser ton niveau actuel avant de demander une explication ?",
        options: [
          "Ce n'est jamais utile",
          "Pour obtenir une explication calibrée plutôt qu'une réponse générique trop simple ou trop complexe",
          "Parce que l'assistant refuse sinon de répondre",
          "Pour changer la langue de la réponse",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question:
          "Pourquoi demander des questions de vérification après une explication, plutôt que de juger sa propre compréhension ?",
        options: [
          "Ce n'est jamais utile",
          "Parce qu'une impression de \"c'est clair\" ne garantit pas une vraie compréhension testée",
          "Parce que ça remplace le besoin d'apprendre",
          "Parce que les questions sont toujours plus rapides à lire",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Que faire si une explication ne \"clique\" pas la première fois ?",
        options: [
          "Abandonner le sujet",
          "Redemander une explication sous un angle différent (autre exemple, autre analogie)",
          "Relire exactement la même explication en boucle",
          "Changer complètement de sujet d'étude",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "organisation-des-taches-quiz",
    skillId: "organisation-des-taches",
    type: "quiz",
    title: "Quiz — Organiser ses tâches avec l'IA",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "En quoi utiliser l'IA pour organiser une tâche ponctuelle diffère-t-il d'une automatisation ?",
        options: [
          "Aucune différence",
          "C'est une aide ad hoc dans une conversation, pas un scénario récurrent qui s'exécute seul",
          "L'organisation de tâches n'a rien à voir avec l'IA",
          "Une automatisation est toujours plus simple à mettre en place",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Que faut-il faire face à une décomposition de tâche générée par IA ?",
        options: [
          "L'appliquer telle quelle sans vérification",
          "L'ajuster à ses propres contraintes avant de la considérer comme son vrai plan",
          "L'ignorer systématiquement",
          "La transformer obligatoirement en automatisation",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Pour quel type de tâche l'aide ponctuelle par IA (plutôt qu'une automatisation) est-elle la plus adaptée ?",
        options: [
          "Une tâche identique répétée chaque semaine sans variation",
          "Une tâche unique ou qui évolue trop pour être automatisée",
          "Une tâche totalement automatisable de A à Z",
          "Aucune tâche ne s'y prête",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "mesurer-le-gain-reel-autonomous",
    skillId: "mesurer-le-gain-reel",
    type: "autonomous",
    title: "Auditer honnêtement ses usages récents de l'IA",
    instructions:
      "Repense à 3 tâches récentes où tu as utilisé l'IA. Pour chacune, estime honnêtement si ça t'a réellement fait gagner du temps par rapport à faire la tâche toi-même directement, et pourquoi.",
    criteria: [
      {
        id: "c1",
        description: "3 tâches réelles et distinctes sont listées, pas des exemples génériques inventés.",
      },
      {
        id: "c2",
        description: "Pour chaque tâche, un verdict honnête (gain réel / gain nul ou négatif) est donné, pas une réponse évasive.",
      },
      {
        id: "c3",
        description:
          "Au moins une justification s'appuie sur une caractéristique concrète de la tâche (longueur, familiarité, structure) plutôt qu'une impression vague.",
      },
      {
        id: "c4",
        description: "Le rapport conclut par un critère personnel pour décider à l'avenir quand recourir à l'IA sur ce type de tâche.",
      },
    ],
  },
  {
    id: "mesurer-le-gain-reel-quiz",
    skillId: "mesurer-le-gain-reel",
    type: "quiz",
    title: "Quiz — Mesurer le vrai gain de productivité",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Pourquoi certaines tâches ne bénéficient-elles pas réellement de l'IA, même si elle est utilisée ?",
        options: [
          "L'IA fait toujours gagner du temps sur tout, sans exception",
          "Le temps de formuler, attendre et corriger peut dépasser le temps de faire la tâche directement",
          "Ce n'est jamais le cas",
          "L'IA est toujours plus lente qu'un humain",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Pour quel type de tâche l'IA a-t-elle le plus de chances de faire gagner du temps ?",
        options: [
          "Une tâche courte et déjà bien maîtrisée",
          "Une tâche impliquant beaucoup de matière à traiter (long document) ou difficile à démarrer",
          "Aucune tâche",
          "Uniquement les tâches créatives",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Que recommande la leçon plutôt que de supposer que \"plus d'IA = plus de productivité\" ?",
        options: [
          "Utiliser l'IA sur absolument toutes les tâches sans distinction",
          "Évaluer honnêtement, tâche par tâche, si l'IA apporte un vrai gain",
          "Ne jamais utiliser l'IA",
          "Se fier uniquement à son impression générale sans vérifier",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "mesurer-le-gain-reel-challenge",
    skillId: "mesurer-le-gain-reel",
    type: "challenge",
    title: "Prédire puis vérifier le gain réel sur trois tâches",
    instructions:
      "Choisis trois tâches variées de ton quotidien. Avant de les faire, prédis pour chacune si l'IA fera gagner du temps ou ajoutera de la friction, et pourquoi. Fais ensuite chaque tâche avec l'IA en chronométrant, puis sans l'IA (ou estime honnêtement le temps sans IA). Compare tes prédictions aux résultats réels.",
    criteria: [
      {
        id: "c1",
        description:
          "Une prédiction explicite (gain ou friction attendue) est formulée pour chacune des trois tâches avant de les réaliser.",
      },
      {
        id: "c2",
        description:
          "Un temps réel (ou une estimation honnête et justifiée) est rapporté pour chaque tâche, avec et sans IA.",
      },
      {
        id: "c3",
        description: "Le rapport indique explicitement, pour chaque tâche, si la prédiction initiale était correcte.",
      },
      {
        id: "c4",
        description:
          "Une règle d'usage personnelle est ajustée sur la base d'au moins une prédiction qui s'est révélée fausse.",
      },
    ],
  },
];
