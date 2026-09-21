import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";
import { projectById, skillById } from "@/content/registry";
import { getLevelMap } from "@/lib/skill-progress";
import { isProjectUnlocked } from "@/lib/project-progress";
import { prisma } from "@/lib/db";
import { CriteriaExerciseRunner } from "@/components/CriteriaExerciseRunner";
import { submitProjectAction } from "../actions";

export const dynamic = "force-dynamic";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  const project = projectById.get(projectId);
  if (!project) notFound();

  const levels = await getLevelMap();
  const unlocked = isProjectUnlocked(project, levels);

  return (
    <div className="flex flex-col gap-8">
      <div className="text-xs text-muted">
        <Link href="/projets" className="hover:underline">
          Projets
        </Link>
      </div>

      <header className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-semibold">{project.title}</h1>
          <span className="rounded-full bg-surface-hover px-2 py-0.5 text-[10px] uppercase tracking-wide text-muted">
            {project.difficulty}
          </span>
        </div>
        <p className="text-sm text-muted">{project.description}</p>
      </header>

      {!unlocked ? (
        <LockedNotice requiredSkillIds={project.requiredSkillIds} levels={levels} />
      ) : (
        <>
          <section className="rounded-xl border border-border bg-surface p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
              Instructions
            </h2>
            <div className="prose-academy mt-4">
              <ReactMarkdown>{project.instructions}</ReactMarkdown>
            </div>
          </section>

          <section className="rounded-xl border border-border bg-surface p-5">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
              Compétences pratiquées
            </h2>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.skillsDeveloped.map((skillId) => {
                const skill = skillById.get(skillId);
                return (
                  <span
                    key={skillId}
                    className="rounded-full bg-surface-hover px-2.5 py-1 text-xs text-muted"
                  >
                    {skill?.title ?? skillId}
                  </span>
                );
              })}
            </div>
          </section>

          <ProjectSubmissionSection projectId={project.id} criteria={project.criteria} />
        </>
      )}
    </div>
  );
}

async function ProjectSubmissionSection({
  projectId,
  criteria,
}: {
  projectId: string;
  criteria: { id: string; description: string }[];
}) {
  const submission = await prisma.projectSubmission.findFirst({ where: { projectId } });

  return (
    <section className="rounded-xl border border-border bg-surface p-5">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">Ton livrable</h2>
      <CriteriaExerciseRunner
        criteria={criteria}
        initialContent={submission?.content ?? null}
        initialCriteriaResults={submission?.criteriaResults ?? null}
        initialStatus={submission?.status ?? null}
        placeholder="Rédige ou colle ici ton livrable pour ce projet..."
        submitLabel="Valider le projet"
        onSubmit={submitProjectAction.bind(null, projectId)}
      />
    </section>
  );
}

function LockedNotice({
  requiredSkillIds,
  levels,
}: {
  requiredSkillIds: string[];
  levels: Record<string, number>;
}) {
  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <p className="text-sm font-medium">Ce projet est verrouillé.</p>
      <p className="mt-1 text-sm text-muted">
        Atteins d&apos;abord le niveau &quot;Utilisation&quot; sur ces compétences :
      </p>
      <ul className="mt-3 flex flex-col gap-2">
        {requiredSkillIds.map((skillId) => {
          const skill = skillById.get(skillId);
          const met = (levels[skillId] ?? 0) >= 3;
          return (
            <li key={skillId} className="flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${met ? "bg-success" : "bg-border"}`} />
              {skill ? (
                <Link href={`/formation/${skill.id}`} className="text-sm text-accent hover:underline">
                  {skill.title}
                </Link>
              ) : (
                <span className="text-sm text-muted">{skillId}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
