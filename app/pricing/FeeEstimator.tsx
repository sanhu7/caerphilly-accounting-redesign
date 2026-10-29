"use client";

import { useState } from "react";

const businessTypes = [
    { id: "sole-trader", label: "Sole trader", baseFee: 60 },
    { id: "partnership", label: "Partnership", baseFee: 90 },
    { id: "limited-company", label: "Limited company", baseFee: 120 },
] as const;

type BusinessType = (typeof businessTypes)[number]["id"];
const bookkeepingOptions = [
    { id: "own", label: "I'll do my own" },
    { id: "quarterly", label: "Quarterly" },
    { id: "monthly", label: "Monthly" },
] as const;

type Bookkeeping = (typeof bookkeepingOptions)[number]["id"];

const formatGBP = (amount: number) =>
    new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
        maximumFractionDigits: 0,
    }).format(amount);

export default function FeeEstimator() {
    const [businessType, setBusinessType] =
        useState<BusinessType>("sole-trader");

    const [turnover, setTurnover] = useState("");
    const [isVatRegistered, setIsVatRegistered] = useState(false);
    const [employees, setEmployees] = useState(0);

    const [bookkeeping, setBookkeeping] =
        useState<Bookkeeping>("own");
    const [bookkeepingHours, setBookkeepingHours] = useState(1);
    const [needsMtd, setNeedsMtd] = useState(false);
    const selectedBusiness = businessTypes.find(
        (business) => business.id === businessType,
    )!;

    const vatFee = isVatRegistered ? 50 : 0;
    const payrollFee = employees * 8;

    const showMtd =
        businessType === "sole-trader" && Number(turnover) > 50_000;

    const mtdFee = showMtd && needsMtd ? 40 : 0;

    const bookkeepingFee =
        bookkeeping === "quarterly"
            ? 75
            : bookkeeping === "monthly"
                ? bookkeepingHours * 30
                : 0;

    const monthlyTotal =
        selectedBusiness.baseFee +
        vatFee +
        payrollFee +
        bookkeepingFee +
        mtdFee;

    const minimumEstimate = Math.round(monthlyTotal * 0.95);
    const maximumEstimate = Math.round(monthlyTotal * 1.05);

    return (
        <section
            aria-label="Fee estimator"
            className="mt-12 grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]"
        >
            <div className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8">
                <fieldset>
                    <legend className="text-lg font-semibold">
                        What type of business are you?
                    </legend>

                    <div className="mt-4 flex flex-wrap gap-3">
                        {businessTypes.map((business) => {
                            const isSelected = businessType === business.id;

                            return (
                                <label key={business.id} className="cursor-pointer">
                                    <input
                                        type="radio"
                                        name="business-type"
                                        value={business.id}
                                        checked={isSelected}
                                        onChange={() => setBusinessType(business.id)}
                                        className="peer sr-only"
                                    />

                                    <span
                                        className={`block rounded-xl border px-4 py-3 transition-colors peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-[var(--accent)] ${isSelected
                                            ? "border-[var(--accent)] bg-[var(--accent-soft)] font-semibold text-[var(--accent)]"
                                            : "border-[var(--line)] bg-[var(--paper)] text-[var(--ink)] hover:border-[var(--accent)]"
                                            }`}
                                    >
                                        {business.label}
                                    </span>
                                </label>
                            );
                        })}
                    </div>
                </fieldset>

                <div className="mt-8">
                    <label
                        htmlFor="annual-turnover"
                        className="block text-lg font-semibold"
                    >
                        Annual turnover
                    </label>

                    <p
                        id="turnover-help"
                        className="mt-2 text-[var(--muted)]"
                    >
                        Total sales before expenses. A rough figure is fine.
                    </p>

                    <div className="mt-4 flex max-w-xs items-center gap-3 rounded-xl border border-[var(--line)] bg-[var(--paper)] px-4 py-3 focus-within:outline-2 focus-within:outline-[var(--accent)]">
                        <span aria-hidden="true" className="text-[var(--muted)]">
                            £
                        </span>

                        <input
                            id="annual-turnover"
                            type="number"
                            min="0"
                            step="1"
                            inputMode="numeric"
                            value={turnover}
                            onChange={(event) => setTurnover(event.target.value)}
                            aria-describedby="turnover-help"
                            placeholder="0"
                            className="w-full min-w-0 bg-transparent text-lg outline-none"
                        />
                    </div>
                </div>

                <fieldset className="mt-8">
                    <legend className="text-lg font-semibold">
                        Are you VAT registered?
                    </legend>

                    <div className="mt-4 flex gap-3">
                        {[
                            { label: "Yes", value: true },
                            { label: "No", value: false },
                        ].map((option) => (
                            <label key={option.label} className="cursor-pointer">
                                <input
                                    type="radio"
                                    name="vat-registered"
                                    checked={isVatRegistered === option.value}
                                    onChange={() => setIsVatRegistered(option.value)}
                                    className="peer sr-only"
                                />

                                <span
                                    className={`block rounded-xl border px-4 py-3 transition-colors peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-[var(--accent)] ${isVatRegistered === option.value
                                        ? "border-[var(--accent)] bg-[var(--accent-soft)] font-semibold text-[var(--accent)]"
                                        : "border-[var(--line)] bg-[var(--paper)] text-[var(--ink)] hover:border-[var(--accent)]"
                                        }`}
                                >
                                    {option.label}
                                </span>
                            </label>
                        ))}
                    </div>
                </fieldset>

                <div className="mt-8">
                    <h3 id="employees-label" className="text-lg font-semibold">
                        How many employees do you pay?
                    </h3>

                    <p
                        id="employees-help"
                        className="mt-2 text-[var(--muted)]"
                    >
                        Include directors paid through payroll. Enter 0 if none.
                    </p>

                    <div
                        role="group"
                        aria-labelledby="employees-label"
                        aria-describedby="employees-help"
                        className="mt-4 flex items-center gap-4"
                    >
                        <button
                            type="button"
                            onClick={() => setEmployees((count) => Math.max(0, count - 1))}
                            disabled={employees === 0}
                            aria-label="Decrease number of employees"
                            className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--paper)] text-2xl font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            −
                        </button>

                        <output className="min-w-8 text-center text-xl">
                            {employees}
                        </output>

                        <button
                            type="button"
                            onClick={() => setEmployees((count) => count + 1)}
                            aria-label="Increase number of employees"
                            className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--paper)] text-2xl font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                        >
                            +
                        </button>
                    </div>
                </div>
                {showMtd && (
                    <section className="mt-8">
                        <h3 className="text-lg font-semibold">
                            Making Tax Digital for Income Tax
                        </h3>

                        <p className="mt-2 leading-relaxed text-[var(--muted)]">
                            Select whether you want this service included in your estimate.
                            We&apos;ll confirm your requirements when we quote.
                        </p>

                        <button
                            type="button"
                            onClick={() => setNeedsMtd(true)}
                            className={`mt-4 rounded-xl border px-4 py-3 font-semibold ${needsMtd
                                ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]"
                                : "border-[var(--line)] bg-[var(--paper)] text-[var(--ink)]"
                                }`}
                        >
                            Yes
                        </button>

                        <button
                            type="button"
                            onClick={() => setNeedsMtd(false)}
                            className={`ml-3 mt-4 rounded-xl border px-4 py-3 font-semibold ${!needsMtd
                                ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]"
                                : "border-[var(--line)] bg-[var(--paper)] text-[var(--ink)]"
                                }`}
                        >
                            No
                        </button>
                    </section>
                )}

                <fieldset className="mt-8">
                    <legend className="text-lg font-semibold">
                        How much bookkeeping help do you want?
                    </legend>

                    <div className="mt-4 flex flex-wrap gap-3">
                        {bookkeepingOptions.map((option) => {
                            const isSelected = bookkeeping === option.id;

                            return (
                                <label key={option.id} className="cursor-pointer">
                                    <input
                                        type="radio"
                                        name="bookkeeping"
                                        value={option.id}
                                        checked={isSelected}
                                        onChange={() => setBookkeeping(option.id)}
                                        className="peer sr-only"
                                    />

                                    <span
                                        className={`block rounded-xl border px-4 py-3 transition-colors peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-[var(--accent)] ${isSelected
                                            ? "border-[var(--accent)] bg-[var(--accent-soft)] font-semibold text-[var(--accent)]"
                                            : "border-[var(--line)] bg-[var(--paper)] text-[var(--ink)] hover:border-[var(--accent)]"
                                            }`}
                                    >
                                        {option.label}
                                    </span>
                                </label>
                            );
                        })}
                    </div>

                    <p className="mt-3 leading-relaxed text-[var(--muted)]">
                        Quarterly bookkeeping starts from £75. Monthly bookkeeping is
                        charged at £30 per hour, based on the hours your business needs.
                    </p>
                </fieldset>

                {bookkeeping === "monthly" && (
                    <div className="mt-8">
                        <h3
                            id="bookkeeping-hours-label"
                            className="text-lg font-semibold"
                        >
                            About how many bookkeeping hours a month?
                        </h3>

                        <p
                            id="bookkeeping-hours-help"
                            className="mt-2 leading-relaxed text-[var(--muted)]"
                        >
                            A rough guide: sole traders often need 1–2 hours, small limited
                            companies 3–6.
                        </p>

                        <div
                            role="group"
                            aria-labelledby="bookkeeping-hours-label"
                            aria-describedby="bookkeeping-hours-help"
                            className="mt-4 flex items-center gap-4"
                        >
                            <button
                                type="button"
                                onClick={() =>
                                    setBookkeepingHours((hours) => Math.max(1, hours - 1))
                                }
                                disabled={bookkeepingHours === 1}
                                aria-label="Decrease bookkeeping hours"
                                className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--paper)] text-2xl font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-40"
                            >
                                −
                            </button>

                            <output className="min-w-8 text-center text-xl">
                                {bookkeepingHours}
                            </output>

                            <button
                                type="button"
                                onClick={() => setBookkeepingHours((hours) => hours + 1)}
                                aria-label="Increase bookkeeping hours"
                                className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--paper)] text-2xl font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                            >
                                +
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <aside
                aria-labelledby="estimate-heading"
                className="rounded-3xl bg-[#fbfaf7] p-6 shadow-xl shadow-slate-900/10 sm:p-8"
            >
                <h2
                    id="estimate-heading"
                    className="text-center text-sm tracking-[0.15em] text-[var(--muted)] uppercase"
                >
                    Estimated monthly fee
                </h2>

                <div aria-live="polite" aria-atomic="true">
                    <p className="mt-6 text-center text-4xl font-bold text-[var(--accent)] sm:text-5xl">
                        {formatGBP(minimumEstimate)} – {formatGBP(maximumEstimate)}
                    </p>

                    <p className="mt-4 text-center text-sm text-[var(--muted)]">
                        about {formatGBP(monthlyTotal)} a month ·{" "}
                        {formatGBP(monthlyTotal * 12)} a year
                    </p>

                    <dl className="mt-8">
                        <div className="flex items-start justify-between gap-4 border-y border-dashed border-[var(--line)] py-4">
                            <dt>
                                Base fee · {selectedBusiness.label.toLowerCase()}
                            </dt>
                            <dd className="shrink-0">
                                {formatGBP(selectedBusiness.baseFee)}
                            </dd>
                        </div>
                        {isVatRegistered && (
                            <div className="flex justify-between gap-4 border-b border-dashed border-[var(--line)] py-4">
                                <dt>VAT returns</dt>
                                <dd className="shrink-0">{formatGBP(vatFee)}</dd>
                            </div>
                        )}

                        {employees > 0 && (
                            <div className="flex justify-between gap-4 border-b border-dashed border-[var(--line)] py-4">
                                <dt>Payroll · {employees} staff</dt>
                                <dd className="shrink-0">{formatGBP(payrollFee)}</dd>
                            </div>
                        )}
                        {mtdFee > 0 && (
                            <div className="flex justify-between gap-4 border-b border-dashed border-[var(--line)] py-4">
                                <dt>MTD Income Tax</dt>
                                <dd className="shrink-0">{formatGBP(mtdFee)}</dd>
                            </div>
                        )}
                        {bookkeeping !== "own" && (
                            <div className="flex justify-between gap-4 border-b border-dashed border-[var(--line)] py-4">
                                <dt>
                                    {bookkeeping === "quarterly"
                                        ? "Quarterly bookkeeping (from)"
                                        : `Monthly bookkeeping · ${bookkeepingHours} ${bookkeepingHours === 1 ? "hr" : "hrs"
                                        } @ £30/hr`}
                                </dt>

                                <dd className="shrink-0">
                                    {formatGBP(bookkeepingFee)}
                                </dd>
                            </div>
                        )}
                        <div className="flex justify-between gap-4 border-t border-[var(--ink)] py-4 font-semibold">
                            <dt>Estimate</dt>
                            <dd>{formatGBP(monthlyTotal)}/mo</dd>
                        </div>
                    </dl>

                </div>
                <a
                    href="/contact"
                    className="mt-2 block rounded-sm bg-[var(--ink)] px-4 py-3 text-center text-xs font-bold tracking-[0.12em] text-white uppercase transition-colors hover:bg-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                >
                    Send me a fixed quote
                </a>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                    Indicative estimate only. Your fixed fee is confirmed in a
                    letter of engagement after we&apos;ve reviewed your records.
                </p>
            </aside>
        </section>
    );
}