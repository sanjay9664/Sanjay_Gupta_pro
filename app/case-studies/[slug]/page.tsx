import React from "react";
import { notFound } from "next/navigation";
import { PROJECTS_DATA } from "@/data/projects";
import { SITE_CONFIG } from "@/lib/site-config";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArrowLeft, CheckCircle2, ShieldAlert, Globe, ExternalLink, Sparkles, LayoutDashboard, Server } from "lucide-react";

export async function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === resolvedParams.slug);
  if (!project) return {};

  return {
    title: `${project.title} | Case Study`,
    description: project.solution,
  };
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 max-w-5xl mx-auto flex flex-col gap-16">
      <JsonLd
        type="Article"
        data={{
          headline: project.title,
          description: project.solution,
          author: SITE_CONFIG.brandName,
        }}
      />

      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" href="/portfolio" icon={<ArrowLeft className="w-4 h-4" />}>
          Back to Portfolio
        </Button>
        <div className="flex items-center gap-2">
          <Badge variant="indigo">{project.category}</Badge>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 transition-colors"
            >
              <Globe className="w-3.5 h-3.5" /> Live Production
            </a>
          )}
        </div>
      </div>

      {/* Header & Title */}
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          {project.title}
        </h1>
        <p className="text-xl text-slate-300 font-mono">{project.tagline}</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-900 border border-white/10 text-xs font-mono">
          <div>
            <span className="text-slate-500 block mb-1">Client</span>
            <span className="text-white font-semibold">{project.client}</span>
          </div>
          <div>
            <span className="text-slate-500 block mb-1">Timeline</span>
            <span className="text-white font-semibold">{project.timeline}</span>
          </div>
          <div>
            <span className="text-slate-500 block mb-1">Role</span>
            <span className="text-white font-semibold">{project.role}</span>
          </div>
          <div>
            <span className="text-slate-500 block mb-1">Live Application</span>
            {project.demoUrl ? (
              <a href={project.demoUrl} target="_blank" rel="noreferrer" className="text-indigo-400 font-semibold hover:underline flex items-center gap-1">
                <span>Visit Live App</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            ) : (
              <span className="text-slate-400">Internal Portal</span>
            )}
          </div>
        </div>
      </div>

      {/* Live Interactive UI Preview Frame */}
      <div className="rounded-3xl bg-slate-900 border border-white/15 p-6 sm:p-10 flex flex-col gap-6 shadow-2xl relative overflow-hidden">
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="w-5 h-5 text-indigo-400" />
            <span className="text-sm font-bold text-white">Interactive UI & Application Preview</span>
          </div>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/25"
            >
              <span>Open Live Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        <div className="p-6 rounded-2xl bg-slate-950 border border-white/10 flex flex-col gap-4 font-mono text-xs">
          <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-white/10">
            <span>Production URL Endpoint:</span>
            <span className="text-emerald-400">{project.demoUrl || "Protected Cloud Environment"}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-slate-400 block text-[10px]">{m.label}</span>
                <span className="text-2xl font-extrabold text-emerald-400 mt-1 block">{m.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Challenge & Solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl bg-slate-900 border border-rose-500/20 flex flex-col gap-4">
          <div className="flex items-center gap-2 font-bold text-rose-400">
            <ShieldAlert className="w-5 h-5" />
            The Client Challenge
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">{project.problem}</p>
        </div>

        <div className="p-8 rounded-3xl bg-slate-900 border border-emerald-500/20 flex flex-col gap-4">
          <div className="flex items-center gap-2 font-bold text-emerald-400">
            <CheckCircle2 className="w-5 h-5" />
            Engineering Solution Delivered
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">{project.solution}</p>
        </div>
      </div>

      {/* Key Deliverables & Tech Stack */}
      <div className="p-8 rounded-3xl bg-slate-900 border border-white/10 flex flex-col gap-6">
        <h3 className="text-xl font-bold text-white">Impact & Key Highlights</h3>
        <ul className="flex flex-col gap-3">
          {project.impact.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-slate-400 mr-2">Technologies Used:</span>
          {project.technologies.map((t) => (
            <span key={t} className="text-xs font-mono text-indigo-300 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="p-8 rounded-3xl bg-slate-950 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold text-white">Need a similar application or system?</h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">Let's discuss your technical requirements.</p>
        </div>
        <div className="flex items-center gap-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/10 text-white text-xs font-semibold hover:bg-white/20 transition-colors"
            >
              <span>Visit Live App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          <Button variant="primary" size="md" href="/contact" showArrow>
            Start Your Project
          </Button>
        </div>
      </div>
    </div>
  );
}
