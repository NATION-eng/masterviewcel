"use client";

import React from "react";
import { MapPin, Mail, Phone, CalendarCheck, ShieldCheck } from "lucide-react";

interface TopBarProps {
  onOpenRfq: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenRfq }) => {
  return (
    <div className="bg-white border-b border-slate-200 text-xs text-slate-600 hidden md:block relative z-30">
      <div className="max-w-7xl mx-auto pl-4 sm:pl-6 lg:pl-8 flex justify-between items-center h-10">
        
        {/* Left: Address & Emails */}
        <div className="flex items-center space-x-5 text-[11px] font-medium">
          <div className="hidden lg:flex items-center space-x-1.5 text-slate-500 hover:text-slate-800 transition-colors">
            <MapPin className="w-3.5 h-3.5 text-mcel-purple shrink-0" />
            <span>2nd Floor Salije Plaza, Ada George Road, Mgbuoba, Port Harcourt</span>
          </div>
          <div className="flex items-center space-x-3 text-slate-500">
            <a href="mailto:info@masterview-eng.com" className="hover:text-mcel-purple transition-colors flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-mcel-purple shrink-0" />
              <span>info@masterview-eng.com</span>
            </a>
            <span className="text-slate-300">|</span>
            <a href="mailto:sales@masterview-eng.com" className="hover:text-mcel-purple transition-colors flex items-center gap-1.5">
              <span>sales@masterview-eng.com</span>
            </a>
          </div>
        </div>

        {/* Right: Phone & Signature Angled Purple Notch */}
        <div className="flex items-center h-full">
          <div className="flex items-center space-x-2 text-[11px] font-semibold text-slate-700 mr-6">
            <Phone className="w-3.5 h-3.5 text-mcel-purple" />
            <a href="tel:09036130587" className="hover:text-mcel-purple transition-colors">
              09036130587
            </a>
            <span className="text-slate-300">|</span>
            <span className="inline-flex items-center text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 font-bold">
              <ShieldCheck className="w-3 h-3 mr-1 text-amber-600" /> RC: 7361706
            </span>
          </div>

          {/* Signature Reference Purple Notch */}
          <button
            onClick={onOpenRfq}
            className="polygon-notch bg-mcel-purple hover:bg-mcel-purpleLight text-white font-extrabold text-[11px] uppercase tracking-wider px-8 h-full flex items-center gap-2 transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <CalendarCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>GET CONSULTATION</span>
          </button>
        </div>

      </div>
    </div>
  );
};
