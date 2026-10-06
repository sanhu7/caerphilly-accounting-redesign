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

        </footer>
    );
}