"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SITE_CONFIG } from "@/lib/site-config";
import { ArrowRight, Play, Rocket, Users, Star, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onOpenInquiry?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenInquiry }) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-28 sm:pt-36 pb-16 sm:pb-20 px-3 sm:px-6 lg:px-8 overflow-hidden bg-hero-pattern">
      {/* Background Ambient Mesh Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[600px] h-[200px] sm:h-[400px] bg-indigo-200/30 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[250px] sm:w-[500px] h-[200px] sm:h-[350px] bg-sky-200/30 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* Left Column: Headline, Copy, CTAs, and Stats */}
        <div className="lg:col-span-7 flex flex-col items-center sm:items-start gap-5 sm:gap-6 text-center sm:text-left">

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.15] font-heading text-center sm:text-left"
          >
            We Build{" "}
            <span className="text-gradient-indigo">Digital</span>{" "}
            <span className="text-gradient-cyan">Products</span>{" "}
            That Move Businesses Forward.
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-slate-600 font-normal leading-relaxed max-w-xl text-center sm:text-left"
          >
            We design and develop fast, scalable websites, SaaS platforms and custom web applications for startups and growing businesses.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-row flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 pt-1"
          >
            <button
              onClick={onOpenInquiry}
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:via-indigo-500 hover:to-cyan-400 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md shadow-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer border border-white/20"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <a
              href="/portfolio"
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 text-slate-700 hover:text-slate-900 hover:border-slate-300 text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>View Our Work</span>
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 group-hover:bg-indigo-100 transition-colors">
                <Play className="w-2 h-2 sm:w-2.5 sm:h-2.5 fill-indigo-600 ml-0.5" />
              </div>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Founder Photo & Floating Cards (No text on image itself) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative flex items-center justify-center mt-4 lg:mt-0"
        >
          {/* Offset Decorative Blue Line Frame behind photo */}
          <div className="absolute top-4 sm:top-6 -right-2 sm:-right-3 bottom-[-10px] left-4 sm:left-6 rounded-[28px] sm:rounded-[36px] border-2 border-indigo-300/40 pointer-events-none z-0" />

          {/* Photo Wrapper Container */}
          <div className="relative z-10 w-full max-w-xs sm:max-w-md">
            {/* Pure Photo with smooth rounded corners and clean shadow */}
            <div className="rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-2xl shadow-indigo-950/15 bg-white border border-slate-100">
              <img
                src="/founder.jpg"
                alt={SITE_CONFIG.founder.name}
                className="w-full h-[360px] xs:h-[420px] sm:h-[500px] object-cover object-top filter contrast-[1.02] brightness-[1.01]"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
