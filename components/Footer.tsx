"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand & CAC Badges */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-12 h-12 bg-white p-1 rounded-xl">
                <Image
                  src="/images/m-cel-logo.jpg"
                  alt="M-CEL Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <span className="block text-lg font-extrabold text-white tracking-tight font-heading">
                  MASTERVIEW CONSULTS
                </span>
                <span className="block text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                  Engineering Limited (M-CEL)
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Incorporated under the Companies and Allied Matters Act 2020. Providing certified oil & gas equipment maintenance, precision calibration (ISO/IEC 17025), heavy fabrication, civil construction, and logistics solutions across Nigeria.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
              <span className="px-2.5 py-1 rounded bg-slate-900 text-amber-300 font-mono border border-slate-800 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> RC: 7361706
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 text-slate-300 font-mono border border-slate-800">
                TIN: 31664498-0001
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-white font-bold font-heading text-xs uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link href="/#about" className="hover:text-amber-400 transition-colors">About Us</Link></li>
              <li><Link href="/#services" className="hover:text-amber-400 transition-colors">Core Capabilities</Link></li>
              <li><Link href="/logistics" className="hover:text-amber-400 font-bold text-amber-300 transition-colors">Logistics Hub</Link></li>
              <li><Link href="/projects" className="hover:text-amber-400 transition-colors">Projects & Case Studies</Link></li>
              <li><Link href="/#hse" className="hover:text-amber-400 transition-colors">Quality & HSE Standards</Link></li>
              <li><Link href="/contact" className="hover:text-amber-400 transition-colors">Contact / Tender Desk</Link></li>
            </ul>
          </div>

          {/* Column 3: Disciplines */}
          <div>
            <h4 className="text-white font-bold font-heading text-xs uppercase tracking-widest mb-4">
              Disciplines
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/#services" className="hover:text-amber-400 transition-colors">Oil & Gas Maintenance (API)</Link></li>
              <li><Link href="/#services" className="hover:text-amber-400 transition-colors">Calibration (ISO 17025)</Link></li>
              <li><Link href="/logistics" className="hover:text-amber-400 transition-colors">Supply Chain & Haulage</Link></li>
              <li><Link href="/#services" className="hover:text-amber-400 transition-colors">Structural Steel Fabrication</Link></li>
              <li><Link href="/#services" className="hover:text-amber-400 transition-colors">Technical Procurement</Link></li>
              <li><Link href="/#services" className="hover:text-amber-400 transition-colors">CAD/BIM Engineering Design</Link></li>
              <li><Link href="/#services" className="hover:text-amber-400 transition-colors">Civil Infrastructure Works</Link></li>
            </ul>
          </div>

          {/* Column 4: Headquarters */}
          <div>
            <h4 className="text-white font-bold font-heading text-xs uppercase tracking-widest mb-4">
              Head Office
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-3 flex items-start gap-1.5">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>2nd Floor Salije Plaza, Ada George Road, Mgbuoba, Rivers State, Nigeria.</span>
            </p>
            <p className="text-xs text-slate-300 font-semibold mb-1.5 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <a href="tel:09036130587">09036130587</a>
            </p>
            <p className="text-xs text-slate-300 font-semibold mb-2 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <a href="tel:07063836336">07063836336</a>
            </p>
            <p className="text-xs text-slate-400 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <a href="mailto:sales@masterview-eng.com">sales@masterview-eng.com</a>
            </p>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© 2026 Masterview Consults Engineering Limited (M-CEL). All Rights Reserved.</p>
          <div className="flex items-center space-x-3 text-[11px]">
            <span>COREN: R.79,476</span>
            <span>•</span>
            <span>NSE: 66878</span>
            <span>•</span>
            <span>CAMA 2020</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
