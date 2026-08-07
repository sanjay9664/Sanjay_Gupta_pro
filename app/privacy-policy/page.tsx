import React from "react";
import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/site-config";
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_CONFIG.brandName}`,
  description: `Privacy policy and data protection guidelines for ${SITE_CONFIG.brandName}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-slate-800">
      
      <Link 
        href="/"
        className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 hover:text-indigo-700 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Home</span>
      </Link>

      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600">Legal Compliance</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
            Privacy Policy
          </h1>
        </div>
      </div>

      <p className="text-xs text-slate-500 font-mono mb-8 pb-6 border-b border-slate-200">
        Last Updated: August 7, 2026 • Applies to all services provided by {SITE_CONFIG.brandName}
      </p>

      <div className="space-y-8 text-sm sm:text-base leading-relaxed text-slate-700">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 font-heading flex items-center gap-2">
            <Lock className="w-5 h-5 text-indigo-600" />
            1. Overview & Information Collection
          </h2>
          <p>
            At {SITE_CONFIG.brandName}, we prioritize the confidentiality and protection of your personal and business data. When you visit our website, inquire about our custom software development services, or submit project requirements, we collect minimal data necessary to fulfill your request.
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-slate-600">
            <li><strong>Contact Details:</strong> Name, professional email address, phone number, and project budget.</li>
            <li><strong>Technical Analytics:</strong> Anonymized IP addresses, browser type, device info, and page views via standard analytics.</li>
            <li><strong>Project Materials:</strong> Specifications, Figma files, code snippets, or documents uploaded during project inquiries.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 font-heading flex items-center gap-2">
            <Eye className="w-5 h-5 text-indigo-600" />
            2. How We Use Your Information
          </h2>
          <p>
            We strictly use collected information to:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-slate-600">
            <li>Respond to project inquiries, issue proposals, and provide software engineering services.</li>
            <li>Send project updates, SLA support responses, and transaction receipts.</li>
            <li>Improve website performance, user experience, and security posture.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 font-heading flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-600" />
            3. Data Sharing & Non-Disclosure (NDA)
          </h2>
          <p>
            We do <strong>NOT</strong> sell, rent, or trade your personal or business data to third parties. All client communications and proprietary project specifications are bound by our strict Non-Disclosure Agreement (NDA) policy.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 font-heading">
            4. Contact Our Data Protection Lead
          </h2>
          <p>
            If you have questions regarding this Privacy Policy or wish to request data deletion, contact us directly at:
          </p>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-mono text-slate-800">
            Email: <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-indigo-600 underline font-bold">{SITE_CONFIG.contact.email}</a><br />
            Founder: {SITE_CONFIG.founder.name}
          </div>
        </section>
      </div>

    </main>
  );
}
