"use client";

import { useState } from "react";

type Theme = "dark" | "light";

const STORAGE_KEY = "ai-academy-theme";

function readInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  return window.localStorage.getItem(STORAGE_KEY) === "light" ? "light" : "dark";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(readInitialTheme);

  function applyTheme(next: Theme) {
    setTheme(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.setAttribute("data-theme", next);
  }

  return (
    <div className="inline-flex rounded-lg border border-border p-1">
      <button
        onClick={() => applyTheme("dark")}
        suppressHydrationWarning
        className={`rounded-md px-4 py-1.5 text-sm font-medium transition-colors ${
          theme === "dark" ? "bg-surface-hover text-foreground" : "text-muted hover:text-foreground"
        }`}
      >
        Sombre
      </button>
      <button
        onClick={() => applyTheme("light")}
        suppressHydrationWarning
        className={`rounded-md px-4 py-1.5 text-sm font-medium transition-colors ${
          theme === "light" ? "bg-surface-hover text-foreground" : "text-muted hover:text-foreground"
        }`}
      >
        Clair
      </button>
    </div>
  );
}
