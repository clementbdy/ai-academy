import type { Exercise } from "@/content/types";

export const systemesIaExercises: Exercise[] = [
  {
    id: "architecture-dun-systeme-ia-guided",
    skillId: "architecture-dun-systeme-ia",
    type: "guided",
    title: "Esquisser un système IA en quatre briques",
    instructions:
      "Pense à un système IA que tu aimerais construire un jour (même approximatif), et décompose-le en ses quatre briques génériques.",
    steps: [
      {
        id: "step-1",
        prompt: "Identifie sa source de données : d'où viennent les informations dont il a besoin ?",
        expectedAnswer:
          "Il n'y a pas de bonne réponse unique : l'important est d'avoir identifié une vraie source concrète (documents, base de données, aucune si le système n'en a pas besoin), pas une réponse vague.",
      },
      {
        id: "step-2",
        prompt: "Identifie sa couche de décision : simple prompt, automatisation, ou agent ? Pourquoi ce choix ?",
        expectedAnswer:
          "La justification doit s'appuyer sur la nature du besoin (ponctuel, répétitif et stable, ou variable) plutôt qu'une préférence arbitraire.",
      },
      {
        id: "step-3",
        prompt: "Identifie sa sortie : comment le résultat arrive-t-il concrètement à l'utilisateur final ?",
        expectedAnswer:
          "Une bonne réponse précise un canal concret (message, document, notification, action directe) plutôt qu'une réponse vague comme \"ça donne un résultat\".",
      },
    ],
  },
  {
    id: "architecture-dun-systeme-ia-quiz",
    skillId: "architecture-dun-systeme-ia",
    type: "quiz",
    title: "Quiz — Penser en système plutôt qu'en outil isolé",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Quelles sont les 4 grandes briques génériques d'un système IA ?",
        options: [
          "Prix, date, nom, couleur",
          "Source de données, couche de décision, outils/API, sortie",
          "Uniquement le modèle utilisé",
          "Serveur, client, base de données, réseau",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Pourquoi esquisser les briques d'un système avant de commencer à le construire ?",
        options: [
          "Ce n'est jamais utile",
          "Ça révèle souvent une brique inutile ou manquante avant d'avoir configuré quoi que ce soit",
          "Ça remplace le besoin de tester le système",
          "Ça change automatiquement le prix des outils utilisés",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Un système IA se limite-t-il généralement à un seul outil isolé ?",
        options: [
          "Oui, toujours",
          "Non, il combine souvent plusieurs briques (données, décision, outils, sortie)",
          "Un système IA n'utilise jamais d'outils",
          "Un système IA n'a jamais de sortie",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "choisir-la-bonne-brique-autonomous",
    skillId: "choisir-la-bonne-brique",
    type: "autonomous",
    title: "Classer des besoins réels dans la bonne brique",
    instructions:
      "Prends 4 besoins réels ou imaginés (les tiens ou inventés) et classe chacun dans la brique la plus adaptée (simple prompt / automatisation / RAG / agent), en justifiant.",
    criteria: [
      {
        id: "c1",
        description: "Les 4 besoins sont concrets et distincts, pas des exemples vagues interchangeables.",
      },
      {
        id: "c2",
        description:
          "Chaque besoin est classé dans une brique précise, avec une justification qui s'appuie sur sa nature (ponctuel, répétitif, base de connaissances, décisions variables).",
      },
      {
        id: "c3",
        description: "Au moins un besoin illustre un cas où une brique plus simple suffit, pour éviter la sur-ingénierie.",
      },
      {
        id: "c4",
        description: "Le rapport identifie si un des besoins nécessiterait en réalité de combiner plusieurs briques plutôt qu'une seule.",
      },
    ],
  },
  {
    id: "choisir-la-bonne-brique-quiz",
    skillId: "choisir-la-bonne-brique",
    type: "quiz",
    title: "Quiz — Choisir la bonne brique pour le bon besoin",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Quelle brique convient le mieux à une tâche répétitive et stable avec un chemin logique fixe ?",
        options: ["Un agent totalement autonome", "Une automatisation", "Rien n'est adapté", "Un système RAG uniquement"],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Quelle brique convient le mieux à une tâche qui demande des décisions variables étape par étape vers un objectif ?",
        options: ["Un simple prompt isolé", "Un agent", "Une automatisation figée", "Aucune brique ne convient"],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Quelle est l'erreur fréquente à éviter dans le choix d'une brique ?",
        options: [
          "Toujours choisir la brique la plus simple possible",
          "Utiliser une brique plus complexe qu'un agent autonome pour un besoin qui serait mieux servi par une automatisation simple et prévisible",
          "Ne jamais combiner plusieurs briques",
          "Éviter systématiquement les automatisations",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "connecter-les-briques-quiz",
    skillId: "connecter-les-briques",
    type: "quiz",
    title: "Quiz — Faire communiquer les briques entre elles",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Par quel mécanisme les briques d'un système IA communiquent-elles le plus souvent entre elles ?",
        options: [
          "Uniquement par téléphone",
          "Des API/webhooks échangeant des données structurées, souvent en JSON",
          "Elles ne communiquent jamais entre elles",
          "Uniquement par copier-coller manuel",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Pourquoi vérifier le format exact des données à chaque jonction entre deux briques ?",
        options: [
          "Ce n'est jamais nécessaire",
          "Une donnée mal formée à une jonction peut casser toute la chaîne, même si chaque brique fonctionne bien isolément",
          "Le format n'a aucune importance",
          "Cela ralentit uniquement le système sans autre effet",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Que faut-il vérifier en plus du bon fonctionnement de chaque brique isolément ?",
        options: [
          "Rien de plus n'est nécessaire",
          "Le fonctionnement réel des jonctions entre les briques",
          "Uniquement le prix total du système",
          "La couleur de l'interface",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "systemes-multimodaux-autonomous",
    skillId: "systemes-multimodaux",
    type: "autonomous",
    title: "Concevoir un enchaînement multimodal",
    instructions:
      "Conçois (sur le papier, ou teste-le réellement avec des outils IA) un enchaînement d'au moins 3 étapes qui change de modalité ou de forme de données à chaque étape (ex. audio → texte → donnée structurée → action).",
    criteria: [
      {
        id: "c1",
        description: "L'enchaînement comporte au moins 3 étapes réelles.",
      },
      {
        id: "c2",
        description: "Au moins un changement de modalité (audio/image/texte) est présent entre deux étapes consécutives.",
      },
      {
        id: "c3",
        description: "Chaque étape précise clairement ce qu'elle reçoit en entrée et ce qu'elle produit en sortie.",
      },
      {
        id: "c4",
        description: "Le rapport identifie où, dans cet enchaînement, une erreur à une étape casserait les étapes suivantes.",
      },
    ],
  },
  {
    id: "systemes-multimodaux-quiz",
    skillId: "systemes-multimodaux",
    type: "quiz",
    title: "Quiz — Construire un système multimodal",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Qu'est-ce qui caractérise un système multimodal, au-delà de \"utiliser plusieurs types de fichiers\" ?",
        options: [
          "Rien de particulier",
          "Un enchaînement de transformations où la sortie d'une étape devient l'entrée structurée de la suivante, en changeant parfois de modalité",
          "Un système qui n'utilise que du texte",
          "Un système sans aucune étape",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question:
          "Dans l'exemple \"mémo vocal → transcription → extraction de tâches → création d'événements\", combien de changements de modalité ou de forme de données observe-t-on au moins ?",
        options: [
          "Aucun",
          "Plusieurs (audio vers texte, texte vers donnée structurée, donnée vers action)",
          "Un seul, toujours le même",
          "Ce n'est pas un système multimodal",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Pourquoi préciser clairement l'entrée et la sortie de chaque étape d'un système multimodal ?",
        options: [
          "Ce n'est jamais utile",
          "Pour repérer où une erreur à une étape casserait les étapes suivantes",
          "Pour ralentir volontairement le système",
          "Parce que les étapes n'ont jamais d'entrée ni de sortie",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "fiabiliser-un-systeme-complet-autonomous",
    skillId: "fiabiliser-un-systeme-complet",
    type: "autonomous",
    title: "Fiabiliser un système combiné",
    instructions:
      "Reprends un système que tu as conçu dans un exercice précédent (ou imagines-en un combinant au moins 2 briques). Identifie 3 points de jonction ou d'échec possibles, et pour chacun, une mesure de fiabilisation concrète (gestion d'erreur, supervision, validation humaine).",
    criteria: [
      {
        id: "c1",
        description:
          "3 points de jonction/échec concrets et distincts sont identifiés, liés à la combinaison des briques, pas à une seule brique isolée.",
      },
      {
        id: "c2",
        description: "Pour chaque point, une mesure de fiabilisation précise est proposée, pas une réponse générique.",
      },
      {
        id: "c3",
        description: "Au moins une mesure concerne une action à fort enjeu nécessitant une validation humaine explicite.",
      },
      {
        id: "c4",
        description: "Le rapport explique comment il testerait le système de bout en bout avant de le considérer prêt, pas seulement brique par brique.",
      },
    ],
  },
  {
    id: "fiabiliser-un-systeme-complet-quiz",
    skillId: "fiabiliser-un-systeme-complet",
    type: "quiz",
    title: "Quiz — Fiabiliser un système complet",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Pourquoi les échecs peuvent-ils se multiplier quand plusieurs briques sont combinées dans un système ?",
        options: [
          "Ce n'est jamais le cas",
          "Chaque jonction entre deux briques est un point supplémentaire où une erreur peut se produire",
          "Combiner des briques élimine tous les risques",
          "Un système combiné ne peut jamais échouer",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Que faut-il faire avant de considérer un système complet comme prêt ?",
        options: [
          "Vérifier uniquement chaque brique séparément",
          "Tester le système de bout en bout avec un cas réel, pas seulement brique par brique",
          "Ne jamais le tester",
          "Supprimer toute gestion d'erreur pour aller plus vite",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Que recommande la leçon à mesure qu'un système combine davantage de briques ?",
        options: [
          "Moins de rigueur sur les points de jonction",
          "Plus de rigueur sur les points de jonction et la supervision globale, pas moins",
          "Aucune vérification supplémentaire n'est nécessaire",
          "Supprimer la validation humaine pour simplifier",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
];
