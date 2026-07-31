"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, Building2, ShieldCheck, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const DEMO_TESTIMONIALS = [
  {
    id: "test-1",
    quote: "Working with this studio completely changed our product velocity. Our Next.js web application was delivered 2 weeks ahead of schedule with flawless Core Web Vitals.",
    author: "Marcus Thorne",
    role: "Founder & CEO",
    company: "Apex Cloud SaaS (Demo Quote)",
    rating: 5,
  },
  {
    id: "test-2",
    quote: "The technical depth and attention to UI detail is unmatched. Our mobile conversion rate jumped dramatically after our headless e-commerce store redesign.",
    author: "Elena Rostova",
    role: "VP of Digital Growth",
    company: "Vanguard Goods (Demo Quote)",
    rating: 5,
  },
  {
    id: "test-3",
    quote: "Zero security bugs and incredible speed. Having a single full-stack developer who understands both Figma UI design and PostgreSQL schema logic saved us months.",
    author: "David Chen",
    role: "CTO",
    company: "Pulse Analytics (Demo Quote)",
    rating: 5,
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10 relative">
      <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4 mb-16">
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-medium">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>Placeholder Demo Cards — Real Client Feedback Pending</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Client Feedback Architecture
        </h2>
        <p className="text-slate-400 text-base">
          Read illustrative feedback from founders, product managers, and tech leaders who partnered with us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {DEMO_TESTIMONIALS.map((t, idx) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-8 rounded-3xl bg-slate-900 border border-white/10 flex flex-col justify-between gap-6 hover:border-indigo-500/30 transition-all shadow-xl"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <Quote className="w-8 h-8 text-indigo-400/40" />
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, rIdx) => (
                    <Star key={rIdx} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed italic">
                "{t.quote}"
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white">{t.author}</span>
                <span className="text-xs text-slate-400">{t.role} — {t.company}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
