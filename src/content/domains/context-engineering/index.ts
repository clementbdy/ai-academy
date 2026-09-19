import type { DomainBundle } from "@/content/types";
import { contextEngineeringDomain } from "./domain";
import { contextEngineeringModules } from "./modules";
import { contextEngineeringSkills } from "./skills";
import { contextEngineeringLessons } from "./lessons";
import { contextEngineeringExercises } from "./exercises";

export const contextEngineeringBundle: DomainBundle = {
  domain: contextEngineeringDomain,
  modules: contextEngineeringModules,
  skills: contextEngineeringSkills,
  lessons: contextEngineeringLessons,
  exercises: contextEngineeringExercises,
};
