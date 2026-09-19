import {
  domains,
  getModulesByDomain,
  getSkillsByModule,
} from "@/content/registry";
import { getLevelMap } from "@/lib/skill-progress";
import { getActivityCount, getRecentActivityFeed } from "@/lib/activity-feed";
import { getGlobalStats, getLevel, getSkillStatus } from "@/lib/progress";
import { ProgressBar } from "@/components/ProgressBar";
import { SkillStatusBadge } from "@/components/SkillStatusBadge";

export const dynamic = "force-dynamic";

const dateFormatter = new Intl.DateTimeFormat("fr-FR", {
  day: "2-digit",
  month: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
});

export default async function ProgressionPage() {
  const [levels, activityCount, feed] = await Promise.all([
    getLevelMap(),
    getActivityCount(),
    getRecentActivityFeed(15),
  ]);
  const stats = getGlobalStats(levels);

  return (
    <div className="flex flex-col gap-10">
      <header>
        <h1 className="text-2xl font-semibold">Progression</h1>
        <p className="mt-1 text-sm text-muted">
          Le détail de ta progression, compétence par compétence, et ton historique d&apos;activité.
        </p>
      </header>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard label="Compétences maîtrisées" value={`${stats.masteredSkills} / ${stats.totalSkills}`} />
        <StatCard label="En cours" value={String(stats.inProgressSkills)} />
        <StatCard label="Activités enregistrées" value={String(activityCount)} />
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
          Progression par compétence
        </h2>
        {domains.map((domain) => (
          <div key={domain.id} className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold">{domain.title}</h3>
            {getModulesByDomain(domain.id).map((mod) => (
              <div key={mod.id} className="rounded-xl border border-border bg-surface p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-muted">
                  {mod.title}
                </p>
                <ul className="mt-3 flex flex-col gap-3">
                  {getSkillsByModule(mod.id).map((skill) => {
                    const level = getLevel(levels, skill.id);
                    const status = getSkillStatus(skill, levels);
                    return (
                      <li key={skill.id} className="flex flex-col gap-1.5">
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-sm text-foreground">{skill.title}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-muted">{level}/5</span>
                            <SkillStatusBadge status={status} />
                          </div>
                        </div>
                        <ProgressBar value={(level / 5) * 100} />
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
          Historique récent
        </h2>
        {feed.length === 0 ? (
          <p className="text-sm text-muted">
            Aucune activité enregistrée pour le moment — commence une leçon dans la Formation.
          </p>
        ) : (
          <ul className="flex flex-col gap-2">
            {feed.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between gap-4 rounded-lg border border-border bg-surface px-4 py-3"
              >
                <div>
                  <p className="text-sm text-foreground">{item.label}</p>
                  <p className="text-xs text-muted">{item.skillTitle}</p>
                </div>
                <div className="flex items-center gap-3">
                  <OutcomeDot outcome={item.outcome} />
                  <span className="shrink-0 text-xs text-muted">
                    {dateFormatter.format(item.date)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
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

function OutcomeDot({ outcome }: { outcome: "positive" | "negative" | "neutral" }) {
  const className =
    outcome === "positive" ? "bg-success" : outcome === "negative" ? "bg-danger" : "bg-muted";
  return <span className={`h-2 w-2 rounded-full ${className}`} />;
}
