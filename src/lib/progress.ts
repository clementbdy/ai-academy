import { skills, domains, getModulesByDomain, getSkillsByModule } from "@/content/registry";
import type { Skill } from "@/content/types";

export type LevelMap = Record<string, number>;

export type SkillStatus = "locked" | "todo" | "in_progress" | "mastered";

export const MASTERY_THRESHOLD = 3; // niveau "Utilisation" requis pour débloquer la suite
export const MASTERED_THRESHOLD = 4; // niveau "Maîtrise" affiché comme acquis

export function getLevel(levels: LevelMap, skillId: string): number {
  return levels[skillId] ?? 0;
}

export function isSkillUnlocked(skill: Skill, levels: LevelMap): boolean {
  return skill.prerequisites.every(
    (prereqId) => getLevel(levels, prereqId) >= MASTERY_THRESHOLD,
  );
}

export function getSkillStatus(skill: Skill, levels: LevelMap): SkillStatus {
  if (!isSkillUnlocked(skill, levels)) return "locked";
  const level = getLevel(levels, skill.id);
  if (level >= MASTERED_THRESHOLD) return "mastered";
  if (level >= 1) return "in_progress";
  return "todo";
}

/**
 * Parcourt les compétences dans l'ordre du contenu (domaine -> module -> skill)
 * et renvoie la première compétence débloquée non encore maîtrisée.
 */
export function getNextRecommendedSkill(levels: LevelMap): Skill | null {
  for (const domain of domains) {
    for (const mod of getModulesByDomain(domain.id)) {
      for (const skill of getSkillsByModule(mod.id)) {
        const status = getSkillStatus(skill, levels);
        if (status === "todo" || status === "in_progress") {
          return skill;
        }
      }
    }
  }
  return null;
}

export interface GlobalStats {
  totalSkills: number;
  masteredSkills: number;
  inProgressSkills: number;
  lockedSkills: number;
}

export function getGlobalStats(levels: LevelMap): GlobalStats {
  let masteredSkills = 0;
  let inProgressSkills = 0;
  let lockedSkills = 0;

  for (const skill of skills) {
    const status = getSkillStatus(skill, levels);
    if (status === "mastered") masteredSkills++;
    else if (status === "in_progress") inProgressSkills++;
    else if (status === "locked") lockedSkills++;
  }

  return {
    totalSkills: skills.length,
    masteredSkills,
    inProgressSkills,
    lockedSkills,
  };
}
