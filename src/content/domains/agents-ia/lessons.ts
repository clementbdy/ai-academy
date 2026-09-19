import type { Lesson } from "@/content/types";

export const agentsIaLessons: Lesson[] = [
  {
    id: "chatbot-vs-agent-lesson",
    skillId: "chatbot-vs-agent",
    title: "Chatbot ou agent ?",
    body: `Un **chatbot** répond à un message à la fois : tu poses une question, il répond, et c'est toi qui décides de la suite — reformuler, poser une autre question, arrêter là. Toute la boucle de décision reste entre tes mains.

Un **agent** fonctionne différemment : tu lui donnes un **objectif**, et il décide lui-même, de façon autonome, des étapes nécessaires pour l'atteindre — y compris utiliser des outils, vérifier ses propres résultats, et corriger sa trajectoire en cours de route, sans que tu aies besoin de valider chaque étape intermédiaire.

**Exemple concret de la différence** :
- *Interaction chatbot* : "Résume ce document." → une question, une réponse, terminé.
- *Tâche d'agent* : "Trouve les bugs dans ce projet, corrige-les, puis vérifie que les tests passent." → plusieurs étapes (lire le code, identifier un problème, le corriger, exécuter les tests, recommencer si besoin), avec des décisions prises à chaque étape selon ce qui a été observé à l'étape précédente.

**La boucle qui caractérise un agent** : observer l'état actuel → décider de la prochaine action → l'exécuter → observer le résultat → recommencer, jusqu'à ce que l'objectif soit atteint (ou qu'il ait besoin d'aide). Ce n'est pas un simple aller-retour question/réponse, mais un cycle qui se répète autant de fois que nécessaire.

**Un exemple que tu vis en ce moment même** : l'outil qui a construit cette application (Claude Code) est un agent. Il ne se contente pas de te répondre — il lit des fichiers réels, exécute des commandes dans un terminal, teste l'application dans un navigateur, et décide de la suite selon ce qu'il observe à chaque étape, sur la base d'un objectif que tu lui as donné.

**Le point à retenir** : la question à te poser n'est pas "quel outil utiliser" mais "est-ce que je veux répondre moi-même à chaque étape (chatbot), ou confier la décomposition et l'exécution de plusieurs étapes à l'IA (agent) ?" — les deux ont leur place, mais ne comportent pas les mêmes risques, comme tu le verras dans les prochaines leçons.`,
  },
  {
    id: "outils-dun-agent-lesson",
    skillId: "outils-dun-agent",
    title: "Les outils d'un agent",
    body: `Tu as vu en Context Engineering que les outils disponibles (recherche web, exécution de code...) font partie du contexte d'un modèle, et déterminent ce qu'il peut faire. Pour un agent, cette idée va plus loin : il ne se contente pas d'avoir un outil *disponible*, il **décide activement** lequel utiliser, à quel moment, et comment — en fonction de son objectif et de ce qu'il a observé jusque-là.

**Le mécanisme derrière ("function calling")** : à chaque étape, l'agent peut décrire l'action qu'il souhaite effectuer (par exemple "chercher sur le web tel terme", "exécuter tel bout de code", "lire tel fichier"). Le système exécute réellement cette action, puis renvoie le résultat à l'agent, qui l'utilise pour décider de l'étape suivante. Le modèle lui-même n'exécute jamais rien directement — il demande, et une couche technique séparée exécute puis rapporte.

**Des exemples concrets d'outils courants** : recherche web, exécution de code, lecture et écriture de fichiers, appel à une API externe, interaction avec une interface (cliquer, remplir un formulaire). Un agent de codage a typiquement accès aux fichiers d'un projet et à un terminal ; un agent de recherche a accès à un moteur de recherche web ; un agent de support client peut avoir accès à une base de connaissances et à un système de tickets.

**Le vrai enjeu à retenir** : plus un agent a d'outils disponibles, plus il devient capable — mais plus il existe aussi de façons qu'un plan imparfait cause un dégât réel. Un agent qui peut seulement lire des fichiers ne risque pas grand-chose s'il se trompe de plan ; un agent qui peut aussi les supprimer ou en envoyer le contenu ailleurs mérite une vigilance différente.

**Le point à retenir** : avant de confier une tâche à un agent, demande-toi non seulement "quel est l'objectif ?" mais aussi "de quels outils a-t-il réellement besoin pour cette tâche précise ?" — donner accès à plus d'outils que nécessaire n'apporte rien, sauf du risque supplémentaire.`,
  },
  {
    id: "objectifs-et-planification-lesson",
    skillId: "objectifs-et-planification",
    title: "Objectifs et planification",
    body: `Tu as vu en Prompt Engineering qu'un objectif flou dans un prompt simple produit une réponse imprécise. Pour un agent, l'enjeu est encore plus important : un objectif vague ne produit pas juste une réponse décevante, il laisse l'agent deviner *ce qui compte comme terminé* — sur plusieurs étapes, avec des actions réelles à la clé.

**Un bon objectif d'agent inclut un critère de réussite explicite.** "Améliore ce document" est ambigu : améliorer selon quel critère, jusqu'où ? "Corrige les fautes d'orthographe et raccourcis chaque paragraphe à 3 phrases maximum" donne un critère clair que l'agent (et toi) pouvez vérifier objectivement à la fin.

**La boucle de planification, en pratique.** À chaque étape, un agent observe où il en est, décide de la prochaine action concrète qui le rapproche de l'objectif, l'exécute, puis réévalue avant de décider de la suite — plutôt que de suivre un plan rigide décidé entièrement à l'avance. C'est ce qui lui permet de s'adapter si une étape révèle une information nouvelle (un fichier absent, une erreur inattendue) sans que tu aies à réintervenir à chaque imprévu.

**Le parallèle avec l'automatisation.** Tu as vu dans le module Automatisation qu'un scénario peut inclure des conditions ("si telle donnée, alors telle action") décidées à l'avance par toi. La planification d'un agent fonctionne sur un principe voisin, sauf que la décision à chaque étape est prise par le modèle en temps réel, à partir de ce qu'il observe — pas pré-programmée dans un scénario figé.

**Le point à retenir** : avant de lancer une tâche d'agent, formule un objectif qui répond clairement à "qu'est-ce qui compte comme terminé ?" — c'est ce critère qui te permettra ensuite de vérifier objectivement le résultat, plutôt que de juger sur une impression générale.`,
  },
  {
    id: "supervision-agent-lesson",
    skillId: "supervision-agent",
    title: "Superviser un agent",
    body: `Tu as vu dans le module Automatisation qu'une automatisation qui tourne sans surveillance peut échouer en silence pendant longtemps avant que quelqu'un ne le remarque. Un agent amplifie ce risque : il prend souvent plusieurs décisions autonomes d'affilée sur une même tâche, ce qui multiplie les occasions de dérive avant qu'un humain ne s'en aperçoive — chaque décision individuelle peut sembler raisonnable, tout en s'éloignant progressivement de l'objectif réel.

**Ne pas attendre la fin pour vérifier.** Sur une tâche longue, contrôler uniquement le résultat final revient à découvrir un problème après coup, quand il est parfois plus coûteux à corriger. Revoir le plan de l'agent avant qu'il commence à agir, ou ses actions intermédiaires en cours de route, permet de repérer une dérive plus tôt.

**Savoir interrompre.** Une bonne supervision suppose de pouvoir arrêter un agent dès qu'une action intermédiaire s'écarte de ce qui était prévu — plutôt que de le laisser continuer par principe une fois lancé.

**Définir des limites avant de commencer.** Quels outils, quels fichiers, quels systèmes l'agent peut-il toucher pour cette tâche précise ? Fixer ce périmètre à l'avance réduit l'ampleur d'un éventuel dégât, même en cas d'erreur de planification.

**Un exemple que tu connais déjà.** L'outil qui a construit cette application te montre ce qu'il s'apprête à faire et te demande confirmation avant certaines actions (comme envoyer un message en ton nom, ou exécuter une commande destructrice) — c'est une forme de supervision intégrée directement dans l'outil, pas laissée entièrement à ta vigilance manuelle.

**Le point à retenir** : plus une tâche d'agent comporte d'étapes autonomes, plus la supervision doit porter sur le chemin parcouru, pas seulement sur la destination finale.`,
  },
  {
    id: "validation-humaine-lesson",
    skillId: "validation-humaine",
    title: "Validation humaine",
    body: `Même un agent bien supervisé ne devrait pas avoir carte blanche sur tout. La dernière ligne de défense consiste à catégoriser à l'avance les actions possibles, plutôt que de faire confiance uniformément au jugement de l'agent quelle que soit l'action concernée.

**Trois catégories utiles** :

1. **Autonome** : des actions réversibles, à faible enjeu, où une erreur occasionnelle coûte peu (lire un fichier, chercher une information, proposer un brouillon).
2. **Confirmation requise** : des actions qui ont un effet réel mais restent gérables si elles sont mal exécutées — l'agent propose, un humain valide avant exécution (envoyer un message, publier un contenu, modifier un fichier partagé).
3. **Jamais autorisée sans validation explicite** : des actions irréversibles ou à fort enjeu — mouvement d'argent, suppression définitive de données, action qui engage légalement ou publiquement quelqu'un. Ce ne sont pas des actions "trop compliquées" pour un agent, mais des actions dont le coût d'erreur est trop élevé pour être pris automatiquement, même avec une supervision par ailleurs solide.

**Pourquoi définir ça à l'avance plutôt qu'au cas par cas.** Décider en pleine action, dans l'urgence ou la routine d'une tâche qui semble bien se passer, mène facilement à relâcher la vigilance ("ça a bien marché les dix dernières fois"). Une politique définie à froid, avant de confier une tâche à un agent, protège contre ce relâchement progressif.

**Un exemple direct.** Cette catégorisation est exactement le principe que suivent les outils agentiques sérieux (dont celui utilisé pour construire cette application) : certaines actions s'exécutent directement, d'autres demandent explicitement ta confirmation avant de continuer, et certaines catégories d'actions (transactions financières, suppression permanente de données) restent hors de portée de l'agent quoi qu'il arrive.

**Le point à retenir** : avant de confier une tâche à un agent, ne te demande pas seulement "est-ce que je lui fais confiance ?" mais "dans quelle catégorie tombe chacune des actions qu'il pourrait être amené à prendre ?" — la réponse ne devrait jamais dépendre de combien de fois ça s'est bien passé jusque-là.`,
  },
];
