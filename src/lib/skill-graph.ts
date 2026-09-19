import { skills, skillById } from "@/content/registry";
import type { Skill } from "@/content/types";

export interface SkillNode {
  skill: Skill;
  column: number;
  row: number;
}

export interface SkillEdge {
  from: string;
  to: string;
}

/**
 * Place chaque compétence dans une colonne = 1 + la colonne la plus profonde
 * de ses prérequis (0 si aucun) : la carte se lit naturellement de gauche à
 * droite dans le sens de progression. Les compétences d'une même colonne
 * sont empilées dans l'ordre du contenu (domaine -> module -> compétence).
 *
 * L'absence de cycle est garantie par le validateur de contenu
 * (src/content/validate.ts, `npm run validate:content`) ; on se contente
 * ici de détecter un cycle inattendu plutôt que de boucler à l'infini.
 */
export function buildSkillGraph(): { nodes: SkillNode[]; edges: SkillEdge[] } {
  const columnCache = new Map<string, number>();
  const visiting = new Set<string>();

  function computeColumn(skillId: string): number {
    const cached = columnCache.get(skillId);
    if (cached !== undefined) return cached;
    if (visiting.has(skillId)) {
      throw new Error(`Cycle de prérequis détecté en construisant la carte : ${skillId}`);
    }
    visiting.add(skillId);

    const skill = skillById.get(skillId);
    const column =
      !skill || skill.prerequisites.length === 0
        ? 0
        : 1 + Math.max(...skill.prerequisites.map(computeColumn));

    visiting.delete(skillId);
    columnCache.set(skillId, column);
    return column;
  }

  const rowCountByColumn = new Map<number, number>();
  const nodes: SkillNode[] = skills.map((skill) => {
    const column = computeColumn(skill.id);
    const row = rowCountByColumn.get(column) ?? 0;
    rowCountByColumn.set(column, row + 1);
    return { skill, column, row };
  });

  const edges: SkillEdge[] = skills.flatMap((skill) =>
    skill.prerequisites.map((prereqId) => ({ from: prereqId, to: skill.id })),
  );

  return { nodes, edges };
}
