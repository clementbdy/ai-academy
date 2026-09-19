import type { Lesson } from "@/content/types";

export const programmationAssisteeLessons: Lesson[] = [
  {
    id: "notions-de-base-du-code-lesson",
    skillId: "notions-de-base-du-code",
    title: "Les briques universelles du code",
    body: `Un bout de code dans un langage inconnu peut sembler complètement opaque au premier coup d'œil. En réalité, la quasi-totalité des langages de programmation reposent sur une poignée de concepts identiques, seule la syntaxe change :

- **Une variable** : un nom qui stocke une valeur (\`age = 25\`, \`nom = "Marie"\`). C'est une boîte étiquetée dans laquelle on range quelque chose pour le réutiliser plus loin.
- **Une fonction** : un bloc de code réutilisable qui prend éventuellement des entrées et produit un résultat (une fonction "calculer_total" qui prend une liste de prix et renvoie leur somme).
- **Une condition** : une instruction qui n'exécute une action que si quelque chose est vrai ("si l'âge est supérieur à 18, alors...").
- **Une boucle** : une instruction qui répète une action plusieurs fois ("pour chaque élément de cette liste, fais...").

Une fois que tu sais repérer ces quatre formes, tu peux suivre la logique générale d'un code même dans un langage que tu n'as jamais appris — la syntaxe diffère, mais le raisonnement sous-jacent reste le même partout.

**Où se situent HTML, CSS, JavaScript et Python dans tout ça ?**

- **HTML** définit la *structure* d'une page web (titres, paragraphes, images, boutons).
- **CSS** définit son *apparence visuelle* (couleurs, polices, mise en page).
- **JavaScript** définit son *comportement interactif* (que se passe-t-il quand on clique sur un bouton). Ces trois-là s'exécutent dans un navigateur.
- **Python** est un langage polyvalent qui ne tourne généralement pas dans un navigateur — souvent utilisé côté serveur, pour l'analyse de données, ou pour automatiser des scripts.

**Le point à retenir** : tu n'as pas besoin de mémoriser la syntaxe exacte de chaque langage pour comprendre *ce que fait* un bout de code — repère les variables, fonctions, conditions et boucles, et le reste devient beaucoup plus lisible, y compris dans du code que tu n'as jamais écrit toi-même.`,
  },
  {
    id: "json-donnees-structurees-lesson",
    skillId: "json-donnees-structurees",
    title: "JSON et les données structurées",
    body: `Tu as déjà croisé le JSON dans le module Automatisation : c'est le format que la plupart des API et outils no-code utilisent pour échanger des données. Cette leçon en détaille la syntaxe, volontairement simple.

**Un objet JSON** se note entre accolades \`{ }\` et contient des paires clé-valeur :

\`\`\`json
{
  "titre": "Fondations de l'IA",
  "annee": 2026,
  "termine": false,
  "tags": ["ia", "llm", "debutant"]
}
\`\`\`

Ici, \`"titre"\` est une clé, associée à la valeur texte \`"Fondations de l'IA"\`. Les valeurs peuvent être du texte (entre guillemets), un nombre, un booléen (\`true\`/\`false\`), ou même une **liste** (entre crochets \`[ ]\`, comme \`"tags"\` ci-dessus) ou un autre objet imbriqué.

**Pourquoi ce format est partout.** Une API répond en JSON, un fichier de configuration est souvent écrit en JSON, et même cette application stocke certaines données (les réponses à un quiz, les étapes d'un workflow) sous cette forme dans sa base de données. C'est un format à la fois lisible par un humain et facile à traiter par un programme.

**Une compétence directement utile : convertir des données en JSON.** Face à une liste de contacts collée depuis un email, ou un tableau copié depuis un tableur, un assistant IA peut la restructurer en JSON propre en quelques secondes — utile dès que tu dois fournir ces données à un autre outil qui l'exige dans ce format.

**Le réflexe de vérification.** Une conversion générée automatiquement peut sembler correcte tout en ayant perdu une donnée ou mal typé une valeur (un nombre mis entre guillemets comme du texte, par exemple). Avant de réutiliser un JSON généré, vérifie qu'il est syntaxiquement valide (accolades et virgules cohérentes) et que chaque donnée d'origine s'y retrouve fidèlement.

**Le point à retenir** : le JSON n'est qu'une façon structurée d'écrire des données déjà familières (texte, nombres, listes) — une fois la syntaxe démystifiée, le lire ou en demander la génération devient un geste simple.`,
  },
  {
    id: "prompter-du-code-lesson",
    skillId: "prompter-du-code",
    title: "Bien prompter pour obtenir du code utile",
    body: `Tout ce que tu as appris en Prompt Engineering (rôle, contexte, objectif, contraintes, format) s'applique au code — avec quelques précisions supplémentaires propres à ce domaine.

**Précise le langage et la version exacts.** "Écris une fonction qui trie une liste" est ambigu : en quel langage ? "Écris une fonction en Python 3 qui trie une liste de dictionnaires par la clé 'date'" élimine toute ambiguïté et évite une réponse dans le mauvais langage ou avec une syntaxe obsolète.

**Fournis le code existant plutôt que de le décrire.** Si tu veux modifier une fonction déjà écrite, colle-la directement dans le prompt ("voici ma fonction actuelle : [code] — modifie-la pour qu'elle gère aussi le cas où la liste est vide") plutôt que de la décrire de mémoire, au risque d'oublier un détail qui compte.

**Colle le message d'erreur complet, pas un résumé.** "J'ai une erreur" ne donne presque aucune information exploitable. Le texte exact d'un message d'erreur (souvent appelé *stack trace* en programmation) indique généralement la ligne précise et la nature du problème — c'est une mine d'informations qu'il ne faut jamais paraphraser.

**Demande une explication en plus du code.** Ajouter "explique aussi pourquoi cette solution fonctionne" transforme une simple réponse toute faite en occasion d'apprentissage — cohérent avec l'esprit du Coach IA de cette application : comprendre plutôt que simplement obtenir un résultat.

**Exemple de prompt bien construit** :
*"En JavaScript, dans ce projet React [contexte technique] : voici mon composant actuel [code collé]. Quand je clique sur le bouton, j'obtiens cette erreur : [message d'erreur complet]. Corrige le problème et explique-moi pourquoi il se produisait."*

**Le point à retenir** : un prompt de code vague produit une réponse générique qu'il faudra retravailler ; un prompt qui précise le langage, fournit le code existant et l'erreur exacte, obtient généralement une réponse directement exploitable dès le premier essai.`,
  },
  {
    id: "verifier-du-code-genere-lesson",
    skillId: "verifier-du-code-genere",
    title: "Vérifier du code généré par IA",
    body: `Tu as vu dans Fondations de l'IA qu'un modèle peut halluciner des faits qui semblent plausibles mais sont faux. La même chose arrive avec le code : un assistant peut générer une fonction qui **semble** correcte — syntaxe propre, nom cohérent — tout en utilisant une fonction qui n'existe pas dans une librairie, un paramètre obsolète, ou une méthode inventée de toutes pièces mais plausible.

**Le réflexe non négociable : exécuter réellement le code.** Une lecture attentive ne suffit pas à garantir qu'un code fonctionne — seule l'exécution le prouve. Un code qui a l'air parfaitement correct peut échouer à la première tentative pour une raison invisible à la lecture (une virgule oubliée, une fonction mal orthographiée).

**Tester au moins un cas limite, pas seulement le cas normal.** Un code qui fonctionne sur l'exemple attendu peut échouer sur une entrée vide, une valeur négative, ou un cas particulier auquel ni toi ni l'assistant n'aviez pensé au moment de la demande. Prendre le temps de tester un cas limite avant de faire confiance au résultat révèle souvent un problème qu'une simple relecture aurait manqué.

**Vérifier ce que tu ne reconnais pas.** Si un code utilise une fonction ou une méthode dont le nom t'est inconnu, ce n'est pas nécessairement un problème — mais ça vaut la peine de vérifier qu'elle existe réellement (dans la documentation officielle de la librairie, ou en demandant confirmation à l'assistant) plutôt que de supposer qu'elle est correcte simplement parce qu'elle a l'air plausible.

**Même les meilleurs assistants ne sont pas infaillibles sur ce terrain**, en particulier sur des librairies récentes, peu documentées, ou en évolution rapide — leurs connaissances ont, comme pour tout LLM, une date de coupure.

**Le point à retenir** : un code généré par IA est un point de départ à vérifier, pas un résultat final à copier-coller aveuglément — l'exécution réelle et le test d'un cas limite prennent quelques minutes et évitent des heures de débogage plus tard.`,
  },
  {
    id: "git-github-bases-lesson",
    skillId: "git-github-bases",
    title: "Bases de Git et GitHub",
    body: `Que ton code soit écrit par toi ou par un assistant IA, une question reste entière : comment revenir en arrière si une modification casse quelque chose ? C'est exactement le problème que **Git** résout.

**Un dépôt (repository)** est un dossier de projet dont l'historique complet des modifications est suivi. **Un commit** est un instantané du projet à un instant donné, accompagné d'un message qui explique ce qui a changé et pourquoi ("ajoute la validation du formulaire de contact"). Rien n'est perdu : à tout moment, tu peux consulter l'état du projet à n'importe quel commit passé, ou y revenir si besoin.

**Pourquoi c'est indispensable même sur un projet largement assisté par IA** :

1. **Un filet de sécurité concret.** Si une modification (la tienne ou celle d'un assistant) casse quelque chose qui fonctionnait, revenir au dernier commit stable annule le dégât en quelques secondes.
2. **Un historique consultable.** Des mois plus tard, les messages de commit expliquent pourquoi une décision a été prise — bien plus fiable que d'essayer de s'en souvenir.
3. **Une base pour collaborer**, que ce soit avec d'autres humains ou avec un assistant IA agentique qui propose ses propres modifications sur le code existant.

**GitHub** est un service qui héberge ces dépôts en ligne : il permet de sauvegarder son code hors de sa machine, de le partager (publiquement ou en privé), et sert aussi de vitrine pour d'innombrables projets open-source que tu peux consulter ou réutiliser.

**Le point à retenir** : committer régulièrement, avec un message clair sur ce qui a changé, coûte quelques secondes et transforme "j'ai peur de casser quelque chose" en "je peux toujours revenir en arrière" — un vrai changement de posture face à l'expérimentation.`,
  },
];
