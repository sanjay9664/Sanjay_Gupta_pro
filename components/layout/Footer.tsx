"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/site-config";
import { ArrowUpRight, Phone, Mail } from "lucide-react";

interface FooterProps {
  onOpenInquiry?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 sm:pt-16 pb-8 sm:pb-12 px-3 sm:px-6 lg:px-8 border-t border-slate-800 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-slate-800">
        
        {/* Column 1: Brand */}
        <div className="sm:col-span-2 md:col-span-5 flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-2xl overflow-hidden bg-white p-1 border border-slate-700 shrink-0 flex items-center justify-center shadow-md">
              <Image
                src="/projects/fev-emblem-max.png"
                alt={SITE_CONFIG.brandName}
                width={48}
                height={48}
                className="object-contain w-full h-full rounded-xl"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-base sm:text-lg font-black text-white font-heading truncate">{SITE_CONFIG.brandName}</span>
              <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-indigo-400 uppercase truncate">DESIGN • DEVELOP • GROW</span>
            </div>
          </Link>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
            {SITE_CONFIG.shortDescription}
          </p>
          <div className="flex items-center gap-2 pt-1 text-xs text-slate-400">
            <span>Availability:</span>
            <span className="text-emerald-400 font-mono font-semibold">{SITE_CONFIG.contact.availability}</span>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="md:col-span-3 flex flex-col gap-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">NAVIGATION</span>
          <ul className="flex flex-col gap-1.5 text-xs sm:text-sm">
            {SITE_CONFIG.navigation.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-slate-300 hover:text-white transition-colors py-1 inline-block min-h-[36px] flex items-center">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Details */}
        <div className="md:col-span-4 flex flex-col gap-3.5">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">DIRECT INQUIRIES</span>
          <a
            href={`mailto:${SITE_CONFIG.contact.email}`}
            className="text-xs sm:text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors inline-flex items-center gap-2 min-h-[44px]"
          >
            <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
            <span className="truncate">{SITE_CONFIG.contact.email}</span>
            <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
          </a>
          <a
            href={`tel:${SITE_CONFIG.contact.phone.replace(/[^0-9+]/g, '')}`}
            className="text-xs sm:text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-2 min-h-[44px]"
          >
            <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{SITE_CONFIG.contact.phone}</span>
          </a>
          <button
            onClick={onOpenInquiry}
            className="mt-1 text-xs font-bold px-5 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 text-white hover:shadow-lg hover:shadow-indigo-500/25 transition-all w-full sm:w-fit min-h-[44px] flex items-center justify-center gap-2"
          >
            <span>Start Project Inquiry</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3 text-center sm:text-left">
        <span>© {new Date().getFullYear()} {SITE_CONFIG.brandName}. All rights reserved.</span>
        <div className="flex items-center gap-1">
          <span>Engineered with Next.js & TypeScript</span>
        </div>
      </div>
    </footer>
  );
};
