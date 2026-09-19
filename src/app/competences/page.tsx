import { buildSkillGraph } from "@/lib/skill-graph";
import { getLevelMap } from "@/lib/skill-progress";
import { SkillTreeGraph } from "@/components/SkillTreeGraph";

export const dynamic = "force-dynamic";

export default async function CompetencesPage() {
  const levels = await getLevelMap();
  const { nodes, edges } = buildSkillGraph();

  return (
    <div className="flex flex-col gap-6">
      <header>
        <h1 className="text-2xl font-semibold">Compétences</h1>
        <p className="mt-1 text-sm text-muted">
          La carte des compétences, reliées par leurs prérequis. Clique sur une compétence pour
          y accéder.
        </p>
      </header>

      <Legend />

      <SkillTreeGraph nodes={nodes} edges={edges} levels={levels} />
    </div>
  );
}

function Legend() {
  const items = [
    { label: "Verrouillé", className: "border-border bg-surface/60 opacity-60" },
    { label: "À commencer", className: "border-border bg-surface" },
    { label: "En cours", className: "border-warning/40 bg-warning/10" },
    { label: "Maîtrisé", className: "border-success/40 bg-success/10" },
  ];
  return (
    <div className="flex flex-wrap gap-4 text-xs text-muted">
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-2">
          <span className={`h-3 w-3 rounded-full border ${item.className}`} />
          {item.label}
        </span>
      ))}
    </div>
  );
}
