import Link from "next/link";
import FeeEstimator from "./FeeEstimator";

const oneOffServices = [
  {
    title: "Capital Gains Tax",
    description: "Pre-disposal calculations and reporting.",
  },
  {
    title: "Landlord Self-Assessment",
    description: "Property income and your annual return.",
  },
  {
    title: "R&D tax reliefs",
    description: "Reviewed as part of your corporation tax work.",
  },
  {
    title: "Cloud accounting setup",
    description: "Software transition and training.",
  },
];

export default function PricingPage() {
  return (
    <main className="bg-[var(--paper)] text-[var(--ink)]">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">
        <nav aria-label="Breadcrumb" className="text-sm">
          <ol className="flex items-center gap-2">
            <li>
              <Link
                href="/"
                className="text-[var(--accent)] hover:underline"
              >
                Home
              </Link>
            </li>

            <li aria-hidden="true" className="text-[var(--muted)]">
              /
            </li>

            <li aria-current="page" className="text-[var(--muted)]">
              Pricing
            </li>
          </ol>
        </nav>

        <header className="mt-8">
          <p className="text-lg font-semibold">Pricing</p>

          <h1 className="mt-6 max-w-4xl text-4xl leading-[1.12] font-normal tracking-tight sm:text-6xl lg:text-7xl">
            Know your monthly fee before we talk.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
            Answer six quick questions and see an estimated monthly fee,
            itemised line by line. Send it to us and we&apos;ll confirm a
            fixed price.
          </p>
        </header>

        <FeeEstimator />

        <section
          aria-labelledby="one-off-heading"
          className="mt-12 pb-12"
        >
          <h2
            id="one-off-heading"
            className="text-2xl font-normal sm:text-3xl"
          >
            One-off work, priced on request
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {oneOffServices.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6"
              >
                <h3 className="text-lg font-semibold">
                  {service.title}
                </h3>

                <p className="mt-3 leading-relaxed text-[var(--muted)]">
                  {service.description}
                </p>

                <p className="mt-3 text-sm text-[var(--accent)]">
                  Priced on request
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}