'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Syed Hamza',
    role: 'Managing Director',
    company: 'Apex Immigration Consultants',
    text: 'NVC completely transformed our online presence. Their in-house studio video shoots and targeted lead forms brought us 140+ genuine visa consultancy clients in 60 days.',
    rating: 5
  },
  {
    name: 'Advocate Bilal Chaudhry',
    role: 'Senior Partner',
    company: 'Chaudhry & Co. Legal Advisory',
    text: 'The studio reels NVC produces are outstanding. They script legal tips, shoot with high-end camera equipment, and handle all post-production. We are now recognized as the top legal firm in our district.',
    rating: 5
  },
  {
    name: 'Dr. Usman Raza',
    role: 'Founder',
    company: 'Future Vision Institute',
    text: 'NVC handled our student admissions campaign. Their team created high-energy video ads and automated lead inquiries straight into our WhatsApp and Notion CRM. Our batch was filled 2 weeks early.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Headline with Yellow Highlight Mark matching Image 1 */}
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-sociallyin-blue uppercase tracking-tight mb-14">
          <span className="yellow-mark">WHAT OUR CLIENTS SAY</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {reviews.map((rev, idx) => (
            <div key={idx} className="sociallyin-card p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-sociallyin-yellow">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-sociallyin-yellow text-sociallyin-yellow" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-blue-300" />
                <p className="text-sm font-medium text-sociallyin-textDark leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-blue-200">
                <h4 className="font-heading text-xl font-bold text-sociallyin-blue uppercase">{rev.name}</h4>
                <p className="text-xs font-bold text-gray-500 uppercase">{rev.role} — {rev.company}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
