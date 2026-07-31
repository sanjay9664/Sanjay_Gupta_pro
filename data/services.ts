import { ServiceItem } from "@/types";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "01",
    number: "01",
    slug: "custom-web-development",
    title: "Custom Web Development",
    shortDescription: "Bespoke web applications engineered for speed, clean architecture, and modern UX.",
    fullDescription: "We build custom web software tailored to your specific business operations with native app performance and zero legacy code bloat.",
    iconName: "Code2",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    features: [
      "Bespoke UI/UX design matching your visual identity",
      "Pixel-perfect responsive layout for mobile & desktop",
      "Clean, modular TypeScript codebase",
      "Automated CI/CD deployment pipelines"
    ],
    benefits: [
      "100% source code ownership",
      "Up to 3x faster page loads",
      "Bank-grade security architecture"
    ],
    deliverables: [
      "Production web application",
      "Clean TypeScript repository & docs",
      "Vercel / AWS cloud deployment"
    ],
    faq: [
      {
        question: "Why custom development over template builders?",
        answer: "Custom development gives you complete control over security, speed, and design without plugin bloat or template constraints."
      }
    ],
    metaTitle: "Custom Web Development Agency | Next.js & React Specialists",
    metaDescription: "Bespoke web applications built for startups and growing businesses. High performance, clean TypeScript architecture."
  },
  {
    id: "02",
    number: "02",
    slug: "nextjs-development",
    title: "Next.js Development",
    shortDescription: "SEO-optimized Next.js App Router applications with sub-second page load speeds.",
    fullDescription: "Leverage React Server Components, Streaming SSR, and Edge runtime caching to rank higher on Google and convert visitors.",
    iconName: "Zap",
    technologies: ["Next.js", "React", "TypeScript", "Vercel"],
    features: [
      "React Server Components for minimal JS bundle",
      "Edge caching & Incremental Static Regeneration",
      "Automatic Next Image & Next Font optimization",
      "Built-in SEO metadata API & sitemaps"
    ],
    benefits: [
      "Instant page transitions with zero layout shift",
      "95+ Google Lighthouse Core Web Vitals score",
      "Lower hosting costs via Edge deployment"
    ],
    deliverables: [
      "Optimized Next.js production build",
      "Dynamic Metadata & Schema.org JSON-LD integration",
      "Vercel Edge Analytics setup"
    ],
    faq: [
      {
        question: "Is Next.js suitable for my business website?",
        answer: "Yes, Next.js is trusted by tech leaders worldwide for its unmatched speed, security, and organic search ranking power."
      }
    ],
    metaTitle: "Next.js Development Studio | Next.js App Router Experts",
    metaDescription: "Build fast, SEO-friendly Next.js web applications with React Server Components and Edge performance."
  },
  {
    id: "03",
    number: "03",
    slug: "full-stack-development",
    title: "Full-Stack Applications",
    shortDescription: "End-to-end engineering bridging modern frontend interfaces with resilient databases.",
    fullDescription: "Complete full-stack development covering frontend UI, server logic, database schemas, REST APIs, and automated cloud deployments.",
    iconName: "Layers",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Prisma"],
    features: [
      "Full end-to-end TypeScript type safety",
      "Relational database design (PostgreSQL)",
      "High-performance caching with Redis",
      "Secure JWT & NextAuth authentication"
    ],
    benefits: [
      "Single point of accountability for design & backend",
      "Seamless integration eliminating API bottlenecks",
      "Enterprise security compliance"
    ],
    deliverables: [
      "Complete full-stack web application",
      "Database schemas & migration scripts",
      "API documentation & deployment config"
    ],
    faq: [
      {
        question: "Do you handle both frontend UI and backend logic?",
        answer: "Yes, we handle everything from Figma UI design to database schemas, server APIs, and cloud hosting."
      }
    ],
    metaTitle: "Full-Stack Development Studio | Node.js, React & PostgreSQL",
    metaDescription: "Comprehensive full-stack development services. End-to-end architecture, API design, database schemas, and modern UI."
  },
  {
    id: "04",
    number: "04",
    slug: "saas-development",
    title: "SaaS MVP Platforms",
    shortDescription: "Subscription-ready SaaS web applications designed for rapid launch and scale.",
    fullDescription: "Design and launch subscription SaaS products complete with Stripe billing, user onboarding, team workspaces, and dashboards.",
    iconName: "Rocket",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    features: [
      "Multi-tenant database isolation & permissions",
      "Stripe recurring subscription & usage billing",
      "User onboarding & team workspaces",
      "Interactive analytics & export tools"
    ],
    benefits: [
      "Fast time-to-market for early beta launch",
      "Seamless payment processing",
      "High retention user experience"
    ],
    deliverables: [
      "Production SaaS MVP ready for users",
      "Stripe billing integration & portal",
      "Admin user management dashboard"
    ],
    faq: [
      {
        question: "How fast can a SaaS MVP be built?",
        answer: "A streamlined SaaS MVP typically takes 4 to 8 weeks depending on key feature scope."
      }
    ],
    metaTitle: "SaaS Product Development Studio | Build & Scale Your Web SaaS",
    metaDescription: "Expert SaaS development services for startups. Subscriptions, multi-tenancy, Stripe integration, and user dashboards."
  },
  {
    id: "05",
    number: "05",
    slug: "ecommerce-development",
    title: "Headless E-Commerce",
    shortDescription: "High-conversion headless storefronts engineered for speed and global checkout.",
    fullDescription: "Custom headless storefronts using Next.js and Shopify API for sub-second product pages and higher checkout conversion.",
    iconName: "ShoppingCart",
    technologies: ["Next.js", "Shopify API", "Stripe", "Tailwind CSS"],
    features: [
      "Headless storefront with instant navigation",
      "Custom cart & product filtering UI",
      "Streamlined single-page checkout",
      "Multi-currency & localized support"
    ],
    benefits: [
      "Higher conversion rate from sub-second loading",
      "Unrestricted design customization",
      "Mobile-first checkout experience"
    ],
    deliverables: [
      "Headless e-commerce storefront",
      "Payment gateway & Shopify API setup",
      "Conversion funnel analytics"
    ],
    faq: [
      {
        question: "Why choose Headless E-Commerce?",
        answer: "Headless storefronts decouple your UI from the backend, providing 3x faster page loads and higher checkout conversion."
      }
    ],
    metaTitle: "Headless E-Commerce Development | Next.js & Shopify API",
    metaDescription: "Custom headless e-commerce storefronts built with Next.js and Shopify API for maximum speed and conversion."
  },
  {
    id: "06",
    number: "06",
    slug: "website-redesign",
    title: "Redesign & Performance",
    shortDescription: "Refactor slow, outdated websites into fast, modern Next.js flagships.",
    fullDescription: "We rebuild slow or outdated websites into fast Next.js applications while preserving existing Google SEO rankings.",
    iconName: "Sparkles",
    technologies: ["Next.js", "Lighthouse", "Tailwind CSS", "Vercel"],
    features: [
      "Complete modern UI redesign",
      "Core Web Vitals remediation (LCP, CLS, INP)",
      "SEO rank preservation strategy",
      "Mobile responsiveness overhaul"
    ],
    benefits: [
      "Achieve 95+ score on Google Lighthouse",
      "Increased visitor conversion rate",
      "Modern brand visual elevation"
    ],
    deliverables: [
      "Redesigned production Next.js application",
      "SEO 301 redirect map",
      "Performance benchmark report"
    ],
    faq: [
      {
        question: "Will a website redesign hurt Google search rankings?",
        answer: "No. We implement precise 301 redirect maps and preserve metadata structures to protect your SEO rankings."
      }
    ],
    metaTitle: "Website Redesign & Performance Optimization Studio",
    metaDescription: "Refactor sluggish websites into high-speed, modern Next.js platforms. Optimize Core Web Vitals and elevate conversion."
  }
];
