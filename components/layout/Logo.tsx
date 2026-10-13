import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="Caerphilly Accounting, home"
      className="inline-flex shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
    >
      <Image
        src={logo}
        alt="Caerphilly Accounting"
        className="h-auto w-[120px] lg:w-[180px]"
        sizes="(min-width: 1024px) 180px, 120px"
        priority
      />
    </Link>
  );
}