
export default function CtaBand() {
  const buttonClasses =
    "inline-flex min-h-12 w-full items-center justify-center rounded-[4px] border px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.12em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-dark-teal sm:w-auto";

  return (
    <section
      className="bg-brand-lighter px-6 py-12 sm:py-16 lg:px-12"
      aria-labelledby="cta-band-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="cta-band-heading"
          className="text-2xl font-light leading-tight tracking-[-0.02em] text-brand-text sm:text-3xl lg:text-[34px]"
        >
          See your monthly fee before you pick up the phone.
        </h2>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="/pricing"
            className={`${buttonClasses} border-[#0f8998] bg-[#0f8998] text-white hover:border-[#159eae] hover:bg-[#159eae] active:border-[#0f8998] active:bg-[#0f8998]`}
          >
            Use the fee estimator →
          </a>
          <a
            href="tel:07494336569"
            className={`${buttonClasses} border-[#0f8998] bg-white text-black hover:bg-[#d9f1f3]`}
          >
            Call 07494 336 569
          </a>
        </div>
      </div>
    </section>
  );
}