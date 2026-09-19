import type { Exercise } from "@/content/types";

export const contextEngineeringExercises: Exercise[] = [
  {
    id: "instructions-personnalisees-guided",
    skillId: "instructions-personnalisees",
    type: "guided",
    title: "Rédiger tes propres instructions permanentes",
    instructions:
      "Identifie une règle que tu répètes dans presque tous tes prompts, et transforme-la en instruction permanente.",
    steps: [
      {
        id: "step-1",
        prompt:
          "Identifie une règle que tu répètes dans presque tous tes prompts actuellement (ton, format, niveau de détail...).",
        expectedAnswer:
          "Il n'y a pas de bonne réponse unique : l'important est d'identifier une règle réellement récurrente dans tes usages, pas une contrainte ponctuelle propre à une seule tâche.",
      },
      {
        id: "step-2",
        prompt:
          "Rédige cette règle comme une instruction permanente que tu pourrais coller dans les réglages de ton assistant.",
        expectedAnswer:
          "L'instruction doit être formulée comme une règle générale et durable (\"réponds toujours...\", \"utilise toujours...\"), pas comme une demande ponctuelle liée à une seule tâche.",
      },
      {
        id: "step-3",
        prompt:
          "Y a-t-il une tâche pour laquelle cette règle permanente serait gênante ? Comment gérerais-tu cette exception ?",
        expectedAnswer:
          "Le but est de reconnaître qu'aucune règle permanente n'est universelle : il faut soit accepter de la surcharger ponctuellement dans le prompt pour l'exception, soit choisir dès le départ une règle plus nuancée.",
      },
    ],
  },
  {
    id: "instructions-personnalisees-quiz",
    skillId: "instructions-personnalisees",
    type: "quiz",
    title: "Quiz — Instructions personnalisées et system prompt",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "À quoi servent les instructions personnalisées d'un assistant IA ?",
        options: [
          "À répondre à une seule question précise",
          "À appliquer automatiquement une règle à toutes les futures conversations",
          "À supprimer l'historique des conversations",
          "À changer le modèle utilisé",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Quel type de règle a sa place dans des instructions permanentes ?",
        options: [
          "Une contrainte propre à une seule tâche ponctuelle",
          "Une règle qui revient dans presque toutes les tâches (ton, format...)",
          "Un mot de passe",
          "Une donnée personnelle sensible",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question:
          "Que risque-t-on à mettre une contrainte ponctuelle (ex. \"réponds en 50 mots\") en instruction permanente ?",
        options: [
          "Rien, c'est toujours une bonne idée",
          "Obtenir des réponses tronquées sur des sujets qui mériteraient d'être développés",
          "Que l'assistant change de langue",
          "Que la mémoire soit désactivée",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "fournir-des-documents-quiz",
    skillId: "fournir-des-documents",
    type: "quiz",
    title: "Quiz — Fournir des documents comme contexte",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question:
          "Pourquoi envoyer directement un document plutôt que de le résumer de mémoire avant de poser une question ?",
        options: [
          "Parce que c'est plus rapide à taper",
          "Parce que chaque étape de résumé manuel peut perdre ou déformer une information",
          "Parce que le modèle refuse les documents",
          "Parce que ça change le prix de la requête uniquement",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Que faut-il privilégier face à un document très long dont seule une section t'intéresse ?",
        options: [
          "Envoyer tout le document en demandant de se concentrer sur la section utile",
          "Envoyer uniquement la section pertinente",
          "Ne rien envoyer du tout",
          "Le traduire d'abord dans une autre langue",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question:
          "Pourquoi structurer avec des délimiteurs (ex. balises) un message qui mélange instructions et document ?",
        options: [
          "Pour faire joli",
          "Pour éviter que le modèle confonde une phrase du document avec une instruction",
          "Parce que c'est obligatoire techniquement",
          "Pour réduire le nombre de tokens à zéro",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "memoire-assistant-autonomous",
    skillId: "memoire-assistant",
    type: "autonomous",
    title: "Auditer ta mémoire d'assistant",
    instructions:
      "Consulte ce qu'un assistant IA que tu utilises régulièrement a mémorisé sur toi (dans ses réglages de mémoire, si disponible). Rapporte ce que tu trouves et évalue si c'est toujours exact et utile.",
    criteria: [
      {
        id: "c1",
        description:
          "Le rapport liste au moins 3 éléments concrets mémorisés, ou constate honnêtement qu'aucune mémoire n'était activée/disponible.",
      },
      {
        id: "c2",
        description: "Pour chaque élément listé, le rapport indique s'il est toujours exact aujourd'hui.",
      },
      {
        id: "c3",
        description:
          "Le rapport identifie au moins un risque concret de mélange de contexte si cette mémoire s'applique à plusieurs sujets différents.",
      },
      {
        id: "c4",
        description: "Une action concrète est proposée (garder, corriger, ou supprimer un élément mémorisé).",
      },
    ],
  },
  {
    id: "memoire-assistant-quiz",
    skillId: "memoire-assistant",
    type: "quiz",
    title: "Quiz — Mémoire et continuité entre conversations",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Par défaut, que retient un assistant IA d'une conversation à l'autre ?",
        options: [
          "Tout, automatiquement, pour toujours",
          "Rien, sauf fonctionnalité de mémoire persistante explicitement activée",
          "Seulement les questions posées le matin",
          "Cela dépend de la météo",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Quel est un risque concret d'une mémoire persistante mal gérée ?",
        options: [
          "Aucun risque, la mémoire est toujours fiable",
          "Une information obsolète peut continuer à influencer les réponses silencieusement",
          "Elle rend le modèle plus lent uniquement",
          "Elle supprime automatiquement l'historique",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Que recommande la leçon face à une mémoire générale utilisée pour des sujets très différents ?",
        options: [
          "Ne jamais l'utiliser",
          "Cloisonner volontairement les contextes qui n'ont pas à se mélanger",
          "L'ignorer complètement",
          "La partager avec d'autres utilisateurs",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "bases-de-connaissances-quiz",
    skillId: "bases-de-connaissances",
    type: "quiz",
    title: "Quiz — Bases de connaissances et projets",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "À quoi sert un espace de type \"projet\" (Projects, Gems...) ?",
        options: [
          "À supprimer l'historique des conversations",
          "À attacher des documents de référence qui s'appliquent à toutes les conversations de cet espace",
          "À changer de modèle automatiquement",
          "À limiter le nombre de messages",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Quand un projet dédié est-il plus adapté qu'un document collé ponctuellement ?",
        options: [
          "Jamais, un document collé suffit toujours",
          "Quand le sujet revient régulièrement avec les mêmes références",
          "Uniquement pour les tâches créatives",
          "Uniquement si le document fait moins d'une page",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Quel est le piège principal d'une base de connaissances mal entretenue ?",
        options: [
          "Elle prend trop de place sur le disque",
          "Elle devient une source d'erreurs si elle n'est jamais mise à jour",
          "Elle ralentit uniquement l'interface",
          "Elle empêche de créer de nouveaux projets",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "contexte-outils-autonomous",
    skillId: "contexte-outils",
    type: "autonomous",
    title: "Vérifier qu'un outil est réellement utilisé",
    instructions:
      "Choisis un outil précis (recherche web, exécution de code...) sur un assistant IA. Pose une question qui nécessite clairement cet outil pour être bien répondue, et vérifie si l'outil a réellement été utilisé (sources citées, calcul exact, etc.).",
    criteria: [
      {
        id: "c1",
        description:
          "La question posée nécessite clairement l'outil testé pour être bien répondue (pas une question à laquelle le modèle peut répondre sans lui).",
      },
      {
        id: "c2",
        description:
          "Le rapport indique un signal concret observé (présence ou absence de sources vérifiables, exactitude d'un calcul...), pas juste une impression générale.",
      },
      {
        id: "c3",
        description: "Le rapport conclut explicitement si l'outil a été utilisé ou non.",
      },
      {
        id: "c4",
        description: "Le rapport propose ce qu'il faut faire différemment si l'outil n'était pas actif comme attendu.",
      },
    ],
  },
  {
    id: "contexte-outils-quiz",
    skillId: "contexte-outils",
    type: "quiz",
    title: "Quiz — Contexte des outils disponibles",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question:
          "Pourquoi les outils activés (recherche web, exécution de code...) font-ils partie du contexte du modèle ?",
        options: [
          "Parce qu'ils changent le prix uniquement",
          "Parce qu'ils déterminent ce que l'assistant peut réellement faire au moment de répondre",
          "Parce qu'ils sont toujours tous activés par défaut",
          "Parce que ça n'a aucun effet sur la réponse",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Quel est un signal qu'un outil de recherche web n'a probablement pas été réellement utilisé ?",
        options: [
          "La réponse cite plusieurs sources précises et récentes",
          "La réponse semble générique et ne cite aucune source vérifiable",
          "La réponse est très longue",
          "La réponse est en français",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Que recommande la leçon avant de compter sur une capacité précise d'un assistant ?",
        options: [
          "Supposer qu'il peut tout faire comme un autre assistant",
          "Vérifier que cette capacité est bien activée dans l'outil utilisé",
          "Toujours désactiver tous les outils",
          "Changer de langue de conversation",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
];
