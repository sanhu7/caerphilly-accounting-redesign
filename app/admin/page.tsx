import Link from "next/link";

export default function AdminPage() {
    return (
        <div className="mx-auto max-w-5xl px-6 py-12">
            <header className="flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-semibold text-[var(--ink)]">
                        Admin panel
                    </h1>
                    <p className="mt-2 text-[var(--muted)]">
                        Manage website services and calculator prices.
                    </p>
                </div>

                <Link
                    href="/"
                    className="rounded-lg border border-[var(--line)] px-4 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                >
                    View website
                </Link>
            </header>

            <p className="mt-6 rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4 text-sm">
                Layout preview only. Administrator login, access protection
                and editing are not implemented yet.
            </p>

            <nav aria-label="Admin navigation" className="mt-8">
                <a
                    href="#admin-overview"
                    aria-current="page"
                    className="inline-block rounded-lg bg-[var(--ink)] px-4 py-2 text-sm text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                >
                    Overview
                </a>
            </nav>

            <section
                id="admin-overview"
                aria-labelledby="overview-heading"
                className="mt-8"
            >
                <h2 id="overview-heading" className="text-xl font-semibold">
                    Overview
                </h2>

                <div className="mt-4 grid gap-6 sm:grid-cols-2">
                    <section className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6">
                        <h3 className="text-lg font-semibold">Services</h3>
                        <p className="mt-2 text-[var(--muted)]">
                            Edit existing service titles, descriptions and details.
                        </p>
                        <p className="mt-4 text-sm text-[var(--muted)]">
                            Editing is not available yet.
                        </p>
                    </section>

                    <section className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6">
                        <h3 className="text-lg font-semibold">Pricing</h3>
                        <p className="mt-2 text-[var(--muted)]">
                            Update the prices used by the fee estimator.
                        </p>
                        <p className="mt-4 text-sm text-[var(--muted)]">
                            Editing is not available yet.
                        </p>
                    </section>
                </div>
            </section>
        </div>
    );
}