import type { DomainBundle } from "@/content/types";
import { fondationsIaDomain } from "./domain";
import { fondationsIaModules } from "./modules";
import { fondationsIaSkills } from "./skills";
import { fondationsIaLessons } from "./lessons";
import { fondationsIaExercises } from "./exercises";

export const fondationsIaBundle: DomainBundle = {
  domain: fondationsIaDomain,
  modules: fondationsIaModules,
  skills: fondationsIaSkills,
  lessons: fondationsIaLessons,
  exercises: fondationsIaExercises,
};
