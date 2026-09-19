import type { Exercise } from "@/content/types";

export const agentsIaExercises: Exercise[] = [
  {
    id: "chatbot-vs-agent-guided",
    skillId: "chatbot-vs-agent",
    type: "guided",
    title: "Analyser une interaction récente",
    instructions:
      "Repense à une interaction récente avec un assistant IA, et détermine si elle relevait du chatbot ou de l'agent.",
    steps: [
      {
        id: "step-1",
        prompt:
          "Repense à une interaction récente avec un assistant IA. Était-ce plutôt une interaction \"chatbot\" (une question, une réponse) ou \"agent\" (plusieurs étapes autonomes vers un objectif) ?",
        expectedAnswer:
          "Il n'y a pas de bonne réponse unique : l'objectif est d'identifier honnêtement laquelle des deux catégories correspond, en te basant sur si l'assistant a pris plusieurs décisions autonomes ou juste répondu une fois.",
      },
      {
        id: "step-2",
        prompt:
          "Si c'était une interaction chatbot, comment aurait-elle pu être transformée en tâche d'agent (avec un objectif plus large et plusieurs étapes) ?",
        expectedAnswer:
          "L'idée est de formuler un objectif final plus ambitieux qui nécessiterait plusieurs étapes autonomes et des décisions intermédiaires, pas juste une question isolée.",
      },
      {
        id: "step-3",
        prompt: "Quel risque supplémentaire une tâche d'agent introduit-elle par rapport à une simple question à un chatbot ?",
        expectedAnswer:
          "Une bonne réponse évoque le fait qu'un agent prend plusieurs décisions autonomes sans validation à chaque étape, ce qui multiplie les occasions de dérive ou d'erreur par rapport à une seule réponse directement vérifiable.",
      },
    ],
  },
  {
    id: "chatbot-vs-agent-quiz",
    skillId: "chatbot-vs-agent",
    type: "quiz",
    title: "Quiz — Chatbot ou agent ?",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Quelle est la différence principale entre un chatbot et un agent ?",
        options: [
          "Un chatbot est toujours plus rapide",
          "Un agent poursuit un objectif de façon autonome sur plusieurs étapes, un chatbot répond à un message à la fois",
          "Un chatbot ne peut jamais halluciner",
          "Un agent n'utilise jamais de texte",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Quelle boucle caractérise le fonctionnement interne d'un agent ?",
        options: [
          "Écrire puis supprimer",
          "Observer, décider de la prochaine action, l'exécuter, observer le résultat, recommencer",
          "Attendre indéfiniment",
          "Répéter la même réponse en boucle",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question:
          "Un outil qui lit des fichiers, exécute des commandes et décide de la suite selon ce qu'il observe est un exemple de :",
        options: ["Chatbot classique", "Agent", "Simple moteur de recherche", "Fichier de configuration"],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "outils-dun-agent-quiz",
    skillId: "outils-dun-agent",
    type: "quiz",
    title: "Quiz — Les outils d'un agent",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question:
          "En quoi l'usage d'outils par un agent diffère-t-il de la simple disponibilité d'un outil vue en Context Engineering ?",
        options: [
          "Aucune différence",
          "L'agent décide activement quel outil utiliser, quand, et comment, au fil de sa progression vers un objectif",
          "Un agent n'a jamais accès à des outils",
          "Les outils ne servent à rien pour un agent",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Que se passe-t-il généralement quand un agent \"utilise un outil\" (function calling) ?",
        options: [
          "Rien, c'est juste une expression",
          "L'agent décrit l'action voulue, le système l'exécute réellement, puis renvoie le résultat à l'agent",
          "L'agent exécute directement du code sur ta machine sans système intermédiaire",
          "L'outil remplace complètement le modèle",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Pourquoi plus d'outils disponibles pour un agent signifie-t-il aussi plus de risques ?",
        options: [
          "Ce n'est jamais un risque",
          "Plus de capacités signifie aussi plus de façons possibles qu'un plan imparfait cause un dégât réel",
          "Les outils ralentissent toujours l'agent sans autre effet",
          "Les outils désactivent automatiquement les autres fonctions",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "objectifs-et-planification-autonomous",
    skillId: "objectifs-et-planification",
    type: "autonomous",
    title: "Donner un objectif clair à un agent",
    instructions:
      "Donne à un outil agentique réel (Claude Code, un agent de recherche, un assistant avec exécution de code, un node \"AI Agent\" dans n8n/Make...) un objectif à plusieurs étapes avec un critère de réussite clair. Observe comment il décompose la tâche, et rapporte ce que tu observes.",
    criteria: [
      {
        id: "c1",
        description: "L'objectif donné nécessite réellement plusieurs étapes, pas une tâche accomplie en une seule réponse.",
      },
      {
        id: "c2",
        description: "Le critère de réussite (\"ce qui compte comme terminé\") était formulé clairement avant de lancer la tâche.",
      },
      {
        id: "c3",
        description: "Le rapport décrit au moins 2 étapes concrètes que l'agent a effectivement suivies, pas juste le résultat final.",
      },
      {
        id: "c4",
        description: "Le rapport indique si le résultat final correspond bien au critère de réussite défini au départ.",
      },
    ],
  },
  {
    id: "objectifs-et-planification-quiz",
    skillId: "objectifs-et-planification",
    type: "quiz",
    title: "Quiz — Objectifs et planification",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Pourquoi un objectif vague donné à un agent produit-il des résultats imprévisibles ?",
        options: [
          "Ce n'est jamais un problème",
          "Sans critère clair de réussite, l'agent doit deviner ce qui compte comme \"terminé\"",
          "Les agents refusent toujours les objectifs vagues",
          "Un objectif vague accélère toujours la tâche",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Qu'est-ce qui différencie la boucle de planification d'un agent d'un scénario d'automatisation classique ?",
        options: [
          "Rien, c'est exactement identique",
          "La décision à chaque étape est prise par le modèle en temps réel plutôt que pré-programmée",
          "Un agent ne peut jamais avoir de boucle",
          "Les scénarios d'automatisation utilisent toujours un LLM",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Que doit inclure un bon objectif donné à un agent, en plus de la tâche elle-même ?",
        options: [
          "Rien de plus n'est nécessaire",
          "Un critère clair de ce qui compte comme réussite",
          "Le prix exact de chaque étape",
          "La météo du jour",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "supervision-agent-quiz",
    skillId: "supervision-agent",
    type: "quiz",
    title: "Quiz — Superviser un agent",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Pourquoi la supervision est-elle particulièrement importante pour un agent par rapport à un simple prompt ?",
        options: [
          "Ce n'est pas plus important",
          "Un agent prend plusieurs décisions autonomes d'affilée, ce qui multiplie les occasions de dérive avant qu'un humain ne s'en aperçoive",
          "Les agents ne peuvent jamais se tromper",
          "La supervision ralentit uniquement le travail sans bénéfice",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Que recommande la leçon plutôt que de vérifier seulement le résultat final d'une tâche longue confiée à un agent ?",
        options: [
          "Ne jamais vérifier",
          "Revoir le plan ou les actions intermédiaires avant que l'agent n'aille trop loin",
          "Attendre la fin sans aucune intervention possible",
          "Désactiver toute supervision pour aller plus vite",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Quel exemple concret illustre une supervision intégrée dans un outil agentique ?",
        options: [
          "Un outil qui exécute tout silencieusement sans jamais rien montrer",
          "Un outil qui montre ce qu'il s'apprête à faire et demande confirmation sur certaines actions",
          "Un outil qui supprime son propre historique",
          "Un outil sans aucune interface",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "validation-humaine-autonomous",
    skillId: "validation-humaine",
    type: "autonomous",
    title: "Définir une politique de validation",
    instructions:
      "Imagine que tu donnes à un agent IA l'accès à ta boîte mail, ton calendrier et un outil de paiement. Définis ta propre politique : classe au moins 6 actions concrètes que cet agent pourrait effectuer en 3 catégories (autonome / confirmation requise / jamais autorisée).",
    criteria: [
      {
        id: "c1",
        description: "Au moins 6 actions concrètes et réalistes sont listées, pas des catégories vagues.",
      },
      {
        id: "c2",
        description: "Chaque action est classée dans une des 3 catégories, avec une justification même brève.",
      },
      {
        id: "c3",
        description: "Au moins une action est classée \"jamais autorisée\", avec une raison claire liée à un risque irréversible ou financier.",
      },
      {
        id: "c4",
        description: "La politique est cohérente : deux actions de risque comparable ne sont pas classées différemment sans justification.",
      },
    ],
  },
  {
    id: "validation-humaine-quiz",
    skillId: "validation-humaine",
    type: "quiz",
    title: "Quiz — Validation humaine",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Pourquoi certaines actions d'un agent devraient-elles toujours nécessiter une confirmation humaine explicite ?",
        options: [
          "Ce n'est jamais nécessaire",
          "Parce que certaines actions sont irréversibles ou à fort enjeu (financier, données supprimées...)",
          "Parce que ça ralentit uniquement l'agent sans raison",
          "Parce que les agents ne peuvent pas exécuter d'actions",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Que signifie catégoriser les actions d'un agent en \"autonome / confirmation requise / jamais autorisée\" ?",
        options: [
          "Une perte de temps inutile",
          "Définir à l'avance quelles actions l'agent peut faire seul, lesquelles demandent ton accord, et lesquelles sont interdites",
          "Une fonctionnalité qui n'existe dans aucun outil réel",
          "Autoriser systématiquement toutes les actions",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Quel type d'action justifie le plus souvent une catégorie \"jamais autorisée sans confirmation\" ?",
        options: [
          "Une action réversible et sans conséquence",
          "Une action irréversible à fort enjeu (paiement, suppression de données, envoi public)",
          "Rechercher une information publique",
          "Reformuler une phrase",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
];
