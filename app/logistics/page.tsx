"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/image";
import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RfqModal } from "@/components/RfqModal";
import { 
  Truck, 
  Package, 
  Anchor, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  ShieldCheck, 
  Barcode 
} from "lucide-react";

export default function LogisticsPage() {
  const [rfqOpen, setRfqOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Logistics & Supply Chain");

  const openRfqWithService = (service: string) => {
    setSelectedService(service);
    setRfqOpen(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <TopBar onOpenRfq={() => openRfqWithService("Logistics & Supply Chain")} />
      <Navbar onOpenRfq={() => openRfqWithService("Logistics & Supply Chain")} />

      <main className="flex-grow">
        
        {/* LOGISTICS HERO */}
        <section className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-25">
            <Image
              src="/images/logistics/port-container-terminal.jpg"
              alt="Logistics Port"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-6 border border-amber-400/30">
                <Truck className="w-4 h-4" />
                <span>Global Supply Chain & Heavy Haulage</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight leading-tight mb-6">
                End-to-End <span className="text-amber-400">Logistics & Supply Chain</span> Excellence
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 font-light">
                Masterview Consults Engineering Limited deploys world-class supply chain strategies—from automated SAP inventory control and quayside port clearance to heavy equipment haulage and precision last-mile distribution across Nigeria.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => openRfqWithService("Logistics & Heavy Haulage")}
                  className="px-8 py-3.5 rounded-full bg-mcel-purple hover:bg-mcel-purpleLight text-white font-bold text-xs uppercase tracking-wider shadow-xl transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Request Logistics Schedule</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>
                <a
                  href="https://wa.me/2349036130587?text=Hello%20Masterview%20Consults,%20I%20am%20inquiring%20about%20your%20logistics%20and%20haulage%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider border border-white/20 backdrop-blur transition-all"
                >
                  WhatsApp Logistics Desk
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* LOGISTICS PILLAR 1: WAREHOUSE & INVENTORY MANAGEMENT (Photo 1) */}
        <section className="py-20 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 relative">
                <div className="relative w-full h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                  <Image
                    src="/images/logistics/warehouse-inventory-manager.jpg"
                    alt="Warehouse Operations & SAP Inventory Tracking"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="px-2.5 py-1 rounded bg-amber-400 text-purple-950 text-[10px] font-bold uppercase mb-1 inline-block">
                      Automated Tracking
                    </span>
                    <h3 className="text-lg font-bold font-heading">
                      SAP Material Management & Inventory Traceability
                    </h3>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-mcel-purple uppercase tracking-widest">
                  <Barcode className="w-4 h-4 text-amber-500" /> Pillar 01
                </div>

                <h2 className="text-3xl font-extrabold text-slate-900 font-heading leading-tight">
                  Warehouse Operations & Real-Time Inventory Control
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Our warehouse facilities in Rivers State utilize structured SAP Material Management systems to guarantee real-time stock visibility, strict batch traceability, and optimal parts availability.
                </p>

                <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Zero-Stock Discrepancy:</strong> Barcode scanning and cyclical stock audits minimizing inventory variance.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Critical Spares Preservation:</strong> Climate-controlled staging for sensors, gas detectors, and oilfield instrumentation.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Rapid RFQ & Dispatch Cycles:</strong> Automated requisition processing and vendor dispatch turnaround.</span>
                  </div>
                </div>

                <button
                  onClick={() => openRfqWithService("Warehouse Operations")}
                  className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-mcel-purple text-white font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Inquire Warehousing
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* LOGISTICS PILLAR 2: PORT CONTAINER TERMINAL HAULAGE (Photo 2) */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 order-2 lg:order-1 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-mcel-purple uppercase tracking-widest">
                  <Anchor className="w-4 h-4 text-amber-500" /> Pillar 02
                </div>

                <h2 className="text-3xl font-extrabold text-slate-900 font-heading leading-tight">
                  Quayside Port Clearance & Heavy Container Haulage
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Operating across Onne Multipurpose Terminal (ICTSI) and Port Harcourt port quays, we manage heavy container transfers, bonded cargo transfers, and out-of-gauge equipment haulage with certified flatbed trailers.
                </p>

                <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Quayside Staging:</strong> Immediate vessel-to-trailer transit minimizing port demurrage costs.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Heavy Lift Capability:</strong> Transport of pressure vessels, ISO tanks, mud plant skids, and turbines.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Customs & Port Compliance:</strong> Fast-track clearance through verified regulatory documentation.</span>
                  </div>
                </div>

                <button
                  onClick={() => openRfqWithService("Port Haulage & Clearance")}
                  className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-mcel-purple text-white font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Schedule Port Haulage
                </button>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2 relative">
                <div className="relative w-full h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                  <Image
                    src="/images/logistics/port-container-terminal.jpg"
                    alt="Port Container Gantry & Heavy Haulage"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="px-2.5 py-1 rounded bg-amber-400 text-purple-950 text-[10px] font-bold uppercase mb-1 inline-block">
                      Maritime Logistics
                    </span>
                    <h3 className="text-lg font-bold font-heading">
                      Onne & Port Harcourt Terminal Operations
                    </h3>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* LOGISTICS PILLAR 3: LAST-MILE DELIVERY & CUSTODY TRANSFER (Photo 3) */}
        <section className="py-20 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 relative">
                <div className="relative w-full h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                  <Image
                    src="/images/logistics/doorstep-delivery-tablet.jpg"
                    alt="Last-Mile Delivery & Digital Proof of Receipt"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="px-2.5 py-1 rounded bg-amber-400 text-purple-950 text-[10px] font-bold uppercase mb-1 inline-block">
                      Proof of Delivery
                    </span>
                    <h3 className="text-lg font-bold font-heading">
                      Direct-to-Site Custody Transfer
                    </h3>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-mcel-purple uppercase tracking-widest">
                  <Package className="w-4 h-4 text-amber-500" /> Pillar 03
                </div>

                <h2 className="text-3xl font-extrabold text-slate-900 font-heading leading-tight">
                  Last-Mile Delivery & Secure Custody Handover
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Every consignment—from small critical valve replacement sensors to bulky technical spares—is verified at the destination with digital handheld confirmation tablets, providing clients with immediate chain-of-custody verification.
                </p>

                <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Electronic Signature Handover:</strong> Immediate digital sign-off and instant dispatch reporting.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Fragile & Hazardous Handling:</strong> Certified protocols for chemicals, test equipment, and calibration electronics.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>On-Site Technician Handoff:</strong> Direct handover to field engineers at operating sites.</span>
                  </div>
                </div>

                <button
                  onClick={() => openRfqWithService("Last-Mile Distribution")}
                  className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-mcel-purple text-white font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Book Delivery Run
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* LOGISTICS PILLAR 4: MULTIMODAL AIR & ROAD FREIGHT (Photo 4) */}
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest">
                  <Clock className="w-4 h-4" /> Pillar 04
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading leading-tight">
                  Multimodal Global Freight & Time-Definite Transit
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  When mission-critical refinery equipment, drilling chemicals, or emergency spares require expedited movement, M-CEL orchestrates multimodal air-to-road logistics that eliminate plant downtime.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                    <p className="text-2xl font-extrabold text-amber-400 font-heading">99.4%</p>
                    <p className="text-xs text-slate-300 mt-1">On-Time Transit Rate</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                    <p className="text-2xl font-extrabold text-white font-heading">24/7</p>
                    <p className="text-xs text-slate-300 mt-1">GPS Fleet Telematics</p>
                  </div>
                </div>

                <button
                  onClick={() => openRfqWithService("Expedited Air/Road Freight")}
                  className="px-8 py-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-purple-950 font-bold text-xs uppercase tracking-wider shadow-xl transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Request Urgent Dispatch</span>
                  <ArrowRight className="w-4 h-4 text-purple-950" />
                </button>
              </div>

              <div className="lg:col-span-6">
                <div className="relative w-full h-[360px] sm:h-[440px] rounded-3xl overflow-hidden border-4 border-slate-700 bg-slate-950 shadow-2xl">
                  <Image
                    src="/images/logistics/multimodal-freight-3d.jpg"
                    alt="Multimodal Freight 3D Model"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="px-2.5 py-1 rounded bg-mcel-purple text-amber-300 text-[10px] font-bold uppercase mb-1 inline-block">
                      Synchronized Delivery
                    </span>
                    <h3 className="text-lg font-bold font-heading">
                      Intermodal Freight Connectivity
                    </h3>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />

      <RfqModal
        isOpen={rfqOpen}
        onClose={() => setRfqOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
