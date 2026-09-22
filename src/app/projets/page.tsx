import Link from "next/link";
import { projects, skillById } from "@/content/registry";
import { getLevelMap } from "@/lib/skill-progress";
import { isProjectUnlocked } from "@/lib/project-progress";
import { prisma } from "@/lib/db";
import { ProjectStatusBadge, type ProjectStatus } from "@/components/ProjectStatusBadge";
import { requireUserId } from "@/lib/current-user";

export const dynamic = "force-dynamic";

export default async function ProjetsPage() {
  const userId = await requireUserId();
  const [levels, submissions] = await Promise.all([
    getLevelMap(userId),
    prisma.projectSubmission.findMany({ where: { userId } }),
  ]);
  const submissionByProjectId = new Map(submissions.map((s) => [s.projectId, s]));

  return (
    <div className="flex flex-col gap-6">
      <header>
        <h1 className="text-2xl font-semibold">Projets</h1>
        <p className="mt-1 text-sm text-muted">
          Mets tes compétences en pratique sur un livrable concret. Chaque projet se débloque une
          fois les compétences requises réellement acquises.
        </p>
      </header>

      <ul className="flex flex-col gap-4">
        {projects.map((project) => {
          const unlocked = isProjectUnlocked(project, levels);
          const submission = submissionByProjectId.get(project.id);
          const status: ProjectStatus = !unlocked
            ? "locked"
            : submission
              ? (submission.status as ProjectStatus)
              : "todo";

          const content = (
            <div
              className={`flex flex-col gap-3 rounded-xl border border-border bg-surface p-5 ${
                unlocked ? "transition-colors hover:bg-surface-hover" : "opacity-60"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <h2 className="text-base font-semibold">{project.title}</h2>
                  <span className="rounded-full bg-surface-hover px-2 py-0.5 text-[10px] uppercase tracking-wide text-muted">
                    {project.difficulty}
                  </span>
                </div>
                <ProjectStatusBadge status={status} />
              </div>
              <p className="text-sm text-muted">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.requiredSkillIds.map((skillId) => {
                  const skill = skillById.get(skillId);
                  const met = (levels[skillId] ?? 0) >= 3;
                  return (
                    <span
                      key={skillId}
                      className={`rounded-full px-2 py-0.5 text-[10px] ${
                        met ? "bg-success/15 text-success" : "bg-border text-muted"
                      }`}
                    >
                      {skill?.title ?? skillId}
                    </span>
                  );
                })}
              </div>
            </div>
          );

          return (
            <li key={project.id}>
              {unlocked ? <Link href={`/projets/${project.id}`}>{content}</Link> : content}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
