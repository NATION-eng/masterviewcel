"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { X, Send, MessageSquare, CheckCircle2, Truck, HardHat, FileText } from "lucide-react";

interface RfqModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  pageContext?: "home" | "logistics" | "projects" | "contact";
}

export const RfqModal: React.FC<RfqModalProps> = ({
  isOpen,
  onClose,
  defaultService,
  pageContext,
}) => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // Determine active context from prop or current pathname
  const isLogistics = 
    pageContext === "logistics" || 
    pathname === "/logistics" || 
    (defaultService && defaultService.toLowerCase().includes("logistics"));

  const isProjects = 
    pageContext === "projects" || 
    pathname === "/projects" ||
    (defaultService && defaultService.toLowerCase().includes("project"));

  const initialService = defaultService || (
    isLogistics 
      ? "Heavy Haulage & Equipment Logistics" 
      : isProjects 
        ? "Turnkey Project Tender Inquiry" 
        : "General Inquiry"
  );

  const [fullname, setFullname] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(initialService);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (defaultService) {
      const lower = defaultService.toLowerCase();
      if (isLogistics) {
        if (lower.includes("port") || lower.includes("quay")) {
          setService("Quayside Port Clearance & Marine Drayage");
        } else if (lower.includes("warehous") || lower.includes("sap") || lower.includes("inventory")) {
          setService("Warehouse & SAP Inventory Management");
        } else if (lower.includes("intermodal") || lower.includes("last-mile") || lower.includes("doorstep")) {
          setService("Intermodal Last-Mile Distribution");
        } else {
          setService("Heavy Haulage & Equipment Logistics");
        }
      } else if (isProjects) {
        if (lower.includes("spm") || lower.includes("buoy") || lower.includes("shell") || lower.includes("waos")) {
          setService("SPM Buoy Refurbishment & Offshore Drafting");
        } else if (lower.includes("warehous") || lower.includes("horandez") || lower.includes("steel")) {
          setService("Heavy Steel Warehouse & Portal Frame Construction");
        } else if (lower.includes("nlng") || lower.includes("roof") || lower.includes("waterproof") || lower.includes("foam")) {
          setService("Industrial Roof Waterproofing & Foam Glass Insulation");
        } else if (lower.includes("ccr") || lower.includes("totalenergies")) {
          setService("Central Control Room (CCR) Modernization");
        } else if (lower.includes("loop") || lower.includes("instrument")) {
          setService("Instrumentation Loop Standardization");
        } else if (lower.includes("army") || lower.includes("pitch") || lower.includes("turf")) {
          setService("Turnkey Sports Complex & Grandstand");
        } else {
          setService("Turnkey Project Tender Inquiry");
        }
      } else {
        if (lower.includes("construction") || lower.includes("civil")) {
          setService("Construction Works (Civil & Turnkey)");
        } else if (lower.includes("electrical")) {
          setService("Electrical Works / Installations");
        } else if (lower.includes("mechanical")) {
          setService("Mechanical Works / Installations");
        } else if (lower.includes("steel") || lower.includes("metal")) {
          setService("Steel / Metal Projects (Fabrication & Welding)");
        } else if (lower.includes("procurement") || lower.includes("sourc")) {
          setService("Procurement Services");
        } else if (lower.includes("maintenance")) {
          setService("Facility & Asset Maintenance");
        } else if (lower.includes("logistics") || lower.includes("haulage")) {
          setService("Supply Chain & Heavy Haulage Logistics");
        } else if (lower.includes("consult")) {
          setService("General Engineering Consultancy");
        } else {
          setService(defaultService);
        }
      }
    } else if (isLogistics) {
      setService("Heavy Haulage & Equipment Logistics");
    } else if (isProjects) {
      setService("Turnkey Project Tender Inquiry");
    } else {
      setService("General Inquiry");
    }
  }, [defaultService, isLogistics, isProjects, isOpen]);

  if (!isOpen || !mounted) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    let prefix = "MASTERVIEW CONSULTS INQUIRY";
    if (isLogistics) prefix = "MASTERVIEW LOGISTICS & HAULAGE INQUIRY";
    if (isProjects) prefix = "MASTERVIEW PROJECT TENDER INQUIRY";

    const text = encodeURIComponent(
      `*${prefix}*\n` +
      `*Name:* ${fullname || "Prospective Client"}\n` +
      `*Company:* ${company || "N/A"}\n` +
      `*Phone:* ${phone || "N/A"}\n` +
      `*Discipline / Category:* ${service}\n` +
      `*Scope / Parameters:* ${message || "Requesting technical consultation / quotation."}`
    );
    window.open(`https://wa.me/2349036130587?text=${text}`, "_blank");
  };

  return createPortal(
    <div className="fixed inset-0 z-[99999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white w-full max-w-xl max-h-[92vh] sm:max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="px-5 sm:px-8 py-4 sm:py-5 bg-mcel-purple text-white flex justify-between items-center shrink-0">
          <div>
            <span className="text-[10px] sm:text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
              {isLogistics ? (
                <>
                  <Truck className="w-3.5 h-3.5" />
                  <span>Logistics & Freight Dispatch Desk</span>
                </>
              ) : isProjects ? (
                <>
                  <HardHat className="w-3.5 h-3.5" />
                  <span>Engineering Tender & Technical RFP Desk</span>
                </>
              ) : (
                <>
                  <FileText className="w-3.5 h-3.5" />
                  <span>Tender & Engineering Consultation Desk</span>
                </>
              )}
            </span>
            <h3 className="text-lg sm:text-xl font-bold font-heading mt-0.5">
              {isLogistics 
                ? "Request Freight Schedule & Logistics Quote"
                : isProjects 
                  ? "Inquire About a Project or Submit an RFP"
                  : "Request an Engineering Consultation"
              }
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer active:scale-95"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-8 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 sm:w-9 sm:h-9" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                {isLogistics ? "Logistics Request Received!" : isProjects ? "Tender Inquiry Logged!" : "Inquiry Logged Successfully!"}
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{fullname || "Sir/Madam"}</strong>. {isLogistics 
                  ? "Our logistics dispatch desk has received your freight specifications and will generate a quotation shortly."
                  : isProjects
                    ? "Our senior engineering team has received your project parameters and will review the scope promptly."
                    : "An engineering representative from Masterview Consults has logged your specifications and will reach out shortly."
                }
              </p>
              
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row justify-center gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Direct Via WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer active:scale-95"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    placeholder="Engr. / Mr. / Mrs. Name"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-mcel-purple focus:border-transparent text-base sm:text-sm text-slate-900 placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Company Ltd / Enterprise"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-mcel-purple focus:border-transparent text-base sm:text-sm text-slate-900 placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-mcel-purple focus:border-transparent text-base sm:text-sm text-slate-900 placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0903... / +234..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-mcel-purple focus:border-transparent text-base sm:text-sm text-slate-900 placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {isLogistics ? "Logistics Service Requirement *" : isProjects ? "Project Discipline / Contract Sector *" : "Primary Engineering Discipline *"}
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-mcel-purple focus:border-transparent text-base sm:text-sm text-slate-900 bg-white"
                >
                  {isLogistics ? (
                    <>
                      <option value="Heavy Haulage & Equipment Logistics">Heavy Equipment Haulage & Flatbed Logistics</option>
                      <option value="Quayside Port Clearance & Marine Drayage">Quayside Port Clearance & Marine Drayage (Onne Port / PH Port)</option>
                      <option value="Warehouse & SAP Inventory Management">Warehouse Storage & SAP Material Management</option>
                      <option value="Intermodal Last-Mile Distribution">Intermodal Last-Mile & Doorstep Delivery</option>
                      <option value="Procurement Supply Chain Management">Industrial Supply Chain & Procurement Transport</option>
                      <option value="General Logistics Consultation">General Logistics & Freight Consultation</option>
                    </>
                  ) : isProjects ? (
                    <>
                      <option value="Turnkey Project Tender Inquiry">General Project Tender / Engineering RFP</option>
                      <option value="SPM Buoy Refurbishment & Offshore Drafting">Single-Point Mooring (SPM) Buoy Refurbishment & Drafting (Shell/WAOS)</option>
                      <option value="Heavy Steel Warehouse & Portal Frame Construction">Heavy Structural Steel Warehouse Construction (Horandez & Detroit)</option>
                      <option value="Industrial Roof Waterproofing & Foam Glass Insulation">Industrial Roof Waterproofing & 500mm Foam Glass (NLNG Island)</option>
                      <option value="Central Control Room (CCR) Modernization">Central Control Room (CCR) Modernization & Video Walls (TotalEnergies)</option>
                      <option value="Instrumentation Loop Standardization">Instrumentation Loop Drawings & Field Tracing (TotalEnergies JV)</option>
                      <option value="Turnkey Sports Complex & Grandstand">Turnkey Sports Complex & Cantilever Grandstand (Nigerian Army)</option>
                      <option value="Industrial Mud Plant 3D Design">Industrial Chemical Mud Plant 3D Design & Piping (ICTSI/Trexm)</option>
                      <option value="Technical Procurement & Sourcing Management">Technical Procurement & Strategic Sourcing Management</option>
                    </>
                  ) : (
                    <>
                      <option value="General Inquiry">General Technical Inquiry</option>
                      <option value="Construction Works">Construction Works (Civil & Turnkey)</option>
                      <option value="Electrical Works / Installations">Electrical Works / Installations</option>
                      <option value="Mechanical Works / Installations">Mechanical Works / Installations</option>
                      <option value="Steel / Metal Projects">Steel / Metal Projects (Fabrication & Welding)</option>
                      <option value="Procurement Services">Procurement Services</option>
                      <option value="Maintenance Services">Facility & Asset Maintenance</option>
                      <option value="General Consultant">General Engineering Consultancy</option>
                      <option value="Logistics & Heavy Haulage">Supply Chain & Heavy Haulage Logistics</option>
                    </>
                  )}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {isLogistics 
                    ? "Cargo Specifications, Route & Delivery Timeline *"
                    : isProjects 
                      ? "Project Scope, RFP Reference & Technical Specifications *"
                      : "Project Scope / Technical Specifications *"
                  }
                </label>
                <textarea
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    isLogistics 
                      ? "Specify cargo description, estimated weight/dimensions, pickup origin, destination, equipment required (lowbed, crane, flatbed), or delivery schedule..."
                      : isProjects
                        ? "Mention the project reference (e.g. SPM Buoy, 1,600 sqm Warehouse, NLNG Felting, CCR Overhaul), site location, tender deadline, or technical scope..."
                        : "Describe your site requirements, location, estimated schedule, or equipment parameters..."
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-mcel-purple focus:border-transparent text-base sm:text-sm text-slate-900 placeholder:text-slate-400"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-mcel-purple hover:bg-mcel-purpleLight text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer active:scale-95"
                >
                  <Send className="w-4 h-4 text-amber-400" />
                  <span>
                    {isLogistics 
                      ? "Submit Freight Schedule Request"
                      : isProjects
                        ? "Submit Project Tender Request"
                        : "Submit Consultation Request"
                    }
                  </span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>,
    document.body
  );
};
