"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Gauge, CheckCircle, Shield, Award, Sparkles, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export const PerformanceBenchmarkSection: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState<"performance" | "accessibility" | "practices" | "seo">("performance");

  const metrics = {
    performance: {
      score: 98,
      title: "Performance & Core Web Vitals",
      description: "Sub-second Largest Contentful Paint (LCP < 0.5s), zero layout shift (CLS 0.00), and 28ms Interaction to Next Paint (INP).",
      highlights: [
        "React Server Components for lightweight JS bundle",
        "Edge runtime caching via Vercel CDN",
        "Automatic WebP/AVIF image optimization"
      ]
    },
    accessibility: {
      score: 100,
      title: "Accessibility (WCAG 2.1 AA)",
      description: "Accessible ARIA attributes, full keyboard focus navigation, high color contrast ratios, and screen-reader support.",
      highlights: [
        "Visible focus indicators for keyboard navigation",
        "Prefers-reduced-motion animation compliance",
        "Semantic HTML5 header and section structure"
      ]
    },
    practices: {
      score: 100,
      title: "Engineering Best Practices",
      description: "Modern HTTPS security headers, strict CSP policies, no legacy console errors, and clean TypeScript typings.",
      highlights: [
        "OWASP security vulnerability prevention",
        "Strict TypeScript type-safety across API & UI",
        "Zero unused CSS/JS bundle bloat"
      ]
    },
    seo: {
      score: 100,
      title: "Search Engine Optimization (SEO)",
      description: "Dynamic Schema.org JSON-LD structured data, OpenGraph cards, optimized canonical URLs, and sitemap generation.",
      highlights: [
        "Dynamic Next.js Metadata API integration",
        "Google Bot & LLM pre-rendered Server HTML",
        "Comprehensive OpenGraph image sharing tags"
      ]
    }
  };

  return (
    <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10 relative">
      <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4 mb-16">
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>Illustrative Performance Architecture Benchmark</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Engineering Built for Core Web Vitals
        </h2>
        <p className="text-slate-400 text-base">
          A slow website costs you visitors and revenue. We architect digital products that score near-perfect on Google Lighthouse audits out of the box.
        </p>
      </div>

      {/* Lighthouse Interface Card Container */}
      <div className="rounded-3xl bg-slate-900 border border-white/10 p-6 sm:p-10 shadow-2xl max-w-5xl mx-auto">
        {/* Metric Score Indicator Circles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {(["performance", "accessibility", "practices", "seo"] as const).map((key) => {
            const data = metrics[key];
            const isActive = activeMetric === key;
            return (
              <button
                key={key}
                onClick={() => setActiveMetric(key)}
                className={cn(
                  "p-5 rounded-2xl border flex flex-col items-center gap-3 transition-all text-center group",
                  isActive
                    ? "bg-indigo-600/15 border-indigo-500 shadow-lg shadow-indigo-500/10"
                    : "bg-white/5 border-white/10 hover:border-white/20"
                )}
              >
                {/* Score Gauge Circle */}
                <div className="relative w-16 h-16 rounded-full border-4 border-emerald-500/30 flex items-center justify-center bg-slate-950">
                  <span className="text-xl font-extrabold font-mono text-emerald-400">
                    {data.score}
                  </span>
                </div>
                <span className="text-xs font-semibold text-white uppercase tracking-wider">
                  {key}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Metric Breakdown */}
        <motion.div
          key={activeMetric}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-emerald-400" />
              {metrics[activeMetric].title}
            </h3>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
              Audit Score: {metrics[activeMetric].score} / 100
            </span>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            {metrics[activeMetric].description}
          </p>

          <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {metrics[activeMetric].highlights.map((h, i) => (
              <div key={i} className="p-3 rounded-xl bg-slate-950/80 border border-white/10 text-xs text-slate-200 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
