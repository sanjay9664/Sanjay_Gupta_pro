"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, ArrowRight, ArrowLeft, Sparkles, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/site-config";
import { generateFormattedMessage } from "@/lib/email-template";
import { cn } from "@/lib/utils";

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SERVICE_OPTIONS = [
  "Custom Website",
  "SaaS Application",
  "E-Commerce Store",
  "Admin Dashboard",
  "Full-Stack Web App",
  "API & Backend Integration",
  "Website Redesign",
  "Dedicated Developer Hiring",
];

const BUDGET_OPTIONS = [
  "$3,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000 – $20,000",
  "$20,000+",
];

const TIMELINE_OPTIONS = [
  "Urgent (< 4 Weeks)",
  "Standard (1 – 2 Months)",
  "Flexible (2 – 3 Months)",
  "Long-term Partnership",
];

export const ProjectInquiryModal: React.FC<ProjectInquiryModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedTimeline, setSelectedTimeline] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleNext = () => {
    if (step === 1 && selectedServices.length === 0) {
      setErrorMsg("Please select at least one service.");
      return;
    }
    if (step === 2 && !selectedBudget) {
      setErrorMsg("Please select your estimated budget.");
      return;
    }
    if (step === 3 && !selectedTimeline) {
      setErrorMsg("Please select your target timeline.");
      return;
    }
    setErrorMsg("");
    setStep(step + 1);
  };

  const handleBack = () => {
    setErrorMsg("");
    setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      setErrorMsg("Please fill out your name and email.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          projectType: selectedServices.join(", ") || "Custom Project",
          budget: selectedBudget,
          timeline: selectedTimeline,
          description: description || "Inquiry submitted via interactive modal.",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setIsSubmitted(true);
      } else {
        setErrorMsg(data.error || "Submission failed. Please try again.");
      }
    } catch (err: any) {
      setErrorMsg("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetModal = () => {
    setStep(1);
    setSelectedServices([]);
    setSelectedBudget("");
    setSelectedTimeline("");
    setDescription("");
    setName("");
    setEmail("");
    setCompany("");
    setIsSubmitted(false);
    setIsSubmitting(false);
    setErrorMsg("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2.5 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={resetModal}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
      />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-2xl p-4 sm:p-8 shadow-2xl shadow-black/80 z-10 my-auto overflow-hidden max-h-[92vh] flex flex-col"
      >
        {/* Close Button */}
        <button
          onClick={resetModal}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 w-11 h-11 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center z-20 shrink-0"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-12 flex flex-col items-center justify-center text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Project Details Received!</h3>
            <p className="text-slate-300 text-sm max-w-md">
              Thank you, <span className="font-semibold text-indigo-300">{name}</span>. We will review your project scope and get back to you within 24 hours.
            </p>
            <Button variant="primary" onClick={resetModal} className="mt-4">
              Done
            </Button>
          </div>
        ) : (
          <>
            {/* Header & Step Counter */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                <span className="flex items-center gap-1.5 text-indigo-400 font-semibold">
                  <Sparkles className="w-3.5 h-3.5" /> Start Your Project
                </span>
                <span>Step {step} of 5</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-indigo-500 to-sky-400"
                  animate={{ width: `${(step / 5) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Step Content Form */}
            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col gap-4"
                  >
                    <h3 className="text-xl font-bold text-white">What do you need built?</h3>
                    <p className="text-xs text-slate-400">Select all that apply.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[300px] overflow-y-auto pr-1">
                      {SERVICE_OPTIONS.map((item) => {
                        const isSelected = selectedServices.includes(item);
                        return (
                          <button
                            type="button"
                            key={item}
                            onClick={() => toggleService(item)}
                            className={cn(
                              "p-3 rounded-xl border text-left text-sm font-medium transition-all flex items-center justify-between",
                              isSelected
                                ? "bg-indigo-600/15 border-indigo-500 text-white"
                                : "bg-white/5 border-white/10 text-slate-300 hover:border-white/20"
                            )}
                          >
                            <span>{item}</span>
                            {isSelected && <Check className="w-4 h-4 text-indigo-400" />}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col gap-4"
                  >
                    <h3 className="text-xl font-bold text-white">What is your estimated budget?</h3>
                    <p className="text-xs text-slate-400">Helps us tailor the architecture scope.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {BUDGET_OPTIONS.map((item) => (
                        <button
                          type="button"
                          key={item}
                          onClick={() => setSelectedBudget(item)}
                          className={cn(
                            "p-4 rounded-xl border text-left text-sm font-medium transition-all flex items-center justify-between",
                            selectedBudget === item
                              ? "bg-indigo-600/15 border-indigo-500 text-white"
                              : "bg-white/5 border-white/10 text-slate-300 hover:border-white/20"
                          )}
                        >
                          <span>{item}</span>
                          {selectedBudget === item && <Check className="w-4 h-4 text-indigo-400" />}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col gap-4"
                  >
                    <h3 className="text-xl font-bold text-white">What is your target timeline?</h3>
                    <p className="text-xs text-slate-400">When would you like to launch?</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {TIMELINE_OPTIONS.map((item) => (
                        <button
                          type="button"
                          key={item}
                          onClick={() => setSelectedTimeline(item)}
                          className={cn(
                            "p-4 rounded-xl border text-left text-sm font-medium transition-all flex items-center justify-between",
                            selectedTimeline === item
                              ? "bg-indigo-600/15 border-indigo-500 text-white"
                              : "bg-white/5 border-white/10 text-slate-300 hover:border-white/20"
                          )}
                        >
                          <span>{item}</span>
                          {selectedTimeline === item && <Check className="w-4 h-4 text-indigo-400" />}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col gap-4"
                  >
                    <h3 className="text-xl font-bold text-white">Tell us about your project</h3>
                    <p className="text-xs text-slate-400">Share your main goals or current site link.</p>
                    <textarea
                      rows={4}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Briefly describe what you want to build or improve..."
                      className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    />
                  </motion.div>
                )}

                {step === 5 && (
                  <motion.div
                    key="step5"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col gap-4"
                  >
                    <h3 className="text-xl font-bold text-white">Where should we send your proposal?</h3>
                    <div className="flex flex-col gap-3">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Jane Doe"
                          className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">Work Email *</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="jane@company.com"
                          className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">Company / Website (Optional)</label>
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Acme Corp"
                          className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Validation error msg */}
              {errorMsg && (
                <p className="mt-3 text-xs text-rose-400 font-medium">{errorMsg}</p>
              )}

              {/* Step Navigation Buttons */}
              <div className="mt-8 flex items-center justify-between pt-4 border-t border-white/10">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back
                  </button>
                ) : <div />}

                {step < 5 ? (
                  <Button
                    type="button"
                    onClick={handleNext}
                    variant="primary"
                    size="sm"
                    showArrow
                  >
                    Continue
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    isLoading={isSubmitting}
                    icon={<Send className="w-4 h-4" />}
                  >
                    Submit Project Details
                  </Button>
                )}
              </div>
            </form>
          </>
        )}
      </motion.div>
    </div>
  );
};
