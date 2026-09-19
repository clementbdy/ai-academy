"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import type { QuizExercise } from "@/content/types";
import { submitQuizAction, type QuizResult } from "@/app/formation/[skillId]/actions";
import type { QuizBestResult } from "@/lib/skill-progress";

export function QuizRunner({
  skillId,
  exercise,
  initialBest,
}: {
  skillId: string;
  exercise: QuizExercise;
  initialBest?: QuizBestResult;
}) {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<QuizResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const allAnswered = exercise.questions.every((q) => answers[q.id] !== undefined);

  function handleSubmit() {
    setError(null);
    startTransition(async () => {
      try {
        const res = await submitQuizAction(skillId, exercise.id, answers);
        setResult(res);
        router.refresh();
      } catch {
        setError("Une erreur est survenue, réessaie.");
      }
    });
  }

  function handleRetry() {
    setAnswers({});
    setResult(null);
  }

  if (result) {
    return (
      <div className="mt-3 flex flex-col gap-3">
        <div
          className={`rounded-lg px-4 py-3 text-sm ${
            result.passed ? "bg-success/15 text-success" : "bg-danger/15 text-danger"
          }`}
        >
          {result.passed
            ? `Réussi — ${result.correctCount}/${result.total} bonnes réponses (${result.score}%).`
            : `Pas encore — ${result.correctCount}/${result.total} bonnes réponses (${result.score}%). Seuil requis : ${exercise.passingScore}%.`}
        </div>
        <ul className="flex flex-col gap-2">
          {exercise.questions.map((q) => (
            <li key={q.id} className="text-sm">
              <span
                className={
                  result.correctByQuestion[q.id] ? "text-success" : "text-danger"
                }
              >
                {result.correctByQuestion[q.id] ? "✓" : "✗"}
              </span>{" "}
              <span className="text-muted">{q.question}</span>
              {!result.correctByQuestion[q.id] && (
                <span className="ml-1 text-muted">
                  — bonne réponse : {q.options[q.correctOptionIndex]}
                </span>
              )}
            </li>
          ))}
        </ul>
        <div>
          <button
            onClick={handleRetry}
            className="rounded-md border border-border px-3 py-1.5 text-sm text-foreground hover:bg-surface-hover"
          >
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-3 flex flex-col gap-4">
      {initialBest && (
        <p className="text-xs text-muted">
          Meilleur essai précédent : {initialBest.score}%
          {initialBest.passed ? " (réussi)" : " (pas encore réussi)"}.
        </p>
      )}
      {exercise.questions.map((q) => (
        <fieldset key={q.id} className="flex flex-col gap-2">
          <legend className="text-sm text-foreground">{q.question}</legend>
          {q.options.map((option, index) => (
            <label
              key={index}
              className="flex items-center gap-2 text-sm text-muted hover:text-foreground"
            >
              <input
                type="radio"
                name={q.id}
                checked={answers[q.id] === index}
                onChange={() => setAnswers((prev) => ({ ...prev, [q.id]: index }))}
                className="accent-accent"
              />
              {option}
            </label>
          ))}
        </fieldset>
      ))}
      {error && <p className="text-sm text-danger">{error}</p>}
      <div>
        <button
          onClick={handleSubmit}
          disabled={!allAnswered || isPending}
          className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {isPending ? "Correction..." : "Valider le quiz"}
        </button>
      </div>
    </div>
  );
}
