import type { DomainBundle } from "@/content/types";
import { ethiqueSecuriteIaDomain } from "./domain";
import { ethiqueSecuriteIaModules } from "./modules";
import { ethiqueSecuriteIaSkills } from "./skills";
import { ethiqueSecuriteIaLessons } from "./lessons";
import { ethiqueSecuriteIaExercises } from "./exercises";

export const ethiqueSecuriteIaBundle: DomainBundle = {
  domain: ethiqueSecuriteIaDomain,
  modules: ethiqueSecuriteIaModules,
  skills: ethiqueSecuriteIaSkills,
  lessons: ethiqueSecuriteIaLessons,
  exercises: ethiqueSecuriteIaExercises,
};
