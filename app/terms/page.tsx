import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Terms of website use | Caerphilly Accounting",
    description: "The terms that apply when you use the Caerphilly Accounting website.",
};

const h2 = "mt-10 text-xl font-semibold text-[var(--ink)]";
const p = "mt-4";
const link = "text-[var(--accent)] underline hover:no-underline";

export default function TermsPage() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-12 leading-7 text-[var(--ink-2)]">
            <nav aria-label="Breadcrumb" className="text-sm text-[var(--muted)]">
                <Link href="/" className="hover:underline">Home</Link>
                <span aria-hidden="true"> / </span>
                <span aria-current="page">Terms of website use</span>
            </nav>

            <h1 className="mt-6 text-4xl font-bold text-[var(--ink)]">
                Terms of website use
            </h1>
            <p className="mt-3 text-lg">Please read before using this site.</p>
            <p className="mt-2 text-sm text-[var(--muted)]">
                Reviewed 2026 · [confirm date before publishing]
            </p>

            <p className="mt-8">
                These terms of use, together with our{" "}
                <Link href="/privacy" className={link}>privacy policy</Link>, govern
                your use of{" "}
                <a href="https://www.caerphillyaccounting.co.uk" className={link}>
                    www.caerphillyaccounting.co.uk
                </a>{" "}
                (&quot;our site&quot;), whether as a visitor or registered user. By
                using our site you accept these terms; if you don&apos;t agree to them,
                please don&apos;t use the site.
            </p>

            <h2 className={h2}>Who we are</h2>
            <p className={p}>
                Our site is operated by Caerphilly Accounting, a trading name of JJBS
                Bookkeeping Solutions Ltd, a limited company registered in England and
                Wales, company number 09862331. Registered office: 32 Tridwr Road,
                Caerphilly, Gwent, CF83 4DN.
            </p>

            <h2 className={h2}>Changes to these terms and to the site</h2>
            <p className={p}>
                We may revise these terms, or update the site&apos;s content, at any
                time by amending this page. Content may be out of date at any given
                time, and we&apos;re under no obligation to update it. We don&apos;t
                guarantee the site will be available or uninterrupted, and may suspend
                or withdraw it without notice.
            </p>

            <h2 className={h2}>No reliance on information</h2>
            <p className={p}>
                Content on this site is provided for general information only and
                isn&apos;t intended as advice on which you should rely. Please obtain
                professional advice — for example, through a consultation with us —
                before acting or refraining from acting on anything you read here.
            </p>

            <h2 className={h2}>Intellectual property</h2>
            <p className={p}>
                We own or are licensed to use all intellectual property rights in this
                site and its content. You may view pages, and print or download
                extracts for your own personal, non-commercial use, but you must not
                modify anything you&apos;ve printed or downloaded, and our status as the
                source of the content must always be acknowledged. You must not use
                content from this site commercially without our permission.
            </p>

            <h2 className={h2}>Acceptable use</h2>
            <p className={p}>
                You must not misuse this site by introducing viruses or other malicious
                material, or attempt to gain unauthorised access to it or the systems it
                runs on. Doing so may be a criminal offence under the Computer Misuse
                Act 1990, and we&apos;ll report it to the relevant authorities.
            </p>

            <h2 className={h2}>Linking to our site</h2>
            <p className={p}>
                You may link to our homepage in a way that&apos;s fair and doesn&apos;t
                damage or take unfair advantage of our reputation, but you mustn&apos;t
                imply an endorsement that doesn&apos;t exist, or frame our site within
                another website.
            </p>

            <h2 className={h2}>Limitation of liability</h2>
            <p className={p}>
                Nothing here excludes or limits our liability where it would be
                unlawful to do so — for example, for death or personal injury caused by
                our negligence, or for fraud. Otherwise, to the extent the law allows,
                we exclude liability for loss arising from your use of, or inability to
                use, this site. Our liability to clients for the accounting, tax and
                bookkeeping services we actually provide is instead set out in your
                letter of engagement.
            </p>

            <h2 className={h2}>Third-party links</h2>
            <p className={p}>
                Where we link to other websites, this is for your information only — we
                don&apos;t control, and aren&apos;t responsible for, their content.
            </p>

            <h2 className={h2}>Governing law</h2>
            <p className={p}>
                These terms are governed by the law of England and Wales, and any
                dispute will be subject to the non-exclusive jurisdiction of the courts
                of England and Wales (or, where you&apos;re a resident of Scotland or
                Northern Ireland, you may also bring proceedings there).
            </p>

            <h2 className={h2}>Contact us</h2>
            <p className={p}>
                Questions about these terms:{" "}
                <a href="mailto:info@caerphillyaccounting.co.uk" className={link}>
                    info@caerphillyaccounting.co.uk
                </a>
                .
            </p>
        </main>
    );
}