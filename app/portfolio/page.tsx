"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PROJECTS_DATA } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { JsonLd } from "@/components/seo/JsonLd";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ArrowUpRight, ExternalLink, Globe, ShieldAlert, CheckCircle2, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORY_TABS = [
  { id: "all", label: "All Projects" },
  { id: "healthtech", label: "HealthTech & Medical" },
  { id: "iot", label: "IoT & Building Automation" },
  { id: "industrial", label: "Industrial Power & Telemetry" },
  { id: "studio", label: "Digital Studio & Corporate" },
];

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeTab === "all") return true;
    if (activeTab === "healthtech") return project.category.includes("HealthTech");
    if (activeTab === "iot") return project.category.includes("IoT");
    if (activeTab === "industrial") return project.category.includes("Industrial");
    if (activeTab === "studio") return project.category.includes("Studio") || project.category.includes("Corporate");
    return true;
  });

  return (
    <div className="pt-28 sm:pt-36 pb-16 sm:pb-24 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col gap-8 sm:gap-12 relative z-10">
      <JsonLd
        type="ProfessionalService"
        data={{
          name: "Portfolio & Case Studies",
          description: "Live production applications engineered across HealthTech, IoT Control Dashboards, and Digital Studios.",
        }}
      />

      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-3 sm:gap-4">
        <span className="text-xs font-mono font-bold tracking-widest text-indigo-600 uppercase">
          PRODUCTION WORK PORTFOLIO
        </span>
        <h1 className="text-3xl xs:text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight font-heading">
          Selected Live Work & Engineering UI
        </h1>
        <p className="text-slate-600 text-xs sm:text-base lg:text-lg leading-relaxed">
          Real production applications designed and engineered for clients — with live UI visual previews, telemetry dashboards, and real production URLs.
        </p>
      </div>

      {/* Top Engineering Stats Strip */}
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xl shadow-slate-200/40">
        <div className="flex flex-col gap-1 p-2">
          <span className="text-[10px] sm:text-[11px] font-mono uppercase font-bold text-slate-500">Live Projects</span>
          <span className="text-xl sm:text-3xl font-extrabold text-emerald-600 font-heading">
            <AnimatedCounter to={7} suffix=" Production" />
          </span>
        </div>

        <div className="flex flex-col gap-1 p-2 xs:border-l border-slate-200 xs:pl-4">
          <span className="text-[10px] sm:text-[11px] font-mono uppercase font-bold text-slate-500">IoT Devices Managed</span>
          <span className="text-xl sm:text-3xl font-extrabold text-indigo-600 font-heading">
            <AnimatedCounter to={10} suffix="k+" />
          </span>
        </div>

        <div className="flex flex-col gap-1 p-2 md:border-l border-slate-200 md:pl-4">
          <span className="text-[10px] sm:text-[11px] font-mono uppercase font-bold text-slate-500">Avg Response Speed</span>
          <span className="text-xl sm:text-3xl font-extrabold text-sky-600 font-heading">
            &lt; 0.4s
          </span>
        </div>

        <div className="flex flex-col gap-1 p-2 xs:border-l border-slate-200 xs:pl-4">
          <span className="text-[10px] sm:text-[11px] font-mono uppercase font-bold text-slate-500">System Uptime</span>
          <span className="text-xl sm:text-3xl font-extrabold text-amber-600 font-heading">
            99.99%
          </span>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar max-w-full pb-2">
        {CATEGORY_TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-4 py-2.5 rounded-full text-xs font-semibold transition-all border select-none shrink-0 min-h-[44px] flex items-center justify-center",
                isActive
                  ? "bg-gradient-to-r from-indigo-600 to-sky-500 text-white border-transparent shadow-md shadow-indigo-500/20"
                  : "bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300"
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group rounded-3xl bg-white border border-slate-200/80 overflow-hidden hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between shadow-xl shadow-slate-200/40"
          >
            {/* Visual UI Header Frame */}
            <div className="p-6 bg-slate-50 border-b border-slate-200/80 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold font-mono">
                  {project.category}
                </span>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] font-mono px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 hover:bg-emerald-100 transition-colors"
                  >
                    <Globe className="w-3.5 h-3.5" /> Live Production
                  </a>
                )}
              </div>

              {/* Browser Window Frame & Screenshot */}
              <div className="rounded-2xl bg-white border border-slate-200 p-3 sm:p-4 flex flex-col gap-3 overflow-hidden shadow-sm">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="ml-2 text-[10px] font-mono text-slate-500 truncate max-w-[200px]">
                      {project.demoUrl ? project.demoUrl.replace("https://", "") : project.title}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                    UI Preview
                  </span>
                </div>

                {project.image && (
                  <div className="relative w-full h-48 rounded-xl overflow-hidden border border-slate-100 group-hover:scale-[1.01] transition-transform duration-300">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                )}

                <div className="flex flex-col gap-1 pt-1">
                  <h3 className="text-xl font-bold text-slate-900 font-heading group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-indigo-600 font-mono">{project.tagline}</p>
                </div>
              </div>
            </div>

            {/* Informative Body Content */}
            <div className="p-6 flex flex-col gap-5">
              <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-rose-700 mb-1">
                  <ShieldAlert className="w-3.5 h-3.5" /> Core Challenge & Requirement
                </div>
                <p className="text-slate-700 leading-relaxed">{project.problem}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-emerald-700 mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Engineering Solution Delivered
                </div>
                <p className="text-slate-700 leading-relaxed">{project.solution}</p>
              </div>

              {/* Quantifiable Metrics */}
              <div className="grid grid-cols-3 gap-2">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                    <span className="text-[10px] text-slate-500 font-mono block truncate">{m.label}</span>
                    <span className="text-xs font-bold text-emerald-600 font-mono block mt-0.5">{m.value}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.technologies.map((t) => (
                  <span key={t} className="text-[10px] font-mono text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <Link
                href={`/case-studies/${project.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-indigo-600 transition-colors"
              >
                <span>Read Full Case Study</span>
                <ArrowUpRight className="w-4 h-4 text-indigo-600 group-hover:translate-x-1 transition-transform" />
              </Link>

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-200 text-xs font-bold hover:bg-indigo-600 hover:text-white transition-all"
                >
                  <span>Visit Live App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
