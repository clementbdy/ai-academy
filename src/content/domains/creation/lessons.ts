import type { Lesson } from "@/content/types";

export const creationLessons: Lesson[] = [
  {
    id: "storytelling-avec-ia-lesson",
    skillId: "storytelling-avec-ia",
    title: "Structurer une histoire avec l'IA",
    body: `Un texte peut être parfaitement écrit — grammaire impeccable, vocabulaire riche — et pourtant ne donner aucune envie de le lire jusqu'au bout. Ce qui retient l'attention n'est généralement pas la qualité de la prose, mais la **structure** : une accroche qui capte, une tension ou un problème qui donne une raison de continuer, et une résolution qui apporte une vraie valeur ou satisfaction à la fin.

**Ne demande pas juste "écris un post sur X"** — cette formulation produit une information mise en forme, pas une histoire. Demande plutôt une structure explicite : *"Rédige un post qui commence par une accroche surprenante sur X, développe une tension ou un problème concret, puis résout ce problème par un enseignement clair."*

**Une technique très efficace : générer plusieurs accroches avant de choisir.** Les premiers mots (ou les premières secondes en vidéo) déterminent en grande partie si l'audience continue — c'est souvent là que se joue l'essentiel du succès ou de l'échec d'un contenu, bien plus que la qualité du reste. Demander à un assistant 5 ou 6 versions différentes d'une même accroche, puis choisir ou combiner la plus forte, coûte peu de temps et change beaucoup le résultat.

**Fournis un exemple plutôt qu'une description abstraite du ton voulu** — le principe du few-shot prompting, vu en Prompt Engineering, s'applique particulièrement bien ici. "Écris sur un ton captivant" reste vague ; coller un exemple de contenu dont le style t'a marqué, en demandant de s'en inspirer, cadre bien plus efficacement le résultat.

**Le point à retenir** : avant de juger qu'un texte "ne fonctionne pas", vérifie s'il a une vraie structure narrative (accroche, tension, résolution) — un problème de fond structurel ne se corrige pas en retouchant seulement les phrases.`,
  },
  {
    id: "contenu-pour-reseaux-sociaux-lesson",
    skillId: "contenu-pour-reseaux-sociaux",
    title: "Adapter son contenu aux réseaux sociaux",
    body: `Un même message de fond ne se présente pas de la même façon selon la plateforme — chacune a ses contraintes de format et ses conventions propres, et recopier le même contenu partout à l'identique produit rarement un bon résultat sur aucune d'elles.

**Des contraintes bien réelles selon le format** : une vidéo verticale courte (TikTok, Reels, Shorts) demande un rythme et une accroche visuelle immédiate ; un post texte (LinkedIn, X) repose sur une accroche écrite et une structure de lecture rapide ; un article de blog peut développer un raisonnement plus long. Adapter un même sujet à chacun de ces formats — plutôt que copier-coller le texte d'un article dans un post — demande de repenser la structure, pas seulement la longueur.

**Le poids disproportionné du tout début.** Sur la quasi-totalité des plateformes, la première seconde d'une vidéo ou la première ligne d'un post détermine une part majeure de l'attention obtenue — l'algorithme comme l'audience jugent en un instant s'ils continuent. Soigner particulièrement ce tout début vaut souvent plus d'efforts que le reste du contenu.

**Demander un contenu "viral" ne veut rien dire de concret pour un modèle.** Une meilleure approche : fournir des exemples réels de contenus qui ont déjà bien fonctionné dans ta niche (les tiens ou ceux de créateurs que tu suis), et demander à l'assistant de s'en inspirer pour le format et le ton — le principe du few-shot appliqué au contenu social, plutôt qu'une demande abstraite sans référence concrète.

**Un réflexe pratique** : une fois qu'un format de prompt fonctionne bien pour adapter ton contenu à une plateforme donnée, sauvegarde-le dans l'AI Lab de cette application plutôt que de le reformuler à chaque fois depuis zéro.

**Le point à retenir** : pense "un message, plusieurs formats adaptés" plutôt que "un contenu, copié partout" — chaque plateforme a ses propres règles d'attention, pas seulement ses propres dimensions techniques.`,
  },
  {
    id: "generation-images-lesson",
    skillId: "generation-images",
    title: "Générer des images avec l'IA",
    body: `Prompter un générateur d'images (Midjourney, DALL-E, Imagen...) fonctionne différemment de prompter un texte : le modèle a besoin d'éléments visuels **concrets**, pas de concepts abstraits qu'il ne peut pas "voir" de la même façon qu'il traite une logique textuelle.

**Ce qu'il faut décrire concrètement** :
- **Le sujet** : ce qui doit apparaître précisément dans l'image.
- **Le style artistique** : photographie réaliste, illustration, aquarelle, 3D...
- **L'éclairage et l'ambiance** : lumière douce, contre-jour, couleurs chaudes ou froides.
- **Le cadrage** : plan large, gros plan, vue de haut.

Un prompt comme "une image professionnelle et moderne" reste vague ; "photographie réaliste d'un bureau minimaliste, lumière naturelle venant d'une fenêtre à gauche, tons neutres, plan large" donne au modèle des éléments qu'il peut réellement traduire visuellement.

**Itérer, un détail à la fois.** Comme pour un prompt de texte (vu en Prompt Engineering), la première génération n'est presque jamais parfaite. Ajouter un détail concret par itération (l'éclairage d'abord, puis le cadrage, puis l'ambiance de couleur) permet de comprendre précisément quel changement a amélioré le résultat, plutôt que de tout reformuler à chaque essai.

**Une question de droits à ne pas ignorer.** Le statut légal des images générées par IA — et la possibilité de les utiliser commercialement — varie selon l'outil utilisé et la juridiction, et continue d'évoluer. Avant tout usage commercial d'une image générée, vérifie les conditions d'utilisation spécifiques de l'outil plutôt que de supposer qu'une image générée est automatiquement libre de droits.

**Le point à retenir** : traduis ton intention en éléments visuels concrets plutôt qu'en ambiance abstraite, affine par itérations ciblées, et vérifie les droits avant tout usage qui dépasse le cadre strictement personnel.`,
  },
  {
    id: "generation-video-audio-lesson",
    skillId: "generation-video-audio",
    title: "Générer de la vidéo et de l'audio",
    body: `Tu as déjà croisé ElevenLabs dans l'AI Toolbox de cette application : la génération de voix par IA (voix off, narration) est aujourd'hui une technologie mature et largement utilisable pour un usage sérieux. La génération de vidéo de bout en bout, elle, progresse très vite mais reste globalement plus limitée : cohérence entre les images d'une même séquence, durée maximale, coût — des contraintes réelles à connaître avant de t'y fier pour un contenu long.

**Des usages adaptés à l'état actuel de la technologie** :
- **Audio (voix off, narration)** : fiable pour un contenu long, un usage professionnel régulier.
- **Vidéo générée** : plus adaptée à de courts clips, des effets ponctuels ou des essais créatifs qu'à un contenu long et cohérent de bout en bout.

**Le clonage vocal soulève un vrai enjeu de consentement.** Répliquer une voix précise — la tienne ou celle d'une autre personne — grâce à l'IA est techniquement accessible, mais utiliser la voix de quelqu'un d'autre sans son accord explicite pose un problème éthique sérieux, indépendamment de la prouesse technique. La règle est simple : n'utilise le clonage vocal que sur ta propre voix, ou avec une autorisation explicite et claire de la personne concernée.

**Combiner intelligemment les deux.** Un usage réaliste et efficace aujourd'hui combine souvent une voix off générée de haute qualité avec des visuels plus classiques (images fixes, montage simple, vidéo générée en appoint pour des effets ponctuels) plutôt que de tout miser sur une vidéo générée de bout en bout encore expérimentale.

**Le point à retenir** : évalue chaque outil de génération selon sa vraie maturité actuelle pour ton usage précis, et ne considère jamais le clonage vocal comme un simple détail technique — c'est une question de consentement avant tout.`,
  },
  {
    id: "droits-et-ethique-creation-lesson",
    skillId: "droits-et-ethique-creation",
    title: "Droits d'auteur et éthique de la création IA",
    body: `Cette dernière leçon du module Création rassemble trois points de vigilance déjà évoqués séparément, parce qu'ils méritent d'être vérifiés systématiquement, pas seulement "quand on y pense".

**1. Les droits d'auteur.** Le statut d'une image, d'un texte ou d'une voix générée par IA — et la possibilité de l'utiliser commercialement — varie selon l'outil, ses conditions d'utilisation, et la juridiction concernée, et cette situation continue d'évoluer. Avant tout usage commercial, vérifie les conditions spécifiques de l'outil que tu utilises plutôt que de supposer un statut par défaut.

**2. Le consentement.** Utiliser la voix, l'image ou la ressemblance d'une personne réelle générée ou modifiée par IA (clonage vocal, deepfake) sans son accord explicite pose un problème éthique sérieux, quelle que soit la qualité technique du résultat. La règle reste simple, quel que soit le contexte créatif : pas de voix ou d'image d'une personne réelle sans son autorisation claire.

**3. La transparence.** Quand un public s'attend raisonnablement à du contenu humain (une déclaration personnelle, un témoignage, une voix "authentique"), diffuser un contenu généré ou fortement modifié par IA sans le signaler pose un problème de confiance — certaines plateformes l'exigent d'ailleurs désormais explicitement. Se poser la question "est-ce que mon audience aurait une réaction différente si elle savait que c'est généré par IA ?" aide à trancher si une mention s'impose.

**Le point à retenir, et le plus important** : la rapidité de production qu'offre l'IA ne dispense d'aucun de ces trois points — au contraire. Produire plus de contenu, plus vite, signifie qu'il faut vérifier ces trois points plus systématiquement à chaque création, pas moins, sous prétexte que "ça va vite de toute façon".`,
  },
];
