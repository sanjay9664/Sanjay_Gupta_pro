import React from "react";
import { SITE_CONFIG } from "@/lib/site-config";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { CheckCircle2, Code2, Server, Database, Cloud, Terminal, Sparkles } from "lucide-react";

export const metadata = {
  title: "About Us | Full-Stack Product Studio & Architecture",
  description: "Learn more about our development philosophy, tech stack, and experience building high-performance web applications for startups and enterprise clients.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 max-w-5xl mx-auto flex flex-col gap-16">
      <JsonLd
        type="Organization"
        data={{
          name: SITE_CONFIG.brandName,
          description: SITE_CONFIG.longDescription,
        }}
      />

      <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4">
        <Badge variant="indigo">Product Studio Philosophy</Badge>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Not Just Code. Products Engineered Around Business Goals.
        </h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          {SITE_CONFIG.longDescription}
        </p>
      </div>

      <div className="p-8 rounded-3xl bg-slate-900 border border-white/10 flex flex-col gap-8 shadow-2xl">
        <h2 className="text-2xl font-bold text-white">Full-Stack Tech Stack Architecture</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-2">
            <span className="text-xs font-mono font-bold text-indigo-400">FRONTEND</span>
            <span className="text-sm font-semibold text-white">Next.js & React</span>
            <p className="text-xs text-slate-400">TypeScript, Tailwind CSS, Framer Motion, App Router.</p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-2">
            <span className="text-xs font-mono font-bold text-sky-400">BACKEND</span>
            <span className="text-sm font-semibold text-white">Node.js & Express</span>
            <p className="text-xs text-slate-400">REST APIs, GraphQL, WebSockets, Laravel, PHP.</p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-2">
            <span className="text-xs font-mono font-bold text-emerald-400">DATABASE</span>
            <span className="text-sm font-semibold text-white">PostgreSQL & MongoDB</span>
            <p className="text-xs text-slate-400">Prisma ORM, Redis Caching, MySQL.</p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-2">
            <span className="text-xs font-mono font-bold text-purple-400">CLOUD</span>
            <span className="text-sm font-semibold text-white">Vercel & AWS</span>
            <p className="text-xs text-slate-400">Docker, CI/CD, Edge CDN, Sentry monitoring.</p>
          </div>
        </div>
      </div>

      <div className="p-8 rounded-3xl bg-slate-950 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <h3 className="text-2xl font-bold text-white">Ready to partner on your next project?</h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">Let's build your product properly.</p>
        </div>
        <Button variant="primary" size="md" href="/contact" showArrow>
          Start Your Project
        </Button>
      </div>
    </div>
  );
}
