"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageSquare, Truck, FileText } from "lucide-react";

interface MobileActionBarProps {
  onOpenRfq: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onOpenRfq }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-30 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] pb-safe transition-all">
      <div className="grid grid-cols-4 h-14 items-center text-center">
        
        {/* 1. Call Desk */}
        <a
          href="tel:09036130587"
          className="flex flex-col items-center justify-center h-full text-slate-600 hover:text-mcel-purple active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 text-mcel-purple mb-1" />
          <span className="text-[10px] font-bold tracking-tight">Call Desk</span>
        </a>

        {/* 2. WhatsApp Direct */}
        <a
          href="https://wa.me/2349036130587?text=Hello%20Masterview%20Consults%20Engineering,%20I%20would%20like%20to%20inquire%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center h-full text-slate-600 hover:text-emerald-600 active:scale-95 transition-all"
        >
          <MessageSquare className="w-4 h-4 text-emerald-600 mb-1" />
          <span className="text-[10px] font-bold tracking-tight">WhatsApp</span>
        </a>

        {/* 3. Logistics Hub */}
        <Link
          href="/logistics"
          className="flex flex-col items-center justify-center h-full text-slate-600 hover:text-amber-600 active:scale-95 transition-all"
        >
          <Truck className="w-4 h-4 text-amber-500 mb-1" />
          <span className="text-[10px] font-bold tracking-tight">Logistics</span>
        </Link>

        {/* 4. Request Quote */}
        <button
          onClick={onOpenRfq}
          className="flex flex-col items-center justify-center h-full text-slate-600 hover:text-mcel-purple active:scale-95 transition-all cursor-pointer"
        >
          <div className="w-7 h-7 rounded-full bg-mcel-purple text-white flex items-center justify-center mb-0.5 shadow-sm">
            <FileText className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <span className="text-[10px] font-bold text-mcel-purple tracking-tight">RFQ</span>
        </button>

      </div>
    </div>
  );
};
