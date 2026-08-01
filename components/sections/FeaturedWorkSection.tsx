"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PROJECTS_DATA } from "@/data/projects";
import { ArrowUpRight, Globe, ExternalLink, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const FeaturedWorkSection: React.FC = () => {
  // Show only top 3 projects on the homepage landing page for extreme clarity
  const featuredProjects = PROJECTS_DATA.slice(0, 3);

  return (
    <section id="work" className="py-16 sm:py-20 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 relative">
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8 sm:mb-12">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-indigo-400">
            Featured Live Projects
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Selected Live Work
          </h2>
        </div>

        <Button
          variant="secondary"
          size="sm"
          href="/portfolio"
          showArrow
          data-cursor="Portfolio"
          className="w-fit cursor-pointer"
        >
          View All {PROJECTS_DATA.length} Projects
        </Button>
      </div>

      {/* Streamlined Live Project Showcase Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {featuredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="group rounded-2xl bg-slate-900/90 border border-white/10 p-5 sm:p-6 flex flex-col justify-between gap-5 hover:border-indigo-500/40 transition-all shadow-xl"
            data-cursor="View"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between gap-2">
                <Badge variant="indigo" className="truncate max-w-[160px]">{project.category}</Badge>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 transition-colors shrink-0"
                  >
                    <Globe className="w-3 h-3" /> Live Site
                  </a>
                )}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors leading-snug">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-indigo-400 truncate">{project.tagline}</p>
              <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                {project.solution}
              </p>

              {/* Metrics Pills */}
              <div className="grid grid-cols-1 xs:grid-cols-3 gap-1.5 pt-2">
                {project.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="p-2 rounded-lg bg-white/5 border border-white/10 text-center">
                    <span className="text-[9px] text-slate-400 font-mono block truncate">{m.label}</span>
                    <span className="text-xs font-bold text-emerald-400 font-mono block mt-0.5">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <Link
                href={`/case-studies/${project.slug}`}
                className="inline-flex items-center gap-1 text-xs font-semibold text-white hover:text-indigo-300 transition-colors"
              >
                <span>Read Details</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-indigo-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-indigo-600/20 text-indigo-300 border border-indigo-500/40 hover:bg-indigo-600 hover:text-white transition-colors"
                  aria-label="Visit live app"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
