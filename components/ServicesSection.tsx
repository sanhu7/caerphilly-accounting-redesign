export default function ServicesSection() {
    return (
        <section aria-labelledby="services-heading"
            className="bg-[var(--paper)] py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="max-w-3xl">
                    <p className="text-base font-semibold text-[var(--ink)]">What we do</p>
                    <h2 id="services-heading"
                        className="mt-3 text-3xl font-light leading-tight text-[var(--ink)] sm:text-4xl lg:text-[2.8rem]"> Everything HMRC and Companies House expect, handled in one place.</h2>
                </div>
            </div>
        </section>
    );
}