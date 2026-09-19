import type { Lesson } from "@/content/types";

export const promptEngineeringLessons: Lesson[] = [
  {
    id: "role-contexte-objectif-lesson",
    skillId: "role-contexte-objectif",
    title: "Rôle, contexte et objectif",
    body: `Rappel de la leçon sur les LLM : un modèle génère le texte le plus *plausible* compte tenu de ce qu'on lui a écrit. Un prompt vague ("Aide-moi avec cet email") lui laisse deviner énormément de choses — le ton, le niveau de formalité, ce qui compte vraiment. Trois informations simples éliminent l'essentiel de ces suppositions :

**Le rôle** : qui le modèle doit-il incarner ? "Tu es un recruteur technique senior" ou "Tu es un professeur qui explique à un débutant complet" oriente immédiatement le vocabulaire, le niveau de détail et l'angle de la réponse.

**Le contexte** : quelles informations de fond le modèle doit-il connaître pour répondre correctement ? Le destinataire de l'email, l'historique de la conversation, les contraintes déjà connues. Sans ce contexte, le modèle complète avec des suppositions génériques qui peuvent être à côté de la plaque.

**L'objectif** : quel résultat concret attends-tu ? "Résume ce document" est ambigu (pour qui ? pour quel usage ?) ; "Résume ce document en 5 points pour un collègue qui n'a pas le temps de le lire en entier" ne l'est plus.

**Exemple concret** :

- Prompt vague : *"Écris-moi quelque chose sur le télétravail."*
- Prompt structuré : *"Tu es rédacteur pour un blog RH destiné à des dirigeants de PME [rôle]. Nos lecteurs hésitent à généraliser le télétravail par peur de perdre en cohésion d'équipe [contexte]. Rédige un court article qui les rassure avec des arguments concrets [objectif]."*

La deuxième version ne laisse presque rien à l'improvisation — le modèle sait qui il est censé être, ce qui est en jeu, et ce qu'on attend de lui.

**Le point à retenir** : avant d'envoyer un prompt sur une tâche qui compte, vérifie que tu as répondu, même implicitement, à ces trois questions : qui parle, avec quelles informations, pour obtenir quoi.`,
  },
  {
    id: "contraintes-format-lesson",
    skillId: "contraintes-format",
    title: "Contraintes et format de sortie",
    body: `Une fois le rôle, le contexte et l'objectif posés, le modèle sait *quoi* répondre. Il lui manque encore souvent deux choses : les limites à respecter, et la forme exacte que doit prendre la réponse.

**Les contraintes** cadrent le contenu : une longueur maximale, un ton (formel, direct, humoristique), un public visé, ou des choses à éviter explicitement ("ne mentionne pas le prix", "évite le jargon technique"). Sans elles, le modèle choisit par défaut une longueur et un ton "moyens" qui ne correspondent pas forcément à ton usage réel.

**Le format de sortie** cadre la structure : une liste à puces, un tableau, un texte continu, un objet JSON avec des champs précis, un nombre de paragraphes donné. C'est particulièrement important quand la réponse doit être réutilisée ailleurs — collée dans un tableur, injectée dans un autre outil, ou lue rapidement en diagonale.

**Pourquoi ça change tout en pratique** : demander "compare ces trois outils" donne un texte en prose qu'il faut ensuite retravailler pour en extraire l'information. Demander "compare ces trois outils sous forme de tableau avec les colonnes Nom, Prix, Cas d'usage principal, Limite" donne un résultat directement exploitable — zéro reformulation nécessaire après coup.

**Un piège courant** : empiler des contraintes contradictoires ("sois très détaillé" + "en 3 phrases maximum") force le modèle à arbitrer lui-même, souvent de façon imprévisible. Mieux vaut des contraintes cohérentes entre elles qu'une liste longue mais confuse.

**Le point à retenir** : si tu sais déjà comment la réponse va être utilisée (collée où, lue par qui, dans quel outil), dis-le dans le prompt — ne laisse pas le modèle deviner la forme la plus utile.`,
  },
  {
    id: "exemples-few-shot-lesson",
    skillId: "exemples-few-shot",
    title: "Exemples et few-shot prompting",
    body: `Décrire un style avec des adjectifs ("professionnel mais chaleureux", "concis") reste ambigu — chaque modèle (et chaque humain) interprète ces mots un peu différemment. Un **exemple concret** d'entrée/sortie élimine cette ambiguïté bien plus efficacement qu'une description, aussi précise soit-elle.

On appelle ça le **few-shot prompting** : au lieu de décrire ce que tu veux (zero-shot, sans exemple), tu montres un ou plusieurs exemples du résultat attendu directement dans le prompt.

**Exemple concret** — pour reformuler des titres d'articles dans un style précis :

*Zero-shot (par description)* : "Reformule ce titre pour qu'il soit plus accrocheur."

*Few-shot (par exemple)* :
\`\`\`
Titre original : "Les bénéfices du sommeil sur la santé"
Titre reformulé : "Pourquoi dormir 8h change tout (preuves à l'appui)"

Titre original : "Comment économiser de l'argent"
Titre reformulé : "5 réflexes simples pour arrêter de gaspiller ton argent"

Titre original : "Les avantages du télétravail"
Titre reformulé : "?"
\`\`\`

Le modèle n'a plus besoin de deviner ce que signifie "accrocheur" pour toi : les deux exemples le montrent directement, et il applique le même patron au troisième titre.

**Combien d'exemples ?** Un seul exemple (*one-shot*) suffit souvent pour cadrer un format simple. Une tâche plus subtile (un ton particulier, une structure avec plusieurs variantes possibles) bénéficie de 2 à 3 exemples bien choisis — au-delà, le gain devient marginal et le prompt devient inutilement long.

**Le point à retenir** : quand une description par mots ne suffit pas à obtenir le style ou le format voulu au premier essai, remplace-la (ou complète-la) par un exemple concret plutôt que d'ajouter encore plus d'adjectifs.`,
  },
  {
    id: "criteres-verification-lesson",
    skillId: "criteres-verification",
    title: "Critères de qualité et vérification",
    body: `Deux leçons plus tôt (dans Fondations de l'IA), tu as vu qu'un modèle peut halluciner et qu'il faut vérifier ce qu'il produit. Le prompt engineering donne un moyen concret de réduire ce risque en amont : formuler explicitement, dans le prompt lui-même, les critères que la réponse doit remplir.

**Deux niveaux de vérification** :

1. **Avant l'envoi — intégrer les critères dans le prompt.** Plutôt que d'espérer que le modèle pense à tout, dis-le : *"La réponse doit citer au moins 2 chiffres sourcés, ne pas dépasser 150 mots, et éviter tout jargon financier non expliqué."* Un modèle qui reçoit ses critères explicitement les respecte beaucoup plus fiablement qu'un modèle livré à lui-même.

2. **Après la réponse — vérifier réellement, pas juste lire en diagonale.** Reprendre chaque critère un par un et vérifier que la réponse le remplit vraiment, en particulier sur tout ce qui ressemble à un fait vérifiable (chiffre, date, citation, affirmation catégorique).

**Un réflexe utile : demander l'auto-vérification.** Sur une tâche à enjeu, tu peux demander explicitement au modèle de relire sa propre réponse par rapport aux critères avant de la considérer finale ("Vérifie que ta réponse respecte bien les critères ci-dessus avant de conclure"). Ce n'est pas une garantie absolue — le modèle peut se tromper en se relisant aussi — mais ça rattrape une partie des oublis évidents.

**Le point à retenir** : des critères explicites dans le prompt valent mieux qu'une vérification a posteriori seule, mais ne remplacent jamais complètement cette vérification — les deux se complètent.`,
  },
  {
    id: "iteration-prompt-lesson",
    skillId: "iteration-prompt",
    title: "Itérer sur un prompt",
    body: `Un premier prompt donne rarement le résultat parfait du premier coup — et ce n'est pas un échec, c'est la norme. La compétence clé n'est pas de "bien prompter dès le départ", mais de savoir corriger efficacement un prompt qui n'a pas donné ce qu'il fallait.

**La boucle d'itération, en trois étapes :**

1. **Diagnostiquer précisément ce qui ne va pas.** Pas "c'est pas bon", mais : est-ce le ton qui est faux ? Une information manquante dans le contexte ? Le format qui ne convient pas ? Un critère implicite que tu n'avais pas formulé ? Le diagnostic précis détermine quoi corriger.
2. **Ajuster une seule variable à la fois.** Si tu changes le rôle, le format et les contraintes en même temps, tu ne sauras plus lequel de ces changements a résolu (ou aggravé) le problème. Corrige l'élément identifié à l'étape 1, puis réessaie.
3. **Recommencer si nécessaire.** Deux ou trois itérations ciblées suffisent en général à corriger un prompt raté — bien plus vite qu'une reformulation complète à chaque fois.

**Garder une trace de ce qui fonctionne.** Une fois qu'un prompt donne un bon résultat sur une tâche que tu refais régulièrement (résumer un type de document, rédiger un type de message), ça vaut la peine de le sauvegarder plutôt que de repartir de zéro la prochaine fois. C'est exactement à ça que sert l'**AI Lab** de cette application : un endroit pour garder tes prompts qui marchent, avec tes notes sur pourquoi ils marchent.

**Le point à retenir** : face à une réponse décevante, résiste à l'envie de tout réécrire au hasard. Identifie la cause précise, corrige-la spécifiquement, et sauvegarde le résultat une fois qu'il fonctionne.`,
  },
];
