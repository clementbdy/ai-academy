import Link from "next/link";
import { prisma } from "@/lib/db";
import { parseStringArray } from "@/lib/json-fields";

export const dynamic = "force-dynamic";

const dateFormatter = new Intl.DateTimeFormat("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" });

export default async function LabPage() {
  const [prompts, workflows] = await Promise.all([
    prisma.savedPrompt.findMany({ orderBy: { updatedAt: "desc" } }),
    prisma.workflow.findMany({ orderBy: { updatedAt: "desc" } }),
  ]);

  return (
    <div className="flex flex-col gap-10">
      <header>
        <h1 className="text-2xl font-semibold">AI Lab</h1>
        <p className="mt-1 text-sm text-muted">
          Ton carnet d&apos;expérimentation : sauvegarde les prompts que tu testes ailleurs, note
          ce que tu observes, et garde une trace des workflows que tu construis.
        </p>
      </header>

      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
            Prompts sauvegardés
          </h2>
          <Link
            href="/lab/prompts/new"
            className="rounded-md bg-accent px-3 py-1.5 text-xs font-medium text-accent-foreground hover:opacity-90"
          >
            + Nouveau prompt
          </Link>
        </div>
        {prompts.length === 0 ? (
          <EmptyState label="Aucun prompt sauvegardé pour le moment." />
        ) : (
          <ul className="flex flex-col gap-2">
            {prompts.map((prompt) => {
              const tags = parseStringArray(prompt.tags);
              return (
                <li key={prompt.id}>
                  <Link
                    href={`/lab/prompts/${prompt.id}`}
                    className="flex flex-col gap-1 rounded-lg border border-border bg-surface px-4 py-3 transition-colors hover:bg-surface-hover"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm font-medium">{prompt.title}</span>
                      <span className="shrink-0 text-xs text-muted">
                        {dateFormatter.format(prompt.updatedAt)}
                      </span>
                    </div>
                    <p className="line-clamp-2 text-xs text-muted">{prompt.prompt}</p>
                    {tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-surface-hover px-2 py-0.5 text-[10px] text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">Workflows</h2>
          <Link
            href="/lab/workflows/new"
            className="rounded-md bg-accent px-3 py-1.5 text-xs font-medium text-accent-foreground hover:opacity-90"
          >
            + Nouveau workflow
          </Link>
        </div>
        {workflows.length === 0 ? (
          <EmptyState label="Aucun workflow sauvegardé pour le moment." />
        ) : (
          <ul className="flex flex-col gap-2">
            {workflows.map((workflow) => {
              const steps = parseStringArray(workflow.steps);
              return (
                <li key={workflow.id}>
                  <Link
                    href={`/lab/workflows/${workflow.id}`}
                    className="flex flex-col gap-1 rounded-lg border border-border bg-surface px-4 py-3 transition-colors hover:bg-surface-hover"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm font-medium">{workflow.title}</span>
                      <span className="shrink-0 text-xs text-muted">
                        {steps.length} étape(s)
                      </span>
                    </div>
                    {workflow.description && (
                      <p className="line-clamp-2 text-xs text-muted">{workflow.description}</p>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
}

function EmptyState({ label }: { label: string }) {
  return (
    <div className="rounded-lg border border-dashed border-border px-4 py-6 text-center text-sm text-muted">
      {label}
    </div>
  );
}
