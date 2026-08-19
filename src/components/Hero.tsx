'use client';

import React from 'react';
import { ArrowRight, Play, CheckCircle2, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 bg-white overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Main Condensed Headline matching Image 1 */}
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-sociallyin-blue tracking-tight leading-[1.05] uppercase">
              THE <span className="yellow-mark">SOCIAL MEDIA</span> AGENCY WITH AN IN-HOUSE STUDIO
            </h1>

            {/* Subhead */}
            <p className="text-lg sm:text-xl text-sociallyin-textMuted font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We are a social-first agency with our own in-house video production studio — strategy, content production, paid social & ROI reporting for <strong className="text-sociallyin-textDark">Immigration Consultants, Law Firms, Educational Academies & E-Commerce Brands</strong>.
            </p>

            {/* CTA Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#proposal-form" 
                className="btn-yellow text-xl px-9 py-4 rounded-md shadow-xl"
              >
                <span>LET'S DRIVE GROWTH TOGETHER</span>
                <ArrowRight className="w-5 h-5 stroke-[3]" />
              </a>

              <a 
                href="#studio" 
                className="inline-flex items-center gap-2 font-heading text-lg font-bold text-sociallyin-blue hover:text-sociallyin-darkBlue uppercase tracking-wider underline underline-offset-4"
              >
                <Play className="w-4 h-4 fill-sociallyin-blue" />
                <span>EXPLORE IN-HOUSE STUDIO</span>
              </a>
            </div>

            {/* Agency Highlights Pills */}
            <div className="pt-6 grid grid-cols-3 gap-4 text-center lg:text-left border-t border-blue-100">
              <div>
                <h4 className="font-heading text-3xl font-bold text-sociallyin-blue">500+</h4>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Brands Served</p>
              </div>
              <div>
                <h4 className="font-heading text-3xl font-bold text-sociallyin-yellow">IN-HOUSE</h4>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Studio Camera Crew</p>
              </div>
              <div>
                <h4 className="font-heading text-3xl font-bold text-sociallyin-blue">PAKISTAN</h4>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Kamoke HQ & Global</p>
              </div>
            </div>

          </div>

          {/* Right Column: Arch Oval Frame Mockup matching Image 1 */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Arch-shaped Blue Cut-Out Frame matching Image 1 */}
            <div className="relative w-full max-w-md aspect-[4/5] bg-sociallyin-blue arch-frame p-6 flex flex-col items-center justify-center shadow-2xl">
              
              <div className="w-full h-full bg-white/10 rounded-2xl backdrop-blur-sm p-4 border border-white/20 flex flex-col items-center justify-center text-center space-y-4">
                
                {/* Phone Mockup Image Frame */}
                <div className="relative w-48 h-80 rounded-3xl bg-black border-4 border-white shadow-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=900&fit=crop" 
                    alt="In-House Studio Production" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3 text-left">
                    <span className="text-[10px] font-bold text-sociallyin-yellow uppercase tracking-widest">NVC STUDIO REEL</span>
                    <p className="text-xs font-bold text-white leading-tight">Cinematic 4K Shoot</p>
                  </div>
                </div>

                <div className="text-white space-y-1">
                  <h3 className="font-heading text-xl font-bold uppercase tracking-wider">IN-HOUSE STUDIO CREW</h3>
                  <p className="text-xs text-blue-100 font-medium">Kamoke, Gujranwala, Pakistan</p>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Partner Logos Banner matching Image 1 */}
        <div className="mt-16 pt-10 border-t border-gray-200">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
            TRUSTED PARTNERS & CERTIFIED NETWORK
          </p>

          <div className="flex items-center justify-center gap-10 flex-wrap opacity-75 grayscale hover:grayscale-0 transition-all">
            <span className="font-heading text-2xl font-extrabold tracking-widest text-gray-800">ASUS</span>
            <span className="font-heading text-2xl font-extrabold tracking-widest text-sociallyin-blue">SAMSUNG</span>
            <span className="font-heading text-2xl font-extrabold tracking-widest text-blue-600">META PARTNER</span>
            <span className="font-heading text-2xl font-extrabold tracking-widest text-black">TikTok Ads</span>
            <span className="font-heading text-2xl font-extrabold tracking-widest text-blue-700">LinkedIn Partner</span>
            <span className="font-heading text-2xl font-extrabold tracking-widest text-red-600">Google Ads</span>
          </div>
        </div>

      </div>
    </section>
  );
}
