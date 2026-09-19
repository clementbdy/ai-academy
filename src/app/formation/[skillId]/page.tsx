import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import {
  skillById,
  moduleById,
  domainById,
  getLessonsBySkill,
  getExercisesBySkill,
} from "@/content/registry";
import { getLevelMap } from "@/lib/skill-progress";
import { getLevel, getSkillStatus, isSkillUnlocked } from "@/lib/progress";
import { SkillStatusBadge } from "@/components/SkillStatusBadge";
import type { Exercise } from "@/content/types";

export const dynamic = "force-dynamic";

export default async function SkillPage({
  params,
}: {
  params: Promise<{ skillId: string }>;
}) {
  const { skillId } = await params;
  const skill = skillById.get(skillId);
  if (!skill) notFound();

  const mod = moduleById.get(skill.moduleId);
  const domain = mod ? domainById.get(mod.domainId) : undefined;
  const levels = await getLevelMap();
  const status = getSkillStatus(skill, levels);
  const unlocked = isSkillUnlocked(skill, levels);
  const currentLevel = getLevel(levels, skill.id);

  return (
    <div className="flex flex-col gap-8">
      <div className="text-xs text-muted">
        <Link href="/formation" className="hover:underline">
          Formation
        </Link>
        {domain && mod && (
          <>
            {" / "}
            {domain.title} / {mod.title}
          </>
        )}
      </div>

      <header className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-semibold">{skill.title}</h1>
          <SkillStatusBadge status={status} />
        </div>
        <p className="text-sm text-muted">{skill.description}</p>
      </header>

      {!unlocked ? (
        <LockedNotice prerequisites={skill.prerequisites} />
      ) : (
        <>
          <LevelLadder
            levelDescriptors={skill.levelDescriptors}
            currentLevel={currentLevel}
          />

          <section className="flex flex-col gap-6">
            {getLessonsBySkill(skill.id).map((lesson) => (
              <article
                key={lesson.id}
                className="rounded-xl border border-border bg-surface p-6"
              >
                <h2 className="text-lg font-semibold">{lesson.title}</h2>
                <div className="prose-academy mt-4">
                  <ReactMarkdown>{lesson.body}</ReactMarkdown>
                </div>
              </article>
            ))}
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
              Exercices
            </h2>
            {getExercisesBySkill(skill.id).map((exercise) => (
              <ExerciseCard key={exercise.id} exercise={exercise} />
            ))}
          </section>
        </>
      )}
    </div>
  );
}

function LockedNotice({ prerequisites }: { prerequisites: string[] }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <p className="text-sm font-medium">Cette compétence est verrouillée.</p>
      <p className="mt-1 text-sm text-muted">
        Termine d&apos;abord les prérequis suivants (niveau &quot;Utilisation&quot; ou plus) :
      </p>
      <ul className="mt-3 flex flex-col gap-2">
        {prerequisites.map((prereqId) => {
          const prereq = skillById.get(prereqId);
          return (
            <li key={prereqId}>
              {prereq ? (
                <Link
                  href={`/formation/${prereq.id}`}
                  className="text-sm text-accent hover:underline"
                >
                  {prereq.title}
                </Link>
              ) : (
                <span className="text-sm text-muted">{prereqId}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function LevelLadder({
  levelDescriptors,
  currentLevel,
}: {
  levelDescriptors: { level: number; label: string; description: string }[];
  currentLevel: number;
}) {
  return (
    <section className="rounded-xl border border-border bg-surface p-6">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
        Niveaux de maîtrise
      </h2>
      <ol className="mt-4 flex flex-col gap-3">
        {levelDescriptors.map((descriptor) => {
          const isCurrent = descriptor.level === currentLevel;
          const isReached = descriptor.level <= currentLevel;
          return (
            <li
              key={descriptor.level}
              className={`flex gap-3 rounded-lg px-3 py-2 ${
                isCurrent ? "bg-surface-hover" : ""
              }`}
            >
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                  isReached ? "bg-accent text-accent-foreground" : "bg-border text-muted"
                }`}
              >
                {descriptor.level}
              </span>
              <div>
                <p className="text-sm font-medium">{descriptor.label}</p>
                <p className="text-xs text-muted">{descriptor.description}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

function ExerciseCard({ exercise }: { exercise: Exercise }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium">{exercise.title}</h3>
        <span className="rounded-full bg-surface-hover px-2.5 py-1 text-xs text-muted">
          {EXERCISE_TYPE_LABELS[exercise.type]}
        </span>
      </div>
      <p className="mt-2 text-sm text-muted">{exercise.instructions}</p>

      {exercise.type === "guided" && (
        <ol className="mt-3 flex list-decimal flex-col gap-1 pl-5 text-sm text-muted">
          {exercise.steps.map((step) => (
            <li key={step.id}>{step.prompt}</li>
          ))}
        </ol>
      )}

      {exercise.type === "quiz" && (
        <p className="mt-3 text-xs text-muted">
          {exercise.questions.length} question(s) · seuil de réussite {exercise.passingScore}%
        </p>
      )}

      {(exercise.type === "autonomous" || exercise.type === "challenge") && (
        <ul className="mt-3 flex list-disc flex-col gap-1 pl-5 text-sm text-muted">
          {exercise.criteria.map((criterion) => (
            <li key={criterion.id}>{criterion.description}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

const EXERCISE_TYPE_LABELS: Record<Exercise["type"], string> = {
  guided: "Exercice guidé",
  autonomous: "Exercice autonome",
  quiz: "Quiz",
  challenge: "Challenge",
};
