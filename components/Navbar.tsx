"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  LayoutGrid, 
  Menu, 
  X, 
  PhoneCall, 
  Home, 
  ShieldCheck, 
  Briefcase, 
  Truck, 
  Building2, 
  Award, 
  Mail, 
  ArrowRight,
  MessageSquare
} from "lucide-react";

interface NavbarProps {
  onOpenRfq: () => void;
  onOpenSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRfq }) => {
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  // Close drawer on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          
          {/* Brand Logo & Compact Responsive Name */}
          <Link href="/" className="flex items-center space-x-2.5 sm:space-x-3 group">
            <div className="relative w-11 h-11 sm:w-14 sm:h-14 overflow-hidden shrink-0">
              <Image
                src="/images/m-cel-logo.jpg"
                alt="Masterview Consults Engineering Limited Logo"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <div className="leading-tight">
              <span className="block text-base sm:text-xl font-extrabold text-mcel-purple tracking-tight font-heading group-hover:text-mcel-purpleLight transition-colors">
                MASTERVIEW
              </span>
              <span className="block text-[9px] sm:text-[10px] font-bold text-amber-600 uppercase tracking-widest mt-0.5">
                Consults Engineering Ltd
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-semibold text-slate-700">
            <Link href="/" className="hover:text-mcel-purple text-mcel-purple transition-colors py-2 flex items-center gap-1">
              <span>Home</span>
            </Link>
            
            <Link href="/#about" className="hover:text-mcel-purple transition-colors py-2 flex items-center gap-1">
              <span>About Us</span>
            </Link>

            <Link href="/#services" className="hover:text-mcel-purple transition-colors py-2 flex items-center gap-1">
              <span>Services</span>
            </Link>

            {/* Dedicated Logistics Link with Special Badge */}
            <Link href="/logistics" className="hover:text-mcel-purple transition-colors py-2 flex items-center gap-1.5 font-bold text-slate-900 group">
              <span>Logistics Hub</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] bg-amber-400 text-purple-950 font-extrabold uppercase shadow-sm group-hover:bg-amber-300 transition-colors">
                Special
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

          {/* Desktop Right Action Controls */}
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
          </div>

          {/* Mobile Right Controls: Hamburger Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setMobileOpen(true);
              }}
              className="p-2.5 rounded-xl text-slate-800 hover:text-mcel-purple hover:bg-slate-100 active:scale-95 transition-all focus:outline-none cursor-pointer flex items-center justify-center touch-manipulation"
              aria-label="Open mobile navigation menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="w-6 h-6 text-slate-800" />
            </button>
          </div>

        </div>
      </div>
    </header>

    {/* Exceptional Animated Mobile Drawer (Portaled to document.body to avoid stacking context issues) */}
    {mounted && createPortal(
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-[9999] lg:hidden">
            
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm"
            />

            {/* Slide-Over Drawer Sheet */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 260 }}
              className="fixed top-0 right-0 bottom-0 w-[88vw] sm:w-[380px] max-w-sm bg-white shadow-2xl flex flex-col z-[10000] overflow-hidden h-[100dvh]"
            >
              {/* Drawer Header */}
              <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/70 shrink-0">
                <div className="flex items-center space-x-2.5">
                  <div className="relative w-9 h-9 shrink-0">
                    <Image
                      src="/images/m-cel-logo.jpg"
                      alt="M-CEL Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <span className="block text-sm font-extrabold text-mcel-purple font-heading leading-none">
                      MASTERVIEW
                    </span>
                    <span className="block text-[9px] font-bold text-amber-600 uppercase tracking-widest mt-0.5">
                      Consults Eng. Ltd
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 rounded-full bg-slate-200/80 hover:bg-slate-300 flex items-center justify-center text-slate-700 active:scale-95 transition-all cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links Scroll Container */}
              <div className="flex-1 overflow-y-auto px-5 py-4 space-y-1 text-slate-800">
                
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center space-x-3 px-3 py-2.5 rounded-xl hover:bg-purple-50 hover:text-mcel-purple transition-colors font-semibold text-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-mcel-purple shrink-0">
                    <Home className="w-4 h-4" />
                  </div>
                  <span>Home</span>
                </Link>

                <Link
                  href="/#about"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center space-x-3 px-3 py-2.5 rounded-xl hover:bg-purple-50 hover:text-mcel-purple transition-colors font-semibold text-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-mcel-purple shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span>About Corporate Profile</span>
                </Link>

                <Link
                  href="/#services"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center space-x-3 px-3 py-2.5 rounded-xl hover:bg-purple-50 hover:text-mcel-purple transition-colors font-semibold text-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-mcel-purple shrink-0">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <span>8 Core Engineering Pillars</span>
                </Link>

                {/* Highlighted Logistics Hub */}
                <Link
                  href="/logistics"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-purple-950 transition-colors font-bold text-sm border border-amber-200/70"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-400 text-purple-950 flex items-center justify-center shrink-0">
                      <Truck className="w-4 h-4" />
                    </div>
                    <span>Logistics & Haulage Hub</span>
                  </div>
                  <span className="text-[10px] bg-amber-400 text-purple-950 font-extrabold px-2 py-0.5 rounded uppercase tracking-wider">
                    Special
                  </span>
                </Link>

                <Link
                  href="/projects"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center space-x-3 px-3 py-2.5 rounded-xl hover:bg-purple-50 hover:text-mcel-purple transition-colors font-semibold text-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-mcel-purple shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <span>Projects & Case Studies</span>
                </Link>

                <Link
                  href="/#hse"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center space-x-3 px-3 py-2.5 rounded-xl hover:bg-purple-50 hover:text-mcel-purple transition-colors font-semibold text-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-mcel-purple shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <span>HSE & Quality Standards</span>
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center space-x-3 px-3 py-2.5 rounded-xl hover:bg-purple-50 hover:text-mcel-purple transition-colors font-semibold text-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-mcel-purple shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>Contact / Tender Desk</span>
                </Link>

                {/* Direct Tender Desk Call Box */}
                <div className="mt-5 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5">
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Direct Engineering Desks:
                  </p>
                  
                  <a
                    href="tel:09036130587"
                    className="flex items-center space-x-2.5 text-xs font-bold text-slate-800 hover:text-mcel-purple"
                  >
                    <PhoneCall className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>09036130587 (Operations)</span>
                  </a>

                  <a
                    href="tel:07063836336"
                    className="flex items-center space-x-2.5 text-xs font-bold text-slate-800 hover:text-mcel-purple"
                  >
                    <PhoneCall className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>07063836336 (Procurement)</span>
                  </a>

                  <a
                    href="mailto:sales@masterview-eng.com"
                    className="flex items-center space-x-2.5 text-xs font-medium text-slate-600 hover:text-mcel-purple"
                  >
                    <Mail className="w-4 h-4 text-mcel-purple shrink-0" />
                    <span>sales@masterview-eng.com</span>
                  </a>
                </div>

              </div>

              {/* Drawer Bottom Action Area */}
              <div className="p-5 border-t border-slate-100 bg-white space-y-2.5 shrink-0 pb-safe">
                <a
                  href="https://wa.me/2349036130587?text=Hello%20Masterview%20Consults%20Engineering,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all active:scale-98"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat Direct on WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenRfq();
                  }}
                  className="w-full py-3 rounded-xl bg-mcel-purple hover:bg-mcel-purpleLight text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all active:scale-98 cursor-pointer"
                >
                  <span>Get Consultation</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>

                <p className="text-[10px] text-center text-slate-400 font-mono pt-1">
                  CAC RC: 7361706 • COREN: R.79,476 • Port Harcourt
                </p>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>,
      document.body
    )}
  </>
);
};
