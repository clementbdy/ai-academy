import type { DomainBundle, Domain, Exercise, Lesson, Module, Project, Skill, ToolEntry } from "@/content/types";
import { fondationsIaBundle } from "@/content/domains/fondations-ia";
import { promptEngineeringBundle } from "@/content/domains/prompt-engineering";
import { contextEngineeringBundle } from "@/content/domains/context-engineering";
import { assistantsIaBundle } from "@/content/domains/assistants-ia";
import { automatisationBundle } from "@/content/domains/automatisation";
import { tools as toolEntries } from "@/content/tools";
import { projects as projectEntries } from "@/content/projects";

// Chaque nouveau domaine s'ajoute ici — une seule ligne à ajouter.
const domainBundles: DomainBundle[] = [
  fondationsIaBundle,
  promptEngineeringBundle,
  contextEngineeringBundle,
  assistantsIaBundle,
  automatisationBundle,
];

export const domains: Domain[] = domainBundles.map((b) => b.domain);
export const modules: Module[] = domainBundles.flatMap((b) => b.modules);
export const skills: Skill[] = domainBundles.flatMap((b) => b.skills);
export const lessons: Lesson[] = domainBundles.flatMap((b) => b.lessons);
export const exercises: Exercise[] = domainBundles.flatMap((b) => b.exercises);
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
