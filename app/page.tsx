"use client";

import React, { useState } from "react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { IntroEntrance } from "@/components/sections/IntroEntrance";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectSlidingMarquee } from "@/components/sections/ProjectSlidingMarquee";
import { TeamSection } from "@/components/sections/TeamSection";
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
      {/* Page Entrance Intro Reveal Animation */}
      <IntroEntrance />

      {/* Unique Floating Dynamic Background */}
      <AnimatedBackground />

      <div className="relative z-10">
        <HeroSection onOpenInquiry={handleOpenInquiry} />
        <ProjectSlidingMarquee onOpenInquiry={handleOpenInquiry} />
        <StatsSection />
        <TechMarquee />
        <TeamSection onOpenInquiry={handleOpenInquiry} />
        <ServicesSection onOpenInquiry={handleOpenInquiry} />
        <AboutSection onOpenInquiry={handleOpenInquiry} />
        <TestimonialsSection />
      </div>

      <ProjectInquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
    </div>
  );
}
