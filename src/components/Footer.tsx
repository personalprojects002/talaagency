'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Facebook, Instagram, Linkedin, Youtube, Video, MessageSquare, Phone, Mail, MapPin 
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B132B] text-white pt-16 pb-12 font-sans border-t-4 border-[#FFD000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 border-b border-slate-800 pb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <img 
                src="/images/nvc-camera-logo.png" 
                alt="Next Vision Creators" 
                className="h-12 w-auto object-contain bg-white/90 p-1.5 rounded-lg" 
              />
            </Link>

            <p className="text-slate-400 text-xs font-medium max-w-sm leading-relaxed">
              Next Vision Creators (NVC) is a premier social media marketing and growth agency based in Kamoke, Gujranwala, Pakistan — serving clients worldwide with tailored social strategies and video ad creatives.
            </p>

            {/* Small Social Media Handle Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-sociallyin-blue text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="YouTube"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>

              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="TikTok"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-black text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Video className="w-4 h-4" />
              </a>

              <a 
                href="https://wa.me/923316996815" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-gothic text-lg text-[#FFD000] uppercase tracking-wider">QUICK NAVIGATION</h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-400">
              <li><Link href="/#about" className="hover:text-white transition-colors">About Agency</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">6 Core Services</Link></li>
              <li><Link href="/#studio" className="hover:text-white transition-colors">Production Studio</Link></li>
              <li><Link href="/#team" className="hover:text-white transition-colors">Meet Our Team</Link></li>
              <li><Link href="/#case-studies" className="hover:text-white transition-colors">Client Case Studies</Link></li>
              <li><Link href="/academy" className="hover:text-white transition-colors">NVC Academy</Link></li>
            </ul>
          </div>

          {/* Services List */}
          <div className="space-y-3">
            <h4 className="font-gothic text-lg text-[#FFD000] uppercase tracking-wider">CORE SERVICES</h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-400">
              <li><Link href="/services#strategy" className="hover:text-white transition-colors">Social Strategy</Link></li>
              <li><Link href="/services#content" className="hover:text-white transition-colors">Content Production</Link></li>
              <li><Link href="/services#management" className="hover:text-white transition-colors">Social Management</Link></li>
              <li><Link href="/services#paid-ads" className="hover:text-white transition-colors">Paid Ads Campaign</Link></li>
              <li><Link href="/services#automation" className="hover:text-white transition-colors">YouTube Automation</Link></li>
              <li><Link href="/services#integration" className="hover:text-white transition-colors">Web & Lead Capture</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-gothic text-lg text-[#FFD000] uppercase tracking-wider">AGENCY HQ</h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FFD000] shrink-0 mt-0.5" />
                <span>Main GT Road, near Taxi Stand, Kamoke, Gujranwala, Punjab, Pakistan</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FFD000] shrink-0" />
                <a href="https://wa.me/923316996815" className="hover:text-white transition-colors">0331-6996815 (+92 331 6996815)</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FFD000] shrink-0" />
                <a href="mailto:nextvisioncreators@gmail.com" className="hover:text-white transition-colors">nextvisioncreators@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-medium gap-4">
          <p>© {new Date().getFullYear()} Next Vision Creators (NVC). All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-slate-400">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-400">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
