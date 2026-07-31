import React from "react";
import Link from "next/link";
import { BLOG_POSTS_DATA } from "@/data/blog-posts";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArrowRight, Clock, Calendar } from "lucide-react";

export const metadata = {
  title: "Engineering Insights & Articles | Full-Stack Product Studio",
  description: "Technical articles on Next.js performance tuning, SaaS architecture, web application development, and Core Web Vitals optimization.",
};

export default function BlogPage() {
  return (
    <div className="pt-36 pb-24 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col gap-12 relative z-10">
      <JsonLd
        type="WebSite"
        data={{
          name: "Engineering Insights",
          description: "Technical deep-dives on Next.js architecture, Core Web Vitals, and web application performance.",
        }}
      />

      <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4">
        <span className="text-xs font-mono font-bold tracking-widest text-indigo-600 uppercase">
          ENGINEERING INSIGHTS & ARTICLES
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight font-heading">
          Technical Writing & Studio Notes
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Deep dives into modern web architecture, Next.js performance tuning, micro-frontend patterns, and SaaS MVP engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BLOG_POSTS_DATA.map((post) => (
          <div
            key={post.id}
            className="group rounded-3xl bg-white border border-slate-200/80 p-8 flex flex-col justify-between shadow-xl shadow-slate-200/40 hover:border-indigo-300 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100">
                  {post.category}
                </span>
                <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {post.readTime}
                </span>
              </div>

              <h2 className="text-xl font-bold text-slate-900 font-heading group-hover:text-indigo-600 transition-colors">
                {post.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-mono">{post.publishedAt}</span>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
              >
                <span>Read Article</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
