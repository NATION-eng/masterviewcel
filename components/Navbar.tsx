"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, LayoutGrid, Menu, X, ChevronDown, PhoneCall } from "lucide-react";

interface NavbarProps {
  onOpenRfq: () => void;
  onOpenSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRfq }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-14 h-14 overflow-hidden">
              <Image
                src="/images/m-cel-logo.jpg"
                alt="Masterview Consults Engineering Limited Logo"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <div className="hidden sm:block leading-none">
              <span className="block text-xl font-extrabold text-mcel-purple tracking-tight font-heading group-hover:text-mcel-purpleLight transition-colors">
                MASTERVIEW
              </span>
              <span className="block text-[10px] font-bold text-amber-600 uppercase tracking-widest mt-1">
                Consults Engineering Ltd
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Menu (Matching Reference Styling) */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-slate-700">
            <Link href="/" className="hover:text-mcel-purple text-mcel-purple transition-colors py-2 flex items-center gap-1">
              <span>Home</span>
            </Link>
            
            <Link href="/#about" className="hover:text-mcel-purple transition-colors py-2 flex items-center gap-1">
              <span>About Us</span>
            </Link>

            <Link href="/#services" className="hover:text-mcel-purple transition-colors py-2 flex items-center gap-1">
              <span>Services</span>
            </Link>

            {/* Dedicated Logistics Link with Badge */}
            <Link href="/logistics" className="hover:text-mcel-purple transition-colors py-2 flex items-center gap-1.5 font-bold text-slate-900 group">
              <span>Logistics Hub</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] bg-amber-100 text-amber-800 font-extrabold uppercase group-hover:bg-amber-400 transition-colors">
                New
              </span>
            </Link>

            <Link href="/projects" className="hover:text-mcel-purple transition-colors py-2 flex items-center gap-1">
              <span>Projects</span>
            </Link>

            <Link href="/#hse" className="hover:text-mcel-purple transition-colors py-2 flex items-center gap-1">
              <span>Quality & HSE</span>
            </Link>

            <Link href="/contact" className="hover:text-mcel-purple transition-colors py-2 flex items-center gap-1">
              <span>Contact</span>
            </Link>
          </nav>

          {/* Right Reference Icons (Search & 4-Dot Drawer Icon) */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={onOpenRfq}
              className="p-2 text-slate-600 hover:text-mcel-purple hover:bg-slate-50 rounded-full transition-colors"
              title="Search Services"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenRfq}
              className="p-2 text-slate-600 hover:text-mcel-purple hover:bg-slate-50 rounded-full transition-colors"
              title="Quick Consultation"
              aria-label="Menu Drawer"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenRfq}
              className="px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-mcel-purple hover:bg-mcel-purpleLight transition-all shadow-sm active:scale-95"
            >
              Request Quote
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={onOpenRfq}
              className="px-3 py-1.5 rounded bg-mcel-purple text-white text-xs font-bold"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2.5 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 shadow-xl space-y-4 animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-3 text-base font-semibold text-slate-800">
            <Link href="/" onClick={() => setMobileOpen(false)} className="py-2 border-b border-slate-100 hover:text-mcel-purple">
              Home
            </Link>
            <Link href="/#about" onClick={() => setMobileOpen(false)} className="py-2 border-b border-slate-100 hover:text-mcel-purple">
              About Corporate Profile
            </Link>
            <Link href="/#services" onClick={() => setMobileOpen(false)} className="py-2 border-b border-slate-100 hover:text-mcel-purple">
              8 Core Services
            </Link>
            <Link href="/logistics" onClick={() => setMobileOpen(false)} className="py-2 border-b border-slate-100 hover:text-mcel-purple flex items-center justify-between">
              <span>Logistics & Supply Chain Hub</span>
              <span className="text-xs bg-amber-400 text-purple-950 font-bold px-2 py-0.5 rounded">Special</span>
            </Link>
            <Link href="/projects" onClick={() => setMobileOpen(false)} className="py-2 border-b border-slate-100 hover:text-mcel-purple">
              Projects & Case Studies
            </Link>
            <Link href="/#hse" onClick={() => setMobileOpen(false)} className="py-2 border-b border-slate-100 hover:text-mcel-purple">
              HSE & Quality Assurance
            </Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="py-2 hover:text-mcel-purple">
              Contact / Tender Desk
            </Link>
          </nav>

          <div className="pt-4 border-t border-slate-100 flex flex-col space-y-3">
            <div className="flex items-center space-x-2 text-xs font-semibold text-slate-600">
              <PhoneCall className="w-4 h-4 text-amber-500" />
              <span>09036130587 / 07063836336</span>
            </div>
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenRfq();
              }}
              className="w-full py-3 rounded-xl font-bold text-white bg-mcel-purple text-center shadow"
            >
              Request Free Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
