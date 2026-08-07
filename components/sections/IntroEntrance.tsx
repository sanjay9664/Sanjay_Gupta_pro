"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Code2, Layers, Cpu, Rocket } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

export const IntroEntrance: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState<"logo" | "text" | "exit">("logo");

  useEffect(() => {
    // Check if intro has already been shown in this session
    const hasSeenIntro = typeof window !== "undefined" && sessionStorage.getItem("hasSeenIntro");
    if (hasSeenIntro) {
      setIsVisible(false);
      return;
    }

    const timer1 = setTimeout(() => setPhase("text"), 1000);
    const timer2 = setTimeout(() => setPhase("exit"), 2400);
    const timer3 = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem("hasSeenIntro", "true");
    }, 3100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="intro-curtain"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950 text-white overflow-hidden pointer-events-none select-none"
      >
        {/* Dynamic Background Mesh Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-indigo-600/30 via-purple-600/20 to-cyan-500/20 blur-[130px]"
        />

        <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center max-w-2xl mx-auto">
          {/* Brand Logo Emblem */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-6"
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-cyan-400 p-1 shadow-2xl shadow-indigo-500/50">
              <div className="w-full h-full bg-white rounded-[22px] flex items-center justify-center relative overflow-hidden p-1.5 shadow-inner">
                <img
                  src="/brand-logo.png"
                  alt={SITE_CONFIG.brandName}
                  className="w-full h-full object-contain rounded-xl drop-shadow-md"
                />
              </div>
            </div>
          </motion.div>

          {/* Agency Name Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-2xl sm:text-4xl font-extrabold tracking-tight font-heading bg-gradient-to-r from-white via-indigo-100 to-slate-300 bg-clip-text text-transparent">
              {SITE_CONFIG.brandName}
            </span>

            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-800/50 text-indigo-300 text-xs sm:text-sm font-semibold shadow-inner mt-2">
              <Rocket className="w-4 h-4 text-cyan-400 animate-bounce" />
              <span>Digital Products & Engineering Studio</span>
            </div>
          </motion.div>

          {/* Loading Progress Bar */}
          <div className="w-48 sm:w-64 h-1.5 bg-slate-900 rounded-full mt-8 overflow-hidden border border-slate-800 relative">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-indigo-500 via-sky-400 to-cyan-300 rounded-full shadow-lg shadow-cyan-400/50"
            />
          </div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.5 }}
            className="text-[11px] font-mono text-slate-400 tracking-widest uppercase mt-3"
          >
            Initializing Experience...
          </motion.span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
