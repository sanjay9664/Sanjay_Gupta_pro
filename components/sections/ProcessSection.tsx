"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/data/process-steps";
import { Compass, Layers, Layout, Code, CheckCircle2, Rocket, TrendingUp, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-5 h-5 text-indigo-400" />,
  Layers: <Layers className="w-5 h-5 text-sky-400" />,
  Layout: <Layout className="w-5 h-5 text-purple-400" />,
  Code: <Code className="w-5 h-5 text-emerald-400" />,
  CheckCircle2: <CheckCircle2 className="w-5 h-5 text-amber-400" />,
  Rocket: <Rocket className="w-5 h-5 text-rose-400" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-cyan-400" />,
};

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10 relative">
      <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4 mb-16">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-indigo-400">
          Proven Engineering Methodology
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          How We Build Digital Products
        </h2>
        <p className="text-slate-400 text-base">
          A transparent, 7-phase development pipeline engineered for zero friction, predictable delivery, and enterprise-quality execution.
        </p>
      </div>

      {/* Horizontal Interactive Step Pipeline Tabs */}
      <div className="flex items-center justify-between gap-2 overflow-x-auto pb-6 mb-10 no-scrollbar">
        {PROCESS_STEPS.map((step, idx) => {
          const isActive = activeStep === idx;
          const isPast = idx < activeStep;
          return (
            <button
              key={step.number}
              onClick={() => setActiveStep(idx)}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-2xl border text-xs font-medium whitespace-nowrap transition-all select-none shrink-0",
                isActive
                  ? "bg-indigo-600/20 border-indigo-500 text-white shadow-lg shadow-indigo-500/10"
                  : isPast
                  ? "bg-white/5 border-emerald-500/30 text-emerald-300"
                  : "bg-white/5 border-white/10 text-slate-400 hover:border-white/20"
              )}
            >
              <span
                className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono font-bold",
                  isActive
                    ? "bg-indigo-500 text-white"
                    : isPast
                    ? "bg-emerald-500/20 text-emerald-400"
                    : "bg-white/10 text-slate-400"
                )}
              >
                {isPast ? <Check className="w-3 h-3" /> : step.number}
              </span>
              <span>{step.title}</span>
            </button>
          );
        })}
      </div>

      {/* Detailed Active Step Focus Card */}
      <motion.div
        key={activeStep}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-3xl bg-slate-900 border border-white/10 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 shadow-2xl"
      >
        <div className="lg:col-span-7 flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-indigo-400 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                Phase {PROCESS_STEPS[activeStep].number}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {PROCESS_STEPS[activeStep].subtitle}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {PROCESS_STEPS[activeStep].title}
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {PROCESS_STEPS[activeStep].description}
            </p>
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-white/10 text-xs text-slate-400">
            <span>Click any phase above to preview key milestones.</span>
          </div>
        </div>

        {/* Milestone Bullet Checklist */}
        <div className="lg:col-span-5 bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col justify-center gap-4">
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
            Key Phase Deliverables
          </h4>
          <ul className="flex flex-col gap-3">
            {PROCESS_STEPS[activeStep].details.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};
