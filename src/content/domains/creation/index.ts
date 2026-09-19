import type { DomainBundle } from "@/content/types";
import { creationDomain } from "./domain";
import { creationModules } from "./modules";
import { creationSkills } from "./skills";
import { creationLessons } from "./lessons";
import { creationExercises } from "./exercises";

export const creationBundle: DomainBundle = {
  domain: creationDomain,
  modules: creationModules,
  skills: creationSkills,
  lessons: creationLessons,
  exercises: creationExercises,
};
