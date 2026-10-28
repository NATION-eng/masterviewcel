"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, HardHat } from "lucide-react";

interface HeroAgencyProps {
  onOpenRfq: () => void;
  onOpenVideo?: () => void;
}

const slides = [
  {
    kicker: "— INTEGRATED ENGINEERING & ENERGY",
    title: "Engineering Solutions For All Enterprises",
    desc: "Masterview Consults Engineering Limited delivers world-standard oil & gas maintenance, precision calibration (ISO/IEC 17025), heavy structural fabrication, and turnkey contracting across Nigeria.",
    cta: "GET CONSULTATION",
    service: "General Engineering & Energy",
    bgImage: "/images/construction/engineers-slab-inspection.jpg",
    rightGraphic: "/images/hero-warehouse.jpg",
    graphicAlt: "Civil & Structural Engineering Slab Inspection",
  },
  {
    kicker: "— GLOBAL SUPPLY CHAIN MANAGEMENT",
    title: "Strategic Logistics & Heavy Haulage Across Nigeria",
    desc: "From inventory optimization and SAP material management to heavy-duty maritime port haulage and doorstep delivery, we drive seamless industrial supply continuity.",
    cta: "EXPLORE LOGISTICS",
    service: "Supply Chain & Haulage",
    bgImage: "/images/logistics/port-container-terminal.jpg",
    rightGraphic: "/images/logistics/warehouse-inventory-manager.jpg",
    graphicAlt: "Port Container Haulage & Supply Chain Terminal",
  },
  {
    kicker: "— DEFENCE & CIVIL INFRASTRUCTURE",
    title: "High-Performance Civil Construction & Turnkey Execution",
    desc: "Exemplified by the turnkey construction of the 16 Brigade Nigerian Army Sports Complex in Yenagoa, 40m x 40m clear-span steel warehouses, and corporate facilities.",
    cta: "VIEW ARMY PROJECT",
    service: "Civil Construction (16 Brigade Yenagoa)",
    bgImage: "/images/army/army-5-full-pitch.jpg",
    rightGraphic: "/images/construction/tower-crane-sunset.jpg",
    graphicAlt: "16 Brigade Nigerian Army Sports Complex Construction",
  },
  {
    kicker: "— STRUCTURAL FABRICATION & METROLOGY",
    title: "Precision Calibration & ASME Structural Fabrication",
    desc: "Laboratory-standard ISO/IEC 17025 instrument calibration, ASME Section IX certified pipe spool fabrication, and critical facility upgrades across the Niger Delta.",
    cta: "GET CONSULTATION",
    service: "Calibration & ASME Fabrication",
    bgImage: "/images/construction/fabrication-cutting.jpg",
    rightGraphic: "/images/construction/rebar-steel-fixing.jpg",
    graphicAlt: "ASME Welding and Precision Calibration",
  },
];

