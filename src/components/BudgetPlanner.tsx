'use client';

import React, { useState } from 'react';
import { ArrowRight, Building2, DollarSign, Target } from 'lucide-react';

const verticals = [
  'Immigration & Visa Consultancy',
  'Law Firm & Legal Practice',
  'Educational Institute / Academy',
  'E-Commerce Brand / Amazon Store',
  'Corporate & Business Consulting',
  'Local Service Business',
];

const budgetTiers = [
  {
    id: 'starter',
    name: 'Growth Kickstart Plan',
    usd: '$300 - $500 / month',
    popular: false,
    website: 'High-Converting Landing Page (Next.js/React)',
    studio: '1 Shoot Session (8 Video Reels)',
    social: 'Facebook & Instagram Handling + Targeted Lead Ads',
    blueprint: 'Built for emerging brands seeking immediate qualified leads and a polished online presence.'
  },
  {
    id: 'scale',
    name: 'Scale & Authority Blueprint',
    usd: '$600 - $1,000 / month',
    popular: true,
    website: 'Full Multi-Page Responsive Custom Website (Next.js/React)',
    studio: '2 Shoot Sessions (16 Video Reels)',
    social: 'Full Multi-Channel Management (FB, IG, LinkedIn, TikTok) + Meta & TikTok Ads with A/B Testing',
    blueprint: 'Designed to deliver consistent inquiries, brand authority, and client conversions tailored for high growth.'
  },
  {
    id: 'dominance',
    name: 'Full Agency Dominance Suite',
    usd: '$1,200 - $2,500+ / month',
    popular: false,
    website: 'Custom Web Application + High-ROAS Funnel Infrastructure',
    studio: 'Unlimited Monthly Video Reel Production & Creative Assets',
    social: '360° Omnichannel Execution + Retargeting Funnels + Campaign Manager',
    blueprint: 'Complete market dominance package for established firms demanding maximum ROI & brand supremacy.'
  },
  {
    id: 'custom',
    name: 'Custom Flexible Budget Suite',
    usd: 'Custom Budget Range',
    popular: false,
    website: 'Tailored Web & Landing Page Architecture to Exact Needs',
    studio: 'Custom Video Production Schedule & Specialized Ad Creatives',
    social: 'Flexible Multi-Channel Handling & Bespoke Ad Campaign Budgets',
    blueprint: 'Bespoke execution plan structured around your unique budget and business requirements.'
  }
];

const goalsList = [
  'Qualified Lead Generation',
  'Brand Authority & Consultations',
  'E-Commerce ROAS & Sales',
  'Full Social Overhaul'
];

