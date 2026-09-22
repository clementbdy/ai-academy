import Link from "next/link";
import { Field } from "@/components/FormFields";
import { loginAction, loginWithGoogleAction } from "./actions";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm rounded-xl border border-border bg-surface p-6">
        <h1 className="text-xl font-semibold">Se connecter</h1>
        <p className="mt-1 text-sm text-muted">Retrouve ta progression sur AI Academy.</p>

        <form action={loginWithGoogleAction} className="mt-6">
          <button
            type="submit"
            className="w-full rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-surface-hover"
          >
            Continuer avec Google
          </button>
        </form>

        <div className="my-4 flex items-center gap-3 text-xs text-muted">
          <div className="h-px flex-1 bg-border" />
          ou
          <div className="h-px flex-1 bg-border" />
        </div>

        <form action={loginAction} className="flex flex-col gap-4">
          <Field label="Email" name="email" type="email" placeholder="toi@exemple.com" required />
          <Field label="Mot de passe" name="password" type="password" required />
          <button
            type="submit"
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:opacity-90"
          >
            Se connecter
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-muted">
          Pas encore de compte ?{" "}
          <Link href="/signup" className="text-accent hover:underline">
            En créer un
          </Link>
        </p>
      </div>
    </div>
  );
}
