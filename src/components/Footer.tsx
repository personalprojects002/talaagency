'use client';

import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050508] border-t border-white/10 pt-16 pb-12 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[2px]">
                <div className="w-full h-full bg-[#0B0C14] rounded-[10px] flex items-center justify-center font-extrabold text-blue-400 text-base">
                  NVC
                </div>
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">Next Vision Creators</span>
            </div>

            <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
              Full-service digital media agency & in-house production studio based in Pakistan. Specializing in high-converting websites, video reels, paid ads, and social media handling for Immigration Consultants, Lawyers, Academies, and E-Commerce brands.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://wa.me/923316996815" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold hover:bg-emerald-500/20 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: 0331-6996815</span>
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">Growth Services</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Web Building & Next.js</a></li>
              <li><a href="#studio" className="hover:text-blue-400 transition-colors">In-House Studio Production</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Full Social Media Handling</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Meta & TikTok Paid Ads</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">YouTube Automation & SEO</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">E-Commerce & Amazon Growth</a></li>
            </ul>
          </div>

          {/* Col 3: Verticals */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">Target Verticals</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#verticals" className="hover:text-blue-400 transition-colors">Immigration & Visa Agencies</a></li>
              <li><a href="#verticals" className="hover:text-blue-400 transition-colors">Law Firms & Legal Practice</a></li>
              <li><a href="#verticals" className="hover:text-blue-400 transition-colors">Educational Institutes & Academies</a></li>
              <li><a href="#verticals" className="hover:text-blue-400 transition-colors">E-Commerce & Amazon Stores</a></li>
              <li><a href="#verticals" className="hover:text-blue-400 transition-colors">Corporate Consultancies</a></li>
            </ul>
          </div>

          {/* Col 4: Pakistan Contact */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">Agency Head Office</h4>
            <div className="space-y-2 text-xs text-gray-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>Main GT Road, near Taxi Stand, Kamoke, Gujranwala, Punjab, Pakistan</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+92 331 6996815 / 0331-6996815</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>nextvisioncreators@gmail.com</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Next Vision Creators (NVC). All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Founded by Talal Ahmad | Kamoke, Gujranwala, Pakistan</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
