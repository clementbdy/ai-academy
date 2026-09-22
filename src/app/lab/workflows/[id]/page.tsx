import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { parseStringArray } from "@/lib/json-fields";
import { Field, TextAreaField } from "@/components/FormFields";
import { requireUserId } from "@/lib/current-user";
import { updateWorkflowAction, deleteWorkflowAction } from "../../actions";

export const dynamic = "force-dynamic";

export default async function WorkflowDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const userId = await requireUserId();
  const workflow = await prisma.workflow.findUnique({ where: { id } });
  if (!workflow || workflow.userId !== userId) notFound();

  const steps = parseStringArray(workflow.steps).join("\n");

  return (
    <div className="flex max-w-2xl flex-col gap-6">
      <header>
        <h1 className="text-2xl font-semibold">{workflow.title}</h1>
      </header>
      <form action={updateWorkflowAction.bind(null, workflow.id)} className="flex flex-col gap-4">
        <Field label="Titre" name="title" defaultValue={workflow.title} required />
        <TextAreaField
          label="Description"
          name="description"
          rows={3}
          defaultValue={workflow.description ?? ""}
        />
        <TextAreaField label="Étapes (une par ligne)" name="steps" rows={6} defaultValue={steps} />
        <div>
          <button
            type="submit"
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:opacity-90"
          >
            Enregistrer
          </button>
        </div>
      </form>
      <form action={deleteWorkflowAction.bind(null, workflow.id)}>
        <button type="submit" className="text-xs text-danger hover:underline">
          Supprimer ce workflow
        </button>
      </form>
    </div>
  );
}
