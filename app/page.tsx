"use client";

import React, { useState } from "react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { HeroSection } from "@/components/sections/HeroSection";
import { DashboardMockup } from "@/components/sections/DashboardMockup";
import { StatsSection } from "@/components/sections/StatsSection";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StudioShowcaseSection } from "@/components/sections/StudioShowcaseSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { PerformanceBenchmarkSection } from "@/components/sections/PerformanceBenchmarkSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ProjectInquiryModal } from "@/components/layout/ProjectInquiryModal";

export default function HomePage() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const handleOpenInquiry = () => setIsInquiryOpen(true);

  return (
    <div className="relative overflow-hidden">
      {/* Unique Floating Dynamic Background */}
      <AnimatedBackground />

      <div className="relative z-10">
        <HeroSection onOpenInquiry={handleOpenInquiry} />
        <DashboardMockup />
        <StatsSection />
        <TechMarquee />
        <ServicesSection onOpenInquiry={handleOpenInquiry} />
        <StudioShowcaseSection onOpenInquiry={handleOpenInquiry} />
        <WhyUsSection />
        <ProcessSection />
        <PerformanceBenchmarkSection />
        <AboutSection onOpenInquiry={handleOpenInquiry} />
        <TestimonialsSection />
        <FAQSection />
      </div>

      <ProjectInquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
    </div>
  );
}
