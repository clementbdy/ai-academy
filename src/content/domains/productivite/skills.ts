import type { Skill } from "@/content/types";
import { levelDescriptors as descriptors } from "@/content/level-descriptors";

export const productiviteSkills: Skill[] = [
  {
    id: "assistance-a-la-redaction",
    moduleId: "ecrire-et-analyser-plus-vite",
    title: "Accélérer sa rédaction avec l'IA",
    description:
      "Utiliser un premier jet généré par IA pour dépasser la page blanche, puis le retravailler dans son propre ton plutôt que de l'utiliser tel quel.",
    prerequisites: ["role-contexte-objectif"],
    lessonIds: ["assistance-a-la-redaction-lesson"],
    exerciseIds: ["assistance-a-la-redaction-autonomous", "assistance-a-la-redaction-quiz"],
    levelDescriptors: descriptors(
      "l'assistance à la rédaction",
      "Utilise un premier jet généré par IA comme point de départ sur des contenus structurés, plutôt que sur des messages triviaux plus rapides à taper directement.",
      "Retravaille systématiquement un texte généré pour qu'il reflète son propre ton avant de le considérer terminé.",
      "Reconnaît en amont les tâches de rédaction où l'IA fera gagner du temps de celles où elle en ferait perdre.",
    ),
  },
  {
    id: "synthese-et-prise-de-notes",
    moduleId: "ecrire-et-analyser-plus-vite",
    title: "Synthétiser l'information et prendre des notes utiles",
    description:
      "Formuler clairement le besoin derrière une synthèse avant de la demander, et conserver le résultat dans un endroit retrouvable plutôt que dans une conversation qui défile.",
    prerequisites: ["assistance-a-la-redaction"],
    lessonIds: ["synthese-et-prise-de-notes-lesson"],
    exerciseIds: ["synthese-et-prise-de-notes-autonomous", "synthese-et-prise-de-notes-quiz"],
    levelDescriptors: descriptors(
      "la synthèse et la prise de notes",
      "Formule son besoin précis (décider, mémoriser, partager) avant de demander une synthèse, plutôt qu'un résumé générique.",
      "Sauvegarde systématiquement une synthèse utile dans un endroit retrouvable plutôt que de la laisser se perdre dans une conversation.",
      "Repère quand une synthèse omet un point important et le complète avant de considérer le travail terminé.",
    ),
  },
  {
    id: "ia-pour-apprendre",
    moduleId: "apprendre-et-organiser-avec-lia",
    title: "Utiliser l'IA pour apprendre plus vite",
    description:
      "Demander des explications calibrées à son niveau, se tester réellement avec des questions de vérification, et changer d'angle quand une explication ne suffit pas.",
    prerequisites: ["synthese-et-prise-de-notes"],
    lessonIds: ["ia-pour-apprendre-lesson"],
    exerciseIds: ["ia-pour-apprendre-guided", "ia-pour-apprendre-quiz"],
    levelDescriptors: descriptors(
      "l'apprentissage assisté par IA",
      "Précise son niveau actuel avant de demander une explication, plutôt qu'une question brute sans contexte.",
      "Se teste réellement avec des questions de vérification après une explication, plutôt que de juger sur une simple impression.",
      "Change délibérément d'angle d'explication (autre exemple, autre analogie) quand une première explication ne suffit pas.",
    ),
  },
  {
    id: "organisation-des-taches",
    moduleId: "apprendre-et-organiser-avec-lia",
    title: "Organiser ses tâches avec l'IA",
    description:
      "Utiliser une conversation avec un assistant pour décomposer ou prioriser une tâche ponctuelle, sans chercher à tout automatiser.",
    prerequisites: ["synthese-et-prise-de-notes"],
    lessonIds: ["organisation-des-taches-lesson"],
    exerciseIds: ["organisation-des-taches-quiz"],
    levelDescriptors: descriptors(
      "l'organisation de tâches avec l'IA",
      "Utilise une conversation ponctuelle pour décomposer une tâche floue plutôt que de rester bloqué devant son ampleur.",
      "Ajuste une décomposition de tâche générée par IA à ses propres contraintes avant de l'adopter comme plan réel.",
      "Distingue une tâche qui mérite une aide ponctuelle d'une tâche qui justifierait plutôt une vraie automatisation.",
    ),
  },
  {
    id: "mesurer-le-gain-reel",
    moduleId: "apprendre-et-organiser-avec-lia",
    title: "Mesurer le vrai gain de productivité",
    description:
      "Évaluer honnêtement, tâche par tâche, si recourir à l'IA fait réellement gagner du temps — plutôt que de supposer que plus d'IA équivaut toujours à plus de productivité.",
    prerequisites: ["ia-pour-apprendre", "organisation-des-taches"],
    lessonIds: ["mesurer-le-gain-reel-lesson"],
    exerciseIds: ["mesurer-le-gain-reel-autonomous", "mesurer-le-gain-reel-quiz"],
    levelDescriptors: descriptors(
      "la mesure du vrai gain de productivité",
      "Évalue après coup si une tâche assistée par IA a réellement fait gagner du temps par rapport à la faire directement.",
      "Anticipe avant de commencer si une tâche donnée est de celles où l'IA aide vraiment ou de celles où elle ajoute de la friction.",
      "Ajuste durablement ses habitudes d'usage de l'IA sur la base de ce constat, plutôt que de l'utiliser par réflexe sur tout.",
    ),
  },
];
