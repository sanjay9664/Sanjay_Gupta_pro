"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, Shield, Layers, Code, Sparkles, ArrowRight, Activity, Terminal, Globe } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

interface StudioShowcaseSectionProps {
  onOpenInquiry?: () => void;
}

export const StudioShowcaseSection: React.FC<StudioShowcaseSectionProps> = ({ onOpenInquiry }) => {
  return (
    <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Professionally Designed Image/Visual Showcase */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 relative"
        >
          {/* Ambient Glow Box */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500" />

          {/* Main Visual Composition Frame */}
          <div className="relative rounded-3xl bg-slate-950 border border-white/15 p-6 sm:p-8 shadow-2xl overflow-hidden flex flex-col gap-6">
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="ml-2 text-xs font-mono text-slate-400">studio-architecture-v3.tsx</span>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Production Ready
              </span>
            </div>

            {/* Visual Layer 1: IoT & Health Dashboard Teaser */}
            <div className="rounded-2xl bg-slate-900 border border-white/10 p-5 flex flex-col gap-3 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <Activity className="w-4 h-4 text-indigo-400" />
                  <span>Real-Time Telemetry & Healthcare System</span>
                </div>
                <span className="text-[10px] font-mono text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded">
                  WebSockets Active
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-1">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] text-slate-400 block font-mono">Response Speed</span>
                  <span className="text-sm font-bold text-emerald-400 font-mono">0.38s</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] text-slate-400 block font-mono">Core Web Vitals</span>
                  <span className="text-sm font-bold text-indigo-400 font-mono">98/100</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] text-slate-400 block font-mono">Uptime SLA</span>
                  <span className="text-sm font-bold text-sky-400 font-mono">99.99%</span>
                </div>
              </div>
            </div>

            {/* Visual Layer 2: Code Snippet & Mobile Mockup Overlay */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-900 border border-white/10 flex flex-col gap-2 font-mono text-[11px] text-slate-300">
                <div className="flex items-center justify-between text-[10px] text-slate-500 pb-1 border-b border-white/10">
                  <span>TypeScript Stack</span>
                  <Terminal className="w-3.5 h-3.5 text-sky-400" />
                </div>
                <div className="text-indigo-300">import &#123; NextApp &#125; from "next";</div>
                <div className="text-slate-400">// Strict Type Safety</div>
                <div className="text-emerald-400">export const runtime = "edge";</div>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-900/40 via-slate-900 to-slate-950 border border-indigo-500/30 flex flex-col justify-between">
                <div className="flex items-center gap-1.5 text-xs font-bold text-white mb-2">
                  <Globe className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Mobile Responsive</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-tight">
                  Flawless rendering across mobile (320px+), tablet & 4K displays.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Professional Text & Value Proposition */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 flex flex-col gap-6"
        >
          <Badge variant="indigo" icon={<Sparkles className="w-3.5 h-3.5 text-indigo-400" />}>
            Senior Engineering Excellence
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            We Don't Just Write Code. <br />
            <span className="text-gradient-accent">We Build Scalable Digital Assets.</span>
          </h2>

          <p className="text-slate-300 text-base leading-relaxed">
            Every web application we deliver is built from the ground up for maximum page speed, high visitor conversion, zero technical debt, and 100% source code ownership.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                <Zap className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white">Sub-Second Load Times</span>
                <span className="text-xs text-slate-400">98/100 Core Web Vitals audit pass.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0 mt-0.5">
                <Shield className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white">Zero Technical Debt</span>
                <span className="text-xs text-slate-400">Strict TypeScript & clean code.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 shrink-0 mt-0.5">
                <Layers className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white">Full-Stack Architecture</span>
                <span className="text-xs text-slate-400">Frontend, APIs, Databases & Cloud.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white">100% Code Ownership</span>
                <span className="text-xs text-slate-400">No lock-in or recurring dev fees.</span>
              </div>
            </div>
          </div>

          <div className="pt-4 flex items-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={onOpenInquiry}
              showArrow
              data-cursor="Start"
            >
              Start Your Project
            </Button>

            <Button
              variant="secondary"
              size="lg"
              href="/portfolio"
              data-cursor="Portfolio"
            >
              View Work Portfolio
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
