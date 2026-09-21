import type { Skill } from "@/content/types";
import { levelDescriptors as descriptors } from "@/content/level-descriptors";

export const creationSkills: Skill[] = [
  {
    id: "storytelling-avec-ia",
    moduleId: "raconter-une-histoire",
    title: "Structurer une histoire avec l'IA",
    description:
      "Donner à un contenu une vraie structure (accroche, tension, résolution) plutôt qu'un texte techniquement correct mais sans raison de retenir l'attention.",
    prerequisites: ["exemples-few-shot"],
    lessonIds: ["storytelling-avec-ia-lesson"],
    exerciseIds: ["storytelling-avec-ia-guided", "storytelling-avec-ia-quiz"],
    levelDescriptors: descriptors(
      "le storytelling assisté par IA",
      "Structure une demande de contenu autour d'une accroche, d'une tension et d'une résolution plutôt qu'une simple information à transmettre.",
      "Fournit un exemple concret de style à l'IA plutôt qu'une description abstraite quand le ton narratif compte.",
      "Diagnostique qu'un contenu qui n'accroche pas manque de tension ou de résolution plutôt que de blâmer uniquement la formulation.",
    ),
  },
  {
    id: "contenu-pour-reseaux-sociaux",
    moduleId: "raconter-une-histoire",
    title: "Adapter son contenu aux réseaux sociaux",
    description:
      "Adapter un même message de fond aux contraintes concrètes de chaque plateforme, plutôt que de recopier le même contenu partout à l'identique.",
    prerequisites: ["storytelling-avec-ia"],
    lessonIds: ["contenu-pour-reseaux-sociaux-lesson"],
    exerciseIds: ["contenu-pour-reseaux-sociaux-autonomous", "contenu-pour-reseaux-sociaux-quiz"],
    levelDescriptors: descriptors(
      "l'adaptation de contenu aux réseaux sociaux",
      "Adapte le format et la longueur d'un contenu selon la plateforme visée, plutôt que de le recopier à l'identique partout.",
      "Fournit des exemples de contenus qui ont déjà fonctionné dans sa niche plutôt que de demander un contenu 'viral' dans l'abstrait.",
      "Soigne systématiquement les premiers mots ou premières secondes d'un contenu, conscient de leur poids disproportionné sur l'attention.",
    ),
  },
  {
    id: "generation-images",
    moduleId: "creer-du-contenu-visuel-et-audio",
    title: "Générer des images avec l'IA",
    description:
      "Décrire des éléments visuels concrets (style, éclairage, cadrage) plutôt que des concepts abstraits, et itérer sur le prompt pour se rapprocher du résultat voulu.",
    prerequisites: ["storytelling-avec-ia"],
    lessonIds: ["generation-images-lesson"],
    exerciseIds: ["generation-images-autonomous", "generation-images-quiz"],
    levelDescriptors: descriptors(
      "la génération d'images par IA",
      "Décrit des éléments visuels concrets (style, éclairage, cadrage) plutôt que des concepts abstraits dans un prompt d'image.",
      "Itère sur un prompt d'image en ajoutant un détail concret à la fois pour se rapprocher du résultat voulu.",
      "Vérifie les conditions d'utilisation d'un outil de génération d'image avant tout usage commercial.",
    ),
  },
  {
    id: "generation-video-audio",
    moduleId: "creer-du-contenu-visuel-et-audio",
    title: "Générer de la vidéo et de l'audio",
    description:
      "Utiliser des outils de génération audio (voix off) et vidéo en connaissant leurs usages adaptés actuels et les enjeux de consentement propres au clonage vocal.",
    prerequisites: ["generation-images"],
    lessonIds: ["generation-video-audio-lesson"],
    exerciseIds: ["generation-video-audio-quiz"],
    levelDescriptors: descriptors(
      "la génération de vidéo et d'audio",
      "Choisit l'audio généré plutôt que la vidéo de bout en bout pour un usage qui demande de la fiabilité et de la cohérence.",
      "N'utilise jamais le clonage d'une voix précise sans consentement explicite de la personne concernée.",
      "Combine judicieusement audio et vidéo générés selon les forces et limites actuelles de chaque technologie.",
    ),
  },
  {
    id: "droits-et-ethique-creation",
    moduleId: "creer-du-contenu-visuel-et-audio",
    title: "Droits d'auteur et éthique de la création IA",
    description:
      "Vérifier systématiquement trois points avant de diffuser du contenu généré par IA : droits d'auteur, consentement, et transparence — sans les négliger sous prétexte de rapidité.",
    prerequisites: ["contenu-pour-reseaux-sociaux", "generation-video-audio"],
    lessonIds: ["droits-et-ethique-creation-lesson"],
    exerciseIds: [
      "droits-et-ethique-creation-autonomous",
      "droits-et-ethique-creation-quiz",
      "droits-et-ethique-creation-challenge",
    ],
    levelDescriptors: descriptors(
      "les droits d'auteur et l'éthique de la création IA",
      "Vérifie les droits d'usage avant toute diffusion commerciale d'un contenu généré par IA.",
      "Obtient systématiquement un consentement explicite avant d'utiliser la voix ou l'image d'une personne réelle.",
      "Applique une politique cohérente de transparence sur l'origine IA d'un contenu, sans exception opportuniste.",
    ),
  },
];
