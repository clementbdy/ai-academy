import { Field, TextAreaField } from "@/components/FormFields";
import { createObjectiveAction } from "../actions";

export default function NewObjectivePage() {
  return (
    <div className="flex max-w-2xl flex-col gap-6">
      <header>
        <h1 className="text-2xl font-semibold">Nouvel objectif</h1>
      </header>
      <form action={createObjectiveAction} className="flex flex-col gap-4">
        <Field
          label="Titre"
          name="title"
          placeholder="Ex. Construire mon premier agent IA"
          required
        />
        <TextAreaField
          label="Description (optionnel)"
          name="description"
          rows={4}
          placeholder="Pourquoi cet objectif, ce que ça implique concrètement..."
        />
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-muted">Échéance (optionnel)</span>
          <input
            type="date"
            name="targetDate"
            className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none"
          />
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
