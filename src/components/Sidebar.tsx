"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Session } from "next-auth";
import { signOutAction } from "@/lib/auth-actions";

const navItems = [
  { href: "/", label: "Dashboard" },
  { href: "/formation", label: "Formation" },
  { href: "/competences", label: "Compétences" },
  { href: "/progression", label: "Progression" },
  { href: "/objectifs", label: "Objectifs" },
  { href: "/projets", label: "Projets" },
  { href: "/lab", label: "AI Lab" },
  { href: "/outils", label: "AI Toolbox" },
  { href: "/notes", label: "Notes" },
  { href: "/coach", label: "Coach IA" },
];

const footerItems = [{ href: "/parametres", label: "Paramètres" }];

function GlobalSearchForm() {
  return (
    <form action="/notes" method="GET" className="relative mb-4">
      <button
        type="submit"
        aria-label="Lancer la recherche"
        className="absolute left-2 top-1/2 -translate-y-1/2 text-muted hover:text-foreground"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.3" />
          <path d="M9.5 9.5L13 13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      </button>
      <input
        type="text"
        name="q"
        placeholder="Rechercher partout..."
        aria-label="Recherche globale"
        className="w-full rounded-md border border-border bg-background py-1.5 pl-8 pr-2 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
      />
    </form>
  );
}

function NavLink({
  href,
  label,
  isActive,
  onClick,
}: {
  href: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
        isActive
          ? "bg-surface-hover text-foreground"
          : "text-muted hover:bg-surface-hover hover:text-foreground"
      }`}
    >
      {label}
    </Link>
  );
}

export function Sidebar({ session }: { session: Session | null }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setIsOpen(false);
  }

  if (pathname.startsWith("/login") || pathname.startsWith("/signup")) {
    return null;
  }

  function isItemActive(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  const links = (
    <>
      <GlobalSearchForm />
      <nav className="flex flex-1 flex-col gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            label={item.label}
            isActive={isItemActive(item.href)}
            onClick={() => setIsOpen(false)}
          />
        ))}
      </nav>
      <nav className="flex flex-col gap-1 border-t border-border pt-3">
        {footerItems.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            label={item.label}
            isActive={isItemActive(item.href)}
            onClick={() => setIsOpen(false)}
          />
        ))}
        {session?.user && (
          <div className="mt-2 flex items-center justify-between gap-2 px-3">
            <span className="truncate text-xs text-muted" title={session.user.email ?? undefined}>
              {session.user.email}
            </span>
            <form action={signOutAction}>
              <button type="submit" className="shrink-0 text-xs text-muted hover:text-foreground">
                Se déconnecter
              </button>
            </form>
          </div>
        )}
      </nav>
    </>
  );

  return (
    <>
      {/* Barre mobile : logo + bouton menu, remplace la sidebar sous md */}
      <div className="flex items-center justify-between border-b border-border bg-surface/60 px-4 py-3 md:hidden">
        <span className="text-sm font-semibold tracking-[0.2em] text-muted">AI ACADEMY</span>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Ouvrir le menu"
          className="rounded-md p-2 text-muted hover:bg-surface-hover hover:text-foreground"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Menu mobile : overlay + panneau coulissant */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <aside className="relative flex h-full w-64 flex-col bg-surface px-4 py-6 shadow-xl">
            <div className="mb-6 flex items-center justify-between px-2">
              <span className="text-sm font-semibold tracking-[0.2em] text-muted">AI ACADEMY</span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Fermer le menu"
                className="rounded-md p-1 text-muted hover:text-foreground"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            {links}
          </aside>
        </div>
      )}

      {/* Sidebar desktop */}
      <aside className="hidden w-60 shrink-0 flex-col border-r border-border bg-surface/60 px-4 py-6 md:flex">
        <div className="mb-8 px-2">
          <span className="text-sm font-semibold tracking-[0.2em] text-muted">AI ACADEMY</span>
        </div>
        {links}
      </aside>
    </>
  );
}
