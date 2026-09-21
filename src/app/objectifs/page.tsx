import Link from "next/link";
import { prisma } from "@/lib/db";
import { setObjectiveStatusAction } from "./actions";

export const dynamic = "force-dynamic";

const dateFormatter = new Intl.DateTimeFormat("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" });

const STATUS_LABELS: Record<string, string> = {
  active: "En cours",
  completed: "Atteint",
  abandoned: "Abandonné",
};

export default async function ObjectifsPage() {
  const objectives = await prisma.objective.findMany({ orderBy: { createdAt: "desc" } });

  const active = objectives
    .filter((o) => o.status === "active")
    .sort((a, b) => {
      if (!a.targetDate && !b.targetDate) return 0;
      if (!a.targetDate) return 1;
      if (!b.targetDate) return -1;
      return a.targetDate.getTime() - b.targetDate.getTime();
    });
  const others = objectives.filter((o) => o.status !== "active");

  return (
    <div className="flex flex-col gap-8">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Objectifs</h1>
          <p className="mt-1 text-sm text-muted">
            Ce que tu veux atteindre, avec une échéance si tu t&apos;en fixes une.
          </p>
        </div>
        <Link
          href="/objectifs/new"
          className="rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-accent-foreground hover:opacity-90"
        >
          + Nouvel objectif
        </Link>
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">En cours</h2>
        {active.length === 0 ? (
          <div className="rounded-lg border border-dashed border-border px-4 py-6 text-center text-sm text-muted">
            Aucun objectif en cours pour le moment.
          </div>
        ) : (
          <ul className="flex flex-col gap-2">
            {active.map((objective) => (
              <li
                key={objective.id}
                className="flex items-start justify-between gap-3 rounded-lg border border-border bg-surface px-4 py-3"
              >
                <Link href={`/objectifs/${objective.id}`} className="flex-1">
                  <p className="text-sm font-medium">{objective.title}</p>
                  {objective.description && (
                    <p className="mt-1 line-clamp-2 text-xs text-muted">{objective.description}</p>
                  )}
                  {objective.targetDate && (
                    <p className="mt-1 text-xs text-accent">
                      Échéance : {dateFormatter.format(objective.targetDate)}
                    </p>
                  )}
                </Link>
                <form action={setObjectiveStatusAction.bind(null, objective.id, "completed")}>
                  <button
                    type="submit"
                    className="shrink-0 rounded-md border border-border px-2.5 py-1 text-xs text-muted hover:border-success hover:text-success"
                  >
                    ✓ Marquer atteint
                  </button>
                </form>
              </li>
            ))}
          </ul>
        )}
      </section>

      {others.length > 0 && (
        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">Historique</h2>
          <ul className="flex flex-col gap-2">
            {others.map((objective) => (
              <li key={objective.id}>
                <Link
                  href={`/objectifs/${objective.id}`}
                  className="flex items-center justify-between gap-3 rounded-lg border border-border px-4 py-3 opacity-70 transition-opacity hover:opacity-100"
                >
                  <span className="text-sm">{objective.title}</span>
                  <span className="shrink-0 text-xs text-muted">
                    {STATUS_LABELS[objective.status] ?? objective.status}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
