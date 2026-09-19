import type { Module } from "@/content/types";

export const creationModules: Module[] = [
  {
    id: "raconter-une-histoire",
    domainId: "creation",
    title: "Raconter une histoire",
    description:
      "Structurer un contenu pour qu'il retienne l'attention, et l'adapter aux contraintes concrètes de chaque plateforme.",
    skillIds: ["storytelling-avec-ia", "contenu-pour-reseaux-sociaux"],
  },
  {
    id: "creer-du-contenu-visuel-et-audio",
    domainId: "creation",
    title: "Créer du contenu visuel et audio",
    description:
      "Générer des images et de l'audio avec l'IA, et connaître les questions de droits et d'éthique qui accompagnent ces usages.",
    skillIds: ["generation-images", "generation-video-audio", "droits-et-ethique-creation"],
  },
];
