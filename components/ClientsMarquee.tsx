"use client";

import React from "react";
import Image from "next/image";

const clients = [
  { name: "Nigeria LNG Limited", src: "/images/logos/nlng.png", width: 145 },
  { name: "TotalEnergies", src: "/images/logos/totalenergies.png", width: 175 },
  { name: "Nigerian Army", src: "/images/logos/nigerian-army.png", width: 175 },
  { name: "ICTSI Onne Terminal", src: "/images/logos/ictsi.png", width: 165 },
  { name: "Librod Energy Services", src: "/images/logos/librod.png", width: 150 },
  { name: "Intesat Services Limited", src: "/images/logos/intesat.png", width: 160 },
  { name: "Neeqoro Ultimate Ventures", src: "/images/client-neeqoro.png", width: 140 },
  { name: "Peew-Williams Services", src: "/images/partner-peew-williams.jpg", width: 150 },
  { name: "RL & Control", src: "/images/partner-rl-control.jpg", width: 140 },
];

export const ClientsMarquee: React.FC = () => {
  return (
    <section className="py-12 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs font-extrabold uppercase tracking-widest text-mcel-purple">
          Trusted By Multinational Operators, Industrial Plants & Public Institutions
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee flex items-center space-x-12 sm:space-x-16">
          {clients.concat(clients).map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="h-16 flex items-center justify-center p-3 bg-white rounded-xl shadow-sm border border-slate-200/80 shrink-0 transition-transform hover:scale-105"
              style={{ width: `${item.width + 40}px` }}
            >
              <div className="relative w-full h-10">
                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
