import type { LevelDescriptor } from "@/content/types";

/**
 * Les niveaux 0-2 suivent toujours le même gabarit générique ; seuls les
 * niveaux 3-5 (Utilisation/Maîtrise/Expertise) demandent une description
 * spécifique à la compétence, car eux seuls doivent décrire une vraie mise
 * en pratique.
 */
export function levelDescriptors(
  topic: string,
  use: string,
  master: string,
  expert: string,
): LevelDescriptor[] {
  return [
    { level: 0, label: "Non découvert", description: `N'a pas encore abordé ${topic}.` },
    { level: 1, label: "Découverte", description: `Reconnaît le vocabulaire de base autour de ${topic}.` },
    { level: 2, label: "Compréhension", description: `Peut expliquer ${topic} avec ses propres mots, sans jargon.` },
    { level: 3, label: "Utilisation", description: use },
    { level: 4, label: "Maîtrise", description: master },
    { level: 5, label: "Expertise pratique", description: expert },
  ];
}
