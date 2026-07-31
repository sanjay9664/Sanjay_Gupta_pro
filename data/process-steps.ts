import { ProcessStep } from "@/types";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Scope",
    subtitle: "Understanding your goals and project requirements.",
    description: "We map out user flows, business goals, feature priorities, and technical constraints to establish a clear development roadmap.",
    details: [
      "Technical feasibility & architecture review",
      "User flows & feature prioritization",
      "Clear milestone timeline & fixed quote"
    ],
    icon: "Compass"
  },
  {
    number: "02",
    title: "UI/UX & Architecture",
    subtitle: "Crafting visual layouts and database schemas.",
    description: "We design clean, intuitive UI components in Figma alongside type-safe database schemas and API contracts.",
    details: [
      "Modern dark/light UI visual design",
      "Mobile-first responsive wireframes",
      "Database schema & API specification"
    ],
    icon: "Layout"
  },
  {
    number: "03",
    title: "Agile Development",
    subtitle: "Writing clean, type-safe Next.js & React code.",
    description: "We build your application in rapid sprints with weekly staging links so you can monitor progress in real time.",
    details: [
      "Strict TypeScript typing & clean code standards",
      "React Server Components & Edge optimization",
      "Weekly staging deployment builds"
    ],
    icon: "Code"
  },
  {
    number: "04",
    title: "Testing & Speed Tuning",
    subtitle: "Rigorously validating performance, security, and mobile UX.",
    description: "We test across devices and optimize Core Web Vitals to guarantee a sub-second load time and top Lighthouse audit score.",
    details: [
      "95+ Google Lighthouse audit optimization",
      "Cross-device & cross-browser responsiveness checks",
      "Security scanning & error handling verification"
    ],
    icon: "CheckCircle2"
  },
  {
    number: "05",
    title: "Launch & Support",
    subtitle: "Zero-downtime production deployment and monitoring.",
    description: "We deploy your application to production edge servers, set up domain SSL, sitemaps, and provide ongoing technical support.",
    details: [
      "Zero-downtime production release",
      "Domain DNS, SSL & edge CDN configuration",
      "30-day post-launch warranty & SLA guarantee"
    ],
    icon: "Rocket"
  }
];
