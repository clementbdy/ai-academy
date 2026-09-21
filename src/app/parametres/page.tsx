import { ThemeToggle } from "@/components/ThemeToggle";

export default function ParametresPage() {
  return (
    <div className="flex flex-col gap-10">
      <header>
        <h1 className="text-2xl font-semibold">Paramètres</h1>
        <p className="mt-1 text-sm text-muted">Réglages de l&apos;application.</p>
      </header>

      <section className="rounded-xl border border-border bg-surface p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">Apparence</h2>
        <p className="mt-1 text-sm text-muted">Choisis le thème de l&apos;interface.</p>
        <div className="mt-4">
          <ThemeToggle />
        </div>
      </section>
    </div>
  );
}
