export type ProjectStatus = "locked" | "todo" | "needs_revision" | "validated";

const STYLES: Record<ProjectStatus, { label: string; className: string }> = {
  locked: { label: "Verrouillé", className: "bg-border text-muted" },
  todo: { label: "À commencer", className: "bg-surface-hover text-foreground" },
  needs_revision: { label: "À retravailler", className: "bg-warning/15 text-warning" },
  validated: { label: "Validé", className: "bg-success/15 text-success" },
};

export function ProjectStatusBadge({ status }: { status: ProjectStatus }) {
  const style = STYLES[status];
  return (
    <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${style.className}`}>
      {style.label}
    </span>
  );
}
