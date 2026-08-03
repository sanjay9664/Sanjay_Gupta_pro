"use client";

import React, { useState } from "react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { PerformanceBenchmarkSection } from "@/components/sections/PerformanceBenchmarkSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
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
        <StatsSection />
        <TechMarquee />
        <ServicesSection onOpenInquiry={handleOpenInquiry} />
        <WhyUsSection />
        <PerformanceBenchmarkSection />
        <AboutSection onOpenInquiry={handleOpenInquiry} />
        <TestimonialsSection />
      </div>

      <ProjectInquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
    </div>
  );
}
