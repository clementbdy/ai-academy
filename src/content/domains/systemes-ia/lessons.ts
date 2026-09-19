import type { Lesson } from "@/content/types";

export const systemesIaLessons: Lesson[] = [
  {
    id: "architecture-dun-systeme-ia-lesson",
    skillId: "architecture-dun-systeme-ia",
    title: "Penser en système plutôt qu'en outil isolé",
    body: `Jusqu'ici, tu as appris des briques séparées : un bon prompt, une automatisation, un pipeline RAG, un agent. Un **système IA** ne se limite pas à une seule de ces briques — il en combine plusieurs pour répondre à un besoin réel, plus large qu'une tâche isolée.

**Quatre briques génériques reviennent dans presque tout système** :

1. **La source de données** : d'où viennent les informations dont le système a besoin (des documents via un RAG, une base de données, ou rien du tout si le besoin n'en nécessite pas).
2. **La couche de décision** : ce qui détermine l'action à mener — un simple prompt pour une question ponctuelle, une automatisation pour un chemin fixe, ou un agent pour des décisions variables (tu verras dans la prochaine leçon comment choisir).
3. **Les outils/API externes** : ce que le système peut réellement *faire* concrètement — envoyer un message, chercher sur le web, écrire dans un fichier, appeler un service.
4. **La sortie** : comment le résultat arrive à l'utilisateur final — un message, un document généré, une notification, une action directement exécutée.

**L'habitude qui change tout : esquisser avant de construire.** Avant de configurer quoi que ce soit dans un outil, prends le temps de dessiner (même sommairement, sur papier) quelles briques ton système a besoin et comment elles s'enchaînent. Cet exercice simple révèle très souvent qu'une brique est inutile pour ce besoin précis, ou au contraire qu'il en manque une à laquelle tu n'avais pas pensé — bien avant d'avoir perdu du temps à configurer un outil dans le mauvais sens.

**Exemple concret** : un système qui répond automatiquement aux questions fréquentes d'un client par email pourrait avoir pour source de données un RAG sur la documentation produit, pour décision une automatisation qui vérifie d'abord si la question est bien couverte, pour outil l'API du service d'emailing, et pour sortie une réponse envoyée directement — ou transmise à un humain si le RAG ne trouve rien de pertinent.

**Le point à retenir** : avant de te demander "avec quel outil je construis ça", demande-toi "quelles briques ce besoin nécessite-t-il, et comment s'articulent-elles" — la réponse à la seconde question rend la première bien plus simple.`,
  },
  {
    id: "choisir-la-bonne-brique-lesson",
    skillId: "choisir-la-bonne-brique",
    title: "Choisir la bonne brique pour le bon besoin",
    body: `Tu as maintenant vu, séparément, quatre façons de traiter un besoin : un simple prompt, une automatisation, un système RAG, un agent. Le vrai enjeu n'est pas de maîtriser chacune isolément, mais de savoir **laquelle choisir** face à un besoin réel — et de résister à la tentation d'utiliser systématiquement la brique la plus impressionnante.

**Un cadre de décision simple** :

- **Besoin ponctuel, une seule question** → un simple prompt suffit. Pas besoin de construire quoi que ce soit de plus élaboré pour une tâche isolée.
- **Tâche répétitive et stable, avec un chemin logique fixe** → une automatisation (Make, n8n, Zapier). Le comportement attendu ne varie pas d'une exécution à l'autre.
- **Besoin de connaissances privées et volumineuses** → un système RAG. La question porte sur un corpus de documents trop grand pour tenir dans un simple prompt.
- **Décisions variables, à prendre étape par étape vers un objectif** → un agent. Le chemin à suivre n'est pas connu à l'avance et dépend de ce qui est observé en cours de route.

**Ces briques ne s'excluent pas — elles se combinent souvent.** Un agent peut très bien utiliser un système RAG comme l'un de ses outils, ou une automatisation peut inclure une étape où un LLM prend une décision ponctuelle. Le cadre ci-dessus aide à identifier le rôle de chaque brique dans le système, pas à en choisir une seule de façon exclusive.

**L'erreur la plus fréquente : la sur-ingénierie.** Construire un agent autonome complexe pour une tâche parfaitement prévisible et répétitive ajoute de la complexité, du risque, et du temps de mise au point sans bénéfice réel — une automatisation simple aurait suffi. L'inverse existe aussi : forcer un scénario d'automatisation rigide sur une tâche qui a réellement besoin de décisions variables produit un système qui échoue dès qu'un cas non prévu se présente.

**Le point à retenir** : choisis la brique la plus simple qui répond réellement au besoin, pas la plus sophistiquée que tu maîtrises — la complexité doit venir du problème, pas d'un réflexe.`,
  },
  {
    id: "connecter-les-briques-lesson",
    skillId: "connecter-les-briques",
    title: "Faire communiquer les briques entre elles",
    body: `Un système qui combine plusieurs briques a besoin qu'elles se parlent — et c'est souvent à cet endroit précis, plutôt qu'au sein d'une brique isolée, que les problèmes apparaissent.

**Le mécanisme le plus courant : API et webhooks.** Tu as vu en Automatisation qu'un webhook déclenche une action instantanément, et que la plupart des actions no-code sont en réalité des appels API structurés généralement en JSON (vu en Programmation assistée). Dans un système combiné, ce sont ces mêmes mécanismes qui relient les briques entre elles : une automatisation peut appeler l'API d'un système RAG pour récupérer une information, puis transmettre le résultat à un agent qui décide de la suite.

**Exemple concret d'enchaînement** : un email arrive (déclencheur d'une automatisation) → l'automatisation interroge un système RAG via son API pour retrouver une information pertinente dans une base documentaire → le résultat est transmis à un agent qui décide comment formuler la réponse → la réponse est envoyée. Quatre briques, trois jonctions entre elles.

**Chaque jonction est un point de fragilité.** Chaque brique individuelle peut fonctionner parfaitement en isolation — un test réussi de l'automatisation seule, un test réussi du RAG seul, un test réussi de l'agent seul — sans garantir que l'ensemble fonctionne, si une donnée mal formée ou une réponse inattendue à une jonction casse la suite de la chaîne. Un chunk de RAG mal formaté qui arrive dans une automatisation qui attendait un format précis peut interrompre tout le système, même si le RAG et l'automatisation fonctionnent chacun très bien séparément.

**Le réflexe à adopter.** Vérifier le format exact des données échangées à chaque jonction — pas seulement que chaque brique "marche" isolément. Un système à plusieurs briques n'est fiable que si ses jonctions le sont aussi.

**Le point à retenir** : la fiabilité d'un système ne se limite pas à la somme de la fiabilité de ses briques — les jonctions entre elles méritent une attention au moins aussi grande.`,
  },
  {
    id: "systemes-multimodaux-lesson",
    skillId: "systemes-multimodaux",
    title: "Construire un système multimodal",
    body: `Tu as vu en Fondations de l'IA et en Assistants IA qu'un modèle peut analyser une image ou un fichier. Un **système multimodal** va plus loin : il enchaîne plusieurs étapes qui changent de modalité ou de forme de données, chaque sortie devenant l'entrée structurée de l'étape suivante.

**Un exemple concret, étape par étape** :

1. **Entrée** : un mémo vocal enregistré sur ton téléphone (modalité audio).
2. **Étape 1** : transcription du mémo en texte (audio → texte).
3. **Étape 2** : extraction des tâches mentionnées dans le texte, sous une forme structurée — une liste avec titre, échéance, priorité (texte → donnée structurée, comme le JSON vu en Programmation assistée).
4. **Étape 3** : création automatique d'un événement dans un calendrier pour chaque tâche extraite (donnée structurée → action).

Ce n'est pas simplement "utiliser plusieurs types de fichiers" — c'est un enchaînement où chaque étape transforme réellement ce qu'elle reçoit avant de le transmettre à la suivante, avec des changements de forme (audio, puis texte, puis données structurées, puis action) à chaque maillon.

**Pourquoi préciser l'entrée et la sortie de chaque étape.** Savoir exactement ce qu'une étape reçoit et ce qu'elle doit produire permet de repérer où un enchaînement peut casser — si la transcription rate un mot clé, l'étape d'extraction des tâches héritera d'une base incomplète, et toute la suite en pâtira sans que l'erreur d'origine soit évidente à ce stade.

**Le point à retenir** : un système multimodal se pense comme une chaîne de transformations précises, une modalité ou une forme de données à la fois — pas comme un empilement de capacités multimodales indépendantes les unes des autres.`,
  },
  {
    id: "fiabiliser-un-systeme-complet-lesson",
    skillId: "fiabiliser-un-systeme-complet",
    title: "Fiabiliser un système complet",
    body: `Cette dernière leçon du module rassemble ce que tu as appris séparément — gestion d'erreur (Automatisation), supervision et validation humaine (Agents IA) — et l'applique à un **système entier**, pas à une seule de ses briques.

**Pourquoi les échecs se multiplient avec la combinaison.** Chaque jonction entre deux briques (vue dans une leçon précédente) est un point supplémentaire où quelque chose peut mal se passer. Un système à quatre briques n'a pas quatre points de défaillance possibles, mais quatre briques *et* leurs jonctions — souvent plus de points de fragilité qu'il n'y paraît au premier regard.

**Trois réflexes à appliquer à l'échelle du système entier, pas d'une seule brique** :

1. **Gestion d'erreur à chaque jonction**, pas seulement au sein de chaque brique — une automatisation peut très bien avoir son propre gestionnaire d'erreur, tout en laissant sans protection le passage de données vers l'agent qui la suit.
2. **Supervision des étapes intermédiaires**, en particulier si un agent est impliqué quelque part dans le système — surveiller le résultat final ne suffit pas si une dérive s'est produite plusieurs étapes plus tôt.
3. **Validation humaine sur les actions à fort enjeu produites par le système dans son ensemble**, pas seulement par la brique agent isolément — une action irréversible peut être déclenchée par l'interaction de plusieurs briques, pas uniquement par la décision finale de l'une d'entre elles.

**Un réflexe nouveau, propre à cette leçon : tester de bout en bout, pas seulement brique par brique.** Un système peut réussir chaque test individuel (l'automatisation fonctionne, le RAG fonctionne, l'agent fonctionne) et pourtant échouer dès qu'on le fait tourner dans son ensemble sur un cas réel — parce que le problème se situe précisément dans l'interaction entre les briques, invisible tant qu'on ne teste que chacune séparément.

**Le point à retenir, et la conclusion de tout ce module** : plus un système combine de briques, plus il demande de rigueur sur les jonctions et de supervision globale — jamais moins, même quand chaque brique individuelle a été soigneusement conçue.`,
  },
];
