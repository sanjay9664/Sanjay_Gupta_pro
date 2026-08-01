"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PROCESS_STEPS_DATA } from "@/data/process-steps";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = PROCESS_STEPS_DATA[activeStep];

  return (
    <section id="process" className="py-16 sm:py-20 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 relative">
      <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-3 mb-8 sm:mb-12">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600">
          5-Phase Engineering Pipeline
        </span>
        <h2 className="text-2xl xs:text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
          How We Build Your Application
        </h2>
        <p className="text-slate-600 text-xs sm:text-base max-w-xl">
          A disciplined, transparent development process ensuring zero technical debt, predictable timelines, and clean handovers.
        </p>
      </div>

      {/* Process Tabs */}
      <div className="flex items-center justify-start sm:justify-center gap-2 mb-8 sm:mb-10 overflow-x-auto no-scrollbar max-w-full pb-2">
        {PROCESS_STEPS_DATA.map((step, idx) => {
          const isActive = activeStep === idx;
          return (
            <button
              key={step.number}
              onClick={() => setActiveStep(idx)}
              className={cn(
                "px-4 sm:px-5 py-2.5 rounded-full text-xs font-semibold transition-all border select-none flex items-center gap-2 shrink-0 min-h-[44px]",
                isActive
                  ? "bg-gradient-to-r from-indigo-600 to-sky-500 text-white border-transparent shadow-lg shadow-indigo-500/20"
                  : "bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300"
              )}
            >
              <span className="font-mono text-[11px] opacity-80">{step.number}</span>
              <span>{step.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Phase Card Display */}
      <motion.div
        key={currentStep.number}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="p-5 sm:p-8 lg:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-xl shadow-slate-200/40 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center"
      >
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100">
              PHASE {currentStep.number}
            </span>
            <span className="text-xs text-slate-500 font-mono">STEP {currentStep.number} OF 05</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
            {currentStep.title}: {currentStep.subtitle}
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed">
            {currentStep.description}
          </p>

          <div className="pt-2">
            <h4 className="text-xs font-mono font-bold uppercase text-slate-500 mb-3">Key Deliverables:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {currentStep.details.map((del, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{del}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Phase Summary Pill Column */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-4">
          <span className="text-xs font-mono font-bold uppercase text-indigo-600">PHASE OUTCOME</span>
          <p className="text-xs text-slate-600 leading-relaxed">
            Every phase produces tangible, inspectable assets — code commits, Figma specs, staging URLs, or automated test suites.
          </p>
          <div className="pt-2 border-t border-slate-200 text-xs font-mono text-slate-500 flex justify-between">
            <span>Next Phase:</span>
            <span className="font-bold text-slate-900">{PROCESS_STEPS_DATA[(activeStep + 1) % PROCESS_STEPS_DATA.length].title}</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
