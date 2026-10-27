"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Camera, ChevronRight, X, ChevronLeft, Building, ArrowUpRight } from "lucide-react";

const armyPhotos = [
  { src: "/images/army/army-5-full-pitch.jpg", caption: "Regulation 40m × 20m 7-a-side all-weather synthetic pitch, line markings & clubhouse" },
  { src: "/images/army/army-1-perimeter.jpg", caption: "Galvanized perimeter security chain-link fence, concrete ground beam & pavilion canopy" },
  { src: "/images/army/army-2-grandstand.jpg", caption: "Stepped concrete spectator pavilion grandstand seating with weather-shield roof" },
  { src: "/images/army/army-3-corner-fence.jpg", caption: "Foundation perimeter curb and high-durability corner chain-link fencing" },
  { src: "/images/army/army-4-security-mesh.jpg", caption: "Close-up perspective of the heavy-gauge security mesh fence and two-tone turf field" },
];

export const ProjectSpotlight: React.FC = () => {
  const [activeArmyIndex, setActiveArmyIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-mcel-purple text-xs font-extrabold tracking-wider uppercase mb-3">
              <Building className="w-3.5 h-3.5 text-amber-500" /> Proven Field Execution
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Flagship Delivered Contracts
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-2xl">
              Authentic on-site civil delivery, industrial 3D plant layouts, and corporate facility overhauls executed across Rivers and Bayelsa States.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 text-xs font-bold text-mcel-purple hover:text-amber-600 uppercase tracking-wider mt-4 md:mt-0 transition-colors"
          >
            <span>View All Case Studies</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* FEATURED SPOTLIGHT: Nigerian Army Yenagoa (Real Photos Gallery) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900 rounded-3xl overflow-hidden p-6 sm:p-10 text-white shadow-2xl mb-12">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
              <Camera className="w-3.5 h-3.5 text-amber-400" />
              <span>5 Real On-Site Field Photos</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white leading-tight">
              Military Recreation & Sports Complex
            </h3>

            <div className="space-y-2 text-xs">
              <p className="text-amber-400 font-bold uppercase tracking-wider">
                Client: Nigerian Army (16 Brigade)
              </p>
              <p className="text-slate-300">
                Location: 16 Brigade Headquarters, Yenagoa, Bayelsa State
              </p>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed font-light">
              Turnkey design and civil construction of a 40m × 20m 7-a-side regulation all-weather synthetic turf soccer pitch, 60-capacity spectator grandstand pavilion, perimeter galvanized security chain-link fence, and relaxation clubhouse.
            </p>

            {/* Thumbnail Filmstrip */}
            <div className="space-y-2 pt-2">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">
                Select Photo Angle:
              </span>
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                {armyPhotos.map((photo, i) => (
                  <button
                    key={photo.src}
                    onClick={() => setActiveArmyIndex(i)}
                    className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                      activeArmyIndex === i ? "border-amber-400 scale-105" : "border-slate-700 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={photo.src} alt={photo.caption} fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setLightboxOpen(true)}
              className="inline-flex items-center space-x-2 text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider cursor-pointer"
            >
              <span>Expand Fullscreen Gallery</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Active Big Photo Display */}
          <div className="lg:col-span-7">
            <div
              onClick={() => setLightboxOpen(true)}
              className="relative w-full h-[320px] sm:h-[440px] rounded-2xl overflow-hidden border-2 border-slate-700 bg-black cursor-pointer group"
            >
              <Image
                src={armyPhotos[activeArmyIndex].src}
                alt={armyPhotos[activeArmyIndex].caption}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs bg-slate-900/80 backdrop-blur-md p-3 rounded-xl border border-white/10">
                <p className="font-semibold text-slate-200">{armyPhotos[activeArmyIndex].caption}</p>
              </div>
            </div>
          </div>

        </div>

        {/* SECONDARY ROW: Horandez & Detroit Warehouse + NLNG Finima */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Horandez & Detroit Steel Warehouse */}
          <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 hover:border-mcel-purple transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="relative w-full h-52 rounded-2xl overflow-hidden mb-6 bg-slate-900">
                <Image
                  src="/images/construction/tower-crane-sunset.jpg"
                  alt="40m x 40m Steel Warehouse"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-mcel-purple text-white text-[10px] font-bold uppercase tracking-wider">
                  Civil & Steel Fabrication
                </span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 font-heading mb-2">
                40m × 40m Heavy Steel Warehouse & Offices
              </h4>
              <p className="text-xs text-amber-600 font-bold uppercase mb-3">
                Client: Horandez & Detroit Company Ltd • Iriebe, Rivers State
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Civil engineering design, foundation slab construction, and 1,600 sqm clear-span structural steel warehouse erection with an adjoining multi-storey engineering office facility.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-mcel-purple hover:text-amber-600 transition-colors"
            >
              <span>Explore Technical Scope</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* NLNG RA Staff Club Roof Waterproofing */}
          <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 hover:border-mcel-purple transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="relative w-full h-52 rounded-2xl overflow-hidden mb-6 bg-slate-900">
                <Image
                  src="/images/construction/rebar-steel-fixing.jpg"
                  alt="NLNG Roof Bitumen Re-Felting"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-emerald-700 text-white text-[10px] font-bold uppercase tracking-wider">
                  Facility Waterproofing
                </span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 font-heading mb-2">
                30m × 6.3m Roof Bitumen Re-Felting & Waterproofing
              </h4>
              <p className="text-xs text-amber-600 font-bold uppercase mb-3">
                Client: Nigeria LNG Limited (NLNG) • Finima, Bonny Island
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Elastomeric bitumen membrane re-felting, substrate repair, and thermal insulation over the 30m × 6.3m concrete roof slab of the NLNG RA Staff Club under strict island PTW protocols.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-mcel-purple hover:text-amber-600 transition-colors"
            >
              <span>Explore Technical Scope</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>

      {/* FULLSCREEN LIGHTBOX MODAL FOR NIGERIAN ARMY PROJECT */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-5 right-5 text-white/70 hover:text-white p-2 rounded-full bg-white/10 z-50"
          >
            <X className="w-7 h-7" />
          </button>

          <div className="relative max-w-5xl w-full h-[75vh] flex items-center justify-center">
            <Image
              src={armyPhotos[activeArmyIndex].src}
              alt={armyPhotos[activeArmyIndex].caption}
              fill
              className="object-contain"
            />

            <button
              onClick={() => setActiveArmyIndex((prev) => (prev - 1 + armyPhotos.length) % armyPhotos.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/80 text-white hover:bg-amber-400 hover:text-purple-950 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setActiveArmyIndex((prev) => (prev + 1) % armyPhotos.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/80 text-white hover:bg-amber-400 hover:text-purple-950 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="absolute bottom-6 inset-x-0 text-center text-white text-xs px-4">
            <p className="font-semibold text-amber-300">{armyPhotos[activeArmyIndex].caption}</p>
            <p className="text-slate-400 text-[11px] mt-1">Photo {activeArmyIndex + 1} of {armyPhotos.length} • Nigerian Army 16 Brigade Yenagoa</p>
          </div>
        </div>
      )}

    </section>
  );
};
