"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import type { GuidedExercise } from "@/content/types";
import { submitGuidedExerciseAction, type GuidedStepResult } from "@/app/formation/[skillId]/actions";
import { useElapsedSeconds } from "@/lib/use-elapsed-seconds";

interface StepState {
  answer: string;
  revealed: boolean;
  selfAssessedCorrect: boolean | null;
}

function initialStateFromContent(
  exercise: GuidedExercise,
  content: string | null,
): Record<string, StepState> {
  let previous: GuidedStepResult[] = [];
  if (content) {
    try {
      previous = JSON.parse(content) as GuidedStepResult[];
    } catch {
      previous = [];
    }
  }
  const byId = new Map(previous.map((p) => [p.stepId, p]));
  const state: Record<string, StepState> = {};
  for (const step of exercise.steps) {
    const prev = byId.get(step.id);
    state[step.id] = {
      answer: prev?.answer ?? "",
      revealed: Boolean(prev),
      selfAssessedCorrect: prev?.selfAssessedCorrect ?? null,
    };
  }
  return state;
}

export function GuidedExerciseRunner({
  skillId,
  exercise,
  initialContent,
  initialStatus,
}: {
  skillId: string;
  exercise: GuidedExercise;
  initialContent: string | null;
  initialStatus: string | null;
}) {
  const router = useRouter();
  const [steps, setSteps] = useState<Record<string, StepState>>(() =>
    initialStateFromContent(exercise, initialContent),
  );
  const [status, setStatus] = useState<string | null>(initialStatus);
  const [isPending, startTransition] = useTransition();
  const getElapsedSeconds = useElapsedSeconds();

  const allAssessed = exercise.steps.every((s) => steps[s.id]?.selfAssessedCorrect !== null);

  function updateStep(stepId: string, patch: Partial<StepState>) {
    setSteps((prev) => ({ ...prev, [stepId]: { ...prev[stepId], ...patch } }));
  }

  function handleSubmit() {
    startTransition(async () => {
      const payload: GuidedStepResult[] = exercise.steps.map((s) => ({
        stepId: s.id,
        answer: steps[s.id]?.answer ?? "",
        selfAssessedCorrect: steps[s.id]?.selfAssessedCorrect ?? false,
      }));
      const res = await submitGuidedExerciseAction(skillId, exercise.id, payload, getElapsedSeconds());
      setStatus(res.status);
      router.refresh();
    });
  }

  return (
    <div className="mt-3 flex flex-col gap-5">
      {status && <StatusBanner status={status} />}
      {exercise.steps.map((step, index) => {
        const state = steps[step.id];
        return (
          <div key={step.id} className="flex flex-col gap-2">
            <p className="text-sm text-foreground">
              {index + 1}. {step.prompt}
            </p>
            <textarea
              value={state.answer}
              onChange={(e) => updateStep(step.id, { answer: e.target.value })}
              rows={2}
              placeholder="Ta réponse..."
              className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
            />
            {!state.revealed ? (
              <div>
                <button
                  onClick={() => updateStep(step.id, { revealed: true })}
                  className="text-xs text-accent hover:underline"
                >
                  Voir la réponse de référence
                </button>
              </div>
            ) : (
              <div className="rounded-md bg-surface-hover px-3 py-2 text-xs text-muted">
                <span className="font-medium text-foreground">Réponse de référence : </span>
                {step.expectedAnswer}
              </div>
            )}
            {state.revealed && (
              <div className="flex gap-4 text-sm">
                <label className="flex items-center gap-1.5">
                  <input
                    type="radio"
                    name={`assess-${step.id}`}
                    checked={state.selfAssessedCorrect === true}
                    onChange={() => updateStep(step.id, { selfAssessedCorrect: true })}
                    className="accent-accent"
                  />
                  Ma réponse correspond
                </label>
                <label className="flex items-center gap-1.5">
                  <input
                    type="radio"
                    name={`assess-${step.id}`}
                    checked={state.selfAssessedCorrect === false}
                    onChange={() => updateStep(step.id, { selfAssessedCorrect: false })}
                    className="accent-accent"
                  />
                  À retravailler
                </label>
              </div>
            )}
          </div>
        );
      })}
      <div>
        <button
          onClick={handleSubmit}
          disabled={!allAssessed || isPending}
          className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {isPending ? "Enregistrement..." : "Valider l'exercice"}
        </button>
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
        ? "Exercice validé — toutes les étapes sont maîtrisées."
        : "Exercice enregistré, mais au moins une étape est à retravailler."}
    </div>
  );
}
