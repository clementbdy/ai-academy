import { validateContent } from "@/content/validate";
import { domains, modules, skills, lessons, exercises, tools, projects } from "@/content/registry";

const issues = validateContent();

console.log(
  `Contenu : ${domains.length} domaine(s), ${modules.length} module(s), ${skills.length} compétence(s), ${lessons.length} leçon(s), ${exercises.length} exercice(s), ${tools.length} outil(s), ${projects.length} projet(s).`,
);

if (issues.length === 0) {
  console.log("✓ Aucune incohérence détectée.");
  process.exit(0);
}

console.error(`✗ ${issues.length} incohérence(s) détectée(s) :\n`);
for (const issue of issues) {
  console.error(`  [${issue.scope}] ${issue.message}`);
}
process.exit(1);
