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
    detail: {
      introduction: "Your employees expect to be paid accurately and on time, while HMRC expects payroll information to be reported correctly. Our managed payroll service removes the routine administration and gives you confidence that the process is being handled professionally.",
      benefits: [
        "PAYE scheme setup and administration",
        "Regular payroll processing",
        "RTI-compliant reporting",
        "Clear information on payments due",
        "Reduced payroll administration and compliance risk",
      ],
      longerDescription: "We manage payroll using HMRC-recognised software and provide a service tailored to the size of your workforce. From setting up your PAYE scheme to processing regular pay and communicating amounts due to staff and HMRC, we take care of the detail. Real Time Information (RTI) requirements are incorporated into the process, helping you maintain consistent payroll records and reduce administrative pressure.",
      cta: "Let us manage your payroll while you focus on your people and your business.",
    },
  },
  {
    slug: "corporation-tax",
    title: "Corporation Tax",
    headline: "Strategic Corporation Tax Planning",
    description: "CT600 returns with fully tagged iXBRL computations, capital allowances and R&D review.",
    detail: {
      introduction: "Effective corporation tax planning is about more than completing a return. It means understanding your company's financial position, identifying relevant reliefs and preparing accurate computations that support compliant tax planning.",
      benefits: [
        "Corporation tax return preparation",
        "Fully tagged iXBRL computations",
        "Capital allowance calculations",
        "Chargeable gains calculations",
        "Review of relevant R&D tax reliefs",
      ],
      longerDescription: "We prepare corporation tax computations and fully tagged iXBRL submissions, together with the supplementary forms required for your circumstances. Our work can include the calculation of capital allowances, chargeable gains and eligible Research & Development tax reliefs. We then present the completed return and supporting figures for your review before submission, helping you understand your company's tax position.",
      cta: "Plan your company's tax position with professional support.",
    },
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
