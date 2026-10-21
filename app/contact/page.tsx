
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
          </section>
        </div>
      </div>
    </main>
  );
}