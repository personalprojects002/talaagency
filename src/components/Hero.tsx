'use client';

import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-14 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column Text & CTAs */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-sociallyin-blue tracking-tight leading-tight uppercase">
              THE <span className="yellow-mark">SOCIAL MEDIA</span> AGENCY WITH AN IN-HOUSE STUDIO
            </h1>

            {/* Crisp Clear Description */}
            <p className="text-base sm:text-lg text-sociallyin-textMuted font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              We engineer full social media growth engines for <strong className="text-sociallyin-textDark font-bold">Immigration Consultants, Law Firms, Academies, and E-Commerce Brands</strong> — combining 4K studio video production, custom web building, and high-ROAS ad campaigns built around your budget.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#proposal-form" 
                className="btn-yellow text-lg px-8 py-3.5 rounded-md shadow-lg"
              >
                <span>GET FREE PROPOSAL</span>
                <ArrowRight className="w-5 h-5 stroke-[3]" />
              </a>

              <a 
                href="#studio" 
                className="inline-flex items-center gap-2 font-heading text-base font-bold text-sociallyin-blue hover:text-sociallyin-darkBlue uppercase tracking-wider underline underline-offset-4"
              >
                <Play className="w-4 h-4 fill-sociallyin-blue" />
                <span>EXPLORE IN-HOUSE STUDIO</span>
              </a>
            </div>

            {/* Compact Metrics */}
            <div className="pt-4 grid grid-cols-3 gap-4 text-center lg:text-left border-t border-blue-100">
              <div>
                <h4 className="font-heading text-2xl font-bold text-sociallyin-blue">500+</h4>
                <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Brands Served</p>
              </div>
              <div>
                <h4 className="font-heading text-2xl font-bold text-sociallyin-yellow">IN-HOUSE</h4>
                <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Studio Camera Crew</p>
              </div>
              <div>
                <h4 className="font-heading text-2xl font-bold text-sociallyin-blue">PAKISTAN</h4>
                <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Kamoke HQ & Global</p>
              </div>
            </div>

          </div>

          {/* Right Column: Compact Arch Oval Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] bg-sociallyin-blue arch-frame p-5 flex flex-col items-center justify-center shadow-xl">
              <div className="w-full h-full bg-white/10 rounded-xl backdrop-blur-sm p-3 border border-white/20 flex flex-col items-center justify-center text-center space-y-3">
                
                {/* Phone Mockup Frame */}
                <div className="relative w-40 h-64 rounded-2xl bg-black border-4 border-white shadow-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=900&fit=crop" 
                    alt="In-House Studio Production" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-2.5 text-left">
                    <span className="text-[9px] font-bold text-sociallyin-yellow uppercase tracking-widest">NVC STUDIO REEL</span>
                    <p className="text-xs font-bold text-white leading-tight">Cinematic Shoot</p>
                  </div>
                </div>

                <div className="text-white space-y-0.5">
                  <h3 className="font-heading text-lg font-bold uppercase tracking-wider">IN-HOUSE STUDIO CREW</h3>
                  <p className="text-[11px] text-blue-100 font-medium">Kamoke, Gujranwala, Pakistan</p>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Compact Partner Logos */}
        <div className="mt-10 pt-6 border-t border-gray-200">
          <p className="text-center text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">
            TRUSTED PARTNERS & CERTIFIED NETWORK
          </p>
          <div className="flex items-center justify-center gap-8 flex-wrap opacity-75 font-heading text-xl font-bold tracking-widest text-gray-700">
            <span>ASUS</span>
            <span className="text-sociallyin-blue">SAMSUNG</span>
            <span className="text-blue-600">META PARTNER</span>
            <span className="text-black">TikTok Ads</span>
            <span className="text-blue-700">LinkedIn Partner</span>
            <span className="text-red-600">Google Ads</span>
          </div>
        </div>

      </div>
    </section>
  );
}
