import React from "react";
import { SITE_CONFIG } from "@/lib/site-config";

interface JsonLdProps {
  type?: "Organization" | "ProfessionalService" | "WebSite" | "Service" | "FAQPage" | "Article";
  data?: Record<string, any>;
}

export const JsonLd: React.FC<JsonLdProps> = ({ type = "Organization", data }) => {
  let schema: Record<string, any> = {};

  if (type === "Organization" || type === "ProfessionalService") {
    schema = {
      "@context": "https://schema.org",
      "@type": type,
      "name": SITE_CONFIG.brandName,
      "url": SITE_CONFIG.domain,
      "logo": `${SITE_CONFIG.domain}/logo.png`,
      "description": SITE_CONFIG.longDescription,
      "email": SITE_CONFIG.contact.email,
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "Global"
      },
      "sameAs": [
        SITE_CONFIG.social.github,
        SITE_CONFIG.social.linkedin
      ],
      "knowsAbout": SITE_CONFIG.techStack,
      "priceRange": "$$$"
    };
  } else if (type === "WebSite") {
    schema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": SITE_CONFIG.brandName,
      "url": SITE_CONFIG.domain,
      "description": SITE_CONFIG.shortDescription,
      "publisher": {
        "@type": "Organization",
        "name": SITE_CONFIG.brandName
      }
    };
  } else if (data) {
    schema = {
      "@context": "https://schema.org",
      "@type": type,
      ...data
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
