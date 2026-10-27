"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, PanInfo } from "framer-motion";
import { Move } from "lucide-react";

export const DraggableWhatsApp: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [constraints, setConstraints] = useState({ top: -500, left: -300, right: 0, bottom: 0 });
  const isDraggingRef = useRef(false);
  const dragDistanceRef = useRef(0);

  useEffect(() => {
    setMounted(true);

    const updateConstraints = () => {
      if (typeof window === "undefined") return;
      const buttonSize = 56;
      const marginX = 16;
      const marginTop = 90; // Keep below top navigation
      const currentBottom = 80; // matches bottom-20 (80px)

      setConstraints({
        top: -(window.innerHeight - currentBottom - buttonSize - marginTop),
        left: -(window.innerWidth - buttonSize - marginX * 2),
        right: 0,
        bottom: 10,
      });
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, []);

  if (!mounted) return null;

  const handleDragStart = () => {
    isDraggingRef.current = true;
    dragDistanceRef.current = 0;
  };

  const handleDrag = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    dragDistanceRef.current = Math.hypot(info.offset.x, info.offset.y);
  };

  const handleDragEnd = () => {
    // Keep isDragging true briefly to suppress trailing click event
    setTimeout(() => {
      isDraggingRef.current = false;
      dragDistanceRef.current = 0;
    }, 150);
  };

  const handleClick = (e: React.MouseEvent) => {
    // If the user dragged more than 6px, treat as move rather than click
    if (isDraggingRef.current || dragDistanceRef.current > 6) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    window.open(
      "https://wa.me/2349036130587?text=Hello%20Masterview%20Consults%20Engineering,%20I%20would%20like%20to%20inquire%20about%20your%20services.",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <motion.div
      drag
      dragConstraints={constraints}
      dragElastic={0.15}
      dragMomentum={false}
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      onClick={handleClick}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      whileDrag={{ scale: 1.15, cursor: "grabbing" }}
      className="fixed bottom-20 right-4 sm:bottom-7 sm:right-7 z-40 cursor-grab active:cursor-grabbing select-none touch-none group"
      title="Chat on WhatsApp (Moveable — drag anywhere on screen)"
      aria-label="Direct WhatsApp Support (Moveable)"
    >
      {/* Tooltip on Desktop Hover */}
      <div className="absolute -top-8 right-1/2 translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:flex items-center gap-1 bg-slate-900/95 text-white text-[10px] font-bold py-1 px-2.5 rounded-full shadow-lg whitespace-nowrap border border-slate-700/60">
        <Move className="w-2.5 h-2.5 text-amber-400" />
        <span>Drag to move</span>
      </div>

      {/* Pulsing ring animation */}
      <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-25 animate-ping pointer-events-none" />

      {/* Main WhatsApp Button */}
      <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl flex items-center justify-center transition-colors">
        <svg className="w-6 h-6 sm:w-8 sm:h-8 fill-current drop-shadow-sm" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>

        {/* Small subtle drag grip badge */}
        <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-slate-900 border border-white/50 text-white flex items-center justify-center shadow-sm">
          <Move className="w-2.5 h-2.5 text-amber-400" />
        </span>
      </div>
    </motion.div>
  );
};
