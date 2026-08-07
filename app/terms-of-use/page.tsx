import React from "react";
import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/site-config";
import { ShieldCheck, FileCheck2, Scale, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Terms of Use | ${SITE_CONFIG.brandName}`,
  description: `Official Terms of Use and service agreements for client projects and engineering engagements at ${SITE_CONFIG.brandName}.`,
};

export default function TermsOfUsePage() {
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
          <FileCheck2 className="w-6 h-6" />
        </div>
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600">Client Agreements</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
            Terms of Use
          </h1>
        </div>
      </div>

      <p className="text-xs text-slate-500 font-mono mb-8 pb-6 border-b border-slate-200">
        Last Revised: August 7, 2026 • Client Engagement Standards
      </p>

      <div className="space-y-8 text-sm sm:text-base leading-relaxed text-slate-700">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 font-heading flex items-center gap-2">
            <Scale className="w-5 h-5 text-indigo-600" />
            1. Service Engagement & Delivery Scope
          </h2>
          <p>
            {SITE_CONFIG.brandName} provides custom full-stack web application development, Next.js engineering, UI/UX design in Figma, and cloud deployment services. Detailed deliverables, milestone schedules, and acceptance criteria are outlined in individual Client Master Service Agreements (MSA) or Statements of Work (SOW).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 font-heading">
            2. Intellectual Property Ownership & Code Delivery
          </h2>
          <p>
            Upon full payment of agreed project invoices, 100% ownership of custom source code, design assets, database schemas, and documentation is fully transferred to the client.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 font-heading">
            3. Warranty & Bug Fix SLA
          </h2>
          <p>
            We provide a standard 30-to-90 day post-launch warranty period for all custom software projects to resolve any code bugs or functional discrepancies at zero additional cost to the client.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 font-heading">
            4. Governing Law & Contact
          </h2>
          <p>
            These Terms of Use are governed by the applicable laws. For legal inquiries or client agreements, please contact:
          </p>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-mono text-slate-800">
            {SITE_CONFIG.brandName}<br />
            Founder & Lead: {SITE_CONFIG.founder.name}<br />
            Email: <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-indigo-600 underline font-bold">{SITE_CONFIG.contact.email}</a>
          </div>
        </section>
      </div>

    </main>
  );
}
