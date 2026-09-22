import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { Field, TextAreaField } from "@/components/FormFields";
import { requireUserId } from "@/lib/current-user";
import { updateObjectiveAction, deleteObjectiveAction } from "../actions";

export const dynamic = "force-dynamic";

export default async function ObjectiveDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const userId = await requireUserId();
  const objective = await prisma.objective.findUnique({ where: { id } });
  if (!objective || objective.userId !== userId) notFound();

  const targetDateValue = objective.targetDate
    ? objective.targetDate.toISOString().slice(0, 10)
    : "";

  return (
    <div className="flex max-w-2xl flex-col gap-6">
      <header>
        <h1 className="text-2xl font-semibold">{objective.title}</h1>
      </header>
      <form action={updateObjectiveAction.bind(null, objective.id)} className="flex flex-col gap-4">
        <Field label="Titre" name="title" defaultValue={objective.title} required />
        <TextAreaField
          label="Description"
          name="description"
          rows={4}
          defaultValue={objective.description ?? ""}
        />
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-muted">Échéance</span>
          <input
            type="date"
            name="targetDate"
            defaultValue={targetDateValue}
            className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-muted">Statut</span>
          <select
            name="status"
            defaultValue={objective.status}
            className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none"
          >
            <option value="active">En cours</option>
            <option value="completed">Atteint</option>
            <option value="abandoned">Abandonné</option>
          </select>
        </label>
        <div>
          <button
            type="submit"
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:opacity-90"
          >
            Enregistrer
          </button>
        </div>
      </form>
      <form action={deleteObjectiveAction.bind(null, objective.id)}>
        <button type="submit" className="text-xs text-danger hover:underline">
          Supprimer cet objectif
        </button>
      </form>
    </div>
  );
}
