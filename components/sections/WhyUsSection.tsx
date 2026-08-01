"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Layers, Code, Search } from "lucide-react";

const WHY_ITEMS = [
  {
    icon: Zap,
    title: "Sub-Second Performance",
    description: "Every line of code is optimized for instant page loads and passing Google Core Web Vitals (95+ Lighthouse benchmark).",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "Modular React & Next.js component design with clean database schemas engineered to scale seamlessly as you grow.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    icon: Code,
    title: "Clean TypeScript Code",
    description: "Strict end-to-end typing, zero legacy debt, clear documentation, and 100% source code ownership.",
    color: "text-sky-600",
    bg: "bg-sky-50",
  },
  {
    icon: Search,
    title: "SEO & AI Search Optimized",
    description: "Dynamic Schema.org structured data, semantic HTML5, and pre-rendered server HTML for Google & AI crawlers.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
];

export const WhyUsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 relative">
      <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-3 mb-8 sm:mb-12">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600">
          Core Engineering Principles
        </span>
        <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
          Why Work With Us
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm max-w-xl">
          We combine modern product design with resilient full-stack engineering to build web applications that run blisteringly fast.
        </p>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {WHY_ITEMS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/80 shadow-lg shadow-slate-200/30 hover:border-indigo-300 hover:shadow-xl transition-all flex flex-col gap-3 group"
            >
              <div className={`p-3 rounded-2xl ${item.bg} ${item.color} w-fit group-hover:scale-105 transition-transform`}>
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-heading group-hover:text-indigo-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
