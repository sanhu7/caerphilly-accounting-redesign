"use client";

import type { ReactNode } from "react";

type QuoteRequestFormProps = {
    children?: ReactNode;
};

export default function QuoteRequestForm({
    children,
}: QuoteRequestFormProps) {
    return (
        <section
            id="quote-form"
            aria-labelledby="quote-form-heading"
            className="pb-12"
        >
            <h2
                id="quote-form-heading"
                className="text-2xl font-normal sm:text-3xl"
            >
                Request your fixed quote
            </h2>

            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    window.alert(
                        "Online submission is not available yet. No quote request has been sent."
                    );
                }}
                className="mt-6 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8"
            >
                {children}

                <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-semibold"
                        >
                            Name
                        </label>

                        <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            required
                            className="mt-2 w-full rounded-lg border border-[var(--line)] bg-[var(--paper)] px-3 py-2 outline-none focus:border-[var(--accent)]"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="business-name"
                            className="block text-sm font-semibold"
                        >
                            Business name
                        </label>

                        <input
                            id="business-name"
                            name="businessName"
                            type="text"
                            autoComplete="organization"
                            required
                            className="mt-2 w-full rounded-lg border border-[var(--line)] bg-[var(--paper)] px-3 py-2 outline-none focus:border-[var(--accent)]"
                        />
                    </div>
                </div>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold"
                        >
                            Email
                        </label>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="mt-2 w-full rounded-lg border border-[var(--line)] bg-[var(--paper)] px-3 py-2 outline-none focus:border-[var(--accent)]"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="phone"
                            className="block text-sm font-semibold"
                        >
                            Phone
                        </label>

                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            required
                            className="mt-2 w-full rounded-lg border border-[var(--line)] bg-[var(--paper)] px-3 py-2 outline-none focus:border-[var(--accent)]"
                        />
                    </div>
                </div>
                <div className="mt-5">
                    <label
                        htmlFor="message"
                        className="block text-sm font-semibold"
                    >
                        Anything else we should know?
                    </label>

                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="e.g. current software, year end, property income, one-off work"
                        className="mt-2 w-full resize-y rounded-lg border border-[var(--line)] bg-[var(--paper)] px-3 py-2 outline-none focus:border-[var(--accent)]"
                    />
                </div>
                <label className="mt-5 flex items-start gap-3 text-sm text-[var(--muted)]">
                    <input
                        type="checkbox"
                        name="consent"
                        required
                        className="mt-1 h-4 w-4 accent-[var(--accent)]"
                    />

                    <span>
                        I agree to Caerphilly Accounting using these details to respond to my
                        enquiry, as described in the privacy policy.
                    </span>
                </label>
                <button
                    type="submit"
                    className="mt-6 rounded-sm bg-[var(--ink)] px-5 py-3 text-xs font-bold tracking-[0.12em] text-white uppercase transition-colors hover:bg-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                >
                    Send my estimate
                </button>
            </form>
        </section>

    );
}