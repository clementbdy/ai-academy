import type { Exercise } from "@/content/types";

export const programmationAssisteeExercises: Exercise[] = [
  {
    id: "notions-de-base-du-code-guided",
    skillId: "notions-de-base-du-code",
    type: "guided",
    title: "Décortiquer un code généré par IA",
    instructions:
      "Demande à un assistant IA de générer un petit bout de code simple dans le langage de ton choix (ex. \"une fonction qui vérifie si un nombre est pair\"). Analyse ensuite ce code.",
    steps: [
      {
        id: "step-1",
        prompt: "Colle ici le code généré (ou une description fidèle de sa structure).",
        expectedAnswer:
          "Il n'y a pas de bonne réponse unique : l'important est d'avoir un vrai bout de code sous les yeux pour l'étape suivante.",
      },
      {
        id: "step-2",
        prompt: "Identifie dans ce code : au moins une variable, et au moins une condition ou une boucle.",
        expectedAnswer:
          "L'objectif est de repérer concrètement ces briques universelles dans un vrai code, pas de les définir de mémoire.",
      },
      {
        id: "step-3",
        prompt: "Explique avec tes propres mots ce que fait ce code, sans reprendre le jargon technique.",
        expectedAnswer:
          "Une bonne réponse traduit la logique en langage courant (ex. \"si le reste de la division par 2 est zéro, alors...\") plutôt que de recopier des termes techniques non compris.",
      },
    ],
  },
  {
    id: "notions-de-base-du-code-quiz",
    skillId: "notions-de-base-du-code",
    type: "quiz",
    title: "Quiz — Les briques universelles du code",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Quelles sont les briques universelles présentes dans presque tous les langages de programmation ?",
        options: [
          "Uniquement les couleurs et les polices",
          "Variables, fonctions, conditions et boucles",
          "Seulement des mots en anglais",
          "Des feuilles de calcul",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Que font HTML, CSS et JavaScript dans une page web, respectivement ?",
        options: [
          "Ils font tous exactement la même chose",
          "Structure, apparence visuelle, et comportement interactif",
          "Uniquement de la sécurité",
          "Rien, ils sont obsolètes",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question:
          "Pourquoi reconnaître les briques universelles du code aide-t-il même sans connaître la syntaxe exacte d'un langage ?",
        options: [
          "Ça ne sert à rien",
          "Ça permet de suivre la logique générale d'un code même inconnu",
          "Ça remplace complètement le besoin de lire le code",
          "Ça fonctionne uniquement en Python",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "json-donnees-structurees-autonomous",
    skillId: "json-donnees-structurees",
    type: "autonomous",
    title: "Convertir des données en JSON et vérifier le résultat",
    instructions:
      "Prends une liste d'informations que tu as sous une forme non structurée (une liste de contacts dans un texte, un tableau collé...). Demande à un assistant IA de la convertir en JSON, puis vérifie que la structure produite est valide et fidèle aux données d'origine.",
    criteria: [
      {
        id: "c1",
        description: "Le JSON produit est syntaxiquement valide (accolades, virgules, guillemets cohérents).",
      },
      {
        id: "c2",
        description: "Chaque donnée d'origine se retrouve bien dans le JSON produit, sans perte ni invention.",
      },
      {
        id: "c3",
        description:
          "Le rapport identifie la structure utilisée (objet unique, tableau d'objets...) et explique pourquoi elle est adaptée aux données.",
      },
      {
        id: "c4",
        description: "Le rapport signale toute anomalie trouvée dans la conversion (donnée manquante, mal typée...).",
      },
    ],
  },
  {
    id: "json-donnees-structurees-quiz",
    skillId: "json-donnees-structurees",
    type: "quiz",
    title: "Quiz — JSON et les données structurées",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Que représentent les accolades { } en JSON ?",
        options: ["Un commentaire", "Un objet, avec des paires clé-valeur", "Une erreur de syntaxe", "Une image"],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Pourquoi le format JSON est-il si présent dans les outils IA et d'automatisation ?",
        options: [
          "Parce qu'il est joli visuellement",
          "Parce que c'est un format structuré standard pour échanger des données entre systèmes",
          "Parce qu'il remplace tous les langages de programmation",
          "Parce qu'il n'existe que depuis cette année",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Que faut-il vérifier après avoir demandé à un assistant de convertir des données en JSON ?",
        options: [
          "Rien, la conversion est toujours parfaite",
          "Que chaque donnée d'origine est fidèlement présente, sans perte ni invention",
          "Uniquement la couleur du texte",
          "Le nombre de mots utilisés",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "prompter-du-code-autonomous",
    skillId: "prompter-du-code",
    type: "autonomous",
    title: "Rédiger un prompt de code complet",
    instructions:
      "Choisis une tâche de code réelle (une fonction à écrire, un bug à corriger). Rédige un prompt qui précise le langage exact, fournit le code existant concerné (ou son absence), et si c'est un bug, colle le message d'erreur complet. Demande aussi une explication en plus du code.",
    criteria: [
      {
        id: "c1",
        description: "Le prompt précise explicitement le langage (et la librairie/version si pertinent).",
      },
      {
        id: "c2",
        description: "Le prompt fournit le code existant concerné, ou indique clairement qu'il n'y en a pas encore.",
      },
      {
        id: "c3",
        description:
          "Si la tâche concerne un bug, le message d'erreur complet et exact est inclus, pas une paraphrase.",
      },
      {
        id: "c4",
        description: "Le prompt demande explicitement une explication en plus du code, pas seulement le code brut.",
      },
    ],
  },
  {
    id: "prompter-du-code-quiz",
    skillId: "prompter-du-code",
    type: "quiz",
    title: "Quiz — Bien prompter pour obtenir du code utile",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Pourquoi préciser le langage et la version/librairie exacts dans un prompt de code ?",
        options: [
          "Ce n'est jamais nécessaire",
          "Pour éviter une réponse générique ou dans le mauvais langage/version",
          "Parce que l'assistant refuse sinon de répondre",
          "Pour rendre le prompt plus long uniquement",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Que faut-il faire face à un message d'erreur, plutôt que de le paraphraser (\"j'ai une erreur\") ?",
        options: [
          "L'ignorer complètement",
          "Coller le texte exact et complet de l'erreur",
          "Changer immédiatement de langage de programmation",
          "Redémarrer l'ordinateur",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Pourquoi demander une explication en plus du code généré ?",
        options: [
          "Ça n'apporte rien",
          "Ça permet d'apprendre en même temps que de résoudre la tâche",
          "Ça ralentit uniquement la réponse sans bénéfice",
          "Ça change le langage utilisé",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "verifier-du-code-genere-autonomous",
    skillId: "verifier-du-code-genere",
    type: "autonomous",
    title: "Tester un code généré sur un cas limite",
    instructions:
      "Prends un code généré par un assistant IA (le tien, ou celui d'un exercice précédent). Exécute-le réellement, teste au moins un cas limite (entrée vide, valeur inattendue...), et rapporte ce que tu observes.",
    criteria: [
      {
        id: "c1",
        description: "Le code a été réellement exécuté, pas seulement relu.",
      },
      {
        id: "c2",
        description: "Au moins un cas limite précis a été testé, pas seulement le cas normal attendu.",
      },
      {
        id: "c3",
        description: "Le rapport indique clairement si le code a fonctionné correctement sur ce cas limite ou non.",
      },
      {
        id: "c4",
        description: "Si un problème a été trouvé, le rapport propose comment le signaler ou le corriger.",
      },
    ],
  },
  {
    id: "verifier-du-code-genere-quiz",
    skillId: "verifier-du-code-genere",
    type: "quiz",
    title: "Quiz — Vérifier du code généré par IA",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Pourquoi un assistant IA peut-il \"halluciner\" du code qui semble plausible mais ne fonctionne pas ?",
        options: [
          "Cela n'arrive jamais avec le code",
          "Il peut inventer une fonction ou un paramètre qui n'existe pas réellement dans une librairie",
          "Le code généré est toujours garanti sans erreur",
          "Uniquement si on le lui demande explicitement",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Que faut-il faire avant de considérer un code généré comme bon ?",
        options: [
          "Le juger uniquement à la lecture",
          "L'exécuter réellement, y compris sur au moins un cas limite",
          "Faire confiance automatiquement si le style semble propre",
          "Rien, la vérification n'est jamais nécessaire",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Que faire si un message d'erreur cite une fonction ou librairie que tu ne reconnais pas ?",
        options: [
          "Supposer qu'elle est forcément correcte",
          "Vérifier qu'elle existe réellement plutôt que de supposer qu'elle est correcte",
          "Ignorer l'erreur",
          "Changer de sujet",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "git-github-bases-quiz",
    skillId: "git-github-bases",
    type: "quiz",
    title: "Quiz — Bases de Git et GitHub",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Qu'est-ce qu'un commit dans Git ?",
        options: [
          "Un bug dans le code",
          "Un instantané du projet à un moment donné, avec un message expliquant le changement",
          "Un langage de programmation",
          "Une erreur de syntaxe",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Pourquoi committer régulièrement est-il utile, même pour un projet assisté par IA ?",
        options: [
          "Ce n'est jamais utile",
          "Ça donne un filet de sécurité pour revenir en arrière si une modification casse quelque chose",
          "Ça ralentit uniquement le travail",
          "Ça remplace le besoin de tester le code",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "À quoi sert GitHub par rapport à Git ?",
        options: [
          "Ce sont exactement la même chose",
          "GitHub héberge en ligne les dépôts Git et permet de les partager",
          "GitHub remplace complètement le besoin de programmer",
          "GitHub est un langage de programmation",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
];
