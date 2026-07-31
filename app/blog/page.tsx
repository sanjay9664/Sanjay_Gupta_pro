import React from "react";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog-posts";
import { SITE_CONFIG } from "@/lib/site-config";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { formatDate } from "@/lib/utils";
import { ArrowUpRight, BookOpen, Clock } from "lucide-react";

export const metadata = {
  title: "Engineering Blog & Web Insights | Next.js & SaaS Guides",
  description: "Technical guides, architecture comparisons, cost estimators, and performance optimization insights for founders and web developers.",
};

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col gap-16">
      <JsonLd
        type="WebSite"
        data={{
          name: `${SITE_CONFIG.brandName} Blog`,
          description: "Engineering insights on Next.js, React, SaaS, and web performance.",
        }}
      />

      <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4">
        <Badge variant="indigo">Engineering Insights & Guides</Badge>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Web Engineering & SaaS Insights
        </h1>
        <p className="text-slate-300 text-lg">
          In-depth technical guides, framework comparisons, pricing benchmarks, and performance strategies written by developers for founders.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <div
            key={post.id}
            className="p-8 rounded-3xl bg-slate-900 border border-white/10 flex flex-col justify-between gap-6 hover:border-indigo-500/40 transition-all shadow-xl"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <Badge variant="cyan">{post.category}</Badge>
                <div className="flex items-center gap-1 text-xs text-slate-500 font-mono">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <h2 className="text-xl font-bold text-white leading-snug">{post.title}</h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{post.excerpt}</p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-500">{formatDate(post.publishedAt)}</span>
              <Button variant="outline" size="sm" href={`/blog/${post.slug}`} showArrow>
                Read Article
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
