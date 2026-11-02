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
  {
    src: "/images/army/army-finished-1-pitch.jpg",
    title: "Completed 40m × 20m Synthetic Turf Pitch",
    desc: "FIFA-specification two-tone green all-weather synthetic grass with regulation line markings and relaxation clubhouse in the background."
  },
  {
    src: "/images/army/army-finished-2-pavilion.jpg",
    title: "Sheltered Spectator Grandstand Pavilion",
    desc: "Reinforced concrete terracing with overhead weather-shield cantilever canopy and red & blue stadium bucket seats."
  },
  {
    src: "/images/army/army-finished-3-seats.jpg",
    title: "Terraced Seating & Stadium Bucket Seats",
    desc: "Close-up perspective of stepped concrete grandstand seating tiers fitted with durable UV-resistant polymer bucket seats."
  },
  {
    src: "/images/army/army-finished-4-grandstand-front.jpg",
    title: "Frontal View of Completed Pavilion",
    desc: "Full front elevation view of the spectator grandstand with 60-person capacity seen through the security chain-link netting."
  },
  {
    src: "/images/army/army-finished-5-clubhouse.jpg",
    title: "Recreation Clubhouse & Lounge Building",
    desc: "Turnkey multi-purpose clubhouse featuring green stone-coated roofing tiles, covered veranda bar lounge, and elevated water storage tower."
  },
  {
    src: "/images/army/army-finished-6-walkway.jpg",
    title: "Interlocking Paved Perimeter Walkway",
    desc: "Heavy-duty stone interlocking pavers forming an all-weather access walkway along the high security chain-link enclosure."
  },
  {
    src: "/images/army/army-finished-7-paved-perimeter.jpg",
    title: "Paved Facility Grounds & Landscaping",
    desc: "Expansive finished paved surroundings, foundation curbs, and drainage infrastructure enclosing the 16 Brigade sports complex."
  },
];

const nlngGallery = [
  {
    src: "/images/nlng/nlng-5-seam-alignment.jpg",
    title: "Setting the Leveling & Cleaning Top Surface",
    desc: "Preliminary deck leveling and meticulous surface cleaning across the 30m × 6.3m concrete roof substrate, using straight-edge leveling tools and surface scrapers to guarantee perfect substrate adhesion.",
    phase: "Leveling & Cleaning"
  },
  {
    src: "/images/nlng/nlng-1-deck-prep.jpg",
    title: "Preparing of the Sandcrete Screed",
    desc: "On-site batching, aggregate grading, and mechanical mixing of high-strength sandcrete screed to establish precise fall gradients towards drainage outlets across the NLNG RA Finima facility deck.",
    phase: "Preparing Sandcrete"
  },
  {
    src: "/images/nlng/nlng-2-screed-inspection.jpg",
    title: "Inspection of Finished Sandcrete Screed",
    desc: "Joint engineering verification by Masterview Consults and Intesat engineers inspecting the cured, smooth sandcrete screed laid to falls prior to thermal insulation and membrane application.",
    phase: "Finished Sandcrete Inspection"
  },
  {
    src: "/images/nlng/nlng-8-finished-deck.jpg",
    title: "Layout of 500mm × 500mm Foam Glass",
    desc: "Precision layout of 500mm × 500mm cellular foam glass thermal insulation blocks providing zero-permeability moisture resistance, high compressive strength, and thermal protection across the roof expanse.",
    phase: "500×500mm Foam Glass Layout"
  },
  {
    src: "/images/nlng/nlng-7-tile-installation.jpg",
    title: "Bituminous Mastic & Foam Glass Bonding",
    desc: "Specialist applicator applying high-temperature bituminous bonding mastic and laying 500mm × 500mm foam glass panels, establishing a monolithic, weather-tight thermal barrier.",
    phase: "Mastic Application"
  },
  {
    src: "/images/nlng/nlng-3-bituflame-rolls.jpg",
    title: "10mm Thick Felt Waterproofing Material",
    desc: "Staging of certified 10mm thick heavy-duty elastomeric bitumen felt membrane rolls along the parapet wall, prepared for torch-on re-felting over the insulated substrate.",
    phase: "10mm Felt Material"
  },
  {
    src: "/images/nlng/nlng-6-membrane-complete.jpg",
    title: "Completed 500mm × 500mm Foam Glass Envelope",
    desc: "Full-span overview of the 30m × 6.3m roof deck with completed 500mm × 500mm foam glass layout and multi-ply weatherproofing executed under strict NLNG QA/QC protocols.",
    phase: "Completed Envelope"
  },
  {
    src: "/images/nlng/nlng-9-engineering-crew.jpg",
    title: "Joint Masterview & Intesat Delivery Team",
    desc: "Masterview Consults and Intesat Services certified technical crew in full mandatory offshore/island PPE on site at NLNG Bonny Island.",
    phase: "Certified Workforce"
  },
  {
    src: "/images/nlng/nlng-10-toolbox-meeting.jpg",
    title: "On-Site HSE Supervision & Toolbox Meeting",
    desc: "Supervisory crew under the weather awning conducting mandatory daily safety risk assessments and Permit-to-Work (PTW) briefings.",
    phase: "HSE Compliance"
  },
];

