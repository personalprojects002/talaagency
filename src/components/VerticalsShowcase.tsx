'use client';

import React, { useState } from 'react';
import { Plane, Gavel, GraduationCap, ShoppingBag, Briefcase, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

const verticalsData = [
  {
    id: 'immigration',
    title: 'Immigration & Visa Consultants',
    icon: Plane,
    badge: 'High Lead Conversion',
    color: 'from-blue-500 to-cyan-400',
    description: 'Immigration clients demand total trust and clear legal path clarity. We build high-converting lead funnels, client testimonial video reels, and targeted Meta/Google ads for study visas, work permits, and residency programs.',
    deliverables: [
      'High-converting visa application landing pages & websites',
      'Client success video interview production in studio',
      'Targeted Facebook, Instagram & TikTok lead forms',
      'Daily social handling & trust-building Q&A posts'
    ],
    strategyFocus: 'Lead Generation & Trust Blueprint'
  },
  {
    id: 'lawyers',
    title: 'Law Firms & Lawyers',
    icon: Gavel,
    badge: 'Authority & Consultations',
    color: 'from-purple-500 to-indigo-400',
    description: 'Establish undisputed legal authority in your city and region. We record crisp legal explainer reels, design executive law firm websites, and run consultation appointment booking campaigns.',
    deliverables: [
      'Modern, authoritative law firm website & branding',
      'Scripted legal advisory short-form video reels',
      'Local SEO & Google Business profile optimization',
      'Direct consultation appointment funnels'
    ],
    strategyFocus: 'Authority & Client Consultation Engine'
  },
  {
    id: 'institutes',
    title: 'Educational Institutes & Academies',
    icon: GraduationCap,
    badge: 'Student Admissions',
    color: 'from-emerald-500 to-teal-400',
    description: 'Fill batch admissions and online courses consistently. We build high-energy student enrollment campaigns, campus highlight videos, and admissions strategy funnels.',
    deliverables: [
      'Academy landing pages with instant WhatsApp enrollment',
      'Course breakdown videos & student testimonial showcases',
      'Targeted ad campaigns timing major semester intakes',
      'Full social channel management and community engagement'
    ],
    strategyFocus: 'Admission & Course Growth Blueprint'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Brands & Amazon Sellers',
    icon: ShoppingBag,
    badge: '4x+ ROAS Ads',
    color: 'from-rose-500 to-pink-400',
    description: 'Transform scroll-stoppers into product sales. We produce high-impact product video ads in our studio, optimize Shopify/Amazon store listings, and run revenue-focused ad campaigns.',
    deliverables: [
      'In-house studio product photography & video ads',
      'High-converting Shopify store design & optimization',
      'Meta, TikTok & Google Shopping ad management',
      'Retargeting funnels & customer review campaigns'
    ],
    strategyFocus: 'Sales Scale & Revenue Funnels'
  },
  {
    id: 'consulting',
    title: 'Corporate Consulting Companies',
    icon: Briefcase,
    badge: 'B2B Lead Generation',
    color: 'from-amber-500 to-orange-400',
    description: 'Position your consultancy as the premier industry partner. We optimize executive LinkedIn profiles, create insightful B2B content, and build corporate lead generation pipelines.',
    deliverables: [
      'Executive B2B corporate website & portfolio',
      'Thought-leadership articles & infographics',
      'LinkedIn outbound engagement & ad campaigns',
      'Whitepaper & consultation lead magnet funnels'
    ],
    strategyFocus: 'B2B Authority & Client Acquisition'
  }
];

export default function VerticalsShowcase() {
  const [selectedVertical, setSelectedVertical] = useState(verticalsData[0].id);

  const active = verticalsData.find(v => v.id === selectedVertical) || verticalsData[0];
  const IconComponent = active.icon;

  return (
    <section id="verticals" className="py-24 bg-[#0A0B12] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Tailored Industry Expertise
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Built Specifically For Your Industry Vertical
          </h2>

          <p className="text-gray-300 text-base sm:text-lg">
            We don't use generic templates. Every strategy, website build, and content calendar is customized for your target client profile.
          </p>
        </div>

        {/* Vertical Tabs Bar */}
        <div className="mt-12 flex items-center justify-center gap-3 flex-wrap">
          {verticalsData.map((vert) => {
            const Icon = vert.icon;
            const isSelected = vert.id === selectedVertical;
            return (
              <button
                key={vert.id}
                onClick={() => setSelectedVertical(vert.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 ${
                  isSelected
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25 scale-[1.03]'
                    : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-blue-400'}`} />
                <span>{vert.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Vertical Detail Card */}
        <div className="mt-10 glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl transition-all duration-500">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${active.color} p-[2px]`}>
                  <div className="w-full h-full bg-[#0D0E17] rounded-[14px] flex items-center justify-center text-white">
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">{active.badge}</span>
                  <h3 className="text-2xl font-bold text-white">{active.title}</h3>
                </div>
              </div>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                {active.description}
              </p>

              {/* Key Deliverables */}
              <div className="space-y-3 pt-2">
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400">Core Deliverables & Execution:</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {active.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-sm text-gray-200">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 flex items-center gap-4">
                <a
                  href="#budget-planner"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-500/25"
                >
                  <span>Build {active.title} Strategy</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#0B0C14] rounded-2xl p-6 border border-white/10 space-y-5">
                
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs font-bold text-gray-400 uppercase">Growth Blueprint</span>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300">
                    {active.strategyFocus}
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
                    <p className="text-xs text-gray-400 font-semibold">1. Web & Digital Presence</p>
                    <p className="text-sm font-medium text-white">Custom Website + Landing Pages Built for Mobile Conversion</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
                    <p className="text-xs text-gray-400 font-semibold">2. Content & Studio Reel Production</p>
                    <p className="text-sm font-medium text-white">In-House Shot High-Quality Short Videos & Educational Reels</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
                    <p className="text-xs text-gray-400 font-semibold">3. Paid Growth & Lead Capture</p>
                    <p className="text-sm font-medium text-white">Targeted Meta/TikTok Ad Campaigns Direct to Notion Leads</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
