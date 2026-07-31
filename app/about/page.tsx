import React from "react";
import { SITE_CONFIG } from "@/lib/site-config";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { CheckCircle2, Code2, Server, Database, Cloud, Terminal, Sparkles, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us | Full-Stack Product Studio & Architecture",
  description: "Learn more about our development philosophy, tech stack, and experience building high-performance web applications for startups and enterprise clients.",
};

export default function AboutPage() {
  return (
    <div className="pt-36 pb-24 px-4 sm:px-8 max-w-5xl mx-auto flex flex-col gap-14 relative z-10">
      <JsonLd
        type="Organization"
        data={{
          name: SITE_CONFIG.brandName,
          description: SITE_CONFIG.longDescription,
        }}
      />

      <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4">
        <span className="text-xs font-mono font-bold tracking-widest text-indigo-600 uppercase">
          PRODUCT STUDIO PHILOSOPHY
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight font-heading">
          Not Just Code. Products Engineered Around Business Goals.
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          {SITE_CONFIG.longDescription}
        </p>
      </div>

      <div className="p-8 rounded-3xl bg-white border border-slate-200/80 flex flex-col gap-8 shadow-xl shadow-slate-200/40">
        <h2 className="text-2xl font-bold text-slate-900 font-heading">Full-Stack Tech Stack Architecture</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-2">
            <span className="text-xs font-mono font-bold text-indigo-600">FRONTEND</span>
            <span className="text-sm font-bold text-slate-900 font-heading">Next.js & React</span>
            <p className="text-xs text-slate-600">TypeScript, Tailwind CSS, Framer Motion, App Router.</p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-2">
            <span className="text-xs font-mono font-bold text-sky-600">BACKEND</span>
            <span className="text-sm font-bold text-slate-900 font-heading">Node.js & Express</span>
            <p className="text-xs text-slate-600">REST APIs, GraphQL, WebSockets, Laravel PHP.</p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-2">
            <span className="text-xs font-mono font-bold text-emerald-600">DATABASE</span>
            <span className="text-sm font-bold text-slate-900 font-heading">PostgreSQL & Redis</span>
            <p className="text-xs text-slate-600">Prisma ORM, Redis Caching, MySQL, MongoDB.</p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-2">
            <span className="text-xs font-mono font-bold text-purple-600">CLOUD</span>
            <span className="text-sm font-bold text-slate-900 font-heading">Vercel & AWS</span>
            <p className="text-xs text-slate-600">Docker, CI/CD, Edge CDN, Sentry monitoring.</p>
          </div>
        </div>
      </div>

      <div className="p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-xl">
        <div>
          <h3 className="text-2xl font-bold text-white font-heading">Ready to partner on your next project?</h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">Let's build your product properly with zero technical debt.</p>
        </div>
        <a
          href="/contact"
          className="px-6 py-3 rounded-full bg-indigo-600 text-white text-xs font-bold shadow-lg hover:bg-indigo-500 transition-all flex items-center gap-2"
        >
          <span>Start Your Project</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
