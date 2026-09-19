import type { DomainBundle } from "@/content/types";
import { productiviteDomain } from "./domain";
import { productiviteModules } from "./modules";
import { productiviteSkills } from "./skills";
import { productiviteLessons } from "./lessons";
import { productiviteExercises } from "./exercises";

export const productiviteBundle: DomainBundle = {
  domain: productiviteDomain,
  modules: productiviteModules,
  skills: productiviteSkills,
  lessons: productiviteLessons,
  exercises: productiviteExercises,
};
