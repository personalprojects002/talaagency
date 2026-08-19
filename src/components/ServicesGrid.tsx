'use client';

import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const servicesData = [
  {
    title: 'SOCIAL MEDIA STRATEGY & CONSULTING',
    bullets: [
      'Building Your Roadmap for Social Success',
      'Target Audience & Competitor Analysis',
      'Platform Selection & Content Pillars',
      'ROI & Lead Goal Setting'
    ]
  },
  {
    title: 'SOCIAL CONTENT PRODUCTION',
    bullets: [
      'In-House 4K Studio Video Production',
      'Engaging Reels, Shorts & Ad Creatives',
      'Graphic Design, Branding & Thumbnails',
      'Custom Scripting & Post-Production'
    ]
  },
  {
    title: 'SOCIAL MEDIA MANAGEMENT & COMMUNITY',
    bullets: [
      'Consistent Posting Across All Platforms',
      'Proactive Community DM & Comment Management',
      'Brand Voice & Reputation Monitoring',
      'Monthly Analytics & Growth Audits'
    ]
  },
  {
    title: 'PAID SOCIAL ADVERTISING',
    bullets: [
      'Targeted Lead Campaigns for Consultants & Lawyers',
      'Meta, TikTok & Google Ads Optimization',
      'A/B Creative Testing & Retargeting',
      'High-ROAS E-Commerce Sales Funnels'
    ]
  },
  {
    title: 'INFLUENCER & YOUTUBE AUTOMATION',
    bullets: [
      'YouTube Channel Setup & Monetization',
      'High-CTR Custom Thumbnail Design',
      'Influencer Vetting & Campaign Strategy',
      'Performance Measurement & Reporting'
    ]
  },
  {
    title: 'WEBSITE & NOTION CRM INTEGRATION',
    bullets: [
      'Custom Responsive Next.js / React Websites',
      'Direct WhatsApp Consultation Booking',
      'Automated Notion Database Lead Capture',
      'Mobile Conversion Funnel Optimization'
    ]
  }
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Headline with Yellow Highlight Mark matching Image 1 */}
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-sociallyin-blue uppercase tracking-tight mb-14">
          <span className="yellow-mark">SOCIAL MEDIA SERVICES</span> : STRATEGY, PRODUCTION, ACTIVATION & COMMUNITY
        </h2>

        {/* 6 Light Blue Cards matching Image 1 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((srv, idx) => (
            <div 
              key={idx}
              className="sociallyin-card p-8 flex flex-col justify-between text-left space-y-6"
            >
              <div className="space-y-4">
                <h3 className="font-heading text-2xl font-bold text-sociallyin-blue uppercase tracking-wide leading-tight">
                  {srv.title}
                </h3>

                <div className="space-y-2.5 pt-2 border-t border-blue-200">
                  {srv.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs font-semibold text-sociallyin-textDark">
                      <span className="w-1.5 h-1.5 rounded-full bg-sociallyin-blue mt-1.5 shrink-0"></span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <a 
                  href="#proposal-form" 
                  className="font-heading text-sm font-bold text-sociallyin-blue hover:text-sociallyin-darkBlue uppercase tracking-wider flex items-center gap-1"
                >
                  <span>REQUEST STRATEGY</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button matching Image 1 */}
        <div className="mt-12">
          <a href="#proposal-form" className="btn-yellow text-xl px-10 py-4 rounded-md shadow-xl">
            <span>GET A FREE PROPOSAL</span>
            <ArrowRight className="w-5 h-5 stroke-[3]" />
          </a>
        </div>

      </div>
    </section>
  );
}
