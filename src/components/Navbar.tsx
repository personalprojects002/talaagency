'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';

const servicesDropdownItems = [
  { label: 'SOCIAL MEDIA STRATEGY', href: '#services' },
  { label: 'SOCIAL MEDIA MANAGEMENT', href: '#services' },
  { label: 'COMMUNITY MANAGEMENT & LISTENING', href: '#services' },
  { label: 'SOCIAL CONTENT PRODUCTION', href: '#studio' },
  { label: 'PAID SOCIAL ADVERTISING', href: '#services' },
  { label: 'INFLUENCER MARKETING', href: '#services' },
  { label: 'SOCIAL SELLING', href: '#services' },
  { label: 'SOCIAL MEDIA CONSULTING', href: '#budget-planner' },
  { label: 'OUTBOUND ENGAGEMENT', href: '#services' },
  { label: 'DATA ANALYSIS ROI MODELING', href: '#case-studies' },
  { label: 'REDDIT MARKETING AGENCY', href: '#services' },
];

const aboutDropdownItems = [
  { label: 'ABOUT NVC', href: '#about' },
  { label: 'PAKISTAN IN-HOUSE STUDIO', href: '#studio' },
  { label: 'MEET THE TEAM', href: '#team' },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<'services' | 'about' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 py-2.5 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between">
          
          {/* NVC Logo */}
          <a href="#" className="flex items-center gap-1.5 group">
            <span className="font-gothic text-4xl font-normal text-sociallyin-blue tracking-wider group-hover:text-sociallyin-darkBlue transition-colors leading-none">
              NVC
            </span>
          </a>

          {/* Nav Links closer together as requested (gap-5) */}
          <nav className="hidden lg:flex items-center gap-5 font-gothic text-2xl font-normal text-sociallyin-blue tracking-wider uppercase">
            
            {/* ABOUT Dropdown Trigger */}
            <div 
              className="relative py-1.5"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-0.5 hover:text-sociallyin-darkBlue transition-colors">
                <span>ABOUT</span>
                {activeDropdown === 'about' ? (
                  <ChevronUp className="w-3.5 h-3.5 text-sociallyin-blue stroke-[3]" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5 text-sociallyin-blue stroke-[3]" />
                )}
              </button>

              {/* ABOUT Dropdown Dialog Box */}
              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 w-72 p-5 nav-dropdown-box animate-dropdown z-50">
                  <div className="space-y-3 font-gothic text-xl font-normal tracking-wide text-sociallyin-textDark">
                    {aboutDropdownItems.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="block text-sociallyin-textDark hover:text-sociallyin-blue hover:translate-x-1 transition-all"
                      >
                        {item.label}
                      </a>
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
              <button className="flex items-center gap-0.5 hover:text-sociallyin-darkBlue transition-colors">
                <span>SERVICES</span>
                {activeDropdown === 'services' ? (
                  <ChevronUp className="w-3.5 h-3.5 text-sociallyin-blue stroke-[3]" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5 text-sociallyin-blue stroke-[3]" />
                )}
              </button>

              {/* SERVICES Dropdown Dialog Box */}
              {activeDropdown === 'services' && (
                <div className="absolute top-full -left-4 w-80 p-5 nav-dropdown-box animate-dropdown z-50">
                  <div className="space-y-2 font-gothic text-xl font-normal tracking-wide text-sociallyin-textDark">
                    {servicesDropdownItems.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="block text-sociallyin-textDark hover:text-sociallyin-blue hover:translate-x-1.5 transition-all py-0.5 border-b border-blue-100/60 last:border-0"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="#studio" className="hover:text-sociallyin-darkBlue transition-colors">
              STUDIOS
            </a>

            <a href="#case-studies" className="hover:text-sociallyin-darkBlue transition-colors">
              WORK
            </a>

          </nav>

          {/* FREE PROPOSAL Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="#proposal-form"
              className="btn-yellow text-lg px-5 py-1.5 rounded-lg"
            >
              <span>FREE PROPOSAL</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-sociallyin-blue"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-4 pb-6 space-y-3 font-gothic text-2xl">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-sociallyin-blue">ABOUT</a>
          
          <div className="pl-3 border-l-2 border-sociallyin-blue space-y-2 text-lg font-gothic text-sociallyin-textDark">
            {servicesDropdownItems.map((item, idx) => (
              <a key={idx} href={item.href} onClick={() => setMobileMenuOpen(false)} className="block hover:text-sociallyin-blue">
                • {item.label}
              </a>
            ))}
          </div>

          <a href="#studio" onClick={() => setMobileMenuOpen(false)} className="block text-sociallyin-blue">STUDIOS</a>
          <a href="#case-studies" onClick={() => setMobileMenuOpen(false)} className="block text-sociallyin-blue">WORK</a>

          <div className="pt-3">
            <a href="#proposal-form" onClick={() => setMobileMenuOpen(false)} className="btn-yellow text-center w-full justify-center text-xl">
              FREE PROPOSAL
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
