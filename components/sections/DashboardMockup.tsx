"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code, Layout, Activity, CheckCircle, Copy, Terminal, Shield, Zap, TrendingUp, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

export const DashboardMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"preview" | "code" | "telemetry">("preview");
  const [copied, setCopied] = useState(false);

  const sampleCode = `// app/api/telemetry/route.ts
import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { db } from "@/lib/db";

export const runtime = "edge";

export async function GET(req: Request) {
  const metrics = await redis.get("edge_metrics_v2");
  return NextResponse.json({
    status: "healthy",
    latencyMs: 12,
    coreWebVitals: { lcp: 0.45, inp: 32, cls: 0.00 },
    timestamp: new Date().toISOString()
  });
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 -mt-10 mb-20 relative z-20">
      {/* Outer Glow Container */}
      <div className="relative rounded-2xl bg-gradient-to-b from-indigo-500/20 via-sky-500/10 to-transparent p-[1px] shadow-2xl shadow-indigo-950/60">
        <div className="rounded-2xl bg-slate-950/90 backdrop-blur-2xl border border-white/10 overflow-hidden">
          {/* Top Browser Window Header Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border-b border-white/10 gap-2">
            {/* Window controls */}
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-[11px] font-mono text-slate-500 hidden md:inline-block truncate max-w-[240px]">
                https://studio.agencybrand.com/live-demo
              </span>
            </div>

            {/* Interactive Mode Tabs */}
            <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/10 w-full sm:w-auto overflow-x-auto no-scrollbar">
              <button
                onClick={() => setActiveTab("preview")}
                className={cn(
                  "px-2.5 sm:px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 shrink-0 min-h-[36px]",
                  activeTab === "preview" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"
                )}
              >
                <Layout className="w-3.5 h-3.5" /> Preview
              </button>

              <button
                onClick={() => setActiveTab("code")}
                className={cn(
                  "px-2.5 sm:px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 shrink-0 min-h-[36px]",
                  activeTab === "code" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"
                )}
              >
                <Code className="w-3.5 h-3.5" /> Source Code
              </button>

              <button
                onClick={() => setActiveTab("telemetry")}
                className={cn(
                  "px-2.5 sm:px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 shrink-0 min-h-[36px]",
                  activeTab === "telemetry" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"
                )}
              >
                <Activity className="w-3.5 h-3.5" /> Telemetry
              </button>
            </div>
          </div>

          {/* Tab Content Window */}
          <div className="p-3 sm:p-6 lg:p-8 min-h-[340px] flex flex-col justify-center">
            {activeTab === "preview" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
              >
                {/* Metric Card 1 */}
                <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-2 sm:gap-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Global Requests</span>
                    <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">4.82M</div>
                  <div className="flex items-center gap-1 text-[11px] sm:text-xs text-emerald-400 font-medium">
                    <span>+24% vs last week</span>
                  </div>
                </div>

                {/* Metric Card 2 */}
                <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-2 sm:gap-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Average LCP</span>
                    <Zap className="w-4 h-4 text-indigo-400 shrink-0" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">0.38s</div>
                  <div className="flex items-center gap-1 text-[11px] sm:text-xs text-indigo-400 font-medium">
                    <span>Edge Cached (99.4%)</span>
                  </div>
                </div>

                {/* Metric Card 3 */}
                <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-2 sm:gap-3 xs:col-span-2 md:col-span-1">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>System Uptime SLA</span>
                    <Shield className="w-4 h-4 text-sky-400 shrink-0" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">99.99%</div>
                  <div className="flex items-center gap-1 text-[11px] sm:text-xs text-sky-400 font-medium">
                    <span>Zero Downtime Deploy</span>
                  </div>
                </div>

                {/* Interactive Chart Mockup Box */}
                <div className="xs:col-span-2 md:col-span-3 p-4 sm:p-6 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-3 sm:gap-4 overflow-hidden">
                  <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-white truncate">Real-Time Architecture Stream</span>
                    </div>
                    <span className="text-[10px] sm:text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 shrink-0">
                      Live Stream Active
                    </span>
                  </div>

                  {/* Simulated Waveform / Bar Chart */}
                  <div className="h-28 sm:h-32 flex items-end justify-between gap-1 sm:gap-2 pt-4 px-1 sm:px-2 overflow-hidden">
                    {[45, 65, 30, 85, 90, 70, 55, 95, 80, 60, 75, 100, 85, 90, 65, 80, 95].map((h, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.5, delay: idx * 0.03 }}
                        className="w-full bg-gradient-to-t from-indigo-600/40 via-sky-500 to-emerald-400 rounded-t-sm min-w-[3px]"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "code" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative rounded-xl bg-slate-900 border border-white/10 p-4 font-mono text-xs text-slate-300 overflow-x-auto"
              >
                <button
                  onClick={handleCopy}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs"
                >
                  {copied ? (
                    <>
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> Copy Code
                    </>
                  )}
                </button>
                <pre className="leading-relaxed">
                  <code>{sampleCode}</code>
                </pre>
              </motion.div>
            )}

            {activeTab === "telemetry" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col gap-4 font-mono text-xs text-slate-300"
              >
                <div className="p-4 rounded-xl bg-black/50 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Terminal className="w-4 h-4" />
                    <span>Lighthouse Core Web Vitals Audit: PASS</span>
                  </div>
                  <span className="text-slate-500">Target Score: 100/100</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-slate-400 mb-1">LCP (Largest Contentful Paint)</div>
                    <div className="text-2xl font-bold text-emerald-400">0.42s</div>
                    <div className="text-[10px] text-slate-500 mt-1">Good (&lt; 2.5s)</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-slate-400 mb-1">INP (Interaction to Next Paint)</div>
                    <div className="text-2xl font-bold text-emerald-400">28ms</div>
                    <div className="text-[10px] text-slate-500 mt-1">Good (&lt; 200ms)</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-slate-400 mb-1">CLS (Cumulative Layout Shift)</div>
                    <div className="text-2xl font-bold text-emerald-400">0.00</div>
                    <div className="text-[10px] text-slate-500 mt-1">Good (&lt; 0.1)</div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
