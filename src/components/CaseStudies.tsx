'use client';

import React from 'react';
import { TrendingUp, Award, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const caseStudiesList = [
  {
    client: 'Global Immigration Consultancy',
    category: 'Immigration & Visas',
    stat: '+340%',
    statLabel: 'Monthly Lead Increase',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop',
    description: 'Transformed an inactive Facebook page into a high-volume lead machine for UK & Canada study visa applicants using video testimonials & custom landing pages.',
    results: ['142 Consultation Inquiries in 60 days', '$4.20 Cost Per Qualified Lead', '100% Leads Direct to WhatsApp & CRM']
  },
  {
    client: 'Khan & Associates Law Firm',
    category: 'Legal Services',
    stat: '185K+',
    statLabel: 'Monthly Reel Views',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=500&fit=crop',
    description: 'Shot 12 in-studio legal advisory shorts explaining employment and corporate law, positioning the senior partners as top regional legal experts.',
    results: ['32 Direct Retainer Consultations', 'Awarded Best Legal Social Presence', 'Built 12K Targeted Local Followers']
  },
  {
    client: 'TechSkills Training Academy',
    category: 'Educational Institute',
    stat: '240',
    statLabel: 'Students Enrolled',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=500&fit=crop',
    description: 'Ran high-energy admissions video ad campaign across Instagram & TikTok for the summer IT & video editing certification batches.',
    results: ['Batch Filled 2 Weeks Ahead of Intake', '3.8x Return on Ad Spend', 'Direct WhatsApp Enrollment Automated']
  },
  {
    client: 'Aura Lifestyle E-Commerce',
    category: 'E-Commerce Brand',
    stat: '4.8x',
    statLabel: 'Meta & TikTok ROAS',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop',
    description: 'Shot aesthetic product showcase video ads in our studio and created a fast Shopify store experience optimized for mobile checkouts.',
    results: ['PKR 4.2M Sales in 30 Days', 'Reduced Cart Abandonment by 35%', 'Retargeting Campaign Converted at 8.4%']
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-[#0A0B12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5" />
            Proven Client Results
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Real Proof. Real Numbers. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400">
              Zero Fluff.
            </span>
          </h2>

          <p className="text-gray-300 text-base sm:text-lg">
            See how our tailored social media handling, studio video production, and paid ads generate growth for clients in Pakistan and worldwide.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {caseStudiesList.map((cs, idx) => (
            <div 
              key={idx}
              className="glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-56 overflow-hidden group">
                  <img 
                    src={cs.image} 
                    alt={cs.client} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E17] via-[#0D0E17]/40 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-xs font-bold text-cyan-300">
                      {cs.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4 text-right">
                    <span className="text-3xl font-black text-white">{cs.stat}</span>
                    <p className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">{cs.statLabel}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 space-y-4">
                  <h3 className="text-xl font-bold text-white">{cs.client}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{cs.description}</p>

                  <div className="space-y-2 pt-2">
                    {cs.results.map((res, rIdx) => (
                      <div key={rIdx} className="flex items-center gap-2 text-xs text-gray-200 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-7 pt-0">
                <a 
                  href="#proposal-form"
                  className="w-full inline-flex items-center justify-between px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-white transition-all group"
                >
                  <span>Get Strategy Like This</span>
                  <ArrowUpRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
