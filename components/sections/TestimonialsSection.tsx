"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS_DATA } from "@/data/projects";
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquareQuote } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const total = TESTIMONIALS_DATA.length;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  // Auto-play slide left-to-right every 3.5 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(handleNext, 3500);
    return () => clearInterval(interval);
  }, [isPaused, total]);

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-indigo-50/20 to-slate-50/80 relative overflow-hidden border-t border-slate-200/80">
      
      {/* Soft Background Orbs */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-80 h-80 bg-indigo-200/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-80 h-80 bg-sky-200/25 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="flex flex-col items-start gap-2 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold shadow-sm">
              <MessageSquareQuote className="w-3.5 h-3.5 text-indigo-600 animate-pulse" />
              <span>CLIENT FEEDBACK & REVIEWS</span>
            </div>

            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
              Trusted by <span className="text-gradient-indigo">Founders & Engineering Leaders</span>
            </h2>
            
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Here is what our clients say about our code quality, speed, communication, and project delivery.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handlePrev}
              aria-label="Previous Review"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 hover:bg-indigo-600 hover:border-indigo-600 text-slate-600 hover:text-white flex items-center justify-center transition-all shadow-sm hover:shadow-md active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              aria-label="Next Review"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 hover:bg-indigo-600 hover:border-indigo-600 text-slate-600 hover:text-white flex items-center justify-center transition-all shadow-sm hover:shadow-md active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sliding Reviews Carousel */}
        <div
          className="relative overflow-hidden py-4 -mx-4 px-4 sm:mx-0 sm:px-0"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex items-center justify-center min-h-[260px] sm:min-h-[280px] relative">
            {TESTIMONIALS_DATA.map((t, idx) => {
              // Position relative to activeIndex
              const offset = (idx - activeIndex + total) % total;
              
              let visible = false;
              let isCenter = false;
              let isNext = false;
              let isPrev = false;

              if (offset === 0) {
                visible = true;
                isCenter = true;
              } else if (offset === 1 || (activeIndex === total - 1 && idx === 0)) {
                visible = true;
                isNext = true;
              } else if (offset === total - 1) {
                visible = true;
                isPrev = true;
              }

              if (!visible) return null;

              return (
                <motion.div
                  key={t.id}
                  layout
                  drag={isCenter ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -30) handleNext();
                    else if (info.offset.x > 30) handlePrev();
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: isCenter ? 1 : 0.4,
                    scale: isCenter ? 1 : (isMobile ? 0.78 : 0.85),
                    x: isCenter ? 0 : isNext ? (isMobile ? 240 : 340) : (isMobile ? -240 : -340),
                    zIndex: isCenter ? 30 : 10,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 240,
                    damping: 26,
                    mass: 0.7,
                  }}
                  onClick={() => {
                    if (isNext) handleNext();
                    if (isPrev) handlePrev();
                  }}
                  className={`absolute rounded-2xl p-5 sm:p-6 transition-colors duration-300 flex flex-col justify-between ${
                    isCenter
                      ? "w-[290px] xs:w-[320px] sm:w-[360px] bg-white border-2 border-indigo-500/40 shadow-xl shadow-indigo-500/10 cursor-grab active:cursor-grabbing"
                      : "w-[260px] sm:w-[310px] bg-white/90 border border-slate-200/90 shadow-sm cursor-pointer hover:opacity-75"
                  }`}
                >
                  {/* Rating Stars & Quote Icon */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-5 h-5 text-indigo-300" />
                  </div>

                  {/* Review Quote Text */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium italic mb-4 line-clamp-4">
                    "{t.content}"
                  </p>

                  {/* Client Author Info */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-slate-900 font-heading">
                        {t.name}
                      </span>
                      <span className="text-[11px] text-slate-500 font-mono font-medium">
                        {t.role}, <span className="text-indigo-600 font-semibold">{t.company}</span>
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Interactive Pagination Indicator Dots */}
          <div className="flex items-center justify-center gap-2 mt-8 z-40">
            {TESTIMONIALS_DATA.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setActiveIndex(dotIdx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === dotIdx
                    ? "w-8 bg-indigo-600 shadow-md shadow-indigo-600/30"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to testimonial ${dotIdx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
