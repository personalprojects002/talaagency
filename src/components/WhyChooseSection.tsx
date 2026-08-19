'use client';

import React from 'react';

export default function WhyChooseSection() {
  return (
    <section className="relative bg-sociallyin-blue text-white py-24 overflow-hidden">
      
      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-12 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-4">
          WHY CHOOSE <span className="yellow-mark">NVC</span> AS YOUR SOCIAL MEDIA AGENCY?
        </h2>

        <p className="text-lg text-blue-100 font-medium max-w-2xl mx-auto mb-14">
          Proven campaigns. In-house studio cameras. Real business inquiries, not vanity metrics.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          
          <div className="bg-white text-sociallyin-textDark rounded-2xl p-8 shadow-2xl space-y-4">
            <h3 className="font-heading text-2xl font-bold text-sociallyin-blue uppercase tracking-wide">
              AN IN-HOUSE STUDIO, NOT OUTSOURCED CREATIVE
            </h3>
            <ul className="space-y-2 text-xs font-semibold text-gray-700">
              <li>• Full 4K Cinema Camera Crew & Lighting</li>
              <li>• Customized Strategies, Not Cookie-Cutter Templates</li>
              <li>• In-Studio shoots for Immigration, Law & Products</li>
            </ul>
          </div>

          <div className="bg-white text-sociallyin-textDark rounded-2xl p-8 shadow-2xl space-y-4">
            <h3 className="font-heading text-2xl font-bold text-sociallyin-blue uppercase tracking-wide">
              ANALYTICS-FIRST REPORTING, NOT VANITY METRICS
            </h3>
            <ul className="space-y-2 text-xs font-semibold text-gray-700">
              <li>• Focus on Cost-Per-Lead & Conversion Appointments</li>
              <li>• Transparent Monthly Return on Ad Spend (ROAS)</li>
              <li>• Experienced Ad Specialists & Copywriters</li>
            </ul>
          </div>

          <div className="bg-white text-sociallyin-textDark rounded-2xl p-8 shadow-2xl space-y-4">
            <h3 className="font-heading text-2xl font-bold text-sociallyin-blue uppercase tracking-wide">
              NOTION CRM & INSTANT WHATSAPP AUTOMATION
            </h3>
            <ul className="space-y-2 text-xs font-semibold text-gray-700">
              <li>• Client inquiries saved directly into your Notion Database</li>
              <li>• Instant WhatsApp alerts to your team for fast follow-ups</li>
              <li>• Zero lost lead inquiries</li>
            </ul>
          </div>

        </div>

      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-12 text-[#F8FAFC]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>

    </section>
  );
}
