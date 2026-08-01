"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SITE_CONFIG } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onOpenInquiry?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 sm:px-8 max-w-7xl mx-auto"
      )}
    >
      <div
        className={cn(
          "w-full rounded-2xl px-6 py-3.5 flex items-center justify-between transition-all duration-300",
          isScrolled
            ? "bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-lg shadow-slate-200/50"
            : "bg-white/80 backdrop-blur-md border border-slate-200/60 shadow-sm"
        )}
      >
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform bg-white border border-slate-200 p-1 shrink-0 flex items-center justify-center">
            <Image
              src="/projects/fev-emblem-max.png"
              alt={SITE_CONFIG.brandName}
              width={56}
              height={56}
              className="object-contain w-full h-full rounded-xl"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 font-heading leading-tight group-hover:text-indigo-600 transition-colors">
              {SITE_CONFIG.brandName}
            </span>
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-indigo-600 uppercase">
              DESIGN • DEVELOP • GROW
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {SITE_CONFIG.navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "text-xs font-semibold transition-colors hover:text-indigo-600 relative py-1",
                  isActive ? "text-indigo-600 font-bold" : "text-slate-600"
                )}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenInquiry}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 text-white text-xs font-bold hover:shadow-lg hover:shadow-indigo-500/25 transition-all flex items-center gap-2"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-slate-100 text-slate-700 hover:text-slate-900"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 p-6 rounded-2xl bg-white border border-slate-200 shadow-xl flex flex-col gap-4">
          {SITE_CONFIG.navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-700 hover:text-indigo-600 py-2 border-b border-slate-100"
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenInquiry?.();
            }}
            className="w-full mt-2 py-3 rounded-full bg-indigo-600 text-white text-sm font-bold text-center"
          >
            Start a Project
          </button>
        </div>
      )}
    </header>
  );
};
