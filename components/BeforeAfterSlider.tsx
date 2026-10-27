"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { SlidersHorizontal, CheckCircle2, AlertTriangle, Building2, MoveHorizontal } from "lucide-react";

interface ComparisonCase {
  id: string;
  name: string;
  facility: string;
  proposalNo: string;
  existingImg: string;
  proposedImg: string;
  existingDesc: string;
  proposedDesc: string;
  specs: {
    label: string;
    value: string;
  }[];
}

const comparisonCases: ComparisonCase[] = [
  {
    id: "obite",
    name: "Obite Gas Plant CCR",
    facility: "OML 58 Obite Gas Processing Plant • TotalEnergies EP Nigeria",
    proposalNo: "M-CEL 25/01/TP001",
    existingImg: "/images/totalenergies/ccr-existing-obite-real.png",
    proposedImg: "/images/totalenergies/ccr-proposed-obite-3d.png",
    existingDesc: "Active field survey: congested operator consoles, mismatched screens, legacy wood partitions, and tangled surface wiring.",
    proposedDesc: "Masterview 3D CAD Modernization: curved multi-operator ergonomic console pods, 5-panel 55” video wall, anti-static raised floor, and branded acoustic wall architecture.",
    specs: [
      { label: "Monitoring Architecture", value: "5-Panel 55” Ultra-HD Sony Video Wall" },
      { label: "Ergonomic Consoles", value: "Curved Multi-Operator Matrix Pods" },
      { label: "Floor & Cable Tray", value: "60 sqm Anti-Static Raised Steel Floors" },
      { label: "Access Security", value: "Smart Biometric Facial Recognition" },
    ],
  },
  {
    id: "obagi",
    name: "Obagi Flowstation CCR",
    facility: "OML 58 Obagi Field Flowstation • TotalEnergies EP Nigeria",
    proposalNo: "M-CEL 25/01/TP002",
    existingImg: "/images/totalenergies/ccr-existing-obagi-real.png",
    proposedImg: "/images/totalenergies/ccr-proposed-obagi-3d.png",
    existingDesc: "Active field survey: outdated desktop monitors, temporary taped panels, exposed telecom wiring, and compromised operator comfort.",
    proposedDesc: "Masterview 3D CAD Overhaul: centralized process automation displays, recessed touch consoles, ergonomic 24/7 task seating, and redundant climate control.",
    specs: [
      { label: "Video Display Wall", value: "Multi-Feed TotalEnergies Process Displays" },
      { label: "Operator Ergonomics", value: "24/7 Heavy-Duty Lumbar Task Chairs" },
      { label: "Cable Management", value: "Underfloor Trunking & Isolated Racks" },
      { label: "HVAC & Lighting", value: "Acoustic Drop Ceiling with Glare-Free LED" },
    ],
  },
];

