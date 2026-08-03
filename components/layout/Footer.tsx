"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/site-config";
import { 
  ArrowUpRight, 
  Phone, 
  Mail, 
  Sparkles, 
  ShieldCheck, 
  Globe 
} from "lucide-react";

interface FooterProps {
  onOpenInquiry?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 sm:pt-24 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 relative overflow-hidden z-10">
      
      {/* Background Decorative Glow Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none translate-y-1/2" />
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto relative z-10">
        


        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 pb-12 sm:pb-16 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Overview (Col 5) */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3 shrink-0 w-fit group">
              <div className="relative w-12 h-12 rounded-2xl overflow-hidden bg-white p-1 border border-slate-700/80 shrink-0 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/projects/fev-emblem-max.png"
                  alt={SITE_CONFIG.brandName}
                  width={48}
                  height={48}
                  className="object-contain w-full h-full rounded-xl"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-lg sm:text-xl font-black text-white font-heading tracking-tight group-hover:text-indigo-300 transition-colors">
                  {SITE_CONFIG.brandName}
                </span>
                <span className="text-[10px] font-mono tracking-widest text-indigo-400 uppercase font-bold">
                  DESIGN • DEVELOP • GROW
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              {SITE_CONFIG.shortDescription}
            </p>

            {/* Live Availability Status */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs w-fit shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-slate-400 font-medium">Status:</span>
              <span className="text-emerald-400 font-mono font-semibold">{SITE_CONFIG.contact.availability}</span>
            </div>

            {/* Social Links (Clean SVG Icons) */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_CONFIG.social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-all shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-all shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (Col 3) */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400/90">
              NAVIGATION
            </span>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm">
              {SITE_CONFIG.navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group text-slate-400 hover:text-white transition-colors py-1 inline-flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-indigo-400 transition-colors" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Support (Col 4) */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400/90">
              DIRECT INQUIRIES
            </span>
            
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="group p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-indigo-500/50 hover:bg-slate-900/90 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Email Us Direct</span>
                    <span className="text-xs sm:text-sm font-bold text-white group-hover:text-indigo-300 transition-colors truncate">
                      {SITE_CONFIG.contact.email}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
              </a>

              <a
                href={`tel:${SITE_CONFIG.contact.phone.replace(/[^0-9+]/g, '')}`}
                className="group p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-emerald-500/50 hover:bg-slate-900/90 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Direct Call / WhatsApp</span>
                    <span className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-300 transition-colors truncate">
                      {SITE_CONFIG.contact.phone}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
              </a>
            </div>

            <div className="flex items-center gap-2 pt-1 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Response SLA: Guaranteed Under 24 Hours</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Tech Badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <span>© {new Date().getFullYear()} <strong className="text-slate-300">{SITE_CONFIG.brandName}</strong>. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400">Next.js 15</span>
            <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400">TypeScript</span>
            <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400">Tailwind CSS</span>
            <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400">Vercel</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
