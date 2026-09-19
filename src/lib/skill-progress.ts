import { prisma } from "@/lib/db";
import type { LevelMap } from "@/lib/progress";

export async function getLevelMap(): Promise<LevelMap> {
  const rows = await prisma.skillProgress.findMany();
  const map: LevelMap = {};
  for (const row of rows) {
    map[row.skillId] = row.level;
  }
  return map;
}
