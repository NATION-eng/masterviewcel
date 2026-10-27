"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { RfqModal } from "@/components/RfqModal";
import { MobileActionBar } from "@/components/MobileActionBar";
import { 
  Building, 
  Camera, 
  MapPin, 
  X,
  ArrowRight
} from "lucide-react";

const armyGallery = [
  { src: "/images/army/army-5-full-pitch.jpg", title: "Full 7-a-side Synthetic Turf Pitch", desc: "40m × 20m FIFA-spec synthetic grass with regulation line markings and relaxation clubhouse building." },
  { src: "/images/army/army-1-perimeter.jpg", title: "Security Perimeter & Spectator Pavilion", desc: "Galvanized heavy chain-link fencing, concrete curb beam, and cantilevered pavilion roof." },
  { src: "/images/army/army-2-grandstand.jpg", title: "Stepped Grandstand Terracing", desc: "Reinforced concrete seating tiers designed for 60-person spectator capacity." },
  { src: "/images/army/army-3-corner-fence.jpg", title: "Corner Fencing & Foundation Curb", desc: "Cast-in-place concrete ground beam with high-tension perimeter chain-link integration." },
  { src: "/images/army/army-4-security-mesh.jpg", title: "Security Enclosure Mesh", desc: "Close-up perspective of the heavy-gauge security mesh fence." },
];

export default function ProjectsPage() {
  const [rfqOpen, setRfqOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <TopBar onOpenRfq={() => setRfqOpen(true)} />
      <Navbar onOpenRfq={() => setRfqOpen(true)} />

      <main className="flex-grow pb-12 md:pb-0">
        
        {/* PROJECTS HERO */}
        <section className="py-14 sm:py-20 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-400/30">
                <Building className="w-4 h-4" />
                <span>Track Record & Verified Field Execution</span>
              </div>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight leading-tight mb-4">
                Delivered Engineering Contracts & Case Studies
              </h1>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed font-light">
                Explore our portfolio of verified projects for multinational energy operators, defense establishments, and industrial plants across the Niger Delta.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 1: INTERACTIVE BEFORE/AFTER SPOTLIGHT (TotalEnergies OML 58) */}
        <section className="py-12 sm:py-16 bg-slate-950 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BeforeAfterSlider />

            {/* Additional TotalEnergies 3D Render Gallery */}
            <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              
              <div className="bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-800">
                <div className="relative w-full h-44 sm:h-48 rounded-xl overflow-hidden mb-3.5">
                  <Image
                    src="/images/totalenergies/conference-room-proposed.png"
                    alt="Proposed Executive Conference Hall"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-white font-bold text-sm sm:text-base font-heading">
                  Executive Conference Hall
                </h4>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                  Video conferencing suite with 75” & 86” smart interactive boards and TotalEnergies branding.
                </p>
              </div>

              <div className="bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-800">
                <div className="relative w-full h-44 sm:h-48 rounded-xl overflow-hidden mb-3.5">
                  <Image
                    src="/images/totalenergies/opm-office-proposed.png"
                    alt="Proposed OPM Managerial Office"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-white font-bold text-sm sm:text-base font-heading">
                  Production Manager (OPM) Office
                </h4>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                  Ergonomic executive administrative layout, sound-dampened acoustic ceiling, and smart access tags.
                </p>
              </div>

              <div className="bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-800">
                <div className="relative w-full h-44 sm:h-48 rounded-xl overflow-hidden mb-3.5">
                  <Image
                    src="/images/totalenergies/ccr-proposed-angle.png"
                    alt="CCR Multi-screen Angle"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-white font-bold text-sm sm:text-base font-heading">
                  Head of Production (HoP) Suite
                </h4>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                  Integrated supervisory workstation with live SCADA feed display and ergonomic task lighting.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 2: NIGERIAN ARMY SPORTS COMPLEX (Real Photos Gallery) */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold tracking-wider uppercase mb-2.5">
                <Camera className="w-3.5 h-3.5" /> Case Study: Nigerian Army 16 Brigade
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading">
                Military Recreation & Sports Complex, Yenagoa
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                Turnkey civil engineering and construction delivered for the Nigerian Army at 16 Brigade Headquarters, Yenagoa, Bayelsa State.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {armyGallery.map((item, idx) => (
                <div
                  key={item.src}
                  onClick={() => setLightboxImg(item.src)}
                  className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-mcel-purple transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer"
                >
                  <div className="relative w-full h-52 sm:h-60 overflow-hidden bg-slate-900">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    <span className="absolute bottom-3 left-3 text-white text-[11px] font-mono bg-slate-900/80 px-2 py-0.5 rounded">
                      Field Photo 0{idx + 1}
                    </span>
                  </div>
                  <div className="p-4 sm:p-5">
                    <h4 className="font-bold text-slate-900 font-heading text-sm sm:text-base mb-1 group-hover:text-mcel-purple transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 3: OTHER NOTABLE PROJECTS */}
        <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                Additional Technical Contracts
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 sm:mt-2">
                Proven capabilities spanning steel warehouses, plant layouts, and industrial facility waterproofing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              
              {/* Horandez & Detroit */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 block mb-1">
                  Horandez & Detroit Company Ltd
                </span>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 font-heading mb-1.5">
                  40m × 40m Heavy Steel Warehouse & Offices
                </h4>
                <p className="text-xs text-slate-500 mb-2.5 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" /> KM 21 East-West Road, Iriebe, Rivers State
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Turnkey foundation and clear-span structural steel warehouse erection accommodating overhead bridge cranes.
                </p>
              </div>

              {/* NLNG Finima */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                  Nigeria LNG Limited (NLNG)
                </span>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 font-heading mb-1.5">
                  Roof Bitumen Re-Felting (30m × 6.3m)
                </h4>
                <p className="text-xs text-slate-500 mb-2.5 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" /> NLNG RA Finima, Bonny Island
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Multi-ply elastomeric waterproofing and membrane protection executed under strict island PTW regulations.
                </p>
              </div>

              {/* ICTSI Onne */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 block mb-1">
                  ICTSI Onne Multipurpose Terminal
                </span>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 font-heading mb-1.5">
                  Trexm Chemicals Mud Plant Layout
                </h4>
                <p className="text-xs text-slate-500 mb-2.5 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" /> Onne Port Terminal, Rivers State
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  BIM 3D modeling and isometric pipe routing for chemical bulk silos, mixing tanks, and tanker loading bays.
                </p>
              </div>

            </div>

          </div>
        </section>

      </main>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {lightboxImg && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full bg-white/10 z-50 cursor-pointer active:scale-95"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative max-w-5xl w-full h-[65vh] sm:h-[75vh] flex items-center justify-center">
            <Image
              src={lightboxImg}
              alt="Project Inspection Photo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileActionBar onOpenRfq={() => setRfqOpen(true)} />

      <RfqModal
        isOpen={rfqOpen}
        onClose={() => setRfqOpen(false)}
        defaultService="General Contracting"
      />
    </div>
  );
}
