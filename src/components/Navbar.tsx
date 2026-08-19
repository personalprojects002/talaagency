'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp, Menu, X, ArrowRight, CheckCircle2 } from 'lucide-react';

const navbar6Services = [
  {
    title: 'SOCIAL MEDIA STRATEGY & CONSULTING',
    href: '/services#strategy',
    bullets: [
      'Building Your Roadmap for Social Success',
      'Target Audience & Competitor Analysis',
      'Platform Selection & Content Pillars',
      'ROI & Lead Goal Setting'
    ]
  },
  {
    title: 'SOCIAL CONTENT PRODUCTION',
    href: '/services#content',
    bullets: [
      'In-House 4K Studio Video Production',
      'Engaging Reels, Shorts & Ad Creatives',
      'Graphic Design, Branding & Thumbnails',
      'Custom Scripting & Post-Production'
    ]
  },
  {
    title: 'SOCIAL MEDIA MANAGEMENT & COMMUNITY',
    href: '/services#management',
    bullets: [
      'Consistent Posting Across All Platforms',
      'Proactive Community DM & Comment Management',
      'Brand Voice & Reputation Monitoring',
      'Monthly Analytics & Growth Audits'
    ]
  },
  {
    title: 'PAID SOCIAL ADVERTISING',
    href: '/services#paid-ads',
    bullets: [
      'Targeted Lead Campaigns for Consultants & Lawyers',
      'Meta, TikTok & Google Ads Optimization',
      'A/B Creative Testing & Retargeting',
      'High-ROAS E-Commerce Sales Funnels'
    ]
  },
  {
    title: 'INFLUENCER & YOUTUBE AUTOMATION',
    href: '/services#automation',
    bullets: [
      'YouTube Channel Setup & Monetization',
      'High-CTR Custom Thumbnail Design',
      'Influencer Vetting & Campaign Strategy',
      'Performance Measurement & Reporting'
    ]
  },
  {
    title: 'WEBSITE & NOTION CRM INTEGRATION',
    href: '/services#integration',
    bullets: [
      'Custom Responsive Next.js / React Websites',
      'Direct WhatsApp Consultation Booking',
      'Automated Notion Database Lead Capture',
      'Mobile Conversion Funnel Optimization'
    ]
  }
];

