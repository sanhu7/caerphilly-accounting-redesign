import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="bg-[var(--hero)] text-[var(--hero-ink)]">
            <div className="mx-auto grid max-w-7xl items-center gap-6 px-6 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:py-16">
                <div>
                    <h1 className="max-w-3xl text-4xl font-light leading-[1.1] tracking-[-0.02em] sm:text-5xl lg:text-6xl">
                        Your accounts sorted,{" "}
                        <span className="text-[var(--hero-accent)]">
                            and your fee known upfront.
                        </span>
                    </h1>

                    <p className="mt-10 max-w-md text-sm font-normal leading-5text-[var(--hero-muted)]">
                        Practical accounting, tax and business support for small businesses,
                        start-ups, sole traders and limited companies across Caerphilly and beyond.
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

                <div className="mt-8 w-full lg:mt-0 lg:-translate-x-12 lg:translate-y-10">

                    <Image
                        src="/images/hero-accounting.png"
                        alt="Illustration of a business owner reviewing accounting information"
                        width={800}
                        height={620}
                        priority
                        className="h-auto w-full lg:scale-125"

                    />
                </div>
            </div>
        </section>
    );
}