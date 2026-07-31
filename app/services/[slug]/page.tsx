import React from "react";
import { notFound } from "next/navigation";
import { SERVICES_DATA } from "@/data/services";
import { SITE_CONFIG } from "@/lib/site-config";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { CheckCircle2, ArrowLeft, Sparkles, Layers, ShieldCheck, Zap } from "lucide-react";

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = SERVICES_DATA.find((s) => s.slug === resolvedParams.slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = SERVICES_DATA.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 max-w-5xl mx-auto flex flex-col gap-16">
      <JsonLd
        type="Service"
        data={{
          name: service.title,
          description: service.fullDescription,
          provider: SITE_CONFIG.brandName,
        }}
      />

      {/* Top Breadcrumb Back */}
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" href="/services" icon={<ArrowLeft className="w-4 h-4" />}>
          Back to Services
        </Button>
        <span className="text-xs font-mono text-slate-500">SERVICE {service.number}</span>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-6">
        <Badge variant="indigo">{service.title}</Badge>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
          {service.title}
        </h1>
        <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
          {service.fullDescription}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {service.technologies.map((tech) => (
            <Badge key={tech} variant="cyan">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Features & Deliverables Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl bg-slate-900 border border-white/10 flex flex-col gap-6 shadow-xl">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Zap className="w-5 h-5 text-indigo-400" />
            Core Engineering Features
          </h3>
          <ul className="flex flex-col gap-3">
            {service.features.map((f, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-8 rounded-3xl bg-slate-900 border border-white/10 flex flex-col gap-6 shadow-xl">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-sky-400" />
            Client Deliverables
          </h3>
          <ul className="flex flex-col gap-3">
            {service.deliverables.map((d, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-indigo-900/30 via-slate-900 to-slate-950 border border-indigo-500/30 flex flex-col gap-6 shadow-2xl">
        <h3 className="text-2xl font-bold text-white">Business & Technical Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {service.benefits.map((b, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-200 leading-relaxed">
              {b}
            </div>
          ))}
        </div>
      </div>

      {/* Service FAQs */}
      {service.faq && service.faq.length > 0 && (
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-bold text-white">Frequently Asked Questions</h3>
          <div className="p-6 rounded-3xl bg-slate-900 border border-white/10">
            <Accordion items={service.faq} />
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="p-8 rounded-3xl bg-slate-950 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <h3 className="text-2xl font-bold text-white">Ready to start your {service.title}?</h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">Let's discuss architecture and timeline.</p>
        </div>
        <Button variant="primary" size="md" href="/contact" showArrow>
          Start Your Project
        </Button>
      </div>
    </div>
  );
}
