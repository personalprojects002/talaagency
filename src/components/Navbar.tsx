'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';

const navbar6Services = [
  { label: 'SOCIAL MEDIA STRATEGY & CONSULTING', href: '/services#strategy' },
  { label: 'SOCIAL CONTENT PRODUCTION', href: '/services#content' },
  { label: 'SOCIAL MEDIA MANAGEMENT & COMMUNITY', href: '/services#management' },
  { label: 'PAID SOCIAL ADVERTISING', href: '/services#paid-ads' },
  { label: 'INFLUENCER & YOUTUBE AUTOMATION', href: '/services#automation' },
  { label: 'WEBSITE & NOTION CRM INTEGRATION', href: '/services#integration' },
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 py-2 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between">
          
          {/* Header Logo: Camera Logo Image + NVC Text */}
          <Link href="/" className="flex items-center gap-2 group pl-[20px]">
            <img 
              src="/images/nvc-camera-logo.png" 
              alt="Next Vision Creators" 
              className="h-10 w-auto object-contain shrink-0 group-hover:scale-105 transition-transform" 
            />
            <span className="font-gothic text-2xl font-normal text-sociallyin-blue tracking-wider leading-none">
              NVC
            </span>
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

              {/* ABOUT Dropdown Menu */}
              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 w-64 p-3.5 nav-dropdown-box animate-dropdown z-50 bg-white shadow-2xl border-2 border-sociallyin-blue rounded-xl">
                  <div className="space-y-1 font-sans">
                    {aboutDropdownItems.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="block p-2.5 rounded-lg text-xs font-bold text-slate-800 hover:text-sociallyin-blue hover:bg-blue-50 transition-all border-b border-gray-100 last:border-0 uppercase tracking-wide"
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

              {/* SERVICES Dropdown Menu */}
              {activeDropdown === 'services' && (
                <div className="absolute top-full -left-4 w-80 p-3.5 nav-dropdown-box animate-dropdown z-50 bg-white shadow-2xl border-2 border-sociallyin-blue rounded-xl">
                  <div className="space-y-1 font-sans">
                    {navbar6Services.map((srv, idx) => (
                      <Link
                        key={idx}
                        href={srv.href}
                        onClick={() => setActiveDropdown(null)}
                        className="block p-2.5 rounded-lg text-xs font-bold text-slate-800 hover:text-sociallyin-blue hover:bg-blue-50 transition-all border-b border-gray-100 last:border-0 uppercase tracking-wide"
                      >
                        {srv.label}
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
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-5 space-y-2.5 font-gothic text-xl">
          <Link href="/#about" onClick={() => setMobileMenuOpen(false)} className="block text-sociallyin-blue">ABOUT</Link>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="block text-sociallyin-blue">SERVICES</Link>
          
          <div className="pl-3 border-l-2 border-sociallyin-blue space-y-1.5 font-sans text-xs">
            {navbar6Services.map((item, idx) => (
              <Link 
                key={idx}
                href={item.href} 
                onClick={() => setMobileMenuOpen(false)} 
                className="block text-slate-800 font-bold hover:text-sociallyin-blue uppercase py-1"
              >
                • {item.label}
              </Link>
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
