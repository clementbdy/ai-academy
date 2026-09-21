import type { Exercise } from "@/content/types";

export const iaEntrepreneuriatExercises: Exercise[] = [
  {
    id: "recherche-didee-et-de-marche-autonomous",
    skillId: "recherche-didee-et-de-marche",
    type: "autonomous",
    title: "Étudier un marché et vérifier une donnée chiffrée",
    instructions:
      "Choisis une idée de produit/service (réelle ou fictive). Utilise un assistant avec recherche web pour identifier 2 concurrents réels et une donnée chiffrée sur le marché. Vérifie cette donnée chiffrée via une source indépendante avant de la considérer fiable.",
    criteria: [
      {
        id: "c1",
        description: "Au moins 2 concurrents réels et vérifiables sont identifiés, pas des exemples inventés.",
      },
      {
        id: "c2",
        description: "Une donnée chiffrée précise (taille de marché, statistique) a été demandée à l'assistant.",
      },
      {
        id: "c3",
        description: "Cette donnée chiffrée a été vérifiée via une source indépendante, pas simplement acceptée telle quelle.",
      },
      {
        id: "c4",
        description: "Le rapport indique si la donnée était exacte, approximative, ou introuvable à la vérification.",
      },
    ],
  },
  {
    id: "recherche-didee-et-de-marche-quiz",
    skillId: "recherche-didee-et-de-marche",
    type: "quiz",
    title: "Quiz — Rechercher une idée et étudier son marché avec l'IA",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Quelle est une erreur fréquente au début d'un projet entrepreneurial ?",
        options: [
          "Vérifier trop de sources",
          "Partir d'une solution plutôt que d'un vrai problème identifié",
          "Étudier la concurrence",
          "Parler à des clients potentiels",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Pourquoi l'existence d'une solution concurrente, même imparfaite, est-elle plutôt un bon signe ?",
        options: [
          "Ce n'est jamais un bon signe",
          "Elle prouve que le problème est pris au sérieux par d'autres",
          "Elle empêche toute nouvelle entreprise de réussir",
          "Elle n'a aucun rapport avec le problème",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Que faut-il faire avant de s'appuyer sur une donnée chiffrée de marché citée par un assistant IA ?",
        options: [
          "L'utiliser directement sans vérification",
          "La vérifier via une source indépendante",
          "L'ignorer systématiquement",
          "Demander à un autre assistant la même question sans vérifier ailleurs",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "definir-cible-et-offre-guided",
    skillId: "definir-cible-et-offre",
    type: "guided",
    title: "Passer d'une audience vague à une cible précise",
    instructions: "Prends une idée de produit/service et affine sa cible et son offre avec l'aide d'un assistant.",
    steps: [
      {
        id: "step-1",
        prompt: "Pense à une idée de produit/service (la tienne ou une idée fictive). Décris son client type actuel en une phrase.",
        expectedAnswer:
          "Il n'y a pas de bonne réponse unique : l'important est d'observer si la première description est vague (\"tout le monde qui a ce besoin\") ou déjà précise.",
      },
      {
        id: "step-2",
        prompt:
          "Demande à un assistant IA de t'aider à préciser ce client type : ses contraintes concrètes, ce qu'il a déjà essayé pour résoudre son problème, pourquoi ça ne lui suffit pas.",
        expectedAnswer:
          "Une bonne réponse contient des détails concrets et spécifiques sur le client type, pas une description encore générique après l'échange.",
      },
      {
        id: "step-3",
        prompt: "Reformule ton offre comme réponse directe au problème précis de ce client type, pas comme une liste de fonctionnalités.",
        expectedAnswer:
          "L'offre reformulée doit parler du problème et du résultat pour le client, pas seulement de ce que le produit fait techniquement.",
      },
    ],
  },
  {
    id: "definir-cible-et-offre-quiz",
    skillId: "definir-cible-et-offre",
    type: "quiz",
    title: "Quiz — Définir sa cible et son offre avec l'IA",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Pourquoi cibler \"tout le monde\" dilue-t-il un message marketing ?",
        options: [
          "Ce n'est jamais un problème",
          "Un message qui s'adresse à tous ne répond précisément au problème de personne en particulier",
          "Cibler tout le monde est toujours la meilleure stratégie",
          "Cela n'a aucun effet sur l'efficacité du message",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Comment une offre devrait-elle être formulée plutôt que comme une liste de fonctionnalités ?",
        options: [
          "Toujours en termes techniques uniquement",
          "Comme une réponse directe au problème précis du client type",
          "De façon la plus vague possible",
          "Uniquement par le prix",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "À quoi peut servir de demander à un assistant IA de jouer le rôle du client type ?",
        options: [
          "À rien de particulier",
          "À obtenir un test rapide et imparfait mais révélateur avant d'investir du temps dans le développement",
          "À remplacer complètement de vrais retours clients",
          "À valider définitivement une offre sans autre vérification",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "construire-un-mvp-autonomous",
    skillId: "construire-un-mvp",
    type: "autonomous",
    title: "Définir la version la plus simple à tester",
    instructions:
      "Prends une idée de produit/service et définis la version la plus simple possible qui permettrait de tester son hypothèse centrale auprès de 3 vraies personnes, sans rien construire de technique dans un premier temps.",
    criteria: [
      {
        id: "c1",
        description: "L'hypothèse centrale à tester est formulée clairement et explicitement, pas implicite.",
      },
      {
        id: "c2",
        description: "La version proposée est réellement minimale (pas de fonctionnalités superflues ajoutées \"au cas où\").",
      },
      {
        id: "c3",
        description: "La version proposée ne nécessite aucun développement technique pour être testée une première fois.",
      },
      {
        id: "c4",
        description: "Le rapport précise comment il saurait si l'hypothèse est validée ou invalidée après le test.",
      },
    ],
  },
  {
    id: "construire-un-mvp-quiz",
    skillId: "construire-un-mvp",
    type: "quiz",
    title: "Quiz — Construire un MVP avec l'aide de l'IA",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Qu'est-ce qu'un MVP ?",
        options: [
          "Le produit final complet",
          "La version minimale qui teste l'hypothèse centrale d'une offre auprès de vrais utilisateurs",
          "Un document marketing",
          "Une automatisation complexe",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Pourquoi un premier MVP n'a-t-il souvent pas besoin d'être automatisé ou codé ?",
        options: [
          "Ce n'est jamais possible autrement",
          "Un processus manuel assisté par IA peut suffire à valider l'hypothèse avant de construire quoi que ce soit de technique",
          "Un MVP doit toujours être un logiciel complexe",
          "L'automatisation est obligatoire dès le début",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Quel piège la rapidité de production par IA rend-elle plus facile ?",
        options: [
          "Aucun piège particulier",
          "Construire trop avant de vérifier que quelqu'un veut réellement ce qui est fabriqué",
          "Tester trop souvent ses hypothèses",
          "Parler à trop de clients potentiels",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "acquisition-et-contenu-quiz",
    skillId: "acquisition-et-contenu",
    type: "quiz",
    title: "Quiz — Acquérir ses premiers clients avec du contenu assisté par IA",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Quel type de contenu est le plus efficace pour acquérir des clients selon la leçon ?",
        options: [
          "Le plus créatif possible sans lien avec le client",
          "Celui qui répond directement au problème identifié lors de l'étude de marché",
          "Le plus long possible",
          "Un contenu générique adapté à tout le monde",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Que permet de réutiliser la recherche de marché faite plus tôt pour créer du contenu ?",
        options: [
          "Rien, il faut repartir de zéro",
          "Une matière première concrète (questions réelles de la cible) plutôt que de deviner un sujet",
          "Uniquement les noms des concurrents",
          "Le prix du produit uniquement",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Que faut-il garder à l'esprit sur le délai de l'acquisition par le contenu ?",
        options: [
          "Elle donne des résultats instantanés grâce à l'IA",
          "Elle prend du temps à porter ses fruits, l'IA accélère la production mais pas la patience nécessaire",
          "Elle ne fonctionne jamais",
          "Elle remplace totalement le besoin d'une offre pertinente",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "automatiser-les-operations-autonomous",
    skillId: "automatiser-les-operations",
    type: "autonomous",
    title: "Décider si un processus est prêt à être automatisé",
    instructions:
      "Identifie un processus que tu as déjà réalisé manuellement plusieurs fois avec succès (le tien, ou celui d'une idée d'entreprise fictive). Détermine s'il est prêt à être automatisé, et si oui avec quelle brique (automatisation simple ou agent).",
    criteria: [
      {
        id: "c1",
        description: "Le processus choisi a réellement été réalisé manuellement plusieurs fois, pas un processus encore hypothétique.",
      },
      {
        id: "c2",
        description: "Le rapport justifie explicitement pourquoi ce processus est (ou n'est pas encore) prêt à être automatisé.",
      },
      {
        id: "c3",
        description: "Le choix entre automatisation simple et agent est justifié par la nature du processus (stable vs décisions variables).",
      },
      {
        id: "c4",
        description: "Le rapport identifie un risque concret si ce processus était automatisé trop tôt, avant d'être suffisamment éprouvé.",
      },
    ],
  },
  {
    id: "automatiser-les-operations-quiz",
    skillId: "automatiser-les-operations",
    type: "quiz",
    title: "Quiz — Automatiser les opérations du quotidien",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Quel processus est le plus sûr à automatiser en premier ?",
        options: [
          "Un processus encore jamais testé manuellement",
          "Un processus déjà éprouvé manuellement plusieurs fois avec succès",
          "N'importe quel processus, peu importe son historique",
          "Uniquement les processus les plus complexes",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Pourquoi automatiser un processus encore incertain est-il risqué ?",
        options: [
          "Ce n'est jamais risqué",
          "Cela fige une méthode potentiellement mauvaise avant qu'elle ait pu être affinée",
          "L'automatisation corrige automatiquement les erreurs de méthode",
          "Un processus incertain devient toujours meilleur une fois automatisé",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Comment choisir entre automatisation simple et agent pour les opérations d'une entreprise ?",
        options: [
          "Toujours choisir l'agent, c'est plus impressionnant",
          "Selon que le processus est stable et répétitif (automatisation) ou qu'il nécessite des décisions variables (agent)",
          "Le choix n'a aucune importance",
          "Toujours choisir l'automatisation, jamais l'agent",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "automatiser-les-operations-challenge",
    skillId: "automatiser-les-operations",
    type: "challenge",
    title: "Trancher automatisation simple vs agent pour trois processus",
    instructions:
      "Liste trois processus opérationnels réels ou réalistes pour un petit projet ou une petite activité (réponse aux emails, relance clients, veille...). Pour chacun, détermine s'il est plus adapté à une automatisation simple (règles fixes) ou à un agent (décisions variables), avec justification — et vérifie d'abord qu'il a déjà été fait manuellement avec succès plusieurs fois.",
    criteria: [
      {
        id: "c1",
        description: "Trois processus opérationnels réels ou réalistes et clairement distincts sont listés.",
      },
      {
        id: "c2",
        description:
          "Pour chacun, le rapport vérifie explicitement qu'il a déjà été réalisé manuellement avec succès avant d'envisager l'automatisation.",
      },
      {
        id: "c3",
        description:
          "Le choix entre automatisation simple et agent est justifié par la stabilité ou la variabilité des décisions requises, pas arbitraire.",
      },
      {
        id: "c4",
        description: "Le rapport identifie lequel des trois processus est prioritaire à automatiser en premier, et pourquoi.",
      },
    ],
  },
];
