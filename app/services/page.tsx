"use client";

import React from "react";
import Link from "next/link";
import { SERVICES_DATA } from "@/data/services";
import { Badge } from "@/components/ui/Badge";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArrowRight, CheckCircle2, Code2, Layers, Smartphone, Palette, Globe, Server } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="pt-36 pb-24 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col gap-14 relative z-10">
      <JsonLd
        type="Service"
        data={{
          name: "Full-Stack Development Services",
          description: "Custom Web Application Development, SaaS MVP Engineering, and Next.js Architecture.",
        }}
      />

      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4">
        <span className="text-xs font-mono font-bold tracking-widest text-indigo-600 uppercase">
          CORE CAPABILITIES
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight font-heading">
          Full-Stack Web & Product Engineering
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          From custom SaaS platforms and Next.js web applications to industrial IoT telemetry portals — engineered with zero technical debt.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES_DATA.map((service) => (
          <div
            key={service.id}
            className="group rounded-3xl bg-white border border-slate-200/80 p-8 flex flex-col justify-between shadow-xl shadow-slate-200/40 hover:border-indigo-300 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100">
                  SERVICE #{service.number}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 font-heading group-hover:text-indigo-600 transition-colors">
                {service.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {service.shortDescription}
              </p>

              <div className="pt-2">
                <span className="text-[11px] font-mono font-bold uppercase text-slate-400 block mb-2">Key Deliverables:</span>
                <div className="flex flex-col gap-1.5">
                  {service.deliverables.slice(0, 3).map((d, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
              >
                <span>View Full Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
