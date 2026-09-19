import type { Skill } from "@/content/types";
import { levelDescriptors as descriptors } from "@/content/level-descriptors";

export const systemesIaSkills: Skill[] = [
  {
    id: "architecture-dun-systeme-ia",
    moduleId: "concevoir-un-systeme",
    title: "Penser en système plutôt qu'en outil isolé",
    description:
      "Décomposer un système IA en quatre briques génériques (source de données, décision, outils, sortie), et prendre l'habitude de les esquisser avant de construire quoi que ce soit.",
    prerequisites: ["outils-dun-agent", "pipeline-rag-complet"],
    lessonIds: ["architecture-dun-systeme-ia-lesson"],
    exerciseIds: ["architecture-dun-systeme-ia-guided", "architecture-dun-systeme-ia-quiz"],
    levelDescriptors: descriptors(
      "l'architecture d'un système IA",
      "Décompose un système envisagé en ses briques (données, décision, outils, sortie) avant de commencer à le construire.",
      "Repère qu'une brique manque ou est inutile dès l'esquisse, avant d'avoir configuré quoi que ce soit.",
      "Conçoit l'architecture d'un système à plusieurs briques directement à partir d'un besoin réel, sans repartir d'un exemple existant.",
    ),
  },
  {
    id: "choisir-la-bonne-brique",
    moduleId: "concevoir-un-systeme",
    title: "Choisir la bonne brique pour le bon besoin",
    description:
      "Décider entre un simple prompt, une automatisation, un système RAG ou un agent selon la nature réelle du besoin, sans systématiquement choisir la brique la plus impressionnante.",
    prerequisites: ["architecture-dun-systeme-ia"],
    lessonIds: ["choisir-la-bonne-brique-lesson"],
    exerciseIds: ["choisir-la-bonne-brique-autonomous", "choisir-la-bonne-brique-quiz"],
    levelDescriptors: descriptors(
      "le choix de la bonne brique",
      "Choisit une automatisation plutôt qu'un agent pour une tâche répétitive et stable, et inversement pour une tâche aux décisions variables.",
      "Reconnaît quand une brique plus simple (un prompt isolé) suffit largement, sans sur-ingénierie.",
      "Identifie quand un besoin réel nécessite en fait de combiner plusieurs briques plutôt qu'une seule.",
    ),
  },
  {
    id: "connecter-les-briques",
    moduleId: "faire-tenir-un-systeme-ensemble",
    title: "Faire communiquer les briques entre elles",
    description:
      "Comprendre que les briques d'un système échangent des données structurées via des API/webhooks, et que chaque jonction est un point de fragilité à vérifier.",
    prerequisites: ["choisir-la-bonne-brique"],
    lessonIds: ["connecter-les-briques-lesson"],
    exerciseIds: ["connecter-les-briques-quiz"],
    levelDescriptors: descriptors(
      "la connexion entre les briques d'un système",
      "Identifie par quel mécanisme concret (API, webhook, format de données) deux briques d'un système communiquent.",
      "Vérifie le format exact des données échangées à une jonction avant de supposer qu'elle fonctionne.",
      "Anticipe qu'une jonction entre deux briques est un point de fragilité, même quand chaque brique fonctionne bien isolément.",
    ),
  },
  {
    id: "systemes-multimodaux",
    moduleId: "faire-tenir-un-systeme-ensemble",
    title: "Construire un système multimodal",
    description:
      "Enchaîner plusieurs étapes qui changent de modalité ou de forme de données (audio, texte, donnée structurée, action), pas seulement utiliser plusieurs types de fichiers isolément.",
    prerequisites: ["choisir-la-bonne-brique"],
    lessonIds: ["systemes-multimodaux-lesson"],
    exerciseIds: ["systemes-multimodaux-autonomous", "systemes-multimodaux-quiz"],
    levelDescriptors: descriptors(
      "les systèmes multimodaux",
      "Décrit précisément l'entrée et la sortie de chaque étape d'un enchaînement multimodal.",
      "Conçoit un enchaînement d'au moins 3 étapes changeant de modalité pour répondre à un besoin réel.",
      "Repère à l'avance à quelle étape d'un enchaînement multimodal une erreur romprait la suite du système.",
    ),
  },
  {
    id: "fiabiliser-un-systeme-complet",
    moduleId: "faire-tenir-un-systeme-ensemble",
    title: "Fiabiliser un système complet",
    description:
      "Appliquer gestion d'erreur, supervision et validation humaine à l'ensemble d'un système combiné, et le tester de bout en bout plutôt que brique par brique.",
    prerequisites: ["connecter-les-briques", "systemes-multimodaux", "validation-humaine"],
    lessonIds: ["fiabiliser-un-systeme-complet-lesson"],
    exerciseIds: ["fiabiliser-un-systeme-complet-autonomous", "fiabiliser-un-systeme-complet-quiz"],
    levelDescriptors: descriptors(
      "la fiabilisation d'un système complet",
      "Identifie les points de jonction d'un système combiné comme des points de fragilité à traiter spécifiquement.",
      "Teste un système de bout en bout avec un cas réel avant de le considérer prêt, pas seulement brique par brique.",
      "Applique une supervision et une validation humaine cohérentes à l'ensemble d'un système, pas seulement à sa brique la plus visible.",
    ),
  },
];
