"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Layers, Code, Search } from "lucide-react";

const WHY_ITEMS = [
  {
    icon: Zap,
    title: "Sub-Second Performance",
    description: "Every line of code is optimized for instant page loads and passing Google Core Web Vitals (95+ Lighthouse benchmark).",
    color: "text-emerald-400",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "Modular React & Next.js component design with clean database schemas engineered to scale seamlessly as you grow.",
    color: "text-indigo-400",
  },
  {
    icon: Code,
    title: "Clean TypeScript Code",
    description: "Strict end-to-end typing, zero legacy debt, clear documentation, and 100% source code ownership.",
    color: "text-sky-400",
  },
  {
    icon: Search,
    title: "SEO & AI Search Optimized",
    description: "Dynamic Schema.org structured data, semantic HTML5, and pre-rendered server HTML for Google & AI crawlers.",
    color: "text-amber-400",
  },
];

export const WhyUsSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10 relative">
      <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-3 mb-12">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-indigo-400">
          Core Engineering Principles
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Why Work With Us
        </h2>
        <p className="text-slate-400 text-sm max-w-xl">
          We combine modern product design with resilient full-stack engineering to build web applications that run blisteringly fast.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {WHY_ITEMS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all flex flex-col gap-3 group"
            >
              <div className="p-3 rounded-xl bg-slate-900 border border-white/10 w-fit group-hover:scale-105 transition-transform">
                <Icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
