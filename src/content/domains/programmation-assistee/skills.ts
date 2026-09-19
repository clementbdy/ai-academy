import type { Skill } from "@/content/types";
import { levelDescriptors as descriptors } from "@/content/level-descriptors";

export const programmationAssisteeSkills: Skill[] = [
  {
    id: "notions-de-base-du-code",
    moduleId: "comprendre-le-code-de-lia",
    title: "Les briques universelles du code",
    description:
      "Reconnaître les quelques concepts (variables, fonctions, conditions, boucles) présents dans presque tout langage, pour suivre la logique d'un code même sans en connaître la syntaxe exacte.",
    prerequisites: [],
    lessonIds: ["notions-de-base-du-code-lesson"],
    exerciseIds: ["notions-de-base-du-code-guided", "notions-de-base-du-code-quiz"],
    levelDescriptors: descriptors(
      "les briques universelles du code",
      "Repère des variables, fonctions, conditions ou boucles dans un vrai code, même dans un langage qu'il ne connaît pas.",
      "Explique la logique d'un code en langage courant plutôt qu'en recopiant du jargon technique non compris.",
      "Suit sans aide la logique d'un code de complexité modérée dans un langage qu'il découvre pour la première fois.",
    ),
  },
  {
    id: "json-donnees-structurees",
    moduleId: "comprendre-le-code-de-lia",
    title: "JSON et les données structurées",
    description:
      "Lire et produire des données structurées au format JSON — le format que tu retrouveras dans les API, les fichiers de configuration, et la plupart des outils no-code.",
    prerequisites: ["notions-de-base-du-code"],
    lessonIds: ["json-donnees-structurees-lesson"],
    exerciseIds: ["json-donnees-structurees-autonomous", "json-donnees-structurees-quiz"],
    levelDescriptors: descriptors(
      "le JSON et les données structurées",
      "Lit un objet JSON simple et identifie correctement ses clés et ses valeurs.",
      "Demande à un assistant de convertir des données non structurées en JSON quand un outil l'exige.",
      "Vérifie qu'un JSON produit par un assistant est syntaxiquement valide et fidèle aux données d'origine.",
    ),
  },
  {
    id: "prompter-du-code",
    moduleId: "collaborer-avec-lia-sur-du-code",
    title: "Bien prompter pour obtenir du code utile",
    description:
      "Appliquer le prompt engineering au code : préciser le langage exact, fournir le code existant, coller le message d'erreur complet, et demander une explication en plus du résultat.",
    prerequisites: ["json-donnees-structurees", "iteration-prompt"],
    lessonIds: ["prompter-du-code-lesson"],
    exerciseIds: ["prompter-du-code-autonomous", "prompter-du-code-quiz"],
    levelDescriptors: descriptors(
      "le prompting pour le code",
      "Précise le langage exact et fournit le code existant concerné plutôt que de décrire la tâche dans le vide.",
      "Colle le message d'erreur complet plutôt que de le paraphraser quand il demande une correction de bug.",
      "Demande systématiquement une explication en plus du code pour apprendre en résolvant la tâche.",
    ),
  },
  {
    id: "verifier-du-code-genere",
    moduleId: "collaborer-avec-lia-sur-du-code",
    title: "Vérifier du code généré par IA",
    description:
      "Exécuter réellement un code généré par IA et le tester sur des cas limites, plutôt que de lui faire confiance sur la seule lecture.",
    prerequisites: ["prompter-du-code"],
    lessonIds: ["verifier-du-code-genere-lesson"],
    exerciseIds: ["verifier-du-code-genere-autonomous", "verifier-du-code-genere-quiz"],
    levelDescriptors: descriptors(
      "la vérification de code généré par IA",
      "Exécute réellement un code généré avant de le considérer bon, plutôt que de juger sur la seule lecture.",
      "Teste au moins un cas limite (entrée vide, valeur inattendue) avant de faire confiance à un code généré.",
      "Vérifie qu'une fonction ou librairie citée dans une réponse existe réellement avant de s'appuyer dessus.",
    ),
  },
  {
    id: "git-github-bases",
    moduleId: "collaborer-avec-lia-sur-du-code",
    title: "Bases de Git et GitHub",
    description:
      "Comprendre à quoi sert un historique de versions (commit, dépôt) et pourquoi il reste indispensable même sur un projet largement construit avec l'aide de l'IA.",
    prerequisites: ["notions-de-base-du-code"],
    lessonIds: ["git-github-bases-lesson"],
    exerciseIds: ["git-github-bases-quiz"],
    levelDescriptors: descriptors(
      "Git et GitHub",
      "Committe régulièrement son travail avec un message clair, plutôt que de laisser le code sans historique.",
      "Utilise l'historique de commits pour revenir à une version antérieure quand une modification casse quelque chose.",
      "Structure ses commits en changements cohérents et bien décrits plutôt qu'en un seul bloc indistinct.",
    ),
  },
];
