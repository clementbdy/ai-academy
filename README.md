# AI Academy

Mon école personnelle de l'intelligence artificielle — une application web pour apprendre à utiliser l'IA de façon concrète et pratique, pas pour devenir chercheur en ML.

Philosophie : **apprendre → pratiquer → créer → automatiser → maîtriser**. Ce n'est ni une bibliothèque de cours passive, ni un simple site vitrine : chaque compétence se débloque par des prérequis réels, se valide par des exercices réellement corrigés, et progresse à travers 6 niveaux de maîtrise calculés à partir de l'activité effective de l'utilisateur.

## Fonctionnalités

- **Programme structuré** — 14 domaines (fondations des LLM, prompt engineering, context engineering, automatisation, agents IA, RAG, systèmes IA, entrepreneuriat, éthique/sécurité, analyse de données...), 67 compétences, 129 exercices (guidés, autonomes, quiz, challenges), 11 projets dont un capstone final.
- **Système de compétences** — 6 niveaux de maîtrise (Non découvert → Expertise pratique) déblocables par prérequis, calculés automatiquement à partir des leçons lues, quiz réussis et exercices validés — jamais par simple clic "j'ai terminé".
- **Arbre de compétences** — visualisation graphique des dépendances entre compétences.
- **Coach IA** — connecté à l'API Claude, connaît la progression réelle de l'utilisateur (compétences, exercices soumis, projets, notes, objectifs) et aide à apprendre sans faire le travail à sa place.
- **AI Lab** — bac à sable pour sauvegarder des prompts testés ailleurs et documenter des workflows d'automatisation.
- **AI Toolbox** — bibliothèque d'outils IA avec recherche, filtres, favoris et notes personnelles.
- **Objectifs & Progression** — suivi d'objectifs personnels avec échéances, historique d'activité, temps de formation estimé et temps réellement mesuré.
- **Recherche globale** — retrouve en un instant une note, un prompt, un workflow, un outil, une compétence ou un objectif.
- **Thème clair/sombre**, interface responsive (sidebar repliable sur mobile).

## Stack technique

- [Next.js 16](https://nextjs.org) (App Router, Turbopack) + TypeScript + Tailwind CSS
- [Prisma 7](https://www.prisma.io) + SQLite (via l'adaptateur `@prisma/adapter-better-sqlite3`)
- [Claude](https://www.anthropic.com/claude) (`@anthropic-ai/sdk`) pour le Coach IA

Le contenu pédagogique (domaines, compétences, leçons, exercices) est versionné en TypeScript dans `src/content/` ; seules les données utilisateur (progression, soumissions, notes, objectifs...) vivent en base SQLite via Prisma.

## Démarrage

```bash
npm install
cp .env.example .env
# renseigner ANTHROPIC_API_KEY dans .env (nécessaire pour le Coach IA)
npx prisma migrate deploy
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Scripts utiles

```bash
npm run lint             # ESLint
npm run validate:content # vérifie l'intégrité du contenu (IDs, prérequis, références)
npm run build             # build de production
```

## Contexte

Projet personnel et local, conçu à l'origine pour un usage mono-utilisateur (pas d'authentification, base SQLite locale).
