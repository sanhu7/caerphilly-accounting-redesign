import Link from "next/link";
import { services } from "@/data/services";

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
                                key={service.slug}
                                className="bg-white p-6 transition-colors duration-200 hover:bg-[#e2f1f3] lg:p-7"
                            >
                                <p className="text-xs font-medium uppercase tracking-widest text-gray-600">
                                    {service.title}
                                </p>

                                <h3 className="mt-4 text-xl font-medium leading-snug text-[var(--ink)]">
                                    {service.headline}
                                </h3>

                                <p className="mt-4 text-base leading-relaxed text-gray-700">
                                    {service.description}
                                </p>

                                <Link
                                    href={`/services/${service.slug}`}
                                    aria-label={`Read more about ${service.title}`}
                                    className="mt-4 inline-block font-semibold text-[#188795] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                                >
                                    Read more <span aria-hidden="true">→</span>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}