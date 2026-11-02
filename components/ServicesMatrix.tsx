"use client";

import React from "react";
import Link from "next/link";
import { 
  Building2, 
  Zap, 
  Cog, 
  Flame, 
  ShoppingCart, 
  Wrench, 
  Compass, 
  Truck, 
  ArrowRight 
} from "lucide-react";

interface ServicesMatrixProps {
  onSelectService: (serviceName: string) => void;
}

const services = [
  {
    icon: Building2,
    title: "Construction Works",
    standards: ["Turnkey Civil", "CII & OSHA"],
    desc: "Turnkey civil engineering works, structural foundations, commercial and industrial buildings, sports complexes (including 16 Brigade Yenagoa), and defense infrastructure.",
    action: "Request Construction Tender",
    category: "construction",
  },
  {
    icon: Zap,
    title: "Electrical Works / Installations",
    standards: ["IEEE Standards", "Power Reticulation"],
    desc: "High and low voltage industrial power distribution, commercial electrical installations, transformer substations, switchgears, and automated backup generator systems.",
    action: "Consult Electrical Desk",
    category: "electrical",
  },
  {
    icon: Cog,
    title: "Mechanical Works / Installations",
    standards: ["API & ASME", "Machinery QA"],
    desc: "Industrial mechanical plant installations, rotating equipment assembly, pipe spool networks, HVAC systems, pressure vessels, and comprehensive plant commissioning.",
    action: "Schedule Mechanical Works",
    category: "mechanical",
  },
  {
    icon: Flame,
    title: "Steel / Metal Projects",
    standards: ["ASME Sec. IX", "Structural Steel"],
    desc: "Heavy structural steel fabrication, clear-span industrial warehouses, pipe welding, architectural metal framing, and custom skid assemblies certified under strict NDT testing.",
    action: "Submit Metal Specs",
    category: "metal-projects",
  },
  {
    icon: ShoppingCart,
    title: "Procurement Services",
    standards: ["Global Sourcing", "Audited QA/QC"],
    desc: "Audited local and international procurement, OEM equipment sourcing, supply chain expediting, vendor prequalification, and Factory Acceptance Testing (FAT) verification.",
    action: "Inquire Procurement",
    category: "procurement",
  },
  {
    icon: Wrench,
    title: "Maintenance Services",
    standards: ["API Standards", "ISO/IEC 17025"],
    desc: "Preventive and shutdown maintenance for oil & gas facilities, industrial plants, precision instrument calibration, diagnostic testing, and emergency asset repairs.",
    action: "Request Maintenance",
    category: "maintenance",
  },
  {
    icon: Compass,
    title: "General Consultant",
    standards: ["COREN Certified", "CAD / BIM 3D"],
    desc: "Multi-disciplinary engineering consultancy, feasibility studies, 2D drafting, 3D BIM modeling, project supervision, technical risk auditing, and contract administration.",
    action: "Engage Consultant Desk",
    category: "consultancy",
  },
  {
    icon: Truck,
    title: "Logistics & Heavy Haulage",
    standards: ["Global SCM", "Port Haulage"],
    desc: "Multimodal logistics, SAP inventory control, quayside container clearance at Onne and Port Harcourt, and direct-to-site freight haulage engineered to optimize delivery timelines.",
    action: "View Logistics Hub",
    link: "/logistics",
    category: "supply-chain",
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
            Our Core Disciplines & Official Services
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-3 leading-relaxed">
            Delivering multidisciplinary solutions adhering strictly to recognized global and Nigerian engineering benchmarks including API, ISO/IEC 17025, ASTM, ASME, CII, and OSHA.
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
