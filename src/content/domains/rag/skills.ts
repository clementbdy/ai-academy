import type { Skill } from "@/content/types";
import { levelDescriptors as descriptors } from "@/content/level-descriptors";

export const ragSkills: Skill[] = [
  {
    id: "embeddings-et-recherche-semantique",
    moduleId: "comprendre-le-principe-du-rag",
    title: "Embeddings et recherche sémantique",
    description:
      "Comprendre qu'un embedding traduit le sens d'un texte en nombres, ce qui permet de retrouver un contenu par proximité de sens plutôt que par mots-clés exacts.",
    prerequisites: ["fournir-des-documents"],
    lessonIds: ["embeddings-et-recherche-semantique-lesson"],
    exerciseIds: ["embeddings-et-recherche-semantique-guided", "embeddings-et-recherche-semantique-quiz"],
    levelDescriptors: descriptors(
      "les embeddings et la recherche sémantique",
      "Reconnaît qu'un outil qui retrouve une information sans les mots exacts utilise une recherche par le sens plutôt que par mot-clé.",
      "Formule une question à un outil de recherche sémantique sans se soucier de reprendre le vocabulaire exact du document source.",
      "Diagnostique qu'un résultat de recherche non pertinent vient d'une proximité de sens trompeuse plutôt que d'un bug.",
    ),
  },
  {
    id: "chunking",
    moduleId: "comprendre-le-principe-du-rag",
    title: "Découper les documents (chunking)",
    description:
      "Comprendre pourquoi un document est découpé en fragments avant d'être transformé en embeddings, et l'équilibre à trouver dans la taille de ces fragments.",
    prerequisites: ["embeddings-et-recherche-semantique"],
    lessonIds: ["chunking-lesson"],
    exerciseIds: ["chunking-quiz"],
    levelDescriptors: descriptors(
      "le découpage de documents (chunking)",
      "Explique pourquoi un document entier ne peut pas être représenté par un seul embedding sans perdre l'essentiel du détail.",
      "Identifie qu'un chunk trop grand ou trop petit peut expliquer une récupération d'information imprécise.",
      "Évalue si le découpage d'un système RAG donné est adapté au type de documents qu'il contient.",
    ),
  },
  {
    id: "bases-vectorielles",
    moduleId: "construire-et-verifier-un-rag",
    title: "Bases de données vectorielles",
    description:
      "Comprendre le rôle d'une base de données vectorielle : stocker des embeddings et retrouver rapidement les plus proches d'une requête, même parmi des millions de documents.",
    prerequisites: ["chunking"],
    lessonIds: ["bases-vectorielles-lesson"],
    exerciseIds: ["bases-vectorielles-quiz"],
    levelDescriptors: descriptors(
      "les bases de données vectorielles",
      "Explique en quoi une base vectorielle diffère d'une base de données classique dans sa façon de chercher.",
      "Identifie qu'un outil grand public (NotebookLM, Projets Claude/ChatGPT) repose sur ce type d'infrastructure en coulisses.",
      "Anticipe qu'un système RAG mal dimensionné en amont limitera la pertinence de la recherche, quelle que soit la qualité du modèle utilisé ensuite.",
    ),
  },
  {
    id: "pipeline-rag-complet",
    moduleId: "construire-et-verifier-un-rag",
    title: "Le pipeline RAG de bout en bout",
    description:
      "Assembler les étapes (découpage, embeddings, stockage, recherche, génération) en un seul pipeline cohérent, de la question posée à la réponse produite.",
    prerequisites: ["bases-vectorielles"],
    lessonIds: ["pipeline-rag-complet-lesson"],
    exerciseIds: ["pipeline-rag-complet-autonomous", "pipeline-rag-complet-quiz"],
    levelDescriptors: descriptors(
      "le pipeline RAG complet",
      "Retrace les étapes d'un pipeline RAG (découpage, embeddings, recherche, génération) pour expliquer d'où vient une réponse donnée.",
      "Fait le lien entre le RAG et la recherche augmentée par le web comme deux applications du même principe d'ancrage sur des sources réelles.",
      "Diagnostique à quelle étape du pipeline se situe un problème (mauvais découpage, recherche imprécise, génération infidèle aux sources) face à une réponse décevante.",
    ),
  },
  {
    id: "verifier-un-systeme-rag",
    moduleId: "construire-et-verifier-un-rag",
    title: "Vérifier un système RAG",
    description:
      "Tester un système RAG avec une question dont la réponse est connue et présente, et une question dont la réponse est absente — pour voir s'il sait reconnaître ce qu'il ne sait pas.",
    prerequisites: ["pipeline-rag-complet", "hallucinations-limites"],
    lessonIds: ["verifier-un-systeme-rag-lesson"],
    exerciseIds: ["verifier-un-systeme-rag-autonomous", "verifier-un-systeme-rag-quiz"],
    levelDescriptors: descriptors(
      "la vérification d'un système RAG",
      "Teste un système RAG avec une question dont il connaît déjà la vraie réponse, pour vérifier la source citée.",
      "Teste systématiquement un système RAG avec une question dont la réponse est absente de sa base, pour voir s'il l'invente ou la reconnaît.",
      "Vérifie régulièrement que les documents sources d'un système RAG restent à jour, pas seulement son fonctionnement technique.",
    ),
  },
];
