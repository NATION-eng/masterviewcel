"use client";

import React from "react";
import Link from "next/link";
import { 
  Fuel, 
  Gauge, 
  Truck, 
  Flame, 
  ShoppingCart, 
  Compass, 
  Building2, 
  Briefcase, 
  ArrowRight 
} from "lucide-react";

interface ServicesMatrixProps {
  onSelectService: (serviceName: string) => void;
}

const services = [
  {
    icon: Fuel,
    title: "Oil & Gas Equipment Maintenance",
    standards: ["API Standards", "ISO Protocols"],
    desc: "Rigorous preventive and corrective maintenance for upstream and midstream assets conforming strictly to API and ISO standards. We maximize operational uptime and ensure safety-critical integrity.",
    action: "Request Maintenance",
    category: "energy",
  },
  {
    icon: Gauge,
    title: "Calibration Services",
    standards: ["ISO/IEC 17025", "Certified Lab"],
    desc: "Precision calibration of gas detectors, pressure transmitters, flow meters, and control gauges using state-of-the-art diagnostic testing benches and certified technical personnel.",
    action: "Schedule Calibration",
    category: "testing",
  },
  {
    icon: Truck,
    title: "Logistics & Heavy Haulage",
    standards: ["Global SCM", "Port Haulage"],
    desc: "Multimodal logistics, SAP inventory control, quayside container clearance, and direct-to-site freight haulage engineered to optimize delivery timelines and reduce operational overhead.",
    action: "View Logistics Hub",
    link: "/logistics",
    category: "supply-chain",
  },
  {
    icon: Flame,
    title: "Fabrication & Welding",
    standards: ["ASME Sec. IX", "ASTM Specs"],
    desc: "Custom structural steel fabrication, pipe spools, skid assemblies, and structural frames executed by certified welders under rigorous non-destructive testing (NDT) standards.",
    action: "Submit Fabrication Specs",
    category: "manufacturing",
  },
  {
    icon: ShoppingCart,
    title: "Procurement Services",
    standards: ["Ethical Sourcing", "Audited QA/QC"],
    desc: "Transparent and audited international procurement. We perform supplier pre-qualification, RFQ management, and factory acceptance test (FAT) verification for mission-critical parts.",
    action: "Inquire Procurement",
    category: "sourcing",
  },
  {
    icon: Compass,
    title: "Engineering Designs",
    standards: ["ASME & ICE", "CAD / BIM 3D"],
    desc: "Comprehensive 2D drafting, 3D BIM modeling, process P&ID layout schematics, and finite structural modeling developed in strict compliance with ASME, ICE, and COREN standards.",
    action: "Consult Design Desk",
    category: "design",
  },
  {
    icon: Building2,
    title: "Civil Construction",
    standards: ["CII Standards", "OSHA Safety"],
    desc: "Turnkey civil engineering works from reinforced concrete foundations and military sports complexes (16 Brigade Yenagoa) to high-clearance warehouses and multi-storey office blocks.",
    action: "Civil Tender Inquiries",
    category: "civil",
  },
  {
    icon: Briefcase,
    title: "General Contracting",
    standards: ["Turnkey EPC", "Milestone QA"],
    desc: "End-to-end project management, contract administration, and ethical execution. We enforce transparent risk management, strict timeline discipline, and budgetary controls.",
    action: "Discuss Turnkey Contract",
    category: "contracting",
  },
];

export const ServicesMatrix: React.FC<ServicesMatrixProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-extrabold tracking-wider uppercase mb-3">
            <span>Capabilities & Disciplines</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading">
            Our Eight Pillars of Engineering Excellence
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-3 leading-relaxed">
            Delivering multidisciplinary solutions adhering strictly to recognized global benchmarks including API, ISO/IEC 17025, ASTM, ASME, CII, and OSHA.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className="bg-white p-5 sm:p-7 rounded-2xl flex flex-col justify-between border border-slate-200 hover:border-mcel-accent hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-mcel-purple text-amber-400 flex items-center justify-center text-xl sm:text-2xl mb-4 sm:mb-6 group-hover:bg-amber-400 group-hover:text-purple-950 transition-colors shadow">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 mb-2.5 sm:mb-3">
                    {svc.standards.map((std) => (
                      <span
                        key={std}
                        className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200"
                      >
                        {std}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading mb-2 sm:mb-3 group-hover:text-mcel-purple transition-colors">
                    {svc.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                    {svc.desc}
                  </p>
                </div>

                {svc.link ? (
                  <Link
                    href={svc.link}
                    className="w-full py-3 sm:py-2.5 rounded-xl border border-mcel-purple text-mcel-purple hover:bg-mcel-purple hover:text-white font-bold text-xs uppercase tracking-wider transition-all text-center flex items-center justify-center gap-2 group/btn cursor-pointer active:scale-95"
                  >
                    <span>{svc.action}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                ) : (
                  <button
                    onClick={() => onSelectService(svc.title)}
                    className="w-full py-3 sm:py-2.5 rounded-xl border border-slate-300 hover:border-mcel-purple text-slate-800 hover:bg-mcel-purple hover:text-white font-bold text-xs uppercase tracking-wider transition-all text-center flex items-center justify-center gap-2 group/btn cursor-pointer active:scale-95"
                  >
                    <span>{svc.action}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
