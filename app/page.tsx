import Hero from "@/components/Hero"
import ServicesSection from "@/components/ServicesSection"
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import RegisteredRegulatedSection from "@/components/RegisteredRegulatedSection"


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
