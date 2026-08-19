'use client';

import React from 'react';
import { GraduationCap, Award, Users, Video, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';

const coursesList = [
  {
    title: 'Professional Video Editing & Motion Graphics',
    duration: '2 Months Hands-On',
    desc: 'Master Premiere Pro, After Effects, and cinematic cuts used in top YouTube & commercial reels.',
    students: '120+ Graduates'
  },
  {
    title: 'Graphic Design & Brand Identity',
    duration: '6 Weeks Intensive',
    desc: 'Learn Photoshop, Illustrator, and visual branding principles for corporate clients & social ads.',
    students: '90+ Graduates'
  },
  {
    title: 'YouTube Growth & SEO Automation',
    duration: '4 Weeks Mastery',
    desc: 'Discover channel optimization, thumbnail CTR secrets, scriptwriting, and monetization strategies.',
    students: '75+ Graduates'
  }
];

export default function AcademyShowcase() {
  return (
    <section id="academy" className="py-24 bg-[#08080C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5" />
              NVC Academy — Skill Empowerment
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Training Next-Gen Creators & Digital Talent.
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Beyond agency services, NVC operates a specialized training academy in Kamoke, Gujranwala, Pakistan. We train passionate youth in video editing, graphic design, and YouTube SEO — empowering them with high-income digital skills.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
                <h4 className="font-bold text-white text-base">300+ Students</h4>
                <p className="text-xs text-gray-400">Trained & Certified in Digital Skills</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
                <h4 className="font-bold text-cyan-400 text-base">100% Practical</h4>
                <p className="text-xs text-gray-400">Real Studio Equipment & Client Projects</p>
              </div>
            </div>

            <div className="pt-2">
              <a 
                href="https://wa.me/923316996815?text=Hello%20NVC%20Academy!%20I'm%20interested%20in%20enrolling%20in%20a%20course." 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-500/25 transition-all"
              >
                <span>Enroll in NVC Academy via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Courses List */}
          <div className="lg:col-span-6 space-y-4">
            {coursesList.map((course, idx) => (
              <div key={idx} className="glass-panel rounded-2xl p-6 border border-white/10 space-y-3 hover:border-blue-500/30 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">{course.duration}</span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300">
                    {course.students}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">{course.title}</h3>
                <p className="text-xs text-gray-300 leading-relaxed">{course.desc}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
