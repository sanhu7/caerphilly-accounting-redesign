import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function ButtonLink({ href, children, className = "", onClick }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center border-2 border-black bg-brand-light px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-white focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-black ${className}`}
    >
      {children}
    </Link>
  );
}