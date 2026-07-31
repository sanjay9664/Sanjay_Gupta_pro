"use client";

import React from "react";
import { motion } from "framer-motion";

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Animated Orb 1 - Deep Indigo */}
      <motion.div
        animate={{
          x: [0, 80, -60, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[15%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-indigo-600/20 to-sky-500/10 blur-[130px]"
      />

      {/* Animated Orb 2 - Cyan Glow */}
      <motion.div
        animate={{
          x: [0, -90, 70, 0],
          y: [0, 80, -60, 0],
          scale: [1, 0.8, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[40%] right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-cyan-500/15 via-indigo-500/10 to-transparent blur-[150px]"
      />

      {/* Animated Orb 3 - Emerald Accent */}
      <motion.div
        animate={{
          x: [0, 60, -80, 0],
          y: [0, -50, 90, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] left-[30%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-emerald-500/10 via-sky-600/10 to-transparent blur-[140px]"
      />

      {/* Dynamic Animated Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      {/* Radial Vignette */}
      <div className="absolute inset-0 bg-radial-vignette opacity-80" />
    </div>
  );
};
