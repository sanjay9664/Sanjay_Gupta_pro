"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SITE_CONFIG } from "@/lib/site-config";
import { ArrowRight, Play, Rocket, Users, Star, ShieldCheck, Zap, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onOpenInquiry?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenInquiry }) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-36 pb-20 px-4 sm:px-8 overflow-hidden bg-hero-pattern">
      {/* Background Ambient Mesh Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-indigo-200/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[350px] bg-sky-200/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Headline, Copy, CTAs, and Stats */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
          {/* Top Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-600 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
            <span>Available for selected Q3/Q4 projects</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] font-heading"
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
            className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl"
          >
            We design and develop fast, scalable websites, SaaS platforms and custom web applications for startups and growing businesses.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <button
              onClick={onOpenInquiry}
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 text-white text-sm font-bold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] transition-all flex items-center gap-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="/portfolio"
              className="px-6 py-3.5 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-bold shadow-sm hover:border-slate-300 hover:text-slate-900 transition-all flex items-center gap-2"
            >
              <span>View Our Work</span>
              <div className="w-5 h-5 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Play className="w-2.5 h-2.5 fill-indigo-600 ml-0.5" />
              </div>
            </a>
          </motion.div>

          {/* Bottom Stats Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200/70 w-full max-w-lg mt-2"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                <Rocket className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-extrabold text-slate-900 font-heading">150+</span>
                <span className="text-xs text-slate-500">Projects Delivered</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-extrabold text-slate-900 font-heading">75+</span>
                <span className="text-xs text-slate-500">Happy Clients</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Star className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-extrabold text-slate-900 font-heading">5+</span>
                <span className="text-xs text-slate-500">Years Experience</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Founder Photo & Floating Cards (No text on image itself) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          {/* Offset Decorative Blue Line Frame behind photo */}
          <div className="absolute top-6 -right-3 bottom-[-12px] left-6 rounded-[36px] border-2 border-indigo-300/40 pointer-events-none z-0" />

          {/* Photo Wrapper Container */}
          <div className="relative z-10 w-full max-w-md">
            {/* Pure Photo with smooth rounded corners and clean shadow */}
            <div className="rounded-[32px] overflow-hidden shadow-2xl shadow-indigo-950/15 bg-white border border-slate-100">
              <img
                src="/founder.jpg"
                alt={SITE_CONFIG.founder.name}
                className="w-full h-[460px] sm:h-[520px] object-cover object-top filter contrast-[1.02] brightness-[1.01]"
              />
            </div>

            {/* Floating Glass Card 1 (Top Left outside photo) */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -top-4 -left-6 px-4 py-3 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-xl shadow-slate-200/50 flex items-center gap-3 z-20"
            >
              <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-900 font-heading">Clean Code</span>
                <span className="text-[10px] text-slate-500 font-medium">Scalable Solutions</span>
              </div>
            </motion.div>

            {/* Floating Glass Card 2 (Bottom Right outside photo) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-4 -right-6 px-4 py-3 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-xl shadow-slate-200/50 flex items-center gap-3 z-20"
            >
              <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-900 font-heading">Performance</span>
                <span className="text-[10px] text-slate-500 font-medium">Built for Speed</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
