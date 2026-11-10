import { notFound } from "next/navigation";
import PlaceholderPage from "@/components/ui/PlaceholderPage";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { services } from "@/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  if (
    slug === "payroll" ||
    slug === "corporation-tax" ||
    slug === "vat-returns" ||
    slug === "making-tax-digital" ||
    slug === "digital-solutions"

  ) {
    return <ServiceDetailPage service={service} />;
  }

  return <PlaceholderPage title={service.title} />;
}
