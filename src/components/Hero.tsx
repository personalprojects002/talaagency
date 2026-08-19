'use client';

import React from 'react';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-14 bg-white overflow-hidden">
      {/* Container with max-w-7xl */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Headline & Content with 50px left padding */}
          <div className="lg:col-span-7 space-y-4 text-center lg:text-left pl-4 lg:pl-[50px]">
            
            {/* Compact Headline */}
            <h1 className="leading-none">
              <span className="hero-title-blue">THE </span>
              <span className="yellow-underline-stroke hero-title-yellow">SOCIAL MEDIA</span>
              <br />
              <span className="hero-title-blue">AGENCY DRIVING</span>
              <br />
              <span className="hero-title-blue">MEASURABLE GROWTH</span>
            </h1>

            {/* Compact Subhead */}
            <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
              <strong className="text-sociallyin-blue font-bold">Stop Guessing, Start Growing:</strong> Partner with Next Vision Creators (NVC) — A Social Marketing Agency Focused on Your Bottom Line
            </p>

            {/* Compact Yellow CTA Button */}
            <div className="pt-2 flex justify-center lg:justify-start">
              <a 
                href="#proposal-form" 
                className="btn-yellow text-base px-7 py-3 rounded-xl shadow-md"
              >
                LET'S DRIVE GROWTH TOGETHER
              </a>
            </div>

            {/* Agency Trust Badges with 25+ Brands Served */}
            <div className="pt-4 grid grid-cols-3 gap-3 text-center lg:text-left border-t border-gray-100 max-w-md">
              <div>
                <h4 className="font-gothic text-2xl font-normal text-sociallyin-blue">25+</h4>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider font-sans">Brands Served</p>
              </div>
              <div>
                <h4 className="font-gothic text-2xl font-normal text-sociallyin-yellow">100%</h4>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider font-sans">Custom Content</p>
              </div>
              <div>
                <h4 className="font-gothic text-2xl font-normal text-sociallyin-blue">PAKISTAN</h4>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider font-sans">Kamoke HQ & Global</p>
              </div>
            </div>

          </div>

          {/* Right Side Oval Blob cutout & phone mockup */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            
            {/* Blue Blob & Phone Container */}
            <div className="relative w-full max-w-xs aspect-[4/5] flex items-center justify-center">
              
              {/* Organic Blue Blob Shape */}
              <div className="absolute inset-2 bg-sociallyin-blue rounded-[40%_60%_70%_30%/40%_50%_60%_50%] shadow-lg" />

              {/* Smartphone Mockup */}
              <div className="relative z-10 w-44 h-80 rounded-[32px] bg-black border-4 border-white shadow-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=900&fit=crop" 
                  alt="Social Media Reel Campaign" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3 text-left">
                  <span className="text-[9px] font-bold text-sociallyin-yellow uppercase tracking-widest font-sans">NVC CAMPAIGNS</span>
                  <p className="font-gothic text-base text-white leading-none uppercase">High-ROAS Ad Strategy</p>
                </div>
              </div>

            </div>

            {/* Hand-drawn line accent */}
            <svg className="w-full max-w-xs h-5 text-gray-800 -mt-2" viewBox="0 0 300 20" fill="none">
              <path d="M5 15 C 80 5, 220 25, 295 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>

          </div>

        </div>

        {/* Compact Partner Logos */}
        <div className="mt-10 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-center gap-6 flex-wrap opacity-75 font-gothic text-xl font-normal tracking-widest text-gray-700">
            <span className="text-gray-900">ASUS</span>
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
