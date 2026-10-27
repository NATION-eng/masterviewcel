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
    service: "General Engineering",
    bgImage: "/images/hero-warehouse.jpg",
    rightGraphic: "/images/construction/engineers-slab-inspection.jpg",
    graphicAlt: "Civil & Structural Engineering Slab Inspection",
  },
  {
    kicker: "— GLOBAL SUPPLY CHAIN MANAGEMENT",
    title: "Strategic Logistics & Heavy Haulage Across Nigeria",
    desc: "From inventory optimization and SAP material management to heavy-duty maritime port haulage and doorstep delivery, we drive seamless industrial supply continuity.",
    cta: "EXPLORE LOGISTICS",
    service: "Logistics",
    bgImage: "/images/hero-plane-globe.jpg",
    rightGraphic: "/images/logistics/port-container-terminal.jpg",
    graphicAlt: "Port Container Haulage & Supply Chain Terminal",
  },
  {
    kicker: "— DEFENCE & CIVIL INFRASTRUCTURE",
    title: "High-Performance Civil Construction & Turnkey Execution",
    desc: "Exemplified by the turnkey construction of the 16 Brigade Nigerian Army Sports Complex in Yenagoa, 40m x 40m clear-span steel warehouses, and corporate facilities.",
    cta: "VIEW ARMY PROJECT",
    service: "Civil Construction",
    bgImage: "/images/construction/tower-crane-sunset.jpg",
    rightGraphic: "/images/army/army-5-full-pitch.jpg",
    graphicAlt: "16 Brigade Nigerian Army Sports Complex Construction",
  },
  {
    kicker: "— STRUCTURAL FABRICATION & METROLOGY",
    title: "Precision Calibration & ASME Structural Fabrication",
    desc: "Laboratory-standard ISO/IEC 17025 instrument calibration, ASME Section IX certified pipe spool fabrication, and critical facility upgrades across the Niger Delta.",
    cta: "GET CONSULTATION",
    service: "Calibration & Fabrication",
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
      className="relative w-full min-h-[560px] sm:min-h-[600px] lg:min-h-[660px] bg-slate-900 overflow-hidden select-none outline-none group/hero"
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
              alt="Engineering & Logistics Background"
              fill
              className="object-cover object-center filter brightness-[0.75] sm:brightness-[0.9]"
              priority
            />
            {/* Agency Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-slate-950/50" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-[560px] sm:min-h-[600px] lg:min-h-[660px] flex flex-col justify-end pb-16 sm:pb-16 lg:pb-16 pt-12 sm:pt-16 lg:pt-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
          
          {/* Overlapping Hero Card */}
          <motion.div
            key={`card-${currentSlide}`}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 bg-[#eaedf2]/95 backdrop-blur-md p-5 sm:p-8 lg:p-10 rounded-3xl shadow-2xl border border-white/90 max-w-2xl relative overflow-hidden"
          >
            {/* Smooth Autoplay Slide Progress Bar */}
            <div className="absolute top-0 inset-x-0 h-1 bg-slate-200/90 overflow-hidden">
              <motion.div
                key={`progress-${currentSlide}-${isPaused}`}
                initial={{ width: "0%" }}
                animate={{ width: isPaused ? "0%" : "100%" }}
                transition={{ duration: isPaused ? 0 : 5.5, ease: "linear" }}
                className="h-full bg-gradient-to-r from-mcel-purple via-purple-600 to-amber-500"
              />
            </div>

            {/* Small Kicker */}
            <p className="text-[11px] sm:text-xs lg:text-[13px] font-bold text-slate-700 tracking-wider uppercase mb-2 sm:mb-3 flex items-center gap-1.5">
              <span>{active.kicker}</span>
            </p>

            {/* Responsive Bold Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight leading-[1.18] sm:leading-[1.15] mb-3 sm:mb-4">
              {active.title}
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed mb-5 sm:mb-6 max-w-xl">
              {active.desc}
            </p>

            {/* MOBILE ONLY: Active Discipline Adaptive Preview Card */}
            <div className="block lg:hidden mb-5 rounded-2xl overflow-hidden border border-slate-300/80 relative h-40 sm:h-48 shadow-md">
              <Image
                src={active.rightGraphic}
                alt={active.graphicAlt}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[9px] font-bold uppercase tracking-widest text-amber-400 block mb-0.5">
                  Active Discipline
                </span>
                <p className="text-xs sm:text-sm font-bold font-heading line-clamp-1">
                  {active.service}
                </p>
              </div>
            </div>

            {/* CTAs: Purple Pill Button + White Play Button */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              
              {/* Primary Pill Button */}
              <button
                onClick={onOpenRfq}
                className="group w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-mcel-purple hover:bg-mcel-purpleLight text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg hover:shadow-purple-950/20 active:scale-95 cursor-pointer"
              >
                <span>{active.cta}</span>
                <span className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center transition-transform group-hover:translate-x-1 shrink-0">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </span>
              </button>

              {/* Explore Capabilities Trigger */}
              <a
                href="#services"
                className="inline-flex items-center justify-center space-x-3 text-slate-800 hover:text-mcel-purple font-semibold text-xs sm:text-sm transition-colors group cursor-pointer py-2 sm:py-0"
              >
                <span className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white shadow-md flex items-center justify-center border border-slate-200 group-hover:scale-105 group-hover:border-mcel-purple/30 transition-all shrink-0">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-mcel-purple transition-transform group-hover:translate-x-1" />
                </span>
                <span className="underline decoration-slate-300 underline-offset-4 group-hover:decoration-mcel-purple font-bold">
                  Explore Capabilities
                </span>
              </a>

            </div>

            {/* Slide Navigation Hints & Interactive Dots */}
            <div className="mt-5 pt-3.5 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500">
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 flex items-center gap-1.5">
                <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-300 font-mono text-[10px] text-slate-700 shadow-xs">←</kbd>
                <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-300 font-mono text-[10px] text-slate-700 shadow-xs">→</kbd>
                <span className="hidden sm:inline">Use arrow keys or swipe</span>
                <span className="sm:hidden">Swipe or use arrows</span>
              </span>
              <div className="flex items-center space-x-1.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentSlide === i ? "w-7 bg-mcel-purple" : "w-2 bg-slate-300 hover:bg-slate-400"
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
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-10 z-20 flex items-center bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-slate-200 overflow-hidden divide-x divide-slate-200">
        <button
          onClick={prevSlide}
          className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-slate-700 hover:bg-mcel-purple hover:text-white transition-colors cursor-pointer active:scale-95"
          aria-label="Previous Slide (← Arrow Key)"
          title="Previous Slide (← Arrow Key)"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Numeric Slide Counter */}
        <div className="px-3 sm:px-4 flex items-center justify-center text-xs font-bold text-slate-700 font-mono tracking-wider select-none">
          <span className="text-mcel-purple">{String(currentSlide + 1).padStart(2, "0")}</span>
          <span className="text-slate-300 mx-1">/</span>
          <span className="text-slate-400">{String(slides.length).padStart(2, "0")}</span>
        </div>

        <button
          onClick={nextSlide}
          className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-slate-700 hover:bg-mcel-purple hover:text-white transition-colors cursor-pointer active:scale-95"
          aria-label="Next Slide (→ Arrow Key)"
          title="Next Slide (→ Arrow Key)"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

    </section>
  );
};
