import type { Lesson } from "@/content/types";

export const contextEngineeringLessons: Lesson[] = [
  {
    id: "instructions-personnalisees-lesson",
    skillId: "instructions-personnalisees",
    title: "Instructions personnalisées et system prompt",
    body: `Le module précédent (Prompt Engineering) t'a appris à bien formuler *une* demande. Le context engineering s'occupe d'autre chose : concevoir l'environnement permanent dans lequel *toutes* tes demandes futures vont s'inscrire, pour ne plus avoir à tout répéter à chaque fois.

La plupart des assistants IA modernes (ChatGPT, Claude, Gemini) proposent un espace d'**instructions personnalisées** — parfois appelé aussi *system prompt* selon l'outil. Ce texte s'applique automatiquement à chaque nouvelle conversation, sans que tu aies besoin de le recopier.

**Ce qui a sa place dans des instructions permanentes** : des règles qui reviennent dans presque toutes tes tâches — "réponds toujours en français, de façon directe, sans formules de politesse superflues", "je suis développeur, tu peux utiliser du vocabulaire technique sans le réexpliquer", "présente toujours les listes d'options sous forme de tableau comparatif".

**Ce qui n'a pas sa place dans des instructions permanentes** : une contrainte propre à une seule tâche ponctuelle. Si tu mets "réponds toujours en moins de 50 mots" en instruction permanente alors que ça ne concerne qu'une tâche précise, tu vas obtenir des réponses tronquées sur des sujets qui mériteraient d'être développés.

**Pourquoi ça change vraiment l'usage au quotidien** : sans instructions permanentes, tu répètes les mêmes précisions à chaque nouvelle conversation ("comme d'habitude, sois concis..."), ce qui alourdit chaque prompt et laisse place à l'oubli. Avec des instructions bien réglées une fois, chaque nouvelle conversation démarre déjà calibrée.

**Le point à retenir** : distingue ce qui doit s'appliquer à *toutes* tes conversations (→ instructions permanentes) de ce qui ne concerne qu'*une* tâche (→ à préciser dans le prompt, pas dans les instructions).`,
  },
  {
    id: "fournir-des-documents-lesson",
    skillId: "fournir-des-documents",
    title: "Fournir des documents comme contexte",
    body: `Tu as vu dans Fondations de l'IA qu'un modèle ne "sait" pas les choses comme une base de données, et que lui fournir la source directement réduit fortement le risque d'hallucination. Le context engineering précise *comment* fournir cette source efficacement.

**Envoyer le document plutôt que le décrire.** Si tu veux que le modèle analyse un contrat, colle ou importe le contrat lui-même — ne le résume pas de mémoire avant de poser ta question. Chaque étape de résumé manuel introduit une chance de perdre ou déformer une information.

**Sélectionner plutôt que tout envoyer.** Tu as vu que la fenêtre de contexte est limitée, et qu'un contexte surchargé dilue l'attention du modèle sur ce qui compte. Si un document fait 200 pages et que seule la section 3 t'intéresse, envoyer uniquement cette section donne généralement un meilleur résultat que d'envoyer les 200 pages en demandant de "se concentrer sur la section 3".

**Structurer clairement ce que tu colles.** Quand tu combines des instructions et un document dans un même message, sépare-les visuellement — par exemple avec des délimiteurs (\`"""\`, ou des balises comme \`<document>...</document>\`). Sans cette séparation, le modèle peut confondre une phrase du document avec une instruction que tu lui donnes, surtout si le document contient lui-même des consignes ou des questions.

**Exemple de structure claire :**
\`\`\`
Instructions : résume le document ci-dessous en 3 points pour un lecteur pressé.

<document>
[contenu du document ici]
</document>
\`\`\`

**Le point à retenir** : la qualité de l'analyse d'un document dépend autant de *comment* tu le fournis (source directe, extrait pertinent, structure claire) que du prompt qui l'accompagne.`,
  },
  {
    id: "memoire-assistant-lesson",
    skillId: "memoire-assistant",
    title: "Mémoire et continuité entre conversations",
    body: `Par défaut, une nouvelle conversation avec un assistant IA démarre sans aucun souvenir des conversations précédentes — chaque fil est isolé, sauf si l'outil propose explicitement une fonctionnalité de **mémoire persistante** (comme la mémoire de ChatGPT ou de Claude, quand elle est activée).

Quand cette mémoire existe, elle retient certains faits d'une conversation à l'autre — ton métier, tes préférences de style, des projets en cours — pour éviter d'avoir à tout réexpliquer. C'est pratique, mais ça comporte deux risques concrets :

**Le risque d'obsolescence.** Une information mémorisée il y a plusieurs mois ("tu travailles sur le projet X") peut ne plus être vraie, et continuer à influencer silencieusement les réponses sans que tu t'en rendes compte.

**Le risque de mélange de contextes.** Une mémoire générale peut faire remonter, dans une conversation sur un sujet A, une préférence ou une information qui n'a de sens que pour un sujet B — surtout si tu utilises le même assistant pour des domaines très différents (travail, projets perso, apprentissage).

**Deux réflexes pratiques :**

1. **Vérifier périodiquement ce qui est mémorisé** (la plupart des outils permettent de consulter et modifier la liste des souvenirs) plutôt que de laisser une mémoire invisible s'accumuler sans contrôle.
2. **Cloisonner volontairement les contextes qui n'ont pas à se mélanger** — par exemple via des espaces dédiés (vu dans la prochaine leçon), plutôt que de tout faire reposer sur une mémoire générale.

**Le point à retenir** : la mémoire d'un assistant est un outil de confort, pas une source de vérité — si une réponse te semble étrangement orientée, la mémoire fait partie des premières choses à vérifier.`,
  },
  {
    id: "bases-de-connaissances-lesson",
    skillId: "bases-de-connaissances",
    title: "Bases de connaissances et projets",
    body: `Entre "coller un document à chaque conversation" et "compter sur la mémoire générale de l'assistant", il existe une troisième option, souvent plus adaptée pour un sujet récurrent : les espaces de type **projet** (Projects chez Claude et ChatGPT, Gems chez Gemini, ou des outils dédiés comme NotebookLM).

Un projet te permet d'attacher un ensemble de documents de référence qui s'appliquent automatiquement à *toutes* les conversations démarrées dans cet espace — sans avoir à les rejoindre à chaque fois, et sans dépendre d'une mémoire générale qui pourrait mélanger d'autres sujets.

**Exemple concret** : si tu gères plusieurs clients en freelance, un projet par client (avec son cahier des charges, ses échanges précédents, son style de communication) donne un contexte propre et cloisonné pour chaque conversation liée à ce client — pas de risque qu'une information du client A pollue une réponse pour le client B.

**Projet vs document ponctuel** : pour une tâche isolée ("analyse ce contrat une fois"), un document collé dans une conversation classique suffit très bien. Un projet dédié devient utile quand tu reviens régulièrement sur le même sujet avec les mêmes références.

**Un piège à éviter** : une base de connaissances qui n'est jamais mise à jour devient une source d'erreurs plutôt qu'une aide — un document de référence obsolète attaché à un projet peut orienter le modèle vers des informations qui ne sont plus valables.

**Le point à retenir** : dès qu'un sujet revient régulièrement avec les mêmes documents de référence, un projet dédié vaut mieux que de tout recoller à chaque conversation — à condition de le tenir à jour.`,
  },
  {
    id: "contexte-outils-lesson",
    skillId: "contexte-outils",
    title: "Contexte des outils disponibles",
    body: `Le contexte d'un modèle ne se limite pas au texte que tu lui donnes : il inclut aussi les **outils** qu'il a le droit d'utiliser au moment où il répond — recherche web, exécution de code, lecture de fichiers, connexion à des applications externes. Ces outils ne sont pas toujours activés par défaut, et leur disponibilité change fondamentalement ce que l'assistant peut réellement faire.

**Pourquoi c'est important à vérifier** : si tu demandes "cherche les dernières nouvelles sur ce sujet" à un assistant dont la recherche web n'est pas activée, il peut soit te le dire clairement, soit — c'est le risque — répondre à partir de ses connaissances générales figées à une date de coupure, sans que ce soit toujours évident que l'information n'est pas à jour.

**Un signal à surveiller** : une réponse qui prétend avoir vérifié une information en temps réel mais qui ne cite aucune source concrète, ou dont les informations semblent génériques plutôt que spécifiques à l'actualité récente, est un bon indice que l'outil de recherche n'a probablement pas été réellement utilisé.

**L'inverse existe aussi** : certains outils peuvent être activés inutilement pour une tâche qui n'en a pas besoin, ce qui peut ralentir la réponse ou introduire des étapes superflues (une recherche web pour une question de culture générale bien établie, par exemple).

**Le point à retenir** : avant de compter sur une capacité précise (recherche web, exécution de code, accès à un fichier), vérifie qu'elle est bien activée dans l'outil que tu utilises — ne suppose jamais qu'un assistant peut faire quelque chose simplement parce qu'un autre assistant le peut.`,
  },
];
