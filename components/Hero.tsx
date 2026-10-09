import Image from "next/image";
import Link from "next/link";


export default function Hero() {
    return (
        <section className="relative isolate overflow-hidden bg-[var(--hero)] text-[var(--hero-ink)]">
            <Image
                src="/hero.jpg"
                alt=""
                fill
                priority
                sizes="100vw"
                className="-z-20 object-cover"
            />
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--hero)] via-[var(--hero)]/85 to-[var(--hero)]/60"
            />
            <div className="mx-auto grid max-w-7xl items-center gap-6 px-6 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:py-16">
                <div>
                    <p className="text-sm font-semibold text-white sm:text-base">
                        Accountants in Caerphilly
                    </p>
                    <h1 className=" mt-4 max-w-3xl text-4xl font-light leading-[1.1] tracking-[-0.02em] sm:text-5xl lg:text-6xl">
                        Your accounts sorted,{" "}
                        <span className="text-[var(--hero-accent)]">
                            and your fee known upfront.
                        </span>
                    </h1>

                    <p className="mt-8 max-w-xl text-base leading-8 text-[var(--hero-muted)] sm:text-lg">
                        Bookkeeping, VAT, payroll, corporation tax and Making Tax Digital for
                        small businesses, sole traders and landlords, with clear monthly pricing
                        you can check before we speak.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link
                            href="/contact"
                            className="rounded-xl bg-[#1592A1] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#117A87] focus:outline-none focus:ring-2 focus:ring-[#1592A1] focus:ring-offset-2"
                        >
                            Book a consultation
                        </Link>

                        <Link
                            href="/services"
                            className="rounded-xl border border-[#1592A1] px-5 py-3 text-sm font-medium text-[#1592A1] transition hover:bg-[#1592A1]/10 focus:outline-none focus:ring-2 focus:ring-[#1592A1] focus:ring-offset-2"
                        >
                            Explore our services
                        </Link>
                    </div>
                </div>


            </div>
        </section>
    );
}