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
              className="object-cover object-center filter brightness-[0.8] lg:brightness-[0.9]"
              priority
            />
            {/* Agency Vignette Overlay: On mobile, leaves top 55% completely open and transparent; on desktop, side vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 via-45% to-transparent lg:bg-gradient-to-r lg:from-slate-950/85 lg:via-slate-950/45 lg:to-slate-950/50" />
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] flex flex-col justify-end pb-14 sm:pb-16 lg:pb-16 pt-12 sm:pt-16 lg:pt-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
          
          {/* Overlapping Hero Card on Desktop / Clean Cinematic Overlay on Mobile */}
          <motion.div
            key={`card-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 bg-transparent lg:bg-[#eaedf2]/95 lg:backdrop-blur-md p-0 lg:p-10 lg:rounded-3xl lg:shadow-2xl lg:border lg:border-white/90 max-w-2xl relative lg:overflow-hidden pb-3 lg:pb-10"
          >
            {/* Desktop-only card top progress bar */}
            <div className="hidden lg:block absolute top-0 inset-x-0 h-1 bg-slate-200/90 overflow-hidden">
              <motion.div
                key={`progress-desktop-${currentSlide}-${isPaused}`}
                initial={{ width: "0%" }}
                animate={{ width: isPaused ? "0%" : "100%" }}
                transition={{ duration: isPaused ? 0 : 5.5, ease: "linear" }}
                className="h-full bg-gradient-to-r from-mcel-purple via-purple-600 to-amber-500"
              />
            </div>

            {/* Small Kicker */}
            <div className="mb-2 sm:mb-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider lg:bg-transparent lg:border-0 lg:p-0 lg:text-slate-700">
                {active.kicker}
              </span>
            </div>

            {/* Responsive Bold Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white lg:text-slate-900 font-heading tracking-tight leading-[1.18] sm:leading-[1.15] mb-2.5 sm:mb-4 drop-shadow-md lg:drop-shadow-none">
              {active.title}
            </h1>

            {/* Subtitle */}
            <p className="text-slate-200 lg:text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6 max-w-xl line-clamp-3 sm:line-clamp-none drop-shadow-sm lg:drop-shadow-none">
              {active.desc}
            </p>

            {/* CTAs: Purple Pill Button + Explore Capabilities Trigger */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-4">
              
              {/* Primary Pill Button */}
              <button
                onClick={onOpenRfq}
                className="group w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-mcel-purple hover:bg-mcel-purpleLight text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg hover:shadow-purple-950/20 active:scale-95 cursor-pointer border border-white/20 lg:border-transparent"
              >
                <span>{active.cta}</span>
                <span className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center transition-transform group-hover:translate-x-1 shrink-0">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </span>
              </button>

              {/* Explore Capabilities Trigger */}
              <a
                href="#services"
                className="inline-flex items-center justify-center space-x-2.5 text-white lg:text-slate-800 hover:text-amber-400 lg:hover:text-mcel-purple font-semibold text-xs sm:text-sm transition-colors group cursor-pointer py-1.5 sm:py-0"
              >
                <span className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white/20 lg:bg-white shadow-md flex items-center justify-center border border-white/30 lg:border-slate-200 group-hover:scale-105 transition-all shrink-0">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white lg:text-mcel-purple transition-transform group-hover:translate-x-1" />
                </span>
                <span className="underline decoration-white/40 lg:decoration-slate-300 underline-offset-4 font-bold">
                  Explore Capabilities
                </span>
              </a>

            </div>

            {/* Slide Navigation Hints & Interactive Dots */}
            <div className="mt-4 sm:mt-5 pt-3 sm:pt-3.5 border-t border-white/15 lg:border-slate-200/80 flex items-center justify-between text-[11px] text-slate-300 lg:text-slate-500">
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-300 lg:text-slate-500 flex items-center gap-1.5">
                <kbd className="px-1.5 py-0.5 rounded bg-white/20 lg:bg-white border border-white/30 lg:border-slate-300 font-mono text-[10px] text-white lg:text-slate-700 shadow-xs">←</kbd>
                <kbd className="px-1.5 py-0.5 rounded bg-white/20 lg:bg-white border border-white/30 lg:border-slate-300 font-mono text-[10px] text-white lg:text-slate-700 shadow-xs">→</kbd>
                <span className="hidden sm:inline">Use arrow keys or swipe</span>
                <span className="sm:hidden">Swipe or use arrows</span>
              </span>
              <div className="flex items-center space-x-1.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentSlide === i 
                        ? "w-7 bg-amber-400 lg:bg-mcel-purple" 
                        : "w-2 bg-white/40 lg:bg-slate-300 hover:bg-white/60 lg:hover:bg-slate-400"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                    title={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

          </motion.div>

          {/* Desktop Right Foreground Graphic (Reference Style) */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <motion.div
              key={`graphic-${currentSlide}`}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full h-[320px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group"
            >
              <Image
                src={active.rightGraphic}
                alt={active.graphicAlt}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 block mb-1">
                  Active Discipline
                </span>
                <p className="text-sm font-bold font-heading line-clamp-1">{active.service}</p>
              </div>
            </motion.div>
          </div>

        </div>

      </div>

      {/* Signature Reference Boxed Slider Controls */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-10 z-20 flex items-center bg-slate-900/90 lg:bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-white/20 lg:border-slate-200 overflow-hidden divide-x divide-white/20 lg:divide-slate-200 text-white lg:text-slate-700">
        <button
          onClick={prevSlide}
          className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-mcel-purple hover:text-white transition-colors cursor-pointer active:scale-95"
          aria-label="Previous Slide (← Arrow Key)"
          title="Previous Slide (← Arrow Key)"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Numeric Slide Counter */}
        <div className="px-3 sm:px-4 flex items-center justify-center text-xs font-bold font-mono tracking-wider select-none">
          <span className="text-amber-400 lg:text-mcel-purple">{String(currentSlide + 1).padStart(2, "0")}</span>
          <span className="text-slate-400 mx-1">/</span>
          <span className="text-slate-400">{String(slides.length).padStart(2, "0")}</span>
        </div>

        <button
          onClick={nextSlide}
          className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-mcel-purple hover:text-white transition-colors cursor-pointer active:scale-95"
          aria-label="Next Slide (→ Arrow Key)"
          title="Next Slide (→ Arrow Key)"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

    </section>
  );
};
