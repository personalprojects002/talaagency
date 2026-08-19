'use client';

import React from 'react';
import { Camera, Film, Mic, Sparkles, ArrowRight, Video } from 'lucide-react';

const studioFeatures = [
  {
    icon: Camera,
    title: 'CINEMATIC 4K CAMERAS & GEAR',
    desc: 'Commercial-grade 4K camera setups, prime lenses, wireless audio, and motorized gimbals for crystal-clear visual quality.'
  },
  {
    icon: Film,
    title: 'CREATIVE EDITING & COLOR GRADING',
    desc: 'Dedicated post-production using Premiere Pro and DaVinci Resolve for Hollywood-level color grading, motion graphics, and pacing.'
  },
  {
    icon: Mic,
    title: 'PODCAST & AUDIO PRODUCTION',
    desc: 'Acoustically balanced podcast setups equipped with broadcast Shure microphones for crisp interviews and voiceovers.'
  },
  {
    icon: Video,
    title: 'PRODUCT SHOWCASE & LIGHTING',
    desc: 'Custom studio backdrop setups, softboxes, and macro lenses built specifically for E-Commerce & brand product reels.'
  }
];

export default function StudioShowcase() {
  return (
    <section id="studio" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-sociallyin-blue font-gothic text-xl font-normal uppercase tracking-wider mb-6">
          <Sparkles className="w-4 h-4 fill-sociallyin-blue" />
          <span>NVC CREATIVE PRODUCTIONS</span>
        </div>

        {/* Headline */}
        <h2 className="font-gothic text-4xl sm:text-5xl lg:text-6xl font-normal text-sociallyin-blue uppercase tracking-tight leading-none mb-4">
          <span className="yellow-underline-stroke hero-title-yellow">CREATIVE VIDEO PRODUCTION</span> & AD CREATIVE STUDIO
        </h2>

        <p className="font-sans text-xl font-bold text-sociallyin-blue mb-3">
          High-Impact Reels. Expert Editing. Cinematic Quality That Commands Attention.
        </p>

        <p className="font-sans text-base text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto mb-14">
          Next Vision Creators (NVC) partners with top production teams & specialized video creators in Pakistan and globally to deliver 4K video reels, ad creatives, and color-graded videos for client campaigns — ensuring ultimate creative control.
        </p>

        {/* 4 Stat Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mb-14">
          <div className="sociallyin-card p-4 text-center bg-white border border-blue-200">
            <h4 className="font-gothic text-3xl text-sociallyin-blue">4K</h4>
            <p className="text-xs font-bold text-slate-700 uppercase font-sans">Cinematic Production</p>
          </div>
          <div className="sociallyin-card p-4 text-center bg-white border border-blue-200">
            <h4 className="font-gothic text-3xl text-sociallyin-yellow">100%</h4>
            <p className="text-xs font-bold text-slate-700 uppercase font-sans">Custom Content</p>
          </div>
          <div className="sociallyin-card p-4 text-center bg-white border border-blue-200">
            <h4 className="font-gothic text-3xl text-sociallyin-blue">500+</h4>
            <p className="text-xs font-bold text-slate-700 uppercase font-sans">Reels Produced</p>
          </div>
          <div className="sociallyin-card p-4 text-center bg-white border border-blue-200">
            <h4 className="font-gothic text-3xl text-sociallyin-blue">PROVEN</h4>
            <p className="text-xs font-bold text-slate-700 uppercase font-sans">ROAS Results</p>
          </div>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-12">
          {studioFeatures.map((feat, idx) => (
            <div key={idx} className="sociallyin-card p-6 flex flex-col justify-between space-y-4 bg-white border border-blue-200">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-sociallyin-blue flex items-center justify-center">
                  <feat.icon className="w-5 h-5" />
                </div>

                <h3 className="font-gothic text-2xl font-normal text-sociallyin-blue uppercase leading-snug">
                  {feat.title}
                </h3>

                <p className="text-xs text-slate-600 font-sans font-semibold leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div>
          <a 
            href="#proposal-form" 
            className="btn-yellow text-xl px-9 py-4 rounded-xl shadow-xl"
          >
            <span>BOOK A VIDEO CREATIVE SESSION</span>
            <ArrowRight className="w-5 h-5 stroke-[3]" />
          </a>
        </div>

      </div>
    </section>
  );
}
