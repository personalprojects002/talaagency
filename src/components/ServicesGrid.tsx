'use client';

import React from 'react';
import { Globe, Video, Megaphone, Youtube, ShoppingCart, Share2, ArrowRight, Check } from 'lucide-react';

const servicesList = [
  {
    icon: Globe,
    title: 'Website Building & Web Development',
    color: 'from-blue-500 to-cyan-400',
    description: 'Custom, ultra-fast websites and landing pages built with React & Next.js. Engineered specifically to convert mobile visitors into WhatsApp consultations and direct phone leads.',
    features: ['Custom Mobile-Optimized Design', 'Instant WhatsApp Integration', 'SEO & Speed Performance', 'Lead Form Automation']
  },
  {
    icon: Video,
    title: 'In-House Studio Video Production',
    color: 'from-purple-500 to-indigo-400',
    description: 'Cinematic 4K short-form video reels, shorts, podcasts, and commercial ads shot in our studio with professional cameras, lighting, and sound gear.',
    features: ['High-Converting Scripting', 'Studio Shoot & Lighting', 'Color Grading & Motion Graphics', 'Subtitles & Sound Design']
  },
  {
    icon: Share2,
    title: 'Full Social Media Management',
    color: 'from-cyan-500 to-teal-400',
    description: 'Complete daily management of Facebook, Instagram, LinkedIn, and TikTok. We handle graphic design, caption copywriting, scheduling, and community response.',
    features: ['Daily Post Creation', 'Brand Voice & Copywriting', 'Comment & DM Response', 'Monthly Performance Audits']
  },
  {
    icon: Megaphone,
    title: 'Paid Social & Lead Ads (Meta/TikTok/Google)',
    color: 'from-emerald-500 to-green-400',
    description: 'Data-backed ad campaigns targeting qualified prospects for Immigration Consultants, Law Firms, Academies, and E-Commerce. Focused on Cost-Per-Lead and ROAS.',
    features: ['Audience & Location Targeting', 'High-Converting Ad Creatives', 'A/B Split Testing', 'Budget Optimization']
  },
  {
    icon: Youtube,
    title: 'YouTube Automation & SEO Growth',
    color: 'from-rose-500 to-red-400',
    description: 'End-to-end YouTube channel growth. Niche strategy, video editing, thumbnail design, keyword SEO, and monetization management.',
    features: ['Topic Research & Scripting', 'Professional Video Editing', 'High-CTR Custom Thumbnails', 'YouTube SEO & Monetization']
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce & Amazon Store Management',
    color: 'from-amber-500 to-orange-400',
    description: 'Product listing optimization, product video shoots, Shopify store setup, and targeted Meta/TikTok ad campaigns to scale sales.',
    features: ['Product Video Ads', 'Shopify Store Customization', 'Amazon Listing & Ads', 'Retargeting Funnels']
  }
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-[#08080C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-blue-400">
            End-To-End Growth Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Everything You Need To Control Your Market Online.
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            We manage your entire digital presence under one roof — so you never have to coordinate between multiple flaky freelancers again.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div 
                key={idx}
                className="glass-panel glass-panel-hover rounded-3xl p-8 border border-white/10 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${srv.color} p-[2px]`}>
                    <div className="w-full h-full bg-[#0D0E17] rounded-[14px] flex items-center justify-center text-white">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white">{srv.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{srv.description}</p>

                  <div className="space-y-2 pt-2 border-t border-white/5">
                    {srv.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-gray-300 font-medium">
                        <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <a 
                    href="#proposal-form" 
                    className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-wider"
                  >
                    <span>Request Service Strategy</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
