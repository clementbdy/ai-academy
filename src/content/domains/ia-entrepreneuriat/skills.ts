import type { Skill } from "@/content/types";
import { levelDescriptors as descriptors } from "@/content/level-descriptors";

export const iaEntrepreneuriatSkills: Skill[] = [
  {
    id: "recherche-didee-et-de-marche",
    moduleId: "valider-une-idee-avec-lia",
    title: "Rechercher une idée et étudier son marché avec l'IA",
    description:
      "Vérifier qu'un vrai problème existe et étudier la concurrence avant de construire quoi que ce soit, en vérifiant systématiquement les données chiffrées citées par un assistant.",
    prerequisites: ["recherche-augmentee"],
    lessonIds: ["recherche-didee-et-de-marche-lesson"],
    exerciseIds: ["recherche-didee-et-de-marche-autonomous", "recherche-didee-et-de-marche-quiz"],
    levelDescriptors: descriptors(
      "la recherche d'idée et l'étude de marché",
      "Part d'un problème réel identifié plutôt que d'une solution déjà décidée à l'avance.",
      "Vérifie systématiquement via une source indépendante toute donnée chiffrée de marché citée par un assistant IA.",
      "Interprète l'existence de concurrents comme un signal de validation du problème plutôt que comme un obstacle décourageant.",
    ),
  },
  {
    id: "definir-cible-et-offre",
    moduleId: "valider-une-idee-avec-lia",
    title: "Définir sa cible et son offre avec l'IA",
    description:
      "Préciser un client type concret plutôt qu'une audience générique, et formuler une offre comme réponse directe à son problème plutôt que comme une liste de fonctionnalités.",
    prerequisites: ["recherche-didee-et-de-marche"],
    lessonIds: ["definir-cible-et-offre-lesson"],
    exerciseIds: ["definir-cible-et-offre-guided", "definir-cible-et-offre-quiz"],
    levelDescriptors: descriptors(
      "la définition de cible et d'offre",
      "Décrit son client type avec des détails concrets (contraintes, solutions déjà essayées) plutôt qu'une audience générique.",
      "Formule son offre comme réponse au problème précis du client type plutôt que comme une liste de fonctionnalités.",
      "Utilise un assistant IA pour simuler la réaction du client type à une offre avant d'investir du temps dans le développement.",
    ),
  },
  {
    id: "construire-un-mvp",
    moduleId: "lancer-et-faire-tourner-avec-lia",
    title: "Construire un MVP avec l'aide de l'IA",
    description:
      "Définir la version la plus simple qui teste l'hypothèse centrale d'une offre, souvent sans aucun développement technique dans un premier temps.",
    prerequisites: ["definir-cible-et-offre", "choisir-la-bonne-brique"],
    lessonIds: ["construire-un-mvp-lesson"],
    exerciseIds: ["construire-un-mvp-autonomous", "construire-un-mvp-quiz"],
    levelDescriptors: descriptors(
      "la construction d'un MVP",
      "Formule explicitement l'hypothèse centrale à tester avant de définir la version à construire.",
      "Teste une hypothèse par un processus manuel assisté par IA avant de construire quoi que ce soit de technique.",
      "Résiste à l'envie de construire plus que le strict nécessaire pour tester l'hypothèse en cours.",
    ),
  },
  {
    id: "acquisition-et-contenu",
    moduleId: "lancer-et-faire-tourner-avec-lia",
    title: "Acquérir ses premiers clients avec du contenu assisté par IA",
    description:
      "Créer du contenu qui répond directement au problème identifié lors de l'étude de marché, plutôt que du contenu générique déconnecté de la cible.",
    prerequisites: ["definir-cible-et-offre", "contenu-pour-reseaux-sociaux"],
    lessonIds: ["acquisition-et-contenu-lesson"],
    exerciseIds: ["acquisition-et-contenu-quiz"],
    levelDescriptors: descriptors(
      "l'acquisition de clients par le contenu",
      "Réutilise les questions réelles de sa cible identifiées lors de l'étude de marché comme matière première de contenu.",
      "Produit du contenu qui répond directement au problème de sa cible plutôt qu'un contenu générique.",
      "Maintient un rythme de production de contenu réaliste, conscient que l'acquisition prend du temps à porter ses fruits.",
    ),
  },
  {
    id: "automatiser-les-operations",
    moduleId: "lancer-et-faire-tourner-avec-lia",
    title: "Automatiser les opérations du quotidien",
    description:
      "N'automatiser qu'un processus déjà éprouvé manuellement plusieurs fois, en choisissant la brique adaptée à sa nature réelle.",
    prerequisites: ["construire-un-mvp", "acquisition-et-contenu"],
    lessonIds: ["automatiser-les-operations-lesson"],
    exerciseIds: [
      "automatiser-les-operations-autonomous",
      "automatiser-les-operations-quiz",
      "automatiser-les-operations-challenge",
    ],
    levelDescriptors: descriptors(
      "l'automatisation des opérations",
      "Vérifie qu'un processus a déjà été réalisé manuellement avec succès plusieurs fois avant d'envisager de l'automatiser.",
      "Choisit entre automatisation simple et agent selon que le processus est stable ou nécessite des décisions variables.",
      "Identifie le bon moment pour automatiser un processus, ni trop tôt (méthode non éprouvée) ni trop tard (temps perdu inutilement).",
    ),
  },
];
