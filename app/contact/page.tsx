import React from "react";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata = {
  title: "Contact Us | Start Your Web Project",
  description: "Get in touch to discuss your Next.js website, SaaS platform, or custom web application requirements. 24-hour response guarantee.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <JsonLd
        type="ProfessionalService"
        data={{
          name: `${SITE_CONFIG.brandName} Contact`,
          email: SITE_CONFIG.contact.email,
        }}
      />
      <ContactFormSection />
    </div>
  );
}
