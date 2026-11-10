"use client";

import { useState, type KeyboardEvent } from "react";

const reviews = [
  {
    client: "Mind, Body and Soul In Balance",
    text: "Caerphilly Accounting were both professional and extremely helpful in breaking down the terminology & assisting me to manage my accounts effectively. I cannot praise them enough. I would highly recommend them & would not go anywhere else for my accounting needs.",
  },
  {
    client: "Help4Wales Foundation",
    text: "Caerphilly Accounting were very professional and created a brilliant business plan for me from our discussions. They have helped with the registration of my business researching a community interest company and have given sound advice on finances. I would highly recommend Caerphilly Accounting and can't wait to do further business with them.",
  },
  {
    client: "Big Lemon Creative",
    text: "Caerphilly Accounting assisted us in getting our taxes sorted – they were full of knowledge and put our finances in order with ease. They have always been accommodating with any questions and have made a big difference to how we run our business. I wouldn’t think twice about recommending Caerphilly Accounting and can’t wait to work with them again.",
  },
  {
    client: "EffectUsHR Ltd",
    source: "LinkedIn recommendation",
    text: "Marklan deals with all my company’s bookkeeping including all reconciliation, VAT & Payroll – all is done virtually – his advice & guidance is invaluable and lets me focus on delivering for my clients – highly recommend",
  },
];

export default function ClientReviews() {
  const [activeReview, setActiveReview] = useState(0);
  const review = reviews[activeReview];

  function showPrevious() {
    setActiveReview((current) => (current - 1 + reviews.length) % reviews.length);
  }

  function showNext() {
    setActiveReview((current) => (current + 1) % reviews.length);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPrevious();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      showNext();
    }
  }

  return (
    <section
      aria-labelledby="client-reviews-heading"
      aria-roledescription="carousel"
      className="bg-[var(--paper)] px-6 py-20 lg:px-12"
      onKeyDown={handleKeyDown}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-wide text-[var(--accent)]">
            Client reviews
          </p>
          <h2
            id="client-reviews-heading"
            className="mt-3 text-3xl font-light leading-tight tracking-[-0.02em] text-[var(--ink)] sm:text-4xl"
          >
            What our clients say
          </h2>
        </div>

        <div className="mx-auto mt-10 flex max-w-5xl items-center gap-3 sm:gap-6">
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous review"
            className="btn-secondary inline-flex size-11 shrink-0 items-center justify-center !p-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <article
            role="group"
            aria-live="polite"
            aria-atomic="true"
            aria-roledescription="slide"
            aria-label={`${activeReview + 1} of ${reviews.length}`}
            className="min-h-72 min-w-0 flex-1 rounded-[10px] border border-[var(--line)] bg-[var(--surface)] px-6 py-8 text-center text-[var(--ink)] sm:px-10 sm:py-10"
          >
            <blockquote className="mx-auto max-w-3xl">
              <p className="break-words text-base leading-8 text-[var(--ink-2)] sm:text-lg">
                {review.text}
              </p>
            </blockquote>
            <footer className="mt-7">
              <p className="break-words font-semibold text-[var(--ink)]">{review.client}</p>
              {review.source && (
                <p className="mt-1 text-sm text-[var(--muted)]">{review.source}</p>
              )}
            </footer>
          </article>

          <button
            type="button"
            onClick={showNext}
            aria-label="Next review"
            className="btn-secondary inline-flex size-11 shrink-0 items-center justify-center !p-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-3" role="group" aria-label="Choose a review">
          {reviews.map((item, index) => (
            <button
              key={item.client}
              type="button"
              aria-label={`Show review ${index + 1}: ${item.client}`}
              aria-current={activeReview === index ? "true" : undefined}
              onClick={() => setActiveReview(index)}
              className={`size-3 rounded-full border border-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] ${
                activeReview === index
                  ? "bg-[var(--accent)]"
                  : "bg-[var(--surface)]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
