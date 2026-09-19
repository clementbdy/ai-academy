import { prisma } from "@/lib/db";
import { skills, tools } from "@/content/registry";

export type SearchResultType = "note" | "prompt" | "workflow" | "tool" | "skill";

export interface SearchResult {
  type: SearchResultType;
  title: string;
  snippet: string;
  href: string;
}

const TYPE_LABELS: Record<SearchResultType, string> = {
  note: "Note",
  prompt: "Prompt",
  workflow: "Workflow",
  tool: "Outil",
  skill: "Compétence",
};

export { TYPE_LABELS };

function snippet(text: string, length = 140): string {
  const trimmed = text.trim();
  return trimmed.length > length ? `${trimmed.slice(0, length)}…` : trimmed;
}

export async function globalSearch(query: string): Promise<SearchResult[]> {
  const q = query.trim();
  if (!q) return [];

  const [notes, prompts, workflows] = await Promise.all([
    prisma.note.findMany({
      where: { OR: [{ title: { contains: q } }, { content: { contains: q } }] },
      take: 10,
    }),
    prisma.savedPrompt.findMany({
      where: { OR: [{ title: { contains: q } }, { prompt: { contains: q } }] },
      take: 10,
    }),
    prisma.workflow.findMany({
      where: { OR: [{ title: { contains: q } }, { description: { contains: q } }] },
      take: 10,
    }),
  ]);

  const results: SearchResult[] = [];

  for (const note of notes) {
    results.push({
      type: "note",
      title: note.title,
      snippet: snippet(note.content),
      href: `/notes/${note.id}`,
    });
  }
  for (const prompt of prompts) {
    results.push({
      type: "prompt",
      title: prompt.title,
      snippet: snippet(prompt.prompt),
      href: `/lab/prompts/${prompt.id}`,
    });
  }
  for (const workflow of workflows) {
    results.push({
      type: "workflow",
      title: workflow.title,
      snippet: snippet(workflow.description ?? ""),
      href: `/lab/workflows/${workflow.id}`,
    });
  }

  const qLower = q.toLowerCase();
  for (const tool of tools) {
    if (
      tool.name.toLowerCase().includes(qLower) ||
      tool.description.toLowerCase().includes(qLower) ||
      tool.category.toLowerCase().includes(qLower)
    ) {
      results.push({
        type: "tool",
        title: tool.name,
        snippet: snippet(tool.description),
        href: `/outils?q=${encodeURIComponent(tool.name)}`,
      });
    }
  }
  for (const skill of skills) {
    if (
      skill.title.toLowerCase().includes(qLower) ||
      skill.description.toLowerCase().includes(qLower)
    ) {
      results.push({
        type: "skill",
        title: skill.title,
        snippet: snippet(skill.description),
        href: `/formation/${skill.id}`,
      });
    }
  }

  return results;
}
