const checklist = [
    "Streamlined processes and meticulous attention to detail",
    "Cloud accounting: see your numbers wherever you work",
    "Clear, published pricing, with no surprise invoices",
    "Returns reviewed with you before anything is submitted",
];

const deadlines = [
    {
        obligation: "MTD Income Tax quarterly updates",
        deadline: "7 Aug · 7 Nov · 7 Feb · 7 May",
    },
    {
        obligation: "Self Assessment online return & payment",
        deadline: "31 January",
    },
    {
        obligation: "Corporation tax payment (most companies)",
        deadline: "9 months + 1 day",
    },
    {
        obligation: "Company tax return (CT600)",
        deadline: "12 months after period end",
    },
    {
        obligation: "Payroll (RTI) submission",
        deadline: "On or before payday",
    },
];

export default function WhyChooseUsSection() {
    return (
        <section
            aria-labelledby="why-choose-us-heading"
            className="bg-black px-4 py-16 text-white sm:px-6 lg:py-24"
        >
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
                <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[var(--footer-text)]">
                        Why Caerphilly Accounting
                    </p>

                    <h2
                        id="why-choose-us-heading"
                        className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl"
                    >
                        Less time on paperwork, more time on your business.
                    </h2>

                    <p className="mt-4 text-base leading-7 text-[var(--footer-text)]">
                        We take the burden of financial administration off business
                        owners, pairing careful, detail-led work with modern cloud
                        software so your figures are accurate, compliant and available
                        whenever you need them.
                    </p>

                    <ul className="mt-7 space-y-4">
                        {checklist.map((point) => (
                            <li key={point} className="flex items-start gap-3">
                                <svg
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="mt-0.5 size-5 shrink-0 text-[var(--accent-soft)]"
                                >
                                    <path d="m5 12 4 4L19 6" />
                                </svg>

                                <span className="text-sm leading-6">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="min-w-0">
                    <h3
                        id="key-dates-heading"
                        className="mb-3.5 text-xs font-semibold uppercase tracking-widest text-[var(--footer-text)]"
                    >
                        Key dates we track for you
                    </h3>

                    <div className="overflow-hidden rounded-[6px] border border-gray-200 bg-white text-[var(--ink)]">
                        <table
                            aria-labelledby="key-dates-heading"
                            className="w-full table-fixed border-collapse text-left text-sm"
                        >
                            <thead className="bg-gray-100">
                                <tr>
                                    <th
                                        scope="col"
                                        className="w-[52%] px-3 py-4 font-semibold sm:px-5"
                                    >
                                        Obligation
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-4 font-semibold sm:px-5"
                                    >
                                        Deadline
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {deadlines.map(({ obligation, deadline }) => (
                                    <tr
                                        key={obligation}
                                        className="border-t border-gray-200"
                                    >
                                        <th
                                            scope="row"
                                            className="break-words px-3 py-4 align-top font-normal leading-6 sm:px-5"
                                        >
                                            {obligation}
                                        </th>
                                        <td className="break-words px-3 py-4 align-top leading-6 tabular-nums sm:px-5">
                                            {deadline}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <p className="mt-2.5 text-xs leading-5 text-[var(--footer-text)]">
                        Verify dates on gov.uk before launch
                    </p>
                </div>
            </div>
        </section>
    );
}