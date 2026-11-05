import Image from "next/image";
import Link from "next/link";

const commitments = [
  "Registered agent with HMRC and Companies House (ACSP)",
  "Anti-money laundering supervision by HMRC",
  "Streamlined procedures and meticulous attention to detail",
  "Modern cloud technology, including FreeAgent",
];

export default function AboutPage() {
  return (
    <>
      {/* Page introduction */}
      <section
        aria-labelledby="about-heading"
        className="bg-white px-4 py-12 text-[var(--ink)] sm:px-6 lg:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 text-sm text-[var(--muted)]"
          >
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
              <li aria-current="page">About</li>
            </ol>
          </nav>

          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
            About
          </p>

          <h1
            id="about-heading"
            className="mt-3 max-w-4xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl"
          >
            A transparent approach to your accounts.
          </h1>

          <p className="mt-4 max-w-4xl text-lg leading-8 text-[var(--ink-2)]">
            Caerphilly Accounting, the trading name of JJBS Bookkeeping
            Solutions Ltd, provides comprehensive bookkeeping, accounting and
            professional services for small and medium enterprises,
            partnerships, trusts and estates, and individuals — including the
            self-employed, subcontractors and VAT-registered businesses.
          </p>
        </div>
      </section>

      {/* Our approach */}
      <section
        aria-labelledby="approach-heading"
        className="bg-[var(--paper)] px-4 py-14 text-[var(--ink)] sm:px-6 lg:py-20"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/about-team.jpg"
              alt="Members of the Caerphilly Accounting team"
              fill
              sizes="(min-width: 1280px) 544px, (min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="min-w-0">
            <h2
              id="approach-heading"
              className="text-2xl font-semibold leading-tight sm:text-3xl"
            >
              Straightforward, not mysterious
            </h2>

            <p className="mt-4 text-lg leading-8 text-[var(--ink-2)]">
              Unlike traditional accounting firms that often cloak their
              processes in mystery, we take a transparent approach. We believe
              you should understand what we do and why we do it. Our aim is to
              simplify the accounting process for you, allowing you to focus
              on what matters most — running your business.
            </p>

            <p className="mt-4 text-base leading-7 text-[var(--ink-2)]">
              We understand that managing your own accounts can be
              overwhelming and time-consuming. That&apos;s where we step in.
              Whether you require monthly or quarterly accounts
              administration, our team is here to streamline the process for
              you, so you can reclaim your time and energy for your core
              business activities.
            </p>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section
        aria-labelledby="services-heading"
        className="bg-white px-4 py-14 text-[var(--ink)] sm:px-6 lg:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
              What we offer
            </p>

            <h2
              id="services-heading"
              className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl"
            >
              A wide range of services, for individuals and limited companies
            </h2>

            <p className="mt-4 text-lg leading-8 text-[var(--ink-2)]">
              From bookkeeping and accounts production to Self-Assessments
              and payroll submissions, we&apos;ve got you covered. Our
              expertise extends to business plan creation, ensuring a
              holistic approach to your financial needs.
            </p>
          </div>
        </div>
      </section>

      {/* Cloud accounting */}
      <section
        aria-labelledby="cloud-heading"
        className="bg-[var(--paper)] px-4 py-14 text-[var(--ink)] sm:px-6 lg:py-20"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--line)] bg-white lg:order-2">
            <Image
              src="/cloud-dashboard.png"
              alt="Cloud accounting dashboard used to share financial data"
              fill
              sizes="(min-width: 1280px) 544px, (min-width: 1024px) 50vw, 100vw"
              className="object-contain p-4 sm:p-6"
            />
          </div>

          <div className="min-w-0 lg:order-1">
            <h2
              id="cloud-heading"
              className="text-2xl font-semibold leading-tight sm:text-3xl"
            >
              Already have an accountant? We fit around you
            </h2>

            <p className="mt-4 text-lg leading-8 text-[var(--ink-2)]">
              If you&apos;re already working with an accountant, fret not —
              we seamlessly integrate with your existing systems, ensuring a
              smooth transition. Our partnership with FreeAgent and use of
              cloud-based accounting software allow you to access your
              financial data conveniently, anytime, anywhere.
            </p>

            <p className="mt-4 text-base leading-7 text-[var(--ink-2)]">
              Whether your business is well-established or just starting out,
              efficient accounting is crucial for sustained growth and
              success. Keeping your books in top shape year-round not only
              ensures smooth operations but also lays the foundation for
              informed business decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Commitment and contact */}
      <section
        aria-labelledby="commitment-heading"
        className="bg-white px-4 py-14 text-[var(--ink)] sm:px-6 lg:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
              Our commitment
            </p>

            <h2
              id="commitment-heading"
              className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl"
            >
              Peace of mind, as your business evolves
            </h2>

            <p className="mt-4 text-lg leading-8 text-[var(--ink-2)]">
              At Caerphilly Accounting, we&apos;re committed to providing you
              with peace of mind through our dedicated and high-performance
              accounting services. As your business evolves, we&apos;ll
              continue to adapt and provide viable solutions to meet your
              evolving needs. Give yourself the gift of reliable accounting
              support — partner with us today and experience the difference
              firsthand.
            </p>
          </div>

          <ul className="mt-6 max-w-2xl space-y-4">
            {commitments.map((commitment) => (
              <li key={commitment} className="flex items-start gap-3">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 size-5 shrink-0 text-[var(--accent)]"
                >
                  <path d="m5 12 4 4L19 6" />
                </svg>

                <span className="text-base leading-7 text-[var(--ink-2)]">
                  {commitment}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link
              href="/contact"
              className="btn-primary inline-flex max-w-full items-center justify-center text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
            >
              Talk to us about your accounts
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}