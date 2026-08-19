'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';

const servicesDropdownItems = [
  { label: 'SOCIAL MEDIA STRATEGY', href: '/services#strategy' },
  { label: 'SOCIAL MEDIA MANAGEMENT', href: '/services#management' },
  { label: 'COMMUNITY MANAGEMENT & LISTENING', href: '/services#community' },
  { label: 'SOCIAL CONTENT PRODUCTION', href: '/services#content' },
  { label: 'PAID SOCIAL ADVERTISING', href: '/services#paid-ads' },
  { label: 'INFLUENCER MARKETING', href: '/services#influencer' },
  { label: 'SOCIAL SELLING', href: '/services#social-selling' },
  { label: 'SOCIAL MEDIA CONSULTING', href: '/services#consulting' },
  { label: 'OUTBOUND ENGAGEMENT', href: '/services#outbound' },
  { label: 'ROI DATA ANALYSIS & REPORTING', href: '/services#data-analysis' },
  { label: 'REDDIT MARKETING AGENCY', href: '/services#reddit' },
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 py-3 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo with NVC Icon + Next Vision Creators Name shifted with 20px padding as requested */}
          <Link href="/" className="flex items-center gap-3 group pl-[20px]">
            <div className="w-10 h-10 rounded-xl bg-sociallyin-blue flex items-center justify-center font-gothic text-2xl text-white font-normal leading-none shadow-sm group-hover:bg-sociallyin-darkBlue transition-colors shrink-0">
              NVC
            </div>
            <div className="flex flex-col">
              <span className="font-gothic text-2xl sm:text-3xl font-normal text-sociallyin-blue tracking-wide group-hover:text-sociallyin-darkBlue transition-colors leading-none">
                Next Vision Creators
              </span>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-sans -mt-0.5">
                Social Media Agency
              </span>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 font-gothic text-2xl font-normal text-sociallyin-blue tracking-wider uppercase pr-[20px]">
            
            {/* ABOUT Dropdown Trigger */}
            <div 
              className="relative py-1.5"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href="/#about" className="flex items-center gap-0.5 hover:text-sociallyin-darkBlue transition-colors">
                <span>ABOUT</span>
                {activeDropdown === 'about' ? (
                  <ChevronUp className="w-3.5 h-3.5 text-sociallyin-blue stroke-[3]" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5 text-sociallyin-blue stroke-[3]" />
                )}
              </Link>

              {/* ABOUT Dropdown Dialog Box */}
              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 w-72 p-5 nav-dropdown-box animate-dropdown z-50">
                  <div className="space-y-3 font-gothic text-xl font-normal tracking-wide text-sociallyin-textDark">
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

            {/* SERVICES Dropdown Trigger */}
            <div 
              className="relative py-1.5"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href="/services" className="flex items-center gap-0.5 hover:text-sociallyin-darkBlue transition-colors">
                <span>SERVICES</span>
                {activeDropdown === 'services' ? (
                  <ChevronUp className="w-3.5 h-3.5 text-sociallyin-blue stroke-[3]" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5 text-sociallyin-blue stroke-[3]" />
                )}
              </Link>

              {/* SERVICES Dropdown Dialog Box */}
              {activeDropdown === 'services' && (
                <div className="absolute top-full -left-4 w-80 p-5 nav-dropdown-box animate-dropdown z-50">
                  <div className="space-y-2 font-gothic text-xl font-normal tracking-wide text-sociallyin-textDark">
                    {servicesDropdownItems.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="block text-sociallyin-textDark hover:text-sociallyin-blue hover:translate-x-1.5 transition-all py-0.5 border-b border-blue-100/60 last:border-0"
                      >
                        {item.label}
                      </Link>
                    ))}
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

          </nav>

          {/* FREE PROPOSAL Button */}
          <div className="hidden lg:flex items-center pr-[20px]">
            <Link
              href="/#proposal-form"
              className="btn-yellow text-lg px-5 py-1.5 rounded-lg"
            >
              <span>FREE PROPOSAL</span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-sociallyin-blue pr-[20px]"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-4 pb-6 space-y-3 font-gothic text-2xl">
          <Link href="/#about" onClick={() => setMobileMenuOpen(false)} className="block text-sociallyin-blue">ABOUT</Link>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="block text-sociallyin-blue">SERVICES</Link>
          
          <div className="pl-3 border-l-2 border-sociallyin-blue space-y-2 text-lg font-gothic text-sociallyin-textDark">
            {servicesDropdownItems.map((item, idx) => (
              <Link key={idx} href={item.href} onClick={() => setMobileMenuOpen(false)} className="block hover:text-sociallyin-blue">
                • {item.label}
              </Link>
            ))}
          </div>

          <Link href="/#studio" onClick={() => setMobileMenuOpen(false)} className="block text-sociallyin-blue">STUDIOS</Link>
          <Link href="/#case-studies" onClick={() => setMobileMenuOpen(false)} className="block text-sociallyin-blue">WORK</Link>

          <div className="pt-3">
            <Link href="/#proposal-form" onClick={() => setMobileMenuOpen(false)} className="btn-yellow text-center w-full justify-center text-xl">
              FREE PROPOSAL
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
