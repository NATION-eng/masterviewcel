"use client";

import React, { useState } from "react";
import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RfqModal } from "@/components/RfqModal";
import { MobileActionBar } from "@/components/MobileActionBar";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  MessageSquare, 
  Clock, 
  ShieldCheck, 
  CheckCircle2 
} from "lucide-react";

export default function ContactPage() {
  const [rfqOpen, setRfqOpen] = useState(false);
  const [fullname, setFullname] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("General Inquiry");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
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
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <TopBar onOpenRfq={() => setRfqOpen(true)} />
      <Navbar onOpenRfq={() => setRfqOpen(true)} />

      <main className="flex-grow pb-12 md:pb-0">
        
        {/* Contact Hero */}
        <section className="py-14 sm:py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-[10px] sm:text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
                Tender Desk & Client Relations
              </span>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight">
                Connect With Our Engineering Team
              </h1>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base mt-2.5 sm:mt-3 leading-relaxed font-light">
                Whether submitting an RFP, scheduling equipment calibration, or exploring an EPC joint venture, our technical desk in Port Harcourt is ready to support your operations.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Directory & Form */}
        <section className="py-12 sm:py-20 lg:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              
              {/* Directory Information */}
              <div className="lg:col-span-5 space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading mb-1.5 sm:mb-2">
                    Corporate Headquarters
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm">
                    Operating centrally from Port Harcourt, Rivers State, serving clients nationwide.
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  
                  {/* Address */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 rounded-xl bg-mcel-purple text-amber-400 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Physical Office</h4>
                      <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                        2nd Floor Salije Plaza, Ada George Road, Mgbuoba, Port Harcourt, Rivers State, Nigeria.
                      </p>
                    </div>
                  </div>

                  {/* Telephones */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 rounded-xl bg-mcel-purple text-amber-400 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Direct Phone Lines</h4>
                      <div className="text-xs text-slate-600 mt-1 space-y-1">
                        <p><a href="tel:09036130587" className="hover:text-mcel-purple font-semibold">09036130587 (Operations / RFQ)</a></p>
                        <p><a href="tel:07063836336" className="hover:text-mcel-purple font-semibold">07063836336 (Executive Desk)</a></p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 rounded-xl bg-mcel-purple text-amber-400 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Official Correspondence</h4>
                      <div className="text-xs text-slate-600 mt-1 space-y-1">
                        <p><a href="mailto:sales@masterview-eng.com" className="hover:text-mcel-purple font-medium">sales@masterview-eng.com</a></p>
                        <p><a href="mailto:info@masterview-eng.com" className="hover:text-mcel-purple font-medium">info@masterview-eng.com</a></p>
                        <p><a href="mailto:jonathan.david@masterview-eng.com" className="hover:text-mcel-purple font-medium">jonathan.david@masterview-eng.com</a></p>
                      </div>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 rounded-xl bg-mcel-purple text-amber-400 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Operating Hours</h4>
                      <p className="text-slate-600 text-xs mt-1">Monday – Friday: 8:00 AM – 5:00 PM (WAT)</p>
                      <p className="text-slate-500 text-[11px] mt-0.5">24/7 Field Maintenance Emergency Standby Available</p>
                    </div>
                  </div>

                </div>

                {/* Direct WhatsApp Callout */}
                <div className="p-5 sm:p-6 rounded-2xl bg-emerald-600 text-white shadow-xl flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-100 block">Instant Chat</span>
                    <h4 className="text-sm sm:text-base font-bold">Priority WhatsApp Response</h4>
                  </div>
                  <a
                    href="https://wa.me/2349036130587?text=Hello%20Masterview%20Consults%20Engineering,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-white text-emerald-800 font-bold text-xs uppercase hover:bg-emerald-50 transition-colors shadow flex items-center gap-1.5 active:scale-95"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat Now</span>
                  </a>
                </div>

              </div>

              {/* Consultation Form */}
              <div className="lg:col-span-7">
                <div className="bg-white p-5 sm:p-8 lg:p-10 rounded-3xl border border-slate-200 shadow-xl">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-1.5 sm:mb-2">
                    Technical Inquiry / RFQ Submission
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm mb-5 sm:mb-6">
                    Fill out the technical brief below. A senior project engineer will review and respond within 24 business hours.
                  </p>

                  {submitted ? (
                    <div className="text-center py-8 sm:py-10 space-y-4">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8 sm:w-9 sm:h-9" />
                      </div>
                      <h4 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                        Inquiry Received!
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                        Thank you, <strong>{fullname || "Valued Client"}</strong>. Your technical brief has been sent to our procurement & engineering team.
                      </p>
                      <button
                        type="button"
                        onClick={handleWhatsAppDirect}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow active:scale-95 transition-all"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Follow Up On WhatsApp</span>
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                        <div>
                          <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            placeholder="e.g. Engr. Michael Okon"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-mcel-purple text-slate-900"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Organization / Client Entity
                          </label>
                          <input
                            type="text"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder="e.g. TotalEnergies / Shell"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-mcel-purple text-slate-900"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                        <div>
                          <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Official Email *
                          </label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="name@company.com"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-mcel-purple text-slate-900"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+234..."
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-mcel-purple text-slate-900"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Primary Engineering Discipline *
                        </label>
                        <select
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-mcel-purple bg-white text-slate-900"
                        >
                          <option value="General Inquiry">General Engineering Inquiry</option>
                          <option value="Oil & Gas Equipment Maintenance">Oil & Gas Equipment Maintenance (API/ISO)</option>
                          <option value="Calibration Services">Calibration Services (ISO/IEC 17025)</option>
                          <option value="Logistics & Supply Chain">Logistics & Heavy Haulage</option>
                          <option value="Fabrication & Welding">Fabrication & Welding (ASME/ASTM)</option>
                          <option value="Procurement Services">Procurement Services</option>
                          <option value="Engineering Designs">Engineering Designs (CAD/BIM)</option>
                          <option value="Civil Construction">Civil Construction & Turnkey Infrastructure</option>
                          <option value="General Contracting">General Contracting & Turnkey EPC</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Project Brief / Scope Specifications *
                        </label>
                        <textarea
                          rows={4}
                          required
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Provide details on scope, site location, timeline, or BOQ..."
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-mcel-purple text-slate-900"
                        />
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
                        <button
                          type="submit"
                          className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-white bg-mcel-purple hover:bg-mcel-purpleLight transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                        >
                          <Send className="w-4 h-4 text-amber-400" />
                          <span>Submit Technical Brief</span>
                        </button>
                        <span className="text-[11px] sm:text-xs text-slate-500 flex items-center justify-center sm:justify-start gap-1.5">
                          <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0" /> NDA & Data Privacy Protected
                        </span>
                      </div>
                    </form>
                  )}
                </div>
              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileActionBar onOpenRfq={() => setRfqOpen(true)} />

      <RfqModal
        isOpen={rfqOpen}
        onClose={() => setRfqOpen(false)}
        defaultService="General Engineering Inquiry"
      />
    </div>
  );
}
