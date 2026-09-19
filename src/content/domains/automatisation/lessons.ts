import type { Lesson } from "@/content/types";

export const automatisationLessons: Lesson[] = [
  {
    id: "declencheurs-actions-lesson",
    skillId: "declencheurs-actions",
    title: "Déclencheurs et actions",
    body: `Quel que soit l'outil no-code utilisé (Make, n8n, Zapier), toute automatisation repose sur la même anatomie de base : un **déclencheur** (ce qui démarre le scénario) suivi d'une ou plusieurs **actions** (ce qui se passe ensuite).

**Le déclencheur** est l'événement précis qui lance le scénario : un nouvel email reçu, une nouvelle ligne ajoutée dans un tableur, un formulaire soumis, ou simplement une heure planifiée (tous les jours à 9h). Sans déclencheur clair, une automatisation ne sait jamais *quand* elle doit se lancer — c'est la première chose à définir, avant même de penser aux actions.

**Les actions** sont ce qui doit se produire une fois le déclencheur activé : envoyer un message, créer un enregistrement, mettre à jour un document, générer un fichier. Une automatisation peut enchaîner plusieurs actions à la suite.

**Exemple concret** : *"Quand un formulaire de contact est soumis sur mon site (déclencheur) → ajouter la personne dans mon tableur de prospects, puis lui envoyer un email de confirmation (deux actions)."*

**Deux façons de déclencher une automatisation** :

- **Instantané** (souvent via un webhook, vu dans une prochaine leçon) : le scénario réagit immédiatement quand l'événement se produit.
- **Vérification périodique** (polling) : l'outil vérifie à intervalles réguliers (toutes les 15 minutes, une fois par jour) si quelque chose de nouveau s'est produit.

Une notification urgente justifie un déclencheur instantané ; une tâche non urgente (générer un rapport hebdomadaire) se contente très bien d'une vérification périodique.

**Le point à retenir** : avant de construire quoi que ce soit dans un outil d'automatisation, formule clairement en une phrase "quand [événement précis], alors [actions précises]" — la clarté de cette phrase détermine si le reste sera simple ou confus.`,
  },
  {
    id: "variables-donnees-lesson",
    skillId: "variables-donnees",
    title: "Variables et transfert de données entre étapes",
    body: `Un déclencheur ne fait pas que démarrer un scénario : il produit aussi des **données**. Un email reçu, par exemple, fournit l'adresse de l'expéditeur, l'objet, le corps du message — chacun de ces éléments devient disponible comme **variable** que les actions suivantes peuvent réutiliser.

**Pourquoi c'est la vraie puissance de l'automatisation.** Sans variables, chaque exécution du scénario ferait exactement la même chose, avec le même texte fixe — inutile pour la plupart des usages réels. Avec les variables, une action comme "envoyer un message à {{email de l'expéditeur}} avec l'objet {{objet du message}}" s'adapte automatiquement à chaque déclenchement, avec les vraies données de cet événement précis.

**Le réflexe à prendre avant de tout construire : tester une fois avec de vraies données.** La plupart des outils permettent de déclencher le scénario une fois manuellement pour voir les données réellement renvoyées par le déclencheur — les noms de champs exacts, leur format (une date au format "2026-01-15" ou "15/01/2026" ne se traite pas pareil). Deviner ces noms de champs à l'aveugle avant d'avoir vu un exemple réel est une source d'erreurs très courante chez les débutants.

**Exemple concret** : un déclencheur "nouvelle ligne dans un tableur" renvoie chaque colonne comme une variable séparée (Nom, Email, Montant...). Une action suivante peut alors composer un message personnalisé : *"Bonjour {{Nom}}, nous avons bien reçu votre commande de {{Montant}}€."*

**Le point à retenir** : une automatisation qui ne fait qu'exécuter des actions à texte fixe n'exploite pas l'essentiel de ce que l'outil peut faire — la vraie valeur vient de la circulation des données réelles d'une étape à l'autre.`,
  },
  {
    id: "conditions-boucles-lesson",
    skillId: "conditions-boucles",
    title: "Conditions et boucles",
    body: `Un scénario purement linéaire (déclencheur → action → action) traite toujours les données de la même façon. Deux mécanismes permettent d'aller plus loin : les **conditions** et les **boucles**.

**Les conditions** (appelées routeur chez Make, node "IF" chez n8n, "Paths" chez Zapier) font varier le comportement du scénario selon la donnée reçue. *"Si le montant de la commande dépasse 1000€, envoyer une alerte à l'équipe commerciale ; sinon, traitement standard."* Sans condition, chaque exécution suit exactement le même chemin, qu'elle soit pertinente ou non.

**Un piège fréquent : oublier de filtrer.** Sans condition pour écarter les données non pertinentes (un email de spam, une ligne de tableur vide), le scénario exécute quand même ses actions sur des données inutiles — ce qui peut être coûteux (appels API facturés à l'usage) ou carrément gênant (message envoyé à une adresse vide).

**Les boucles (itérateurs)** entrent en jeu quand une étape renvoie *plusieurs* éléments à la fois — par exemple, toutes les lignes d'un tableur, ou tous les articles d'un flux RSS. Sans boucle, le scénario ne saurait traiter que le premier élément, ou tenterait de tout traiter en un seul bloc de façon incohérente. Avec une boucle, chaque élément passe individuellement par les actions suivantes, l'un après l'autre.

**Exemple concret** : *"Pour chaque ligne d'un tableur importé (boucle), si le statut est 'à traiter' (condition), créer une tâche dans l'outil de gestion de projet."*

**Le point à retenir** : dès qu'un scénario doit se comporter différemment selon la donnée reçue, pense condition ; dès qu'il doit traiter plusieurs éléments un par un, pense boucle — les deux se combinent très souvent dans un même scénario.`,
  },
  {
    id: "webhooks-api-lesson",
    skillId: "webhooks-api",
    title: "Webhooks et API",
    body: `Tu as vu que certains déclencheurs sont instantanés plutôt que basés sur une vérification périodique. Cette instantanéité repose généralement sur un mécanisme précis : le **webhook**.

**Un webhook est une URL** que ton automatisation expose, et qu'un service externe appelle automatiquement au moment où quelque chose se produit chez lui — plutôt que ton outil doive interroger ce service à intervalles réguliers pour savoir si du nouveau est arrivé. C'est plus réactif (instantané) et plus économe (pas de vérifications inutiles quand rien ne se passe).

**Ce qui se cache derrière la plupart des actions.** Que tu utilises Make, n8n ou Zapier, presque chaque action ("créer une ligne dans Notion", "envoyer un message Slack") est en réalité un appel à l'**API** du service concerné — le même type d'échange que celui qui relie une application à un serveur, généralement structuré en **JSON** (le format de données que tu as déjà croisé). L'outil no-code habille cet appel API dans une interface visuelle simple, mais la mécanique sous-jacente reste la même.

**Quand ça devient directement utile de le savoir** : si le service que tu veux connecter n'a pas d'intégration prête à l'emploi dans ton outil, la plupart proposent un module générique ("HTTP", "Appel API personnalisé") qui permet de se connecter quand même à ce service en suivant sa documentation API — à condition de comprendre un minimum comment une requête et une réponse JSON sont structurées.

**Le point à retenir** : un webhook rend une automatisation réactive plutôt que passive, et savoir qu'une action no-code est un appel API en coulisses aide à diagnostiquer un échec (donnée mal formée, champ manquant) plutôt que de rester bloqué face à une "erreur" incompréhensible.`,
  },
  {
    id: "gestion-erreurs-automatisation-lesson",
    skillId: "gestion-erreurs-automatisation",
    title: "Gestion des erreurs dans une automatisation",
    body: `Une automatisation qui fonctionne tourne sans surveillance humaine — ce qui est précisément son intérêt, mais aussi son principal risque : si elle échoue, personne ne le remarque forcément tout de suite. Une automatisation cassée depuis trois semaines qui devait envoyer une facture chaque mois peut passer complètement inaperçue jusqu'à ce que quelqu'un s'étonne de ne pas avoir été payé.

**Les causes d'échec les plus courantes** : un appel API rejeté (donnée mal formée, service temporairement indisponible), un champ vide alors qu'une étape suivante s'attend à une valeur, ou un changement côté service externe (un champ renommé, une clé d'accès expirée) qui casse silencieusement une intégration qui fonctionnait auparavant.

**Trois techniques concrètes** :

1. **Un gestionnaire d'erreur** (souvent une branche dédiée "en cas d'échec") qui capture le problème et déclenche une notification — au lieu de laisser le scénario échouer en silence, tu reçois un message quand ça arrive.
2. **Une nouvelle tentative (retry)** pour les échecs transitoires (un service momentanément indisponible réussira souvent au deuxième essai quelques minutes plus tard).
3. **Un test avec des données volontairement problématiques** avant de faire confiance à un scénario en conditions réelles — un champ vide, un format de date inhabituel, un caractère spécial — pour voir comment il réagit avant que ça n'arrive en production.

**Le point à retenir** : la question à te poser avant de lancer une automatisation en pilote automatique n'est pas seulement "est-ce que ça marche ?" mais "comment saurai-je si un jour ça ne marche plus ?" — sans réponse à cette deuxième question, un échec silencieux n'est qu'une question de temps.`,
  },
];