export const BeforeAfterSlider: React.FC = () => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(1000);
  const [isDragging, setIsDragging] = useState(false);

  const activeCase = comparisonCases[activeCaseIndex];

  // Track container width so the clipped left image matches the exact dimensions of the right image
  useEffect(() => {
    if (!containerRef.current) return;
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

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

  const handleContainerClick = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  return (
    <div className="w-full bg-slate-900 rounded-3xl p-4 sm:p-6 lg:p-10 border border-slate-800 text-white shadow-2xl">
      
      {/* Header Info */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-6 pb-6 border-b border-slate-800 gap-4 sm:gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2 border border-amber-400/30">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Interactive Engineering Comparison</span>
          </div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-heading text-white">
            TotalEnergies Central Control Room Upgrade
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
            Site Investigation & Ergonomic Overhaul • {activeCase.facility} • Proposal:{" "}
            <span className="font-mono text-amber-400 font-semibold">{activeCase.proposalNo}</span>
          </p>
        </div>

        {/* Facility Selector Tabs + Quick Status Badges */}
        <div className="flex flex-wrap sm:flex-row items-center gap-2.5 sm:gap-3 shrink-0">
          {/* Facility Toggle */}
          <div className="inline-flex p-1 rounded-xl bg-slate-800/80 border border-slate-700">
            {comparisonCases.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => {
                  setActiveCaseIndex(idx);
                  setSliderPos(50);
                }}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeCaseIndex === idx
                    ? "bg-mcel-purple text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Building2 className="w-3.5 h-3.5 shrink-0" />
                <span>{c.name}</span>
              </button>
            ))}
          </div>

          {/* Quick Legend Indicators */}
          <div className="flex items-center space-x-2 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1 text-rose-400 font-bold bg-rose-950/40 px-2 py-1 rounded-lg border border-rose-900">
              <AlertTriangle className="w-3 h-3" /> Real Site
            </span>
            <span className="flex items-center gap-1 text-emerald-400 font-bold bg-emerald-950/40 px-2 py-1 rounded-lg border border-emerald-900">
              <CheckCircle2 className="w-3 h-3" /> 3D Model
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Drag Comparison Container */}
      <div
        ref={containerRef}
        onClick={handleContainerClick}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
        className="relative w-full h-[280px] sm:h-[420px] lg:h-[540px] rounded-2xl overflow-hidden cursor-ew-resize select-none border-2 border-slate-700 bg-black shadow-inner touch-none"
      >
        {/* RIGHT IMAGE (Proposed 3D Model Render) - Full Width Background */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={activeCase.proposedImg}
            alt="M-CEL Proposed Ergonomic Control Room 3D Model"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Staggered on Mobile: Bottom-Right on mobile to never collide with top-left badge! */}
          <div className="absolute bottom-3 right-3 sm:top-4 sm:right-4 z-10 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-emerald-600/95 text-white font-bold text-[10px] sm:text-xs uppercase tracking-wider backdrop-blur-md shadow-lg flex items-center gap-1.5 border border-emerald-400/40">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span>Proposed 3D Model</span>
          </div>
        </div>

        {/* LEFT IMAGE (Existing Real Field Survey Photo) - Clipped by Slider Position */}
        <div
          style={{ width: `${sliderPos}%` }}
          className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-amber-400 z-10 shadow-[4px_0_15px_rgba(0,0,0,0.5)]"
        >
          <div
            style={{ width: containerWidth ? `${containerWidth}px` : "100%", height: "100%" }}
            className="relative"
          >
            <Image
              src={activeCase.existingImg}
              alt="Existing Control Room Real Field Survey Photo"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          {/* Top-Left Badge */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-slate-900/90 text-rose-300 font-bold text-[10px] sm:text-xs uppercase tracking-wider backdrop-blur-md shadow-lg border border-rose-900 flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
            <span>Active Site Survey</span>
          </div>
        </div>

        {/* DRAG HANDLE BAR & THUMB */}
        <div
          style={{ left: `${sliderPos}%` }}
          className="absolute inset-y-0 -ml-5 w-10 flex items-center justify-center pointer-events-none z-20"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-amber-400 text-purple-950 flex items-center justify-center shadow-2xl border-2 border-white font-bold transition-transform hover:scale-110 active:scale-95">
            <MoveHorizontal className="w-4 h-4 sm:w-5 sm:h-5 text-purple-950" />
          </div>
        </div>

      </div>

      {/* Mobile Comparison Hint */}
      <div className="mt-2 text-center sm:hidden">
        <span className="text-[10px] font-medium text-slate-400 flex items-center justify-center gap-1">
          <MoveHorizontal className="w-3 h-3 text-amber-400" />
          <span>Drag splitter or tap anywhere to compare real site vs 3D</span>
        </span>
      </div>

      {/* Comparison Descriptions */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 text-xs">
        <div className="p-3 sm:p-4 rounded-xl bg-slate-800/40 border border-slate-800">
          <span className="text-rose-400 font-bold uppercase tracking-wider block mb-1">
            Current Operational Constraints
          </span>
          <p className="text-slate-300 leading-relaxed text-[11px] sm:text-xs">{activeCase.existingDesc}</p>
        </div>
        <div className="p-3 sm:p-4 rounded-xl bg-slate-800/40 border border-slate-800">
          <span className="text-emerald-400 font-bold uppercase tracking-wider block mb-1">
            M-CEL Proposed Engineering Solution
          </span>
          <p className="text-slate-300 leading-relaxed text-[11px] sm:text-xs">{activeCase.proposedDesc}</p>
        </div>
      </div>

      {/* Engineering Improvement Specifications Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-slate-800 text-xs">
        {activeCase.specs.map((s, idx) => (
          <div key={idx} className="p-2.5 sm:p-3 rounded-xl bg-slate-800/60 border border-slate-800">
            <span className="text-slate-400 block font-medium text-[10px] sm:text-xs mb-0.5">{s.label}</span>
            <strong className="text-white text-xs sm:text-sm font-semibold block">{s.value}</strong>
          </div>
        ))}
      </div>

    </div>
  );
};
