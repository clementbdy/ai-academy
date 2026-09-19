import {
  domains,
  modules,
  skills,
  lessons,
  exercises,
  tools,
  projects,
  domainById,
  moduleById,
  skillById,
} from "@/content/registry";

export interface ContentIssue {
  scope: string;
  message: string;
}

function checkDuplicateIds(): ContentIssue[] {
  const issues: ContentIssue[] = [];
  const seen = new Map<string, string>(); // id -> scope où il a déjà été vu

  const allEntities: { id: string; scope: string }[] = [
    ...domains.map((d) => ({ id: d.id, scope: "domain" })),
    ...modules.map((m) => ({ id: m.id, scope: "module" })),
    ...skills.map((s) => ({ id: s.id, scope: "skill" })),
    ...lessons.map((l) => ({ id: l.id, scope: "lesson" })),
    ...exercises.map((e) => ({ id: e.id, scope: "exercise" })),
    ...tools.map((t) => ({ id: t.id, scope: "tool" })),
    ...projects.map((p) => ({ id: p.id, scope: "project" })),
  ];

  for (const entity of allEntities) {
    const key = `${entity.scope}:${entity.id}`;
    if (seen.has(key)) {
      issues.push({ scope: entity.scope, message: `ID en double : "${entity.id}"` });
    }
    seen.set(key, entity.scope);
  }

  return issues;
}

function checkModuleDomainRefs(): ContentIssue[] {
  const issues: ContentIssue[] = [];
  for (const mod of modules) {
    if (!domainById.has(mod.domainId)) {
      issues.push({
        scope: "module",
        message: `Module "${mod.id}" référence un domaine inexistant : "${mod.domainId}"`,
      });
    }
  }
  return issues;
}

function checkDomainModuleListSync(): ContentIssue[] {
  const issues: ContentIssue[] = [];
  for (const domain of domains) {
    for (const moduleId of domain.moduleIds) {
      const mod = moduleById.get(moduleId);
      if (!mod) {
        issues.push({
          scope: "domain",
          message: `Domaine "${domain.id}" liste un module inexistant : "${moduleId}"`,
        });
      } else if (mod.domainId !== domain.id) {
        issues.push({
          scope: "domain",
          message: `Module "${moduleId}" listé dans "${domain.id}" mais rattaché à "${mod.domainId}"`,
        });
      }
    }
  }
  return issues;
}

function checkSkillModuleRefs(): ContentIssue[] {
  const issues: ContentIssue[] = [];
  for (const skill of skills) {
    if (!moduleById.has(skill.moduleId)) {
      issues.push({
        scope: "skill",
        message: `Compétence "${skill.id}" référence un module inexistant : "${skill.moduleId}"`,
      });
    }
  }
  return issues;
}

function checkModuleSkillListSync(): ContentIssue[] {
  const issues: ContentIssue[] = [];
  for (const mod of modules) {
    for (const skillId of mod.skillIds) {
      const skill = skillById.get(skillId);
      if (!skill) {
        issues.push({
          scope: "module",
          message: `Module "${mod.id}" liste une compétence inexistante : "${skillId}"`,
        });
      } else if (skill.moduleId !== mod.id) {
        issues.push({
          scope: "module",
          message: `Compétence "${skillId}" listée dans "${mod.id}" mais rattachée à "${skill.moduleId}"`,
        });
      }
    }
  }
  return issues;
}

function checkPrerequisiteRefs(): ContentIssue[] {
  const issues: ContentIssue[] = [];
  for (const skill of skills) {
    for (const prereqId of skill.prerequisites) {
      if (!skillById.has(prereqId)) {
        issues.push({
          scope: "skill",
          message: `Compétence "${skill.id}" a un prérequis inexistant : "${prereqId}"`,
        });
      }
      if (prereqId === skill.id) {
        issues.push({
          scope: "skill",
          message: `Compétence "${skill.id}" se référence elle-même comme prérequis`,
        });
      }
    }
  }
  return issues;
}

