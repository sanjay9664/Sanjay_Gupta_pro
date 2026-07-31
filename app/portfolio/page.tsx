import React from "react";
import Link from "next/link";
import { PROJECTS_DATA } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArrowUpRight, ExternalLink, Globe, ShieldAlert, CheckCircle2, Server } from "lucide-react";

export const metadata = {
  title: "Portfolio & Live Client Projects | Full-Stack Web Agency",
  description: "Explore our portfolio of live production web applications, IoT control dashboards, telehealth platforms, and digital products.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col gap-16">
      <JsonLd
        type="ProfessionalService"
        data={{
          name: "Portfolio & Case Studies",
          description: "Live production projects built across HealthTech, IoT Dashboards, and Web Applications.",
        }}
      />

      <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4">
        <Badge variant="indigo">Production Work Portfolio</Badge>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Selected Live Projects & Applications
        </h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          Real production applications engineered for clients — ranging from industrial IoT telematics portals and healthcare platforms to modern digital flagships.
        </p>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project) => (
          <div
            key={project.id}
            className="p-8 rounded-3xl bg-slate-900 border border-white/10 flex flex-col justify-between gap-6 hover:border-indigo-500/40 transition-all shadow-xl group"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <Badge variant="indigo">{project.category}</Badge>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 transition-colors"
                  >
                    <Globe className="w-3 h-3" /> Live URL
                  </a>
                )}
              </div>

              <h2 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                {project.title}
              </h2>
              <p className="text-xs font-mono text-indigo-400">{project.tagline}</p>
              <p className="text-sm text-slate-300 leading-relaxed">{project.problem}</p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-2 pt-2">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-[10px] text-slate-400 font-mono">{m.label}</div>
                    <div className="text-xs sm:text-sm font-bold text-emerald-400 font-mono mt-0.5">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 3).map((t) => (
                  <span key={t} className="text-[10px] font-mono text-slate-400 bg-black/40 px-2 py-0.5 rounded border border-white/10">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  href={`/case-studies/${project.slug}`}
                  showArrow
                >
                  Details
                </Button>

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-indigo-600/20 text-indigo-300 border border-indigo-500/40 hover:bg-indigo-600 hover:text-white transition-colors"
                    aria-label="Visit live website"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
