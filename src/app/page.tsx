import Link from "next/link";
import { prisma } from "@/lib/db";
import { getLevelMap } from "@/lib/skill-progress";
import { getGlobalStats, getNextRecommendedSkill } from "@/lib/progress";
import { isProjectUnlocked } from "@/lib/project-progress";
import { moduleById, domainById, projects } from "@/content/registry";
import { ProgressBar } from "@/components/ProgressBar";

// Cette page lit la progression en base à chaque visite : elle ne doit pas
// être figée dans le shell statique généré au build.
export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const [levels, promptCount, favoriteToolCount, noteCount, projectSubmissions] = await Promise.all([
    getLevelMap(),
    prisma.savedPrompt.count(),
    prisma.toolFavorite.count(),
    prisma.note.count(),
    prisma.projectSubmission.findMany(),
  ]);
  const stats = getGlobalStats(levels);
  const nextSkill = getNextRecommendedSkill(levels);
  const nextModule = nextSkill ? moduleById.get(nextSkill.moduleId) : undefined;
  const nextDomain = nextModule ? domainById.get(nextModule.domainId) : undefined;
  const masteredPct =
    stats.totalSkills === 0 ? 0 : Math.round((stats.masteredSkills / stats.totalSkills) * 100);

  const validatedProjectIds = new Set(
    projectSubmissions.filter((s) => s.status === "validated").map((s) => s.projectId),
  );
  const nextProject = nextSkill
    ? undefined
    : projects.find((p) => isProjectUnlocked(p, levels) && !validatedProjectIds.has(p.id));

  return (
    <div className="flex flex-col gap-10">
      <header>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="mt-1 text-sm text-muted">
          Ton point de départ à chaque visite : où tu en es, et ce qui vient ensuite.
        </p>
      </header>

      <section className="rounded-xl border border-border bg-surface p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-accent">
          Que dois-je apprendre maintenant ?
        </p>
        {nextSkill ? (
          <div className="mt-3 flex flex-col gap-3">
            {nextDomain && nextModule && (
              <p className="text-xs text-muted">
                {nextDomain.title} · {nextModule.title}
              </p>
            )}
            <h2 className="text-xl font-medium">{nextSkill.title}</h2>
            <p className="text-sm text-muted">{nextSkill.description}</p>
            <div>
              <Link
                href={`/formation/${nextSkill.id}`}
                className="inline-flex items-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                Commencer cette compétence
              </Link>
            </div>
          </div>
        ) : nextProject ? (
          <div className="mt-3 flex flex-col gap-3">
            <p className="text-xs text-muted">Projet — {nextProject.difficulty}</p>
            <h2 className="text-xl font-medium">{nextProject.title}</h2>
            <p className="text-sm text-muted">{nextProject.description}</p>
            <div>
              <Link
                href={`/projets/${nextProject.id}`}
                className="inline-flex items-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                Faire ce projet
              </Link>
            </div>
          </div>
        ) : (
          <p className="mt-3 text-sm text-muted">
            Toutes les compétences et projets actuellement disponibles sont validés. De nouveaux
            domaines arriveront au fil des prochaines phases.
          </p>
        )}
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard label="Compétences maîtrisées" value={`${stats.masteredSkills} / ${stats.totalSkills}`} />
        <StatCard label="En cours" value={String(stats.inProgressSkills)} />
        <StatCard label="Verrouillées" value={String(stats.lockedSkills)} />
      </section>

      <section className="rounded-xl border border-border bg-surface p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium">Progression sur le contenu disponible</h2>
          <span className="text-sm text-muted">{masteredPct}%</span>
        </div>
        <div className="mt-3">
          <ProgressBar value={masteredPct} />
        </div>
        <p className="mt-3 text-xs text-muted">
          Basé uniquement sur les compétences déjà publiées dans la formation ({stats.totalSkills} à ce
          stade). D&apos;autres domaines viendront enrichir ce total.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
          Outils & ressources
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <QuickLinkCard href="/lab" label="Prompts sauvegardés" value={String(promptCount)} />
          <QuickLinkCard href="/outils" label="Outils favoris" value={String(favoriteToolCount)} />
          <QuickLinkCard href="/notes" label="Notes" value={String(noteCount)} />
        </div>
      </section>

      <div>
        <Link href="/formation" className="text-sm font-medium text-accent hover:underline">
          Parcourir la formation →
        </Link>
      </div>
    </div>
  );
}

function QuickLinkCard({ href, label, value }: { href: string; label: string; value: string }) {
  return (
    <Link
      href={href}
      className="rounded-xl border border-border bg-surface p-5 transition-colors hover:bg-surface-hover"
    >
      <p className="text-xs text-muted">{label}</p>
      <p className="mt-2 text-2xl font-semibold">{value}</p>
    </Link>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-5">
      <p className="text-xs text-muted">{label}</p>
      <p className="mt-2 text-2xl font-semibold">{value}</p>
    </div>
  );
}
