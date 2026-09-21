"use client";

import { useState } from "react";

/**
 * Plafond de sécurité par activité : au-delà, on suppose un onglet resté
 * ouvert sans engagement réel plutôt qu'un temps d'apprentissage honnête
 * (pas de suivi de visibilité/focus — trop complexe pour la précision
 * marginale que ça apporterait dans une appli mono-utilisateur).
 */
const MAX_TRACKED_SECONDS = 2 * 60 * 60;

/** Retourne une fonction qui donne le temps écoulé (en secondes, plafonné)
 * depuis le montage du composant appelant. */
export function useElapsedSeconds(): () => number {
  const [startedAt] = useState(() => Date.now());
  return () => Math.min(Math.round((Date.now() - startedAt) / 1000), MAX_TRACKED_SECONDS);
}
