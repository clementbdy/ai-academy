import type { Exercise } from "@/content/types";

export const creationExercises: Exercise[] = [
  {
    id: "storytelling-avec-ia-guided",
    skillId: "storytelling-avec-ia",
    type: "guided",
    title: "Décortiquer et réutiliser une bonne accroche",
    instructions:
      "Analyse un contenu qui t'a récemment accroché, puis utilise ce que tu observes comme modèle pour une nouvelle accroche.",
    steps: [
      {
        id: "step-1",
        prompt:
          "Repense à un contenu (vidéo, article, publication) qui t'a vraiment accroché récemment. Identifie son accroche (les premiers mots ou premières secondes).",
        expectedAnswer:
          "Il n'y a pas de bonne réponse unique : l'objectif est d'identifier concrètement ce qui a capté ton attention dès le début, pas une description générale du contenu.",
      },
      {
        id: "step-2",
        prompt: "Identifie la tension ou le problème qui donnait envie de continuer.",
        expectedAnswer:
          "Une bonne réponse nomme un enjeu concret (une question sans réponse, un problème non résolu, une promesse) qui donnait une raison de rester jusqu'au bout.",
      },
      {
        id: "step-3",
        prompt:
          "Demande à un assistant IA de générer 3 accroches différentes pour un sujet de ton choix, en lui donnant cet exemple comme modèle de style.",
        expectedAnswer:
          "L'important est d'avoir fourni un exemple concret comme référence (few-shot) plutôt qu'une simple description abstraite du style voulu.",
      },
    ],
  },
  {
    id: "storytelling-avec-ia-quiz",
    skillId: "storytelling-avec-ia",
    type: "quiz",
    title: "Quiz — Structurer une histoire avec l'IA",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Qu'est-ce qui distingue un texte techniquement bien écrit d'une bonne histoire ?",
        options: [
          "Rien, c'est la même chose",
          "Une bonne histoire a une structure (accroche, tension, résolution) qui donne une raison de continuer",
          "Une bonne histoire est toujours plus longue",
          "Le vocabulaire utilisé uniquement",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Pourquoi générer plusieurs accroches différentes plutôt qu'une seule ?",
        options: [
          "Ce n'est jamais utile",
          "Parce que les premiers mots/secondes déterminent en grande partie si l'audience continue",
          "Parce que ça change le sujet du contenu",
          "Parce qu'une seule accroche est toujours interdite",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Comment fournir un modèle de style à l'IA pour une histoire, plutôt que de le décrire abstraitement ?",
        options: [
          "Ne jamais donner d'exemple",
          "Donner un exemple concret de contenu dont le style te plaît",
          "Décrire uniquement avec des adjectifs vagues",
          "Changer de sujet",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "contenu-pour-reseaux-sociaux-autonomous",
    skillId: "contenu-pour-reseaux-sociaux",
    type: "autonomous",
    title: "Adapter un contenu à deux formats de plateforme",
    instructions:
      "Prends un contenu de fond que tu as déjà (ou crée-en un court) et demande à un assistant de l'adapter à 2 formats de plateformes différents (ex. un post LinkedIn texte ET un script court pour vidéo verticale).",
    criteria: [
      {
        id: "c1",
        description:
          "Les deux formats produits sont réellement adaptés aux contraintes de leur plateforme respective (longueur, ton, structure), pas juste copiés-collés avec une mise en forme différente.",
      },
      {
        id: "c2",
        description: "Chaque version conserve le même message de fond malgré le changement de format.",
      },
      {
        id: "c3",
        description:
          "Le rapport identifie au moins une contrainte concrète propre à chaque plateforme qui a influencé l'adaptation.",
      },
      {
        id: "c4",
        description:
          "Le rapport évalue laquelle des deux versions a la meilleure accroche dans ses premiers mots/secondes, et pourquoi.",
      },
    ],
  },
  {
    id: "contenu-pour-reseaux-sociaux-quiz",
    skillId: "contenu-pour-reseaux-sociaux",
    type: "quiz",
    title: "Quiz — Adapter son contenu aux réseaux sociaux",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Pourquoi ne pas simplement recopier le même contenu d'une plateforme à l'autre ?",
        options: [
          "Il faut toujours tout recopier à l'identique",
          "Chaque plateforme a des contraintes de format et des conventions différentes",
          "Ce n'est jamais possible techniquement",
          "Les plateformes interdisent tout contenu identique",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Pourquoi la première seconde ou ligne d'un contenu social est-elle si importante ?",
        options: [
          "Elle n'a aucune importance",
          "Elle détermine en grande partie si l'audience continue à regarder ou lire",
          "Elle doit toujours contenir un lien",
          "Elle est ignorée par les plateformes",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Que faut-il donner à l'IA plutôt que de demander un contenu \"viral\" dans l'abstrait ?",
        options: [
          "Rien de plus",
          "Des exemples concrets de contenus qui ont déjà bien fonctionné dans sa niche",
          "Une liste de hashtags uniquement",
          "Le nom de la plateforme seulement",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "generation-images-autonomous",
    skillId: "generation-images",
    type: "autonomous",
    title: "Itérer sur un prompt d'image",
    instructions:
      "Génère une image avec un outil IA (Midjourney, DALL-E, Imagen...) à partir d'une description simple, puis affine ton prompt sur au moins 2 itérations en ajoutant des détails visuels concrets (style, éclairage, cadrage). Compare les résultats.",
    criteria: [
      {
        id: "c1",
        description: "Au moins 3 versions du prompt (initiale + 2 itérations) sont documentées, avec le résultat de chacune.",
      },
      {
        id: "c2",
        description: "Chaque itération ajoute un détail visuel concret (style, éclairage, cadrage, ambiance), pas une reformulation vague.",
      },
      {
        id: "c3",
        description: "Le rapport identifie quel changement précis a le plus amélioré le résultat.",
      },
      {
        id: "c4",
        description:
          "Le rapport mentionne si l'image a un usage prévu (personnel, commercial) et si les conditions d'utilisation de l'outil ont été vérifiées en conséquence.",
      },
    ],
  },
  {
    id: "generation-images-quiz",
    skillId: "generation-images",
    type: "quiz",
    title: "Quiz — Générer des images avec l'IA",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Que faut-il privilégier dans un prompt de génération d'image plutôt que des concepts abstraits ?",
        options: [
          "Des concepts philosophiques",
          "Des éléments visuels concrets (sujet, style, éclairage, cadrage)",
          "Uniquement des chiffres",
          "Rien de particulier",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Que permet d'affiner un prompt d'image sur plusieurs itérations ?",
        options: [
          "Rien, la première version est toujours définitive",
          "Se rapprocher progressivement du résultat voulu en ajoutant des détails visuels concrets",
          "Changer complètement d'outil à chaque fois",
          "Supprimer l'image générée",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Que faut-il vérifier avant un usage commercial d'une image générée par IA ?",
        options: [
          "Rien, toute image générée est automatiquement libre de droits",
          "Les conditions d'utilisation de l'outil, qui varient selon les cas",
          "Uniquement la résolution de l'image",
          "La couleur dominante",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "generation-video-audio-quiz",
    skillId: "generation-video-audio",
    type: "quiz",
    title: "Quiz — Générer de la vidéo et de l'audio",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Entre audio et vidéo générés par IA, lequel est aujourd'hui globalement plus mature pour un usage sérieux ?",
        options: [
          "La vidéo est toujours plus fiable",
          "L'audio (voix off) est généralement plus mature et fiable que la vidéo de bout en bout",
          "Les deux sont identiques en fiabilité",
          "Aucun des deux ne fonctionne jamais",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Que soulève le clonage d'une voix précise (la sienne ou celle d'un tiers) ?",
        options: [
          "Aucun enjeu particulier",
          "Un enjeu de consentement fort, à ne jamais faire sans autorisation explicite",
          "C'est toujours totalement gratuit",
          "Cela concerne uniquement la vidéo",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Pour quel usage la vidéo générée par IA est-elle aujourd'hui la plus adaptée ?",
        options: [
          "Un long métrage complet cohérent",
          "De courts clips ou effets ponctuels",
          "Remplacer tout tournage professionnel",
          "Aucun usage n'est encore possible",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "droits-et-ethique-creation-autonomous",
    skillId: "droits-et-ethique-creation",
    type: "autonomous",
    title: "Auditer un scénario de création IA sous l'angle des droits",
    instructions:
      "Imagine que tu prépares une vidéo pour les réseaux sociaux avec une voix off générée par IA et des images générées par IA, destinée à un usage commercial. Identifie pour ce scénario les 3 points de vigilance (droits d'auteur, consentement, transparence) et ce que tu ferais concrètement pour chacun.",
    criteria: [
      {
        id: "c1",
        description:
          "Le point sur les droits d'auteur des images/voix générées est traité avec une action concrète (ex. vérifier les conditions d'utilisation de l'outil), pas juste mentionné.",
      },
      {
        id: "c2",
        description:
          "Le point sur le consentement (voix utilisée) est traité explicitement, avec une décision claire sur quelle voix serait utilisée et pourquoi c'est acceptable.",
      },
      {
        id: "c3",
        description: "Le point sur la transparence (divulgation du contenu généré par IA) inclut une décision concrète sur si/comment le signaler.",
      },
      {
        id: "c4",
        description: "Le rapport ne minimise aucun des 3 points sous prétexte de rapidité ou de simplicité de production.",
      },
    ],
  },
  {
    id: "droits-et-ethique-creation-quiz",
    skillId: "droits-et-ethique-creation",
    type: "quiz",
    title: "Quiz — Droits d'auteur et éthique de la création IA",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Que faut-il faire avant un usage commercial de contenu généré par IA (image, voix) ?",
        options: [
          "Rien, aucune vérification n'est nécessaire",
          "Vérifier les droits/conditions d'utilisation, qui varient selon l'outil et la juridiction",
          "Supposer que tout est automatiquement libre de droits",
          "Attendre un an avant utilisation",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Que faut-il obtenir avant d'utiliser la voix ou l'image d'une personne réelle générée par IA ?",
        options: [
          "Rien n'est nécessaire",
          "Son consentement explicite",
          "Uniquement une mention en petits caractères",
          "L'autorisation d'un concurrent",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Pourquoi la rapidité de création offerte par l'IA ne dispense-t-elle d'aucune vérification éthique/légale ?",
        options: [
          "Elle en dispense totalement",
          "Produire plus vite signifie qu'il faut vérifier ces points plus systématiquement, pas moins",
          "La rapidité remplace le besoin de vérifier",
          "Ces vérifications ne s'appliquent qu'au contenu très long",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "droits-et-ethique-creation-challenge",
    skillId: "droits-et-ethique-creation",
    type: "challenge",
    title: "Auditer un projet de création IA sous l'angle droits et consentement",
    instructions:
      "Prends un projet de contenu (réel ou fictif mais réaliste) impliquant de l'IA générative (image, voix, vidéo). Liste tous les éléments qui posent une question de droit ou de consentement (image/voix d'une personne réelle, style d'un artiste identifiable, musique...), et pour chacun, détermine l'action nécessaire avant toute diffusion.",
    criteria: [
      {
        id: "c1",
        description:
          "Au moins trois éléments distincts posant une question de droit ou de consentement sont identifiés dans le projet choisi.",
      },
      {
        id: "c2",
        description:
          "Pour chacun, une action concrète et nécessaire avant diffusion est précisée (autorisation, mention de transparence IA, remplacement...).",
      },
      {
        id: "c3",
        description:
          "Le rapport distingue explicitement usage personnel/privé et diffusion commerciale/publique pour au moins un des éléments.",
      },
      {
        id: "c4",
        description:
          "Une politique de transparence sur l'origine IA du contenu est formulée et appliquée de façon cohérente à l'ensemble du projet.",
      },
    ],
  },
];
