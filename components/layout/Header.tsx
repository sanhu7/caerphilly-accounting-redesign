"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems, headerActions } from "@/data/navigation";
import Logo from "./Logo";
import NavDropdown from "./NavDropdown";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const closeMenu = () => setOpen(false);

  const linkClass = (href: string) =>
    `block rounded-[6px] px-3 py-2 text-base font-medium transition-colors hover:bg-[var(--accent-soft)] ${focusRing} ${pathname === href
      ? "bg-[var(--accent-soft)] text-[var(--accent)]"
      : "text-[var(--ink)]"
    }`;

  const renderItems = (variant: "desktop" | "mobile") =>
    navItems.map((item) =>
      item.children ? (
        <NavDropdown
          key={item.href}
          item={item}
          pathname={pathname}
          variant={variant}
          onNavigate={closeMenu}
        />
      ) : (
        <li key={item.href}>
          <Link
            href={item.href}
            onClick={closeMenu}
            className={linkClass(item.href)}
            aria-current={pathname === item.href ? "page" : undefined}
          >
            {item.label}
          </Link>
        </li>
      )
    );

  return (
    <header className="border-b border-[var(--line)] bg-white">
      {/* Top bar */}
      <div className="bg-[var(--ink)] text-sm text-[var(--footer-text)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-2 sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>Accountants &amp; bookkeepers for small businesses, sole traders and landlords</p>

          <div className="flex items-center justify-between gap-4">
            <a
              href="mailto:info@caerphillyaccounting.co.uk"
              className="break-all hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              info@caerphillyaccounting.co.uk
            </a>

            <a
              href="mailto:info@caerphillyaccounting.co.uk"
              className="shrink-0 rounded-[6px] border border-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Email us
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Logo />

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">{renderItems("desktop")}</ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          {headerActions.map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className={`inline-flex items-center justify-center rounded-[6px] border-2 border-[var(--ink)] px-6 py-2.5 text-sm font-semibold uppercase tracking-widest text-[var(--ink)] transition-colors hover:bg-[var(--ink)] hover:text-white ${focusRing}`}
            >
              {action.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className={`rounded-[6px] border border-[var(--line)] bg-white px-4 py-2 text-sm font-semibold text-[var(--ink)] hover:bg-[var(--ink)] hover:text-white lg:hidden ${focusRing}`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
          <span className="sr-only"> navigation</span>
        </button>
      </div>

      {/* Mobile navigation */}
      <div id="mobile-menu" hidden={!open} className="border-t border-[var(--line)] bg-white lg:hidden">
        <nav aria-label="Main mobile" className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
          <ul className="flex flex-col gap-1">{renderItems("mobile")}</ul>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {headerActions.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                onClick={closeMenu}
                className={`inline-flex items-center justify-center rounded-[6px] border-2 border-[var(--ink)] px-4 py-2.5 text-sm font-semibold uppercase tracking-widest text-[var(--ink)] hover:bg-[var(--accent-soft)] ${focusRing}`}
              >
                {action.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}