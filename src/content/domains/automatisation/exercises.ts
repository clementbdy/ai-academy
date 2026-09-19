import type { Exercise } from "@/content/types";

export const automatisationExercises: Exercise[] = [
  {
    id: "declencheurs-actions-guided",
    skillId: "declencheurs-actions",
    type: "guided",
    title: "Concevoir une automatisation sur le papier",
    instructions:
      "Pense à une tâche répétitive que tu fais manuellement, et définis-en le déclencheur et les actions.",
    steps: [
      {
        id: "step-1",
        prompt:
          "Pense à une tâche répétitive que tu fais manuellement et que tu pourrais automatiser. Quel événement précis devrait déclencher cette automatisation ?",
        expectedAnswer:
          "Il n'y a pas de bonne réponse unique : l'important est d'identifier un déclencheur concret et précis (ex. \"réception d'un email avec telle pièce jointe\"), pas une idée vague comme \"quand j'ai besoin\".",
      },
      {
        id: "step-2",
        prompt: "Liste les actions qui devraient se déclencher automatiquement une fois ce déclencheur activé.",
        expectedAnswer:
          "Les actions doivent être concrètes et réalisables par un outil comme Make, n8n ou Zapier (envoyer un message, créer un enregistrement, mettre à jour un document) — pas une tâche qui nécessite un jugement humain complexe.",
      },
      {
        id: "step-3",
        prompt:
          "Cette automatisation aurait-elle besoin d'un déclencheur instantané, ou une vérification périodique suffirait-elle ? Pourquoi ?",
        expectedAnswer:
          "La réponse dépend de l'urgence réelle de la tâche : une notification urgente justifie un déclencheur instantané (webhook), une tâche non urgente peut se contenter d'une vérification périodique.",
      },
    ],
  },
  {
    id: "declencheurs-actions-quiz",
    skillId: "declencheurs-actions",
    type: "quiz",
    title: "Quiz — Déclencheurs et actions",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Quels sont les deux éléments de base de toute automatisation ?",
        options: [
          "Un titre et une description",
          "Un déclencheur et une ou plusieurs actions",
          "Un prix et une date",
          "Un modèle IA et un prompt",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Pourquoi identifier clairement le déclencheur avant de construire une automatisation ?",
        options: [
          "Ce n'est pas important",
          "Sans déclencheur précis, l'automatisation ne sait jamais quand se lancer",
          "Cela change uniquement le prix de l'outil",
          "Un déclencheur est toujours optionnel",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Quelle est la différence entre un déclencheur instantané et une vérification périodique ?",
        options: [
          "Aucune différence",
          "L'instantané réagit immédiatement à un événement, la vérification périodique vérifie à intervalles réguliers",
          "La vérification périodique est toujours plus rapide",
          "Un déclencheur instantané ne fonctionne que le weekend",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "variables-donnees-quiz",
    skillId: "variables-donnees",
    type: "quiz",
    title: "Quiz — Variables et transfert de données entre étapes",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Que représente une variable dans un scénario d'automatisation ?",
        options: [
          "Un texte fixe qui ne change jamais",
          "Une donnée produite par une étape précédente, réutilisable dans les étapes suivantes",
          "Le nom de l'outil utilisé",
          "Une erreur du scénario",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Pourquoi tester un scénario une fois avec des données réelles avant de le construire entièrement ?",
        options: [
          "Ce n'est jamais utile",
          "Pour voir les vrais noms et valeurs des champs disponibles comme variables",
          "Pour changer le déclencheur",
          "Pour supprimer le scénario",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Que permet l'usage de variables plutôt que du texte fixe dans une action ?",
        options: [
          "Rien de particulier",
          "D'adapter automatiquement le contenu à chaque exécution selon les données reçues",
          "De rendre le scénario plus lent uniquement",
          "De désactiver le déclencheur",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "conditions-boucles-autonomous",
    skillId: "conditions-boucles",
    type: "autonomous",
    title: "Concevoir un scénario avec condition et boucle",
    instructions:
      "Décris (sur le papier, ou construis-le réellement dans Make, n8n ou Zapier en version gratuite) un scénario qui traite plusieurs éléments un par un (boucle) ET qui applique une condition pour distinguer au moins deux cas différents.",
    criteria: [
      {
        id: "c1",
        description: "Le scénario décrit contient une vraie boucle (traitement de plusieurs éléments un par un), pas une action unique.",
      },
      {
        id: "c2",
        description:
          "Le scénario contient une condition claire qui distingue au moins deux cas (une branche différente selon la donnée).",
      },
      {
        id: "c3",
        description: "Le déclencheur du scénario est clairement identifié.",
      },
      {
        id: "c4",
        description: "Le rapport explique ce qui se passerait si la condition n'existait pas (quel problème ça évite).",
      },
    ],
  },
  {
    id: "conditions-boucles-quiz",
    skillId: "conditions-boucles",
    type: "quiz",
    title: "Quiz — Conditions et boucles",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "À quoi sert une boucle (itérateur) dans un scénario d'automatisation ?",
        options: [
          "À arrêter le scénario",
          "À traiter plusieurs éléments un par un plutôt qu'en un seul bloc",
          "À supprimer des données",
          "À changer le déclencheur automatiquement",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "À quoi sert une condition (router, filtre) ?",
        options: [
          "À dupliquer systématiquement chaque action",
          "À distinguer différents cas et appliquer un traitement différent selon la donnée reçue",
          "À ralentir volontairement le scénario",
          "À remplacer le déclencheur",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Quel est un piège courant si on oublie de filtrer les données non pertinentes ?",
        options: [
          "Aucun risque",
          "Des actions coûteuses ou inutiles s'exécutent sur chaque donnée, même non pertinente",
          "Le scénario s'arrête automatiquement",
          "Les variables disparaissent",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "webhooks-api-quiz",
    skillId: "webhooks-api",
    type: "quiz",
    title: "Quiz — Webhooks et API",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Qu'est-ce qu'un webhook ?",
        options: [
          "Un type de virus informatique",
          "Une URL qu'un service externe appelle pour déclencher instantanément une automatisation",
          "Un langage de programmation",
          "Un format de fichier image",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Que se passe-t-il concrètement derrière la plupart des actions dans Make, n8n ou Zapier ?",
        options: [
          "Rien de technique, c'est magique",
          "Un appel à l'API du service concerné, avec des données généralement en JSON",
          "Un email envoyé manuellement par un humain",
          "Un fichier Excel modifié à la main",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Que permet une connexion API personnalisée (HTTP) quand un service n'a pas d'intégration prête à l'emploi ?",
        options: [
          "Rien, il faut abandonner l'automatisation",
          "De se connecter quand même à ce service via son API documentée",
          "De créer automatiquement une intégration officielle",
          "De changer complètement d'outil d'automatisation",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "gestion-erreurs-automatisation-autonomous",
    skillId: "gestion-erreurs-automatisation",
    type: "autonomous",
    title: "Anticiper les échecs d'une automatisation",
    instructions:
      "Reprends un scénario d'automatisation (réel, ou celui de l'exercice précédent). Identifie au moins 2 façons concrètes dont il pourrait échouer silencieusement, et propose pour chacune une mesure de gestion d'erreur (notification, retry, valeur par défaut...).",
    criteria: [
      {
        id: "c1",
        description: "Au moins 2 causes d'échec concrètes et distinctes sont identifiées, pas une formulation vague.",
      },
      {
        id: "c2",
        description: "Pour chaque cause identifiée, une mesure de gestion d'erreur précise est proposée.",
      },
      {
        id: "c3",
        description:
          "Au moins une mesure proposée inclut une notification ou un moyen d'être informé de l'échec, pas seulement un retry.",
      },
      {
        id: "c4",
        description:
          "Le rapport explique comment il testerait concrètement que la gestion d'erreur fonctionne avant de faire confiance à l'automatisation.",
      },
    ],
  },
  {
    id: "gestion-erreurs-automatisation-quiz",
    skillId: "gestion-erreurs-automatisation",
    type: "quiz",
    title: "Quiz — Gestion des erreurs dans une automatisation",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Pourquoi la gestion des erreurs est-elle particulièrement importante dans une automatisation ?",
        options: [
          "Ce n'est pas important, les automatisations ne plantent jamais",
          "Parce qu'elle tourne sans surveillance humaine, un échec peut passer inaperçu longtemps",
          "Parce que ça change la couleur de l'interface",
          "Uniquement pour des raisons esthétiques",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Que permet un gestionnaire d'erreur (error handler) dans un scénario ?",
        options: [
          "Rien de particulier",
          "De capturer un échec et de réagir (notification, valeur par défaut) plutôt que d'échouer silencieusement",
          "De supprimer automatiquement le scénario",
          "De doubler la vitesse d'exécution",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Que recommande la leçon avant de faire confiance à une automatisation qui tourne sans surveillance ?",
        options: [
          "Ne jamais la tester",
          "La tester avec des données volontairement problématiques (vides, mal formées) au préalable",
          "L'activer directement en production sans test",
          "Supprimer toute gestion d'erreur pour aller plus vite",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
];
