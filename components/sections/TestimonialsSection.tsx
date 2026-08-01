"use client";

import React from "react";
import { motion } from "framer-motion";
import { TESTIMONIALS_DATA } from "@/data/projects";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 relative">
      <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-3 mb-8 sm:mb-12">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600">
          Client Feedback & Reviews
        </span>
        <h2 className="text-2xl xs:text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
          Trusted by Founders & Engineering Leaders
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm max-w-xl">
          Here is what our clients say about our code quality, speed, communication, and project delivery.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {TESTIMONIALS_DATA.map((t, idx) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="p-5 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-lg shadow-slate-200/30 flex flex-col justify-between gap-5 sm:gap-6"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                "{t.content}"
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-900 font-heading">{t.name}</span>
                <span className="text-[10px] text-slate-500 font-mono">{t.role}, {t.company}</span>
              </div>
              <Quote className="w-6 h-6 text-indigo-100" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
