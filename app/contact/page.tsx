"use client";

import React, { useState } from "react";
import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RfqModal } from "@/components/RfqModal";
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

      <main className="flex-grow">
        
        {/* Contact Hero */}
        <section className="py-16 sm:py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
                Tender Desk & Client Relations
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
                Connect With Our Engineering Team
              </h1>
              <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed font-light">
                Whether submitting an RFP, scheduling equipment calibration, or exploring an EPC joint venture, our technical desk in Port Harcourt is ready to support your operations.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Directory & Form */}
        <section className="py-16 sm:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Directory Information */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 font-heading mb-2">
                    Corporate Headquarters
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Operating centrally from Port Harcourt, Rivers State, serving clients nationwide.
                  </p>
                </div>

                <div className="space-y-4">
                  
                  {/* Address */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-mcel-purple text-amber-400 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Physical Office</h4>
                      <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                        2ND FLOOR SALIJE PLAZA, ADA GEORGE ROAD, MGBUOBA, RIVERS STATE, NIGERIA
                      </p>
                    </div>
                  </div>

                  {/* Telephones */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-mcel-purple text-amber-400 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Direct Phone Lines</h4>
                      <div className="text-xs text-slate-600 mt-1 space-y-1">
                        <p><a href="tel:09036130587" className="hover:text-mcel-purple font-semibold">09036130587 (Primary / RFQ)</a></p>
                        <p><a href="tel:07063836336" className="hover:text-mcel-purple font-semibold">+234 706 383 6336 (Executive Desk)</a></p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-mcel-purple text-amber-400 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Official Correspondence</h4>
                      <div className="text-xs text-slate-600 mt-1 space-y-1">
                        <p><a href="mailto:sales@masterview-eng.com" className="hover:text-mcel-purple">sales@masterview-eng.com</a></p>
                        <p><a href="mailto:info@masterview-eng.com" className="hover:text-mcel-purple">info@masterview-eng.com</a></p>
                        <p><a href="mailto:jonathan.david@masterview-eng.com" className="hover:text-mcel-purple">jonathan.david@masterview-eng.com</a></p>
                      </div>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-mcel-purple text-amber-400 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Operating Hours</h4>
                      <p className="text-slate-600 text-xs mt-1">Monday – Friday: 8:00 AM – 5:00 PM (WAT)</p>
                      <p className="text-slate-500 text-[11px] mt-0.5">24/7 Field Maintenance Emergency Standby Available</p>
                    </div>
                  </div>

                </div>

                {/* Direct WhatsApp Callout */}
                <div className="p-6 rounded-2xl bg-emerald-600 text-white shadow-xl flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-100 block">Instant Chat</span>
                    <h4 className="text-base font-bold">Priority WhatsApp Response</h4>
                  </div>
                  <a
                    href="https://wa.me/2349036130587?text=Hello%20Masterview%20Consults%20Engineering,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-white text-emerald-800 font-bold text-xs uppercase hover:bg-emerald-50 transition-colors shadow flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat Now</span>
                  </a>
                </div>

              </div>

              {/* Consultation Form */}
              <div className="lg:col-span-7">
                <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
                  <h3 className="text-2xl font-bold text-slate-900 font-heading mb-2">
                    Technical Inquiry / RFQ Submission
                  </h3>
                  <p className="text-slate-500 text-sm mb-6">
                    Fill out the technical brief below. A senior project engineer will review and respond within 24 business hours.
                  </p>

                  {submitted ? (
                    <div className="text-center py-10 space-y-4">
                      <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-9 h-9" />
                      </div>
                      <h4 className="text-2xl font-bold text-slate-900 font-heading">
                        Inquiry Received!
                      </h4>
                      <p className="text-slate-600 text-sm max-w-md mx-auto">
                        Thank you, <strong>{fullname || "Valued Client"}</strong>. Your technical brief has been sent to our procurement & engineering team.
                      </p>
                      <button
                        type="button"
                        onClick={handleWhatsAppDirect}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Follow Up On WhatsApp</span>
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            placeholder="e.g. Engr. Michael Okon"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-mcel-purple"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                            Organization / Client Entity
                          </label>
                          <input
                            type="text"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder="e.g. TotalEnergies / Shell / Public MDA"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-mcel-purple"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                            Official Email *
                          </label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="name@company.com"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-mcel-purple"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+234..."
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-mcel-purple"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Primary Engineering Discipline *
                        </label>
                        <select
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-mcel-purple bg-white"
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
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Project Brief / Scope Specifications *
                        </label>
                        <textarea
                          rows={4}
                          required
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Provide details on scope, site location, timeline, or BOQ..."
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-mcel-purple"
                        />
                      </div>

                      <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <button
                          type="submit"
                          className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-white bg-mcel-purple hover:bg-mcel-purpleLight transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <Send className="w-4 h-4 text-amber-400" />
                          <span>Submit Technical Brief</span>
                        </button>
                        <span className="text-xs text-slate-500 flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4 text-amber-500" /> NDA & Data Privacy Protected
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

      <RfqModal
        isOpen={rfqOpen}
        onClose={() => setRfqOpen(false)}
        defaultService="General Engineering Inquiry"
      />
    </div>
  );
}
