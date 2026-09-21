import type { Exercise } from "@/content/types";

export const promptEngineeringExercises: Exercise[] = [
  {
    id: "role-contexte-objectif-guided",
    skillId: "role-contexte-objectif",
    type: "guided",
    title: "Retravailler un prompt vague",
    instructions:
      "Reprends un prompt vague que tu as déjà utilisé (ou imagines-en un, ex. \"Aide-moi avec ce rapport\"), puis retravaille-le en trois étapes.",
    steps: [
      {
        id: "step-1",
        prompt: "Écris le prompt vague de départ, sans rôle, contexte ni objectif précis.",
        expectedAnswer:
          "Il n'y a pas de bonne ou mauvaise réponse ici : l'important est d'avoir un vrai prompt de départ vague, pour pouvoir mesurer la différence à l'étape suivante.",
      },
      {
        id: "step-2",
        prompt: "Réécris-le en ajoutant explicitement un rôle, un contexte et un objectif.",
        expectedAnswer:
          "Ta version doit répondre clairement aux trois questions : qui doit répondre (rôle), quelles informations de fond il connaît (contexte), et quel résultat précis tu attends (objectif) — pas seulement une des trois.",
      },
      {
        id: "step-3",
        prompt:
          "En comparant les deux versions, quelle information manquante dans la version vague aurait le plus changé la réponse du modèle ?",
        expectedAnswer:
          "Il n'y a pas de réponse unique : le but est d'identifier concrètement laquelle des trois informations (rôle, contexte ou objectif) manquait le plus cruellement dans ton cas précis.",
      },
    ],
  },
  {
    id: "role-contexte-objectif-quiz",
    skillId: "role-contexte-objectif",
    type: "quiz",
    title: "Quiz — Rôle, contexte et objectif",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question:
          "Que remplace principalement l'ajout d'un rôle, d'un contexte et d'un objectif dans un prompt ?",
        options: [
          "Le besoin de vérifier la réponse",
          "Les suppositions que le modèle doit faire par défaut",
          "La longueur de la réponse",
          "Le prix de l'appel API",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question:
          "Dans l'exemple du blog RH, à quoi correspond \"Nos lecteurs hésitent à généraliser le télétravail par peur de perdre en cohésion d'équipe\" ?",
        options: ["Au rôle", "Au contexte", "À l'objectif", "Au format"],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Pourquoi \"Résume ce document\" est-il un objectif ambigu ?",
        options: [
          "Parce que résumer est toujours impossible pour un LLM",
          "Parce qu'il ne précise ni pour qui, ni pour quel usage",
          "Parce que les documents ne peuvent pas être résumés en français",
          "Parce qu'il faut toujours donner un exemple",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "contraintes-format-quiz",
    skillId: "contraintes-format",
    type: "quiz",
    title: "Quiz — Contraintes et format de sortie",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question:
          "Quel est le principal risque à empiler des contraintes contradictoires (ex. \"très détaillé\" + \"3 phrases maximum\") ?",
        options: [
          "Le modèle refuse de répondre",
          "Le modèle arbitre lui-même de façon imprévisible",
          "Le prompt devient trop cher",
          "Rien, ça n'a aucun effet",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Pourquoi préciser un format de sortie (tableau, JSON, liste) est-il particulièrement utile ?",
        options: [
          "Ça rend la réponse plus longue",
          "Ça évite d'avoir à reformuler la réponse pour la réutiliser ailleurs",
          "Ça change le modèle utilisé",
          "Ça n'a d'effet que sur les images",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Que faut-il faire si on connaît déjà l'usage exact de la réponse (ex. collée dans un tableur) ?",
        options: [
          "Ne rien préciser, le modèle devine bien",
          "Le préciser dans le prompt sous forme de contrainte/format",
          "Poser la question deux fois",
          "Changer de modèle",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "exemples-few-shot-autonomous",
    skillId: "exemples-few-shot",
    type: "autonomous",
    title: "Construire et tester un prompt few-shot",
    instructions:
      "Choisis une tâche de reformulation ou de génération que tu fais souvent (titres, réponses à emails, descriptions...). Écris un prompt few-shot avec 2 exemples d'entrée/sortie, teste-le sur un assistant IA avec un 3e cas, et rapporte le résultat.",
    criteria: [
      {
        id: "c1",
        description:
          "Le rapport contient bien au moins 2 exemples complets d'entrée/sortie, pas seulement une description du style voulu.",
      },
      {
        id: "c2",
        description: "Le rapport inclut le résultat obtenu sur le 3e cas testé, pas seulement le prompt envoyé.",
      },
      {
        id: "c3",
        description:
          "Le rapport indique explicitement si le style/format du 3e résultat correspond bien aux 2 exemples fournis.",
      },
      {
        id: "c4",
        description: "Le rapport identifie ce qui aurait pu être ajusté si le résultat n'était pas satisfaisant.",
      },
    ],
  },
  {
    id: "exemples-few-shot-quiz",
    skillId: "exemples-few-shot",
    type: "quiz",
    title: "Quiz — Exemples et few-shot prompting",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Qu'est-ce que le \"few-shot prompting\" ?",
        options: [
          "Poser plusieurs fois la même question",
          "Montrer un ou plusieurs exemples d'entrée/sortie dans le prompt",
          "Utiliser un modèle plus petit",
          "Limiter le nombre de mots de la réponse",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Pourquoi un exemple concret est-il souvent plus efficace qu'une description par adjectifs ?",
        options: [
          "Parce que les adjectifs sont interdits par les LLM",
          "Parce qu'un exemple élimine l'ambiguïté d'interprétation des mots",
          "Parce que les exemples sont toujours plus courts",
          "Parce que le modèle ne comprend pas les adjectifs",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Combien d'exemples sont généralement nécessaires pour cadrer un format simple ?",
        options: [
          "Aucun ne fonctionne jamais",
          "Un seul suffit souvent",
          "Toujours au moins 10",
          "Exactement 5",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "criteres-verification-quiz",
    skillId: "criteres-verification",
    type: "quiz",
    title: "Quiz — Critères de qualité et vérification",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question:
          "Pourquoi formuler les critères de qualité directement dans le prompt plutôt que de vérifier seulement après coup ?",
        options: [
          "Cela rend la réponse plus longue automatiquement",
          "Un modèle qui reçoit les critères explicitement les respecte plus fiablement",
          "Cela empêche toute hallucination",
          "Ce n'est utile que pour les questions en anglais",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "La vérification a posteriori remplace-t-elle les critères donnés en amont dans le prompt ?",
        options: [
          "Oui, l'un ou l'autre suffit",
          "Non, les deux se complètent",
          "Oui, la vérification a posteriori est toujours suffisante seule",
          "Non, seuls les critères en amont comptent",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Que faut-il vérifier en priorité dans une réponse produite par un LLM ?",
        options: [
          "Uniquement l'orthographe",
          "Les faits vérifiables (chiffres, dates, citations, affirmations catégoriques)",
          "La couleur du texte",
          "Rien, si le ton est confiant",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "iteration-prompt-autonomous",
    skillId: "iteration-prompt",
    type: "autonomous",
    title: "Documenter une itération de prompt",
    instructions:
      "Prends un prompt qui n'a pas donné un bon résultat du premier coup (récent, ou refait exprès pour l'exercice). Documente au moins 2 itérations : ce qui n'allait pas, ce que tu as changé, et le résultat obtenu à chaque étape.",
    criteria: [
      {
        id: "c1",
        description: "Le rapport documente au moins 2 itérations distinctes du même prompt (pas 2 prompts sans lien).",
      },
      {
        id: "c2",
        description: "Pour chaque itération, le diagnostic (ce qui n'allait pas) est explicite avant la correction.",
      },
      {
        id: "c3",
        description: "Une seule variable a été changée par itération, pas plusieurs choses à la fois.",
      },
      {
        id: "c4",
        description: "Le rapport conclut si le résultat final est satisfaisant, et pourquoi.",
      },
    ],
  },
  {
    id: "iteration-prompt-quiz",
    skillId: "iteration-prompt",
    type: "quiz",
    title: "Quiz — Itérer sur un prompt",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Quelle est la bonne pratique pour corriger un prompt qui a mal fonctionné ?",
        options: [
          "Tout réécrire complètement au hasard",
          "Diagnostiquer précisément le problème puis ajuster une seule variable à la fois",
          "Changer de modèle d'IA",
          "Abandonner la tâche",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Pourquoi changer une seule variable à la fois entre deux itérations d'un prompt ?",
        options: [
          "Pour gagner du temps uniquement",
          "Pour savoir précisément quel changement a résolu ou aggravé le problème",
          "Parce que les LLM ne comprennent qu'un changement à la fois",
          "Ce n'est pas important",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question:
          "Que recommande la leçon de faire une fois qu'un prompt donne un bon résultat sur une tâche récurrente ?",
        options: [
          "L'oublier immédiatement",
          "Le sauvegarder pour le réutiliser (ex. dans l'AI Lab)",
          "Le partager publiquement obligatoirement",
          "Ne plus jamais le modifier",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "iteration-prompt-challenge",
    skillId: "iteration-prompt",
    type: "challenge",
    title: "Diagnostiquer trois échecs de prompt différents",
    instructions:
      "Écris volontairement trois prompts défaillants pour trois raisons différentes (par exemple : rôle absent, contraintes de format manquantes, absence d'exemple sur une tâche qui en a besoin). Pour chacun, pose la question à un assistant IA, observe l'échec, diagnostique en une phrase la cause précise avant de corriger, puis corrige uniquement l'élément diagnostiqué et vérifie si cela suffit.",
    criteria: [
      {
        id: "c1",
        description:
          "Les trois prompts défaillants couvrent trois causes clairement différentes, pas trois variations du même problème.",
      },
      {
        id: "c2",
        description:
          "Pour chaque cas, la cause est diagnostiquée explicitement avant la correction, pas déduite après coup à partir du résultat corrigé.",
      },
      {
        id: "c3",
        description:
          "Chaque correction ne modifie que l'élément diagnostiqué, pour vérifier isolément si c'était bien lui qui posait problème.",
      },
      {
        id: "c4",
        description:
          "Le rapport conclut, pour chacun des trois cas, si la correction ciblée a suffi à résoudre le problème ou non.",
      },
    ],
  },
];
