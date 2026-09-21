import type { Project } from "@/content/types";

// Chaque projet ne se débloque qu'une fois ses compétences requises réellement
// acquises (niveau >= 3) — voir src/lib/project-progress.ts. Un projet par
// domaine construit (sauf Context Engineering et Assistants IA, combinés en
// un seul projet d'assistant personnel, et IA & Entrepreneuriat qui sert de
// support au projet final de synthèse) — la version pratique de la vision
// d'origine "Projets 1 à 9 + projet final".
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
      { id: "c1", description: "Le document couvre exactement 3 tâches concrètes et réelles (pas des exemples génériques)." },
      { id: "c2", description: "Pour chaque tâche, le risque d'hallucination est évalué (élevé/moyen/faible) avec une justification." },
      { id: "c3", description: "Pour chaque tâche, la modalité d'entrée la plus adaptée est identifiée et justifiée." },
      { id: "c4", description: "Pour chaque tâche, le besoin (ou non) de raisonnement multi-étapes est explicitement tranché." },
      { id: "c5", description: "Pour chaque tâche, une action de vérification concrète et réutilisable est proposée." },
    ],
  },
  {
    id: "systeme-de-prompting-reutilisable",
    title: "Ton système de prompting réutilisable",
    difficulty: "débutant",
    description:
      "Construis et documente un prompt réutilisable pour une tâche que tu refais souvent, en appliquant rôle, contexte, contraintes, exemples et itération.",
    instructions: `Choisis une tâche de rédaction ou d'analyse que tu refais régulièrement (répondre à un type d'email, résumer un type de document, générer un type de contenu récurrent).

Construis un prompt réutilisable pour cette tâche, étape par étape :

1. Rédige une première version avec un rôle, un contexte et un objectif explicites.
2. Ajoute les contraintes et le format de sortie dont tu as réellement besoin.
3. Si le style compte, ajoute un exemple concret plutôt qu'une description abstraite.
4. Formule les critères que la réponse doit remplir.
5. Teste ce prompt sur 2 cas réels différents, note ce qui ne convient pas, et corrige-le en changeant une seule variable à la fois.

Sauvegarde la version finale dans l'AI Lab de cette application, avec tes notes sur pourquoi elle fonctionne.`,
    requiredSkillIds: [
      "role-contexte-objectif",
      "contraintes-format",
      "exemples-few-shot",
      "criteres-verification",
      "iteration-prompt",
    ],
    skillsDeveloped: [
      "role-contexte-objectif",
      "contraintes-format",
      "exemples-few-shot",
      "criteres-verification",
      "iteration-prompt",
    ],
    criteria: [
      { id: "c1", description: "Le prompt final contient un rôle, un contexte et un objectif explicites." },
      { id: "c2", description: "Le prompt précise des contraintes et/ou un format de sortie clair." },
      { id: "c3", description: "Le prompt a été testé sur au moins 2 cas réels différents, avec au moins une itération documentée entre les deux." },
      { id: "c4", description: "Le prompt final est sauvegardé dans l'AI Lab, avec des notes sur son usage." },
    ],
  },
  {
    id: "assistant-ia-personnel",
    title: "Ton assistant IA personnel",
    difficulty: "intermédiaire",
    description:
      "Configure un assistant IA avec des instructions permanentes et des documents de référence pour un usage réel et récurrent, en choisissant consciemment quel outil utiliser.",
    instructions: `Choisis un usage récurrent réel — un assistant pour ton travail, pour un projet personnel, ou pour apprendre.

1. Choisis l'assistant le plus adapté (ChatGPT, Claude, Gemini) selon son écosystème et ses forces réelles pour cet usage, pas par habitude.
2. Configure des instructions personnalisées pour les règles que tu répéterais sinon à chaque conversation.
3. Attache au moins un document de référence réel — dans un espace type "projet" si l'usage est vraiment récurrent.
4. Vérifie ce que l'assistant retient déjà en mémoire sur toi, et corrige ou supprime ce qui est obsolète.
5. Utilise cet assistant configuré sur au moins 3 conversations réelles, et compare avec ce que donnerait une conversation non configurée.`,
    requiredSkillIds: [
      "instructions-personnalisees",
      "fournir-des-documents",
      "memoire-assistant",
      "bases-de-connaissances",
      "contexte-outils",
      "comparer-les-assistants",
      "recherche-augmentee",
      "analyser-des-fichiers",
      "assistants-personnalises",
    ],
    skillsDeveloped: [
      "instructions-personnalisees",
      "fournir-des-documents",
      "bases-de-connaissances",
      "comparer-les-assistants",
      "assistants-personnalises",
    ],
    criteria: [
      { id: "c1", description: "Le choix d'assistant est justifié par un critère concret (écosystème, contexte, intégrations), pas une habitude." },
      { id: "c2", description: "Des instructions personnalisées réelles ont été configurées, pas un exemple fictif." },
      { id: "c3", description: "Au moins un document de référence réel est attaché à l'assistant." },
      { id: "c4", description: "L'assistant configuré a été utilisé sur au moins 3 conversations réelles." },
      { id: "c5", description: "Le rapport compare concrètement l'expérience avec et sans cette configuration." },
    ],
  },
  {
    id: "systeme-de-productivite-ia",
    title: "Ton système de productivité IA",
    difficulty: "débutant",
    description:
      "Mets en place un usage réel et mesuré de l'IA sur plusieurs activités de ton quotidien, avec une évaluation honnête du gain obtenu à chaque fois.",
    instructions: `Sur une semaine, utilise l'IA pour au moins 3 tâches de productivité réelles, couvrant au moins 2 catégories parmi rédaction, synthèse, apprentissage et organisation.

Pour chaque tâche :

1. Note la tâche et la catégorie concernée.
2. Utilise l'IA pour l'accomplir, en appliquant ce que tu as appris (formuler le besoin avant une synthèse, retravailler un premier jet dans ton propre ton, etc.).
3. Sauvegarde tout résultat réutilisable (synthèse, prompt) dans les Notes ou l'AI Lab.
4. À la fin de la semaine, évalue honnêtement, tâche par tâche, si l'IA t'a réellement fait gagner du temps.`,
    requiredSkillIds: [
      "assistance-a-la-redaction",
      "synthese-et-prise-de-notes",
      "ia-pour-apprendre",
      "organisation-des-taches",
      "mesurer-le-gain-reel",
    ],
    skillsDeveloped: [
      "assistance-a-la-redaction",
      "synthese-et-prise-de-notes",
      "ia-pour-apprendre",
      "organisation-des-taches",
      "mesurer-le-gain-reel",
    ],
    criteria: [
      { id: "c1", description: "Au moins 3 tâches réelles couvrant au moins 2 catégories différentes sont documentées." },
      { id: "c2", description: "Pour chaque tâche, la méthode appliquée est décrite, pas seulement le résultat obtenu." },
      { id: "c3", description: "Au moins un résultat réutilisable a été sauvegardé dans Notes ou l'AI Lab." },
      { id: "c4", description: "Le bilan final donne un verdict honnête (gain réel ou non) pour chaque tâche, pas une évaluation globale vague." },
    ],
  },
  {
    id: "automatisation-de-bout-en-bout",
    title: "Une automatisation complète, de bout en bout",
    difficulty: "intermédiaire",
    description:
      "Construis une automatisation réelle dans Make, n8n ou Zapier, avec un déclencheur, une condition, une variable, et une gestion d'erreur testée.",
    instructions: `Choisis une tâche répétitive réelle que tu pourrais automatiser. Construis un scénario complet dans Make, n8n ou Zapier (une version gratuite suffit) qui inclut :

1. Un déclencheur clairement identifié.
2. Au moins une variable réutilisée d'une étape à l'autre.
3. Au moins une condition qui distingue deux cas différents.
4. Un gestionnaire d'erreur ou une notification en cas d'échec.

Teste le scénario avec des données réelles, puis avec des données volontairement problématiques pour vérifier que la gestion d'erreur fonctionne vraiment.`,
    requiredSkillIds: [
      "declencheurs-actions",
      "variables-donnees",
      "conditions-boucles",
      "webhooks-api",
      "gestion-erreurs-automatisation",
    ],
    skillsDeveloped: [
      "declencheurs-actions",
      "variables-donnees",
      "conditions-boucles",
      "webhooks-api",
      "gestion-erreurs-automatisation",
    ],
    criteria: [
      { id: "c1", description: "Le scénario a été réellement construit dans un outil, pas seulement décrit sur papier." },
      { id: "c2", description: "Le scénario contient au moins une condition avec deux issues différentes." },
      { id: "c3", description: "Un gestionnaire d'erreur ou une notification d'échec est en place et a été testé." },
      { id: "c4", description: "Le rapport décrit précisément le résultat du test avec des données problématiques." },
    ],
  },
  {
    id: "workflow-de-creation-de-contenu",
    title: "Un workflow de création de contenu",
    difficulty: "intermédiaire",
    description:
      "Conçois un vrai contenu du début à la fin — histoire structurée, adapté à plusieurs formats, avec un visuel ou un audio généré — en respectant les questions de droits et d'éthique.",
    instructions: `Choisis un sujet réel que tu veux publier ou pourrais publier.

1. Structure-le avec une accroche, une tension et une résolution — teste plusieurs accroches avant de choisir la meilleure.
2. Adapte ce même contenu à 2 formats de plateformes différents (ex. un post texte et un script vidéo courte).
3. Si c'est pertinent pour ce contenu, génère au moins un visuel ou un extrait audio pour l'accompagner, en itérant sur le prompt.
4. Avant de publier (réellement ou fictivement), vérifie les 3 points de vigilance : droits d'auteur, consentement, transparence.`,
    requiredSkillIds: [
      "storytelling-avec-ia",
      "contenu-pour-reseaux-sociaux",
      "generation-images",
      "generation-video-audio",
      "droits-et-ethique-creation",
    ],
    skillsDeveloped: [
      "storytelling-avec-ia",
      "contenu-pour-reseaux-sociaux",
      "generation-images",
      "droits-et-ethique-creation",
    ],
    criteria: [
      { id: "c1", description: "Le contenu a une structure claire, avec une accroche testée sur plusieurs versions." },
      { id: "c2", description: "Le contenu est réellement adapté (pas juste copié) à 2 formats de plateformes différents." },
      { id: "c3", description: "Si un visuel ou un audio a été généré, au moins une itération de prompt est documentée." },
      { id: "c4", description: "Les 3 points de vigilance (droits, consentement, transparence) sont explicitement vérifiés pour ce contenu précis." },
    ],
  },
  {
    id: "mini-application-avec-lia",
    title: "Une mini-application construite avec l'aide de l'IA",
    difficulty: "intermédiaire",
    description:
      "Construis un petit outil fonctionnel avec l'aide d'un assistant IA, avec un vrai suivi Git et une vérification systématique du code généré.",
    instructions: `Choisis un petit outil utile pour toi (un script, une page web simple, un utilitaire). Avec l'aide d'un assistant IA :

1. Initialise un dépôt Git dès le départ.
2. Prompte le code en précisant le langage exact et en fournissant le code existant à chaque itération.
3. Exécute réellement chaque version du code, et teste au moins un cas limite.
4. Committe régulièrement, avec des messages clairs décrivant chaque changement.`,
    requiredSkillIds: [
      "notions-de-base-du-code",
      "json-donnees-structurees",
      "prompter-du-code",
      "verifier-du-code-genere",
      "git-github-bases",
    ],
    skillsDeveloped: [
      "notions-de-base-du-code",
      "prompter-du-code",
      "verifier-du-code-genere",
      "git-github-bases",
    ],
    criteria: [
      { id: "c1", description: "Un dépôt Git existe avec au moins 3 commits distincts et descriptifs." },
      { id: "c2", description: "Le code a été réellement exécuté, pas seulement généré et relu." },
      { id: "c3", description: "Au moins un cas limite a été testé sur le résultat final." },
      { id: "c4", description: "Le rapport décrit comment le code a été vérifié à chaque itération, pas seulement une fois à la toute fin." },
    ],
  },
  {
    id: "premier-agent-ia",
    title: "Ton premier agent IA",
    difficulty: "avancé",
    description:
      "Confie une tâche à plusieurs étapes à un outil agentique réel, avec un objectif explicite, une politique de validation définie à l'avance, et une supervision active.",
    instructions: `Choisis un outil agentique réel (Claude Code, un agent de recherche, un assistant avec exécution de code, un node "agent" dans n8n/Make). Avant de le lancer :

1. Formule un objectif avec un critère de réussite explicite.
2. Liste les outils dont l'agent aura réellement besoin, rien de plus.
3. Définis à l'avance une politique de validation (autonome / confirmation requise / jamais autorisé) pour les actions possibles.

Lance la tâche, supervise ses étapes intermédiaires — pas seulement le résultat final — et documente ce qui s'est passé.`,
    requiredSkillIds: [
      "chatbot-vs-agent",
      "outils-dun-agent",
      "objectifs-et-planification",
      "supervision-agent",
      "validation-humaine",
    ],
    skillsDeveloped: [
      "chatbot-vs-agent",
      "outils-dun-agent",
      "objectifs-et-planification",
      "supervision-agent",
      "validation-humaine",
    ],
    criteria: [
      { id: "c1", description: "L'objectif et son critère de réussite ont été formulés avant de lancer la tâche, pas après coup." },
      { id: "c2", description: "Une politique de validation à 3 catégories a été définie à l'avance, avec au moins une action classée \"jamais autorisée sans confirmation\"." },
      { id: "c3", description: "Le rapport décrit au moins 2 étapes intermédiaires réellement observées, pas seulement le résultat final." },
      { id: "c4", description: "Le rapport indique si le résultat correspond au critère de réussite défini au départ, et si la politique de validation a été respectée." },
    ],
  },
  {
    id: "assistant-rag-personnel",
    title: "Un assistant RAG sur tes propres documents",
    difficulty: "avancé",
    description:
      "Mets en place un système RAG réel sur tes propres documents, et applique les tests de fiabilité avant de lui faire confiance.",
    instructions: `Choisis un ensemble réel de documents (notes de cours, documentation, contrats). Mets-les à disposition d'un outil de type RAG (NotebookLM ou équivalent).

1. Pose une question dont tu sais que la réponse est présente dans les documents, et vérifie la source citée.
2. Pose une question dont tu sais que la réponse est absente, et observe le comportement du système.
3. Pose une question qui nécessite de combiner au moins 2 documents différents.

Documente les 3 résultats et formule ton verdict de fiabilité global sur ce système.`,
    requiredSkillIds: [
      "embeddings-et-recherche-semantique",
      "chunking",
      "bases-vectorielles",
      "pipeline-rag-complet",
      "verifier-un-systeme-rag",
    ],
    skillsDeveloped: [
      "embeddings-et-recherche-semantique",
      "pipeline-rag-complet",
      "verifier-un-systeme-rag",
    ],
    criteria: [
      { id: "c1", description: "Les documents utilisés sont réels et réellement mis à disposition de l'outil, pas hypothétiques." },
      { id: "c2", description: "Le test \"réponse présente\" est vérifié avec la vraie source, pas supposé correct." },
      { id: "c3", description: "Le test \"réponse absente\" rapporte honnêtement si le système a inventé une réponse ou reconnu l'absence d'information." },
      { id: "c4", description: "Le test de combinaison de sources est documenté avec son résultat." },
      { id: "c5", description: "Un verdict de fiabilité global est formulé sur la base des 3 tests, pas une impression générale." },
    ],
  },
  {
    id: "systeme-ia-multimodal",
    title: "Un système IA multimodal",
    difficulty: "avancé",
    description:
      "Conçois un système combinant plusieurs briques et au moins un enchaînement multimodal, en identifiant ses points de fragilité.",
    instructions: `Esquisse un système IA réel qui t'intéresserait, même partiellement réalisable dans l'immédiat.

1. Décompose-le en ses 4 briques : source de données, décision, outils, sortie.
2. Justifie le choix de la brique de décision (prompt, automatisation, RAG ou agent) pour chaque étape qui en a besoin.
3. Assure-toi qu'il inclut au moins un enchaînement multimodal réel (ex. audio vers texte vers action).
4. Identifie 3 points de jonction fragiles entre les briques, et une mesure de fiabilisation concrète pour chacun.`,
    requiredSkillIds: [
      "architecture-dun-systeme-ia",
      "choisir-la-bonne-brique",
      "connecter-les-briques",
      "systemes-multimodaux",
      "fiabiliser-un-systeme-complet",
    ],
    skillsDeveloped: [
      "architecture-dun-systeme-ia",
      "choisir-la-bonne-brique",
      "systemes-multimodaux",
      "fiabiliser-un-systeme-complet",
    ],
    criteria: [
      { id: "c1", description: "Les 4 briques du système sont clairement identifiées et décrites." },
      { id: "c2", description: "Le choix de chaque brique de décision est justifié par la nature du besoin, pas arbitraire." },
      { id: "c3", description: "Le système inclut un enchaînement d'au moins 2 changements de modalité ou de forme de données." },
      { id: "c4", description: "3 points de jonction fragiles sont identifiés, chacun avec une mesure de fiabilisation concrète." },
    ],
  },
  {
    id: "ton-ai-operating-system",
    title: "Ton propre \"AI Operating System\"",
    difficulty: "expert",
    description:
      "Le projet de synthèse de toute la formation : un système personnel réel qui combine recherche, choix de briques, RAG, agents et automatisation pour t'aider concrètement dans une activité récurrente.",
    instructions: `Choisis une activité récurrente réelle de ta vie professionnelle ou personnelle que tu veux systématiser avec l'IA — pas un exercice fictif sans enjeu.

1. Esquisse le système complet en 4 briques (données, décision, outils, sortie), en justifiant chaque choix.
2. S'il a besoin de connaissances privées, mets en place un vrai système RAG sur tes documents.
3. S'il a besoin de décisions variables, confie cette partie à un agent avec un objectif et une politique de validation clairs.
4. Automatise au moins une partie du processus — seulement si tu l'as déjà éprouvée manuellement plusieurs fois.
5. Documente 3 points de fragilité du système et comment tu les as traités.

Ce système n'a pas besoin d'être parfait ni complet : il doit être réel, avoir été testé au moins une fois de bout en bout, et refléter les choix — et les compromis — que tu as appris à faire tout au long de cette formation.`,
    requiredSkillIds: ["automatiser-les-operations"],
    skillsDeveloped: [
      "architecture-dun-systeme-ia",
      "pipeline-rag-complet",
      "outils-dun-agent",
      "storytelling-avec-ia",
      "choisir-la-bonne-brique",
      "automatiser-les-operations",
    ],
    criteria: [
      { id: "c1", description: "Le système répond à un besoin réel et récurrent, pas à un exercice fictif sans enjeu." },
      { id: "c2", description: "Les 4 briques du système sont identifiées, avec une justification pour chaque choix." },
      { id: "c3", description: "Le système a été testé au moins une fois de bout en bout sur un cas réel, pas seulement brique par brique." },
      { id: "c4", description: "Au moins 3 points de fragilité sont identifiés, chacun avec la mesure de fiabilisation appliquée." },
      { id: "c5", description: "Le rapport relie explicitement les choix faits à au moins 3 notions distinctes apprises dans la formation." },
    ],
  },
];
