"use client";

import React from "react";
import { motion } from "framer-motion";

const TRUST_LOGOS = [
  { name: "Stripe", color: "text-indigo-600 font-bold" },
  { name: "AWS", color: "text-amber-600 font-extrabold" },
  { name: "Google", color: "text-blue-600 font-bold" },
  { name: "Vercel", color: "text-slate-900 font-black" },
  { name: "Shopify", color: "text-emerald-600 font-bold" },
  { name: "Slack", color: "text-rose-600 font-bold" },
  { name: "Next.js", color: "text-slate-900 font-extrabold" },
  { name: "React", color: "text-sky-500 font-bold" },
  { name: "TypeScript", color: "text-blue-700 font-bold" },
];

export const TechMarquee: React.FC = () => {
  return (
    <section className="py-8 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-xl shadow-slate-200/40 flex flex-col md:flex-row items-center gap-8 justify-between overflow-hidden">
        {/* Left Label */}
        <div className="shrink-0 text-left border-r-0 md:border-r border-slate-200 pr-0 md:pr-8">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block font-mono">CLIENT TRUST & STACK</span>
          <span className="text-sm font-extrabold text-slate-900 font-heading">
            Trusted by startups <br className="hidden md:block" /> & growing businesses
          </span>
        </div>

        {/* Scrolling Logos */}
        <div className="w-full overflow-hidden relative">
          <div className="animate-marquee flex items-center gap-12 sm:gap-16">
            {[...TRUST_LOGOS, ...TRUST_LOGOS].map((logo, idx) => (
              <span
                key={idx}
                className={`text-lg sm:text-xl font-heading tracking-tight ${logo.color} whitespace-nowrap opacity-80 hover:opacity-100 transition-opacity`}
              >
                {logo.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
