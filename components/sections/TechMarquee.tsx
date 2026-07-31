"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/lib/site-config";
import { Code2, Server, Database, Cloud, Cpu, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

const TECH_CATEGORIES = [
  { id: "all", label: "All Tech Stack", icon: Layers },
  { id: "frontend", label: "Frontend Architecture", icon: Code2 },
  { id: "backend", label: "Server & APIs", icon: Server },
  { id: "database", label: "Databases & Caching", icon: Database },
  { id: "cloud", label: "DevOps & Cloud", icon: Cloud },
];

const DETAILED_TECH_ITEMS = [
  { name: "Next.js", category: "frontend", highlight: true },
  { name: "React", category: "frontend", highlight: true },
  { name: "TypeScript", category: "frontend", highlight: true },
  { name: "Tailwind CSS", category: "frontend", highlight: false },
  { name: "Framer Motion", category: "frontend", highlight: false },
  { name: "Node.js", category: "backend", highlight: true },
  { name: "Express", category: "backend", highlight: false },
  { name: "Laravel", category: "backend", highlight: false },
  { name: "PHP", category: "backend", highlight: false },
  { name: "PostgreSQL", category: "database", highlight: true },
  { name: "MongoDB", category: "database", highlight: false },
  { name: "Prisma", category: "database", highlight: true },
  { name: "Redis", category: "database", highlight: true },
  { name: "Docker", category: "cloud", highlight: true },
  { name: "AWS", category: "cloud", highlight: true },
  { name: "Vercel", category: "cloud", highlight: true },
  { name: "REST API", category: "backend", highlight: false },
  { name: "GraphQL", category: "backend", highlight: false },
  { name: "WebSockets", category: "backend", highlight: false },
];

export const TechMarquee: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = DETAILED_TECH_ITEMS.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  return (
    <section className="py-20 border-y border-white/10 bg-slate-950/60 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-10 text-center flex flex-col items-center gap-4">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-indigo-400">
          Engineered for Performance & Scale
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Technology Built for Scale
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {TECH_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-xs font-medium border transition-all flex items-center gap-1.5",
                  isActive
                    ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/20"
                    : "bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20"
                )}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Infinite Scrolling Marquee Track */}
      <div className="relative w-full overflow-hidden flex items-center py-4">
        {/* Left & Right Blur Fades */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-4">
          {[...filteredItems, ...filteredItems, ...filteredItems].map((item, idx) => (
            <div
              key={idx}
              className={cn(
                "px-6 py-3 rounded-xl border backdrop-blur-md flex items-center gap-2.5 whitespace-nowrap text-sm font-semibold transition-all hover:scale-105 select-none",
                item.highlight
                  ? "bg-indigo-500/10 border-indigo-500/30 text-indigo-200"
                  : "bg-white/5 border-white/10 text-slate-300 hover:border-white/20"
              )}
            >
              <Cpu className="w-4 h-4 text-indigo-400" />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
