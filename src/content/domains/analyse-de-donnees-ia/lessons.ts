import type { Lesson } from "@/content/types";

export const analyseDeDonneesIaLessons: Lesson[] = [
  {
    id: "preparer-des-donnees-pour-une-ia-lesson",
    skillId: "preparer-des-donnees-pour-une-ia",
    title: "Préparer des données pour une IA",
    body: `Avant même de poser une question d'analyse, la façon dont tu donnes tes données à une IA change fortement la qualité de ce qu'elle peut en tirer. Deux problèmes reviennent sans arrêt : le mauvais format, et les données pas assez propres.

**Le format compte plus qu'on ne le pense.** Un fichier structuré (CSV, Excel) permet à l'assistant de lire chaque colonne et chaque ligne de façon fiable. À l'inverse, coller un tableau dans le chat (surtout depuis un PDF ou une capture d'écran) introduit souvent des erreurs silencieuses : colonnes mal alignées, nombres tronqués, lignes fusionnées. Une capture d'écran d'un tableau est encore pire : l'assistant doit d'abord "deviner" la structure avant même de commencer l'analyse.

**Trois vérifications à faire avant d'envoyer un jeu de données :**

1. **Les en-têtes de colonnes sont-ils clairs et sans ambiguïté ?** Une colonne nommée "Valeur" sans unité (euros ? pourcentage ? nombre d'unités ?) oblige l'IA à supposer — et elle le fait rarement à voix haute.
2. **Y a-t-il des valeurs manquantes ou aberrantes ?** Une IA peut inclure silencieusement une valeur manifestement fausse (âge de 250 ans, prix négatif) dans un calcul de moyenne sans la signaler, sauf si tu lui demandes explicitement de vérifier.
3. **Le fichier est-il complet ?** Pour un fichier volumineux, certains outils tronquent silencieusement les lignes traitées — vérifier le nombre de lignes analysées par rapport au total est un réflexe simple qui évite une analyse partielle prise pour une analyse complète.

**Le point à retenir** : le temps passé à nettoyer et structurer un jeu de données avant de l'envoyer à une IA n'est pas du temps perdu — c'est ce qui détermine si l'analyse qui suit est fiable ou fondée sur des suppositions invisibles.`,
  },
  {
    id: "interroger-des-donnees-avec-lia-lesson",
    skillId: "interroger-des-donnees-avec-lia",
    title: "Interroger des données avec l'IA",
    body: `"Analyse ce fichier" est la question la moins utile qu'on puisse poser à une IA face à un jeu de données. Sans direction précise, l'assistant produit un résumé générique (moyennes, quelques tendances évidentes) qui ne répond à aucune vraie question — parce qu'aucune vraie question n'a été posée.

**Une question d'analyse utile cible un critère précis** : pas "que peux-tu me dire sur ces ventes ?" mais "quel produit a la plus forte baisse de ventes entre janvier et juin, et de combien ?". Plus la question identifie une colonne, une période ou une comparaison précise, plus la réponse sera exploitable.

**Demande systématiquement la méthode, pas seulement le résultat.** Face à "le produit X a baissé de 23%", la question de suivi essentielle est : "comment as-tu calculé ce chiffre, et sur quelles lignes exactement ?". Cela permet de repérer immédiatement une erreur de méthode (une période mal bornée, une colonne confondue avec une autre) qu'un résultat seul ne révèle jamais.

**L'analyse de données est rarement une question unique — c'est une séquence.** Une première réponse ouvre en général une question plus précise : "tu dis que la baisse touche surtout la région Nord — est-ce vrai pour tous les produits, ou seulement certains ?". Chaque réponse sert à affiner la suivante, un peu comme une conversation d'enquête plutôt qu'une requête unique et définitive.

**Le point à retenir** : remplace "analyse ce fichier" par une question ciblant un critère précis, exige la méthode derrière chaque chiffre, et traite l'analyse comme une suite de questions qui s'affinent plutôt qu'une demande unique.`,
  },
  {
    id: "generer-des-visualisations-avec-lia-lesson",
    skillId: "generer-des-visualisations-avec-lia",
    title: "Générer des visualisations avec l'IA",
    body: `Demander "fais-moi un graphique" à une IA produit rarement la visualisation la plus utile, parce que le bon type de graphique dépend entièrement de la question à laquelle il doit répondre — une information que l'IA n'a pas si tu ne la lui donnes pas.

**Trois familles de questions, trois familles de graphiques :**

- **Une évolution dans le temps** (les ventes ont-elles progressé ?) appelle une **courbe** (line chart), pas un camembert.
- **Une comparaison entre catégories** (quel produit vend le plus ?) appelle des **barres**, en général plus lisibles qu'un camembert dès qu'il y a plus de 4-5 catégories.
- **Une répartition d'un tout** (quelle part du budget va à chaque poste ?) appelle un **camembert ou des barres empilées** — mais seulement si le total a un sens (les pourcentages doivent sommer à 100%).

**Demande explicitement le type de graphique adapté à ta question**, plutôt que de laisser l'IA choisir par défaut — elle produit souvent le graphique le plus "générique" possible plutôt que le plus pertinent pour ton cas précis.

**Trois signaux de graphique trompeur à vérifier systématiquement**, qu'il vienne d'une IA ou d'ailleurs :

1. **Un axe vertical tronqué** (qui ne commence pas à zéro) peut faire paraître une petite différence énorme visuellement.
2. **Une comparaison qui ignore la taille des groupes** (comparer un total sur 10 éléments à un total sur 1000 éléments sans préciser) déforme la lecture.
3. **Un choix de type de graphique qui masque l'information réelle** (un camembert avec 15 parts illisibles, une courbe reliant des catégories qui n'ont pas d'ordre naturel).

**Le point à retenir** : précise toujours à l'IA le type de graphique attendu selon ta question (évolution, comparaison, répartition), et relis chaque graphique généré avec un œil critique sur son échelle avant de le réutiliser.`,
  },
  {
    id: "verifier-les-calculs-et-conclusions-ia-lesson",
    skillId: "verifier-les-calculs-et-conclusions-ia",
    title: "Vérifier les calculs et conclusions d'une IA",
    body: `Un modèle IA peut se tromper sur un calcul, exactement comme il peut halluciner un fait (vu dans le domaine Fondations de l'IA) — pour la même raison structurelle : il génère la suite de texte la plus plausible, pas un résultat garanti par une exécution de calcul fiable à 100%, sauf s'il utilise réellement un outil de calcul dédié (et encore faut-il vérifier qu'il l'a fait).

**Deux catégories d'erreurs à surveiller, très différentes l'une de l'autre :**

**1. L'erreur de calcul pur** : une division mal faite, une colonne mal sélectionnée, un arrondi qui s'accumule. Le réflexe simple : recalculer soi-même (ou faire recalculer par un tableur classique) au moins un chiffre clé avant de le communiquer ou de décider quoi que ce soit dessus — surtout si ce chiffre est surprenant ou important.

**2. L'erreur de raisonnement sur les données**, plus insidieuse car le calcul lui-même peut être juste :

- **Confondre corrélation et causalité** : "les ventes de glaces et les noyades augmentent ensemble en été" ne veut pas dire que l'un cause l'autre — un troisième facteur (la chaleur) explique les deux. Une IA peut formuler une conclusion causale ("X cause Y") alors que les données ne montrent qu'une corrélation.
- **Généraliser à partir d'un échantillon trop petit ou non représentatif** : une tendance calculée sur 12 lignes ne vaut pas la même chose qu'une tendance calculée sur 12 000, même si le pourcentage affiché a l'air tout aussi précis dans les deux cas.

**Trois réflexes de vérification avant d'agir sur une conclusion produite par une IA sur des données :**

1. Recalculer au moins un chiffre clé par un second moyen.
2. Se demander si la conclusion affirme une cause alors que les données ne montrent qu'une corrélation.
3. Vérifier la taille et la représentativité de l'échantillon derrière tout pourcentage ou toute tendance annoncée.

**Le point à retenir** : plus une conclusion tirée de données va servir à décider quelque chose de concret, plus elle mérite d'être vérifiée activement — la confiance affichée par l'IA n'est jamais une preuve de justesse.`,
  },
];
