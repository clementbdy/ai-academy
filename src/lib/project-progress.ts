import type { Project } from "@/content/types";
import { getLevel, MASTERY_THRESHOLD, type LevelMap } from "@/lib/progress";

export function isProjectUnlocked(project: Project, levels: LevelMap): boolean {
  return project.requiredSkillIds.every(
    (skillId) => getLevel(levels, skillId) >= MASTERY_THRESHOLD,
  );
}
