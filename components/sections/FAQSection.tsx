"use client";

import React from "react";
import { FAQS_DATA } from "@/data/faqs";
import { Accordion } from "@/components/ui/Accordion";
import { HelpCircle } from "lucide-react";

export const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="py-16 sm:py-24 px-3 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-white/10 relative">
      <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-3 sm:gap-4 mb-10 sm:mb-16">
        <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0">
          <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-indigo-400">
          Clear Answers for Buyers
        </span>
        <h2 className="text-2xl xs:text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-400 text-xs sm:text-base">
          Everything you need to know about pricing, timelines, technology choices, and development process.
        </p>
      </div>

      <div className="bg-slate-900/60 rounded-3xl border border-white/10 p-4 sm:p-10 shadow-2xl">
        <Accordion items={FAQS_DATA} />
      </div>
    </section>
  );
};
