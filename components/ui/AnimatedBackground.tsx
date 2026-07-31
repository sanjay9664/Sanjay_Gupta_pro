"use client";

import React from "react";
import { motion } from "framer-motion";

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#f8fafc]">
      {/* Light Ambient Orb 1 - Soft Indigo */}
      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -80, 40, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[15%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-indigo-200/40 to-sky-200/30 blur-[140px]"
      />

      {/* Light Ambient Orb 2 - Soft Cyan Glow */}
      <motion.div
        animate={{
          x: [0, -70, 50, 0],
          y: [0, 60, -50, 0],
          scale: [1, 0.85, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[40%] right-[10%] w-[650px] h-[650px] rounded-full bg-gradient-to-br from-sky-200/35 via-indigo-100/30 to-transparent blur-[150px]"
      />

      {/* Light Ambient Orb 3 - Soft Emerald */}
      <motion.div
        animate={{
          x: [0, 50, -60, 0],
          y: [0, -40, 70, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] left-[30%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-emerald-100/30 via-sky-100/30 to-transparent blur-[130px]"
      />

      {/* Soft Grid Overlay */}
      <div className="absolute inset-0 bg-hero-pattern opacity-70" />
    </div>
  );
};
