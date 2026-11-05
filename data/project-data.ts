export type Project = {
  id: string;
  categories: string[];
  industry: string;
  title: string;
  description: string;
  status: string;
  website: string;
  trafficData: number[];
  metrics: { value: string; label: string; color: string }[];
  outcomes: string[];
  stack: string[];
  preview: "website" | "seo";
  accentText: string;
  accentGlow: string;
};

export const projects: Project[] = [
  {
    id: "nakula",
    categories: ["website", "seo"],
    industry: "Tourism, and property management",
    title: "Nakula",
    description:
      "Engineered from the ground up for a high-velocity analytics venture. Re-architected dynamic SSR routes, implemented automated Open Graph image generation, and purged render-blocking CSS.",
    status: "100 Lighthouse",
    website: "https://nakula.com/",
    trafficData: [28, 42, 34, 57, 48, 69, 61, 82, 72, 96, 78, 100],
    metrics: [
      {
        value: "+180%",
        label: "Organic inbound signups in 90 days",
        color: "text-tertiary",
      },
      {
        value: "99/100",
        label: "Google Lighthouse performance audit",
        color: "text-primary",
      },
    ],
    outcomes: [
      "Scaled organic reach with automated programmatic pages for 100+ Bali villas and properties.",
      "Reduced server response time (TTFB) from 680ms to 92ms using edge-caching.",
    ],
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS"],
    preview: "seo",
    accentText: "text-primary",
    accentGlow: "bg-primary/[0.06]",
  },
  {
    id: "hawthornpools",
    categories: ["ecommerce", "website"],
    industry: "Luxury Direct-to-Consumer",
    title: "E-Commerce Headless Storefront",
    description:
      "Transformed a bloated monolithic Shopify theme into an ultra-fast headless React front-end powered by Shopify GraphQL Storefront API. Designed for peak holiday traffic without speed degradation.",
    status: "0.9s Load Speed",
    website: "https://veloce.com/collections/gear",
    trafficData: [5, 10, 34, 20, 30, 40, 45, 58, 88, 96, 78, 100],
    metrics: [
      {
        value: "3.8s → 0.9s",
        label: "Drastic 76% speed reduction",
        color: "text-tertiary",
      },
      {
        value: "+34%",
        label: "Conversion boost in direct checkout",
        color: "text-secondary",
      },
    ],
    outcomes: [
      "Instant product variant switching with zero layout cumulative shifts (0.00 CLS).",
      "Built customized Product and Organization JSON-LD markup yielding Google Rich Stars in SERPs.",
    ],
    stack: ["React", "Shopify Storefront API", "Next.js Edge"],
    preview: "website",
    accentText: "text-secondary",
    accentGlow: "bg-secondary/[0.06]",
  },
  {
    id: "fintech",
    categories: ["website"],
    industry: "Programmatic Content Hub",
    title: "FinTech Discovery Platform & Knowledge Hub",
    description:
      "Engineered a comprehensive content network and financial calculators built on Contentful headless CMS. Constructed dynamic XML sitemaps, semantic internal linking modules, and optimized breadcrumb hierarchy.",
    status: "450+ Ranked Keywords",
    website: "https://nexus.finance/learn",
    trafficData: [28, 42, 34, 57, 48, 69, 61, 82, 72, 85, 78, 90],
    metrics: [
      {
        value: "450+",
        label: "High-intent buyer keywords on Page 1",
        color: "text-tertiary",
      },
      {
        value: "0.6s",
        label: "First Contentful Paint on mobile",
        color: "text-primary",
      },
    ],
    outcomes: [
      "Automated structured article schema with author verification and publisher entities.",
      "Zero visual shift layout design achieving 0.00 CLS across all dynamic screens.",
    ],
    stack: ["TypeScript", "Contentful CMS", "Tailwind CSS"],
    preview: "website",
    accentText: "text-tertiary",
    accentGlow: "bg-tertiary/[0.06]",
  },
];
