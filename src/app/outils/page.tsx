import Link from "next/link";
import { tools, getToolCategories } from "@/content/registry";
import { prisma } from "@/lib/db";
import type { ToolEntry, ToolLevel, ToolPricing } from "@/content/types";
import { requireUserId } from "@/lib/current-user";
import { toggleToolFavoriteAction, saveToolNoteAction } from "./actions";

export const dynamic = "force-dynamic";

const LEVEL_LABELS: Record<ToolLevel, string> = {
  débutant: "Débutant",
  intermédiaire: "Intermédiaire",
  avancé: "Avancé",
};

const PRICING_LABELS: Record<ToolPricing, string> = {
  gratuit: "Gratuit",
  freemium: "Freemium",
  payant: "Payant",
};

export default async function OutilsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; categorie?: string }>;
}) {
  const { q, categorie } = await searchParams;
  const query = q?.trim() ?? "";
  const category = categorie ?? "";

  const userId = await requireUserId();
  const favorites = await prisma.toolFavorite.findMany({ where: { userId } });
  const favoriteByToolId = new Map(favorites.map((f) => [f.toolId, f]));

  const categories = getToolCategories();

  const filtered = tools.filter((tool) => {
    if (category && tool.category !== category) return false;
    if (query) {
      const needle = query.toLowerCase();
      return (
        tool.name.toLowerCase().includes(needle) ||
        tool.description.toLowerCase().includes(needle) ||
        tool.category.toLowerCase().includes(needle)
      );
    }
    return true;
  });

  return (
    <div className="flex flex-col gap-6">
      <header>
        <h1 className="text-2xl font-semibold">AI Toolbox</h1>
        <p className="mt-1 text-sm text-muted">
          Bibliothèque d&apos;outils IA de référence — cas d&apos;usage, niveau, limites,
          alternatives. Contenu amené à évoluer avec l&apos;écosystème.
        </p>
      </header>

      <form action="/outils" method="GET" className="flex flex-wrap gap-2">
        <input
          type="text"
          name="q"
          defaultValue={query}
          placeholder="Rechercher un outil..."
          className="flex-1 min-w-[200px] rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
        />
        <select
          name="categorie"
          defaultValue={category}
          className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none"
        >
          <option value="">Toutes les catégories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:opacity-90"
        >
          Filtrer
        </button>
        {(query || category) && (
          <Link
            href="/outils"
            className="rounded-md border border-border px-4 py-2 text-sm text-foreground hover:bg-surface-hover"
          >
            Réinitialiser
          </Link>
        )}
      </form>

      {filtered.length === 0 ? (
        <p className="text-sm text-muted">Aucun outil ne correspond à ces critères.</p>
      ) : (
        <ul className="flex flex-col gap-4">
          {filtered.map((tool) => (
            <ToolCard key={tool.id} tool={tool} favorite={favoriteByToolId.get(tool.id)} />
          ))}
        </ul>
      )}
    </div>
  );
}

function ToolCard({
  tool,
  favorite,
}: {
  tool: ToolEntry;
  favorite: { note: string | null } | undefined;
}) {
  const isFavorite = Boolean(favorite);

  return (
    <li id={tool.id} className="rounded-xl border border-border bg-surface p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-base font-semibold">{tool.name}</h2>
            <span className="rounded-full bg-surface-hover px-2 py-0.5 text-[10px] text-muted">
              {tool.category}
            </span>
          </div>
          <p className="mt-2 text-sm text-muted">{tool.description}</p>
        </div>
        <form action={toggleToolFavoriteAction.bind(null, tool.id)} className="shrink-0">
          <button
            type="submit"
            className={`rounded-md border px-3 py-1.5 text-xs font-medium transition-colors ${
              isFavorite
                ? "border-accent bg-accent/15 text-accent"
                : "border-border text-muted hover:bg-surface-hover"
            }`}
          >
            {isFavorite ? "★ Favori" : "☆ Ajouter aux favoris"}
          </button>
        </form>
      </div>

      <dl className="mt-4 grid grid-cols-2 gap-3 text-xs sm:grid-cols-4">
        <Info label="Niveau" value={LEVEL_LABELS[tool.level]} />
        <Info label="Tarif" value={PRICING_LABELS[tool.pricing]} />
        <Info label="Cas d'usage" value={tool.useCases.join(", ")} />
        <Info label="Alternatives" value={tool.alternatives.join(", ") || "—"} />
      </dl>

      <p className="mt-3 text-xs text-muted">
        <span className="font-medium text-foreground">Tarification : </span>
        {tool.pricingNote}
      </p>
      <p className="mt-1 text-xs text-muted">
        <span className="font-medium text-foreground">Limites : </span>
        {tool.limitations}
      </p>

      {isFavorite && (
        <form action={saveToolNoteAction.bind(null, tool.id)} className="mt-4 flex gap-2">
          <input
            type="text"
            name="note"
            defaultValue={favorite?.note ?? ""}
            placeholder="Ta note personnelle sur cet outil..."
            className="flex-1 rounded-md border border-border bg-background px-3 py-1.5 text-xs text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-md border border-border px-3 py-1.5 text-xs text-foreground hover:bg-surface-hover"
          >
            Enregistrer
          </button>
        </form>
      )}
    </li>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-muted">{label}</p>
      <p className="mt-0.5 text-foreground">{value}</p>
    </div>
  );
}
