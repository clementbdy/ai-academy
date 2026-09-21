"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { markLessonReadAction } from "@/app/formation/[skillId]/actions";
import { useElapsedSeconds } from "@/lib/use-elapsed-seconds";

export function MarkLessonReadButton({ skillId, lessonId }: { skillId: string; lessonId: string }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const getElapsedSeconds = useElapsedSeconds();

  function handleClick() {
    startTransition(async () => {
      await markLessonReadAction(skillId, lessonId, getElapsedSeconds());
      router.refresh();
    });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isPending}
      className="shrink-0 rounded-md border border-border px-3 py-1.5 text-xs text-foreground hover:bg-surface-hover disabled:cursor-not-allowed disabled:opacity-60"
    >
      {isPending ? "Enregistrement..." : "Marquer comme lue"}
    </button>
  );
}
