'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviewsList = [
  {
    name: 'Syed Hamza',
    role: 'Managing Director',
    company: 'Apex Immigration Consultants',
    text: 'NVC completely revamped our online presence. Before NVC, we were getting low-quality leads. Their video studio shoot and targeted Meta lead forms brought us 140+ genuine visa consultancy clients in 60 days.',
    rating: 5
  },
  {
    name: 'Advocate Bilal Chaudhry',
    role: 'Senior Partner',
    company: 'Chaudhry & Co. Legal Advisory',
    text: 'The studio reels NVC produces are outstanding. They script the legal tips, shoot with high-end camera equipment, and handle all the editing. We are now recognized as the top legal firm in our district.',
    rating: 5
  },
  {
    name: 'Dr. Usman Raza',
    role: 'Founder',
    company: 'Future Vision Institute',
    text: 'NVC handled our student admissions campaign. Their team created high-energy video ads and automated lead inquiries straight into our WhatsApp and CRM. Our entire batch was filled 2 weeks early.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0A0B12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-400">
            Client Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            What Business Owners Say About NVC.
          </h2>
        </div>

        {/* Grid */}
        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          {reviewsList.map((rev, idx) => (
            <div key={idx} className="glass-panel rounded-3xl p-8 border border-white/10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-blue-400/40" />
                <p className="text-sm text-gray-300 leading-relaxed italic">"{rev.text}"</p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <h4 className="font-bold text-white text-base">{rev.name}</h4>
                <p className="text-xs text-cyan-400 font-semibold">{rev.role} — {rev.company}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
