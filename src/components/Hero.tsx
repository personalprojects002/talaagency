'use client';

import React from 'react';
import { ArrowRight, Play, CheckCircle2, ShieldCheck, Sparkles, TrendingUp, Users, Video } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-gradient-hero">
      
      {/* Glow Background Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs font-semibold text-gray-300 tracking-wide uppercase">
                Full-Service Social Media & In-House Studio Agency
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Stop Posting Randomly. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
                Turn Social Media Into Qualified Clients.
              </span>
            </h1>

            {/* Human Copy Description */}
            <p className="text-lg sm:text-xl text-gray-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We engineer full social media growth engines for <strong className="text-white font-semibold">Immigration Consultants, Law Firms, Educational Institutes, E-Commerce Brands, and Corporate Consultants</strong>. From high-end website development to in-house studio video production and targeted paid campaigns — built around your exact monthly budget.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a 
                href="#budget-planner"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-bold text-base shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Sparkles className="w-5 h-5 text-cyan-200" />
                <span>Calculate Strategy by Budget</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a 
                href="#studio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 font-semibold text-base backdrop-blur-md transition-all hover:border-blue-500/40"
              >
                <Video className="w-5 h-5 text-blue-400" />
                <span>View In-House Studio</span>
              </a>
            </div>

            {/* Agency Trust Highlights */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <h4 className="text-2xl font-black text-white">500+</h4>
                <p className="text-xs text-gray-400 font-medium">Projects Delivered</p>
              </div>
              <div>
                <h4 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">In-House</h4>
                <p className="text-xs text-gray-400 font-medium">Production Studio</p>
              </div>
              <div>
                <h4 className="text-2xl font-black text-emerald-400">98%</h4>
                <p className="text-xs text-gray-400 font-medium">Client Retention</p>
              </div>
            </div>

          </div>

          {/* Right Hero Card / Visual Interactive Widget */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Interactive Agency Card */}
            <div className="relative glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">NVC Performance Engine</h3>
                    <p className="text-xs text-gray-400">Pakistan-based Agency & Global Execution</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  LIVE ROI LOG
                </span>
              </div>

              {/* Target Vertical Selector Preview Card */}
              <div className="bg-[#0B0C14] rounded-2xl p-5 border border-white/5 space-y-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Tailored Strategic Pillars For Your Business
                </p>
                
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 text-sm">
                    <span className="text-gray-200 font-medium flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-cyan-400" />
                      Immigration & Education Consultants
                    </span>
                    <span className="text-xs font-bold text-emerald-400">+340% Lead Enquiries</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 text-sm">
                    <span className="text-gray-200 font-medium flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-purple-400" />
                      Law Firms & Legal Services
                    </span>
                    <span className="text-xs font-bold text-blue-400">Authority & Consults</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 text-sm">
                    <span className="text-gray-200 font-medium flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-orange-400" />
                      E-Commerce Stores & Amazon
                    </span>
                    <span className="text-xs font-bold text-cyan-400">4.8x ROAS Campaigns</span>
                  </div>
                </div>
              </div>

              {/* In-House Studio Badge */}
              <div className="flex items-center justify-between pt-2 text-xs text-gray-400">
                <span className="flex items-center gap-1.5 font-medium text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  In-House Camera & Editing Crew
                </span>
                <span className="text-gray-500">Kamoke, Gujranwala, PK</span>
              </div>

            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-4 rounded-2xl bg-[#121422] border border-blue-500/30 shadow-2xl">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Full Social Handling</p>
                <p className="text-[11px] text-gray-400">Strategy, Video, Ads & Notion Leads</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
