import type { Service } from "@/types";

// One entry per service. The slug becomes the URL: /services/<slug>.
export const services: Service[] = [
  { slug: "bookkeeping", title: "Bookkeeping", description: "" },
  { slug: "vat-returns", title: "VAT Returns", description: "" },
  { slug: "payroll", title: "Payroll", description: "" },
  { slug: "corporation-tax", title: "Corporation Tax", description: "" },
  { slug: "digital-solutions", title: "Digital Solutions", description: "" },
  { slug: "making-tax-digital", title: "Making Tax Digital", description: "" },
  { slug: "capital-gains-tax", title: "Capital Gains Tax", description: "" },
  { slug: "landlord-self-assessment", title: "Landlord Self-Assessment", description: "" },
  { slug: "identity-verification", title: "Identity Verification", description: "" },
  { slug: "final-accounts", title: "Final Accounts", description: "" },
];