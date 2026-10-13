import type { Service } from "@/types";

// One entry per service. The slug becomes the URL: /services/<slug>.
export const services: Service[] = [
  {
    slug: "bookkeeping",
    title: "Bookkeeping",
    headline: "Accurate Bookkeeping for Commercial Growth",
    description: "Up-to-date records, reconciliations and organised receipts, so your numbers are always ready.",
  },
  {
    slug: "vat-returns",
    title: "VAT Returns",
    headline: "Maximising Efficiency on VAT Returns",
    description: "Registration, checked and submitted returns, and practical help with VAT queries.",
  },
  {
    slug: "payroll",
    title: "Payroll",
    headline: "Reliable, RTI-Compliant Payroll",
    description: "PAYE setup, regular pay runs and RTI reporting, handled every month.",
  },
  {
    slug: "corporation-tax",
    title: "Corporation Tax",
    headline: "Strategic Corporation Tax Planning",
    description: "CT600 returns with fully tagged iXBRL computations, capital allowances and R&D review.",
  },
  {
    slug: "digital-solutions",
    title: "Digital Solutions",
    headline: "Real-Time Commercial Insights",
    description: "Cloud accounting setup and support, so you can see your numbers all year round.",
  },
  {
    slug: "making-tax-digital",
    title: "Making Tax Digital",
    headline: "Future-Proofing Your HMRC Compliance",
    description: "MTD readiness, software setup and quarterly submissions managed for you.",
  },
  {
    slug: "capital-gains-tax",
    title: "Capital Gains Tax",
    headline: "Protecting Your Asset Disposals",
    description: "CGT calculated before you sell, with reliefs reviewed and reporting handled.",
  },
  {
    slug: "landlord-self-assessment",
    title: "Landlord Self-Assessment",
    headline: "Optimising Your Property Yields",
    description: "Property income calculations and Self-Assessment returns for landlords.",
  },
  {
    slug: "identity-verification",
    title: "Identity Verification",
    headline: "Companies House Identity Verification",
    description: "Director and PSC identity checks carried out by an Authorised Corporate Service Provider.",
  },
  {
    slug: "final-accounts",
    title: "Final Accounts",
    headline: "Year-End Accounts, Handled Properly",
    description: "Year-end accounts prepared from your records and filed on time.",
  },
];