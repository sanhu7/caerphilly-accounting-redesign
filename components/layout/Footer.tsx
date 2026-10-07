import Link from "next/link";

export default function Footer() {
    return (
        <footer className="text-sm leading-6">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <h2 className="text-lg font-semibold">Caerphilly Accounting</h2>

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
                        <h2 className="font-semibold">Company</h2>
                        <ul className="mt-3 space-y-2">
                            <li><Link href="/pricing">Pricing &amp; fee estimator</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </nav>

                    <div className="min-w-0">
                        <h2 className="font-semibold">Get in touch</h2>

                        <ul className="mt-3 space-y-2">
                            <li>
                                <a href="tel:+447494336569">
                                    Call 07494 336 569
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@caerphillyaccounting.co.uk" className="break-words">
                                    info@caerphillyaccounting.co.uk
                                </a>
                            </li>
                        </ul>

                        <p className="mt-4">Monday to Friday, 09:00–17:00</p>
                    </div>
                </div>

                <div className="mt-10">
                    <h2 className="font-semibold"> Partnering with</h2>

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