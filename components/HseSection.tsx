"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export const HseSection: React.FC = () => {
  return (
    <section id="hse" className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background Subtle Blueprint Motif */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text & Zero Incident Culture */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>HSE & Quality Assurance</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading leading-tight text-white">
              Zero Negative Incidents: <br className="hidden sm:block" />
              <span className="text-amber-400">Our Uncompromising Safety Promise</span>
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed font-light">
              At Masterview Consults Engineering Limited, Health, Safety, and Environment (HSE) is engineered into every workflow. We operate with an uncompromising standard aimed at zero lost-time injuries, zero environmental spillages, and zero operational downtime.
            </p>

            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-2.5 sm:gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Strict Regulatory Compliance</h4>
                  <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5">Adherence to OSHA guidelines, API petroleum standards, and ISO 9001/14001 management frameworks.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 sm:gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Certified Field Engineers</h4>
                  <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5">Personnel hold BOSIET, CA-EBS, OSP, and certified Hazard Identification & Risk Assessment (HSE Level 3) credentials.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 sm:gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Environmental Stewardship</h4>
                  <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5">Comprehensive chemical bunding, non-hazardous mud plant containment, and waste minimization.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2 sm:gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-200 text-[11px] sm:text-xs font-mono border border-slate-700">
                COREN Reg: R.79,476
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-200 text-[11px] sm:text-xs font-mono border border-slate-700">
                NSE Reg: 66878
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-amber-300 text-[11px] sm:text-xs font-mono border border-slate-700">
                CAC RC: 7361706
              </span>
            </div>
          </div>

          {/* Right Column: Real Inspection Photo & Accreditations Card */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <div className="relative w-full h-60 sm:h-80 rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl">
              <Image
                src="/images/construction/engineers-slab-inspection.jpg"
                alt="Engineers inspecting reinforced concrete slab foundation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-xs text-slate-200">
                <span className="font-bold text-amber-400 block uppercase text-[10px] sm:text-xs">Field QA/QC Audit</span>
                <span className="text-[11px] sm:text-xs text-slate-300">Certified civil engineering team conducting structural rebar slab inspection.</span>
              </div>
            </div>

            {/* Standards Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 text-center">
              <div className="p-2.5 sm:p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                <p className="text-sm sm:text-base font-bold text-amber-400 font-heading">ISO 9001</p>
                <p className="text-[9px] sm:text-[10px] text-slate-300 uppercase mt-0.5">QA Management</p>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                <p className="text-sm sm:text-base font-bold text-white font-heading">ISO 17025</p>
                <p className="text-[9px] sm:text-[10px] text-slate-300 uppercase mt-0.5">Testing & Calib</p>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                <p className="text-sm sm:text-base font-bold text-white font-heading">API Spec</p>
                <p className="text-[9px] sm:text-[10px] text-slate-300 uppercase mt-0.5">Oil & Gas Equip</p>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                <p className="text-sm sm:text-base font-bold text-amber-400 font-heading">ASME / ASTM</p>
                <p className="text-[9px] sm:text-[10px] text-slate-300 uppercase mt-0.5">Fabrication</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
