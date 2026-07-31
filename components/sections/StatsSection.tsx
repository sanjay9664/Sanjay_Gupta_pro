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
      color: "text-emerald-400",
    },
    {
      label: "Client Satisfaction",
      value: 99,
      suffix: "%",
      description: "Verified 5-Star Track Record",
      icon: Award,
      color: "text-amber-400",
    },
    {
      label: "Performance Score",
      value: 98,
      suffix: "/100",
      description: "Sub-Second Core Web Vitals",
      icon: Zap,
      color: "text-indigo-400",
    },
    {
      label: "Production Uptime",
      value: 99.9,
      suffix: "%",
      description: "24/7 Reliability & SLA",
      icon: ShieldCheck,
      color: "text-sky-400",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10 relative">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 flex flex-col gap-2 hover:border-indigo-500/30 transition-all shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold uppercase text-slate-400">
                  {stat.label}
                </span>
                <Icon className={`w-4 h-4 ${stat.color}`} />
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white pt-1">
                {stat.value === 99.9 ? (
                  <span>99.9%</span>
                ) : (
                  <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                )}
              </div>

              <p className="text-[11px] text-slate-400 leading-tight pt-1">
                {stat.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
