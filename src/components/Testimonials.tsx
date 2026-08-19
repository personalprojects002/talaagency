'use client';

import React from 'react';
import { Quote, ArrowRight } from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    name: 'AMANDA HAMMOND',
    company: 'National Park Service',
    logoText: 'PARK SERVICE',
    bgColor: 'bg-emerald-800 text-white',
    text: 'So far we’ve seen massive organic growth across all of our campaign channels and platforms. Up to +2000% impressions, +2700% engagements, and +1400% audience growth on our key campaign. Their team was super timely, professional, and always available to meet our needs. Very efficient and respectful of our time.',
  },
  {
    id: 2,
    name: 'JULIA GRUPA',
    company: 'FRASLE Global',
    logoText: 'FRASLE',
    bgColor: 'bg-blue-900 text-white',
    text: 'NVC’s project management is great. We have a shared workspace where we exchange ideas and everything is highly organized. Their communication skills are outstanding. If I don’t understand something, we jump on a quick call. Overall, their organization and creativity are huge factors in our ongoing success.',
  },
  {
    id: 3,
    name: 'JORDANNE WALDSCHMIDT',
    company: 'Association of Equipment Manufacturers',
    logoText: 'AEM',
    bgColor: 'bg-[#B91C1C] text-white',
    text: 'We’ve seen significant growth on our social media channels. Our Instagram follower base grew rapidly from 4,000 to 11,000. Our Facebook and LinkedIn accounts saw similar high-converting lead growth. They named us best social campaign of the year.',
  },
  {
    id: 4,
    name: 'CLAUDIA GEBHARDT',
    company: 'Invesse Dermatology & Skincare',
    logoText: 'INVESSE',
    bgColor: 'bg-teal-700 text-white',
    text: 'NVC has helped our brand push our video reels to the most recommended feeds on Instagram and TikTok. They have offered a lot more than what we asked for, thanks to their high level of strategic understanding and coordination.',
  },
  {
    id: 5,
    name: 'SYED HAMZA',
    company: 'Apex Immigration Consultants',
    logoText: 'APEX VISAS',
    bgColor: 'bg-indigo-900 text-white',
    text: 'NVC completely transformed our online lead engine. Their targeted video strategy and custom landing pages brought us 140+ genuine visa consultancy inquiries in less than 60 days.',
  },
  {
    id: 6,
    name: 'ADV. BILAL CHAUDHRY',
    company: 'Chaudhry & Co. Legal Practice',
    logoText: 'CHAUDHRY LEGAL',
    bgColor: 'bg-slate-900 text-white',
    text: 'The reel production NVC delivers is unmatched. They script legal tips, shoot with crisp camera setups, and handle all editing. Our firm is now recognized as the top legal consultancy in our region.',
  }
];

export default function Testimonials() {
  // Duplicate array for seamless infinite marquee loop
  const carouselItems = [...testimonialsData, ...testimonialsData];

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-12">
        
        {/* Header matching exact user screenshot */}
        <div className="flex items-center justify-between">
          <h2 className="font-gothic text-4xl sm:text-5xl lg:text-6xl font-normal text-sociallyin-blue uppercase tracking-tight leading-none">
            WHAT OUR CLIENTS SAY
          </h2>

          <a
            href="#proposal-form"
            className="bg-[#1E293B] hover:bg-black text-[#FFD000] font-gothic text-lg font-normal px-6 py-2 rounded-xl transition-all uppercase tracking-wider inline-flex items-center gap-1.5"
          >
            <span>SEE MORE</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Infinite Slow Carousel Container */}
      <div className="relative w-full overflow-hidden py-4">
        
        {/* Left & Right subtle gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Slow Marquee Track (Pauses on Hover) */}
        <div className="animate-marquee-slow flex items-stretch gap-6 px-4">
          {carouselItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[380px] sm:w-[440px] shrink-0 bg-[#F4F8FE] border-2 border-[#C2DBFE] hover:border-sociallyin-blue rounded-2xl p-7 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              
              {/* Top Row: Logo Badge & Yellow Quotation Mark matching screenshot */}
              <div className="flex items-center justify-between">
                
                {/* Brand Logo Badge */}
                <div className={`px-3 py-1.5 rounded-lg text-xs font-bold font-sans uppercase tracking-widest ${item.bgColor} shadow-sm`}>
                  {item.logoText}
                </div>

                {/* Big Golden Yellow Quotes matching screenshot */}
                <div className="text-[#FFD000] opacity-90">
                  <Quote className="w-10 h-10 fill-[#FFD000] text-[#FFD000] rotate-180" />
                </div>

              </div>

              {/* Review Text */}
              <p className="text-xs sm:text-sm font-sans font-medium text-slate-600 leading-relaxed italic">
                "{item.text}"
              </p>

              {/* Bottom Client Info matching screenshot */}
              <div className="pt-4 border-t border-blue-100/80">
                <h4 className="font-gothic text-2xl font-normal text-sociallyin-blue uppercase tracking-wide leading-none">
                  {item.name}
                </h4>
                <p className="text-xs font-bold text-gray-500 uppercase font-sans mt-0.5">
                  {item.company}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
