import type { Exercise } from "@/content/types";

export const analyseDeDonneesIaExercises: Exercise[] = [
  {
    id: "preparer-des-donnees-pour-une-ia-guided",
    skillId: "preparer-des-donnees-pour-une-ia",
    type: "guided",
    title: "Auditer un jeu de données avant de l'envoyer",
    instructions:
      "Prends un jeu de données que tu as sous la main (export de dépenses, tableau de suivi, données publiques téléchargées...) et regarde-le attentivement avant de l'envoyer à une IA.",
    steps: [
      {
        id: "step-1",
        prompt: "Chaque colonne a-t-elle un nom clair et une unité explicite (quand c'est pertinent) ? Note au moins une colonne ambiguë que tu as trouvée, ou explique pourquoi il n'y en a aucune.",
        expectedAnswer:
          "Une observation concrète sur au moins une colonne du fichier réel de l'utilisateur, identifiant clairement si son nom/unité est ambigu ou non.",
      },
      {
        id: "step-2",
        prompt: "Repères-tu des valeurs manquantes ou visiblement aberrantes dans ce jeu de données ?",
        expectedAnswer:
          "Une observation concrète et vérifiable sur le fichier réel de l'utilisateur (présence ou absence constatée, pas une supposition).",
      },
      {
        id: "step-3",
        prompt: "Si tu devais envoyer ce fichier à une IA pour analyse maintenant, quelle action de nettoyage ferais-tu d'abord, et pourquoi ?",
        expectedAnswer:
          "Une action de nettoyage concrète et justifiée par ce qui a été observé aux étapes précédentes, pas une réponse générique.",
      },
    ],
  },
  {
    id: "preparer-des-donnees-pour-une-ia-quiz",
    skillId: "preparer-des-donnees-pour-une-ia",
    type: "quiz",
    title: "Quiz — Préparer des données pour une IA",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Pourquoi coller un tableau depuis une capture d'écran est-il risqué pour une analyse de données ?",
        options: [
          "Ce n'est jamais risqué, l'IA lit parfaitement toutes les images",
          "L'assistant doit deviner la structure du tableau, ce qui introduit des erreurs silencieuses",
          "Les captures d'écran sont interdites par les outils IA",
          "Cela ralentit uniquement l'affichage, sans impact sur l'analyse",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Que risque de faire une IA face à une valeur aberrante (ex. un âge de 250 ans) dans un calcul de moyenne, si on ne le lui signale pas ?",
        options: [
          "Elle refuse systématiquement de faire le calcul",
          "Elle l'inclut silencieusement dans le calcul, sans le signaler",
          "Elle la supprime toujours automatiquement",
          "Elle demande obligatoirement confirmation avant tout calcul",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Pour un fichier volumineux, quel réflexe permet de détecter une analyse tronquée silencieusement ?",
        options: [
          "Faire confiance au résumé fourni sans vérification",
          "Vérifier le nombre de lignes réellement analysées par rapport au total du fichier",
          "Envoyer le fichier plusieurs fois d'affilée",
          "Réduire la taille de la police du fichier avant l'envoi",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "interroger-des-donnees-avec-lia-autonomous",
    skillId: "interroger-des-donnees-avec-lia",
    type: "autonomous",
    title: "Mener une séquence de questions sur un jeu de données réel",
    instructions:
      "Choisis un jeu de données réel (les tiens ou une source publique). Pose à un assistant IA une première question d'analyse ciblée (pas \"analyse ce fichier\"), demande-lui la méthode utilisée pour son résultat, puis pose au moins une question de suivi qui affine la première réponse. Rédige un court rapport de cette séquence.",
    criteria: [
      {
        id: "c1",
        description: "La première question posée cible un critère précis (une colonne, une période, une comparaison), pas un résumé général.",
      },
      {
        id: "c2",
        description: "Le rapport montre explicitement une demande de méthode/calcul, distincte du résultat lui-même.",
      },
      {
        id: "c3",
        description: "Une question de suivi affine réellement la première réponse obtenue, en s'appuyant dessus.",
      },
      {
        id: "c4",
        description: "Le rapport indique si la méthode fournie par l'IA a été jugée correcte ou non, avec une justification.",
      },
    ],
  },
  {
    id: "interroger-des-donnees-avec-lia-quiz",
    skillId: "interroger-des-donnees-avec-lia",
    type: "quiz",
    title: "Quiz — Interroger des données avec l'IA",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Pourquoi \"analyse ce fichier\" est-elle une question peu utile face à un jeu de données ?",
        options: [
          "Parce que les IA ne peuvent pas lire de fichiers",
          "Parce qu'elle ne cible aucun critère précis, ce qui produit un résumé générique peu exploitable",
          "Parce que c'est une question trop longue",
          "Parce qu'elle ne fonctionne qu'avec des fichiers Excel",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Pourquoi demander la méthode derrière un résultat, et pas seulement le résultat ?",
        options: [
          "Cela n'apporte rien de plus que le résultat seul",
          "Cela permet de repérer une erreur de méthode (période mal bornée, colonne confondue) invisible dans le résultat seul",
          "C'est obligatoire pour que l'IA accepte de répondre",
          "Cela ralentit uniquement la conversation sans autre effet",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Comment décrire le mieux une bonne séquence d'analyse de données avec une IA ?",
        options: [
          "Une question unique et définitive, jamais reformulée",
          "Une suite de questions qui s'affinent progressivement à partir de chaque réponse",
          "Le plus grand nombre possible de questions sans lien entre elles",
          "Une seule question portant toujours sur l'intégralité du fichier",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "generer-des-visualisations-avec-lia-guided",
    skillId: "generer-des-visualisations-avec-lia",
    type: "guided",
    title: "Choisir le bon graphique pour trois questions différentes",
    instructions:
      "Voici trois questions d'analyse : (A) \"Comment mes dépenses ont-elles évolué mois par mois cette année ?\", (B) \"Quel poste de dépense est le plus élevé ce mois-ci ?\", (C) \"Quelle part de mon budget total va à chaque poste de dépense ?\". Détermine le type de graphique le plus adapté à chacune.",
    steps: [
      {
        id: "step-1",
        prompt: "Quel type de graphique est le plus adapté à la question (A), et pourquoi ?",
        expectedAnswer:
          "Une courbe (line chart), car la question porte sur une évolution dans le temps.",
      },
      {
        id: "step-2",
        prompt: "Quel type de graphique est le plus adapté à la question (B), et pourquoi ?",
        expectedAnswer:
          "Un graphique en barres, car la question compare des catégories (les postes de dépense) entre elles.",
      },
      {
        id: "step-3",
        prompt: "Quel type de graphique est le plus adapté à la question (C), et à quelle condition ce choix reste-t-il pertinent ?",
        expectedAnswer:
          "Un camembert (ou des barres empilées), à condition que le nombre de postes reste limité (sinon le graphique devient illisible) et que le total ait effectivement un sens (100% du budget).",
      },
    ],
  },
  {
    id: "generer-des-visualisations-avec-lia-quiz",
    skillId: "generer-des-visualisations-avec-lia",
    type: "quiz",
    title: "Quiz — Générer des visualisations avec l'IA",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Quel type de graphique est adapté pour montrer une évolution dans le temps ?",
        options: [
          "Un camembert",
          "Une courbe (line chart)",
          "Un nuage de points sans axe temporel",
          "Aucun graphique n'est adapté à l'évolution",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Pourquoi faut-il préciser à l'IA le type de graphique attendu plutôt que de la laisser choisir ?",
        options: [
          "Parce que l'IA refuse de générer des graphiques sans précision",
          "Parce qu'elle produit souvent un choix générique, pas nécessairement le plus pertinent pour la question posée",
          "Parce que cela change le prix de la requête",
          "Ce n'est jamais nécessaire, le choix par défaut est toujours optimal",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Qu'est-ce qui peut rendre un graphique trompeur, même avec des données correctes ?",
        options: [
          "L'utilisation de couleurs vives",
          "Un axe vertical tronqué qui exagère visuellement une différence",
          "Le fait d'avoir un titre",
          "L'utilisation d'une police de caractères sans-serif",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "verifier-les-calculs-et-conclusions-ia-autonomous",
    skillId: "verifier-les-calculs-et-conclusions-ia",
    type: "autonomous",
    title: "Vérifier un chiffre et une conclusion produits par une IA",
    instructions:
      "Demande à un assistant IA d'analyser un jeu de données réel et de calculer un chiffre précis (une moyenne, un pourcentage d'évolution, un total). Recalcule ce chiffre toi-même par un second moyen (tableur, calcul manuel). Puis demande à l'assistant de formuler une conclusion à partir de ce chiffre, et évalue si cette conclusion confond une corrélation avec une causalité, ou généralise à partir d'un échantillon trop restreint. Rédige un rapport de cette double vérification.",
    criteria: [
      {
        id: "c1",
        description: "Le rapport indique le chiffre produit par l'IA et le résultat du recalcul indépendant, avec la méthode de recalcul utilisée.",
      },
      {
        id: "c2",
        description: "Le rapport conclut explicitement si le chiffre de l'IA était correct ou erroné.",
      },
      {
        id: "c3",
        description: "Le rapport examine la conclusion formulée par l'IA sous l'angle corrélation/causalité ou taille d'échantillon.",
      },
      {
        id: "c4",
        description: "Une règle de vérification personnelle est formulée pour les futures analyses de données assistées par IA.",
      },
    ],
  },
  {
    id: "verifier-les-calculs-et-conclusions-ia-quiz",
    skillId: "verifier-les-calculs-et-conclusions-ia",
    type: "quiz",
    title: "Quiz — Vérifier les calculs et conclusions d'une IA",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "\"Les ventes de glaces et les noyades augmentent ensemble en été\" illustre principalement quel piège ?",
        options: [
          "Une erreur de calcul pur",
          "La confusion entre corrélation et causalité",
          "Un problème de format de fichier",
          "Une hallucination visuelle",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Quel réflexe simple permet de détecter une erreur de calcul pur produite par une IA ?",
        options: [
          "Faire confiance au ton assuré de la réponse",
          "Recalculer soi-même (ou via un second outil) au moins un chiffre clé avant de l'utiliser",
          "Reposer exactement la même question plusieurs fois",
          "Ignorer les chiffres surprenants",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Pourquoi une tendance calculée sur 12 lignes mérite-t-elle plus de prudence qu'une tendance calculée sur 12 000 lignes ?",
        options: [
          "Ce n'est pas le cas, la taille de l'échantillon n'a aucune importance",
          "Un échantillon plus petit est moins représentatif, même si le pourcentage affiché paraît tout aussi précis",
          "Les petits fichiers sont toujours mal formatés",
          "Les IA refusent d'analyser les petits échantillons",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
];
