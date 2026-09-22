import Link from "next/link";
import { prisma } from "@/lib/db";
import { parseStringArray } from "@/lib/json-fields";
import { globalSearch, TYPE_LABELS } from "@/lib/global-search";
import { skillById } from "@/content/registry";
import { requireUserId } from "@/lib/current-user";

export const dynamic = "force-dynamic";

const dateFormatter = new Intl.DateTimeFormat("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" });

export default async function NotesPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";
  const userId = await requireUserId();

  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="text-2xl font-semibold">Notes</h1>
        <p className="mt-1 text-sm text-muted">
          Ta base de connaissances : notes, prompts, workflows, outils, compétences et objectifs,
          en une seule recherche.
        </p>
      </header>

      <form action="/notes" method="GET" className="flex gap-2">
        <input
          type="text"
          name="q"
          defaultValue={query}
          placeholder="Rechercher dans tout ce que tu as sauvegardé..."
          className="flex-1 rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:opacity-90"
        >
          Rechercher
        </button>
        {query && (
          <Link
            href="/notes"
            className="rounded-md border border-border px-4 py-2 text-sm text-foreground hover:bg-surface-hover"
          >
            Effacer
          </Link>
        )}
      </form>

      {query ? <SearchResults userId={userId} query={query} /> : <NotesList userId={userId} />}
    </div>
  );
}

async function SearchResults({ userId, query }: { userId: string; query: string }) {
  const results = await globalSearch(userId, query);

  if (results.length === 0) {
    return <p className="text-sm text-muted">Aucun résultat pour « {query} ».</p>;
  }

  return (
    <ul className="flex flex-col gap-2">
      {results.map((result, index) => (
        <li key={`${result.type}-${index}`}>
          <Link
            href={result.href}
            className="flex flex-col gap-1 rounded-lg border border-border bg-surface px-4 py-3 transition-colors hover:bg-surface-hover"
          >
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-surface-hover px-2 py-0.5 text-[10px] uppercase tracking-wide text-muted">
                {TYPE_LABELS[result.type]}
              </span>
              <span className="text-sm font-medium">{result.title}</span>
            </div>
            {result.snippet && <p className="text-xs text-muted">{result.snippet}</p>}
          </Link>
        </li>
      ))}
    </ul>
  );
}

async function NotesList({ userId }: { userId: string }) {
  const notes = await prisma.note.findMany({ where: { userId }, orderBy: { updatedAt: "desc" } });

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">Mes notes</h2>
        <Link
          href="/notes/new"
          className="rounded-md bg-accent px-3 py-1.5 text-xs font-medium text-accent-foreground hover:opacity-90"
        >
          + Nouvelle note
        </Link>
      </div>
      {notes.length === 0 ? (
        <div className="rounded-lg border border-dashed border-border px-4 py-6 text-center text-sm text-muted">
          Aucune note pour le moment.
        </div>
      ) : (
        <ul className="flex flex-col gap-2">
          {notes.map((note) => {
            const tags = parseStringArray(note.tags);
            const skill = note.skillId ? skillById.get(note.skillId) : undefined;
            return (
              <li key={note.id}>
                <Link
                  href={`/notes/${note.id}`}
                  className="flex flex-col gap-1 rounded-lg border border-border bg-surface px-4 py-3 transition-colors hover:bg-surface-hover"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-medium">{note.title}</span>
                    <span className="shrink-0 text-xs text-muted">
                      {dateFormatter.format(note.updatedAt)}
                    </span>
                  </div>
                  <p className="line-clamp-2 text-xs text-muted">{note.content}</p>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {skill && (
                      <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] text-accent">
                        {skill.title}
                      </span>
                    )}
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-surface-hover px-2 py-0.5 text-[10px] text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
