import type { Lesson } from "@/content/types";

export const assistantsIaLessons: Lesson[] = [
  {
    id: "comparer-les-assistants-lesson",
    skillId: "comparer-les-assistants",
    title: "Choisir le bon assistant pour la tâche",
    body: `ChatGPT, Claude et Gemini sont tous les trois des assistants généralistes très compétents, construits sur des LLM de premier plan. La question "lequel est le meilleur ?" est en réalité mal posée — le classement change constamment, et surtout, chacun a des forces *pratiques* différentes qui comptent souvent plus que quelques points d'écart sur un benchmark.

**Des forces qui viennent de l'écosystème, pas seulement du modèle** :

- **Claude** est souvent privilégié pour l'analyse de documents longs et les tâches de programmation assistée poussées (y compris en mode agentique, capable d'exécuter des actions de façon autonome).
- **ChatGPT** dispose de l'écosystème d'extensions et d'intégrations tierces le plus large, et de capacités multimodales de génération étendues (images, voix).
- **Gemini** s'intègre nativement à Google Workspace (Docs, Sheets, Gmail) — un atout concret si l'essentiel de ton travail s'y trouve déjà.

**Le bon réflexe : partir de la tâche, pas de la réputation.** Si tu dois analyser un très long contrat, la capacité à traiter un grand contexte compte plus qu'un score abstrait. Si tu travailles déjà dans Google Docs toute la journée, l'intégration native de Gemini t'évite des allers-retours de copier-coller. Si tu veux automatiser un workflow avec plein d'outils tiers, l'écosystème de ChatGPT peut avoir l'avantage.

**Un réflexe d'utilisateur avancé** : beaucoup de gens qui utilisent l'IA intensivement au quotidien ne se limitent pas à un seul assistant — ils utilisent plusieurs outils selon leurs forces respectives, plutôt que de chercher "l'unique meilleur outil pour tout".

**Le point à retenir** : la question à te poser n'est pas "quel est le meilleur assistant ?" dans l'absolu, mais "quel assistant est le mieux placé pour *cette* tâche précise, compte tenu de mon contexte de travail ?"`,
  },
  {
    id: "recherche-augmentee-lesson",
    skillId: "recherche-augmentee",
    title: "Recherche augmentée par IA",
    body: `Un LLM "classique" répond à partir de ce qu'il a appris pendant son entraînement — des connaissances figées à une date de coupure, sans accès à ce qui s'est passé après. Un assistant avec **recherche augmentée** (le mode recherche web de ChatGPT, Claude ou Gemini, ou un outil dédié comme Perplexity) fonctionne différemment : il va chercher de vraies pages web au moment de ta question, puis rédige une réponse en s'appuyant sur ce qu'il y a trouvé — généralement en citant ses sources.

**Pourquoi ça change la donne sur les hallucinations** : tu as vu que les hallucinations sont plus fréquentes sur des sujets récents ou très spécifiques, faute de connaissances fiables en mémoire. Ancrer la réponse sur des pages web réelles réduit ce risque — mais ne l'élimine pas. Un assistant peut mal résumer une source, en choisir une peu fiable, ou mélanger les informations de plusieurs pages de façon imprécise.

**Le réflexe qui fait toute la différence : vérifier réellement les sources.** Une réponse qui cite 5 sources donne une impression de rigueur — mais cette impression ne vaut que si les sources disent vraiment ce que la synthèse prétend. Ouvrir au moins une source citée et comparer avec ce qui a été écrit prend une minute et permet de repérer une déformation avant qu'elle ne cause un problème.

**Quand activer la recherche augmentée** : pour toute question dont la réponse peut avoir changé récemment (actualité, prix, version d'un logiciel, disponibilité d'un produit) — pas nécessairement pour une question de culture générale stable dans le temps, où ça n'apporte rien et ralentit la réponse pour rien.

**Le point à retenir** : la recherche augmentée rend une réponse plus vérifiable, pas automatiquement plus vraie — la vérification reste ta responsabilité, pas celle de l'outil.`,
  },
  {
    id: "analyser-des-fichiers-lesson",
    skillId: "analyser-des-fichiers",
    title: "Analyser des fichiers concrets",
    body: `Tu as vu dans Fondations de l'IA qu'un modèle multimodal peut analyser une image directement. Cette leçon va plus loin, côté usage concret : comment obtenir un résultat réellement exploitable à partir d'un fichier réel — capture d'écran, tableur, PDF.

**Extraire un tableau d'une image.** Une capture d'écran d'un tableau de bord, d'un tableur ou d'un document scanné peut être envoyée directement à un assistant avec la consigne d'en extraire les données sous une forme structurée (tableau markdown, liste, voire CSV). C'est souvent plus rapide et plus fiable que de retaper les données à la main — à condition de vérifier le résultat.

**Vérifier, valeur par valeur.** Une extraction automatique peut sembler globalement juste tout en contenant une erreur ponctuelle (un chiffre mal lu, une ligne oubliée). Pour toute donnée qui compte (chiffres financiers, dates, quantités), compare le résultat extrait à l'image d'origine ligne par ligne plutôt que de faire confiance à l'impression générale de justesse.

**Attention aux fichiers volumineux.** Un très grand tableur ou un document de plusieurs centaines de pages peut être tronqué silencieusement selon l'outil utilisé — l'assistant traite une partie du fichier sans forcément le signaler clairement. Pour un fichier volumineux, vérifie que le résultat couvre bien l'intégralité attendue (nombre de lignes, dernière date présente) plutôt que de supposer que tout a été pris en compte.

**La qualité de l'image compte toujours.** Comme vu précédemment, une image floue, mal cadrée, ou un texte à angle dégradent fortement la fiabilité de l'extraction — dans le doute, reprends la capture d'écran dans de meilleures conditions plutôt que de forcer l'analyse sur une image de mauvaise qualité.

**Le point à retenir** : l'analyse de fichiers fait gagner un temps réel, mais seulement si la vérification suit — surtout sur des données qui ont un impact concret si elles sont fausses.`,
  },
  {
    id: "assistants-personnalises-lesson",
    skillId: "assistants-personnalises",
    title: "Assistants personnalisés partageables",
    body: `Le module précédent (Context Engineering) t'a présenté les espaces de type "projet" — un cadre personnel où tu attaches tes propres documents de référence pour un sujet récurrent. Les **assistants personnalisés** (Custom GPT chez OpenAI, Gem chez Google) répondent à un besoin voisin mais différent : au lieu d'un espace de travail privé pour toi-même, tu construis une version configurée de l'assistant que **d'autres personnes peuvent découvrir et utiliser**.

**Ce qui les distingue concrètement d'un projet personnel** :
- Un projet reste privé, dans ton propre espace de travail.
- Un assistant personnalisé peut avoir un nom, une icône, une description, et être partagé publiquement ou au sein d'une organisation — un peu comme une mini-application construite au-dessus de l'assistant généraliste.

**Ce qui ne change pas : le modèle sous-jacent.** Un Custom GPT ou un Gem n'est pas un modèle "plus intelligent" ou différent — c'est le même modèle, mais avec des instructions figées, des connaissances attachées, et parfois des capacités précises activées (recherche web, exécution de code), packagées pour un usage précis. Toute la valeur ajoutée vient de la configuration, pas d'une IA différente en coulisses.

**Quand ça vaut la peine d'en construire un** : une tâche que tu refais souvent, et que d'autres personnes (collègues, communauté, clients) pourraient aussi vouloir faire — par exemple un assistant qui répond aux questions fréquentes sur un produit précis, ou qui aide à rédiger dans un format standardisé propre à une équipe. Si l'usage reste strictement personnel et ponctuel, un projet classique (Context Engineering) suffit largement.

**Le point à retenir** : construis un assistant personnalisé quand tu veux qu'une configuration soit comprise et réutilisable par quelqu'un d'autre que toi — sinon, un espace de travail personnel fait très bien l'affaire.`,
  },
];
