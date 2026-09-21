import type { DomainBundle } from "@/content/types";
import { iaEntrepreneuriatDomain } from "./domain";
import { iaEntrepreneuriatModules } from "./modules";
import { iaEntrepreneuriatSkills } from "./skills";
import { iaEntrepreneuriatLessons } from "./lessons";
import { iaEntrepreneuriatExercises } from "./exercises";

export const iaEntrepreneuriatBundle: DomainBundle = {
  domain: iaEntrepreneuriatDomain,
  modules: iaEntrepreneuriatModules,
  skills: iaEntrepreneuriatSkills,
  lessons: iaEntrepreneuriatLessons,
  exercises: iaEntrepreneuriatExercises,
};
