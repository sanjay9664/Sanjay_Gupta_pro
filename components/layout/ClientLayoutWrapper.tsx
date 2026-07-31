"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { ProjectInquiryModal } from "@/components/layout/ProjectInquiryModal";

export const ClientLayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const handleOpenInquiry = () => setIsInquiryOpen(true);
  const handleCloseInquiry = () => setIsInquiryOpen(false);

  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-indigo-500 selection:text-white">
      <ScrollProgress />
      <CustomCursor />

      <Navbar onOpenInquiry={handleOpenInquiry} />

      <main className="flex-grow">{children}</main>

      <Footer onOpenInquiry={handleOpenInquiry} />

      <ProjectInquiryModal isOpen={isInquiryOpen} onClose={handleCloseInquiry} />
    </div>
  );
};
