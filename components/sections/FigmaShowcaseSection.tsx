"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Palette, 
  MousePointer2, 
  Zap, 
  Smartphone, 
  Monitor,
  Copy,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const FigmaIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#1ABCFE"/>
    <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
    <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
    <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
    <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
  </svg>
);

interface FigmaShowcaseSectionProps {
  onOpenInquiry?: () => void;
}

export const FigmaShowcaseSection: React.FC<FigmaShowcaseSectionProps> = ({ onOpenInquiry }) => {
  const [activeTab, setActiveTab] = useState<"figma" | "code">("figma");
  const [copied, setCopied] = useState(false);

  const codeSnippet = `'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function PremiumHeroCard() {
  return (
    <motion.div 
      whileHover={{ y: -6, scale: 1.02 }}
      className="p-6 rounded-3xl bg-white/80 backdrop-blur-xl border border-indigo-100 shadow-2xl shadow-indigo-500/10"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold">
          ⚡
        </div>
        <div>
          <h4 className="text-base font-extrabold text-slate-900">Pixel Perfect Execution</h4>
          <p className="text-xs text-slate-500">100% Fidelity from Figma to Next.js</p>
        </div>
      </div>
    </motion.div>
  );
}`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Decorative Mesh Orbs */}
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-purple-200/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-200/30 rounded-full blur-[140px] pointer-events-none" />

      {/* Header Badge & Title */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-cyan-500/10 border border-indigo-200/80 text-indigo-700 text-xs font-bold shadow-sm mb-4"
        >
          <FigmaIcon className="w-4 h-4 text-purple-600" />
          <span>Figma Design Systems & Pixel-Perfect Code</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-[1.15]"
        >
          From <span className="text-gradient-indigo">Figma Blueprints</span> to High-Performance <span className="text-gradient-cyan">React Code</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-slate-600 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed"
        >
          We bridge modern design aesthetics with enterprise-grade Next.js 16 architecture. Every pixel, auto-layout frame, and animation state translates cleanly into fast, responsive code.
        </motion.p>
      </div>

      {/* Interactive Switch Container */}
      <div className="bg-white/90 backdrop-blur-2xl border border-slate-200/90 rounded-[32px] sm:rounded-[40px] p-4 sm:p-8 shadow-2xl shadow-indigo-950/10">
        
        {/* Mode Selector Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
          {/* Tab Buttons */}
          <div className="flex items-center gap-2 bg-slate-100/90 p-1.5 rounded-full border border-slate-200/80">
            <button
              onClick={() => setActiveTab("figma")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 transition-all duration-300 ${
                activeTab === "figma"
                  ? "bg-white text-purple-700 shadow-md shadow-purple-900/10 border border-purple-100"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <FigmaIcon className="w-4 h-4 text-purple-600" />
              <span>Figma Visual Canvas</span>
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 transition-all duration-300 ${
                activeTab === "code"
                  ? "bg-slate-900 text-cyan-400 shadow-md border border-slate-800"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span>Clean Next.js Code</span>
            </button>
          </div>

          {/* Quick Specs Pills */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 overflow-x-auto">
            <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-semibold">
              Auto-Layout 5.0
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-semibold">
              60 FPS Animations
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-semibold">
              TypeScript Ready
            </span>
          </div>
        </div>

        {/* Dynamic Display Area */}
        <div className="mt-6">
          <AnimatePresence mode="wait">
            {activeTab === "figma" ? (
              <motion.div
                key="figma-mode"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="relative min-h-[420px] rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-10 flex flex-col justify-between overflow-hidden shadow-2xl"
              >
                {/* Canvas Grid Background Lines */}
                <div 
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle, #38bdf8 1px, transparent 1px)`,
                    backgroundSize: '24px 24px'
                  }}
                />

                {/* Top Figma Tool Header */}
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="text-xs font-mono text-slate-400 ml-2">
                      Figma Canvas • [1920x1080 Frame]
                    </span>
                  </div>
                  
                  {/* Floating Cursor simulation */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-900/40 border border-purple-500/30 text-purple-300 text-xs font-mono">
                    <MousePointer2 className="w-3.5 h-3.5 text-purple-400 animate-bounce" />
                    <span>Sanjay (Owner) editing...</span>
                  </div>
                </div>

                {/* Main Design Component Mockup Inside Canvas */}
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 my-6 items-center">
                  
                  {/* Visual UI Card Mockup */}
                  <div className="lg:col-span-7 bg-slate-950/90 border border-slate-800 rounded-2xl p-6 shadow-2xl relative group">
                    <div className="absolute -top-3 left-4 px-2.5 py-0.5 rounded bg-indigo-600 text-white font-mono text-[10px] uppercase tracking-wider font-bold">
                      Component: HeroCard_V2
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 p-0.5">
                          <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center text-white font-bold text-lg">
                            🚀
                          </div>
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-white font-heading">Digital Flagship Experience</h4>
                          <p className="text-xs text-slate-400">High-converting landing page UI</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                        Ready for Dev
                      </span>
                    </div>

                    <div className="space-y-3 pt-2">
                      <div className="h-3 bg-slate-800 rounded-full w-full" />
                      <div className="h-3 bg-slate-800/60 rounded-full w-4/5" />
                    </div>

                    {/* Figma Selection Nodes Overlay */}
                    <div className="absolute inset-0 border-2 border-dashed border-indigo-500/50 rounded-2xl pointer-events-none" />
                  </div>

                  {/* Right Side Tokens Inspector */}
                  <div className="lg:col-span-5 bg-slate-950/70 border border-slate-800/90 rounded-2xl p-5 flex flex-col gap-4 text-xs font-mono">
                    <div className="flex items-center justify-between text-slate-400 font-bold border-b border-slate-800 pb-2">
                      <span className="flex items-center gap-1.5">
                        <Palette className="w-4 h-4 text-purple-400" />
                        Design Tokens
                      </span>
                      <span className="text-[10px] text-slate-500">Auto Tokens</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-indigo-600 border border-white/20" />
                        <div className="flex flex-col">
                          <span className="text-[10px] text-slate-400">Brand Indigo</span>
                          <span className="text-[11px] text-white font-bold">#4F46E5</span>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-cyan-400 border border-white/20" />
                        <div className="flex flex-col">
                          <span className="text-[10px] text-slate-400">Accent Cyan</span>
                          <span className="text-[11px] text-white font-bold">#22D3EE</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-indigo-950/30 border border-indigo-500/20 text-indigo-200 text-[11px] leading-relaxed">
                      ✨ Precision spacing using 8pt grid, WCAG AAA contrast ratio & fluid responsive typography.
                    </div>
                  </div>

                </div>

                {/* Footer Bottom Specs */}
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Figma component variants fully synchronized with React props</span>
                  </div>

                  <button
                    onClick={onOpenInquiry}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-purple-600/30 transition-all"
                  >
                    Request Custom Figma UI Design →
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="code-mode"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="relative min-h-[420px] rounded-3xl bg-slate-950 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-2xl font-mono"
              >
                {/* Code Header Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2 text-xs text-cyan-400 font-bold">
                    <Code2 className="w-4 h-4" />
                    <span>components/ui/PremiumHeroCard.tsx</span>
                  </div>

                  <button
                    onClick={handleCopyCode}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Component</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Syntax Highlighted Code Preview */}
                <div className="my-4 overflow-x-auto text-xs sm:text-sm leading-relaxed text-slate-300 p-4 rounded-2xl bg-slate-900/90 border border-slate-800/80">
                  <pre className="font-mono">
                    <code>{codeSnippet}</code>
                  </pre>
                </div>

                {/* Bottom Status */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-xs text-slate-400">
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    Clean React 19 + TypeScript code output
                  </span>
                  <span className="text-slate-500">Zero bloat • 100% Lighthouse Performance</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
