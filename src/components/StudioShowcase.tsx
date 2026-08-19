'use client';

import React from 'react';
import { Camera, Film, Mic, Video, Award, CheckCircle2, Sparkles } from 'lucide-react';

const studioHighlights = [
  {
    icon: Camera,
    title: 'Cinematic 4K Cameras & Gear',
    desc: 'High-end cinema cameras, prime lenses, wireless audio, and motorized gimbals for commercial-grade quality.'
  },
  {
    icon: Film,
    title: 'In-House Editing & Color Grading',
    desc: 'Dedicated post-production suite using Premiere Pro and DaVinci Resolve for Hollywood-level color & pacing.'
  },
  {
    icon: Mic,
    title: 'Podcast & Audio Studio',
    desc: 'Acoustically treated podcast room equipped with Shure microphones for crisp interviews and voiceovers.'
  },
  {
    icon: Video,
    title: 'Product Photography & Lighting',
    desc: 'Custom studio backdrop setups, softboxes, and macro lenses built for E-Commerce & brand product reels.'
  }
];

export default function StudioShowcase() {
  return (
    <section id="studio" className="py-24 bg-[#0A0B12] relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative glass-panel rounded-3xl p-4 sm:p-6 border border-white/10 shadow-2xl">
              
              <div className="relative rounded-2xl overflow-hidden aspect-video group">
                <img 
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1000&h=600&fit=crop" 
                  alt="NVC In-House Video Production Studio" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080C] via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-xs font-semibold text-white">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    <span>NVC Studio Crew — Kamoke, PK</span>
                  </div>
                  <span className="text-xs font-bold text-cyan-400 bg-blue-900/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-cyan-500/30">
                    4K Cinematic Production
                  </span>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <h4 className="font-extrabold text-lg text-white">100%</h4>
                  <p className="text-[11px] text-gray-400">In-House Gear</p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <h4 className="font-extrabold text-lg text-cyan-400">500+</h4>
                  <p className="text-[11px] text-gray-400">Reels Produced</p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <h4 className="font-extrabold text-lg text-purple-400">0%</h4>
                  <p className="text-[11px] text-gray-400">Outsourced Work</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              An In-House Studio, Not Outsourced Work
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Real Cameras. Real Crew. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-blue-400">
                Cinematic Quality That Commands Attention.
              </span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Unlike traditional agencies that hire random freelancers or rely on stock footage, <strong className="text-white">Next Vision Creators (NVC) operates a full in-house production studio in Pakistan</strong>. From camera crew to sound engineers and video editors, everything is handled under one roof for ultimate quality control.
            </p>

            {/* Grid Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {studioHighlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2 hover:border-purple-500/30 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-white text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-400 leading-normal">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a 
                href="#proposal-form" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-purple-500/25 hover:scale-[1.02] transition-all"
              >
                <span>Book a Studio Production Session</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
