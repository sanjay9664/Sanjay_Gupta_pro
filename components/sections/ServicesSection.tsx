"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SERVICES_DATA } from "@/data/services";
import { ArrowUpRight, Code2, Zap, Layers, Rocket, ShoppingCart, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-indigo-400" />,
  Zap: <Zap className="w-5 h-5 text-sky-400" />,
  Layers: <Layers className="w-5 h-5 text-emerald-400" />,
  Rocket: <Rocket className="w-5 h-5 text-purple-400" />,
  ShoppingCart: <ShoppingCart className="w-5 h-5 text-amber-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-indigo-400" />,
};

interface ServicesSectionProps {
  onOpenInquiry?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenInquiry }) => {
  return (
    <section id="services" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto relative">
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-indigo-400">
            Core Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            From Idea to Production
          </h2>
        </div>

        <Button
          variant="outline"
          size="sm"
          href="/services"
          showArrow
          data-cursor="Services"
        >
          All Services
        </Button>
      </div>

      {/* Streamlined Services Grid (6 Cards, 3 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES_DATA.map((service, idx) => {
          const IconElement = iconMap[service.iconName] || <Code2 className="w-5 h-5 text-indigo-400" />;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col justify-between hover:border-indigo-500/40 hover:bg-white/[0.08] transition-all shadow-lg"
              data-cursor="Explore"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-white/10">
                    {IconElement}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500">
                    {service.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {service.shortDescription}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {service.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="default" className="text-[10px]">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-indigo-400 group-hover:text-indigo-300">
                <Link href={`/services/${service.slug}`} className="flex items-center gap-1">
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
