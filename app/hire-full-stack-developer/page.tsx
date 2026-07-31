import React from "react";
import { SITE_CONFIG } from "@/lib/site-config";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { Server, Database, Code2, Cloud, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Hire Full-Stack Developer | Node.js, React & Cloud Architect",
  description: "Hire a senior full-stack web developer to design and launch complete digital products, SaaS applications, APIs, and cloud backends.",
};

export default function HireFullStackDeveloperPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 max-w-5xl mx-auto flex flex-col gap-16">
      <JsonLd
        type="ProfessionalService"
        data={{
          name: "Hire Full-Stack Developer Services",
          description: "End-to-end full-stack web application engineering.",
        }}
      />

      <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-6">
        <Badge variant="emerald">End-To-End Engineering Partner</Badge>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Hire a Senior <span className="text-gradient-accent">Full-Stack Developer</span>
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          From frontend UI design to PostgreSQL databases, REST/GraphQL APIs, Stripe subscriptions, and Vercel/AWS cloud infrastructure.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Button variant="primary" size="lg" href="/contact" showArrow>
            Hire Full-Stack Engineer
          </Button>
          <Button variant="secondary" size="lg" href="/portfolio">
            View Case Studies
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl bg-slate-900 border border-white/10 flex flex-col gap-4">
          <Server className="w-8 h-8 text-indigo-400" />
          <h3 className="text-xl font-bold text-white">Frontend & UI Excellence</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Next.js App Router, React Server Components, Tailwind CSS styling, responsive layouts, and smooth animations.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-slate-900 border border-white/10 flex flex-col gap-4">
          <Database className="w-8 h-8 text-emerald-400" />
          <h3 className="text-xl font-bold text-white">Backend & Cloud Architecture</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Node.js, Express, PostgreSQL, MongoDB, Redis caching, Prisma ORM, Stripe billing, and Docker containers.
          </p>
        </div>
      </div>
    </div>
  );
}
