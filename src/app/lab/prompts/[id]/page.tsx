import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { parseStringArray } from "@/lib/json-fields";
import { Field, TextAreaField } from "@/components/FormFields";
import { requireUserId } from "@/lib/current-user";
import { updatePromptAction, deletePromptAction } from "../../actions";

export const dynamic = "force-dynamic";

export default async function PromptDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const userId = await requireUserId();
  const prompt = await prisma.savedPrompt.findUnique({ where: { id } });
  if (!prompt || prompt.userId !== userId) notFound();

  const tags = parseStringArray(prompt.tags).join(", ");

  return (
    <div className="flex max-w-2xl flex-col gap-6">
      <header>
        <h1 className="text-2xl font-semibold">{prompt.title}</h1>
      </header>
      <form action={updatePromptAction.bind(null, prompt.id)} className="flex flex-col gap-4">
        <Field label="Titre" name="title" defaultValue={prompt.title} required />
        <TextAreaField label="Prompt" name="prompt" rows={6} defaultValue={prompt.prompt} required />
        <TextAreaField
          label="Notes / observations"
          name="notes"
          rows={4}
          defaultValue={prompt.notes ?? ""}
        />
        <Field label="Tags (séparés par des virgules)" name="tags" defaultValue={tags} />
        <div>
          <button
            type="submit"
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:opacity-90"
          >
            Enregistrer
          </button>
        </div>
      </form>
      <form action={deletePromptAction.bind(null, prompt.id)}>
        <button type="submit" className="text-xs text-danger hover:underline">
          Supprimer ce prompt
        </button>
      </form>
    </div>
  );
}
