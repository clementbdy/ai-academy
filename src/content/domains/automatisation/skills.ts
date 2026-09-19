import type { Skill } from "@/content/types";
import { levelDescriptors as descriptors } from "@/content/level-descriptors";

export const automatisationSkills: Skill[] = [
  {
    id: "declencheurs-actions",
    moduleId: "les-briques-de-lautomatisation",
    title: "Déclencheurs et actions",
    description:
      "Comprendre que toute automatisation repose sur un événement précis qui la déclenche, suivi d'une ou plusieurs actions concrètes.",
    prerequisites: [],
    lessonIds: ["declencheurs-actions-lesson"],
    exerciseIds: ["declencheurs-actions-guided", "declencheurs-actions-quiz"],
    levelDescriptors: descriptors(
      "les déclencheurs et actions",
      "Identifie un déclencheur précis et des actions concrètes avant de commencer à construire une automatisation.",
      "Choisit entre un déclencheur instantané et une vérification périodique selon l'urgence réelle de la tâche.",
      "Repère qu'une automatisation ratée vient d'un déclencheur mal défini plutôt que des actions elles-mêmes.",
    ),
  },
  {
    id: "variables-donnees",
    moduleId: "les-briques-de-lautomatisation",
    title: "Variables et transfert de données entre étapes",
    description:
      "Utiliser les données produites par une étape (email, champ de formulaire...) comme variables réutilisables dans les étapes suivantes, au lieu de texte fixe.",
    prerequisites: ["declencheurs-actions"],
    lessonIds: ["variables-donnees-lesson"],
    exerciseIds: ["variables-donnees-quiz"],
    levelDescriptors: descriptors(
      "les variables et le transfert de données",
      "Utilise les données d'une étape précédente comme variable plutôt que de retaper un texte fixe.",
      "Teste un scénario avec des données réelles avant de le construire entièrement, pour connaître les vrais noms de champs disponibles.",
      "Diagnostique qu'un résultat inattendu vient d'une variable mal référencée plutôt que d'une erreur de logique.",
    ),
  },
  {
    id: "conditions-boucles",
    moduleId: "construire-des-automatisations-fiables",
    title: "Conditions et boucles",
    description:
      "Faire varier le comportement d'un scénario selon les données reçues (condition), et traiter plusieurs éléments un par un (boucle).",
    prerequisites: ["variables-donnees"],
    lessonIds: ["conditions-boucles-lesson"],
    exerciseIds: ["conditions-boucles-autonomous", "conditions-boucles-quiz"],
    levelDescriptors: descriptors(
      "les conditions et boucles",
      "Ajoute une condition pour filtrer les données non pertinentes avant de déclencher une action coûteuse ou inutile.",
      "Utilise une boucle dès qu'un scénario doit traiter plusieurs éléments individuellement plutôt qu'en un seul bloc.",
      "Combine plusieurs conditions imbriquées sans perdre la lisibilité du scénario.",
    ),
  },
  {
    id: "webhooks-api",
    moduleId: "construire-des-automatisations-fiables",
    title: "Webhooks et API",
    description:
      "Comprendre qu'un webhook déclenche une automatisation instantanément, et que la plupart des actions no-code sont en réalité des appels à l'API d'un service, généralement en JSON.",
    prerequisites: ["variables-donnees"],
    lessonIds: ["webhooks-api-lesson"],
    exerciseIds: ["webhooks-api-quiz"],
    levelDescriptors: descriptors(
      "les webhooks et API",
      "Choisit un webhook plutôt qu'une vérification périodique quand une réaction instantanée est nécessaire.",
      "Se connecte à un service via une requête API personnalisée quand aucune intégration prête à l'emploi n'existe.",
      "Diagnostique qu'un échec d'action vient d'une donnée mal formée pour l'API du service concerné.",
    ),
  },
  {
    id: "gestion-erreurs-automatisation",
    moduleId: "construire-des-automatisations-fiables",
    title: "Gestion des erreurs dans une automatisation",
    description:
      "Concevoir un scénario pour qu'un échec soit détecté et signalé, plutôt que de découvrir des mois plus tard qu'il ne fonctionnait plus depuis longtemps.",
    prerequisites: ["conditions-boucles", "webhooks-api"],
    lessonIds: ["gestion-erreurs-automatisation-lesson"],
    exerciseIds: ["gestion-erreurs-automatisation-autonomous", "gestion-erreurs-automatisation-quiz"],
    levelDescriptors: descriptors(
      "la gestion des erreurs dans une automatisation",
      "Ajoute un gestionnaire d'erreur ou une notification d'échec sur une automatisation qui tourne sans surveillance.",
      "Teste un scénario avec des données volontairement problématiques avant de lui faire confiance en conditions réelles.",
      "Anticipe les causes d'échec les plus probables d'un scénario avant même de le mettre en production.",
    ),
  },
];
