"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/lib/site-config";
import { JsonLd } from "@/components/seo/JsonLd";
import { Mail, Clock, MapPin, Send, CheckCircle2, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-36 pb-24 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col gap-12 relative z-10">
      <JsonLd
        type="ProfessionalService"
        data={{
          name: "Contact Studio",
          description: "Reach out to schedule an architecture discovery session or discuss custom web application development.",
        }}
      />

      <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4">
        <span className="text-xs font-mono font-bold tracking-widest text-indigo-600 uppercase">
          DIRECT COMMUNICATION CHANNEL
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight font-heading">
          Let's Talk About Your Project
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Prefer a direct conversation? Fill out the inquiry form below or reach out directly to schedule an architecture session.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Information Column */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-lg shadow-slate-200/40 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500 font-mono font-bold uppercase">Direct Email</span>
              <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                {SITE_CONFIG.contact.email}
              </a>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-lg shadow-slate-200/40 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500 font-mono font-bold uppercase">Response SLA Guarantee</span>
              <span className="text-sm font-bold text-slate-900">Under 24 Hours (Mon – Fri)</span>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-lg shadow-slate-200/40 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500 font-mono font-bold uppercase">Availability</span>
              <span className="text-sm font-bold text-slate-900">Global Digital Studio / Available Worldwide</span>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-xl shadow-slate-200/40">
          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-heading">Inquiry Received!</h3>
              <p className="text-sm text-slate-600 max-w-md">
                Thank you for reaching out. We will review your project details and respond within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-700">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Morgan"
                    className="px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-indigo-600"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-700">Business Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    className="px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-indigo-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-700">Company / Organization</label>
                  <input
                    type="text"
                    placeholder="Acme Corp"
                    className="px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-indigo-600"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-700">Project Type</label>
                  <select className="px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-indigo-600">
                    <option>Custom Website</option>
                    <option>Next.js Web Application</option>
                    <option>SaaS MVP Development</option>
                    <option>IoT Telemetry Dashboard</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-700">Project Description *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Share details about what you want to build, key feature requirements, or existing site URL..."
                  className="px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-indigo-600 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-sky-500 text-white font-bold text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Project Details</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
