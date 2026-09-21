import type { Lesson } from "@/content/types";

export const iaEntrepreneuriatLessons: Lesson[] = [
  {
    id: "recherche-didee-et-de-marche-lesson",
    skillId: "recherche-didee-et-de-marche",
    title: "Rechercher une idée et étudier son marché avec l'IA",
    body: `L'erreur la plus fréquente au démarrage d'un projet entrepreneurial n'est pas technique — c'est de partir d'une **solution** ("je veux faire une appli avec de l'IA") plutôt que d'un **problème réel** que quelqu'un rencontre déjà. Tu as vu en Assistants IA comment utiliser la recherche augmentée pour ancrer une réponse sur des sources réelles ; ce module l'applique à la validation d'une idée d'entreprise.

**Des questions concrètes à poser, avec l'aide d'un assistant** : Qui rencontre ce problème précis ? À quelle fréquence ? Que fait cette personne *actuellement* pour le résoudre ? Une solution existante, même imparfaite, est plutôt un bon signe : elle prouve que quelqu'un d'autre a jugé le problème assez sérieux pour y répondre. L'absence totale de concurrent peut vouloir dire une opportunité inexploitée — ou, plus souvent, que le problème n'est pas assez pressant pour que quiconque ait voulu le résoudre.

**Étudier la concurrence directe et indirecte.** Un assistant avec recherche web peut t'aider à identifier rapidement qui répond déjà à ce besoin, sous quelle forme, et à repérer leurs forces et faiblesses apparentes — un point de départ utile, pas une étude de marché professionnelle complète.

**Le piège des chiffres.** Une taille de marché, une statistique de croissance, un pourcentage d'adoption cités par un assistant peuvent sembler précis et rassurants tout en étant partiellement ou totalement inventés — exactement le risque d'hallucination vu en Fondations de l'IA, particulièrement fréquent sur des données chiffrées précises. Avant de t'appuyer sur un chiffre pour une décision qui compte, vérifie-le via une source indépendante identifiable (une étude, un organisme reconnu) plutôt que de faire confiance à l'affirmation seule.

**Le point à retenir** : l'IA accélère considérablement la collecte d'hypothèses à vérifier sur un marché — elle ne remplace jamais la vérification elle-même, en particulier sur tout chiffre destiné à orienter une vraie décision.`,
  },
  {
    id: "definir-cible-et-offre-lesson",
    skillId: "definir-cible-et-offre",
    title: "Définir sa cible et son offre avec l'IA",
    body: `Une fois un problème réel identifié, l'étape suivante consiste à préciser **à qui** cette solution s'adresse et **ce qu'elle propose exactement** — deux points où l'imprécision coûte cher.

**Le piège du "tout le monde".** Une offre pensée pour "tout le monde qui a ce problème" finit par ne parler précisément à personne : un message générique ne résonne pas de la même façon qu'un message qui décrit exactement la situation d'une personne en particulier. Un assistant IA peut t'aider à préciser ce client type : ses contraintes concrètes, ce qu'il a déjà essayé pour résoudre son problème, et pourquoi les solutions existantes ne lui suffisent pas — des détails qui transforment une audience vague en portrait concret et actionnable.

**Formuler l'offre comme une réponse, pas une liste.** Décrire un produit par ses fonctionnalités ("il permet de faire X, Y, Z") intéresse rarement autant que de nommer directement le problème résolu et le résultat obtenu pour ce client type précis. La différence entre "un outil de gestion de tâches avec des rappels" et "ne plus jamais oublier un rendez-vous client important" tient à ce recentrage sur le résultat concret plutôt que la mécanique interne.

**Une technique rapide, imparfaite mais révélatrice.** Demander à un assistant de "jouer le rôle" de ce client type et de réagir à ton offre donne un premier retour utile avant d'investir du temps dans un vrai développement — ce n'est en rien un substitut à de vrais retours de vrais clients, mais ça permet de repérer rapidement une offre encore trop vague ou mal formulée.

**Le point à retenir** : plus la description de ta cible est précise, plus l'IA (et toi) peut t'aider concrètement à construire une offre et un message pertinents — la précision bat systématiquement la largeur.`,
  },
  {
    id: "construire-un-mvp-lesson",
    skillId: "construire-un-mvp",
    title: "Construire un MVP avec l'aide de l'IA",
    body: `Un **MVP** (*Minimum Viable Product*, produit minimum viable) n'est pas une version incomplète du produit final — c'est la version la plus simple possible qui permet de tester l'hypothèse centrale de ton offre auprès de vraies personnes, le plus vite possible.

**Le vrai premier MVP n'a souvent besoin d'aucun développement technique.** Tu as vu en Systèmes IA qu'il faut choisir la brique adaptée au besoin réel plutôt que la plus impressionnante. Pour valider une hypothèse de départ, répondre toi-même manuellement aux premiers clients (avec l'aide d'un assistant pour rédiger plus vite, vu en Productivité) suffit très souvent — pas besoin de construire un outil automatisé avant même de savoir si quelqu'un veut ce que tu proposes.

**Une fois l'hypothèse validée manuellement, la programmation assistée par IA prend le relais.** Construire une première version technique simple — une page web, un petit outil — devient beaucoup plus accessible sans équipe de développement, exactement ce que le module Programmation assistée par IA t'a préparé à faire : comprendre le code généré, bien le prompter, le vérifier.

**Le piège que la rapidité de l'IA rend plus facile.** Comme il est devenu rapide de construire quelque chose de fonctionnel avec l'aide de l'IA, la tentation de trop construire avant de vérifier que quelqu'un en veut réellement augmente elle aussi — la rapidité de production ne remplace jamais la validation de l'hypothèse de départ.

**Le point à retenir** : commence toujours par la version la plus simple qui permet de tester ton hypothèse centrale — souvent sans aucun code — avant de construire quoi que ce soit de plus élaboré, aussi facile que l'IA rende cette construction.`,
  },
  {
    id: "acquisition-et-contenu-lesson",
    skillId: "acquisition-et-contenu",
    title: "Acquérir ses premiers clients avec du contenu assisté par IA",
    body: `Tu as vu en Création comment structurer une histoire et adapter un contenu aux différentes plateformes. Pour acquérir tes premiers clients, cette compétence prend tout son sens en la reliant directement à ce que tu as appris de ta cible et de son problème.

**Le contenu le plus efficace n'est pas le plus créatif — c'est le plus pertinent.** Un contenu qui répond directement à une question réelle que ta cible se pose déjà a beaucoup plus de chances de la toucher qu'un contenu généraliste, même très bien produit. La recherche de marché que tu as menée plus tôt (les questions que se posent les clients potentiels, les frustrations envers les solutions existantes) devient une matière première directe pour ton contenu — plutôt que de deviner un sujet dans le vide.

**Réutiliser ce que tu sais déjà.** Si ton étude de marché a révélé que ta cible se plaint d'un aspect précis des solutions existantes, un contenu qui aborde directement ce point précis parle immédiatement à la bonne personne — bien plus efficace qu'un contenu générique sur ton secteur d'activité.

**L'IA accélère la production, pas la patience nécessaire.** Générer du contenu rapidement grâce à l'assistance à la rédaction (vue en Productivité) ne change rien au temps qu'il faut généralement pour qu'une audience se construise et convertisse en clients — la rapidité de production ne doit pas faire illusion sur le délai réel avant des résultats concrets.

**Le point à retenir** : avant de te demander "quel contenu créer", reviens à ta recherche de marché — le meilleur sujet est presque toujours une question ou une frustration réelle que ta cible a déjà, pas une idée generée à partir de rien.`,
  },
  {
    id: "automatiser-les-operations-lesson",
    skillId: "automatiser-les-operations",
    title: "Automatiser les opérations du quotidien",
    body: `Une fois les premiers clients acquis, des tâches répétitives apparaissent naturellement : répondre aux mêmes questions, suivre les prospects, publier du contenu régulièrement. C'est exactement le terrain que les modules Automatisation, Agents IA et Systèmes IA t'ont préparé à traiter — mais avec une règle de prudence essentielle.

**N'automatiser qu'un processus déjà éprouvé manuellement.** Automatiser une tâche que tu as réalisée toi-même plusieurs fois avec succès fige une méthode que tu maîtrises déjà. Automatiser un processus encore incertain, en revanche, fige une mauvaise méthode avant qu'elle ait eu la chance d'être affinée par l'expérience réelle — un risque bien plus grand que la lenteur temporaire d'un processus manuel.

**Choisir la bonne brique, comme vu en Systèmes IA.** Une tâche stable et répétitive (envoyer le même type de message de suivi, publier un contenu à heure fixe) se prête bien à une automatisation simple. Une tâche qui demande des décisions variables selon le contexte (qualifier un prospect selon ses réponses, adapter une réponse selon la situation précise d'un client) justifie davantage un agent — mais seulement si cette variabilité est réelle, pas supposée par confort.

**Un signal clair du bon moment pour automatiser.** Si tu peux décrire précisément, étape par étape, ce qui doit se passer à chaque fois — parce que tu l'as fait toi-même suffisamment de fois pour le savoir par cœur — le processus est probablement mûr pour l'automatisation. Si tu hésites encore sur la marche à suivre dans certains cas, c'est le signe qu'il vaut mieux continuer à le faire manuellement encore un moment.

**Le point à retenir, et la conclusion de tout ce module** : le bon moment pour automatiser vient **après** la validation manuelle d'un processus, jamais avant — la rapidité qu'offre l'IA à chaque étape (recherche, contenu, code, automatisation) ne change rien à cet ordre, elle ne fait qu'accélérer chaque étape prise dans le bon ordre.`,
  },
];
