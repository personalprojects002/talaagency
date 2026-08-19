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
      className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center border-2 border-white group"
    >
      <MessageSquare className="w-6 h-6 fill-white text-emerald-500" />
      
      {/* Tooltip on Hover */}
      <span className="absolute right-full mr-3 bg-slate-900 text-white text-xs font-bold font-sans px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
        Chat on WhatsApp
      </span>
    </a>
  );
}
