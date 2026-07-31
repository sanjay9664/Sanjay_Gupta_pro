import React from "react";
import Metadata from "next";
import Link from "next/link";
import { SERVICES_DATA } from "@/data/services";
import { SITE_CONFIG } from "@/lib/site-config";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { Code2, ArrowUpRight, Zap, Layers, Rocket, ShoppingCart, LayoutDashboard, Server, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Web Development Services | Next.js, React & SaaS Studio",
  description: "Explore our full suite of web development services: Next.js Development, Full-Stack SaaS platforms, Headless E-Commerce, Admin Dashboards, and API Architecture.",
};

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-8 h-8 text-indigo-400" />,
  Zap: <Zap className="w-8 h-8 text-sky-400" />,
  Layers: <Layers className="w-8 h-8 text-emerald-400" />,
  Rocket: <Rocket className="w-8 h-8 text-purple-400" />,
  ShoppingCart: <ShoppingCart className="w-8 h-8 text-amber-400" />,
  LayoutDashboard: <LayoutDashboard className="w-8 h-8 text-rose-400" />,
  Server: <Server className="w-8 h-8 text-cyan-400" />,
  Sparkles: <Sparkles className="w-8 h-8 text-indigo-400" />,
};

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 max-w-7xl mx-auto">
      <JsonLd type="Service" data={{ name: "Web Development Services", provider: SITE_CONFIG.brandName }} />

      <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4 mb-20">
        <Badge variant="indigo">Full-Stack Development Capabilities</Badge>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Services & Technical Solutions
        </h1>
        <p className="text-slate-300 text-lg">
          We engineer high-performance web applications tailored to your business goals. Zero legacy debt, top Core Web Vitals, and 100% source code ownership.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES_DATA.map((service) => {
          const IconElement = iconMap[service.iconName] || <Code2 className="w-8 h-8 text-indigo-400" />;
          return (
            <div
              key={service.id}
              className="p-8 rounded-3xl bg-slate-900 border border-white/10 flex flex-col justify-between gap-6 hover:border-indigo-500/40 transition-all shadow-xl"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    {IconElement}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500">
                    SERVICE {service.number}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-white">{service.title}</h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {service.fullDescription}
                </p>

                <div className="pt-2 flex flex-col gap-2">
                  <span className="text-xs font-mono font-semibold uppercase text-slate-400">
                    Key Deliverables:
                  </span>
                  <ul className="flex flex-col gap-1.5">
                    {service.features.slice(0, 3).map((f, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {service.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="default" className="text-[10px]">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  href={`/services/${service.slug}`}
                  showArrow
                >
                  View Scope
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
