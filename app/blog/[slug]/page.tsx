import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog-posts";
import { SITE_CONFIG } from "@/lib/site-config";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { formatDate } from "@/lib/utils";
import { ArrowLeft, Clock, Calendar, User, List, Sparkles } from "lucide-react";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id);

  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 max-w-4xl mx-auto flex flex-col gap-12">
      <JsonLd
        type="Article"
        data={{
          headline: post.title,
          description: post.excerpt,
          datePublished: post.publishedAt,
          dateModified: post.updatedAt,
          author: {
            "@type": "Person",
            name: post.author.name,
          },
          publisher: {
            "@type": "Organization",
            name: SITE_CONFIG.brandName,
          },
        }}
      />

      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" href="/blog" icon={<ArrowLeft className="w-4 h-4" />}>
          Back to Blog
        </Button>
        <Badge variant="cyan">{post.category}</Badge>
      </div>

      <div className="flex flex-col gap-6">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono py-3 border-y border-white/10">
          <div className="flex items-center gap-2 text-white font-semibold">
            <User className="w-4 h-4 text-indigo-400" />
            <span>{post.author.name}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-slate-500" />
            <span>Published {formatDate(post.publishedAt)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-slate-500" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      {post.tableOfContents && post.tableOfContents.length > 0 && (
        <div className="p-6 rounded-2xl bg-slate-900 border border-white/10 flex flex-col gap-3">
          <div className="flex items-center gap-2 font-bold text-sm text-white">
            <List className="w-4 h-4 text-indigo-400" />
            Table of Contents
          </div>
          <ul className="flex flex-col gap-2 text-xs text-slate-300">
            {post.tableOfContents.map((item) => (
              <li key={item.id} className="hover:text-indigo-300 transition-colors">
                <a href={`#${item.id}`}>• {item.text}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Article Content Render */}
      <article className="prose prose-invert max-w-none text-slate-300 leading-relaxed text-sm sm:text-base whitespace-pre-line">
        {post.content}
      </article>

      {/* Article Author Footer Card */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-white/10 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold font-mono">
          AV
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-white">{post.author.name}</span>
          <span className="text-xs text-slate-400">{post.author.role}</span>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="pt-8 border-t border-white/10 flex flex-col gap-6">
          <h3 className="text-2xl font-bold text-white">Related Articles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedPosts.map((rPost) => (
              <Link
                key={rPost.id}
                href={`/blog/${rPost.slug}`}
                className="p-6 rounded-2xl bg-slate-900 border border-white/10 hover:border-indigo-500/30 transition-all flex flex-col gap-3 group"
              >
                <span className="text-xs font-mono text-indigo-400">{rPost.category}</span>
                <h4 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {rPost.title}
                </h4>
                <span className="text-xs text-slate-500">{rPost.readTime}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Article CTA */}
      <div className="p-8 rounded-3xl bg-slate-950 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <h3 className="text-2xl font-bold text-white">Have a project in mind?</h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">Let's discuss how we can build it together.</p>
        </div>
        <Button variant="primary" size="md" href="/contact" showArrow>
          Start Your Project
        </Button>
      </div>
    </div>
  );
}
