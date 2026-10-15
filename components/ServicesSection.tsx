const services = [
  {
    category: "Bookkeeping",
    title: "Accurate Bookkeeping for Commercial Growth",
    description:
      "Up-to-date records, reconciliations and organised receipts, so your numbers are always ready.",
  },
  {
    category: "VAT Returns",
    title: "Maximising Efficiency on VAT Returns",
    description:
      "Registration, checked and submitted returns, and practical help with VAT queries.",
  },
  {
    category: "Payroll",
    title: "Reliable, RTI-Compliant Payroll",
    description:
      "PAYE setup, regular pay runs and RTI reporting, handled every month.",
  },
  {
    category: "Corporation Tax",
    title: "Strategic Corporation Tax Planning",
    description:
      "CT600 returns with fully tagged iXBRL computations, capital allowances and R&D review.",
  },
];

export default function ServicesSection() {
  return (
    <section
      aria-labelledby="services-heading"
      className="bg-[var(--paper)] py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-base font-semibold text-[var(--ink)]">
            What we do
          </p>

          <h2
            id="services-heading"
            className="mt-3 text-3xl font-light leading-tight text-[var(--ink)] sm:text-4xl lg:text-[2.8rem]"
          >
            Everything HMRC and Companies House expect, handled in one place.
          </h2>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-gray-300 bg-gray-300">
          <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.category}
                className="bg-white p-6 lg:p-7"
              >
                <p className="text-xs font-medium uppercase tracking-widest text-gray-600">
                  {service.category}
                </p>

                <h3 className="mt-4 text-xl font-medium leading-snug text-[var(--ink)]">
                  {service.title}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-gray-700">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}