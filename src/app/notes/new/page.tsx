import { Field, TextAreaField } from "@/components/FormFields";
import { domains, getModulesByDomain, getSkillsByModule } from "@/content/registry";
import { createNoteAction } from "../actions";

export default function NewNotePage() {
  return (
    <div className="flex max-w-2xl flex-col gap-6">
      <header>
        <h1 className="text-2xl font-semibold">Nouvelle note</h1>
      </header>
      <form action={createNoteAction} className="flex flex-col gap-4">
        <Field label="Titre" name="title" placeholder="Ex. Idée de contenu pour la chaîne" required />
        <TextAreaField label="Contenu" name="content" rows={8} required />
        <Field label="Tags (séparés par des virgules)" name="tags" placeholder="idée, projet" />
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-muted">Lier à une compétence (optionnel)</span>
          <select
            name="skillId"
            defaultValue=""
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
    </div>
  );
}