function checkPrerequisiteCycles(): ContentIssue[] {
  const issues: ContentIssue[] = [];
  const state = new Map<string, "visiting" | "done">();

  function visit(skillId: string, path: string[]): void {
    const current = state.get(skillId);
    if (current === "done") return;
    if (current === "visiting") {
      issues.push({
        scope: "skill",
        message: `Cycle de prérequis détecté : ${[...path, skillId].join(" -> ")}`,
      });
      return;
    }

    state.set(skillId, "visiting");
    const skill = skillById.get(skillId);
    if (skill) {
      for (const prereqId of skill.prerequisites) {
        if (skillById.has(prereqId)) {
          visit(prereqId, [...path, skillId]);
        }
      }
    }
    state.set(skillId, "done");
  }

  for (const skill of skills) {
    visit(skill.id, []);
  }

  return issues;
}

function checkLessonExerciseRefs(): ContentIssue[] {
  const issues: ContentIssue[] = [];
  const lessonIds = new Set(lessons.map((l) => l.id));
  const exerciseIds = new Set(exercises.map((e) => e.id));

  for (const skill of skills) {
    for (const lessonId of skill.lessonIds) {
      if (!lessonIds.has(lessonId)) {
        issues.push({
          scope: "skill",
          message: `Compétence "${skill.id}" référence une leçon inexistante : "${lessonId}"`,
        });
      }
    }
    for (const exerciseId of skill.exerciseIds) {
      if (!exerciseIds.has(exerciseId)) {
        issues.push({
          scope: "skill",
          message: `Compétence "${skill.id}" référence un exercice inexistant : "${exerciseId}"`,
        });
      }
    }
  }

  for (const lesson of lessons) {
    if (!skillById.has(lesson.skillId)) {
      issues.push({
        scope: "lesson",
        message: `Leçon "${lesson.id}" référence une compétence inexistante : "${lesson.skillId}"`,
      });
    }
  }

  for (const exercise of exercises) {
    if (!skillById.has(exercise.skillId)) {
      issues.push({
        scope: "exercise",
        message: `Exercice "${exercise.id}" référence une compétence inexistante : "${exercise.skillId}"`,
      });
    }
    if (exercise.type === "quiz") {
      if (exercise.passingScore < 0 || exercise.passingScore > 100) {
        issues.push({
          scope: "exercise",
          message: `Quiz "${exercise.id}" a un passingScore hors de [0, 100] : ${exercise.passingScore}`,
        });
      }
      for (const question of exercise.questions) {
        if (
          question.correctOptionIndex < 0 ||
          question.correctOptionIndex >= question.options.length
        ) {
          issues.push({
            scope: "exercise",
            message: `Question "${question.id}" du quiz "${exercise.id}" a un correctOptionIndex invalide`,
          });
        }
      }
    }
  }

  return issues;
}

function checkLevelDescriptors(): ContentIssue[] {
  const issues: ContentIssue[] = [];
  const expectedLevels = [0, 1, 2, 3, 4, 5];
  for (const skill of skills) {
    const levels: number[] = skill.levelDescriptors.map((d) => d.level).sort((a, b) => a - b);
    const missing = expectedLevels.filter((l) => !levels.includes(l));
    if (missing.length > 0) {
      issues.push({
        scope: "skill",
        message: `Compétence "${skill.id}" n'a pas de descripteur pour le(s) niveau(x) : ${missing.join(", ")}`,
      });
    }
  }
  return issues;
}

function checkProjectRefs(): ContentIssue[] {
  const issues: ContentIssue[] = [];
  for (const project of projects) {
    if (project.criteria.length === 0) {
      issues.push({
        scope: "project",
        message: `Projet "${project.id}" n'a aucun critère de validation`,
      });
    }
    for (const skillId of [...project.requiredSkillIds, ...project.skillsDeveloped]) {
      if (!skillById.has(skillId)) {
        issues.push({
          scope: "project",
          message: `Projet "${project.id}" référence une compétence inexistante : "${skillId}"`,
        });
      }
    }
  }
  return issues;
}

export function validateContent(): ContentIssue[] {
  return [
    ...checkDuplicateIds(),
    ...checkModuleDomainRefs(),
    ...checkDomainModuleListSync(),
    ...checkSkillModuleRefs(),
    ...checkModuleSkillListSync(),
    ...checkPrerequisiteRefs(),
    ...checkPrerequisiteCycles(),
    ...checkLessonExerciseRefs(),
    ...checkLevelDescriptors(),
    ...checkProjectRefs(),
  ];
}
