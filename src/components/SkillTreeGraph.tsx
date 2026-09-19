import Link from "next/link";
import type { SkillEdge, SkillNode } from "@/lib/skill-graph";
import { getLevel, getSkillStatus, type LevelMap, type SkillStatus } from "@/lib/progress";

const NODE_WIDTH = 208;
const NODE_HEIGHT = 76;
const COLUMN_GAP = 264;
const ROW_GAP = 100;
const PADDING = 32;

const STATUS_STYLES: Record<SkillStatus, string> = {
  locked: "border-border bg-surface/60 text-muted opacity-60",
  todo: "border-border bg-surface text-foreground",
  in_progress: "border-warning/40 bg-warning/10 text-foreground",
  mastered: "border-success/40 bg-success/10 text-foreground",
};

export function SkillTreeGraph({
  nodes,
  edges,
  levels,
}: {
  nodes: SkillNode[];
  edges: SkillEdge[];
  levels: LevelMap;
}) {
  const positionById = new Map(
    nodes.map((n) => [
      n.skill.id,
      { x: PADDING + n.column * COLUMN_GAP, y: PADDING + n.row * ROW_GAP },
    ]),
  );

  const maxColumn = Math.max(0, ...nodes.map((n) => n.column));
  const rowCountByColumn = new Map<number, number>();
  for (const n of nodes) {
    rowCountByColumn.set(n.column, Math.max(rowCountByColumn.get(n.column) ?? 0, n.row + 1));
  }
  const maxRows = Math.max(1, ...Array.from(rowCountByColumn.values()));

  const svgWidth = PADDING * 2 + (maxColumn + 1) * COLUMN_GAP - (COLUMN_GAP - NODE_WIDTH);
  const svgHeight = PADDING * 2 + maxRows * ROW_GAP - (ROW_GAP - NODE_HEIGHT);

  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-surface p-4">
      <svg
        width={svgWidth}
        height={svgHeight}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        className="min-w-full"
      >
        {edges.map((edge) => {
          const from = positionById.get(edge.from);
          const to = positionById.get(edge.to);
          if (!from || !to) return null;
          const x1 = from.x + NODE_WIDTH;
          const y1 = from.y + NODE_HEIGHT / 2;
          const x2 = to.x;
          const y2 = to.y + NODE_HEIGHT / 2;
          const midX = (x1 + x2) / 2;
          return (
            <path
              key={`${edge.from}->${edge.to}`}
              d={`M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`}
              fill="none"
              stroke="var(--border)"
              strokeWidth={1.5}
            />
          );
        })}

        {nodes.map((node) => {
          const pos = positionById.get(node.skill.id)!;
          const status = getSkillStatus(node.skill, levels);
          const level = getLevel(levels, node.skill.id);
          return (
            <foreignObject
              key={node.skill.id}
              x={pos.x}
              y={pos.y}
              width={NODE_WIDTH}
              height={NODE_HEIGHT}
            >
              <Link
                href={`/formation/${node.skill.id}`}
                className={`flex h-full w-full flex-col justify-center gap-1 rounded-lg border px-3 py-2 transition-colors hover:bg-surface-hover ${STATUS_STYLES[status]}`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-medium leading-tight">{node.skill.title}</span>
                  <span className="shrink-0 rounded-full bg-background px-1.5 py-0.5 text-[10px] text-muted">
                    {level}/5
                  </span>
                </div>
                <StatusDots status={status} />
              </Link>
            </foreignObject>
          );
        })}
      </svg>
    </div>
  );
}

const STATUS_LABELS: Record<SkillStatus, string> = {
  locked: "Verrouillé",
  todo: "À commencer",
  in_progress: "En cours",
  mastered: "Maîtrisé",
};

function StatusDots({ status }: { status: SkillStatus }) {
  return <span className="text-[10px] text-muted">{STATUS_LABELS[status]}</span>;
}
