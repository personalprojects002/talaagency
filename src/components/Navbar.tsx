'use client';

import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, ArrowRight, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#08080C]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 p-[2px] shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#0B0C14] rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 text-lg tracking-wider">NVC</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-white tracking-tight group-hover:text-blue-400 transition-colors">
                Next Vision Creators
              </span>
              <span className="text-[10px] text-gray-400 tracking-widest uppercase flex items-center gap-1 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Social Media Agency
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#verticals" className="hover:text-blue-400 transition-colors">Target Verticals</a>
            <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
            <a href="#budget-planner" className="hover:text-blue-400 transition-colors flex items-center gap-1 text-cyan-300">
              <Sparkles className="w-3.5 h-3.5" />
              Budget Strategy Calculator
            </a>
            <a href="#studio" className="hover:text-blue-400 transition-colors">In-House Studio</a>
            <a href="#academy" className="hover:text-blue-400 transition-colors">NVC Academy</a>
            <a href="#case-studies" className="hover:text-blue-400 transition-colors">Work</a>
          </nav>

          {/* Contact & CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="https://wa.me/923316996815?text=Hello%20NVC%20Team!%20I'm%20interested%20in%20a%20social%20media%20growth%20strategy." 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>0331-6996815</span>
            </a>

            <a 
              href="#proposal-form" 
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Get Free Strategy</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D0E17]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-6 space-y-4 shadow-2xl animate-fadeIn">
          <a 
            href="#verticals" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-gray-200 hover:text-blue-400 font-medium"
          >
            Target Verticals
          </a>
          <a 
            href="#services" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-gray-200 hover:text-blue-400 font-medium"
          >
            Services
          </a>
          <a 
            href="#budget-planner" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-cyan-300 hover:text-cyan-200 font-medium flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Budget Strategy Calculator
          </a>
          <a 
            href="#studio" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-gray-200 hover:text-blue-400 font-medium"
          >
            In-House Studio
          </a>
          <a 
            href="#academy" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-gray-200 hover:text-blue-400 font-medium"
          >
            NVC Academy
          </a>
          <a 
            href="#case-studies" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-gray-200 hover:text-blue-400 font-medium"
          >
            Work & Case Studies
          </a>
          
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a 
              href="https://wa.me/923316996815" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us: 0331-6996815</span>
            </a>
            <a 
              href="#proposal-form" 
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/30"
            >
              <span>Get Custom Strategy Plan</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
