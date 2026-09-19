import type { ToolEntry } from "@/content/types";

// Bibliothèque d'outils IA. Contenu volontairement séparé du reste de
// l'application car il se périme vite (prix, fonctionnalités) — à revoir
// régulièrement plutôt que gravé dans le marbre. pricingNote reste
// qualitatif exprès : un prix exact affiché ici serait faux en quelques mois.
export const tools: ToolEntry[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    category: "Assistant IA généraliste",
    description:
      "Assistant conversationnel d'OpenAI, avec navigation web, exécution de code, génération d'images et mémoire persistante entre conversations.",
    useCases: ["Rédaction", "Recherche", "Brainstorming", "Analyse de documents"],
    level: "débutant",
    pricing: "freemium",
    pricingNote: "Gratuit avec limites d'usage ; formules payantes pour plus de capacité et de modèles.",
    alternatives: ["Claude", "Gemini"],
    limitations:
      "Peut halluciner sur des faits précis ; la mémoire persistante peut mélanger des contextes de projets différents si elle n'est pas bien gérée.",
  },
  {
    id: "claude",
    name: "Claude",
    category: "Assistant IA généraliste",
    description:
      "Assistant conversationnel d'Anthropic, avec une fenêtre de contexte large, de bonnes capacités de rédaction et d'analyse de documents longs, et un mode agentique (Claude Code) pour les tâches de développement.",
    useCases: ["Rédaction", "Analyse de longs documents", "Programmation assistée", "Agents"],
    level: "débutant",
    pricing: "freemium",
    pricingNote: "Gratuit avec limites d'usage ; formules payantes pour plus de capacité et de modèles.",
    alternatives: ["ChatGPT", "Gemini"],
    limitations:
      "Moins d'intégrations tierces grand public que ChatGPT au quotidien ; capacités multimodales en génération (image/audio) plus limitées.",
  },
  {
    id: "gemini",
    name: "Gemini",
    category: "Assistant IA généraliste",
    description:
      "Assistant conversationnel de Google, intégré nativement à Gmail, Docs, Sheets et le reste de Google Workspace.",
    useCases: ["Rédaction", "Recherche", "Automatisation dans Google Workspace"],
    level: "débutant",
    pricing: "freemium",
    pricingNote: "Gratuit avec limites d'usage ; formule payante liée à Google One / Workspace.",
    alternatives: ["ChatGPT", "Claude"],
    limitations:
      "Qualité de rédaction perçue comme plus inégale que ses concurrents sur certaines tâches créatives longues.",
  },
  {
    id: "perplexity",
    name: "Perplexity",
    category: "Recherche IA",
    description:
      "Moteur de recherche conversationnel qui répond en citant ses sources, pensé pour la recherche d'information plutôt que la conversation libre.",
    useCases: ["Recherche documentée", "Veille", "Vérification de faits avec sources"],
    level: "débutant",
    pricing: "freemium",
    pricingNote: "Gratuit avec limites d'usage ; formule payante pour plus de recherches et de modèles.",
    alternatives: ["Recherche IA de ChatGPT", "Google avec AI Overviews"],
    limitations:
      "Les sources citées ne garantissent pas l'exactitude du résumé qui en est fait ; à vérifier sur des sujets sensibles.",
  },
  {
    id: "notebooklm",
    name: "NotebookLM",
    category: "Analyse de documents / RAG personnel",
    description:
      "Outil de Google qui construit un espace de questions-réponses à partir de documents que tu importes toi-même — une forme de RAG personnel sans code.",
    useCases: ["Étudier un corpus de documents", "Synthèse de notes de cours", "Préparation de contenu à partir de sources"],
    level: "débutant",
    pricing: "freemium",
    pricingNote: "Gratuit avec limites d'usage ; capacité étendue via Google One / Workspace.",
    alternatives: ["Projets Claude", "GPT personnalisés avec fichiers"],
    limitations:
      "Reste limité aux documents fournis ; ne remplace pas un vrai pipeline RAG pour des volumes de documents importants.",
  },
  {
    id: "make",
    name: "Make",
    category: "Automatisation no-code",
    description:
      "Plateforme d'automatisation visuelle (ex-Integromat) pour connecter des applications entre elles via des scénarios, avec ou sans étapes IA.",
    useCases: ["Automatiser des tâches répétitives", "Connecter des outils entre eux", "Déclencher des actions sur événement"],
    level: "intermédiaire",
    pricing: "freemium",
    pricingNote: "Gratuit avec quota d'opérations limité ; formules payantes au volume d'opérations.",
    alternatives: ["n8n", "Zapier"],
    limitations:
      "La logique visuelle peut devenir difficile à maintenir sur des scénarios complexes ; le coût augmente avec le volume d'exécutions.",
  },
  {
    id: "n8n",
    name: "n8n",
    category: "Automatisation no-code",
    description:
      "Plateforme d'automatisation open-source, auto-hébergeable, avec un éditeur visuel de workflows et la possibilité d'ajouter du code personnalisé.",
    useCases: ["Automatiser des tâches répétitives", "Workflows IA avec plusieurs étapes", "Auto-hébergement pour maîtriser ses données"],
    level: "intermédiaire",
    pricing: "freemium",
    pricingNote: "Version open-source auto-hébergée gratuite ; offre cloud payante à l'usage.",
    alternatives: ["Make", "Zapier"],
    limitations:
      "L'auto-hébergement demande des compétences techniques ; la richesse des intégrations natives est un peu en retrait par rapport à Zapier.",
  },
  {
    id: "zapier",
    name: "Zapier",
    category: "Automatisation no-code",
    description:
      "Plateforme d'automatisation no-code avec le plus grand catalogue d'intégrations tierces, pensée pour la simplicité plutôt que la complexité visuelle.",
    useCases: ["Automatiser des tâches répétitives", "Connecter rapidement deux outils grand public"],
    level: "débutant",
    pricing: "freemium",
    pricingNote: "Gratuit avec quota de tâches limité ; formules payantes au volume de tâches.",
    alternatives: ["Make", "n8n"],
    limitations:
      "Devient rapidement coûteux à volume élevé ; moins flexible que Make ou n8n pour une logique conditionnelle complexe.",
  },
  {
    id: "midjourney",
    name: "Midjourney",
    category: "Génération d'images",
    description:
      "Générateur d'images IA reconnu pour la qualité esthétique de ses rendus, piloté par prompt texte.",
    useCases: ["Illustrations", "Concept art", "Visuels pour contenu social media"],
    level: "intermédiaire",
    pricing: "payant",
    pricingNote: "Aucune offre gratuite pérenne ; abonnement mensuel avec quota de générations.",
    alternatives: ["DALL-E (dans ChatGPT)", "Google Imagen (dans Gemini)"],
    limitations:
      "Contrôle plus indirect que d'autres outils (moins orienté édition précise) ; usage principal via Discord ou une interface web dédiée.",
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    category: "Génération audio / voix",
    description:
      "Plateforme de synthèse vocale IA permettant de générer des voix réalistes, cloner une voix, et produire de la narration pour de la vidéo ou de l'audio.",
    useCases: ["Voix off pour vidéo", "Narration audio", "Doublage"],
    level: "intermédiaire",
    pricing: "freemium",
    pricingNote: "Gratuit avec quota de caractères très limité ; formules payantes au volume généré.",
    alternatives: ["Voix synthétiques intégrées à d'autres suites (ex. CapCut, Descript)"],
    limitations:
      "Le clonage vocal soulève des questions de consentement et d'usage éthique à prendre au sérieux avant toute utilisation.",
  },
];
