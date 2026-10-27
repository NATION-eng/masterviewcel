"use client";

import React from "react";
import Image from "next/image";
import { Award, ShieldCheck, Quote, CheckCircle } from "lucide-react";

export const ExecutiveMessage: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: MD/CEO Studio Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
              <div className="relative w-full h-[500px]">
                <Image
                  src="/images/engr-jonathan-david-ceo.jpg"
                  alt="Engr. Jonathan David J. - MD/CEO Masterview Consults Engineering Limited"
                  fill
                  className="object-cover object-top filter brightness-95 group-hover:brightness-100 transition-all duration-500"
                  priority
                />
              </div>

              {/* Gradient Information Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-mcel-purple via-mcel-purple/85 to-transparent p-6 text-white">
                <span className="inline-block px-2.5 py-1 rounded bg-amber-400 text-purple-950 text-[11px] font-extrabold uppercase tracking-wider mb-2">
                  Executive Leadership
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading">
                  ENGR. JONATHAN, DAVID J.
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 mt-0.5">
                  Managing Director / Chief Executive Officer
                </p>
                
                <div className="mt-3 pt-3 border-t border-white/20 flex items-center justify-between text-xs text-amber-300 font-medium">
                  <span className="flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-amber-400" /> COREN: R.79,476
                  </span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> NSE: 66878
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Trust Indicator */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 hidden sm:block max-w-[220px]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-400 text-purple-950 flex items-center justify-center font-extrabold text-xl shadow-inner">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 uppercase">CAC Certified</p>
                  <p className="text-[11px] text-slate-500">RC: 7361706 Active</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Corporate Narrative, Vision, Mission & Policy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-mcel-purple text-xs font-extrabold tracking-wider uppercase mb-4">
              <CheckCircle className="w-3.5 h-3.5 text-amber-500" /> Corporate Profile & Commitment
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading leading-tight mb-6">
              Delivering Engineering Precision That Sets New Industry Benchmarks
            </h2>

            <p className="text-slate-600 text-base leading-relaxed mb-6">
              At <strong>MASTERVIEW Consult Engineering Limited (M-CEL)</strong>, we pride ourselves on delivering multidisciplinary engineering, calibration, procurement, and civil contracting services that exceed both international and Nigerian industry standards.
            </p>

            <p className="text-slate-600 text-base leading-relaxed mb-8">
              From our operational headquarters in Port Harcourt, Rivers State, our multidisciplinary teams integrate strict international frameworks—including API, ISO/IEC 17025, ASTM, and ASME—ensuring that every project is engineered with unyielding integrity, safety, and operational excellence.
            </p>

            {/* Vision & Mission Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-purple-300 transition-colors">
                <h4 className="text-base font-bold text-slate-900 font-heading mb-2">
                  Vision Statement
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To lead the charge in driving meaningful human growth and industrial development across all energy and civil sectors, leveraging modern technologies, ethical standards, and continuous technical innovation.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-300 transition-colors">
                <h4 className="text-base font-bold text-slate-900 font-heading mb-2">
                  Mission Statement
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To deliver unparalleled excellence in engineering and consulting services through innovation, integrity, client-focused solutions, safety, and environmental stewardship.
                </p>
              </div>
            </div>

            {/* Corporate Policy Callout (Zero Incident Target) */}
            <div className="p-6 rounded-2xl bg-mcel-purple text-white shadow-xl relative overflow-hidden">
              <div className="flex items-start gap-4">
                <Quote className="w-8 h-8 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-1">
                    Quality & HSE Policy Statement
                  </h4>
                  <p className="text-sm italic text-slate-200 leading-relaxed">
                    &ldquo;Here, we place a paramount emphasis on safety, aiming for zero negative incidents. At M-CEL, quality isn&apos;t just a goal – it&apos;s our promise.&rdquo;
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
