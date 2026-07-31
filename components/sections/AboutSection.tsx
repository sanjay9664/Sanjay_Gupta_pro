"use client";

import React from "react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/site-config";
import { Code2, Cpu, CheckCircle2, Terminal, Server, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface AboutSectionProps {
  onOpenInquiry?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenInquiry }) => {
  return (
    <section id="about" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Founder / Lead Architect Intro */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-indigo-400">
            About The Developer & Partner
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Not just code. Products engineered around business goals.
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            I'm <span className="text-white font-semibold">{SITE_CONFIG.founder.name}</span>, {SITE_CONFIG.founder.role}. Over the last 8+ years, I've built fast, high-conversion web applications, SaaS MVPs, and complex digital platforms for startups and scaling businesses.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Unlike traditional agencies that pass work off to junior developers, I partner directly with founders to handle end-to-end full-stack architecture: from high-converting UI design and frontend state management down to database schemas and cloud deployments.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-1">
              <span className="text-2xl font-bold text-indigo-400 font-mono">8+ Years</span>
              <span className="text-xs text-slate-400">Full-Stack Experience</span>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-1">
              <span className="text-2xl font-bold text-emerald-400 font-mono">100% Code</span>
              <span className="text-xs text-slate-400">Ownership & Zero Debt</span>
            </div>
          </div>

          <div className="pt-4">
            <Button
              variant="primary"
              size="md"
              onClick={onOpenInquiry}
              showArrow
              data-cursor="Partner"
            >
              Partner With Us
            </Button>
          </div>
        </div>

        {/* Right Column: Full-Stack Stack Breakdown Grid */}
        <div className="lg:col-span-6 bg-slate-900 rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col gap-6 shadow-2xl">
          <div className="flex items-center gap-3 pb-4 border-b border-white/10">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Full-Stack Capabilities</h3>
              <p className="text-xs text-slate-400">End-to-end technical mastery</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-2">
              <div className="flex items-center gap-2 font-semibold text-sm text-indigo-300">
                <Code2 className="w-4 h-4" /> Frontend
              </div>
              <p className="text-xs text-slate-400">Next.js, React, TypeScript, Tailwind CSS, Framer Motion, State Management.</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-2">
              <div className="flex items-center gap-2 font-semibold text-sm text-sky-300">
                <Server className="w-4 h-4" /> Backend & APIs
              </div>
              <p className="text-xs text-slate-400">Node.js, Express, REST APIs, GraphQL, WebSockets, Laravel, PHP.</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-2">
              <div className="flex items-center gap-2 font-semibold text-sm text-emerald-300">
                <Cpu className="w-4 h-4" /> Databases & Storage
              </div>
              <p className="text-xs text-slate-400">PostgreSQL, MongoDB, Redis Caching, Prisma ORM, MySQL.</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-2">
              <div className="flex items-center gap-2 font-semibold text-sm text-purple-300">
                <Shield className="w-4 h-4" /> Cloud & Deployment
              </div>
              <p className="text-xs text-slate-400">Vercel Edge, AWS, Docker Containers, CI/CD Pipelines, Sentry.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
