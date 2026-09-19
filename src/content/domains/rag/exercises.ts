import type { Exercise } from "@/content/types";

export const ragExercises: Exercise[] = [
  {
    id: "embeddings-et-recherche-semantique-guided",
    skillId: "embeddings-et-recherche-semantique",
    type: "guided",
    title: "Tester la recherche sémantique en conditions réelles",
    instructions:
      "Utilise un outil de type RAG (NotebookLM, un Projet Claude/ChatGPT avec fichiers) pour tester si la recherche par le sens fonctionne réellement.",
    steps: [
      {
        id: "step-1",
        prompt:
          "Choisis un document que tu peux mettre à disposition d'un outil comme NotebookLM ou un Projet Claude/ChatGPT. Pose une question sur son contenu en utilisant des mots différents de ceux du document (des synonymes, une reformulation).",
        expectedAnswer:
          "Il n'y a pas de bonne réponse unique : l'important est d'avoir réellement utilisé des mots différents de ceux du document, pas une reprise quasi identique du texte source.",
      },
      {
        id: "step-2",
        prompt: "L'outil a-t-il quand même retrouvé l'information pertinente malgré la reformulation ?",
        expectedAnswer:
          "Une bonne réponse rapporte honnêtement le résultat observé, qu'il soit positif ou négatif — l'objectif est de tester la recherche sémantique, pas de confirmer une hypothèse.",
      },
      {
        id: "step-3",
        prompt: "En quoi ce comportement diffère-t-il d'une recherche par mot-clé classique (comme Ctrl+F dans un document) ?",
        expectedAnswer:
          "Une bonne réponse explique qu'une recherche par mot-clé exige les mots exacts, alors que la recherche sémantique retrouve un contenu au sens proche même avec des mots différents.",
      },
    ],
  },
  {
    id: "embeddings-et-recherche-semantique-quiz",
    skillId: "embeddings-et-recherche-semantique",
    type: "quiz",
    title: "Quiz — Embeddings et recherche sémantique",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Qu'est-ce qu'un embedding ?",
        options: [
          "Un fichier image",
          "Une représentation numérique du sens d'un texte, sous forme de liste de nombres",
          "Un mot de passe",
          "Un type de virus informatique",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "En quoi la recherche sémantique diffère-t-elle d'une recherche par mot-clé classique ?",
        options: [
          "Aucune différence",
          "Elle retrouve un contenu au sens proche même sans les mêmes mots exacts",
          "Elle ne fonctionne que sur des mots en anglais",
          "Elle est toujours plus lente",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Pourquoi \"chat\" et \"félin domestique\" peuvent-ils avoir des embeddings proches malgré des mots différents ?",
        options: [
          "Ce n'est jamais le cas",
          "Parce que leur sens est proche, ce que l'embedding capture",
          "Parce qu'ils ont la même longueur",
          "Parce qu'ils commencent par la même lettre",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "chunking-quiz",
    skillId: "chunking",
    type: "quiz",
    title: "Quiz — Découper les documents (chunking)",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Pourquoi découper un document en chunks avant de créer des embeddings ?",
        options: [
          "Ce n'est jamais nécessaire",
          "Parce qu'un embedding représente un texte entier comme un seul vecteur, ce qui perd le détail sur un document trop long",
          "Pour rendre le document plus joli",
          "Parce que les embeddings n'acceptent que des fichiers image",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Que risque un chunk trop grand lors de la recherche ?",
        options: [
          "Rien, plus c'est grand mieux c'est toujours",
          "Une récupération imprécise, avec du contenu non pertinent inclus dans le chunk retrouvé",
          "Le système refuse de fonctionner",
          "Les embeddings deviennent illisibles",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "À quoi sert le chevauchement (overlap) entre chunks consécutifs ?",
        options: [
          "À dupliquer inutilement les données",
          "À éviter de couper une idée pertinente pile à la frontière entre deux chunks",
          "À ralentir le système volontairement",
          "Ce n'est jamais utilisé",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "bases-vectorielles-quiz",
    skillId: "bases-vectorielles",
    type: "quiz",
    title: "Quiz — Bases de données vectorielles",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "À quoi sert une base de données vectorielle ?",
        options: [
          "À stocker des mots de passe",
          "À stocker des embeddings et retrouver rapidement les plus proches d'une requête donnée",
          "À remplacer complètement les LLM",
          "À afficher des images",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "En quoi une base vectorielle diffère-t-elle d'une base de données classique ?",
        options: [
          "Aucune différence",
          "Elle cherche par proximité de sens plutôt que par correspondance exacte sur des champs structurés",
          "Elle ne peut stocker que des nombres entiers",
          "Elle est toujours plus lente qu'une base classique pour toute tâche",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Quel outil déjà présent dans l'AI Toolbox de cette application repose sur ce type d'infrastructure en coulisses ?",
        options: ["Zapier", "NotebookLM", "Midjourney", "ElevenLabs"],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "pipeline-rag-complet-autonomous",
    skillId: "pipeline-rag-complet",
    type: "autonomous",
    title: "Combiner deux sources dans un système RAG",
    instructions:
      "Mets au moins 2 documents différents à disposition d'un outil de type RAG (NotebookLM, Projet Claude/ChatGPT avec fichiers). Pose une question dont la réponse nécessite de combiner une information présente dans chacun des deux documents.",
    criteria: [
      {
        id: "c1",
        description: "Les 2 documents utilisés contiennent chacun une partie distincte et nécessaire de la réponse.",
      },
      {
        id: "c2",
        description: "La question posée nécessite réellement de combiner les deux sources, pas une réponse trouvable dans un seul document.",
      },
      {
        id: "c3",
        description: "Le rapport indique si la réponse obtenue a bien utilisé les deux sources, ou seulement une.",
      },
      {
        id: "c4",
        description: "Le rapport vérifie que la réponse est correcte par rapport au contenu réel des documents.",
      },
    ],
  },
  {
    id: "pipeline-rag-complet-quiz",
    skillId: "pipeline-rag-complet",
    type: "quiz",
    title: "Quiz — Le pipeline RAG de bout en bout",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Dans quel ordre se déroulent les grandes étapes d'un pipeline RAG ?",
        options: [
          "Génération, puis découpage, puis recherche",
          "Découpage et embeddings des documents, puis recherche des chunks pertinents à la question, puis génération de la réponse à partir de ces chunks",
          "Il n'y a pas d'ordre particulier",
          "Uniquement la génération, sans aucune recherche",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "En quoi le RAG ressemble-t-il à la recherche augmentée vue en Assistants IA ?",
        options: [
          "Aucun rapport entre les deux",
          "Les deux ancrent la réponse sur des sources réelles plutôt que sur la seule mémoire du modèle, mais le RAG s'applique à des documents privés plutôt qu'au web public",
          "Le RAG remplace complètement les LLM",
          "La recherche augmentée n'utilise jamais de sources",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Le RAG élimine-t-il complètement le risque d'hallucination ?",
        options: [
          "Oui, totalement",
          "Non, il le réduit mais un retrieval imparfait ou une information absente peut encore mener à une réponse incorrecte",
          "Le RAG n'a aucun effet sur les hallucinations",
          "Le RAG augmente toujours le risque d'hallucination",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: "verifier-un-systeme-rag-autonomous",
    skillId: "verifier-un-systeme-rag",
    type: "autonomous",
    title: "Les deux tests de fiabilité d'un système RAG",
    instructions:
      "Sur un outil de type RAG (NotebookLM, Projet Claude/ChatGPT avec fichiers), teste 2 questions : une dont tu sais que la réponse EST dans les documents fournis, et une dont tu sais que la réponse N'EST PAS dedans. Rapporte comment le système s'est comporté dans chaque cas.",
    criteria: [
      {
        id: "c1",
        description: "La première question (réponse présente) est vérifiée avec la vraie source, pas juste supposée correcte.",
      },
      {
        id: "c2",
        description:
          "La deuxième question (réponse absente) porte sur une information réellement absente des documents fournis, pas une question ambiguë.",
      },
      {
        id: "c3",
        description:
          "Le rapport indique clairement si le système a reconnu l'absence d'information dans le deuxième cas, ou s'il a inventé une réponse plausible.",
      },
      {
        id: "c4",
        description: "Le rapport conclut sur le niveau de confiance à accorder à ce système sur la base de ces deux tests.",
      },
    ],
  },
  {
    id: "verifier-un-systeme-rag-quiz",
    skillId: "verifier-un-systeme-rag",
    type: "quiz",
    title: "Quiz — Vérifier un système RAG",
    instructions: "Réponds aux questions suivantes pour valider ta compréhension.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Quel est le test le plus révélateur de la fiabilité d'un système RAG ?",
        options: [
          "Uniquement tester avec des questions faciles",
          "Tester une question dont la réponse est absente de la base, pour voir si le système reconnaît l'absence d'information",
          "Ne jamais tester le système",
          "Vérifier uniquement la vitesse de réponse",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q2",
        question: "Que doit idéalement faire un bon système RAG face à une question dont la réponse n'est pas dans ses documents ?",
        options: [
          "Inventer une réponse plausible à partir de ses connaissances générales",
          "Reconnaître explicitement l'absence de cette information dans les documents fournis",
          "Refuser de répondre à toute question",
          "Se déconnecter automatiquement",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3",
        question: "Pourquoi vérifier régulièrement que les documents sources d'un système RAG sont à jour ?",
        options: [
          "Ce n'est jamais nécessaire",
          "Une base construite sur des documents obsolètes donne des réponses obsolètes, même avec un pipeline techniquement parfait",
          "Les documents se mettent toujours à jour automatiquement",
          "Cela n'affecte jamais la qualité des réponses",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
];
