import type { Lesson } from "@/content/types";

export const productiviteLessons: Lesson[] = [
  {
    id: "assistance-a-la-redaction-lesson",
    skillId: "assistance-a-la-redaction",
    title: "Accélérer sa rédaction avec l'IA",
    body: `Tu sais déjà bien prompter (module Prompt Engineering). Cette leçon porte sur autre chose : *quand* et *comment* intégrer l'IA dans ton processus d'écriture au quotidien, pas sur la formulation du prompt lui-même.

**La vraie valeur d'un premier jet généré par IA n'est pas d'être parfait — c'est de dépasser la page blanche.** Face à un rapport, un article ou un email un peu long à rédiger, il est souvent plus rapide de partir d'un premier jet imparfait à corriger que de fixer une page vide. L'IA excelle à produire ce premier jet en quelques secondes.

**Un premier jet est une matière première, pas un résultat final.** Le retravailler pour qu'il sonne comme toi — ton vocabulaire habituel, tes tournures, ton niveau de familiarité avec le destinataire — prend généralement moins de temps que de tout écrire depuis zéro, mais ce temps de réécriture n'est pas optionnel : un texte copié-collé tel quel se reconnaît souvent, et perd en authenticité.

**Savoir quand ne PAS utiliser l'IA.** Pour un message court et familier ("je serai en retard de 10 minutes"), formuler un bon prompt, attendre la réponse et la relire prend probablement plus de temps que de taper directement les dix mots nécessaires. L'assistance à la rédaction paie surtout sur du contenu avec une vraie structure — un rapport, un article, un email dont les enjeux méritent réflexion — pas sur l'anecdotique.

**Une technique utile : demander des angles alternatifs.** Si le premier ton ne convient pas, demander explicitement une version plus directe, plus formelle, ou plus courte, plutôt que de retravailler à la main un texte dont la structure de base ne te convient pas.

**Le point à retenir** : avant de lancer une demande de rédaction, demande-toi rapidement "cette tâche est-elle assez structurée pour que dépasser la page blanche vaille le temps de reformuler et relire ?" — si la réponse est non, il est probablement plus rapide d'écrire directement.`,
  },
  {
    id: "synthese-et-prise-de-notes-lesson",
    skillId: "synthese-et-prise-de-notes",
    title: "Synthétiser l'information et prendre des notes utiles",
    body: `Demander à un assistant de "résumer" un document long est facile — mais un résumé n'est utile que s'il correspond à ce dont tu as réellement besoin, et ce besoin varie énormément selon le contexte.

**Formule ton besoin avant de demander une synthèse.** "Résume ce compte-rendu de réunion pour que je sache quelles décisions ont été prises" et "résume ce compte-rendu pour que je m'en souvienne dans six mois" ne retiennent pas les mêmes informations — la première se concentre sur les décisions et actions, la seconde sur le contexte et les raisons. Un prompt de synthèse qui ne précise pas cet usage produit un résumé générique, souvent inadapté à l'un ou l'autre besoin.

**Exemples de besoins différents à formuler explicitement** : "pour préparer une décision", "pour transmettre à quelqu'un qui n'a pas suivi le sujet", "pour me remémorer les points clés plus tard", "pour comparer plusieurs sources entre elles".

**Ne laisse pas une synthèse utile se perdre dans une conversation qui défile.** Une fois obtenue, une bonne synthèse mérite d'être conservée quelque part de retrouvable — c'est exactement la fonction des **Notes** de cette application : tu peux y sauvegarder une synthèse, la lier à une compétence si elle s'y rapporte, et la retrouver plus tard par la recherche globale plutôt que de fouiller dans l'historique d'une conversation ancienne.

**Vérifie ce qui a pu être omis.** Une synthèse automatique, même bien formulée, peut laisser de côté un détail que tu jugeais important — une nuance, une exception, un chiffre précis. Un rapide passage de vérification sur les points qui comptent vraiment pour ton usage évite de découvrir l'omission trop tard.

**Le point à retenir** : une bonne synthèse commence par une question à toi-même ("à quoi va servir ce résumé ?"), pas directement par la demande à l'assistant — et elle mérite d'être conservée, pas seulement lue une fois.`,
  },
  {
    id: "ia-pour-apprendre-lesson",
    skillId: "ia-pour-apprendre",
    title: "Utiliser l'IA pour apprendre plus vite",
    body: `Un assistant IA est un excellent outil d'apprentissage, à condition de l'utiliser activement plutôt que de lire passivement ses réponses.

**Précise ton niveau actuel avant de demander une explication.** "Explique-moi les réseaux de neurones" produit une réponse générique qui peut être trop simple ou trop technique selon qui la lit. "Explique-moi les réseaux de neurones comme si je découvrais totalement le sujet, sans notion de mathématiques" oriente la réponse vers ton point de départ réel.

**Teste-toi réellement, ne te fie pas à l'impression de "c'est clair".** Une explication qui semble limpide en la lisant peut s'effondrer dès qu'on essaie de l'expliquer à quelqu'un d'autre ou de répondre à une question dessus. Demande explicitement à l'assistant de te poser 2 ou 3 questions de vérification après une explication, et réponds-y sincèrement *avant* de vérifier la correction — c'est ce moment de test actif qui révèle si la compréhension est solide ou seulement apparente.

**Change d'angle si ça ne "clique" pas.** Relire la même explication une deuxième fois change rarement la donne si elle ne fonctionnait pas la première fois. Demander une explication différente — un autre exemple, une autre analogie, une approche par un cas concret plutôt que par la théorie — débloque souvent ce qu'une simple répétition ne résout pas.

**Le Coach IA de cette application est conçu exactement pour cet usage.** Il connaît ta progression réelle et peut t'expliquer une notion, te poser des questions pour vérifier ta compréhension, ou reformuler différemment — sans jamais te donner directement la réponse d'un exercice en cours, précisément pour préserver ce test actif de compréhension.

**Le point à retenir** : apprendre avec l'IA fonctionne mieux en dialogue actif (préciser son niveau, se tester, redemander sous un autre angle) qu'en lecture passive d'une explication unique, aussi bien rédigée soit-elle.`,
  },
  {
    id: "organisation-des-taches-lesson",
    skillId: "organisation-des-taches",
    title: "Organiser ses tâches avec l'IA",
    body: `Face à une tâche floue ou qui semble écrasante ("préparer le lancement du produit"), une conversation avec un assistant IA peut aider à la rendre concrète — sans pour autant construire une automatisation (vue dans un module précédent).

**La différence avec l'automatisation.** Une automatisation (Make, n8n, Zapier) exécute un scénario défini une fois, de façon répétée et sans intervention. L'aide à l'organisation dont il est question ici est ponctuelle et conversationnelle : tu poses une tâche floue, l'assistant t'aide à la décomposer en étapes concrètes ou à prioriser une liste, et tu reprends la main pour l'exécuter toi-même. C'est adapté à une tâche unique ou qui évolue trop pour valoir la peine d'être automatisée.

**Usages concrets** : demander de décomposer un objectif flou en une liste d'étapes concrètes ; demander de prioriser une liste de tâches selon l'urgence et l'impact ; demander un squelette de plan de projet à adapter ensuite à ta situation réelle.

**Une décomposition générée reflète des bonnes pratiques génériques, pas tes contraintes réelles.** Un plan produit par IA pour "lancer un produit" s'appuiera sur des étapes standards du domaine — il ne connaît pas ton budget exact, ton équipe, ou les contraintes spécifiques de ton contexte. Ajuster ce squelette à ta situation réelle avant de le suivre comme un vrai plan reste indispensable — le traiter comme une base de travail, pas une réponse définitive.

**Le point à retenir** : demande-toi si la tâche devant toi est un cas unique ou évolutif (→ aide ponctuelle par conversation, comme vu ici) ou un scénario répétitif et stable (→ automatisation, vue précédemment) — les deux ont leur place, mais pas pour le même type de besoin.`,
  },
  {
    id: "mesurer-le-gain-reel-lesson",
    skillId: "mesurer-le-gain-reel",
    title: "Mesurer le vrai gain de productivité",
    body: `Cette dernière leçon du module Productivité est volontairement la plus critique : utiliser l'IA ne fait pas automatiquement gagner du temps. Formuler un bon prompt, attendre la réponse, la vérifier et la corriger prend un temps réel — et sur certaines tâches, ce temps dépasse celui qu'aurait pris la tâche faite directement.

**Un exemple simple.** Demander à un assistant de reformuler une phrase de dix mots que tu connais déjà par cœur prend probablement plus de temps (formuler la demande, attendre, lire, éventuellement corriger) que de la taper toi-même. À l'inverse, résumer un rapport de 40 pages en 5 minutes plutôt qu'en une heure de lecture est un gain de temps évident et réel.

**Ce qui favorise un vrai gain de productivité** : les tâches où tu bloques pour démarrer (page blanche), les tâches impliquant un gros volume de matière à traiter (long document, grande quantité de données), et les tâches répétitives et bien structurées.

**Ce qui n'en profite généralement pas** : les tâches courtes, déjà bien maîtrisées, où formuler une demande prend plus de temps que d'agir directement.

**Le réflexe à installer, pas une seule fois mais durablement.** Avant de reprendre un réflexe "je demande à l'IA" par automatisme, prends l'habitude de te demander brièvement : est-ce que cette tâche précise fait partie de celles où l'IA aide vraiment, ou est-ce que je suis en train d'ajouter de la friction là où il n'y en avait pas besoin ? Ce n'est pas un jugement définitif — la réponse peut changer selon le contexte — mais une vérification à refaire régulièrement plutôt qu'une fois pour toutes.

**Le point à retenir** : "plus d'IA" n'est pas un objectif en soi. L'objectif reste "plus de temps gagné, réellement" — et seule une évaluation honnête, tâche par tâche, permet de le savoir.`,
  },
];
