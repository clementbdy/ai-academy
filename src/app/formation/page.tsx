import Link from "next/link";
import { domains, getModulesByDomain, getSkillsByModule } from "@/content/registry";
import { getLevelMap } from "@/lib/skill-progress";
import { getSkillStatus } from "@/lib/progress";
import { SkillStatusBadge } from "@/components/SkillStatusBadge";

export const dynamic = "force-dynamic";

export default async function FormationPage() {
  const levels = await getLevelMap();

  return (
    <div className="flex flex-col gap-10">
      <header>
        <h1 className="text-2xl font-semibold">Formation</h1>
        <p className="mt-1 text-sm text-muted">
          Le catalogue complet des domaines, modules et compétences disponibles.
        </p>
      </header>

      {domains.map((domain) => (
        <section key={domain.id} className="flex flex-col gap-6">
          <div>
            <h2 className="text-lg font-semibold">{domain.title}</h2>
            <p className="mt-1 text-sm text-muted">{domain.description}</p>
          </div>

          {getModulesByDomain(domain.id).map((mod) => (
            <div key={mod.id} className="rounded-xl border border-border bg-surface p-5">
              <h3 className="text-sm font-semibold">{mod.title}</h3>
              <p className="mt-1 text-sm text-muted">{mod.description}</p>

              <ul className="mt-4 flex flex-col gap-2">
                {getSkillsByModule(mod.id).map((skill) => {
                  const status = getSkillStatus(skill, levels);
                  const isLocked = status === "locked";
                  return (
                    <li key={skill.id}>
                      {isLocked ? (
                        <div className="flex items-center justify-between rounded-lg border border-border px-4 py-3 opacity-60">
                          <div>
                            <p className="text-sm font-medium">{skill.title}</p>
                            <p className="text-xs text-muted">
                              Prérequis : {skill.prerequisites.join(", ")}
                            </p>
                          </div>
                          <SkillStatusBadge status={status} />
                        </div>
                      ) : (
                        <Link
                          href={`/formation/${skill.id}`}
                          className="flex items-center justify-between rounded-lg border border-border px-4 py-3 transition-colors hover:bg-surface-hover"
                        >
                          <div>
                            <p className="text-sm font-medium">{skill.title}</p>
                            <p className="text-xs text-muted">{skill.description}</p>
                          </div>
                          <SkillStatusBadge status={status} />
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
