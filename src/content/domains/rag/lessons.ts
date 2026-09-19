import type { Lesson } from "@/content/types";

export const ragLessons: Lesson[] = [
  {
    id: "embeddings-et-recherche-semantique-lesson",
    skillId: "embeddings-et-recherche-semantique",
    title: "Embeddings et recherche sémantique",
    body: `Une recherche classique (comme Ctrl+F dans un document) trouve des mots **exacts**. Si tu cherches "voiture" dans un texte qui ne contient que le mot "automobile", tu ne trouveras rien, alors que le sens est le même. C'est cette limite que la recherche sémantique dépasse.

**Un embedding** est une façon de transformer un texte (un mot, une phrase, un paragraphe) en une liste de nombres — un vecteur — qui capture son **sens**, pas seulement ses lettres. Deux textes dont le sens est proche obtiennent des vecteurs proches, même s'ils ne partagent aucun mot en commun. "Chat" et "félin domestique" auraient des embeddings proches ; "chat" et "chapeau", malgré une orthographe voisine, auraient des embeddings éloignés, parce que leurs sens n'ont rien à voir.

**La recherche sémantique** consiste à comparer l'embedding d'une question à ceux d'un ensemble de textes, et à renvoyer ceux dont l'embedding est le plus proche — c'est-à-dire ceux dont le **sens** se rapproche le plus de la question, indépendamment des mots exacts utilisés.

**Tu utilises probablement déjà cette technologie sans le savoir.** NotebookLM (déjà présent dans l'AI Toolbox de cette application) l'utilise en coulisses : quand tu poses une question sur un document que tu lui as fourni, il ne cherche pas les mots exacts de ta question dans le texte — il cherche les passages dont le *sens* est le plus proche de ce que tu demandes, même formulé très différemment.

**Pourquoi c'est plus flexible mais pas magique.** Cette flexibilité est un vrai progrès par rapport à la recherche par mot-clé — plus besoin de deviner le vocabulaire exact utilisé dans le document. Mais elle reste dépendante de la qualité de l'encodage : deux sens réellement différents peuvent parfois se retrouver artificiellement proches, ce qui peut ramener un résultat pertinent en apparence mais faux sur le fond.

**Le point à retenir** : la recherche sémantique trouve "ce qui veut dire la même chose", pas "ce qui contient les mêmes mots" — une avancée réelle, mais qui appelle toujours une vérification du résultat, pas une confiance automatique.`,
  },
  {
    id: "chunking-lesson",
    skillId: "chunking",
    title: "Découper les documents (chunking)",
    body: `Avant de transformer un document en embeddings, il faut d'abord le **découper** en fragments plus petits, appelés *chunks*. Ce n'est pas un détail technique secondaire — un mauvais découpage peut rendre un système peu fiable même avec les meilleurs modèles.

**Pourquoi découper est nécessaire.** Un embedding représente un texte comme **un seul** vecteur. Si tu transformais un document de 300 pages en un seul embedding, ce vecteur devrait résumer tout le contenu du livre en une seule "empreinte de sens" — l'écrasante majorité du détail se perdrait, exactement comme tu l'as vu avec la dilution d'un contexte trop chargé dans Fondations de l'IA. Découper le document en fragments plus petits (un paragraphe, une section) permet à chaque fragment de garder un sens suffisamment précis pour être retrouvé utilement.

**L'équilibre à trouver dans la taille des chunks** :
- **Trop grand** : le chunk retrouvé contient beaucoup de contenu non pertinent en plus de l'information recherchée, ce qui dilue la pertinence du résultat et gaspille de la place dans le contexte final.
- **Trop petit** : le fragment perd le contexte qui l'entoure — une phrase qui commence par "cette méthode présente cependant une limite" n'a aucun sens si le chunk ne contient pas la phrase précédente qui explique de quelle méthode il s'agit.

**Le chevauchement (overlap) entre chunks consécutifs.** Une technique courante consiste à faire se chevaucher légèrement deux chunks voisins (les derniers mots de l'un sont aussi les premiers de l'autre), pour éviter qu'une idée importante ne soit coupée pile à la frontière entre deux fragments et perde tout son sens de chaque côté de la coupure.

**Le point à retenir** : la qualité d'un système RAG dépend autant du découpage des documents en amont que du modèle utilisé en aval — un découpage mal réglé peut rendre inutile un excellent modèle de génération.`,
  },
  {
    id: "bases-vectorielles-lesson",
    skillId: "bases-vectorielles",
    title: "Bases de données vectorielles",
    body: `Une fois que chaque chunk d'un document a son embedding, il faut un endroit où les stocker et les chercher efficacement — c'est le rôle d'une **base de données vectorielle**.

**En quoi elle diffère d'une base de données classique.** Une base de données classique (comme celle qui alimente cette application) retrouve des données par correspondance exacte ou par plage de valeurs sur des champs structurés ("trouve toutes les compétences avec un niveau supérieur à 3"). Une base vectorielle, elle, est conçue pour une opération différente : étant donné un vecteur (l'embedding d'une question), retrouver très rapidement les vecteurs les plus **proches** parmi potentiellement des millions d'embeddings stockés — une recherche par proximité de sens, pas par égalité exacte.

**Une infrastructure invisible que tu croises déjà.** Tu n'as pas besoin de construire toi-même une base vectorielle pour bénéficier du RAG : des outils grand public comme NotebookLM, ou les espaces "Projets" de Claude et ChatGPT quand tu y attaches plusieurs documents, en utilisent une en coulisses. Comprendre ce qui se passe derrière ces outils aide surtout à diagnostiquer une recherche qui ne trouve pas ce que tu attendais, plutôt qu'à devoir en construire une toi-même.

**Pourquoi ça change d'échelle.** Fournir directement un document dans un prompt (vu en Context Engineering) fonctionne très bien pour quelques fichiers. Dès que la quantité de documents dépasse ce qu'on peut raisonnablement coller dans une fenêtre de contexte — des centaines ou des milliers de fichiers — une base vectorielle devient indispensable : elle permet de ne récupérer, à chaque question, que les quelques fragments réellement pertinents parmi l'ensemble, plutôt que de tout charger à chaque fois.

**Le point à retenir** : une base vectorielle est la pièce d'infrastructure qui rend un RAG capable de fonctionner sur une très grande quantité de documents plutôt que sur une poignée de fichiers gérables directement.`,
  },
  {
    id: "pipeline-rag-complet-lesson",
    skillId: "pipeline-rag-complet",
    title: "Le pipeline RAG de bout en bout",
    body: `Tu as maintenant toutes les pièces pour assembler le pipeline complet du RAG (*Retrieval-Augmented Generation*, génération augmentée par récupération) — de la préparation des documents jusqu'à la réponse finale.

**Les étapes, dans l'ordre** :

1. **Préparation** : les documents sont découpés en chunks, et chaque chunk est transformé en embedding, puis stocké dans une base vectorielle.
2. **Question** : quand tu poses une question, elle est elle-même transformée en embedding, selon le même procédé.
3. **Recherche (retrieval)** : le système cherche dans la base vectorielle les chunks dont l'embedding est le plus proche de celui de la question — les fragments les plus pertinents pour y répondre.
4. **Génération** : ces chunks pertinents sont insérés dans le contexte du prompt envoyé au LLM, qui rédige sa réponse en s'appuyant sur ce contenu réel, plutôt que sur sa seule mémoire générale.

**Le lien avec ce que tu as déjà vu.** C'est exactement le même principe que la recherche augmentée par le web (vue en Assistants IA) : ancrer la réponse sur des sources réelles plutôt que sur la mémoire figée du modèle. La différence est que le RAG s'applique à **tes propres documents privés** (contrats, notes internes, documentation) plutôt qu'au web public.

**Le RAG réduit le risque d'hallucination, mais ne l'élimine pas.** Si le retrieval renvoie un chunk peu pertinent, ou si l'information recherchée n'existe simplement pas dans la base, deux comportements sont possibles : le système reconnaît honnêtement qu'il ne trouve pas l'information (le comportement souhaitable), ou il complète malgré tout avec une supposition plausible tirée de ses connaissances générales (le risque à surveiller — exactement le sujet de la prochaine leçon).

**Le point à retenir** : le RAG n'est pas une boîte noire magique — c'est un enchaînement de quatre étapes concrètes, et un problème à n'importe laquelle d'entre elles (mauvais découpage, recherche imprécise, génération infidèle) peut expliquer une réponse décevante.`,
  },
  {
    id: "verifier-un-systeme-rag-lesson",
    skillId: "verifier-un-systeme-rag",
    title: "Vérifier un système RAG",
    body: `Tu as vu en Fondations de l'IA qu'un modèle peut halluciner, et l'idée qu'il faut vérifier plutôt que faire confiance aveuglément revient tout au long de cette formation. Pour un système RAG, deux tests concrets et complémentaires permettent d'évaluer sa fiabilité réelle.

**Test 1 : une question dont tu connais la vraie réponse, présente dans les documents.** Pose une question dont tu es certain que la réponse figure dans la base de connaissances fournie, et vérifie que le système retrouve la bonne information — et, si possible, qu'il cite bien la bonne source. Ce test confirme que le pipeline fonctionne sur le cas simple.

**Test 2 : une question dont tu sais que la réponse est absente.** C'est le test le plus révélateur, et souvent le plus négligé. Pose une question précise dont tu es certain que la réponse **n'existe pas** dans les documents fournis. Un bon système RAG doit reconnaître explicitement cette absence ("je ne trouve pas cette information dans les documents fournis") plutôt que de combler le vide avec une réponse plausible tirée des connaissances générales du modèle sous-jacent — un système qui échoue à ce test peut sembler fiable en usage normal tout en étant capable d'inventer discrètement une réponse dès que l'information manque.

**Un troisième réflexe, moins technique mais tout aussi important.** Un pipeline RAG techniquement parfait donne quand même des réponses obsolètes si les documents sources ne sont plus à jour — exactement le piège déjà signalé à propos des bases de connaissances en Context Engineering. Vérifier périodiquement la fraîcheur des sources compte autant que vérifier le bon fonctionnement technique du système.

**Le point à retenir** : ne juge jamais un système RAG uniquement sur les questions où il fonctionne bien — teste-le délibérément sur une question dont il ne devrait pas connaître la réponse, c'est là que se révèle sa vraie fiabilité.`,
  },
];
