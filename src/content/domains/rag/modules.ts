import type { Module } from "@/content/types";

export const ragModules: Module[] = [
  {
    id: "comprendre-le-principe-du-rag",
    domainId: "rag",
    title: "Comprendre le principe du RAG",
    description:
      "Comment un texte devient comparable par le sens (embeddings), et pourquoi les documents doivent être découpés avant d'être indexés.",
    skillIds: ["embeddings-et-recherche-semantique", "chunking"],
  },
  {
    id: "construire-et-verifier-un-rag",
    domainId: "rag",
    title: "Construire et vérifier un RAG",
    description:
      "L'infrastructure qui stocke et retrouve les embeddings, le pipeline complet de bout en bout, et les deux tests qui révèlent si un système RAG est réellement fiable.",
    skillIds: ["bases-vectorielles", "pipeline-rag-complet", "verifier-un-systeme-rag"],
  },
];
