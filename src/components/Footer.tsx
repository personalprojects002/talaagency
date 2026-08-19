'use client';

import React from 'react';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-sociallyin-textDark text-white pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-sociallyin-blue flex items-center justify-center font-heading font-bold text-white text-xl">
                NVC
              </div>
              <span className="font-heading font-bold text-2xl text-white tracking-tight uppercase">
                Next Vision Creators
              </span>
            </div>

            <p className="text-gray-400 text-xs font-medium leading-relaxed max-w-sm">
              Sociallyin-inspired social-first marketing agency with an in-house video production studio based in Pakistan. Specializing in strategy, 4K studio reels, paid ads, and direct Notion CRM lead tracking for Immigration Consultants, Law Firms, Academies & E-Commerce brands.
            </p>

            <div className="pt-2">
              <a 
                href="https://wa.me/923316996815" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded.md bg-emerald-600 text-white font-heading text-sm font-bold uppercase tracking-wider hover:bg-emerald-500 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: 0331-6996815</span>
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3 text-left">
            <h4 className="font-heading font-bold text-lg text-sociallyin-yellow uppercase tracking-wider">SERVICES</h4>
            <ul className="space-y-2 text-xs font-semibold text-gray-300">
              <li><a href="#services" className="hover:text-sociallyin-yellow transition-colors">• Social Media Strategy</a></li>
              <li><a href="#services" className="hover:text-sociallyin-yellow transition-colors">• Social Content Production</a></li>
              <li><a href="#services" className="hover:text-sociallyin-yellow transition-colors">• Community Management</a></li>
              <li><a href="#services" className="hover:text-sociallyin-yellow transition-colors">• Paid Social Advertising</a></li>
              <li><a href="#services" className="hover:text-sociallyin-yellow transition-colors">• YouTube Automation</a></li>
              <li><a href="#services" className="hover:text-sociallyin-yellow transition-colors">• Website Building & Next.js</a></li>
            </ul>
          </div>

          {/* Col 3: Target Verticals */}
          <div className="space-y-3 text-left">
            <h4 className="font-heading font-bold text-lg text-sociallyin-yellow uppercase tracking-wider">TARGET VERTICALS</h4>
            <ul className="space-y-2 text-xs font-semibold text-gray-300">
              <li><a href="#verticals" className="hover:text-sociallyin-yellow transition-colors">• Immigration & Visas</a></li>
              <li><a href="#verticals" className="hover:text-sociallyin-yellow transition-colors">• Law Firms & Lawyers</a></li>
              <li><a href="#verticals" className="hover:text-sociallyin-yellow transition-colors">• Educational Academies</a></li>
              <li><a href="#verticals" className="hover:text-sociallyin-yellow transition-colors">• E-Commerce & Amazon</a></li>
              <li><a href="#verticals" className="hover:text-sociallyin-yellow transition-colors">• Corporate Consulting</a></li>
            </ul>
          </div>

          {/* Col 4: Studio Address */}
          <div className="space-y-3 text-left">
            <h4 className="font-heading font-bold text-lg text-sociallyin-yellow uppercase tracking-wider">PAKISTAN HEAD OFFICE</h4>
            <div className="space-y-2 text-xs text-gray-300 font-medium">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sociallyin-blue shrink-0 mt-0.5" />
                <span>Main GT Road, near Taxi Stand, Kamoke, Gujranwala, Punjab, Pakistan</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+92 331 6996815 / 0331-6996815</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sociallyin-yellow shrink-0" />
                <span>nextvisioncreators@gmail.com</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-gray-400">
          <p>© {new Date().getFullYear()} Next Vision Creators (NVC). All rights reserved.</p>
          <p>Founded by Talal Ahmad | Kamoke, Gujranwala, Pakistan</p>
        </div>

      </div>
    </footer>
  );
}
