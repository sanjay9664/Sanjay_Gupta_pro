"use client";

import React from "react";
import { motion } from "framer-motion";
import { Gauge, Zap, Shield, Sparkles } from "lucide-react";

export const PerformanceBenchmarkSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto border-t border-slate-200/80 relative">
      <div className="rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-12 shadow-xl shadow-slate-200/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column Text */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 text-xs font-semibold w-fit">
            <Zap className="w-3.5 h-3.5" />
            <span>Google Lighthouse Benchmark</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Built for Blistering Page Speeds & 98+ Lighthouse Scores
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Slow websites lose clients and rank lower on search engines. We engineer websites using Next.js App Router, edge server rendering, and lightweight asset optimization to guarantee sub-0.5 second response times.
          </p>

          <div className="grid grid-cols-3 gap-4 pt-2">
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-[11px] text-slate-500 font-mono block">Performance</span>
              <span className="text-xl font-bold text-emerald-600 font-mono">98/100</span>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-[11px] text-slate-500 font-mono block">Accessibility</span>
              <span className="text-xl font-bold text-indigo-600 font-mono">100/100</span>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-[11px] text-slate-500 font-mono block">SEO Score</span>
              <span className="text-xl font-bold text-sky-600 font-mono">100/100</span>
            </div>
          </div>
        </div>

        {/* Right Gauge Visualization */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-indigo-50 via-slate-50 to-sky-50 border border-slate-200 text-center gap-3">
          <div className="w-24 h-24 rounded-full bg-white border-4 border-emerald-500 flex flex-col items-center justify-center shadow-lg shadow-emerald-500/20">
            <span className="text-3xl font-extrabold text-emerald-600 font-mono">98</span>
            <span className="text-[9px] font-mono text-slate-400">SCORE</span>
          </div>
          <span className="text-xs font-bold text-slate-900 font-heading">Core Web Vitals Pass Guarantee</span>
          <span className="text-[11px] text-slate-500">LCP &lt; 0.8s | CLS 0.00 | FID &lt; 10ms</span>
        </div>
      </div>
    </section>
  );
};
