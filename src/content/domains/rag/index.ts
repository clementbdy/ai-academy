import type { DomainBundle } from "@/content/types";
import { ragDomain } from "./domain";
import { ragModules } from "./modules";
import { ragSkills } from "./skills";
import { ragLessons } from "./lessons";
import { ragExercises } from "./exercises";

export const ragBundle: DomainBundle = {
  domain: ragDomain,
  modules: ragModules,
  skills: ragSkills,
  lessons: ragLessons,
  exercises: ragExercises,
};