const aboutDropdownItems = [
  { label: 'ABOUT NEXT VISION CREATORS', href: '/#about' },
  { label: 'PAKISTAN AGENCY HQ', href: '/#studio' },
  { label: 'MEET THE TEAM', href: '/#team' },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<'services' | 'about' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 py-2.5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group pl-[20px]">
            <div className="w-8 h-8 rounded-lg bg-sociallyin-blue flex items-center justify-center font-gothic text-lg text-white font-normal leading-none shadow-sm group-hover:bg-sociallyin-darkBlue transition-colors shrink-0">
              NVC
            </div>
            <div className="flex flex-col">
              <span className="font-gothic text-xl sm:text-2xl font-normal text-sociallyin-blue tracking-wide group-hover:text-sociallyin-darkBlue transition-colors leading-none">
                Next Vision Creators
              </span>
              <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest font-sans -mt-0.5">
                Social Media Agency
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-5 font-gothic text-lg font-normal text-sociallyin-blue tracking-wider uppercase pr-[20px]">
            
            {/* ABOUT Dropdown Trigger */}
            <div 
              className="relative py-1"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href="/#about" className="flex items-center gap-0.5 hover:text-sociallyin-darkBlue transition-colors">
                <span>ABOUT</span>
                {activeDropdown === 'about' ? (
                  <ChevronUp className="w-3 h-3 text-sociallyin-blue stroke-[3]" />
                ) : (
                  <ChevronDown className="w-3 h-3 text-sociallyin-blue stroke-[3]" />
                )}
              </Link>

              {/* ABOUT Dropdown Modal */}
              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 w-64 p-4 nav-dropdown-box animate-dropdown z-50">
                  <div className="space-y-2 font-gothic text-base font-normal tracking-wide text-sociallyin-textDark">
                    {aboutDropdownItems.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="block text-sociallyin-textDark hover:text-sociallyin-blue hover:translate-x-1 transition-all"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* SERVICES Dropdown Trigger - Opens 6 Core Services Modal */}
            <div 
              className="relative py-1"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href="/services" className="flex items-center gap-0.5 hover:text-sociallyin-darkBlue transition-colors">
                <span>SERVICES</span>
                {activeDropdown === 'services' ? (
                  <ChevronUp className="w-3 h-3 text-sociallyin-blue stroke-[3]" />
                ) : (
                  <ChevronDown className="w-3 h-3 text-sociallyin-blue stroke-[3]" />
                )}
              </Link>

              {/* SERVICES Dropdown Modal Box - EXACT 6 SERVICES ONLY */}
              {activeDropdown === 'services' && (
                <div className="absolute top-full -left-64 sm:-left-40 w-[680px] p-6 nav-dropdown-box animate-dropdown z-50 bg-white/98 shadow-2xl border-2 border-sociallyin-blue rounded-2xl">
                  <div className="grid grid-cols-2 gap-4 text-left font-sans">
                    {navbar6Services.map((srv, idx) => (
                      <div 
                        key={idx}
                        className="p-3.5 rounded-xl bg-[#F4F8FE] border border-[#C2DBFE] hover:border-sociallyin-blue transition-all space-y-2 flex flex-col justify-between"
                      >
                        <div className="space-y-1.5">
                          <h4 className="font-gothic text-lg font-normal text-sociallyin-blue uppercase leading-tight">
                            {srv.title}
                          </h4>

                          <div className="space-y-1">
                            {srv.bullets.map((b, bIdx) => (
                              <div key={bIdx} className="flex items-start gap-1.5 text-[11px] font-semibold text-slate-700 leading-tight">
                                <CheckCircle2 className="w-3 h-3 text-sociallyin-blue shrink-0 mt-0.5" />
                                <span>{b}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-1">
                          <Link
                            href="/#proposal-form"
                            onClick={() => setActiveDropdown(null)}
                            className="font-gothic text-xs text-sociallyin-blue hover:text-sociallyin-darkBlue uppercase tracking-wider inline-flex items-center gap-1 font-normal underline underline-offset-2"
                          >
                            <span>REQUEST STRATEGY</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-200 text-center flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-600 font-sans">
                      Need a customized omnichannel strategy?
                    </span>
                    <Link
                      href="/services"
                      onClick={() => setActiveDropdown(null)}
                      className="btn-yellow text-xs px-4 py-1.5 rounded-lg"
                    >
                      VIEW ALL 6 SERVICES PAGE
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/#studio" className="hover:text-sociallyin-darkBlue transition-colors">
              STUDIOS
            </Link>

            <Link href="/#case-studies" className="hover:text-sociallyin-darkBlue transition-colors">
              WORK
            </Link>

            <Link href="/academy" className="hover:text-sociallyin-darkBlue transition-colors">
              ACADEMY
            </Link>

          </nav>

          {/* FREE PROPOSAL Button */}
          <div className="hidden lg:flex items-center pr-[20px]">
            <Link
              href="/#proposal-form"
              className="btn-yellow text-sm px-4 py-1.5 rounded-lg"
            >
              <span>FREE PROPOSAL</span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-sociallyin-blue pr-[20px]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-5 space-y-3 font-gothic text-xl">
          <Link href="/#about" onClick={() => setMobileMenuOpen(false)} className="block text-sociallyin-blue">ABOUT</Link>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="block text-sociallyin-blue">SERVICES</Link>
          
          <div className="pl-3 border-l-2 border-sociallyin-blue space-y-3 font-sans text-xs">
            {navbar6Services.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <Link 
                  href={item.href} 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="font-gothic text-base text-sociallyin-blue block uppercase"
                >
                  • {item.title}
                </Link>
                <div className="pl-3 space-y-0.5 text-[11px] text-slate-600 font-medium">
                  {item.bullets.map((b, bIdx) => (
                    <div key={bIdx}>- {b}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Link href="/#studio" onClick={() => setMobileMenuOpen(false)} className="block text-sociallyin-blue">STUDIOS</Link>
          <Link href="/#case-studies" onClick={() => setMobileMenuOpen(false)} className="block text-sociallyin-blue">WORK</Link>
          <Link href="/academy" onClick={() => setMobileMenuOpen(false)} className="block text-sociallyin-blue">ACADEMY</Link>

          <div className="pt-2">
            <Link href="/#proposal-form" onClick={() => setMobileMenuOpen(false)} className="btn-yellow text-center w-full justify-center text-base">
              FREE PROPOSAL
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
