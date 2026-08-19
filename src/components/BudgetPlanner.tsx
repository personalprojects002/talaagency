'use client';

import React, { useState } from 'react';
import { Calculator, CheckCircle2, Sparkles, ArrowRight, Video, Globe, Megaphone, Target, DollarSign, Layers } from 'lucide-react';

const verticalsList = [
  'Immigration & Visa Consultancy',
  'Law Firm & Legal Practice',
  'Educational Institute / Academy',
  'E-Commerce Brand / Amazon Store',
  'Corporate & Business Consulting',
  'Local Service Business'
];

const budgetTiers = [
  {
    id: 'starter',
    label: '$300 - $500 / month',
    pkr: 'PKR 85,000 - 140,000 / mo',
    name: 'Growth Kickstart Plan',
    website: 'High-Converting Landing Page with WhatsApp integration',
    videoStudio: '1 Studio Shoot Day (8 Edited Reels + Shorts)',
    socialHandling: 'Full Facebook & Instagram Handling (12 Posts/mo)',
    paidAds: 'Meta Ad Campaign Setup & Optimization (Client budget extra)',
    leadsTracker: 'Basic Lead Tracker & WhatsApp Alerts'
  },
  {
    id: 'growth',
    label: '$600 - $1,000 / month',
    pkr: 'PKR 170,000 - 280,000 / mo',
    name: 'Scale & Authority Blueprint',
    popular: true,
    website: 'Full Multi-Page Responsive Custom Website (Next.js/React)',
    videoStudio: '2 Studio Shoot Days (16 Cinematic Reels + YouTube Video)',
    socialHandling: 'Full Multi-Channel Management (Facebook, IG, LinkedIn, TikTok)',
    paidAds: 'Meta + TikTok Ad Campaigns with A/B Testing',
    leadsTracker: 'Direct Notion Database API Lead Logging & Instant WhatsApp Alerts'
  },
  {
    id: 'dominance',
    label: '$1,200 - $2,500+ / month',
    pkr: 'PKR 340,000 - 700,000+ / mo',
    name: 'Full Agency Dominance Suite',
    website: 'Custom Web Application + E-Commerce / LMS Portal Integration',
    videoStudio: 'Unlimited Studio Production & On-Location Shoot Crew',
    socialHandling: 'Complete Social Media Domination (Daily Video Content)',
    paidAds: 'High-Scale Meta, TikTok, YouTube & Google Ads Management',
    leadsTracker: 'Dedicated Notion CRM System & Custom ROI Reporting'
  }
];

export default function BudgetPlanner() {
  const [selectedVertical, setSelectedVertical] = useState(verticalsList[0]);
  const [selectedBudget, setSelectedBudget] = useState(budgetTiers[1].id);
  const [selectedGoal, setSelectedGoal] = useState('Qualified Lead Generation');

  const currentTier = budgetTiers.find(b => b.id === selectedBudget) || budgetTiers[1];

  const handleApplyStrategy = () => {
    const proposalForm = document.getElementById('proposal-form');
    if (proposalForm) {
      proposalForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="budget-planner" className="py-24 bg-[#08080C] relative overflow-hidden">
      
      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            Interactive Strategy Planner
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Tell Us Your Budget. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
              We Build Your Exact Growth Roadmap.
            </span>
          </h2>

          <p className="text-gray-300 text-base sm:text-lg">
            Select your industry vertical and monthly marketing budget below to generate your tailored agency execution plan instantly.
          </p>
        </div>

        {/* Calculator Widget Wrapper */}
        <div className="mt-14 glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-10">
            
            {/* Left Inputs Column */}
            <div className="lg:col-span-6 space-y-8">
              
              {/* Step 1: Industry Vertical */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-400" />
                  1. Select Your Business Industry:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {verticalsList.map((vert, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedVertical(vert)}
                      className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold text-left transition-all border ${
                        selectedVertical === vert
                          ? 'bg-blue-600/20 border-blue-500 text-white shadow-md shadow-blue-500/10'
                          : 'bg-white/5 border-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {vert}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Budget Tiers */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-emerald-400" />
                  2. Select Your Monthly Investment Budget:
                </label>
                <div className="space-y-3">
                  {budgetTiers.map((tier) => (
                    <div
                      key={tier.id}
                      onClick={() => setSelectedBudget(tier.id)}
                      className={`p-4 rounded-2xl cursor-pointer transition-all border relative ${
                        selectedBudget === tier.id
                          ? 'bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-cyan-900/30 border-blue-500 shadow-xl shadow-blue-500/15'
                          : 'bg-white/5 border-white/10 hover:border-white/20'
                      }`}
                    >
                      {tier.popular && (
                        <span className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-[10px] font-bold text-white uppercase tracking-wider shadow-md">
                          Most Popular
                        </span>
                      )}
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-white text-base">{tier.name}</h4>
                          <p className="text-xs text-gray-400">{tier.pkr}</p>
                        </div>
                        <span className="text-sm font-extrabold text-cyan-300">{tier.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 3: Main Goal */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-2">
                  <Target className="w-4 h-4 text-purple-400" />
                  3. Primary Business Goal:
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {['Qualified Lead Generation', 'Brand Authority & Consultations', 'E-Commerce ROAS & Sales', 'Full Social Overhaul'].map((goal, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedGoal(goal)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-semibold text-center transition-all border ${
                        selectedGoal === goal
                          ? 'bg-purple-600/20 border-purple-500 text-white'
                          : 'bg-white/5 border-white/5 text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      {goal}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Generated Strategy Breakdown Column */}
            <div className="lg:col-span-6 bg-[#0D0E18] rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6 flex flex-col justify-between">
              
              <div className="space-y-6">
                
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <span className="text-[11px] font-bold text-blue-400 uppercase tracking-widest">Tailored Growth Plan</span>
                    <h3 className="text-xl font-bold text-white">{currentTier.name}</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-400">Target Industry:</span>
                    <p className="text-xs font-bold text-cyan-300 truncate max-w-[160px]">{selectedVertical}</p>
                  </div>
                </div>

                {/* Plan Components List */}
                <div className="space-y-4 text-sm">
                  
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white">Website & Landing Page</h4>
                      <p className="text-xs text-gray-300">{currentTier.website}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Video className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white">In-House Studio Video Production</h4>
                      <p className="text-xs text-gray-300">{currentTier.videoStudio}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Megaphone className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white">Social Media Handling & Paid Campaigns</h4>
                      <p className="text-xs text-gray-300">{currentTier.socialHandling} + {currentTier.paidAds}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white">Notion Database API & WhatsApp Lead Capture</h4>
                      <p className="text-xs text-gray-300">{currentTier.leadsTracker}</p>
                    </div>
                  </div>

                </div>

                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-gray-300 space-y-1">
                  <span className="font-bold text-blue-400">Expected Result Blueprint:</span>
                  <p>Designed to deliver consistent inquiries, brand authority, and client conversions tailored for {selectedVertical}.</p>
                </div>

              </div>

              {/* Action Button */}
              <button
                onClick={handleApplyStrategy}
                className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-bold text-base shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all mt-4"
              >
                <Sparkles className="w-5 h-5" />
                <span>Lock In This Plan & Submit Proposal</span>
                <ArrowRight className="w-5 h-5" />
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
