"use client";

import React from "react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Code2, Server, Database, Cloud } from "lucide-react";

interface AboutSectionProps {
  onOpenInquiry?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenInquiry }) => {
  return (
    <section className="py-16 sm:py-20 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Text Column */}
        <div className="lg:col-span-6 flex flex-col gap-5 sm:gap-6 text-left">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600">
            About The Founder & Studio
          </span>

          <h2 className="text-2xl xs:text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
            Full-Stack Engineering Focused on Real Business Growth
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Led by {SITE_CONFIG.founder.name}, {SITE_CONFIG.founder.role}, our studio specializes in building high-performance web applications, industrial IoT control portals, and digital flagships for companies globally.
          </p>

          <div className="grid grid-cols-1 xs:grid-cols-2 gap-2.5 sm:gap-4 pt-1">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Next.js & React Specialists</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Node.js & Real-time WebSockets</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Industrial Telemetry & SCADA</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>PostgreSQL & Cloud Infrastructure</span>
            </div>
          </div>

          <div className="pt-3 flex flex-col xs:flex-row items-stretch xs:items-center gap-3.5 sm:gap-4">
            <button
              onClick={onOpenInquiry}
              className="px-6 py-3.5 rounded-full bg-indigo-600 text-white text-xs font-bold shadow-lg shadow-indigo-500/20 hover:bg-indigo-700 transition-all min-h-[44px] flex items-center justify-center"
            >
              Partner With Us
            </button>
            <a
              href="/about"
              className="text-xs font-bold text-slate-700 hover:text-indigo-600 transition-colors py-2 flex items-center justify-center min-h-[44px]"
            >
              Read Full Bio & Stack →
            </a>
          </div>
        </div>

        {/* Right Stack Cards */}
        <div className="lg:col-span-6 grid grid-cols-1 xs:grid-cols-2 gap-3.5 sm:gap-4">
          <div className="p-4 sm:p-6 rounded-3xl bg-white border border-slate-200/80 shadow-lg shadow-slate-200/30 flex flex-col gap-2.5 sm:gap-3">
            <Code2 className="w-6 h-6 text-indigo-600" />
            <h3 className="text-sm font-bold text-slate-900 font-heading">Frontend Engineering</h3>
            <p className="text-xs text-slate-500">Next.js 16, React, TypeScript, Tailwind CSS, Framer Motion.</p>
          </div>

          <div className="p-4 sm:p-6 rounded-3xl bg-white border border-slate-200/80 shadow-lg shadow-slate-200/30 flex flex-col gap-2.5 sm:gap-3">
            <Server className="w-6 h-6 text-sky-600" />
            <h3 className="text-sm font-bold text-slate-900 font-heading">Backend & APIs</h3>
            <p className="text-xs text-slate-500">Node.js, Express, REST APIs, WebSockets, Laravel PHP.</p>
          </div>

          <div className="p-4 sm:p-6 rounded-3xl bg-white border border-slate-200/80 shadow-lg shadow-slate-200/30 flex flex-col gap-2.5 sm:gap-3">
            <Database className="w-6 h-6 text-emerald-600" />
            <h3 className="text-sm font-bold text-slate-900 font-heading">Databases & State</h3>
            <p className="text-xs text-slate-500">PostgreSQL, Prisma ORM, Redis caching, MongoDB.</p>
          </div>

          <div className="p-4 sm:p-6 rounded-3xl bg-white border border-slate-200/80 shadow-lg shadow-slate-200/30 flex flex-col gap-2.5 sm:gap-3">
            <Cloud className="w-6 h-6 text-purple-600" />
            <h3 className="text-sm font-bold text-slate-900 font-heading">Cloud & DevOps</h3>
            <p className="text-xs text-slate-500">Vercel, AWS EC2/S3, Docker containers, CI/CD pipelines.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
