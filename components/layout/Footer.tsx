import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";
import { Code2, ArrowUpRight, Heart, Sparkles, Globe, Share2, Terminal } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface FooterProps {
  onOpenInquiry?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry }) => {
  return (
    <footer className="relative bg-slate-950 border-t border-white/10 pt-20 pb-12 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Availability */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-sky-400 p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center text-white">
                  <Code2 className="w-4 h-4 text-indigo-400" />
                </div>
              </div>
              <span className="font-bold text-lg text-white">{SITE_CONFIG.brandName}</span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {SITE_CONFIG.longDescription}
            </p>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{SITE_CONFIG.contact.availability}</span>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={SITE_CONFIG.social.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a
                href={SITE_CONFIG.social.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z"/></svg>
              </a>
              <a
                href={SITE_CONFIG.social.dribbble}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Dribbble"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-400">
              <li>
                <Link href="/services/nextjs-development" className="hover:text-indigo-300 transition-colors">
                  Next.js Development
                </Link>
              </li>
              <li>
                <Link href="/services/full-stack-development" className="hover:text-indigo-300 transition-colors">
                  Full-Stack Applications
                </Link>
              </li>
              <li>
                <Link href="/services/saas-development" className="hover:text-indigo-300 transition-colors">
                  SaaS MVP Platforms
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce-development" className="hover:text-indigo-300 transition-colors">
                  Headless E-Commerce
                </Link>
              </li>
              <li>
                <Link href="/services/dashboard-admin-panel" className="hover:text-indigo-300 transition-colors">
                  Admin Dashboards
                </Link>
              </li>
              <li>
                <Link href="/services/api-development" className="hover:text-indigo-300 transition-colors">
                  API & Cloud Architecture
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: High-Intent Hire Pages */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
              Hire Engineers
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-400">
              <li>
                <Link href="/hire-nextjs-developer" className="hover:text-indigo-300 transition-colors">
                  Hire Next.js Developer
                </Link>
              </li>
              <li>
                <Link href="/hire-react-developer" className="hover:text-indigo-300 transition-colors">
                  Hire React Developer
                </Link>
              </li>
              <li>
                <Link href="/hire-full-stack-developer" className="hover:text-indigo-300 transition-colors">
                  Hire Full-Stack Engineer
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-indigo-300 transition-colors">
                  Selected Work & Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-indigo-300 transition-colors">
                  About & Tech Stack
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources & Insights */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
              Resources & Insights
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-400">
              <li>
                <Link href="/blog" className="hover:text-indigo-300 transition-colors">
                  Engineering Blog
                </Link>
              </li>
              <li>
                <Link href="/blog/nextjs-vs-react-which-should-businesses-choose" className="hover:text-indigo-300 transition-colors">
                  Next.js vs React Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/how-much-does-a-custom-website-cost" className="hover:text-indigo-300 transition-colors">
                  Web Dev Cost Estimator
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-indigo-300 transition-colors">
                  Schedule Discovery Call
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {SITE_CONFIG.brandName}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="font-mono text-slate-400">Built with precision.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
