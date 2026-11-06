import Link from "next/link";
import type { Service } from "@/types";

export default function ServiceDetailPage({ service }: { service: Service }) {
  return (
    <section
      aria-labelledby="service-heading"
      className="bg-white px-4 py-12 text-[var(--ink)] sm:px-6 lg:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[var(--muted)]">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link
                href="/"
                className="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">{service.title}</li>
          </ol>
        </nav>

        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
          {service.title}
        </p>
        <h1
          id="service-heading"
          className="mt-3 max-w-4xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl"
        >
          {service.headline}
        </h1>
        <p className="mt-4 max-w-4xl text-lg leading-8 text-[var(--ink-2)]">
          {service.description}
        </p>
        <Link
          href="/contact"
          className="btn-primary mt-8 inline-flex max-w-full items-center justify-center text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
        >
          Contact us about {service.title.toLowerCase()}
        </Link>
      </div>
    </section>
  );
}
