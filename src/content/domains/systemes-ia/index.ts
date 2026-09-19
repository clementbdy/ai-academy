import type { DomainBundle } from "@/content/types";
import { systemesIaDomain } from "./domain";
import { systemesIaModules } from "./modules";
import { systemesIaSkills } from "./skills";
import { systemesIaLessons } from "./lessons";
import { systemesIaExercises } from "./exercises";

export const systemesIaBundle: DomainBundle = {
  domain: systemesIaDomain,
  modules: systemesIaModules,
  skills: systemesIaSkills,
  lessons: systemesIaLessons,
  exercises: systemesIaExercises,
};