export const HeroAgency: React.FC<HeroAgencyProps> = ({ onOpenRfq, onOpenVideo }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Keyboard Navigation: Left (ArrowLeft) and Right (ArrowRight) Arrow Keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept when typing in form controls or modals
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLSelectElement
      ) {
        return;
      }

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  // Autoplay Slideshow: automatically transitions every 5.5 seconds, pauses on mouse hover
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5500);

    return () => clearInterval(interval);
  }, [currentSlide, isPaused, nextSlide]);

  // Touch Swipe Gesture Handlers for Mobile Devices
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Swiped left -> next slide
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      // Swiped right -> prev slide
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const active = slides[currentSlide];

  return (
    <section 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Homepage engineering slideshow. Press Left or Right arrow keys to navigate."
      className="relative w-full min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] bg-slate-900 overflow-hidden select-none outline-none group/hero"
    >
      
      {/* Background Image Layer with Subtle Depth Vignette */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="relative w-full h-full"
          >
            <Image
              src={active.bgImage}
              alt={active.title}
              fill
              className="object-cover object-center filter brightness-[0.82] lg:brightness-[0.88]"
              priority
            />
            {/* Cinematic Gradient: Leaves top and right side open and vivid, provides dark contrast on bottom-left for text */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 via-50% to-transparent lg:bg-gradient-to-tr lg:from-slate-950/95 lg:via-slate-950/60 lg:via-45% lg:to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Autoplay Slide Progress Bar at very top of hero */}
      <div className="absolute top-0 inset-x-0 h-1 bg-white/20 z-20 overflow-hidden">
        <motion.div
          key={`progress-${currentSlide}-${isPaused}`}
          initial={{ width: "0%" }}
          animate={{ width: isPaused ? "0%" : "100%" }}
          transition={{ duration: isPaused ? 0 : 5.5, ease: "linear" }}
          className="h-full bg-gradient-to-r from-amber-400 via-amber-300 to-purple-400"
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex flex-col justify-end pb-14 sm:pb-16 lg:pb-20 pt-16 sm:pt-20 lg:pt-24">
        
        <div className="max-w-3xl">
          
          {/* Cinematic Content Section (Desktop & Mobile Unified) */}
          <motion.div
            key={`card-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-transparent p-0 max-w-2xl relative pb-3 lg:pb-6"
          >
            {/* Active Discipline Kicker Badge */}
            <div className="mb-3 sm:mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs sm:text-sm font-extrabold uppercase tracking-wider backdrop-blur-md shadow-xs">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>{active.kicker.replace("— ", "")}</span>
              </span>
            </div>

            {/* Responsive Bold Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-[1.18] sm:leading-[1.12] mb-3 sm:mb-5 drop-shadow-lg">
              {active.title}
            </h1>

            {/* Subtitle */}
            <p className="text-slate-200 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-5 sm:mb-7 max-w-2xl drop-shadow-md">
              {active.desc}
            </p>

            {/* CTAs: Purple Pill Button + Explore Capabilities Trigger */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              
              {/* Primary Pill Button */}
              <button
                onClick={onOpenRfq}
                className="group w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-mcel-purple to-purple-800 hover:from-mcel-purpleLight hover:to-purple-900 text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-xs sm:text-sm tracking-wide transition-all shadow-xl hover:shadow-purple-950/30 active:scale-95 cursor-pointer border border-white/20"
              >
                <span>{active.cta}</span>
                <span className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center transition-transform group-hover:translate-x-1 shrink-0">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </span>
              </button>

              {/* Explore Capabilities Trigger */}
              <a
                href="#services"
                className="inline-flex items-center justify-center space-x-3 text-white hover:text-amber-300 font-semibold text-xs sm:text-sm transition-colors group cursor-pointer py-2 sm:py-0"
              >
                <span className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/20 backdrop-blur-md shadow-md flex items-center justify-center border border-white/30 group-hover:bg-white/30 group-hover:scale-105 transition-all shrink-0">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-amber-300 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="underline decoration-white/40 group-hover:decoration-amber-300 underline-offset-4 font-bold tracking-wide">
                  Explore Capabilities
                </span>
              </a>

            </div>

            {/* Slide Navigation Hints & Interactive Dots */}
            <div className="mt-5 sm:mt-8 pt-4 border-t border-white/15 flex items-center justify-between text-xs text-slate-300 max-w-xl">
              <span className="text-[11px] sm:text-xs font-medium text-slate-300 flex items-center gap-1.5">
                <span className="hidden sm:inline-flex items-center gap-1.5">
                  <kbd className="px-1.5 py-0.5 rounded bg-white/20 border border-white/30 font-mono text-[10px] text-white shadow-xs">←</kbd>
                  <kbd className="px-1.5 py-0.5 rounded bg-white/20 border border-white/30 font-mono text-[10px] text-white shadow-xs">→</kbd>
                  <span>Use arrow keys</span>
                </span>
                <span className="sm:hidden text-[10px] text-slate-400">Swipe to browse slides</span>
              </span>
              <div className="flex items-center space-x-2">
                {slides.map((slide, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      currentSlide === i 
                        ? "w-8 bg-amber-400 shadow-sm" 
                        : "w-2.5 bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`Go to slide ${i + 1}: ${slide.title}`}
                    title={`Slide ${i + 1}: ${slide.service}`}
                  />
                ))}
              </div>
            </div>

          </motion.div>

        </div>

      </div>

      {/* Signature Reference Boxed Slider Controls (Hidden on mobile phones, visible on desktop/tablet) */}
      <div className="hidden sm:flex absolute bottom-5 right-5 sm:bottom-8 sm:right-12 z-20 items-center bg-slate-900/85 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 overflow-hidden divide-x divide-white/20 text-white">
        <button
          onClick={prevSlide}
          className="w-11 h-11 sm:w-13 sm:h-13 flex items-center justify-center hover:bg-mcel-purple hover:text-white transition-colors cursor-pointer active:scale-95"
          aria-label="Previous Slide (← Arrow Key)"
          title="Previous Slide (← Arrow Key)"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Numeric Slide Counter */}
        <div className="px-4 sm:px-5 flex items-center justify-center text-xs sm:text-sm font-bold font-mono tracking-wider select-none">
          <span className="text-amber-400">{String(currentSlide + 1).padStart(2, "0")}</span>
          <span className="text-slate-400 mx-1.5">/</span>
          <span className="text-slate-400">{String(slides.length).padStart(2, "0")}</span>
        </div>

        <button
          onClick={nextSlide}
          className="w-11 h-11 sm:w-13 sm:h-13 flex items-center justify-center hover:bg-mcel-purple hover:text-white transition-colors cursor-pointer active:scale-95"
          aria-label="Next Slide (→ Arrow Key)"
          title="Next Slide (→ Arrow Key)"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

    </section>
  );
};
