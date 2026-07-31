import React from "react";
import { SITE_CONFIG } from "@/lib/site-config";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { Code2, Zap, ShieldCheck, Layers } from "lucide-react";

export const metadata = {
  title: "Hire Senior React Developer | Custom Frontend Engineering",
  description: "Hire an experienced senior React developer to craft bespoke web applications, interactive dashboards, and scalable UI component design systems.",
};

export default function HireReactDeveloperPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 max-w-5xl mx-auto flex flex-col gap-16">
      <JsonLd
        type="ProfessionalService"
        data={{
          name: "Hire React Developer Services",
          description: "Senior React frontend developer for custom web applications and UI design systems.",
        }}
      />

      <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-6">
        <Badge variant="cyan">Frontend Architecture Specialist</Badge>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Hire a Senior <span className="text-gradient-accent">React Developer</span>
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          Craft pixel-perfect user interfaces, high-frequency state management workflows, and accessible React design systems.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Button variant="primary" size="lg" href="/contact" showArrow>
            Hire React Developer
          </Button>
          <Button variant="secondary" size="lg" href="/portfolio">
            View Work
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-slate-900 border border-white/10 flex flex-col gap-3">
          <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 w-fit">
            <Code2 className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Custom Component Libraries</h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Clean, reusable React component systems built with Tailwind CSS, Framer Motion, and Radix accessibility primitives.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900 border border-white/10 flex flex-col gap-3">
          <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 w-fit">
            <Zap className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Complex State & Analytics</h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Data-dense analytics dashboards, real-time WebSocket feeds, and paginated data tables with optimistic updates.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900 border border-white/10 flex flex-col gap-3">
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">100% Type-Safe TypeScript</h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Zero runtime type errors. Strict prop contracts, custom hooks, and comprehensive code documentation.
          </p>
        </div>
      </div>
    </div>
  );
}
