'use client';

import React from 'react';

export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Headline & Content matching image 100% */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Headline with exact League Gothic font, blue & yellow underline stroke */}
            <h1 className="leading-none">
              <span className="hero-title-blue">THE </span>
              <span className="yellow-underline-stroke hero-title-yellow">SOCIAL MEDIA</span>
              <br />
              <span className="hero-title-blue">AGENCY WITH AN IN-</span>
              <br />
              <span className="hero-title-blue">HOUSE STUDIO</span>
            </h1>

            {/* Subhead matching image 100% */}
            <p className="text-xl sm:text-2xl text-slate-700 font-sans leading-snug max-w-xl mx-auto lg:mx-0">
              <strong className="text-sociallyin-blue font-extrabold">Stop Guessing, Start Growing:</strong> Partner with a Social Marketing Agency Focused on Your Bottom Line
            </p>

            {/* Yellow CTA Button matching image 100% */}
            <div className="pt-2 flex justify-center lg:justify-start">
              <a 
                href="#proposal-form" 
                className="btn-yellow text-xl px-8 py-3.5 rounded-xl shadow-xl"
              >
                LET'S DRIVE GROWTH TOGETHER
              </a>
            </div>

            {/* Agency Trust Badges */}
            <div className="pt-6 grid grid-cols-3 gap-4 text-center lg:text-left border-t border-gray-100 max-w-lg">
              <div>
                <h4 className="font-gothic text-3xl font-normal text-sociallyin-blue">500+</h4>
                <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider font-sans">Brands Served</p>
              </div>
              <div>
                <h4 className="font-gothic text-3xl font-normal text-sociallyin-yellow">IN-HOUSE</h4>
                <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider font-sans">Studio Camera Crew</p>
              </div>
              <div>
                <h4 className="font-gothic text-3xl font-normal text-sociallyin-blue">PAKISTAN</h4>
                <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider font-sans">Kamoke HQ & Global</p>
              </div>
            </div>

          </div>

          {/* Right Side Oval Blob cutout & phone mockup matching image 100% */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            
            {/* Blue Blob & Phone Container */}
            <div className="relative w-full max-w-md aspect-[4/5] flex items-center justify-center">
              
              {/* Organic Blue Blob Shape */}
              <div className="absolute inset-2 bg-sociallyin-blue rounded-[40%_60%_70%_30%/40%_50%_60%_50%] shadow-xl animate-pulse-slow" />

              {/* Smartphone Mockup matching image */}
              <div className="relative z-10 w-52 h-96 rounded-[36px] bg-black border-4 border-white shadow-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=900&fit=crop" 
                  alt="Studio Video Reel Playback" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3 text-left">
                  <span className="text-[9px] font-bold text-sociallyin-yellow uppercase tracking-widest font-sans">NVC STUDIO REEL</span>
                  <p className="font-gothic text-lg text-white leading-none uppercase">Cinematic Production</p>
                </div>
              </div>

            </div>

            {/* Hand-drawn line accent below mockup */}
            <svg className="w-full max-w-sm h-6 text-gray-800 -mt-2" viewBox="0 0 300 20" fill="none">
              <path d="M5 15 C 80 5, 220 25, 295 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>

          </div>

        </div>

        {/* Partner Logos matching image 100% */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-center gap-10 flex-wrap opacity-75 font-gothic text-2xl font-normal tracking-widest text-gray-700">
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