export default function BudgetPlanner() {
  const [selectedVertical, setSelectedVertical] = useState(verticals[0]);
  const [selectedTier, setSelectedTier] = useState(budgetTiers[1]);
  const [selectedGoal, setSelectedGoal] = useState(goalsList[0]);

  return (
    <section id="budget-planner" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center">
        
        {/* Header */}
        <div className="space-y-2 mb-10">
          <span className="font-gothic text-lg font-normal text-sociallyin-blue uppercase tracking-widest bg-blue-50 px-3.5 py-0.5 rounded-full border border-blue-200 inline-block">
            INTERACTIVE STRATEGY PLANNER
          </span>

          <h2 className="font-gothic text-3xl sm:text-4xl font-normal text-sociallyin-blue uppercase tracking-tight leading-none">
            TELL US YOUR BUDGET. <span className="yellow-underline-stroke hero-title-yellow">WE BUILD YOUR EXACT GROWTH ROADMAP.</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-sans max-w-2xl mx-auto font-medium">
            Select your industry vertical and monthly marketing budget below to generate your tailored agency execution plan instantly.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 text-left">
          
          {/* Left Selection Controls */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Step 1: Industry */}
            <div className="sociallyin-card p-4 space-y-2 bg-[#F8FAFC] border border-blue-200">
              <label className="font-gothic text-lg text-sociallyin-blue uppercase flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-sociallyin-blue" />
                <span>1. Select Your Business Industry:</span>
              </label>

              <div className="grid sm:grid-cols-2 gap-2">
                {verticals.map((vert, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedVertical(vert)}
                    className={`p-2.5 rounded-lg text-left text-[11px] font-bold font-sans transition-all border ${
                      selectedVertical === vert
                        ? 'bg-sociallyin-blue text-white border-sociallyin-blue shadow-sm'
                        : 'bg-white text-slate-700 border-gray-200 hover:border-sociallyin-blue'
                    }`}
                  >
                    {vert}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Monthly Investment Budget (With Custom Range Option) */}
            <div className="sociallyin-card p-4 space-y-2 bg-[#F8FAFC] border border-blue-200">
              <label className="font-gothic text-lg text-sociallyin-blue uppercase flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-sociallyin-blue" />
                <span>2. Select Your Monthly Investment Budget:</span>
              </label>

              <div className="space-y-2">
                {budgetTiers.map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setSelectedTier(tier)}
                    className={`w-full px-3.5 py-2.5 rounded-lg text-left transition-all border flex items-center justify-between ${
                      selectedTier.id === tier.id
                        ? 'bg-blue-50 border-sociallyin-blue shadow-sm'
                        : 'bg-white border-gray-200 hover:border-sociallyin-blue'
                    }`}
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-gothic text-base font-normal text-sociallyin-blue uppercase">{tier.name}</span>
                        {tier.popular && (
                          <span className="text-[9px] font-extrabold uppercase bg-[#FFD000] text-black px-1.5 py-0.5 rounded font-sans leading-none">
                            MOST POPULAR
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="font-gothic text-base text-sociallyin-blue font-bold">{tier.usd}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Primary Goal */}
            <div className="sociallyin-card p-4 space-y-2 bg-[#F8FAFC] border border-blue-200">
              <label className="font-gothic text-lg text-sociallyin-blue uppercase flex items-center gap-1.5">
                <Target className="w-4 h-4 text-sociallyin-blue" />
                <span>3. Primary Business Goal:</span>
              </label>

              <div className="grid sm:grid-cols-2 gap-2">
                {goalsList.map((g, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedGoal(g)}
                    className={`p-2.5 rounded-lg text-left text-[11px] font-bold font-sans transition-all border ${
                      selectedGoal === g
                        ? 'bg-sociallyin-blue text-white border-sociallyin-blue shadow-sm'
                        : 'bg-white text-slate-700 border-gray-200 hover:border-sociallyin-blue'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Strategy Roadmap Output */}
          <div className="lg:col-span-6">
            <div className="sociallyin-card p-6 bg-white border-2 border-sociallyin-blue shadow-xl space-y-4 sticky top-24">
              
              <div className="border-b border-gray-200 pb-3 space-y-0.5">
                <span className="text-[10px] font-extrabold text-sociallyin-blue uppercase tracking-widest bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 inline-block font-sans">
                  TAILORED GROWTH PLAN
                </span>
                <h3 className="font-gothic text-2xl font-normal text-sociallyin-blue uppercase leading-tight pt-1">
                  {selectedTier.name}
                </h3>
                <p className="text-[11px] font-bold text-slate-600 font-sans uppercase">
                  Target Industry: <strong className="text-sociallyin-blue">{selectedVertical}</strong>
                </p>
              </div>

              <div className="space-y-2.5 text-xs font-sans text-slate-800">
                
                <div className="p-3 rounded-lg bg-[#F8FAFC] border border-blue-100 space-y-0.5">
                  <span className="font-gothic text-base text-sociallyin-blue uppercase block">WEBSITE & LANDING PAGE</span>
                  <p className="font-semibold text-slate-900 text-xs">{selectedTier.website}</p>
                </div>

                <div className="p-3 rounded-lg bg-[#F8FAFC] border border-blue-100 space-y-0.5">
                  <span className="font-gothic text-base text-sociallyin-blue uppercase block">VIDEO CREATIVES & REELS PRODUCTION</span>
                  <p className="font-semibold text-slate-900 text-xs">{selectedTier.studio}</p>
                </div>

                <div className="p-3 rounded-lg bg-[#F8FAFC] border border-blue-100 space-y-0.5">
                  <span className="font-gothic text-base text-sociallyin-blue uppercase block">SOCIAL MEDIA HANDLING & PAID CAMPAIGNS</span>
                  <p className="font-semibold text-slate-900 text-xs">{selectedTier.social}</p>
                </div>

              </div>

              {/* Expected Result Blueprint */}
              <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 space-y-0.5">
                <span className="font-gothic text-base text-amber-800 uppercase block">EXPECTED RESULT BLUEPRINT</span>
                <p className="text-[11px] font-medium font-sans leading-relaxed">
                  {selectedTier.blueprint}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-1">
                <a 
                  href="#proposal-form"
                  className="btn-yellow text-base w-full justify-center py-3 rounded-lg shadow-md"
                >
                  <span>LOCK IN THIS PLAN & SUBMIT PROPOSAL</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
