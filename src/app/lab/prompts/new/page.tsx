import { Field, TextAreaField } from "@/components/FormFields";
import { createPromptAction } from "../../actions";

export default function NewPromptPage() {
  return (
    <div className="flex max-w-2xl flex-col gap-6">
      <header>
        <h1 className="text-2xl font-semibold">Nouveau prompt</h1>
        <p className="mt-1 text-sm text-muted">
          Sauvegarde un prompt que tu as testé (dans ChatGPT, Claude, Gemini...) pour pouvoir le
          retrouver et le réutiliser.
        </p>
      </header>
      <form action={createPromptAction} className="flex flex-col gap-4">
        <Field label="Titre" name="title" placeholder="Ex. Générateur d'accroches LinkedIn" required />
        <TextAreaField label="Prompt" name="prompt" rows={6} placeholder="Le texte du prompt..." required />
        <TextAreaField
          label="Notes / observations"
          name="notes"
          rows={4}
          placeholder="Ce que tu as observé en le testant, ce qui a bien ou mal fonctionné..."
        />
        <Field label="Tags (séparés par des virgules)" name="tags" placeholder="rédaction, social media" />
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
