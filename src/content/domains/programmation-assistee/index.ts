import type { DomainBundle } from "@/content/types";
import { programmationAssisteeDomain } from "./domain";
import { programmationAssisteeModules } from "./modules";
import { programmationAssisteeSkills } from "./skills";
import { programmationAssisteeLessons } from "./lessons";
import { programmationAssisteeExercises } from "./exercises";

export const programmationAssisteeBundle: DomainBundle = {
  domain: programmationAssisteeDomain,
  modules: programmationAssisteeModules,
  skills: programmationAssisteeSkills,
  lessons: programmationAssisteeLessons,
  exercises: programmationAssisteeExercises,
};
