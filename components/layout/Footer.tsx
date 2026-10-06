import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <div>
                <h2>Caerphilly Accounting</h2>

                <p>Bookkeeping, tax and compliance for small businesses, sole traders
                    and landlords.</p>

                <address className="not-italic">
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
                <h2>Company</h2>
                <ul>
                    <li><Link href="/pricing">Pricing &amp; fee estimator</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
            <div>
                <h2>Get in touch</h2>

                <ul>
                    <li>
                        <a href="tel:+447494336569">
                            Call 07494 336 569
                        </a>
                    </li>
                    <li>
                        <a href="mailto:info@caerphillyaccounting.co.uk">
                            info@caerphillyaccounting.co.uk
                        </a>
                    </li>
                </ul>

                <p>Monday to Friday, 09:00–17:00</p>
            </div>
            <div>
                <h2> Partnering with</h2>

                <ul>
                    <li>Xero</li>
                    <li> FreeAgent</li>
                    <li> QuickBooks</li>
                </ul>
            </div>

        </footer>
    );
}