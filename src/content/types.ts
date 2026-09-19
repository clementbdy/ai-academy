// Schéma du contenu pédagogique statique (versionné dans le repo).
// Les données utilisateur (progression, soumissions...) vivent séparément
// dans la base SQLite via Prisma — voir prisma/schema.prisma.

export type SkillLevel = 0 | 1 | 2 | 3 | 4 | 5;

export interface LevelDescriptor {
  level: SkillLevel;
  label: string;
  description: string;
}

export interface Domain {
  id: string;
  title: string;
  description: string;
  moduleIds: string[];
}

export interface Module {
  id: string;
  domainId: string;
  title: string;
  description: string;
  skillIds: string[];
}

export interface Skill {
  id: string;
  moduleId: string;
  title: string;
  description: string;
  /** IDs d'autres compétences requises au niveau >= 3 avant déblocage. */
  prerequisites: string[];
  levelDescriptors: LevelDescriptor[];
  lessonIds: string[];
  exerciseIds: string[];
}

export interface Lesson {
  id: string;
  skillId: string;
  title: string;
  /** Contenu en Markdown. */
  body: string;
}

export type ExerciseType = "guided" | "autonomous" | "quiz" | "challenge";

export interface GuidedStep {
  id: string;
  prompt: string;
  expectedAnswer: string;
}

export interface ValidationCriterion {
  id: string;
  description: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctOptionIndex: number;
}

export interface BaseExercise {
  id: string;
  skillId: string;
  title: string;
  instructions: string;
}

export interface GuidedExercise extends BaseExercise {
  type: "guided";
  steps: GuidedStep[];
}

export interface AutonomousExercise extends BaseExercise {
  type: "autonomous";
  criteria: ValidationCriterion[];
}

export interface QuizExercise extends BaseExercise {
  type: "quiz";
  questions: QuizQuestion[];
  /** Pourcentage minimal de bonnes réponses pour valider (0-100). */
  passingScore: number;
}

export interface ChallengeExercise extends BaseExercise {
  type: "challenge";
  criteria: ValidationCriterion[];
}

export type Exercise =
  | GuidedExercise
  | AutonomousExercise
  | QuizExercise
  | ChallengeExercise;

export type ToolLevel = "débutant" | "intermédiaire" | "avancé";
export type ToolPricing = "gratuit" | "freemium" | "payant";

export interface ToolEntry {
  id: string;
  name: string;
  category: string;
  description: string;
  useCases: string[];
  level: ToolLevel;
  pricing: ToolPricing;
  /** Description qualitative plutôt que des tarifs précis, qui datent vite. */
  pricingNote: string;
  /** Noms d'outils comparables (texte libre, pas des IDs — la Toolbox n'a pas
   * vocation à référencer exhaustivement chaque alternative). */
  alternatives: string[];
  limitations: string;
  tutorialUrl?: string;
}
