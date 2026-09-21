import type { DomainBundle } from "@/content/types";
import { analyseDeDonneesIaDomain } from "./domain";
import { analyseDeDonneesIaModules } from "./modules";
import { analyseDeDonneesIaSkills } from "./skills";
import { analyseDeDonneesIaLessons } from "./lessons";
import { analyseDeDonneesIaExercises } from "./exercises";

export const analyseDeDonneesIaBundle: DomainBundle = {
  domain: analyseDeDonneesIaDomain,
  modules: analyseDeDonneesIaModules,
  skills: analyseDeDonneesIaSkills,
  lessons: analyseDeDonneesIaLessons,
  exercises: analyseDeDonneesIaExercises,
};
