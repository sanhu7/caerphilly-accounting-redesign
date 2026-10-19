const registrations = [
  "HMRC-registered agent",
  "Companies House ACSP (AP021767)",
  "AML supervised by HMRC (XFML00000110710)",
];

export default function RegisteredRegulatedSection() {
  return (
    <section
      className="bg-[var(--paper)] px-6 py-section lg:px-12"
      aria-labelledby="registered-regulated-heading"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold tracking-wide text-[var(--accent)]">
          Registered &amp; regulated
        </p>
        <h2
          id="registered-regulated-heading"
          className="mt-3 max-w-3xl text-3xl font-light leading-tight tracking-[-0.02em] text-[var(--ink)] sm:text-4xl"
        >
          Authorised to act for you with HMRC and Companies House.
        </h2>

        <div className="mt-10 grid min-w-0 grid-cols-1 gap-5 md:grid-cols-3">
          {registrations.map((registration) => (
            <article
              key={registration}
              className="min-w-0 rounded-[10px] border border-[var(--line)] bg-[var(--surface)] p-6 text-[var(--ink)]"
            >
              <h3 className="heading-lg break-words">{registration}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
