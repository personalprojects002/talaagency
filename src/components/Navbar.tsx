'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Phone, MessageSquare, Menu, X, ArrowRight } from 'lucide-react';

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
  { label: 'ABOUT NEXT VISION CREATORS', href: '#about' },
  { label: 'PAKISTAN IN-HOUSE STUDIO', href: '#studio' },
  { label: 'NVC ACADEMY & COURSES', href: '#academy' },
  { label: 'MEET THE TEAM', href: '#team' },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<'services' | 'about' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 py-3 transition-all shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-sociallyin-blue flex items-center justify-center text-white font-extrabold text-lg tracking-tighter">
              NVC
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-2xl font-bold text-sociallyin-textDark tracking-tight group-hover:text-sociallyin-blue transition-colors">
                Next Vision Creators
              </span>
              <span className="text-[10px] font-bold text-sociallyin-blue uppercase tracking-widest -mt-1">
                Social Media Agency
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 font-heading text-lg font-bold text-sociallyin-textDark tracking-wider uppercase">
            
            <a href="#" className="hover:text-sociallyin-blue transition-colors">
              HOME
            </a>

            {/* ABOUT Dropdown Trigger */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 hover:text-sociallyin-blue transition-colors">
                <span>ABOUT</span>
                {activeDropdown === 'about' ? (
                  <ChevronUp className="w-4 h-4 text-sociallyin-blue stroke-[3]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-500 stroke-[3]" />
                )}
              </button>

              {/* ABOUT Dropdown Dialog Box */}
              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 w-72 p-5 nav-dropdown-box animate-dropdown z-50">
                  <div className="space-y-3 font-heading text-base font-bold tracking-wide">
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

            {/* SERVICES Dropdown Trigger (Exact Replica of Images 2 & 3) */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 hover:text-sociallyin-blue transition-colors">
                <span>SERVICES</span>
                {activeDropdown === 'services' ? (
                  <ChevronUp className="w-4 h-4 text-sociallyin-blue stroke-[3]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-500 stroke-[3]" />
                )}
              </button>

              {/* SERVICES Dropdown Dialog Box (Exact match to Image 2 & 3) */}
              {activeDropdown === 'services' && (
                <div className="absolute top-full -left-4 w-80 p-6 nav-dropdown-box animate-dropdown z-50">
                  <div className="space-y-3 font-heading text-[15px] font-bold tracking-wide text-sociallyin-textDark">
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

            <a href="#studio" className="hover:text-sociallyin-blue transition-colors">
              STUDIOS
            </a>

            <a href="#verticals" className="hover:text-sociallyin-blue transition-colors">
              AGENTS
            </a>

            <a href="#case-studies" className="hover:text-sociallyin-blue transition-colors">
              WORK
            </a>

            <a href="#academy" className="hover:text-sociallyin-blue transition-colors">
              ACADEMY
            </a>

          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/923316996815?text=Hello%20NVC!%20I'm%20interested%20in%20a%20social%20media%20strategy."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-bold px-3 py-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-300 hover:bg-emerald-100 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>0331-6996815</span>
            </a>

            <a
              href="#proposal-form"
              className="btn-yellow text-sm px-5 py-2.5 rounded-md"
            >
              <span>FREE PROPOSAL</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-sociallyin-textDark hover:text-sociallyin-blue"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-4 pb-6 space-y-3 font-heading text-lg font-bold">
          <a href="#" onClick={() => setMobileMenuOpen(false)} className="block text-sociallyin-textDark">HOME</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-sociallyin-textDark">ABOUT</a>
          
          <div className="pl-3 border-l-2 border-sociallyin-blue space-y-2 text-sm font-sans font-semibold text-gray-700">
            {servicesDropdownItems.map((item, idx) => (
              <a key={idx} href={item.href} onClick={() => setMobileMenuOpen(false)} className="block hover:text-sociallyin-blue">
                • {item.label}
              </a>
            ))}
          </div>

          <a href="#studio" onClick={() => setMobileMenuOpen(false)} className="block text-sociallyin-textDark">STUDIOS</a>
          <a href="#case-studies" onClick={() => setMobileMenuOpen(false)} className="block text-sociallyin-textDark">WORK</a>
          <a href="#academy" onClick={() => setMobileMenuOpen(false)} className="block text-sociallyin-textDark">ACADEMY</a>

          <div className="pt-3 flex flex-col gap-2">
            <a href="https://wa.me/923316996815" target="_blank" rel="noopener noreferrer" className="w-full text-center py-2 bg-emerald-100 text-emerald-800 rounded font-sans font-bold text-sm">
              WhatsApp: 0331-6996815
            </a>
            <a href="#proposal-form" onClick={() => setMobileMenuOpen(false)} className="btn-yellow text-center w-full justify-center">
              FREE PROPOSAL
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
