import type { Module } from "@/content/types";

export const ethiqueSecuriteIaModules: Module[] = [
  {
    id: "confidentialite-donnees",
    domainId: "ethique-securite-ia",
    title: "Confidentialité et protection des données",
    description:
      "Ce qui se passe réellement avec les données envoyées à un outil IA, et comment choisir un outil en connaissance de cause selon la sensibilité de ce que tu partages.",
    skillIds: ["confidentialite-donnees-ia", "choisir-outil-selon-confidentialite"],
  },
  {
    id: "securite-responsabilite",
    domainId: "ethique-securite-ia",
    title: "Sécurité et responsabilité",
    description:
      "Les manipulations spécifiques aux systèmes IA (prompt injection) et le cadre de décision entre ce qu'on peut automatiser et ce qui doit rester validé par un humain.",
    skillIds: ["prompt-injection-manipulation", "biais-responsabilite-ia"],
  },
];
