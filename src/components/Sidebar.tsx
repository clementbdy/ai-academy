"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Dashboard" },
  { href: "/formation", label: "Formation" },
  { href: "/competences", label: "Compétences" },
  { href: "/progression", label: "Progression" },
  { href: "/projets", label: "Projets" },
  { href: "/lab", label: "AI Lab" },
  { href: "/outils", label: "AI Toolbox" },
  { href: "/notes", label: "Notes" },
  { href: "/coach", label: "Coach IA" },
];

const footerItems = [{ href: "/parametres", label: "Paramètres" }];

export function Sidebar() {
  const pathname = usePathname();

  function isItemActive(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  return (
    <aside className="flex w-60 shrink-0 flex-col border-r border-border bg-surface/60 px-4 py-6">
      <div className="mb-8 px-2">
        <span className="text-sm font-semibold tracking-[0.2em] text-muted">
          AI ACADEMY
        </span>
      </div>
      <nav className="flex flex-1 flex-col gap-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
              isItemActive(item.href)
                ? "bg-surface-hover text-foreground"
                : "text-muted hover:bg-surface-hover hover:text-foreground"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <nav className="flex flex-col gap-1 border-t border-border pt-3">
        {footerItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
              isItemActive(item.href)
                ? "bg-surface-hover text-foreground"
                : "text-muted hover:bg-surface-hover hover:text-foreground"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
