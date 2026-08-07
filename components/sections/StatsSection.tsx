"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { CheckCircle2, Award, Zap, ShieldCheck } from "lucide-react";

export const StatsSection: React.FC = () => {
  const stats = [
    {
      label: "Projects Delivered",
      value: 15,
      suffix: "+",
      description: "Live IoT, Telehealth & Web Apps",
      icon: CheckCircle2,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      label: "Client Satisfaction",
      value: 99,
      suffix: "%",
      description: "Verified 5-Star Track Record",
      icon: Award,
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
    {
      label: "Performance Score",
      value: 98,
      suffix: "/100",
      description: "Sub-Second Core Web Vitals",
      icon: Zap,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
    {
      label: "Production Uptime",
      value: 99.9,
      suffix: "%",
      description: "24/7 Reliability & SLA",
      icon: ShieldCheck,
      color: "text-sky-600",
      bg: "bg-sky-50",
    },
  ];

  return (
    <section className="py-10 sm:py-16 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 relative">
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-4 sm:p-6 rounded-3xl bg-white border border-slate-200/80 flex flex-col items-center xs:items-start text-center xs:text-left gap-2 shadow-lg shadow-slate-200/40 hover:border-indigo-300 transition-all"
            >
              <div className="flex items-center justify-between w-full gap-2">
                <span className="text-[11px] sm:text-xs font-mono font-bold uppercase text-slate-500 truncate">
                  {stat.label}
                </span>
                <div className={`w-8 h-8 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center shrink-0`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              <div className="text-2xl sm:text-4xl font-extrabold font-heading text-slate-900 pt-1 text-center xs:text-left">
                {stat.value === 99.9 ? (
                  <span>99.9%</span>
                ) : (
                  <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                )}
              </div>

              <p className="text-xs text-slate-500 leading-tight pt-1 font-medium text-center xs:text-left">
                {stat.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
