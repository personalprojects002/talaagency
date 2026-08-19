'use client';

import React from 'react';

export default function WaveAboutSection() {
  return (
    <section id="about" className="relative bg-sociallyin-blue text-white py-24 overflow-hidden">
      
      {/* Top Wave SVG Divider */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-12 text-[#F8FAFC]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-6">
          NVC: SOCIAL-FIRST AGENCY BASED IN PAKISTAN
        </h2>

        <p className="text-lg sm:text-xl text-blue-100 font-medium leading-relaxed max-w-4xl mx-auto mb-12">
          Next Vision Creators is a full-service social media marketing agency operating its own in-house production studio in Kamoke, Gujranwala, Pakistan. We serve clients worldwide — including <strong className="text-white">Immigration Consultants, Law Firms, Educational Academies, and E-Commerce Brands</strong> — with custom strategy, 4K studio video reels, paid ad management, and direct Notion CRM lead integration.
        </p>

        {/* 3 Stat Counters matching Image 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-white/20 pt-10">
          <div>
            <h3 className="font-heading text-5xl font-extrabold text-sociallyin-yellow">500+</h3>
            <p className="font-heading text-lg font-bold uppercase tracking-wider text-blue-100 mt-1">BRANDS & PROJECTS</p>
          </div>
          <div>
            <h3 className="font-heading text-5xl font-extrabold text-sociallyin-yellow">100%</h3>
            <p className="font-heading text-lg font-bold uppercase tracking-wider text-blue-100 mt-1">IN-HOUSE STUDIO GEAR</p>
          </div>
          <div>
            <h3 className="font-heading text-5xl font-extrabold text-sociallyin-yellow">98%</h3>
            <p className="font-heading text-lg font-bold uppercase tracking-wider text-blue-100 mt-1">CLIENT RETENTION RATE</p>
          </div>
        </div>

      </div>

      {/* Bottom Wave SVG Divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-12 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor"></path>
        </svg>
      </div>

    </section>
  );
}
