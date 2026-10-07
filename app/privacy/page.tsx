import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy policy | Caerphilly Accounting",
    description: "How Caerphilly Accounting handles your personal data.",
};

const h2 = "mt-10 text-xl font-semibold text-[var(--ink)]";
const p = "mt-4";
const link = "text-[var(--accent)] underline hover:no-underline";

export default function PrivacyPage() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-12 leading-7 text-[var(--ink-2)]">
            <nav aria-label="Breadcrumb" className="text-sm text-[var(--muted)]">
                <Link href="/" className="hover:underline">Home</Link>
                <span aria-hidden="true"> / </span>
                <span aria-current="page">Privacy policy</span>
            </nav>

            <h1 className="mt-6 text-4xl font-bold text-[var(--ink)]">
                Privacy policy
            </h1>
            <p className="mt-3 text-lg">How we handle your personal data.</p>
            <p className="mt-2 text-sm text-[var(--muted)]">
                Reviewed 2026 · [confirm date before publishing]
            </p>

            <p className="mt-8">
                Caerphilly Accounting is a trading name of JJBS Bookkeeping Solutions
                Ltd (&quot;we&quot;, &quot;us&quot;), an accounting and bookkeeping
                practice based in Caerphilly, South Wales. This policy explains what
                personal data we collect through this website, why, and what rights you
                have over it. It&apos;s written to reflect the UK GDPR and the Data
                Protection Act 2018.
            </p>

            <h2 className={h2}>Who we are</h2>
            <p className={p}>
                The data controller is JJBS Bookkeeping Solutions Ltd, company number
                09862331, registered office 32 Tridwr Road, Caerphilly, Gwent, CF83 4DN.
            </p>
            <p className={p}>
                We are registered with the Information Commissioner&apos;s Office
                (ICO), registration number ZA243622. Data protection in the UK is
                regulated by the ICO.
            </p>

            <h2 className={h2}>What we collect, and why</h2>
            <p className={p}>
                Visiting this site alone doesn&apos;t reveal anything about you to us.
                We only collect personal data you choose to give us — for example,
                through the fee estimator or contact form (your name, business name,
                email, phone number and enquiry details), or if you apply for a role
                with us.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                    <strong>To respond to an enquiry or quote request:</strong> the
                    details you submit, used only to reply to you.
                </li>
                <li>
                    <strong>To act as your accountant:</strong> once you become a client,
                    further personal and financial information is collected under a
                    separate letter of engagement, not this website.
                </li>
                <li>
                    <strong>To meet legal obligations:</strong> including our
                    anti-money laundering duties as a firm supervised by HMRC.
                </li>
            </ul>
            <p className={p}>
                We do not collect special category data (such as health, ethnicity or
                political opinions) through this site, and we don&apos;t ask for it
                here.
            </p>

            <h2 className={h2}>Cookies and analytics</h2>
            <p className={p}>
                This site does not currently set cookies or use analytics such as
                Google Analytics. [Update this section immediately if that changes — a
                cookie banner and consent mechanism would then be required.]
            </p>

            <h2 className={h2}>Sharing your information</h2>
            <p className={p}>
                We don&apos;t sell or pass on your details for marketing by other
                organisations. We may share it with our own professional advisers,
                software providers who process data on our behalf (such as our practice
                and cloud accounting software), or where we&apos;re required to by law
                or a regulator.
            </p>

            <h2 className={h2}>How long we keep it</h2>
            <p className={p}>
                Enquiry details are kept only as long as needed to deal with your
                enquiry. Client records are retained in line with our professional and
                HMRC record-keeping obligations. [Add specific retention periods.]
            </p>

            <h2 className={h2}>Your rights</h2>
            <p className={p}>
                Under UK data protection law you have the right to ask us for a copy of
                the personal data we hold about you, to correct it if it&apos;s wrong,
                to ask us to delete it, and to object to how we use it. To exercise any
                of these, email{" "}
                <a href="mailto:info@caerphillyaccounting.co.uk" className={link}>
                    info@caerphillyaccounting.co.uk
                </a>
                . If you&apos;re not satisfied with our response, you can complain to
                the ICO at{" "}
                <a href="https://ico.org.uk" className={link}>ico.org.uk</a>.
            </p>

            <h2 className={h2}>Children</h2>
            <p className={p}>
                This site is not directed at children, and we don&apos;t knowingly
                collect personal data from anyone under 13.
            </p>

            <h2 className={h2}>Changes to this policy</h2>
            <p className={p}>
                We may update this policy from time to time; the current version always
                applies. Please check back periodically.
            </p>

            <h2 className={h2}>Contact us</h2>
            <p className={p}>
                Questions about this policy:{" "}
                <a href="mailto:info@caerphillyaccounting.co.uk" className={link}>
                    info@caerphillyaccounting.co.uk
                </a>{" "}
                or call{" "}
                <a href="tel:+447494336569" className={link}>07494 336 569</a>.
            </p>
        </main>
    );
}