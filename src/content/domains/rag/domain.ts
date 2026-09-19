import type { Domain } from "@/content/types";

export const ragDomain: Domain = {
  id: "rag",
  title: "RAG",
  description:
    "Comment un système IA peut s'appuyer sur des milliers de documents sans jamais pouvoir tous les coller dans un prompt : embeddings, découpage, bases vectorielles, et le pipeline complet qui va de la question à une réponse ancrée dans de vraies sources.",
  moduleIds: ["comprendre-le-principe-du-rag", "construire-et-verifier-un-rag"],
};
