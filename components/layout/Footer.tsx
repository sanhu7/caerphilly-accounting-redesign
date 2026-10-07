import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[var(--ink)] text-sm leading-6 text-[var(--footer-text)]">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12 min-w-0">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div className="min-w-0">
                        <h2 className="text-lg font-semibold text-white">Caerphilly Accounting</h2>

                        <p className="mt-3">Bookkeeping, tax and compliance for small businesses, sole traders
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
                    <h2 className="font-semibold text-white"> Partnering with</h2>


                    <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 font-medium">
                        <li>Xero</li>
                        <li> FreeAgent</li>
                        <li> QuickBooks</li>
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