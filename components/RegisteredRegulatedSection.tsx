const registrations = [
  {
    title: "HMRC-registered agent",
    description:
      "We're authorised to deal with HMRC on your behalf for Self Assessment, VAT, PAYE and Corporation Tax.",
  },
  {
    title: "Companies House ACSP",
    description:
      "As an Authorised Corporate Service Provider (ACSP number AP021767) we can verify the identity of company directors and people with significant control.",
  },
  {
    title: "AML supervised by HMRC",
    description:
      "Our anti-money laundering compliance is supervised by HM Revenue & Customs, registration number XFML00000110710.",
  },
];

export default function RegisteredRegulatedSection() {
  return (
    <section
      className="bg-[var(--paper)] px-6 py-section lg:px-12"
      aria-labelledby="registered-regulated-heading"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-base font-medium text-[var(--ink)]">
          Registered &amp; regulated
        </p>

        <h2
          id="registered-regulated-heading"
          className="mt-5 max-w-[40rem] text-[32px] font-light leading-[1.2] tracking-[-0.02em] text-[var(--ink)] sm:text-[40px] lg:text-[44px]"
        >
          Authorised to act for you with HMRC and Companies House.
        </h2>

        <div className="mt-10 grid min-w-0 grid-cols-1 gap-4 md:grid-cols-3 lg:mt-12">
          {registrations.map(({ title, description }) => (
            <article
              key={title}
              className="min-w-0 rounded-[14px] border border-[var(--line)] bg-[var(--surface)] p-6 text-[var(--ink)]"
            >
              <h3 className="text-lg font-medium leading-snug">
                {title}
              </h3>

              <p className="mt-5 text-base leading-[1.75] text-[var(--ink)] opacity-80">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}