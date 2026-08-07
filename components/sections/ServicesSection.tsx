"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, Layers, Smartphone, Palette, ArrowRight } from "lucide-react";

interface ServicesSectionProps {
  onOpenInquiry?: () => void;
}

const SERVICES_CARDS = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Fast, responsive and scalable websites built with modern technologies like Next.js, React, and TypeScript.",
    color: "bg-indigo-50 text-indigo-600 border-indigo-100",
    href: "/services/custom-web-development",
  },
  {
    icon: Layers,
    title: "SaaS Platforms",
    description: "Powerful SaaS solutions & MVPs that help you automate operations, serve clients, and scale your business.",
    color: "bg-sky-50 text-sky-600 border-sky-100",
    href: "/services/full-stack-development",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Cross-platform mobile & progressive web apps for iOS and Android that users love using every day.",
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    href: "/services/nextjs-development",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, user-centered interface designs, modern design systems, and fluid micro-animations that convert.",
    color: "bg-purple-50 text-purple-600 border-purple-100",
    href: "/services/headless-ecommerce-development",
  },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenInquiry }) => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-3.5 mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-mono font-bold uppercase tracking-widest shadow-xs">
          <span>WHAT WE DO</span>
        </div>
        <h2 className="text-2xl xs:text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
          End-to-end Digital Solutions
        </h2>
        <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
          From concept and UI design to full-stack engineering, cloud infrastructure, and ongoing maintenance.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {SERVICES_CARDS.map((service, idx) => {
          const IconComponent = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="group rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between items-center text-center xs:items-start xs:text-left shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-300 transition-all duration-300"
            >
              <div className="flex flex-col items-center xs:items-start gap-4 w-full">
                <div className={`w-13 h-13 rounded-2xl ${service.color} border flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-6 h-6" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading group-hover:text-indigo-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100/90 w-full flex items-center justify-center xs:justify-between">
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors py-1 group/link"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

