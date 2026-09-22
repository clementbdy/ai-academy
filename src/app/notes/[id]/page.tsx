import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { parseStringArray } from "@/lib/json-fields";
import { Field, TextAreaField } from "@/components/FormFields";
import { domains, getModulesByDomain, getSkillsByModule } from "@/content/registry";
import { requireUserId } from "@/lib/current-user";
import { updateNoteAction, deleteNoteAction } from "../actions";

export const dynamic = "force-dynamic";

export default async function NoteDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const userId = await requireUserId();
  const note = await prisma.note.findUnique({ where: { id } });
  if (!note || note.userId !== userId) notFound();

  const tags = parseStringArray(note.tags).join(", ");

  return (
    <div className="flex max-w-2xl flex-col gap-6">
      <header>
        <h1 className="text-2xl font-semibold">{note.title}</h1>
      </header>
      <form action={updateNoteAction.bind(null, note.id)} className="flex flex-col gap-4">
        <Field label="Titre" name="title" defaultValue={note.title} required />
        <TextAreaField label="Contenu" name="content" rows={8} defaultValue={note.content} required />
        <Field label="Tags (séparés par des virgules)" name="tags" defaultValue={tags} />
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-muted">Lier à une compétence (optionnel)</span>
          <select
            name="skillId"
            defaultValue={note.skillId ?? ""}
            className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none"
          >
            <option value="">Aucune</option>
            {domains.map((domain) =>
              getModulesByDomain(domain.id).map((mod) =>
                getSkillsByModule(mod.id).map((skill) => (
                  <option key={skill.id} value={skill.id}>
                    {domain.title} / {mod.title} / {skill.title}
                  </option>
                )),
              ),
            )}
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
      <form action={deleteNoteAction.bind(null, note.id)}>
        <button type="submit" className="text-xs text-danger hover:underline">
          Supprimer cette note
        </button>
      </form>
    </div>
  );
}
