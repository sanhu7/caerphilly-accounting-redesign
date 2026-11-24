import Link from "next/link";

const adminAreas = [
    {
        title: "Services",
        description:
            "Manage service titles, descriptions and details.",
        status: "Editing is not available yet.",
    },
    {
        title: "Pricing",
        description:
            "Manage the prices used by the fee estimator.",
        status: "Editing is not available yet.",
    },
    {
        title: "Contact enquiries",
        description:
            "Review and manage enquiries submitted through the website.",
        status: "Enquiry management is not available yet.",
    },
];

export default function AdminPage() {
    return (
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
            <header className="flex flex-wrap items-start justify-between gap-6">
                <div>
                    <p className="text-sm font-medium text-[var(--muted)]">
                        Website administration
                    </p>

                    <h1 className="mt-2 text-3xl font-semibold text-[var(--ink)]">
                        Admin dashboard
                    </h1>

                    <p className="mt-3 max-w-2xl text-[var(--muted)]">
                        Manage website services, calculator prices and contact
                        enquiries.
                    </p>
                </div>

                <Link
                    href="/"
                    className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[var(--line)] px-4 py-2 text-sm font-medium text-[var(--ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                >
                    View website
                </Link>
            </header>

            <aside
                aria-label="Implementation status"
                className="mt-8 rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4 text-sm text-[var(--ink)]"
            >
                <p className="font-semibold">Layout preview only</p>

                <p className="mt-2">
                    Administrator login, access protection, logout and editing
                    are not implemented in this preview. Do not use this page
                    for sensitive information.
                </p>
            </aside>

            <div className="mt-8 grid gap-8 lg:grid-cols-[14rem_minmax(0,1fr)]">
                <nav
                    aria-label="Admin navigation"
                    className="self-start rounded-2xl border border-[var(--line)] p-4"
                >
                    <p className="mb-3 px-3 text-sm font-semibold text-[var(--ink)]">
                        Administration
                    </p>

                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="/admin"
                                aria-current="page"
                                className="flex min-h-11 items-center rounded-lg bg-[var(--ink)] px-3 py-2 text-sm font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                            >
                                Overview
                            </Link>
                        </li>

                        {adminAreas.map((area) => (
                            <li key={area.title}>
                                <span className="block rounded-lg px-3 py-2 text-sm text-[var(--muted)]">
                                    <span className="block">{area.title}</span>
                                    <span className="mt-1 block text-xs">
                                        Not available yet
                                    </span>
                                </span>
                            </li>
                        ))}
                    </ul>
                </nav>

                <section
                    aria-labelledby="overview-heading"
                    className="min-w-0"
                >
                    <h2
                        id="overview-heading"
                        className="text-2xl font-semibold text-[var(--ink)]"
                    >
                        Overview
                    </h2>

                    <p className="mt-2 text-[var(--muted)]">
                        Planned administration areas are listed below.
                        Management tools are not available in this preview.
                    </p>

                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        {adminAreas.map((area) => (
                            <section
                                key={area.title}
                                className="flex flex-col rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6"
                            >
                                <div>
                                    <span className="inline-block rounded-full border border-[var(--line)] px-3 py-1 text-xs font-medium text-[var(--muted)]">
                                        Not available yet
                                    </span>

                                    <h3 className="mt-4 text-lg font-semibold text-[var(--ink)]">
                                        {area.title}
                                    </h3>

                                    <p className="mt-2 text-[var(--muted)]">
                                        {area.description}
                                    </p>
                                </div>

                                <p className="mt-6 border-t border-[var(--line)] pt-4 text-sm text-[var(--muted)]">
                                    {area.status}
                                </p>
                            </section>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}