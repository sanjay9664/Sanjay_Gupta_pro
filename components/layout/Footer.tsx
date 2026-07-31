"use client";

import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";
import { Code2, ArrowUpRight } from "lucide-react";

interface FooterProps {
  onOpenInquiry?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 px-4 sm:px-8 border-t border-slate-800 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
        
        {/* Column 1: Brand */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-sky-400 flex items-center justify-center text-white font-bold">
              <Code2 className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-extrabold text-white font-heading">{SITE_CONFIG.brandName}</span>
              <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">DIGITAL STUDIO</span>
            </div>
          </Link>
          <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
            {SITE_CONFIG.shortDescription}
          </p>
          <div className="flex items-center gap-3 pt-2 text-xs text-slate-400">
            <span>Availability:</span>
            <span className="text-emerald-400 font-mono font-semibold">{SITE_CONFIG.contact.availability}</span>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="md:col-span-3 flex flex-col gap-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">NAVIGATION</span>
          <ul className="flex flex-col gap-2 text-xs">
            {SITE_CONFIG.navigation.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-slate-300 hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Details */}
        <div className="md:col-span-4 flex flex-col gap-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">DIRECT INQUIRIES</span>
          <a
            href={`mailto:${SITE_CONFIG.contact.email}`}
            className="text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors inline-flex items-center gap-1.5"
          >
            <span>{SITE_CONFIG.contact.email}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <button
            onClick={onOpenInquiry}
            className="mt-2 text-xs font-bold px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors w-fit"
          >
            Start Project Inquiry →
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <span>© {new Date().getFullYear()} {SITE_CONFIG.brandName}. All rights reserved.</span>
        <div className="flex items-center gap-1">
          <span>Engineered with Next.js & TypeScript</span>
        </div>
      </div>
    </footer>
  );
};
