import type { DomainBundle } from "@/content/types";
import { assistantsIaDomain } from "./domain";
import { assistantsIaModules } from "./modules";
import { assistantsIaSkills } from "./skills";
import { assistantsIaLessons } from "./lessons";
import { assistantsIaExercises } from "./exercises";

export const assistantsIaBundle: DomainBundle = {
  domain: assistantsIaDomain,
  modules: assistantsIaModules,
  skills: assistantsIaSkills,
  lessons: assistantsIaLessons,
  exercises: assistantsIaExercises,
};
