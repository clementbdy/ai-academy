import {
  skills,
  getModulesByDomain,
  getSkillsByModule,
  getLessonsBySkill,
  getExercisesBySkill,
} from "@/content/registry";
import { getLevel, MASTERY_THRESHOLD, type LevelMap } from "@/lib/progress";

// Durées de référence par activité — une estimation indicative dérivée de la
// structure réelle du contenu (nombre de leçons, type et nombre d'exercices),
// pas une mesure d'usage réel. À ajuster ici si l'expérience montre que ces
// repères sont trop courts ou trop longs.
const MINUTES_PER_LESSON = 6;
const MINUTES_PER_QUIZ = 5;
const MINUTES_PER_GUIDED_EXERCISE = 15;
const MINUTES_PER_AUTONOMOUS_EXERCISE = 25;
const MINUTES_PER_CHALLENGE_EXERCISE = 25;

export function getSkillEstimatedMinutes(skillId: string): number {
  const lessonMinutes = getLessonsBySkill(skillId).length * MINUTES_PER_LESSON;
  const exerciseMinutes = getExercisesBySkill(skillId).reduce((sum, exercise) => {
    switch (exercise.type) {
      case "quiz":
        return sum + MINUTES_PER_QUIZ;
      case "guided":
        return sum + MINUTES_PER_GUIDED_EXERCISE;
      case "autonomous":
        return sum + MINUTES_PER_AUTONOMOUS_EXERCISE;
      case "challenge":
        return sum + MINUTES_PER_CHALLENGE_EXERCISE;
      default:
        return sum;
    }
  }, 0);
  return lessonMinutes + exerciseMinutes;
}

export function getModuleEstimatedMinutes(moduleId: string): number {
  return getSkillsByModule(moduleId).reduce(
    (sum, skill) => sum + getSkillEstimatedMinutes(skill.id),
    0,
  );
}

export function getDomainEstimatedMinutes(domainId: string): number {
  return getModulesByDomain(domainId).reduce(
    (sum, mod) => sum + getModuleEstimatedMinutes(mod.id),
    0,
  );
}

/** Arrondi à la demi-heure la plus proche : le détail par compétence reste
 * précis, mais un total affiché à la minute près donnerait une fausse
 * impression de précision sur ce qui n'est qu'une estimation. */
export function getTotalEstimatedMinutes(): number {
  const raw = skills.reduce((sum, skill) => sum + getSkillEstimatedMinutes(skill.id), 0);
  return Math.round(raw / 30) * 30;
}

/** Temps estimé des compétences déjà au niveau "Utilisation". Sert de base
 * pour dériver le temps restant à partir du total arrondi, plutôt que de
 * calculer les deux séparément (ce qui pourrait afficher un restant
 * supérieur au total à cause de l'arrondi). */
export function getCompletedEstimatedMinutes(levels: LevelMap): number {
  return skills
    .filter((skill) => getLevel(levels, skill.id) >= MASTERY_THRESHOLD)
    .reduce((sum, skill) => sum + getSkillEstimatedMinutes(skill.id), 0);
}

export function formatEstimatedMinutes(minutes: number): string {
  if (minutes <= 0) return "0 min";
  const hours = Math.floor(minutes / 60);
  const remainder = minutes % 60;
  if (hours === 0) return `${remainder} min`;
  if (remainder === 0) return `${hours} h`;
  return `${hours} h ${remainder}`;
}
