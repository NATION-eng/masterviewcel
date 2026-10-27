"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { SlidersHorizontal, CheckCircle2, AlertTriangle } from "lucide-react";

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="w-full bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-800 text-white shadow-2xl">
      
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-slate-800 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-400/30">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Interactive Engineering Comparison</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
            TotalEnergies Central Control Room Upgrade
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Site Investigation & Ergonomic Overhaul • OML 58 (Obagi / Obite) • Technical Proposal No: <span className="font-mono text-amber-400">M-CEL 25/01/TP001</span>
          </p>
        </div>

        <div className="flex items-center space-x-3 text-xs shrink-0">
          <span className="flex items-center gap-1.5 text-rose-400 font-bold bg-rose-950/40 px-3 py-1 rounded-lg border border-rose-900">
            <AlertTriangle className="w-3.5 h-3.5" /> Existing Site
          </span>
          <span className="flex items-center gap-1.5 text-emerald-400 font-bold bg-emerald-950/40 px-3 py-1 rounded-lg border border-emerald-900">
            <CheckCircle2 className="w-3.5 h-3.5" /> Proposed Overhaul
          </span>
        </div>
      </div>

      {/* Interactive Drag Container */}
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative w-full h-[320px] sm:h-[480px] lg:h-[540px] rounded-2xl overflow-hidden cursor-ew-resize select-none border-2 border-slate-700 bg-black"
      >
        {/* RIGHT IMAGE (Proposed 3D Render) - Full Width Background */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/totalenergies/ccr-proposed-main.png"
            alt="M-CEL Proposed Ergonomic Control Room"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-full bg-emerald-600/90 text-white font-bold text-xs uppercase tracking-wider backdrop-blur-md shadow-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span>Proposed 3D Modernization</span>
          </div>
        </div>

        {/* LEFT IMAGE (Existing Dilapidated Site Photo) - Clipped by Slider */}
        <div
          style={{ width: `${sliderPos}%` }}
          className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-amber-400"
        >
          <div className="relative w-full h-full min-w-[320px] sm:min-w-[700px] lg:min-w-[1000px]">
            <Image
              src="/images/totalenergies/ccr-existing-main.png"
              alt="Existing OML 58 Control Room Site Survey"
              fill
              className="object-cover object-left"
              priority
            />
          </div>
          <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-slate-900/90 text-rose-300 font-bold text-xs uppercase tracking-wider backdrop-blur-md shadow-lg border border-rose-900 flex items-center gap-2">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
            <span>Existing Site Survey</span>
          </div>
        </div>

        {/* DRAG HANDLE BAR */}
        <div
          style={{ left: `${sliderPos}%` }}
          className="absolute inset-y-0 -ml-5 w-10 flex items-center justify-center pointer-events-none z-20"
        >
          <div className="w-10 h-10 rounded-full bg-amber-400 text-purple-950 flex items-center justify-center shadow-2xl border-2 border-white font-bold">
            <SlidersHorizontal className="w-5 h-5" />
          </div>
        </div>

      </div>

      {/* Engineering Improvement Specifications Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-800 text-xs">
        <div className="p-3 rounded-xl bg-slate-800/50">
          <span className="text-slate-400 block font-medium">Monitoring Architecture</span>
          <strong className="text-white text-sm">5-Panel 55” Ultra-HD Sony Video Wall</strong>
        </div>
        <div className="p-3 rounded-xl bg-slate-800/50">
          <span className="text-slate-400 block font-medium">Ergonomic Consoles</span>
          <strong className="text-white text-sm">Curved Multi-Operator Matrix Pods</strong>
        </div>
        <div className="p-3 rounded-xl bg-slate-800/50">
          <span className="text-slate-400 block font-medium">Cable Infrastructure</span>
          <strong className="text-white text-sm">60 sqm Anti-Static Raised Steel Floors</strong>
        </div>
        <div className="p-3 rounded-xl bg-slate-800/50">
          <span className="text-slate-400 block font-medium">Access Security</span>
          <strong className="text-white text-sm">Smart Biometric Facial Recognition</strong>
        </div>
      </div>

    </div>
  );
};
