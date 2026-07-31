"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/site-config";
import { Sparkles, Calendar, ArrowRight, Code2 } from "lucide-react";

interface FinalCTASectionProps {
  onOpenInquiry?: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenInquiry }) => {
  return (
    <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10 relative">
      <div className="relative rounded-3xl bg-gradient-to-b from-indigo-900/40 via-slate-900 to-slate-950 border border-indigo-500/30 p-8 sm:p-16 text-center overflow-hidden shadow-2xl">
        {/* Glow ambient circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-500/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <Sparkles className="w-6 h-6" />
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Have an idea? <br />
            <span className="text-gradient-accent">Let's build it properly.</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
            Tell us what you're building and we'll help turn it into a fast, scalable digital product with sub-second performance and zero technical debt.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Button
              variant="primary"
              size="lg"
              onClick={onOpenInquiry}
              showArrow
              data-cursor="Start"
            >
              {SITE_CONFIG.ctas.primary}
            </Button>

            <Button
              variant="outline"
              size="lg"
              href="/contact"
              icon={<Calendar className="w-4 h-4 text-indigo-400" />}
              data-cursor="Book Call"
            >
              {SITE_CONFIG.ctas.schedule}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
