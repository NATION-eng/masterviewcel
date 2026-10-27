"use client";

import React, { useState } from "react";
import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { HeroAgency } from "@/components/HeroAgency";
import { ClientsMarquee } from "@/components/ClientsMarquee";
import { ExecutiveMessage } from "@/components/ExecutiveMessage";
import { ServicesMatrix } from "@/components/ServicesMatrix";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { ProjectSpotlight } from "@/components/ProjectSpotlight";
import { HseSection } from "@/components/HseSection";
import { Footer } from "@/components/Footer";
import { RfqModal } from "@/components/RfqModal";
import { MobileActionBar } from "@/components/MobileActionBar";

export default function HomePage() {
  const [rfqOpen, setRfqOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("General Engineering");

  const openRfqWithService = (serviceName: string) => {
    setSelectedService(serviceName);
    setRfqOpen(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      
      {/* 1. TOP UTILITY BAR WITH SIGNATURE PURPLE NOTCH (Hidden on mobile for clean screen estate) */}
      <TopBar onOpenRfq={() => openRfqWithService("General Engineering")} />

      {/* 2. MAIN AGENCY NAVBAR WITH EXCEPTIONAL MOBILE DRAWER */}
      <Navbar onOpenRfq={() => openRfqWithService("General Engineering")} />

      <main className="flex-grow pb-12 md:pb-0">
        
        {/* 3. HERO SECTION (Touch Swipe, Mobile Adaptive Discipline Preview, 1:1 Reference Style) */}
        <HeroAgency onOpenRfq={() => openRfqWithService("General Engineering")} />

        {/* 4. VERIFIED CLIENTS & PARTNERS INFINITE MARQUEE */}
        <ClientsMarquee />

        {/* 5. EXECUTIVE LEADERSHIP & CORPORATE PROFILE (Engr. Jonathan David J.) */}
        <ExecutiveMessage />

        {/* 6. EIGHT CORE ENGINEERING DISCIPLINES (With International Standards Badges) */}
        <ServicesMatrix onSelectService={openRfqWithService} />

        {/* 7. SIGNATURE INTERACTIVE "BEFORE & AFTER" CONTROL ROOM SLIDER */}
        <section className="py-14 sm:py-20 bg-slate-950 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BeforeAfterSlider />
          </div>
        </section>

        {/* 8. DELIVERED CONTRACTS SPOTLIGHT (Nigerian Army 5 On-Site Photos) */}
        <ProjectSpotlight />

        {/* 9. HEALTH, SAFETY & ENVIRONMENT (Zero Negative Incidents) */}
        <HseSection />

      </main>

      {/* 10. COMPREHENSIVE CORPORATE FOOTER */}
      <Footer />

      {/* 11. MOBILE STICKY QUICK ACTION BAR (1-Tap Call, WhatsApp, Logistics, RFQ) */}
      <MobileActionBar onOpenRfq={() => openRfqWithService("General Engineering")} />

      {/* FAST CONSULTATION / RFQ POPUP MODAL */}
      <RfqModal
        isOpen={rfqOpen}
        onClose={() => setRfqOpen(false)}
        defaultService={selectedService}
      />

    </div>
  );
}
