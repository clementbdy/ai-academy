import Link from "next/link";
import { Field } from "@/components/FormFields";
import { signupAction } from "./actions";

export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm rounded-xl border border-border bg-surface p-6">
        <h1 className="text-xl font-semibold">Créer un compte</h1>
        <p className="mt-1 text-sm text-muted">Ton école personnelle de l&apos;IA t&apos;attend.</p>
        <form action={signupAction} className="mt-6 flex flex-col gap-4">
          <Field label="Nom (optionnel)" name="name" placeholder="Ton prénom" />
          <Field label="Email" name="email" type="email" placeholder="toi@exemple.com" required />
          <Field
            label="Mot de passe"
            name="password"
            type="password"
            placeholder="8 caractères minimum"
            required
          />
          <button
            type="submit"
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:opacity-90"
          >
            Créer mon compte
          </button>
        </form>
        <p className="mt-4 text-center text-xs text-muted">
          Déjà un compte ?{" "}
          <Link href="/login" className="text-accent hover:underline">
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  );
}
