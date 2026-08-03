"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PROJECTS_DATA } from "@/data/projects";
import { ProjectItem } from "@/types";
import { JsonLd } from "@/components/seo/JsonLd";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { 
  ArrowUpRight, 
  ArrowLeft,
  ExternalLink, 
  Globe, 
  ShieldAlert, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  Maximize2
} from "lucide-react";
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeTab === "all") return true;
    if (activeTab === "healthtech") return project.category.includes("HealthTech");
    if (activeTab === "iot") return project.category.includes("IoT");
    if (activeTab === "industrial") return project.category.includes("Industrial");
    if (activeTab === "studio") return project.category.includes("Studio") || project.category.includes("Corporate");
    return true;
  });

  // Continuous Auto-Sliding (3 seconds, pauses on hover or when modal is open)
  useEffect(() => {
    if (isHovered || activeModalProject || filteredProjects.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === filteredProjects.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered, activeModalProject, filteredProjects.length]);

  // ESC Key listener to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Reset index when tab changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTab]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === filteredProjects.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="pt-28 sm:pt-36 pb-16 sm:pb-24 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col gap-8 sm:gap-10 relative z-10">
      <JsonLd
        type="ProfessionalService"
        data={{
          name: "Portfolio & Case Studies",
          description: "Live production applications engineered across HealthTech, IoT Control Dashboards, and Digital Studios.",
        }}
      />

      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-3 sm:gap-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 text-xs font-mono font-bold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PRODUCTION WORK PORTFOLIO</span>
        </div>
        <h1 className="text-3xl xs:text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-heading">
          Selected Live Work & Engineering UI
        </h1>
        <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
          Real production applications designed and engineered for clients — click any project card to view full details.
        </p>
      </div>

      {/* Top Engineering Stats Strip */}
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xl shadow-slate-200/40">
        <div className="flex flex-col gap-1 p-2">
          <span className="text-[10px] sm:text-[11px] font-mono uppercase font-bold text-slate-500">Live Projects</span>
          <span className="text-xl sm:text-2xl font-extrabold text-emerald-600 font-heading">
            <AnimatedCounter to={10} suffix=" Production" />
          </span>
        </div>

        <div className="flex flex-col gap-1 p-2 xs:border-l border-slate-200 xs:pl-4">
          <span className="text-[10px] sm:text-[11px] font-mono uppercase font-bold text-slate-500">IoT Devices Managed</span>
          <span className="text-xl sm:text-2xl font-extrabold text-indigo-600 font-heading">
            <AnimatedCounter to={10} suffix="k+" />
          </span>
        </div>

        <div className="flex flex-col gap-1 p-2 md:border-l border-slate-200 md:pl-4">
          <span className="text-[10px] sm:text-[11px] font-mono uppercase font-bold text-slate-500">Avg Response Speed</span>
          <span className="text-xl sm:text-2xl font-extrabold text-sky-600 font-heading">
            &lt; 0.3s
          </span>
        </div>

        <div className="flex flex-col gap-1 p-2 xs:border-l border-slate-200 xs:pl-4">
          <span className="text-[10px] sm:text-[11px] font-mono uppercase font-bold text-slate-500">System Uptime</span>
          <span className="text-xl sm:text-2xl font-extrabold text-amber-600 font-heading">
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
                "px-3.5 py-2 rounded-full text-xs font-semibold transition-all border select-none shrink-0 min-h-[40px] flex items-center justify-center cursor-pointer",
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

      {/* Continuous Auto-Sliding 3D Interactive Carousel Showcase (Pauses on Hover) */}
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full py-4 sm:py-6 overflow-hidden select-none"
      >
        
        {/* Navigation Arrow Left */}
        <button
          onClick={handlePrev}
          aria-label="Previous project"
          className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900/90 border border-slate-700 text-white flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-indigo-600 transition-all cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Navigation Arrow Right */}
        <button
          onClick={handleNext}
          aria-label="Next project"
          className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900/90 border border-slate-700 text-white flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-indigo-600 transition-all cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Carousel Slide Stage */}
        <div className="min-h-[440px] sm:min-h-[480px] flex items-center justify-center relative perspective-[1000px] px-2">
          {filteredProjects.map((project, idx) => {
            let offset = idx - currentIndex;
            if (offset < -Math.floor(filteredProjects.length / 2)) {
              offset += filteredProjects.length;
            } else if (offset > Math.floor(filteredProjects.length / 2)) {
              offset -= filteredProjects.length;
            }

            const isCurrent = offset === 0;
            const isHidden = Math.abs(offset) >= 2;

            return (
              <div
                key={project.id}
                onClick={() => {
                  if (isCurrent) {
                    setActiveModalProject(project);
                  } else {
                    setCurrentIndex(idx);
                  }
                }}
                className={cn(
                  "absolute w-full max-w-md sm:max-w-lg rounded-2xl bg-slate-950 border transition-all duration-500 ease-out cursor-pointer overflow-hidden shadow-2xl group",
                  isCurrent && "z-30 scale-100 opacity-100 border-indigo-500/60 shadow-indigo-500/20 translate-x-0 rotate-y-0",
                  offset === -1 && "z-20 scale-90 opacity-60 border-slate-800 -translate-x-[55%] sm:-translate-x-[68%] -rotate-y-12 blur-[0.5px]",
                  offset === 1 && "z-20 scale-90 opacity-60 border-slate-800 translate-x-[55%] sm:translate-x-[68%] rotate-y-12 blur-[0.5px]",
                  isHidden && "opacity-0 pointer-events-none scale-75 z-10"
                )}
              >
                {/* Visual Header */}
                <div className="p-3.5 sm:p-4 bg-slate-900 border-b border-slate-800 flex flex-col gap-2.5">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-[10px] font-bold font-mono">
                      {project.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                      <Globe className="w-3 h-3" /> Production UI
                    </span>
                  </div>

                  {/* Browser Bar & Image */}
                  <div className="rounded-xl bg-slate-950 border border-slate-800 p-2.5 flex flex-col gap-2 shadow-inner relative overflow-hidden">
                    <div className="flex items-center justify-between pb-1.5 border-b border-slate-800/80">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-rose-500" />
                        <div className="w-2 h-2 rounded-full bg-amber-500" />
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      </div>
                      <span className="text-[9px] font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">
                        Click to Expand 🔍
                      </span>
                    </div>

                    {project.image && (
                      <div className="relative w-full h-36 sm:h-44 rounded-lg overflow-hidden border border-slate-800 group-hover:scale-[1.02] transition-transform duration-300">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="px-4 py-2 rounded-full bg-indigo-600 text-white text-xs font-bold shadow-lg flex items-center gap-1.5">
                            <Maximize2 className="w-3.5 h-3.5" /> View Full Details
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-4 flex flex-col gap-3 text-slate-300">
                  <div>
                    <h3 className="text-lg font-bold text-white font-heading group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-indigo-400 font-mono truncate">{project.tagline}</p>
                  </div>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((t) => (
                      <span key={t} className="text-[9px] font-mono text-slate-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="px-4 py-3 border-t border-slate-800/80 flex items-center justify-between bg-slate-900/60 text-xs">
                  <span className="text-indigo-400 font-semibold group-hover:underline flex items-center gap-1">
                    View Details <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>

                  {project.demoUrl && (
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold">
                      Live App Active
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 pt-4">
          {filteredProjects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={cn(
                "h-2 rounded-full transition-all duration-300 cursor-pointer",
                idx === currentIndex ? "w-6 bg-indigo-500" : "w-2 bg-slate-700 hover:bg-slate-500"
              )}
            />
          ))}
        </div>
      </div>

      {/* Optimized Compact Project Detail Popup Modal */}
      {activeModalProject && (
        <div 
          onClick={() => setActiveModalProject(null)}
          className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-md flex items-start sm:items-center justify-center p-3 sm:p-6 overflow-y-auto pt-20 sm:pt-24"
        >
          <div 
            className="relative w-full max-w-3xl rounded-3xl bg-slate-900 border border-slate-800 p-5 sm:p-7 text-white shadow-2xl flex flex-col gap-5 max-h-[82vh] overflow-y-auto my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Header Bar with Prominent Back Button */}
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3.5 sticky top-0 bg-slate-900/95 backdrop-blur z-20 pt-1">
              <button
                onClick={() => setActiveModalProject(null)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all cursor-pointer shadow-lg shadow-indigo-600/30"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>← Back to Work</span>
              </button>

              <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
                Press ESC to close
              </span>
            </div>

            {/* Header Info */}
            <div className="flex flex-col gap-1.5">
              <span className="px-3 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-[11px] font-mono font-bold w-fit">
                {activeModalProject.category}
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-white">
                {activeModalProject.title}
              </h2>
              <p className="text-xs text-indigo-400 font-mono">
                {activeModalProject.tagline}
              </p>
            </div>

            {/* Image Preview */}
            {activeModalProject.image && (
              <div className="relative w-full h-44 sm:h-60 rounded-2xl overflow-hidden border border-slate-800 shadow-inner">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            )}

            {/* Problem & Solution Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-xs flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5 font-bold text-rose-400">
                  <ShieldAlert className="w-3.5 h-3.5" /> Core Challenge & Scope
                </div>
                <p className="text-slate-300 leading-relaxed text-[11px] sm:text-xs">{activeModalProject.problem}</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-xs flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5 font-bold text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Engineering Solution
                </div>
                <p className="text-slate-300 leading-relaxed text-[11px] sm:text-xs">{activeModalProject.solution}</p>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-2.5">
              {activeModalProject.metrics.map((m, idx) => (
                <div key={idx} className="p-2.5 rounded-2xl bg-slate-950 border border-slate-800 text-center">
                  <span className="text-[9px] text-slate-400 font-mono block truncate">{m.label}</span>
                  <span className="text-xs sm:text-sm font-bold text-emerald-400 font-mono block mt-0.5">{m.value}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5">
              {activeModalProject.technologies.map((t) => (
                <span key={t} className="text-[10px] font-mono text-slate-300 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
                  {t}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 text-xs font-bold transition-all cursor-pointer border border-slate-700 flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>← Back to Work</span>
                </button>
                <Link
                  href={`/case-studies/${activeModalProject.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 hover:underline"
                >
                  <span>Read Detailed Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {activeModalProject.demoUrl && (
                <a
                  href={activeModalProject.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 text-white text-xs font-bold shadow-lg hover:scale-105 transition-all"
                >
                  <span>Visit Live Application</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
