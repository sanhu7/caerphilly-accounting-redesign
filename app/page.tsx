import Hero from "@/components/Hero"
import ValueCard from "@/components/ValueCard"

const values = ["Accessible", "Reliable", "Transparent"];

export default function HomePage() {
  return (
    <main>
      <Hero />
      <section className="bg-brand-mint px-6 py-section lg:px-12" aria-labelledby="values-heading">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="values-heading" className="heading-xl text-brand-text">
              More than just accounts
            </h2>
            <p className="body-text mt-4 text-brand-text">
              Your accounts should help you run your business — not get in the way of it.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((value) => (
              <ValueCard key={value} title={value} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
