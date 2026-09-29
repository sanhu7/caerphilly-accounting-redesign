"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems, headerCta } from "@/data/navigation";
import ButtonLink from "@/components/ui/ButtonLink";
import Logo from "./Logo";
import NavDropdown from "./NavDropdown";

const focusRing =
  "focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-black";

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
    `block px-3 py-2 text-sm font-medium hover:bg-brand-light ${focusRing} ${
      pathname === href ? "bg-brand-light" : ""
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
    <header className="border-b-2 border-black bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Logo />

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">{renderItems("desktop")}</ul>
        </nav>

        <ButtonLink href={headerCta.href} className="hidden lg:inline-flex">
          {headerCta.label}
        </ButtonLink>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className={`border-2 border-black bg-brand-light px-3 py-2 text-sm font-semibold lg:hidden ${focusRing}`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
          <span className="sr-only"> navigation</span>
        </button>
      </div>

      {/* Mobile navigation */}
      <div id="mobile-menu" hidden={!open} className="border-t-2 border-black bg-white lg:hidden">
        <nav aria-label="Main mobile" className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
          <ul className="flex flex-col gap-1">{renderItems("mobile")}</ul>
          <ButtonLink href={headerCta.href} onClick={closeMenu} className="mt-3 w-full">
            {headerCta.label}
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}