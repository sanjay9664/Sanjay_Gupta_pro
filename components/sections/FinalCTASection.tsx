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
    <section className="py-16 sm:py-24 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 relative">
      <div className="relative rounded-3xl bg-gradient-to-b from-indigo-900/40 via-slate-900 to-slate-950 border border-indigo-500/30 p-5 sm:p-12 lg:p-16 text-center overflow-hidden shadow-2xl">
        {/* Glow ambient circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[200px] sm:h-[300px] bg-indigo-500/20 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-5 sm:gap-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Have an idea? <br />
            <span className="text-gradient-accent">Let's build it properly.</span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-base lg:text-lg leading-relaxed max-w-xl">
            Tell us what you're building and we'll help turn it into a fast, scalable digital product with sub-second performance and zero technical debt.
          </p>

          <div className="flex flex-col xs:flex-row items-stretch xs:items-center justify-center gap-3 sm:gap-4 pt-2 w-full xs:w-auto">
            <Button
              variant="primary"
              size="lg"
              onClick={onOpenInquiry}
              showArrow
              data-cursor="Start"
              className="w-full xs:w-auto justify-center min-h-[44px]"
            >
              {SITE_CONFIG.ctas.primary}
            </Button>

            <Button
              variant="outline"
              size="lg"
              href="/contact"
              icon={<Calendar className="w-4 h-4 text-indigo-400" />}
              data-cursor="Book Call"
              className="w-full xs:w-auto justify-center min-h-[44px]"
            >
              {SITE_CONFIG.ctas.schedule}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
