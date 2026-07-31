"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemProps {
  id: string;
  question: string;
  answer: string;
  category?: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  question,
  answer,
  category,
  isOpen = false,
  onToggle,
}) => {
  return (
    <div className="border-b border-white/10 last:border-none">
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg transition-colors"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${id}`}
      >
        <div className="flex items-center gap-3 pr-4">
          {category && (
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              {category}
            </span>
          )}
          <span className="text-base sm:text-lg font-medium text-slate-100 group-hover:text-indigo-300 transition-colors">
            {question}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="p-1.5 rounded-full bg-white/5 group-hover:bg-white/10 border border-white/10 shrink-0 text-slate-400 group-hover:text-white"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Accordion: React.FC<{ items: { question: string; answer: string; category?: string }[] }> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-white/10 border-t border-b border-white/10">
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          id={`faq-${idx}`}
          question={item.question}
          answer={item.answer}
          category={item.category}
          isOpen={openIndex === idx}
          onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
        />
      ))}
    </div>
  );
};
