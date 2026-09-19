import { Field, TextAreaField } from "@/components/FormFields";
import { createWorkflowAction } from "../../actions";

export default function NewWorkflowPage() {
  return (
    <div className="flex max-w-2xl flex-col gap-6">
      <header>
        <h1 className="text-2xl font-semibold">Nouveau workflow</h1>
        <p className="mt-1 text-sm text-muted">
          Documente un workflow que tu as construit (dans Make, n8n, Zapier, ou à la main) : une
          étape par ligne.
        </p>
      </header>
      <form action={createWorkflowAction} className="flex flex-col gap-4">
        <Field label="Titre" name="title" placeholder="Ex. Veille automatique vers Notion" required />
        <TextAreaField
          label="Description"
          name="description"
          rows={3}
          placeholder="À quoi sert ce workflow, quel outil l'exécute..."
        />
        <TextAreaField
          label="Étapes (une par ligne)"
          name="steps"
          rows={6}
          placeholder={"Déclencheur : nouveau flux RSS\nFiltrer les articles pertinents\nRésumer avec un LLM\nEnvoyer dans Notion"}
        />
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
