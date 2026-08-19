'use client';

import React from 'react';
import { Users, Share2, Compass, CheckCircle2, ArrowRight } from 'lucide-react';

const chooseCards = [
  {
    icon: Users,
    title: 'DEDICATED CREATIVE & AD SPECIALISTS',
    subtitle: 'Customized Strategies, Not Cookie-Cutter Templates',
    points: [
      'Experienced Ad Strategists, Video Editors & Copywriters',
      'High-Converting Ad Creatives Tailored for Your Industry',
      'Dedicated Account Managers for Seamless Communication'
    ]
  },
  {
    icon: Share2,
    title: 'OMNICHANNEL SOCIAL MEDIA DOMINANCE',
    subtitle: 'Multi-Platform Growth Across Facebook, IG & TikTok',
    points: [
      'Strategic Content Activation Across Meta, TikTok & YouTube',
      'High-CTR Graphic Thumbnails & Engaging Short Reels',
      'Consistent Brand Voice & Active Audience Community Growth'
    ]
  },
  {
    icon: Compass,
    title: 'COMPREHENSIVE COMPETITOR & AUDIENCE AUDITS',
    subtitle: 'In-Depth Market Intelligence for Maximum Growth',
    points: [
      'In-Depth Industry Vertical & Competitor Benchmarking',
      'High-Intent Target Audience Profiling & Persona Mapping',
      'Clear Monthly Growth Analytics & Strategic Recommendations'
    ]
  }
];

export default function WhyChooseSection() {
  return (
    <section id="why-choose" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <span className="font-gothic text-lg font-normal text-sociallyin-blue uppercase tracking-widest bg-blue-50 px-3.5 py-0.5 rounded-full border border-blue-200 inline-block">
            THE NVC ADVANTAGE
          </span>

          <h2 className="font-gothic text-3xl sm:text-4xl lg:text-5xl font-normal text-sociallyin-blue uppercase tracking-tight leading-none">
            WHY CHOOSE NVC AS YOUR <span className="yellow-underline-stroke hero-title-yellow">SOCIAL MEDIA AGENCY?</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-sans max-w-2xl mx-auto font-medium">
            Proven campaigns. Specialized industry strategies. Consistent client growth.
          </p>
        </div>

        {/* 3 Why Choose Cards */}
        <div className="grid md:grid-cols-3 gap-6 text-left mb-12">
          {chooseCards.map((card, idx) => (
            <div 
              key={idx}
              className="sociallyin-card p-6 bg-[#F8FAFC] border-2 border-[#C2DBFE] hover:border-sociallyin-blue flex flex-col justify-between space-y-4 rounded-xl shadow-sm hover:shadow-lg transition-all"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-sociallyin-blue flex items-center justify-center font-bold">
                  <card.icon className="w-5 h-5" />
                </div>

                <h3 className="font-gothic text-2xl font-normal text-sociallyin-blue uppercase leading-snug">
                  {card.title}
                </h3>

                <p className="text-xs font-bold text-slate-800 font-sans">
                  {card.subtitle}
                </p>

                <div className="space-y-2 pt-2 border-t border-blue-200">
                  {card.points.map((pt, ptIdx) => (
                    <div key={ptIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium font-sans">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sociallyin-blue shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div>
          <a 
            href="#proposal-form" 
            className="btn-yellow text-lg px-8 py-3 rounded-xl shadow-lg"
          >
            <span>PARTNER WITH NVC TODAY</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </a>
        </div>

      </div>
    </section>
  );
}
