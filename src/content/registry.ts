import type { Domain, Exercise, Lesson, Module, Skill } from "@/content/types";
import { fondationsIaDomain } from "@/content/domains/fondations-ia/domain";
import { fondationsIaModules } from "@/content/domains/fondations-ia/modules";
import { fondationsIaSkills } from "@/content/domains/fondations-ia/skills";
import { fondationsIaLessons } from "@/content/domains/fondations-ia/lessons";
import { fondationsIaExercises } from "@/content/domains/fondations-ia/exercises";

// Chaque nouveau domaine s'ajoute ici — une seule liste à étendre.
export const domains: Domain[] = [fondationsIaDomain];
export const modules: Module[] = [...fondationsIaModules];
export const skills: Skill[] = [...fondationsIaSkills];
export const lessons: Lesson[] = [...fondationsIaLessons];
export const exercises: Exercise[] = [...fondationsIaExercises];

export const domainById = new Map(domains.map((d) => [d.id, d]));
export const moduleById = new Map(modules.map((m) => [m.id, m]));
export const skillById = new Map(skills.map((s) => [s.id, s]));
export const lessonById = new Map(lessons.map((l) => [l.id, l]));
export const exerciseById = new Map(exercises.map((e) => [e.id, e]));

export function getModulesByDomain(domainId: string): Module[] {
  return modules.filter((m) => m.domainId === domainId);
}

export function getSkillsByModule(moduleId: string): Skill[] {
  return skills.filter((s) => s.moduleId === moduleId);
}

export function getLessonsBySkill(skillId: string): Lesson[] {
  return lessons.filter((l) => l.skillId === skillId);
}

export function getExercisesBySkill(skillId: string): Exercise[] {
  return exercises.filter((e) => e.skillId === skillId);
}
