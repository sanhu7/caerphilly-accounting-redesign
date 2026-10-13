"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import type { NavItem } from "@/types";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]";

type Props = {
  item: NavItem;
  pathname: string;
  /** "desktop" = floating panel, "mobile" = inline list */
  variant: "desktop" | "mobile";
  /** Called when a link is clicked (used to close the mobile menu). */
  onNavigate?: () => void;
};

export default function NavDropdown({ item, pathname, variant, onNavigate }: Props) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLLIElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const handleLinkClick = () => {
    setOpen(false);
    onNavigate?.();
  };

  const isDesktop = variant === "desktop";

  return (
    <li
      ref={wrapperRef}
      className={isDesktop ? "relative" : ""}
      // Close when keyboard focus leaves the whole dropdown.
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1.5 rounded-[6px] px-3 py-2 text-base font-medium transition-colors hover:bg-[var(--accent-soft)] ${focusRing} ${isDesktop ? "" : "w-full text-left"
          } ${isActive ? "bg-[var(--accent-soft)] text-[var(--accent)]" : "text-[var(--ink)]"}`}
      >
        {item.label}
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          aria-hidden="true"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M1 3l4 4 4-4z" fill="currentColor" />
        </svg>
      </button>

      <ul
        id={menuId}
        hidden={!open}
        className={
          isDesktop
            ? "absolute left-0 top-full z-40 mt-2 w-64 rounded-[10px] border border-[var(--line)] bg-white p-2 shadow-lg"
            : "mt-1 border-l-2 border-[var(--line)] pl-2"
        }
      >
        <li>
          <Link
            href={item.href}
            onClick={handleLinkClick}
            className={`block rounded-[6px] px-3 py-2 text-sm font-semibold text-[var(--ink)] hover:bg-[var(--accent-soft)] ${focusRing}`}
          >
            All {item.label.toLowerCase()}
          </Link>
        </li>
        {item.children?.map((child) => (
          <li key={child.href}>
            <Link
              href={child.href}
              onClick={handleLinkClick}
              aria-current={pathname === child.href ? "page" : undefined}
              className={`block rounded-[6px] px-3 py-2 text-sm hover:bg-[var(--accent-soft)] ${focusRing} ${pathname === child.href
                ? "bg-[var(--accent-soft)] text-[var(--accent)]"
                : "text-[var(--ink-2)]"
                }`}
            >
              {child.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}