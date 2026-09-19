import type { Project } from "@/content/types";

// Chaque projet ne se débloque qu'une fois ses compétences requises réellement
// acquises (niveau >= 3) — voir src/lib/project-progress.ts. Un seul projet
// pour l'instant : les projets 1 à 9 de la vision d'origine (prompting,
// assistant personnel, agents, RAG...) demandent des domaines qui n'existent
// pas encore. Celui-ci est le seul réalisable avec le seul contenu actuel
// (Fondations de l'IA) — d'autres arriveront avec chaque nouveau domaine.
export const projects: Project[] = [
  {
    id: "audit-fiabilite-ia",
    title: "Ton audit personnel de fiabilité IA",
    difficulty: "débutant",
    description:
      "Synthétise ce que tu as appris sur les LLM, le contexte, la multimodalité, le raisonnement et les hallucinations en un document pratique que tu pourras relire avant de confier une vraie tâche à un assistant IA.",
    instructions: `Choisis **3 tâches concrètes** que tu pourrais confier à un assistant IA dans les prochaines semaines — professionnelles ou personnelles (ex. rédiger un email important, résumer un contrat, analyser une capture d'écran d'un tableau de bord, préparer une présentation).

Pour **chacune** des 3 tâches, réponds par écrit à ces quatre questions :

1. **Risque d'hallucination** : élevé, moyen ou faible sur cette tâche précise ? Justifie en une phrase.
2. **Modalité d'entrée** : texte, image ou document est-il le plus adapté pour cette tâche ?
3. **Raisonnement** : la tâche demande-t-elle plusieurs étapes logiques dépendantes, ou une réponse directe suffit-elle ?
4. **Vérification** : quelle action concrète feras-tu avant de faire confiance à la réponse obtenue ?

Rédige le tout comme un document que tu pourrais réellement relire avant de démarrer une vraie tâche IA — pas un exercice académique abstrait.`,
    requiredSkillIds: [
      "llm-bases",
      "tokens-contexte",
      "multimodalite",
      "raisonnement",
      "hallucinations-limites",
    ],
    skillsDeveloped: [
      "llm-bases",
      "tokens-contexte",
      "multimodalite",
      "raisonnement",
      "hallucinations-limites",
    ],
    criteria: [
      {
        id: "c1",
        description: "Le document couvre exactement 3 tâches concrètes et réelles (pas des exemples génériques).",
      },
      {
        id: "c2",
        description: "Pour chaque tâche, le risque d'hallucination est évalué (élevé/moyen/faible) avec une justification.",
      },
      {
        id: "c3",
        description: "Pour chaque tâche, la modalité d'entrée la plus adaptée est identifiée et justifiée.",
      },
      {
        id: "c4",
        description: "Pour chaque tâche, le besoin (ou non) de raisonnement multi-étapes est explicitement tranché.",
      },
      {
        id: "c5",
        description: "Pour chaque tâche, une action de vérification concrète et réutilisable est proposée.",
      },
    ],
  },
];
