import type { Domain, Exercise, Lesson, Module, Project, Skill, ToolEntry } from "@/content/types";
import { fondationsIaDomain } from "@/content/domains/fondations-ia/domain";
import { fondationsIaModules } from "@/content/domains/fondations-ia/modules";
import { fondationsIaSkills } from "@/content/domains/fondations-ia/skills";
import { fondationsIaLessons } from "@/content/domains/fondations-ia/lessons";
import { fondationsIaExercises } from "@/content/domains/fondations-ia/exercises";
import { promptEngineeringDomain } from "@/content/domains/prompt-engineering/domain";
import { promptEngineeringModules } from "@/content/domains/prompt-engineering/modules";
import { promptEngineeringSkills } from "@/content/domains/prompt-engineering/skills";
import { promptEngineeringLessons } from "@/content/domains/prompt-engineering/lessons";
import { promptEngineeringExercises } from "@/content/domains/prompt-engineering/exercises";
import { contextEngineeringDomain } from "@/content/domains/context-engineering/domain";
import { contextEngineeringModules } from "@/content/domains/context-engineering/modules";
import { contextEngineeringSkills } from "@/content/domains/context-engineering/skills";
import { contextEngineeringLessons } from "@/content/domains/context-engineering/lessons";
import { contextEngineeringExercises } from "@/content/domains/context-engineering/exercises";
import { tools as toolEntries } from "@/content/tools";
import { projects as projectEntries } from "@/content/projects";

// Chaque nouveau domaine s'ajoute ici — une seule liste à étendre.
export const domains: Domain[] = [fondationsIaDomain, promptEngineeringDomain, contextEngineeringDomain];
export const modules: Module[] = [
  ...fondationsIaModules,
  ...promptEngineeringModules,
  ...contextEngineeringModules,
];
export const skills: Skill[] = [...fondationsIaSkills, ...promptEngineeringSkills, ...contextEngineeringSkills];
export const lessons: Lesson[] = [
  ...fondationsIaLessons,
  ...promptEngineeringLessons,
  ...contextEngineeringLessons,
];
export const exercises: Exercise[] = [
  ...fondationsIaExercises,
  ...promptEngineeringExercises,
  ...contextEngineeringExercises,
];
export const tools: ToolEntry[] = [...toolEntries];
export const projects: Project[] = [...projectEntries];

export const domainById = new Map(domains.map((d) => [d.id, d]));
export const moduleById = new Map(modules.map((m) => [m.id, m]));
export const skillById = new Map(skills.map((s) => [s.id, s]));
export const lessonById = new Map(lessons.map((l) => [l.id, l]));
export const exerciseById = new Map(exercises.map((e) => [e.id, e]));
export const toolById = new Map(tools.map((t) => [t.id, t]));
export const projectById = new Map(projects.map((p) => [p.id, p]));

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

export function getToolCategories(): string[] {
  return Array.from(new Set(tools.map((t) => t.category))).sort();
}
