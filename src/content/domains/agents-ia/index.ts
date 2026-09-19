import type { DomainBundle } from "@/content/types";
import { agentsIaDomain } from "./domain";
import { agentsIaModules } from "./modules";
import { agentsIaSkills } from "./skills";
import { agentsIaLessons } from "./lessons";
import { agentsIaExercises } from "./exercises";

export const agentsIaBundle: DomainBundle = {
  domain: agentsIaDomain,
  modules: agentsIaModules,
  skills: agentsIaSkills,
  lessons: agentsIaLessons,
  exercises: agentsIaExercises,
};
