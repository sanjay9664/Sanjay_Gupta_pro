import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/site-config";
import { ClientLayoutWrapper } from "@/components/layout/ClientLayoutWrapper";
import { JsonLd } from "@/components/seo/JsonLd";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: {
    default: `${SITE_CONFIG.brandName} | Full-Stack Web Development Agency & Digital Studio`,
    template: `%s | ${SITE_CONFIG.brandName}`,
  },
  description: SITE_CONFIG.shortDescription,
  keywords: [
    "Next.js Development Agency",
    "React Full-Stack Developer",
    "SaaS MVP Development",
    "Headless E-Commerce Storefronts",
    "Node.js TypeScript Engineer",
    "Custom Web Applications",
    "Core Web Vitals Performance",
  ],
  authors: [{ name: SITE_CONFIG.founder.name, url: SITE_CONFIG.domain }],
  creator: SITE_CONFIG.brandName,
  publisher: SITE_CONFIG.brandName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: `${SITE_CONFIG.brandName} | Full-Stack Web Development Agency`,
    description: SITE_CONFIG.shortDescription,
    url: SITE_CONFIG.domain,
    siteName: SITE_CONFIG.brandName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.brandName,
    description: SITE_CONFIG.shortDescription,
    creator: "@agencybrand",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sansFont.variable} ${monoFont.variable}`}>
      <head>
        <JsonLd type="Organization" />
        <JsonLd type="WebSite" />
      </head>
      <body className="font-sans bg-[#07080c] text-slate-100 antialiased selection:bg-indigo-600 selection:text-white">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
