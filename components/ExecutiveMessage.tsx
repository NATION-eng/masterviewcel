"use client";

import React from "react";
import Image from "next/image";
import { Award, ShieldCheck, CheckCircle } from "lucide-react";

export const ExecutiveMessage: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: MD/CEO Studio Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
              <div className="relative w-full h-[340px] sm:h-[440px] lg:h-[500px]">
                <Image
                  src="/images/engr-jonathan-david-ceo.jpg"
                  alt="Engr. Jonathan David J. - MD/CEO Masterview Consults Engineering Limited"
                  fill
                  className="object-cover object-top filter brightness-95 group-hover:brightness-100 transition-all duration-500"
                  priority
                />
              </div>

              {/* Gradient Information Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-mcel-purple via-mcel-purple/85 to-transparent p-4 sm:p-6 text-white">
                <span className="inline-block px-2.5 py-1 rounded bg-amber-400 text-purple-950 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider mb-2">
                  Executive Leadership
                </span>
                <h3 className="text-lg sm:text-2xl font-bold font-heading">
                  ENGR. JONATHAN, DAVID J.
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 mt-0.5">
                  Managing Director / Chief Executive Officer
                </p>
                
                <div className="mt-3 pt-3 border-t border-white/20 flex items-center justify-between text-[11px] sm:text-xs text-amber-300 font-medium">
                  <span className="flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" /> COREN: R.79,476
                  </span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" /> NSE: 66878
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Trust Indicator (Desktop & Tablet) */}
            <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden sm:block max-w-[210px] z-10">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-amber-400 text-purple-950 flex items-center justify-center font-extrabold text-xl shadow-inner shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 uppercase">CAC Certified</p>
                  <p className="text-[11px] text-slate-500">RC: 7361706 Active</p>
                </div>
              </div>
            </div>

            {/* Mobile Trust Bar (Mobile Only) */}
            <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between sm:hidden">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-400 text-purple-950 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 block leading-tight">CAC RC: 7361706</span>
                  <span className="text-[10px] text-slate-500">Registered Nigerian Corporation</span>
                </div>
              </div>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                Verified Active
              </span>
            </div>

          </div>

          {/* Right Column: Corporate Narrative, Vision, Mission & Policy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-mcel-purple text-xs font-extrabold tracking-wider uppercase mb-3 sm:mb-4">
              <CheckCircle className="w-3.5 h-3.5 text-amber-500" /> Corporate Profile & Commitment
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading leading-tight mb-4 sm:mb-6">
              Delivering Engineering Precision That Sets New Industry Benchmarks
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
              At <strong>MASTERVIEW Consults Engineering Limited (M-CEL)</strong>, we pride ourselves on delivering multidisciplinary engineering, calibration, procurement, and civil contracting services that exceed both international and Nigerian industry standards.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              From our operational headquarters in Port Harcourt, Rivers State, our multidisciplinary teams integrate strict international frameworks—including API, ISO/IEC 17025, ASTM, and ASME—ensuring that every project is engineered with unyielding integrity, safety, and operational excellence.
            </p>

            {/* Vision & Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-6 sm:mb-8">
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-purple-300 transition-colors">
                <h4 className="text-sm sm:text-base font-bold text-slate-900 font-heading mb-1.5 sm:mb-2">
                  Vision Statement
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To lead the charge in driving meaningful human growth and industrial development across all energy and civil sectors, leveraging modern technologies, ethical standards, and continuous technical innovation.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-300 transition-colors">
                <h4 className="text-sm sm:text-base font-bold text-slate-900 font-heading mb-1.5 sm:mb-2">
                  Mission Statement
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To deliver unparalleled excellence in engineering and consulting services through innovation, integrity, client-focused solutions, safety, and environmental stewardship.
                </p>
              </div>
            </div>

            {/* Nigerian Local Content & ISO Commitment Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-purple-900 to-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-0.5">
                  100% Indigenous Nigerian Enterprise
                </span>
                <p className="text-xs sm:text-sm font-semibold">
                  Committed to NOGICD Act, local capacity building, and safety.
                </p>
              </div>
              <span className="px-3 py-1.5 rounded-lg bg-white/10 text-white text-xs font-mono font-bold shrink-0 border border-white/20">
                Port Harcourt HQ
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
