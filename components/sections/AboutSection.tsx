"use client";

import React from "react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/site-config";
import { CheckCircle2, Code2, Server, Database, Cloud, ArrowRight } from "lucide-react";

interface AboutSectionProps {
  onOpenInquiry?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenInquiry }) => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Text Column */}
        <div className="lg:col-span-6 flex flex-col items-center sm:items-start text-center sm:text-left gap-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-mono font-bold uppercase tracking-widest shadow-xs">
            <span>ABOUT THE FOUNDER & STUDIO</span>
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight text-center sm:text-left">
            Full-Stack Engineering Focused on Real Business Growth
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-center sm:text-left max-w-xl">
            Led by {SITE_CONFIG.founder.name}, {SITE_CONFIG.founder.role}, our studio specializes in building high-performance web applications, industrial IoT control portals, and digital flagships for companies globally.
          </p>

          <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 pt-2 w-full max-w-xl">
            <div className="flex items-center justify-center xs:justify-start gap-2.5 p-2.5 rounded-xl bg-slate-50/80 border border-slate-200/60 text-xs font-bold text-slate-800">
              <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
              <span>Next.js & React Specialists</span>
            </div>
            <div className="flex items-center justify-center xs:justify-start gap-2.5 p-2.5 rounded-xl bg-slate-50/80 border border-slate-200/60 text-xs font-bold text-slate-800">
              <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
              <span>Node.js & Real-time WebSockets</span>
            </div>
            <div className="flex items-center justify-center xs:justify-start gap-2.5 p-2.5 rounded-xl bg-slate-50/80 border border-slate-200/60 text-xs font-bold text-slate-800">
              <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
              <span>Industrial Telemetry & SCADA</span>
            </div>
            <div className="flex items-center justify-center xs:justify-start gap-2.5 p-2.5 rounded-xl bg-slate-50/80 border border-slate-200/60 text-xs font-bold text-slate-800">
              <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
              <span>PostgreSQL & Cloud Infrastructure</span>
            </div>
          </div>

          <div className="pt-4 flex flex-col xs:flex-row items-center justify-center sm:justify-start gap-4 w-full">
            <button
              onClick={onOpenInquiry}
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-xs sm:text-sm font-bold tracking-wide shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer border border-white/20"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <a
              href="/about"
              className="px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-indigo-600 hover:border-indigo-200 text-xs sm:text-sm font-semibold transition-all flex items-center justify-center shadow-xs"
            >
              Read Full Bio & Stack →
            </a>
          </div>
        </div>

        {/* Right Stack Cards */}
        <div className="lg:col-span-6 grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-5">
          <motion.div
            whileHover={{ y: -4 }}
            className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-300 transition-all duration-300 flex flex-col items-center text-center xs:items-start xs:text-left gap-3 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 border border-indigo-100/80 group-hover:scale-110 transition-transform">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-heading group-hover:text-indigo-600 transition-colors">
              Frontend Engineering
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Next.js 16, React, TypeScript, Tailwind CSS, Framer Motion.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-sky-500/10 hover:border-sky-300 transition-all duration-300 flex flex-col items-center text-center xs:items-start xs:text-left gap-3 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-100/80 group-hover:scale-110 transition-transform">
              <Server className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-heading group-hover:text-sky-600 transition-colors">
              Backend & APIs
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Node.js, Express, REST APIs, WebSockets, Laravel PHP.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-300 transition-all duration-300 flex flex-col items-center text-center xs:items-start xs:text-left gap-3 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100/80 group-hover:scale-110 transition-transform">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-heading group-hover:text-emerald-600 transition-colors">
              Databases & State
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              PostgreSQL, Prisma ORM, Redis caching, MongoDB.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-purple-500/10 hover:border-purple-300 transition-all duration-300 flex flex-col items-center text-center xs:items-start xs:text-left gap-3 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100/80 group-hover:scale-110 transition-transform">
              <Cloud className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-heading group-hover:text-purple-600 transition-colors">
              Cloud & DevOps
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Vercel, AWS EC2/S3, Docker containers, CI/CD pipelines.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

