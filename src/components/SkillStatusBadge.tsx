import type { SkillStatus } from "@/lib/progress";

const STYLES: Record<SkillStatus, { label: string; className: string }> = {
  locked: {
    label: "Verrouillé",
    className: "bg-border text-muted",
  },
  todo: {
    label: "À commencer",
    className: "bg-surface-hover text-foreground",
  },
  in_progress: {
    label: "En cours",
    className: "bg-warning/15 text-warning",
  },
  mastered: {
    label: "Maîtrisé",
    className: "bg-success/15 text-success",
  },
};

export function SkillStatusBadge({ status }: { status: SkillStatus }) {
  const style = STYLES[status];
  return (
    <span
      className={`rounded-full px-2.5 py-1 text-xs font-medium ${style.className}`}
    >
      {style.label}
    </span>
  );
}
