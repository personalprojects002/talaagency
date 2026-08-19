'use client';

import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, Building2, DollarSign, Target, Video, Layers, Database, ShieldCheck } from 'lucide-react';

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
    pkr: 'PKR 85,000 - 140,000 / mo',
    usd: '$300 - $500 / month',
    popular: false,
    website: 'High-Converting Landing Page (Next.js/React)',
    studio: '1 Studio Shoot Day (8 Cinematic Reels)',
    social: 'Facebook & Instagram Management + Basic Meta Ads',
    notion: 'Basic Notion CRM & WhatsApp Direct Inquiries',
    blueprint: 'Built for emerging brands seeking immediate qualified leads and a polished online presence.'
  },
  {
    id: 'scale',
    name: 'Scale & Authority Blueprint',
    pkr: 'PKR 170,000 - 280,000 / mo',
    usd: '$600 - $1,000 / month',
    popular: true,
    website: 'Full Multi-Page Responsive Custom Website (Next.js/React)',
    studio: '2 Studio Shoot Days (16 Cinematic Reels + YouTube Video)',
    social: 'Full Multi-Channel Management (FB, IG, LinkedIn, TikTok) + Meta & TikTok Ads with A/B Testing',
    notion: 'Direct Notion Database API Lead Logging & Instant WhatsApp Alerts',
    blueprint: 'Designed to deliver consistent inquiries, brand authority, and client conversions tailored for high growth.'
  },
  {
    id: 'dominance',
    name: 'Full Agency Dominance Suite',
    pkr: 'PKR 340,000 - 700,000+ / mo',
    usd: '$1,200 - $2,500+ / month',
    popular: false,
    website: 'Custom Web Application + CMS + High-ROAS Funnel Infrastructure',
    studio: 'Unlimited Monthly Studio Access & Dedicated Camera Crew',
    social: '360° Omnichannel Execution + Retargeting Funnels + Dedicated Campaign Manager',
    notion: 'Custom Notion Enterprise CRM Setup + Real-time Lead Automation & WhatsApp Bot',
    blueprint: 'Complete market dominance package for established firms demanding maximum ROI & brand supremacy.'
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
    <section id="budget-planner" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
        
        {/* Header matching Sociallyin theme */}
        <div className="space-y-3 mb-12">
          <span className="font-gothic text-2xl font-normal text-sociallyin-blue uppercase tracking-widest bg-blue-50 px-4 py-1 rounded-full border border-blue-200 inline-block">
            INTERACTIVE STRATEGY PLANNER
          </span>

          <h2 className="font-gothic text-4xl sm:text-5xl lg:text-6xl font-normal text-sociallyin-blue uppercase tracking-tight leading-none">
            TELL US YOUR BUDGET. <span className="yellow-underline-stroke hero-title-yellow">WE BUILD YOUR EXACT GROWTH ROADMAP.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-sans max-w-2xl mx-auto font-medium">
            Select your industry vertical and monthly marketing budget below to generate your tailored agency execution plan instantly.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 text-left">
          
          {/* Left Selection Controls */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Step 1: Industry */}
            <div className="sociallyin-card p-6 space-y-3">
              <label className="font-gothic text-2xl text-sociallyin-blue uppercase flex items-center gap-2">
                <Building2 className="w-5 h-5 text-sociallyin-blue" />
                <span>1. Select Your Business Industry:</span>
              </label>

              <div className="grid sm:grid-cols-2 gap-2.5">
                {verticals.map((vert, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedVertical(vert)}
                    className={`p-3 rounded-xl text-left text-xs font-semibold font-sans transition-all border ${
                      selectedVertical === vert
                        ? 'bg-sociallyin-blue text-white border-sociallyin-blue shadow-md'
                        : 'bg-white text-slate-700 border-gray-200 hover:border-sociallyin-blue'
                    }`}
                  >
                    {vert}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Budget Tier */}
            <div className="sociallyin-card p-6 space-y-3">
              <label className="font-gothic text-2xl text-sociallyin-blue uppercase flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-sociallyin-blue" />
                <span>2. Select Your Monthly Investment Budget:</span>
              </label>

              <div className="space-y-3">
                {budgetTiers.map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setSelectedTier(tier)}
                    className={`w-full p-4 rounded-xl text-left transition-all border relative flex items-center justify-between ${
                      selectedTier.id === tier.id
                        ? 'bg-blue-50/80 border-sociallyin-blue shadow-md'
                        : 'bg-white border-gray-200 hover:border-sociallyin-blue'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-gothic text-xl font-normal text-sociallyin-blue uppercase">{tier.name}</span>
                        {tier.popular && (
                          <span className="text-[10px] font-extrabold uppercase bg-[#FFD000] text-black px-2 py-0.5 rounded font-sans">
                            MOST POPULAR
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 font-sans font-semibold">{tier.pkr}</p>
                    </div>

                    <div className="text-right">
                      <span className="font-gothic text-xl text-sociallyin-blue">{tier.usd}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Primary Goal */}
            <div className="sociallyin-card p-6 space-y-3">
              <label className="font-gothic text-2xl text-sociallyin-blue uppercase flex items-center gap-2">
                <Target className="w-5 h-5 text-sociallyin-blue" />
                <span>3. Primary Business Goal:</span>
              </label>

              <div className="grid sm:grid-cols-2 gap-2.5">
                {goalsList.map((g, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedGoal(g)}
                    className={`p-3 rounded-xl text-left text-xs font-semibold font-sans transition-all border ${
                      selectedGoal === g
                        ? 'bg-sociallyin-blue text-white border-sociallyin-blue shadow-md'
                        : 'bg-white text-slate-700 border-gray-200 hover:border-sociallyin-blue'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Strategy Roadmap Result Box matching User Content */}
          <div className="lg:col-span-6">
            <div className="sociallyin-card p-8 bg-white border-2 border-sociallyin-blue shadow-2xl space-y-6 sticky top-24">
              
              <div className="border-b border-gray-200 pb-4 space-y-1">
                <span className="text-[11px] font-extrabold text-sociallyin-blue uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block font-sans">
                  TAILORED GROWTH PLAN
                </span>
                <h3 className="font-gothic text-3xl font-normal text-sociallyin-blue uppercase leading-none pt-1">
                  {selectedTier.name}
                </h3>
                <p className="text-xs font-bold text-slate-500 font-sans uppercase">
                  Target Industry: <strong className="text-sociallyin-blue">{selectedVertical}</strong>
                </p>
              </div>

              <div className="space-y-4 text-xs font-sans font-medium text-slate-700">
                
                <div className="p-3.5 rounded-xl bg-[#F4F8FE] border border-[#C2DBFE] space-y-1">
                  <span className="font-gothic text-lg text-sociallyin-blue uppercase block">WEBSITE & LANDING PAGE</span>
                  <p className="font-semibold text-slate-800">{selectedTier.website}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F4F8FE] border border-[#C2DBFE] space-y-1">
                  <span className="font-gothic text-lg text-sociallyin-blue uppercase block">IN-HOUSE STUDIO VIDEO PRODUCTION</span>
                  <p className="font-semibold text-slate-800">{selectedTier.studio}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F4F8FE] border border-[#C2DBFE] space-y-1">
                  <span className="font-gothic text-lg text-sociallyin-blue uppercase block">SOCIAL MEDIA HANDLING & PAID CAMPAIGNS</span>
                  <p className="font-semibold text-slate-800">{selectedTier.social}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F4F8FE] border border-[#C2DBFE] space-y-1">
                  <span className="font-gothic text-lg text-sociallyin-blue uppercase block">NOTION DATABASE API & WHATSAPP LEAD CAPTURE</span>
                  <p className="font-semibold text-slate-800">{selectedTier.notion}</p>
                </div>

              </div>

              {/* Expected Result Blueprint */}
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 space-y-1">
                <span className="font-gothic text-lg text-amber-800 uppercase block">EXPECTED RESULT BLUEPRINT</span>
                <p className="text-xs font-medium font-sans leading-relaxed">
                  {selectedTier.blueprint}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a 
                  href="#proposal-form"
                  className="btn-yellow text-xl w-full justify-center py-4 rounded-xl shadow-xl"
                >
                  <span>LOCK IN THIS PLAN & SUBMIT PROPOSAL</span>
                  <ArrowRight className="w-5 h-5 stroke-[3]" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
