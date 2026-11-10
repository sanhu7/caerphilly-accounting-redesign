import Link from "next/link";
import type { Service } from "@/types";
import { services } from "@/data/services";
import DigitalSolutionsSections from "@/components/DigitalSolutionsSections";

export default function ServiceDetailPage({ service }: { service: Service }) {
  if (service.detail) {
    const relatedServices = services
      .filter((relatedService) => relatedService.slug !== service.slug)
      .slice(0, 5);

    return (
      <div className="bg-white px-4 py-10 text-[var(--ink)] sm:px-6 sm:py-14 lg:py-20">
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
              <li>
                <Link
                  href="/services"
                  className="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                >
                  Services
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">{service.title}</li>
            </ol>
          </nav>

          <header className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
              {service.title}
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              {service.headline}
            </h1>
            <p className="mt-4 text-lg leading-8 text-[var(--ink-2)]">
              {service.detail.introduction}
            </p>
          </header>

          {service.slug === "digital-solutions" && (
            <DigitalSolutionsSections />
          )}

          <section aria-labelledby="service-benefits-heading" className="mt-10 sm:mt-14">
            <div className="rounded-2xl border border-[var(--line)] bg-white p-5 shadow-sm sm:p-8 lg:p-10">
              <h2 id="service-benefits-heading" className="text-2xl font-semibold sm:text-3xl">
                Key service benefits
              </h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {service.detail.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="border-l-2 border-[var(--accent)] pl-4 text-base leading-7 text-[var(--ink-2)]"
                  >
                    {benefit}
                  </li>
                ))}
              </ul>

              <p className="mt-8 border-t border-[var(--line)] pt-6 text-base leading-8 text-[var(--ink-2)] sm:mt-10 sm:pt-8">
                {service.detail.longerDescription}
              </p>

              <div className="mt-8 flex flex-col gap-5 border-t border-[var(--line)] pt-6 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:pt-8">
                <p className="max-w-2xl text-lg font-semibold leading-7 text-[var(--ink)]">
                  {service.detail.cta}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/pricing"
                    className="btn-primary inline-flex min-h-12 items-center justify-center text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                  >
                    Estimate my fee
                  </Link>
                  <Link
                    href="/contact"
                    className="btn-secondary inline-flex min-h-12 items-center justify-center text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section aria-labelledby="related-services-heading" className="mt-12 sm:mt-16">
            <h2 id="related-services-heading" className="text-2xl font-semibold">
              Related services
            </h2>
            <ul className="mt-5 flex flex-wrap gap-3">
              {relatedServices.map((relatedService) => (
                <li key={relatedService.slug}>
                  <Link
                    href={`/services/${relatedService.slug}`}
                    className="inline-flex min-h-11 items-center rounded-full border border-[var(--line)] px-4 py-2 text-sm font-medium text-[var(--ink-2)] underline-offset-4 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                  >
                    {relatedService.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    );
  }

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
