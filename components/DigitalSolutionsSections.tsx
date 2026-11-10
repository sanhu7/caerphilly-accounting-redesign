import Image from "next/image";

const sections = [
    {
        id: "dashboard",
        image: "/cloud-dashboard.png",
        alt: "Cloud accounting dashboard showing a financial overview",
        label: "See it all in one place",
        heading: "Your whole business, at a glance",
        description:
            "A live dashboard brings your bank balances, outstanding bills and cash flow together on one screen, so you're never waiting until year-end to know where you stand.",
    },
    {
        id: "invoices",
        image: "/cloud-invoice.png",
        alt: "Invoice displayed in cloud accounting software",
        label: "Get paid faster",
        heading: "Raise and send invoices in seconds",
        description:
            "Create professional invoices from your phone or laptop, send them the moment work is done, and see exactly when they're viewed, due or paid.",
    },
    {
        id: "projects",
        image: "/cloud-projects.png",
        alt: "Balance sheet report in accounting software",
        label: "Know your numbers as you work",
        heading: "Track projects, time and expenses",
        description:
            "Log time and expenses against individual jobs as you go, so you can see what a project is really costing you long before the final invoice is raised.",
    },
    {
        id: "reports",
        image: "/cloud-reports.png",
        alt: "Accounting overview with financial charts on a desktop monitor",
        label: "Reports on demand",
        heading: "Real-time reports, whenever you need them",
        description:
            "Balance sheets, profit and loss and other reports are generated instantly from up-to-date figures, ready whenever you need them for a lender, a decision or simply peace of mind.",
    },
    {
        id: "tax",
        image: "/cloud-selfassessment.png",
        alt: "Self-Assessment tax overview in accounting software",
        label: "Tax, kept current",
        heading: "Your tax position, kept up to date all year",
        description:
            "Because your records are maintained digitally throughout the year, preparing your Self-Assessment or company return becomes a formality rather than a scramble each January.",
    },
];

export default function DigitalSolutionsSections() {
    return (
        <div className="mt-12 sm:mt-16">
            {sections.map((section, index) => (
                <section
                    key={section.id}
                    aria-labelledby={`digital-${section.id}-heading`}
                    className={`border-b border-[var(--line)] py-10 sm:py-14 ${index % 2 === 0 ? "bg-slate-50" : "bg-white"
                        }`}
                >
                    <div className="grid items-center gap-8 px-5 sm:px-8 md:grid-cols-2 md:gap-12">
                        <div
                            className={`relative min-w-0 ${index % 2 !== 0 ? "md:order-2" : ""
                                }`}
                        >
                            <div className="relative aspect-[4/3]">
                                <Image
                                    src={section.image}
                                    alt={section.alt}
                                    fill
                                    sizes="(min-width: 1280px) 520px, (min-width: 768px) 45vw, 90vw"
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        <div className="min-w-0">
                            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
                                {section.label}
                            </p>

                            <h2
                                id={`digital-${section.id}-heading`}
                                className="mt-3 text-2xl font-light leading-tight sm:text-3xl"
                            >
                                {section.heading}
                            </h2>

                            <p className="mt-4 text-base leading-8 text-[var(--ink-2)]">
                                {section.description}
                            </p>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
}