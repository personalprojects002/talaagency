'use client';

import React from 'react';
import { HelpCircle, AlertCircle, TrendingDown, VideoOff } from 'lucide-react';

const problems = [
  {
    title: 'IS YOUR CONTENT GETTING LOW REACH?',
    desc: 'Posting daily but getting zero organic traction? Algorithms favor high-retention video content, not static images.'
  },
  {
    title: 'STUCK WITH LOW CONVERSION & INQUIRIES?',
    desc: 'Getting views but no actual client bookings? Without clear lead funnels and CTAs, social traffic is wasted.'
  },
  {
    title: 'NOT ENOUGH IN-HOUSE VIDEO CREATIVES?',
    desc: 'Struggling to record videos yourself or relying on stock clips? Authentic studio shoots build instant trust.'
  },
  {
    title: 'PAID ADS NOT GENERATING HIGH ROAS?',
    desc: 'Spending money on Facebook/Instagram ads with no qualified inquiries? Ad creatives need strategic A/B testing.'
  }
];

export default function ProblemSection() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-sociallyin-blue uppercase tracking-tight mb-12">
          TIRED OF SOCIAL MEDIA EFFORTS THAT DON'T DELIVER?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((prob, idx) => (
            <div 
              key={idx}
              className="sociallyin-card p-6 flex flex-col justify-between text-left space-y-4"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-sociallyin-blue flex items-center justify-center font-bold">
                <AlertCircle className="w-6 h-6" />
              </div>

              <h3 className="font-heading text-xl font-bold text-sociallyin-blue uppercase tracking-wide leading-snug">
                {prob.title}
              </h3>

              <p className="text-xs text-sociallyin-textMuted font-medium leading-relaxed">
                {prob.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
