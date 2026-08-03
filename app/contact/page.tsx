"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/lib/site-config";
import { JsonLd } from "@/components/seo/JsonLd";
import { Mail, Phone, Clock, MapPin, Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

import { generateFormattedMessage } from "@/lib/email-template";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "Custom Website",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.description) {
      setErrorMsg("Please fill in all required fields (Name, Email, Description).");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.error || "Failed to submit. Please try again.");
      }
    } catch (err: any) {
      setErrorMsg("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-28 sm:pt-36 pb-16 sm:pb-24 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col gap-8 sm:gap-12 relative z-10">
      <JsonLd
        type="ProfessionalService"
        data={{
          name: `${SITE_CONFIG.brandName} Contact`,
          description: "Reach out to schedule an architecture discovery session or discuss custom web application development.",
        }}
      />

      <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-3 sm:gap-4">
        <span className="text-xs font-mono font-bold tracking-widest text-indigo-600 uppercase">
          DIRECT COMMUNICATION CHANNEL
        </span>
        <h1 className="text-3xl xs:text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight font-heading">
          Let's Talk About Your Project
        </h1>
        <p className="text-slate-600 text-xs sm:text-base lg:text-lg leading-relaxed">
          Prefer a direct conversation? Fill out the inquiry form below or reach out directly via email or phone.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Contact Information Column */}
        <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5">
          <div className="p-4 sm:p-6 rounded-3xl bg-white border border-slate-200/80 shadow-lg shadow-slate-200/40 flex items-center gap-3.5 sm:gap-4">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[11px] sm:text-xs text-slate-500 font-mono font-bold uppercase">Direct Email</span>
              <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-xs sm:text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors truncate">
                {SITE_CONFIG.contact.email}
              </a>
            </div>
          </div>

          <div className="p-4 sm:p-6 rounded-3xl bg-white border border-slate-200/80 shadow-lg shadow-slate-200/40 flex items-center gap-3.5 sm:gap-4">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[11px] sm:text-xs text-slate-500 font-mono font-bold uppercase">Direct Phone / Call</span>
              <a href={`tel:${SITE_CONFIG.contact.phone.replace(/[^0-9+]/g, '')}`} className="text-xs sm:text-sm font-bold text-slate-900 hover:text-emerald-600 transition-colors truncate">
                {SITE_CONFIG.contact.phone}
              </a>
            </div>
          </div>

          <div className="p-4 sm:p-6 rounded-3xl bg-white border border-slate-200/80 shadow-lg shadow-slate-200/40 flex items-center gap-3.5 sm:gap-4">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500 font-mono font-bold uppercase">Response SLA Guarantee</span>
              <span className="text-sm font-bold text-slate-900">Under 24 Hours</span>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-lg shadow-slate-200/40 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500 font-mono font-bold uppercase">Availability</span>
              <span className="text-sm font-bold text-slate-900">{SITE_CONFIG.contact.address}</span>
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
                Thank you for reaching out to <strong>{SITE_CONFIG.brandName}</strong>. Your message has been sent to <strong>{SITE_CONFIG.contact.email}</strong> and we will reply within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    company: "",
                    projectType: "Custom Website",
                    description: "",
                  });
                }}
                className="mt-4 px-6 py-2.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 transition-colors"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-700">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Sanjay Gupta"
                    className="px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-indigo-600"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-700">Business Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="yourname@gmail.com"
                    className="px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-indigo-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-700">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="8707375679"
                    className="px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-indigo-600"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-700">Company / Organization</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Corp"
                    className="px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-indigo-600"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-700">Project Type</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-indigo-600"
                >
                  <option value="Custom Website">Custom Website</option>
                  <option value="Next.js Web Application">Next.js Web Application</option>
                  <option value="SaaS MVP Development">SaaS MVP Development</option>
                  <option value="E-Commerce Solutions">E-Commerce Solutions</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-700">Project Description *</label>
                <textarea
                  name="description"
                  required
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Share details about what you want to build, key feature requirements, or existing site URL..."
                  className="px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-indigo-600 resize-none"
                />
              </div>

              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-xs font-semibold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-sky-500 text-white font-bold text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all flex items-center justify-center gap-2 disabled:opacity-75"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Inquiry...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Project Details</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
