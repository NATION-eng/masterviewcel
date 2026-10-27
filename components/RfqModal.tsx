"use client";

import React, { useState } from "react";
import { X, Send, MessageSquare, CheckCircle2 } from "lucide-react";

interface RfqModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const RfqModal: React.FC<RfqModalProps> = ({
  isOpen,
  onClose,
  defaultService = "General Inquiry",
}) => {
  const [fullname, setFullname] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(defaultService);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `*MASTERVIEW CONSULTS INQUIRY*\n` +
      `*Name:* ${fullname || "Prospective Client"}\n` +
      `*Company:* ${company || "N/A"}\n` +
      `*Phone:* ${phone || "N/A"}\n` +
      `*Discipline:* ${service}\n` +
      `*Scope:* ${message || "Requesting technical consultation."}`
    );
    window.open(`https://wa.me/2349036130587?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white w-full max-w-xl max-h-[92vh] sm:max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="px-5 sm:px-8 py-4 sm:py-5 bg-mcel-purple text-white flex justify-between items-center shrink-0">
          <div>
            <span className="text-[10px] sm:text-xs font-bold text-amber-400 uppercase tracking-widest block">
              Tender & Consultation Desk
            </span>
            <h3 className="text-lg sm:text-xl font-bold font-heading">Request an Engineering Consultation</h3>
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
                Inquiry Logged Successfully!
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{fullname || "Sir/Madam"}</strong>. An engineering representative from Masterview Consults Engineering Limited has logged your specifications and will reach out shortly.
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
                  Primary Engineering Discipline
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-mcel-purple focus:border-transparent text-base sm:text-sm text-slate-900 bg-white"
                >
                  <option value="General Inquiry">General Technical Inquiry</option>
                  <option value="Oil & Gas Equipment Maintenance">Oil & Gas Equipment Maintenance (API)</option>
                  <option value="Calibration Services">Instrument Calibration (ISO/IEC 17025)</option>
                  <option value="Logistics & Heavy Haulage">Logistics, SAP SCM & Heavy Haulage</option>
                  <option value="Fabrication & Welding">Structural Steel Fabrication & Welding</option>
                  <option value="Procurement Services">International & Local Technical Procurement</option>
                  <option value="Engineering Designs">2D Drafting / 3D BIM Modeling</option>
                  <option value="Civil Construction">Civil Construction & Turnkey Contracting</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Project Scope / Technical Specifications
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your site requirements, location, estimated schedule, or equipment parameters..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-mcel-purple focus:border-transparent text-base sm:text-sm text-slate-900 placeholder:text-slate-400"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-mcel-purple hover:bg-mcel-purpleLight text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer active:scale-95"
                >
                  <Send className="w-4 h-4 text-amber-400" />
                  <span>Submit Consultation Request</span>
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
    </div>
  );
};
