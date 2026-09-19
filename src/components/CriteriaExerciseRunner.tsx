"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import type { ValidationCriterion } from "@/content/types";
import { initialCriteriaState, type CriterionResult } from "@/lib/criteria";

const MIN_CONTENT_LENGTH = 30;

export function CriteriaExerciseRunner({
  criteria,
  initialContent,
  initialCriteriaResults,
  initialStatus,
  placeholder = "Décris ce que tu as fait et ce que tu as observé...",
  submitLabel = "Valider l'exercice",
  onSubmit,
}: {
  criteria: ValidationCriterion[];
  initialContent: string | null;
  initialCriteriaResults: string | null;
  initialStatus: string | null;
  placeholder?: string;
  submitLabel?: string;
  onSubmit: (content: string, criteria: CriterionResult[]) => Promise<{ status: string }>;
}) {
  const router = useRouter();
  const [content, setContent] = useState(initialContent ?? "");
  const [criteriaState, setCriteriaState] = useState<Record<string, boolean>>(() =>
    initialCriteriaState(criteria, initialCriteriaResults),
  );
  const [status, setStatus] = useState<string | null>(initialStatus);
  const [isPending, startTransition] = useTransition();

  const canSubmit = content.trim().length >= MIN_CONTENT_LENGTH;

  function handleSubmit() {
    startTransition(async () => {
      const payload: CriterionResult[] = criteria.map((c) => ({
        criterionId: c.id,
        met: criteriaState[c.id] ?? false,
      }));
      const res = await onSubmit(content, payload);
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
        placeholder={placeholder}
        className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
      />
      <div className="flex flex-col gap-2">
        <p className="text-xs font-medium uppercase tracking-wide text-muted">
          Grille d&apos;auto-évaluation
        </p>
        {criteria.map((criterion) => (
          <label key={criterion.id} className="flex items-start gap-2 text-sm text-foreground">
            <input
              type="checkbox"
              checked={criteriaState[criterion.id] ?? false}
              onChange={(e) =>
                setCriteriaState((prev) => ({ ...prev, [criterion.id]: e.target.checked }))
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
          {isPending ? "Enregistrement..." : submitLabel}
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
        ? "Validé — tous les critères sont remplis."
        : "Enregistré, mais tous les critères ne sont pas encore remplis."}
    </div>
  );
}
