import type { ValidationCriterion } from "@/content/types";

export interface CriterionResult {
  criterionId: string;
  met: boolean;
}

export function initialCriteriaState(
  criteria: ValidationCriterion[],
  criteriaResults: string | null,
): Record<string, boolean> {
  let previous: CriterionResult[] = [];
  if (criteriaResults) {
    try {
      previous = JSON.parse(criteriaResults) as CriterionResult[];
    } catch {
      previous = [];
    }
  }
  const byId = new Map(previous.map((p) => [p.criterionId, p.met]));
  const state: Record<string, boolean> = {};
  for (const criterion of criteria) {
    state[criterion.id] = byId.get(criterion.id) ?? false;
  }
  return state;
}
