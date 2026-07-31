import React from "react";
import { SITE_CONFIG } from "@/lib/site-config";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { CheckCircle2, Code2, Zap, ShieldCheck, Sparkles, Layers } from "lucide-react";

export const metadata = {
  title: "Hire Next.js Developer & Senior React Architect",
  description: "Hire a dedicated senior Next.js developer to build fast, scalable web applications with React Server Components, App Router, and Edge performance.",
};

export default function HireNextjsDeveloperPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 max-w-5xl mx-auto flex flex-col gap-16">
      <JsonLd
        type="ProfessionalService"
        data={{
          name: "Hire Next.js Developer Services",
          description: "Dedicated senior Next.js development for startups and enterprise clients.",
        }}
      />

      <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-6">
        <Badge variant="indigo">Dedicated Next.js Engineering Expertise</Badge>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Hire a Dedicated <span className="text-gradient-accent">Next.js Developer</span>
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          Augment your team with a senior Next.js engineer specializing in Next.js App Router, React Server Components, Edge runtime caching, and sub-second Core Web Vitals.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Button variant="primary" size="lg" href="/contact" showArrow>
            Hire Next.js Developer
          </Button>
          <Button variant="secondary" size="lg" href="/portfolio">
            View Next.js Projects
          </Button>
        </div>
      </div>

      {/* Why Hire Me Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-slate-900 border border-white/10 flex flex-col gap-3">
          <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 w-fit">
            <Zap className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Sub-Second Speed</h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Expertise in Server-Side Rendering (SSR), Incremental Static Regeneration (ISR), and Next Image optimization for top Lighthouse scores.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900 border border-white/10 flex flex-col gap-3">
          <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 w-fit">
            <Code2 className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">TypeScript First</h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Strict type safety across routing, API handlers, data validation, and UI props to prevent runtime bugs.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900 border border-white/10 flex flex-col gap-3">
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Full Product Ownership</h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            From Figma design execution to Vercel deployment and CI/CD pipelines, receive complete senior developer ownership.
          </p>
        </div>
      </div>

      {/* Engagement Models */}
      <div className="p-8 rounded-3xl bg-slate-900 border border-white/10 flex flex-col gap-6 shadow-2xl">
        <h2 className="text-2xl font-bold text-white">Flexible Engagement Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4">
            <h3 className="text-lg font-bold text-indigo-300">Project-Based Contract</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Fixed-scope proposal for complete Next.js marketing websites, SaaS platforms, or headless e-commerce store migrations.
            </p>
            <span className="text-xs font-mono text-emerald-400">Fixed Milestone Delivery</span>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4">
            <h3 className="text-lg font-bold text-sky-300">Dedicated Senior Developer</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Dedicated monthly contract joining your team directly via Slack/GitHub to accelerate product roadmap execution.
            </p>
            <span className="text-xs font-mono text-sky-400">Full Time / Part Time Contract</span>
          </div>
        </div>
      </div>
    </div>
  );
}
