"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";

interface HeroAgencyProps {
  onOpenRfq: () => void;
  onOpenVideo?: () => void;
}

const slides = [
  {
    kicker: "— INTEGRATED ENGINEERING & ENERGY",
    title: "Engineering Solutions For All Enterprises",
    desc: "Masterview Consults Engineering Limited delivers world-standard oil & gas maintenance, precision calibration (ISO/IEC 17025), heavy structural fabrication, and turnkey contracting across Nigeria.",
    cta: "FREE CONSULTING",
    service: "General Engineering",
    bgImage: "/images/hero-warehouse.jpg",
    rightGraphic: "/images/hero-plane-globe.jpg",
  },
  {
    kicker: "— GLOBAL SUPPLY CHAIN MANAGEMENT",
    title: "Strategic Logistics & Heavy Haulage Across Nigeria",
    desc: "From inventory optimization and SAP material management to heavy-duty maritime port haulage and doorstep delivery, we drive seamless industrial supply continuity.",
    cta: "EXPLORE LOGISTICS",
    service: "Logistics",
    bgImage: "/images/hero-warehouse.jpg",
    rightGraphic: "/images/logistics/port-container-terminal.jpg",
  },
  {
    kicker: "— DEFENCE & CIVIL INFRASTRUCTURE",
    title: "High-Performance Civil Construction & Turnkey Execution",
    desc: "Exemplified by the turnkey construction of the 16 Brigade Nigerian Army Sports Complex in Yenagoa, 40m x 40m clear-span steel warehouses, and corporate facilities.",
    cta: "VIEW ARMY PROJECT",
    service: "Civil Construction",
    bgImage: "/images/construction/tower-crane-sunset.jpg",
    rightGraphic: "/images/army/army-5-full-pitch.jpg",
  },
];

export const HeroAgency: React.FC<HeroAgencyProps> = ({ onOpenRfq, onOpenVideo }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const active = slides[currentSlide];

  return (
    <section className="relative w-full min-h-[580px] lg:min-h-[660px] bg-slate-100 overflow-hidden select-none">
      
      {/* Background Image Layer with Subtle Depth Overlay */}
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
              className="object-cover object-center filter brightness-[0.92]"
              priority
            />
            {/* Soft Agency Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-slate-900/30" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-[580px] lg:min-h-[660px] flex flex-col justify-end pb-12 lg:pb-16 pt-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          {/* Overlapping Lower Card (Exact Reference Style: Soft Gray, Bold Typography, Pill CTA) */}
          <motion.div
            key={`card-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 bg-[#eaedf2]/95 backdrop-blur-md p-8 sm:p-10 rounded-2xl shadow-2xl border border-white/80 max-w-2xl relative"
          >
            {/* Small Kicker */}
            <p className="text-xs sm:text-[13px] font-bold text-slate-700 tracking-wider uppercase mb-3 flex items-center gap-1.5">
              <span>{active.kicker}</span>
            </p>

            {/* Bold Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight leading-[1.15] mb-4">
              {active.title}
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
              {active.desc}
            </p>

            {/* CTAs: Purple Pill Button + White Play Button (Matching Reference) */}
            <div className="flex flex-wrap items-center gap-5">
              
              {/* Reference Pill Button: Deep Purple with Encircled Arrow */}
              <button
                onClick={onOpenRfq}
                className="group inline-flex items-center space-x-3 bg-mcel-purple hover:bg-mcel-purpleLight text-white px-6 sm:px-7 py-3 rounded-full font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg hover:shadow-purple-950/20 active:scale-95 cursor-pointer"
              >
                <span>{active.cta}</span>
                <span className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </span>
              </button>

              {/* Reference Video Play Trigger */}
              <button
                onClick={onOpenVideo || onOpenRfq}
                className="inline-flex items-center space-x-3 text-slate-800 hover:text-mcel-purple font-semibold text-xs sm:text-sm transition-colors group cursor-pointer"
              >
                <span className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center border border-slate-200 group-hover:scale-105 transition-transform">
                  <Play className="w-4 h-4 text-mcel-purple fill-mcel-purple ml-0.5" />
                </span>
                <span className="underline decoration-slate-300 underline-offset-4 group-hover:decoration-mcel-purple font-bold">
                  Explore Capabilities
                </span>
              </button>

            </div>
          </motion.div>

          {/* Right Foreground Graphic (Matching the Reference 3D Aircraft & Truck Render Placement) */}
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
                alt="3D Engineering & Freight"
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
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

      {/* Signature Reference Bottom-Right Boxed Slider Controls */}
      <div className="absolute bottom-6 right-6 sm:right-10 z-20 flex items-center bg-white rounded-lg shadow-xl border border-slate-200 overflow-hidden divide-x divide-slate-200">
        <button
          onClick={prevSlide}
          className="w-12 h-12 flex items-center justify-center text-slate-700 hover:bg-mcel-purple hover:text-white transition-colors cursor-pointer"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 flex items-center justify-center text-slate-700 hover:bg-mcel-purple hover:text-white transition-colors cursor-pointer"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

    </section>
  );
};
