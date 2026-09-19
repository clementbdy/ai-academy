import type { Lesson } from "@/content/types";

export const fondationsIaLessons: Lesson[] = [
  {
    id: "llm-bases-lesson",
    skillId: "llm-bases",
    title: "Qu'est-ce qu'un LLM",
    body: `Un **LLM** (Large Language Model, "grand modèle de langage") est un système entraîné sur d'immenses quantités de texte pour prédire, à chaque étape, le mot (ou fragment de mot) le plus plausible à écrire ensuite, compte tenu de tout ce qui précède.

Concrètement, quand tu poses une question à ChatGPT, Claude ou Gemini, le modèle ne "sait" pas la réponse comme le ferait une base de données : il génère sa réponse **token par token**, chaque nouveau token étant choisi en fonction de la probabilité qu'il complète bien la phrase, sachant tout ce qui a été écrit avant (ta question + le début de sa propre réponse).

Ce mécanisme a deux conséquences pratiques essentielles :

1. **La génération est probabiliste, pas déterministe.** Deux fois la même question peuvent donner deux réponses légèrement différentes, parce qu'à chaque étape plusieurs mots étaient plausibles et le modèle en a tiré un (avec une part de hasard contrôlée).
2. **Le modèle n'a pas de mémoire ni de "compréhension" au sens humain.** Il n'a pas d'accès direct à une vérité stockée quelque part : sa "connaissance" est diffuse, encodée dans des milliards de paramètres ajustés pendant l'entraînement sur du texte existant.

Cela explique pourquoi un LLM peut être bluffant sur la forme (grammaire, style, structure) tout en se trompant sur le fond (faits, calculs, dates) — ce sera le sujet d'une leçon plus loin sur les hallucinations.

**Le point à retenir** : utiliser un LLM efficacement, c'est arrêter de le traiter comme un moteur de recherche qui "sait" des choses, et commencer à le traiter comme un générateur de texte extrêmement compétent qu'il faut guider, contraindre et vérifier.`,
  },
  {
    id: "tokens-contexte-lesson",
    skillId: "tokens-contexte",
    title: "Tokens et fenêtre de contexte",
    body: `Un LLM ne lit pas le texte lettre par lettre ni mot par mot : il le découpe en **tokens**, des fragments qui correspondent souvent à un mot court, un morceau de mot plus long, ou un signe de ponctuation. En français, on compte grossièrement 1 mot ≈ 1,3 à 1,5 token.

Chaque modèle a une **fenêtre de contexte** : le nombre maximum de tokens qu'il peut "voir" en une fois, en comptant à la fois ton message, l'historique de la conversation, les fichiers joints, et sa propre réponse en cours de génération. Une fenêtre de 200 000 tokens représente environ 500 pages de texte — large, mais pas infinie.

Deux implications concrètes :

- **Ce qui sort de la fenêtre de contexte est oublié.** Dans une conversation très longue, le modèle peut "perdre" des instructions données au tout début si elles ne tiennent plus dans la fenêtre active (ou si l'outil que tu utilises résume/tronque l'historique).
- **Plus le contexte est chargé, moins chaque information individuelle "pèse" pour le modèle**, un peu comme relire un document surchargé d'informations rend plus dur de repérer ce qui compte vraiment. Un contexte bien nettoyé (on retire ce qui n'est plus utile) donne souvent de meilleures réponses qu'un contexte immense mais désordonné.

**Le point à retenir** : la longueur n'est pas gratuite. Avant d'envoyer un document entier ou de laisser filer une conversation à l'infini, demande-toi ce qui est réellement nécessaire pour la tâche en cours — c'est le début du **context engineering**, qui sera approfondi dans un module dédié.`,
  },
  {
    id: "multimodalite-lesson",
    skillId: "multimodalite",
    title: "Modèles multimodaux",
    body: `Un modèle **multimodal** peut traiter (et parfois produire) plusieurs types de contenus au-delà du texte : images, audio, vidéo, voire des documents PDF avec leur mise en page. Claude, ChatGPT et Gemini savent tous, à des degrés divers, analyser une image ou un document que tu leur envoies.

Concrètement, un modèle multimodal ne "voit" pas une image comme un humain : il la convertit en une représentation interne qu'il peut relier au langage — ce qui lui permet de décrire une image, lire du texte dedans (OCR), analyser un graphique, ou comparer plusieurs captures d'écran.

Points de vigilance pratiques :

- **La qualité d'entrée compte énormément.** Une image floue, mal cadrée, ou un texte à angle compliquent fortement l'analyse — souvent plus qu'on ne l'imagine.
- **La multimodalité en sortie (génération d'image, de voix) est un métier à part**, avec ses propres modèles spécialisés, distincts du LLM qui rédige du texte — ce sera vu dans le domaine Création.
- **Envoyer une image ou un document est souvent plus efficace que le décrire par écrit**, en particulier pour tout ce qui touche à la mise en page, un graphique, ou un schéma.

**Le point à retenir** : dès qu'une tâche implique une information visuelle (capture d'écran, photo, tableau, schéma), pense à l'envoyer directement plutôt que de la retranscrire en texte — tu gagneras en précision et en temps.`,
  },
  {
    id: "raisonnement-lesson",
    skillId: "raisonnement",
    title: "Modèles de raisonnement",
    body: `Un modèle "standard" répond souvent de façon quasi immédiate : il génère directement la réponse la plus probable. Un **modèle de raisonnement** (ou un mode de raisonnement étendu) procède différemment : avant de répondre, il déroule une suite d'étapes intermédiaires — une sorte de brouillon de réflexion — qui l'aide à arriver à une réponse plus fiable sur des problèmes complexes (logique, mathématiques, code, planification à plusieurs étapes).

Ce raisonnement intermédiaire n'est pas magique : c'est le même mécanisme de génération token par token, mais appliqué à "réfléchir tout haut" avant de conclure, ce qui réduit (sans l'éliminer) le risque d'erreurs sur des tâches qui demandent plusieurs étapes logiques enchaînées.

Deux choses à savoir avant de choisir quand l'utiliser :

- **Le raisonnement étendu a un coût** : plus de temps de réponse, et souvent plus cher en usage API. Sur une question simple ("reformule cette phrase"), il n'apporte rien et ralentit juste la réponse.
- **Il aide surtout quand la tâche a une vraie structure logique à dérouler** : un calcul à plusieurs étapes, un bug à diagnostiquer, un plan à construire avec des dépendances — pas une tâche purement créative ou une reformulation.

**Le point à retenir** : active un mode de raisonnement étendu quand la tâche a plusieurs étapes logiques dépendantes les unes des autres, et désactive-le (ou utilise un modèle standard) pour tout ce qui est direct — c'est un choix d'outil, pas un réglage à laisser toujours au maximum.`,
  },
  {
    id: "hallucinations-limites-lesson",
    skillId: "hallucinations-limites",
    title: "Hallucinations et limites des modèles",
    body: `On parle d'**hallucination** quand un modèle produit une information fausse, inventée ou déformée, tout en la formulant avec la même assurance qu'une information correcte. Ce n'est pas un bug isolé : c'est une conséquence directe de la façon dont un LLM fonctionne (vu dans la première leçon) — il génère le texte le plus *plausible*, pas nécessairement le plus *vrai*.

Les hallucinations sont plus fréquentes dans certains cas précis :

- **Questions pointues hors du cœur de connaissance du modèle** : une référence obscure, un événement très récent, une donnée très spécifique (numéro de loi, statistique précise, citation exacte).
- **Absence de source vérifiable** : sans document fourni en contexte, le modèle "complète" avec ce qui lui semble plausible.
- **Demandes qui poussent à toujours répondre** : si tu formules ta question comme s'il existait forcément une réponse, le modèle a tendance à en inventer une plutôt que de dire "je ne sais pas".

Au-delà des hallucinations, il existe d'autres limites structurelles à garder en tête : les modèles ont une date de coupure de connaissances, peuvent se tromper sur des calculs complexes, et n'ont pas de mémoire persistante entre deux conversations séparées (sauf fonctionnalité dédiée type mémoire ou projet).

**Le point à retenir — trois réflexes concrets** :

1. **Vérifie tout fait, chiffre, citation ou lien produit par un modèle** avant de le réutiliser dans un contexte qui compte (professionnel, financier, juridique).
2. **Fournis les sources toi-même** (documents, données) plutôt que de demander au modèle de "connaître" un fait précis — c'est le principe de base du RAG, vu plus tard.
3. **Une réponse assurée n'est pas une réponse vraie.** Le ton de confiance d'un LLM ne varie pas avec la fiabilité réelle de ce qu'il dit.`,
  },
];
