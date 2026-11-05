import Hero from "@/components/Hero"
import ValueCard from "@/components/ValueCard"
import ServicesSection from "@/components/ServicesSection"
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import RegisteredRegulatedSection from "@/components/RegisteredRegulatedSection"

const values = ["Accessible", "Reliable", "Transparent"];

export default function HomePage() {
  return (
    <main>

      <Hero />
      <ServicesSection />
      <WhyChooseUsSection />
      <RegisteredRegulatedSection />

    </main>
  );
}
