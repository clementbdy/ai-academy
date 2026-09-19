import { CoachChat } from "@/components/CoachChat";

export default function CoachPage() {
  return (
    <div className="flex flex-col gap-6">
      <header>
        <h1 className="text-2xl font-semibold">Coach IA</h1>
        <p className="mt-1 text-sm text-muted">
          Il connaît ta progression réelle (compétences, projets, activité récente, notes) et
          t&apos;aide à avancer — sans faire les exercices à ta place.
        </p>
      </header>
      <CoachChat />
    </div>
  );
}
