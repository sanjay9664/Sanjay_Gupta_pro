"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertTriangle, ShieldCheck, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "Custom Website",
    budget: "$5,000 – $10,000",
    timeline: "Standard (1 – 2 Months)",
    description: "",
    honeypot: "", // Anti-spam field
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Anti-spam honeypot check: If bot filled honeypot, silently ignore
    if (formData.honeypot) {
      setStatus("success");
      return;
    }

    if (!formData.name || !formData.email || !formData.description) {
      setErrorMsg("Please fill in all required fields (Name, Email, Description).");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
      } else {
        setErrorMsg(data.error || "Failed to submit. Please try again.");
        setStatus("error");
      }
    } catch (err: any) {
      setErrorMsg("Network error. Please try again later.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Direct Contact Info */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6 sm:gap-8">
          <div className="flex flex-col gap-3 sm:gap-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-indigo-400">
              Direct Communication Channel
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Let's Talk About Your Project
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Prefer a direct conversation? Fill out the form or reach out directly to schedule an architecture discovery session.
            </p>
          </div>

          <div className="flex flex-col gap-3.5 sm:gap-4">
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3.5 sm:gap-4">
              <div className="p-2.5 sm:p-3 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] sm:text-xs text-slate-400">Direct Email</span>
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-xs sm:text-sm font-semibold text-white hover:text-indigo-300 truncate">
                  {SITE_CONFIG.contact.email}
                </a>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3.5 sm:gap-4">
              <div className="p-2.5 sm:p-3 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] sm:text-xs text-slate-400">Direct Phone</span>
                <a href={`tel:${SITE_CONFIG.contact.phone.replace(/[^0-9+]/g, '')}`} className="text-xs sm:text-sm font-semibold text-white hover:text-emerald-300">
                  {SITE_CONFIG.contact.phone}
                </a>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3.5 sm:gap-4">
              <div className="p-2.5 sm:p-3 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] sm:text-xs text-slate-400">Response SLA Guarantee</span>
                <span className="text-xs sm:text-sm font-semibold text-white">Under 24 Hours</span>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3.5 sm:gap-4">
              <div className="p-2.5 sm:p-3 rounded-xl bg-sky-500/10 text-sky-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] sm:text-xs text-slate-400">Availability</span>
                <span className="text-xs sm:text-sm font-semibold text-white">{SITE_CONFIG.contact.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 bg-slate-900 border border-white/10 rounded-3xl p-4 sm:p-8 lg:p-10 shadow-2xl relative">
          {status === "success" ? (
            <div className="py-12 flex flex-col items-center justify-center text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
              <p className="text-slate-300 text-sm max-w-md">
                Thank you, <span className="font-semibold text-indigo-300">{formData.name}</span>. We have received your project details and will reply shortly.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setStatus("idle");
                  setFormData({
                    name: "",
                    email: "",
                    company: "",
                    projectType: "Custom Website",
                    budget: "$5,000 – $10,000",
                    timeline: "Standard (1 – 2 Months)",
                    description: "",
                    honeypot: "",
                  });
                }}
                className="mt-4"
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Anti-spam honeypot hidden input */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Alex Morgan"
                    className="w-full p-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    className="w-full p-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Corp"
                    className="w-full p-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full p-3.5 rounded-xl bg-slate-950 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  >
                    <option value="Custom Website">Custom Website</option>
                    <option value="Next.js Development">Next.js Development</option>
                    <option value="SaaS Application">SaaS Application</option>
                    <option value="Headless E-Commerce">Headless E-Commerce</option>
                    <option value="Admin Dashboard">Admin Dashboard</option>
                    <option value="API Integration">API Integration</option>
                    <option value="Website Redesign">Website Redesign</option>
                    <option value="Dedicated Developer Hiring">Dedicated Developer Hiring</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">
                    Estimated Budget
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full p-3.5 rounded-xl bg-slate-950 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  >
                    <option value="$3,000 – $5,000">$3,000 – $5,000</option>
                    <option value="$5,000 – $10,000">$5,000 – $10,000</option>
                    <option value="$10,000 – $20,000">$10,000 – $20,000</option>
                    <option value="$20,000+">$20,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">
                    Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full p-3.5 rounded-xl bg-slate-950 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  >
                    <option value="Urgent (< 4 Weeks)">Urgent (&lt; 4 Weeks)</option>
                    <option value="Standard (1 – 2 Months)">Standard (1 – 2 Months)</option>
                    <option value="Flexible (2 – 3 Months)">Flexible (2 – 3 Months)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">
                  Project Description *
                </label>
                <textarea
                  name="description"
                  required
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Share details about what you want to build, key feature requirements, or existing site URL..."
                  className="w-full p-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                />
              </div>

              {status === "error" && (
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-400 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                isLoading={status === "loading"}
                icon={<Send className="w-4 h-4" />}
                className="w-full justify-center mt-2"
                data-cursor="Submit"
              >
                Send Project Details
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
