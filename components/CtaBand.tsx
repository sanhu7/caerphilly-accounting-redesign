import ButtonLink from "@/components/ui/ButtonLink";

export default function CtaBand() {
  return (
    <section className="bg-brand-lighter px-6 py-12 sm:py-16" aria-labelledby="cta-band-heading">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
        <h2
          id="cta-band-heading"
          className="max-w-3xl text-2xl font-light leading-tight tracking-[-0.02em] text-brand-text sm:text-3xl lg:text-4xl"
        >
          See your monthly fee before you pick up the phone.
        </h2>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
          <ButtonLink href="/pricing">Use the fee estimator →</ButtonLink>
          <a
            href="tel:07494336569"
            className="inline-flex items-center justify-center rounded-md border border-brand-dark-teal bg-brand-white px-5 py-2.5 text-sm font-semibold text-brand-dark-teal transition-colors hover:bg-brand-mint focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-dark-teal"
          >
            Call 07494 336 569
          </a>
        </div>
      </div>
    </section>
  );
}
