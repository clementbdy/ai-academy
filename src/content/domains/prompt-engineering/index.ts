import type { DomainBundle } from "@/content/types";
import { promptEngineeringDomain } from "./domain";
import { promptEngineeringModules } from "./modules";
import { promptEngineeringSkills } from "./skills";
import { promptEngineeringLessons } from "./lessons";
import { promptEngineeringExercises } from "./exercises";

export const promptEngineeringBundle: DomainBundle = {
  domain: promptEngineeringDomain,
  modules: promptEngineeringModules,
  skills: promptEngineeringSkills,
  lessons: promptEngineeringLessons,
  exercises: promptEngineeringExercises,
};