export default function ProjectsPage() {
  const [rfqOpen, setRfqOpen] = useState(false);
  const [lightboxData, setLightboxData] = useState<{ src: string; title: string; desc: string; index?: number; total?: number } | null>(null);

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
                <Camera className="w-3.5 h-3.5" /> Case Study: Nigerian Army 16 Brigade • 7 Completed Photos
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
                  onClick={() => setLightboxData({ src: item.src, title: item.title, desc: item.desc, index: idx + 1, total: armyGallery.length })}
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

        {/* SECTION 3: NIGERIA LNG LIMITED (NLNG RA FINIMA, BONNY ISLAND) */}
        <section id="nlng-bonny" className="py-14 sm:py-20 bg-slate-900 text-white border-b border-slate-800 scroll-mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-12 gap-6">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-500/30">
                  <Camera className="w-3.5 h-3.5 text-amber-400" />
                  <span>Verified Field Case Study • Technical Progression Photos</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading">
                  Nigeria LNG Limited (NLNG) — Roof Waterproofing & Re-Felting
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  Turnkey multi-ply elastomeric bitumen re-felting, screed base leveling to falls, and protective promenade ballast paving executed on the 30m × 6.3m roof deck at the NLNG Residential Area (RA Finima), Bonny Island, Rivers State.
                </p>
              </div>

              {/* Technical Specifications Card */}
              <div className="bg-slate-800/90 rounded-2xl p-4 sm:p-5 border border-slate-700 max-w-md shrink-0">
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative w-12 h-10 bg-white rounded-lg p-1 shrink-0">
                    <Image src="/images/logos/nlng.png" alt="NLNG Logo" fill className="object-contain" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Contract Details</h4>
                    <p className="text-[11px] text-emerald-400">NLNG RA Finima • Bonny Island</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="bg-slate-900/60 p-2 rounded-lg border border-slate-700/50">
                    <span className="text-slate-400 block text-[10px]">Expanse</span>
                    <strong className="text-white font-bold">30m × 6.3m (189 sqm)</strong>
                  </div>
                  <div className="bg-slate-900/60 p-2 rounded-lg border border-slate-700/50">
                    <span className="text-slate-400 block text-[10px]">Thermal Layer</span>
                    <strong className="text-white font-bold">500 × 500mm Foam Glass</strong>
                  </div>
                  <div className="bg-slate-900/60 p-2 rounded-lg border border-slate-700/50">
                    <span className="text-slate-400 block text-[10px]">Waterproofing</span>
                    <strong className="text-white font-bold">10mm Thick Felt Material</strong>
                  </div>
                  <div className="bg-slate-900/60 p-2 rounded-lg border border-slate-700/50">
                    <span className="text-slate-400 block text-[10px]">Substructure</span>
                    <strong className="text-white font-bold">Sandcrete Screed to Falls</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Photos Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
              {nlngGallery.map((item, idx) => (
                <div
                  key={item.src}
                  onClick={() => setLightboxData({ src: item.src, title: item.title, desc: item.desc, index: idx + 1, total: nlngGallery.length })}
                  className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-amber-400 transition-all duration-300 shadow-md hover:shadow-2xl cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-950">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-50 group-hover:opacity-75 transition-opacity" />
                    <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-emerald-500/90 text-white text-[9px] font-bold uppercase tracking-wider backdrop-blur-sm">
                      {item.phase}
                    </span>
                    <span className="absolute bottom-2 right-2 text-white/90 text-[10px] font-mono bg-slate-900/80 px-1.5 py-0.5 rounded border border-white/10">
                      0{idx + 1}/0{nlngGallery.length}
                    </span>
                  </div>
                  <div className="p-3 sm:p-3.5 flex-grow flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-white text-xs mb-1 group-hover:text-amber-400 transition-colors line-clamp-1">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-300 leading-relaxed line-clamp-2">
                        {item.desc}
                      </p>
                    </div>
                    <span className="text-[10px] font-semibold text-amber-400 group-hover:underline mt-2 inline-flex items-center gap-1">
                      <span>View</span> &rarr;
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 4: OTHER NOTABLE PROJECTS */}
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

              {/* NLNG Finima Quick Reference */}
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
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Multi-ply elastomeric waterproofing and membrane protection executed under strict island PTW regulations.
                </p>
                <a
                  href="#nlng-bonny"
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 uppercase tracking-wider inline-flex items-center gap-1"
                >
                  <span>Jump to 10 Field Photos</span> &uarr;
                </a>
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
      {lightboxData && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
          <button
            onClick={() => setLightboxData(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2.5 rounded-full bg-white/10 z-50 cursor-pointer active:scale-95 transition-all"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="relative max-w-5xl w-full h-[65vh] sm:h-[75vh] flex items-center justify-center">
            <Image
              src={lightboxData.src}
              alt={lightboxData.title}
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute bottom-4 sm:bottom-6 inset-x-0 text-center text-white px-4">
            <h4 className="font-bold text-amber-300 text-xs sm:text-sm max-w-lg mx-auto">
              {lightboxData.title}
            </h4>
            <p className="text-slate-300 text-[11px] sm:text-xs max-w-xl mx-auto mt-1 leading-relaxed">
              {lightboxData.desc}
            </p>
            {lightboxData.index && lightboxData.total && (
              <p className="text-slate-400 text-[10px] font-mono mt-1">
                Photo {lightboxData.index} of {lightboxData.total}
              </p>
            )}
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
