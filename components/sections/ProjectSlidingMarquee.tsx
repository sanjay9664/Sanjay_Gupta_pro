"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS_DATA } from "@/data/projects";
import { 
  Rocket, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  LayoutGrid, 
  Users, 
  Sparkles,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";

interface ProjectSlidingMarqueeProps {
  onOpenInquiry?: () => void;
}

export const ProjectSlidingMarquee: React.FC<ProjectSlidingMarqueeProps> = ({ onOpenInquiry }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const totalProjects = PROJECTS_DATA.length;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalProjects);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  // Auto rotate circular wheel every 4 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, [isPaused, totalProjects]);

  const activeProject = PROJECTS_DATA[activeIndex];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50/90 via-white to-indigo-50/40 relative overflow-hidden border-t border-b border-slate-200/80">
      
      {/* Light Ambient Glowing Background Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-200/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-sky-200/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines, Description, Buttons & Mini Stats */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start gap-5 text-center sm:text-left">
            
            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading text-slate-900 leading-[1.15] text-center sm:text-left"
            >
              Explore Our <span className="text-gradient-indigo">Live Web Apps</span> & Systems
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-md text-center sm:text-left"
            >
              Compact portfolio showcase of recent enterprise SaaS, telemetry portals, and web platforms built for high performance.
            </motion.p>

          </div>

          {/* Right Column: 3D Circular Wheel Carousel Stage */}
          <div 
            className="lg:col-span-7 relative flex items-center justify-center min-h-[460px] sm:min-h-[500px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            
            {/* Background Circular Orbital Guide Line */}
            <div className="absolute w-[360px] sm:w-[480px] h-[360px] sm:h-[480px] rounded-full border border-indigo-200/50 pointer-events-none" />
            <div className="absolute w-[440px] sm:w-[580px] h-[440px] sm:h-[580px] rounded-full border border-indigo-100/40 pointer-events-none" />

            {/* Circular Carousel Items Render */}
            <div className="relative w-full max-w-lg flex items-center justify-center">
              {PROJECTS_DATA.map((project, idx) => {
                // Calculate position relative to active index
                const offset = (idx - activeIndex + totalProjects) % totalProjects;
                let position: "active" | "prev" | "next" | "hidden" = "hidden";

                if (offset === 0) position = "active";
                else if (offset === 1 || (activeIndex === totalProjects - 1 && idx === 0)) position = "next";
                else if (offset === totalProjects - 1) position = "prev";

                if (position === "hidden") return null;

                const isActive = position === "active";
                const isNext = position === "next";
                const isPrev = position === "prev";

                return (
                  <motion.div
                    key={project.id}
                    layout
                    drag={isActive ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -30) handleNext();
                      else if (info.offset.x > 30) handlePrev();
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: isActive ? 1 : 0.35,
                      scale: isActive ? 1 : (isMobile ? 0.72 : 0.78),
                      x: isActive ? 0 : isNext ? (isMobile ? 85 : 140) : (isMobile ? -85 : -140),
                      zIndex: isActive ? 30 : 10,
                      rotateY: isActive ? 0 : isNext ? -12 : 12,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 240,
                      damping: 25,
                      mass: 0.7
                    }}
                    onClick={() => {
                      if (isNext) handleNext();
                      if (isPrev) handlePrev();
                    }}
                    className={`absolute rounded-[36px] p-5 sm:p-6 transition-colors duration-300 ${
                      isActive
                        ? "w-[300px] xs:w-[330px] sm:w-[360px] bg-slate-950 text-white shadow-2xl shadow-indigo-950/40 border-4 border-indigo-500/40 cursor-grab active:cursor-grabbing"
                        : "w-[240px] sm:w-[270px] bg-white border border-slate-200 text-slate-800 shadow-md cursor-pointer hover:opacity-80"
                    }`}
                  >
                    {/* Top Category Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold ${
                        isActive ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-700"
                      }`}>
                        {project.category}
                      </span>
                      {isActive && (
                        <span className="flex h-2.5 w-2.5 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                        </span>
                      )}
                    </div>

                    {/* Screenshot Frame */}
                    <div className={`relative w-full overflow-hidden rounded-2xl mb-4 border ${
                      isActive ? "h-40 sm:h-44 border-slate-800" : "h-28 sm:h-32 border-slate-200"
                    }`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/projects/fev-emblem-max.png";
                        }}
                      />
                    </div>

                    {/* Title & Tagline */}
                    <h3 className={`font-bold font-heading line-clamp-1 ${
                      isActive ? "text-base sm:text-lg text-white" : "text-xs font-bold text-slate-900"
                    }`}>
                      {project.title}
                    </h3>

                    {isActive && (
                      <p className="text-xs text-slate-400 line-clamp-2 mt-1 mb-3">
                        {project.tagline}
                      </p>
                    )}

                    {/* Tech Pills */}
                    {isActive && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-indigo-300 font-semibold">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Active CTA Button */}
                    {isActive && (
                      <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                        <Link
                          href={`/portfolio#${project.slug}`}
                          className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-md shadow-indigo-600/30"
                        >
                          <span>View Case Study</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>

                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
                            title="Live Demo"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Floating Navigation Controls on Active Card Edges */}
            <button
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="absolute left-0 sm:left-4 z-40 w-11 h-11 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center shadow-xl shadow-indigo-600/30 transition-all hover:scale-110 active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              aria-label="Next Slide"
              className="absolute right-0 sm:right-4 z-40 w-11 h-11 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center shadow-xl shadow-indigo-600/30 transition-all hover:scale-110 active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Pagination Dots at Bottom */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 z-40">
              {PROJECTS_DATA.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setActiveIndex(dotIdx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === dotIdx
                      ? "w-8 bg-indigo-600 shadow-md shadow-indigo-600/40"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
