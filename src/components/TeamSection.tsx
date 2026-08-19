'use client';

import React from 'react';

const teamMembers = [
  {
    name: 'Talal Ahmad',
    role: 'Founder & Digital Marketer',
    image: '/images/team-talal.png',
    bio: 'With over 5 years of experience in digital marketing and content creation, Talal leads the team with innovative ideas and strategic approach.'
  },
  {
    name: 'Mohammed Tayyab',
    role: 'Senior Video Editor',
    image: '/images/team-tayyab.png',
    bio: 'Mohammed Tayyab brings creative vision to life with exceptional video editing skills and deep understanding of YouTube algorithms.'
  },
  {
    name: 'Mohammed Ahmad',
    role: 'Videographer',
    image: '/images/team-ahmad.jpg',
    bio: 'Highly skilled videographer with 5 years of experience in wedding videography, product shoots, and commercial projects.'
  },
  {
    name: 'Zainab Ahmed',
    role: 'SEO Expert',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80',
    bio: 'Zainab Ahmed is a skilled SEO Expert with 3.5 years of professional experience in search engine optimization. She specializes in on-page SEO, off-page SEO, keyword research, technical SEO, and website performance optimization.'
  },
  {
    name: 'Asad Raza',
    role: 'Virtual Assistant',
    image: '/images/team-asad.jpg',
    bio: 'Dedicated E-commerce Virtual Assistant specializing in Amazon Seller Central and eBay Seller Hub. I manage product listings, SEO optimization, inventory tracking, and customer support to keep your store profitable and running smoothly.'
  },
  {
    name: 'Fatima Ali',
    role: 'Content Creator',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80',
    bio: 'Creative content creator specializing in engaging social media content and reels.'
  },
  {
    name: 'Labiba Noor',
    role: 'Graphic Designer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=80',
    bio: 'Labiba Noor is a creative and detail-oriented Graphic Designer with 3 years of professional experience. She specializes in designing visually appealing graphics for social media, branding, marketing materials, and digital platforms.'
  }
];

export default function TeamSection() {
  return (
    <section id="team" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center">
        
        <div className="space-y-2 mb-12">
          <span className="font-gothic text-lg font-normal text-sociallyin-blue uppercase tracking-widest bg-blue-50 px-3.5 py-0.5 rounded-full border border-blue-200 inline-block">
            OUR TEAM
          </span>

          <h2 className="font-gothic text-3xl sm:text-4xl lg:text-5xl font-normal text-sociallyin-blue uppercase tracking-tight leading-none">
            EXPERTS DEDICATED TO <span className="yellow-underline-stroke hero-title-yellow">YOUR SUCCESS</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-sans max-w-xl mx-auto font-medium">
            Meet the creative strategists, video editors, videographers, and marketers behind Next Vision Creators (NVC).
          </p>
        </div>

        {/* 7 Team Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {teamMembers.map((member, idx) => (
            <div 
              key={idx}
              className="sociallyin-card p-5 bg-white border-2 border-[#C2DBFE] hover:border-sociallyin-blue rounded-xl flex flex-col justify-between space-y-4 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="space-y-3">
                {/* Photo */}
                <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-slate-100 border border-gray-200">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div>
                  <h3 className="font-gothic text-2xl font-normal text-sociallyin-blue uppercase leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-slate-800 uppercase tracking-wider font-sans bg-blue-50 px-2.5 py-0.5 rounded border border-blue-100 inline-block mt-1">
                    {member.role}
                  </p>
                </div>

                <p className="text-xs text-slate-600 font-sans font-medium leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
