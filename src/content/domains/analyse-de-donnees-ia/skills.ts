import type { Skill } from "@/content/types";
import { levelDescriptors as descriptors } from "@/content/level-descriptors";

export const analyseDeDonneesIaSkills: Skill[] = [
  {
    id: "preparer-des-donnees-pour-une-ia",
    moduleId: "explorer-des-donnees",
    title: "Préparer des données pour une IA",
    description:
      "Savoir sous quel format donner un jeu de données à une IA (CSV, Excel, tableau collé) et ce qu'il faut vérifier ou nettoyer avant, pour ne pas fausser l'analyse dès le départ.",
    prerequisites: ["analyser-des-fichiers"],
    lessonIds: ["preparer-des-donnees-pour-une-ia-lesson"],
    exerciseIds: ["preparer-des-donnees-pour-une-ia-guided", "preparer-des-donnees-pour-une-ia-quiz"],
    levelDescriptors: descriptors(
      "la préparation de données pour une IA",
      "Envoie un fichier de données dans un format structuré (CSV, Excel) plutôt que de coller un tableau mal formaté ou une capture d'écran.",
      "Vérifie les colonnes, unités et valeurs manquantes d'un jeu de données avant de demander une analyse, plutôt que de découvrir un problème dans les résultats.",
      "Documente pour un jeu de données récurrent les règles de nettoyage à appliquer systématiquement avant toute analyse IA.",
    ),
  },
  {
    id: "interroger-des-donnees-avec-lia",
    moduleId: "explorer-des-donnees",
    title: "Interroger des données avec l'IA",
    description:
      "Formuler une question d'analyse précise (plutôt qu'un vague \"analyse ce fichier\"), demander la méthode utilisée avant le résultat, et itérer sur une première réponse insuffisante.",
    prerequisites: ["preparer-des-donnees-pour-une-ia"],
    lessonIds: ["interroger-des-donnees-avec-lia-lesson"],
    exerciseIds: ["interroger-des-donnees-avec-lia-autonomous", "interroger-des-donnees-avec-lia-quiz"],
    levelDescriptors: descriptors(
      "l'interrogation de données avec l'IA",
      "Formule une question d'analyse précise portant sur une colonne ou un critère identifié, plutôt que de demander un résumé général.",
      "Demande systématiquement la méthode ou le calcul utilisé pour arriver à un résultat, pas seulement le résultat final.",
      "Construit une séquence de questions qui affine progressivement une analyse, en s'appuyant sur chaque réponse pour préciser la suivante.",
    ),
  },
  {
    id: "generer-des-visualisations-avec-lia",
    moduleId: "visualiser-et-verifier",
    title: "Générer des visualisations avec l'IA",
    description:
      "Choisir le bon type de graphique selon la question posée, et repérer une visualisation trompeuse (échelle tronquée, comparaison biaisée) avant de la réutiliser.",
    prerequisites: ["interroger-des-donnees-avec-lia"],
    lessonIds: ["generer-des-visualisations-avec-lia-lesson"],
    exerciseIds: ["generer-des-visualisations-avec-lia-guided", "generer-des-visualisations-avec-lia-quiz"],
    levelDescriptors: descriptors(
      "la génération de visualisations avec l'IA",
      "Demande explicitement le type de graphique adapté à sa question (évolution, comparaison, répartition) plutôt que de laisser l'IA choisir par défaut.",
      "Repère dans un graphique généré un axe tronqué, une échelle trompeuse ou un choix de visualisation inadapté au message réel des données.",
      "Définit, pour un usage régulier, un standard personnel de présentation de graphiques (échelles, légendes, choix de type) qu'il applique systématiquement.",
    ),
  },
  {
    id: "verifier-les-calculs-et-conclusions-ia",
    moduleId: "visualiser-et-verifier",
    title: "Vérifier les calculs et conclusions d'une IA",
    description:
      "Comprendre pourquoi un modèle peut se tromper sur un calcul ou tirer une conclusion hâtive (corrélation prise pour causalité, échantillon non représentatif), et vérifier avant d'agir sur ces conclusions.",
    prerequisites: ["generer-des-visualisations-avec-lia", "hallucinations-limites"],
    lessonIds: ["verifier-les-calculs-et-conclusions-ia-lesson"],
    exerciseIds: [
      "verifier-les-calculs-et-conclusions-ia-autonomous",
      "verifier-les-calculs-et-conclusions-ia-quiz",
    ],
    levelDescriptors: descriptors(
      "la vérification des calculs et conclusions d'une IA",
      "Recalcule ou fait recalculer par un second moyen au moins un chiffre clé produit par une IA avant de l'utiliser dans une décision.",
      "Distingue systématiquement, dans une conclusion produite par une IA, ce qui est une corrélation observée de ce qui est présenté comme une cause.",
      "Met en place, pour ses propres analyses récurrentes, une étape de vérification systématique (recalcul, taille d'échantillon, contre-exemple) avant de diffuser une conclusion.",
    ),
  },
];
