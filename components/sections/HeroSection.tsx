"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SITE_CONFIG } from "@/lib/site-config";
import { Sparkles, ArrowUpRight, Code, ShieldCheck, Zap } from "lucide-react";

interface HeroSectionProps {
  onOpenInquiry?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenInquiry }) => {
  const headlineWords = [
    "We", "Build", "Digital", "Products", "That", "Move", "Businesses", "Forward."
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center pt-32 pb-20 px-4 sm:px-8 overflow-hidden bg-grid-pattern">
      {/* Background ambient radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-600/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[300px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col items-center gap-8 relative z-10">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="indigo" icon={<Sparkles className="w-3.5 h-3.5 text-indigo-400" />}>
            <span>{SITE_CONFIG.contact.availability}</span>
          </Badge>
        </motion.div>

        {/* Headline Word-by-Word Reveal */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] max-w-4xl"
        >
          {headlineWords.map((word, idx) => (
            <motion.span
              key={idx}
              variants={wordVariants}
              className={word === "Digital" || word === "Products" ? "text-gradient-accent inline-block mr-3" : "inline-block mr-3"}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed"
        >
          {SITE_CONFIG.shortDescription}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center gap-4 pt-4"
        >
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
            variant="secondary"
            size="lg"
            href="/portfolio"
            data-cursor="Explore"
          >
            {SITE_CONFIG.ctas.secondary}
          </Button>
        </motion.div>

        {/* Trust Pill Key Metrics */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 py-3 px-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs text-slate-400 font-medium"
        >
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span>98/100 Core Web Vitals Benchmark</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            <span>Zero Security Debt TypeScript Stack</span>
          </div>
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4 text-sky-400" />
            <span>Next.js App Router & Edge Runtime</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
