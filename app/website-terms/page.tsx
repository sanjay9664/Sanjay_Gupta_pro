import React from "react";
import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/site-config";
import { Globe, FileCode2, Scale, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Website Terms | ${SITE_CONFIG.brandName}`,
  description: `Website Terms and conditions governing the use of ${SITE_CONFIG.brandName}'s online platforms and resources.`,
};

export default function WebsiteTermsPage() {
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
          <Globe className="w-6 h-6" />
        </div>
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600">Legal Terms</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
            Website Terms
          </h1>
        </div>
      </div>

      <p className="text-xs text-slate-500 font-mono mb-8 pb-6 border-b border-slate-200">
        Effective Date: August 7, 2026 • {SITE_CONFIG.brandName}
      </p>

      <div className="space-y-8 text-sm sm:text-base leading-relaxed text-slate-700">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 font-heading flex items-center gap-2">
            <Scale className="w-5 h-5 text-indigo-600" />
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or browsing this website ({SITE_CONFIG.domain}), you agree to comply with and be bound by these Website Terms. If you do not accept these terms in full, you must cease using this site immediately.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 font-heading flex items-center gap-2">
            <FileCode2 className="w-5 h-5 text-indigo-600" />
            2. Intellectual Property & Code Rights
          </h2>
          <p>
            All visual designs, code samples, interactive showcase mockups, graphics, brand logos, and content published on this website are the sole intellectual property of {SITE_CONFIG.brandName} unless explicitly transferred to clients via written development agreements.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 font-heading">
            3. User Conduct & Security
          </h2>
          <p>
            Visitors agree not to engage in unauthorized attempts to penetrate, reverse-engineer, scan, or disrupt website server infrastructure or submit malicious payloads via inquiry forms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 font-heading">
            4. External Links & Third-Party Resources
          </h2>
          <p>
            Our site may contain links to external GitHub repositories, LinkedIn profiles, or third-party documentation. We assume no responsibility for content or practices on external sites.
          </p>
        </section>
      </div>

    </main>
  );
}
