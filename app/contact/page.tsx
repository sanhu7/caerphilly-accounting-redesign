import { services } from "@/data/services";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="bg-[var(--paper)] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <h1 className="text-4xl font-light leading-tight text-[var(--ink)] sm:text-5xl lg:text-6xl">
          Let&apos;s talk about your accounts.
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-gray-600">
          Send a message or call. If you&apos;d like a price first, use the fee
          estimator.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-12 lg:grid-cols-2 lg:gap-14">
          <section
            aria-label="Contact form"
            className="rounded-2xl border border-gray-300 bg-white p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block font-semibold text-[var(--ink)]"
                >
                  Name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="mt-2 w-full rounded-xl border border-gray-300 bg-[var(--paper)] px-4 py-3 text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c79529]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block font-semibold text-[var(--ink)]"
                >
                  Email
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-2 w-full rounded-xl border border-gray-300 bg-[var(--paper)] px-4 py-3 text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c79529]"
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="contact-service"
                className="block font-semibold text-[var(--ink)]"
              >
                Service
              </label>

              <select
                id="contact-service"
                name="service"
                defaultValue="general-enquiry"
                className="mt-2 w-full rounded-xl border border-gray-300 bg-[var(--paper)] px-4 py-3 text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c79529]"
              >
                <option value="general-enquiry">General enquiry</option>

                {services.map((service) => (
                  <option key={service.slug} value={service.slug}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-6">
              <label
                htmlFor="contact-message"
                className="block font-semibold text-[var(--ink)]"
              >
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                className="mt-2 w-full resize-y rounded-xl border border-gray-300 bg-[var(--paper)] px-4 py-3 text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c79529]"
              />
            </div>
            <div className="mt-6 flex items-start gap-3">
              <input
                id="contact-consent"
                name="consent"
                type="checkbox"
                required
                className="mt-1 h-5 w-5 shrink-0 accent-[#188795] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c79529]"
              />

              <div className="text-sm leading-relaxed text-gray-600">
                <label htmlFor="contact-consent">
                  I agree to Caerphilly Accounting using these details to respond to my
                  enquiry, as described in the{" "}
                </label>

                <Link
                  href="/privacy"
                  className="text-[#188795] underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  privacy policy
                </Link>
                .
              </div>
            </div>

            <button
              type="button"
              className="mt-6 rounded bg-[var(--ink)] px-7 py-4 text-sm font-semibold uppercase tracking-widest text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c79529]"
            >
              Send message
            </button>

          </section>

          <section aria-label="Contact information" className="space-y-8">
            <div>
              <h2 className="text-lg font-semibold text-[var(--ink)]">
                Phone
              </h2>

              <a
                href="tel:+447494336569"
                className="mt-3 inline-block rounded bg-[var(--ink)] px-7 py-4 text-sm font-semibold uppercase tracking-widest text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c79529]"
              >
                Call 07494 336 569
              </a>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--ink)]">
                Email
              </h2>

              <a
                href="mailto:info@caerphillyaccounting.co.uk"
                className="mt-3 inline-block rounded border border-[var(--ink)] px-7 py-4 text-sm font-semibold uppercase tracking-widest text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c79529]"
              >
                Email us
              </a>

              <p className="mt-3 break-words text-base text-[var(--ink)]">
                info@caerphillyaccounting.co.uk
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--ink)]">
                Registered office
              </h2>

              <address className="mt-3 text-base not-italic leading-relaxed text-[var(--ink)]">
                32 Tridwr Road, Caerphilly, Gwent, CF83 4DN
              </address>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--ink)]">
                Follow us
              </h2>

              <a
                href="https://www.linkedin.com/company/jjbs-bookkeeping-solutions-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-base text-[#188795] underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                LinkedIn <span aria-hidden="true">→</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--ink)]">
                Opening hours
              </h2>

              <p className="mt-3 text-base leading-relaxed text-[var(--ink)]">
                Monday to Friday, 9:00–17:00
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--ink)]">
                Book a call
              </h2>

              <p className="mt-3 text-base text-gray-600">
                Online booking link coming soon.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}