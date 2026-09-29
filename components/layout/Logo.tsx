import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="Caerphilly Accounting, home"
      className="flex items-center gap-2.5 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-black"
    >
      <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden="true">
        <rect x="1" y="1" width="34" height="34" fill="#E6F2FB" stroke="#000" strokeWidth="2" />
        <path d="M9 26V16m6 10V10m6 16v-7m6 7V13" stroke="#000" strokeWidth="3" strokeLinecap="square" />
      </svg>
      <span className="text-lg font-bold leading-tight">
        Caerphilly
        <br />
        Accounting
      </span>
    </Link>
  );
}