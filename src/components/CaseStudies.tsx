'use client';

import React from 'react';
import { TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';

const caseStudiesData = [
  {
    id: 1,
    industry: 'Immigration & Visas',
    badge: '+340% MONTHLY LEAD INCREASE',
    client: 'Global Immigration Consultancy',
    desc: 'Transformed an inactive Facebook page into a high-volume lead machine for UK & Canada study visa applicants using video testimonials & custom landing pages.',
    stats: [
      '142 Consultation Inquiries in 60 days',
      '$4.20 Cost Per Qualified Lead',
      '100% Leads Direct to WhatsApp & CRM'
    ]
  },
  {
    id: 2,
    industry: 'Legal Services',
    badge: '185K+ MONTHLY REEL VIEWS',
    client: 'Khan & Associates Law Firm',
    desc: 'Shot 12 in-studio legal advisory shorts explaining employment and corporate law, positioning the senior partners as top regional legal experts.',
    stats: [
      '32 Direct Retainer Consultations',
      'Awarded Best Legal Social Presence',
      'Built 12K Targeted Local Followers'
    ]
  },
  {
    id: 3,
    industry: 'Educational Institute',
    badge: '240 STUDENTS ENROLLED',
    client: 'TechSkills Training Academy',
    desc: 'Ran high-energy admissions video ad campaign across Instagram & TikTok for the summer IT & video editing certification batches.',
    stats: [
      'Batch Filled 2 Weeks Ahead of Intake',
      '3.8x Return on Ad Spend',
      'Direct WhatsApp Enrollment Automated'
    ]
  },
  {
    id: 4,
    industry: 'E-Commerce Brand',
    badge: '4.8x META & TIKTOK ROAS',
    client: 'Aura Lifestyle E-Commerce',
    desc: 'Shot aesthetic product showcase video ads in our studio and created a fast Shopify store experience optimized for mobile checkouts.',
    stats: [
      'PKR 4.2M Sales in 30 Days',
      'Reduced Cart Abandonment by 35%',
      'Retargeting Campaign Converted at 8.4%'
    ]
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
        
        <div className="space-y-3 mb-14">
          <span className="font-gothic text-xl font-normal text-sociallyin-blue uppercase tracking-widest bg-blue-50 px-4 py-1 rounded-full border border-blue-200 inline-block">
            PROVEN CLIENT RESULTS
          </span>

          <h2 className="font-gothic text-4xl sm:text-5xl lg:text-6xl font-normal text-sociallyin-blue uppercase tracking-tight leading-none">
            REAL PROOF. REAL NUMBERS. <span className="yellow-underline-stroke hero-title-yellow">ZERO FLUFF.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-sans max-w-2xl mx-auto font-medium">
            See how our tailored social media handling, studio video production, and paid ads generate growth for clients in Pakistan and worldwide.
          </p>
        </div>

        {/* 4 Case Study Cards */}
        <div className="grid sm:grid-cols-2 gap-8 text-left">
          {caseStudiesData.map((study) => (
            <div 
              key={study.id}
              className="sociallyin-card p-8 bg-white flex flex-col justify-between space-y-6 border-2 border-[#C2DBFE] hover:border-sociallyin-blue rounded-2xl shadow-sm hover:shadow-xl transition-all"
            >
              <div className="space-y-4">
                
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-xs font-extrabold text-sociallyin-blue uppercase tracking-wider font-sans bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">
                    {study.industry}
                  </span>
                  <span className="text-xs font-bold uppercase bg-[#FFD000] text-black px-3 py-1 rounded-lg font-sans">
                    {study.badge}
                  </span>
                </div>

                <h3 className="font-gothic text-3xl font-normal text-sociallyin-blue uppercase leading-tight pt-1">
                  {study.client}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 font-sans font-medium leading-relaxed">
                  {study.desc}
                </p>

                <div className="space-y-2 pt-2 border-t border-gray-100">
                  {study.stats.map((st, stIdx) => (
                    <div key={stIdx} className="flex items-center gap-2 text-xs font-semibold font-sans text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{st}</span>
                    </div>
                  ))}
                </div>

              </div>

              <div>
                <a 
                  href="#proposal-form" 
                  className="btn-yellow text-lg px-6 py-2.5 rounded-xl w-full sm:w-auto justify-center"
                >
                  <span>GET STRATEGY LIKE THIS</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
