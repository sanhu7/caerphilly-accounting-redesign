import Image from "next/image";
import Link from "next/link";
import { headerCta } from "@/data/navigation";


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

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                        <Link
                            href={headerCta.href}
                            className="inline-flex items-center justify-center rounded-[6px] bg-white px-7 py-4 text-sm font-semibold uppercase tracking-widest text-[var(--ink)] transition-colors hover:bg-[var(--accent-soft)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                        >
                            Estimate my monthly fee
                        </Link>

                        <a
                            href="tel:+447494336569"
                            className="inline-flex items-center justify-center rounded-[6px] border border-white/80 px-7 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                        >
                            Call 07494 336 569
                        </a>
                    </div>
                    <ul className="mt-8 flex flex-wrap gap-3 text-sm text-[var(--hero-muted)]">
                        {["HMRC-registered agent", "Companies House ACSP", "AML supervised by HMRC"].map(
                            (badge) => (
                                <li
                                    key={badge}
                                    className="rounded-full border border-white/25 bg-white/5 px-4 py-1.5"
                                >
                                    {badge}
                                </li>
                            )
                        )}
                    </ul>
                </div>


            </div>
        </section>
    );
}