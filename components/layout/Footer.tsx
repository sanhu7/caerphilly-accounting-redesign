import Link from "next/link";
import { services } from "@/data/services";
import Image from "next/image";
import footerLogo from "@/public/logo.png";
import xeroLogo from "@/public/xero.png";
import freeAgentLogo from "@/public/freeagent.png";
import quickBooksLogo from "@/public/quickbooks.png";

export default function Footer() {
    return (
        <footer className="bg-[var(--ink)] text-sm leading-6 text-[var(--footer-text)]">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12 min-w-0">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                    <div className="min-w-0">
                        <Link
                            href="/"
                            aria-label="Caerphilly Accounting, home"
                            className="inline-flex max-w-full rounded-[10px] bg-white p-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                        >
                            <Image
                                src={footerLogo}
                                alt="Caerphilly Accounting"
                                className="h-auto w-[200px] max-w-full"
                                sizes="200px"
                            />
                        </Link>

                        <p className="mt-6">Bookkeeping, tax and compliance for small businesses, sole traders
                            and landlords.</p>

                        <address className="mt-4 not-italic">
                            <span>Registered office</span>
                            <br />
                            32 Tridwr Road
                            <br />
                            Caerphilly, Gwent
                            <br />
                            CF83 4DN
                        </address>
                    </div>

                    <nav aria-label="Footer services navigation" className="min-w-0">
                        <h2 className="font-semibold text-white">
                            Services
                        </h2>

                        <ul className="mt-3 space-y-2">
                            {services.map((service) => (
                                <li key={service.slug}>
                                    <Link
                                        href={`/services/${service.slug}`}
                                        className="hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                                    >
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <nav aria-label="Footer company navigation">
                        <h2 className="font-semibold text-white">Company</h2>
                        <ul className="mt-3 space-y-2">
                            <li><Link href="/pricing">Pricing &amp; fee estimator</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </nav>

                    <div className="min-w-0">
                        <h2 className="font-semibold text-white">
                            Get in touch
                        </h2>

                        <div className="mt-4 flex flex-col items-start gap-3">
                            <a
                                href="tel:+447494336569"
                                className="inline-flex max-w-full items-center justify-center rounded-md bg-white px-4 py-3 text-center text-xs font-semibold uppercase tracking-widest text-[var(--ink)] transition-colors hover:bg-[var(--accent-soft)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                            >
                                Call 07494 336 569
                            </a>

                            <a
                                href="mailto:info@caerphillyaccounting.co.uk"
                                className="inline-flex items-center justify-center rounded-md border border-white/80 px-4 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                            >
                                Email us
                            </a>
                        </div>

                        <a
                            href="mailto:info@caerphillyaccounting.co.uk"
                            className="mt-3 block break-words hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                        >
                            info@caerphillyaccounting.co.uk
                        </a>

                        <p className="mt-4">
                            Monday to Friday, 09:00–17:00
                        </p>
                    </div>
                </div>

                <div className="mt-10 min-w-0">
                    <h2 className="font-semibold text-white">
                        Partnering with
                    </h2>

                    <ul className="mt-4 flex flex-wrap gap-5">
                        {[
                            { name: "Xero", image: xeroLogo },
                            { name: "FreeAgent", image: freeAgentLogo },
                            { name: "QuickBooks", image: quickBooksLogo },
                        ].map((partner) => (
                            <li
                                key={partner.name}
                                className="flex h-[72px] w-[150px] max-w-full items-center justify-center rounded-[6px] bg-white p-3"
                            >
                                <Image
                                    src={partner.image}
                                    alt={partner.name}
                                    className="h-full w-full object-contain"
                                    sizes="126px"
                                />
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-8 space-y-3 text-xs leading-5">
                    <p>
                        Caerphilly Accounting is a trading name of JJBS Bookkeeping
                        Solutions Ltd, registered in England and Wales, company number
                        09862331. Registered office: 32 Tridwr Road, Caerphilly, Gwent,
                        CF83 4DN.
                    </p>

                    <p>
                        Supervised for anti-money laundering by HMRC — registration
                        XFML00000110710.
                    </p>

                    <ul>
                        <li>HMRC-registered agent</li>
                        <li>
                            Companies House Authorised Corporate Service Provider —
                            ACSP number AP021767
                        </li>
                        <li>ICO registration ZA243622</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}