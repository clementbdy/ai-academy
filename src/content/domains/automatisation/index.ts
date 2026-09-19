import type { DomainBundle } from "@/content/types";
import { automatisationDomain } from "./domain";
import { automatisationModules } from "./modules";
import { automatisationSkills } from "./skills";
import { automatisationLessons } from "./lessons";
import { automatisationExercises } from "./exercises";

export const automatisationBundle: DomainBundle = {
  domain: automatisationDomain,
  modules: automatisationModules,
  skills: automatisationSkills,
  lessons: automatisationLessons,
  exercises: automatisationExercises,
};
