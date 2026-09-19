"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import type { AutonomousExercise, ChallengeExercise } from "@/content/types";
import {
  submitCriteriaExerciseAction,
  type CriterionResult,
} from "@/app/formation/[skillId]/actions";

const MIN_CONTENT_LENGTH = 30;

function initialCriteriaFromJson(
  exercise: AutonomousExercise | ChallengeExercise,
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
  for (const criterion of exercise.criteria) {
    state[criterion.id] = byId.get(criterion.id) ?? false;
  }
  return state;
}

export function CriteriaExerciseRunner({
  skillId,
  exercise,
  initialContent,
  initialCriteriaResults,
  initialStatus,
}: {
  skillId: string;
  exercise: AutonomousExercise | ChallengeExercise;
  initialContent: string | null;
  initialCriteriaResults: string | null;
  initialStatus: string | null;
}) {
  const router = useRouter();
  const [content, setContent] = useState(initialContent ?? "");
  const [criteria, setCriteria] = useState<Record<string, boolean>>(() =>
    initialCriteriaFromJson(exercise, initialCriteriaResults),
  );
  const [status, setStatus] = useState<string | null>(initialStatus);
  const [isPending, startTransition] = useTransition();

  const canSubmit = content.trim().length >= MIN_CONTENT_LENGTH;

  function handleSubmit() {
    startTransition(async () => {
      const payload: CriterionResult[] = exercise.criteria.map((c) => ({
        criterionId: c.id,
        met: criteria[c.id] ?? false,
      }));
      const res = await submitCriteriaExerciseAction(skillId, exercise.id, content, payload);
      setStatus(res.status);
      router.refresh();
    });
  }

  return (
    <div className="mt-3 flex flex-col gap-4">
      {status && <StatusBanner status={status} />}
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={5}
        placeholder="Décris ce que tu as fait et ce que tu as observé..."
        className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
      />
      <div className="flex flex-col gap-2">
        <p className="text-xs font-medium uppercase tracking-wide text-muted">
          Grille d&apos;auto-évaluation
        </p>
        {exercise.criteria.map((criterion) => (
          <label key={criterion.id} className="flex items-start gap-2 text-sm text-foreground">
            <input
              type="checkbox"
              checked={criteria[criterion.id] ?? false}
              onChange={(e) =>
                setCriteria((prev) => ({ ...prev, [criterion.id]: e.target.checked }))
              }
              className="mt-0.5 accent-accent"
            />
            {criterion.description}
          </label>
        ))}
      </div>
      <div>
        <button
          onClick={handleSubmit}
          disabled={!canSubmit || isPending}
          className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {isPending ? "Enregistrement..." : "Valider l'exercice"}
        </button>
        {!canSubmit && (
          <p className="mt-1 text-xs text-muted">
            Décris ta démarche en au moins {MIN_CONTENT_LENGTH} caractères avant de valider.
          </p>
        )}
      </div>
    </div>
  );
}

function StatusBanner({ status }: { status: string }) {
  const validated = status === "validated";
  return (
    <div
      className={`rounded-lg px-4 py-3 text-sm ${
        validated ? "bg-success/15 text-success" : "bg-warning/15 text-warning"
      }`}
    >
      {validated
        ? "Exercice validé — tous les critères sont remplis."
        : "Exercice enregistré, mais tous les critères ne sont pas encore remplis."}
    </div>
  );
}
