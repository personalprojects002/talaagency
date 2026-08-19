'use client';

import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923316996815?text=Hello%20Next%20Vision%20Creators!%20I%20want%20to%20grow%20my%20business."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 bg-emerald-500 hover:bg-emerald-600 text-white w-11 h-11 rounded-full shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center border border-white group"
    >
      <MessageSquare className="w-5 h-5 fill-white text-emerald-500" />
      
      {/* Tooltip on Hover */}
      <span className="absolute right-full mr-2.5 bg-slate-900 text-white text-[11px] font-bold font-sans px-2.5 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
        WhatsApp Us
      </span>
    </a>
  );
}
