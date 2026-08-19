'use client';

import React from 'react';
import Link from 'next/link';
import { GraduationCap, ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function AcademyShowcase() {
  return (
    <section id="academy" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-sociallyin-blue font-gothic text-xl font-normal uppercase tracking-wider mb-6">
          <GraduationCap className="w-5 h-5 text-sociallyin-blue" />
          <span>NVC ACADEMY — SKILL EMPOWERMENT</span>
        </div>

        <h2 className="font-gothic text-4xl sm:text-5xl lg:text-6xl font-normal text-sociallyin-blue uppercase tracking-tight leading-none mb-6">
          TRAINING NEXT-GEN CREATORS & <span className="yellow-underline-stroke hero-title-yellow">DIGITAL TALENT.</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-600 font-sans max-w-3xl mx-auto font-medium leading-relaxed mb-12">
          Beyond agency services, NVC operates a specialized training academy in Kamoke, Gujranwala, Pakistan. We train passionate youth in video editing, graphic design, and YouTube SEO — empowering them with high-income digital skills.
        </p>

        {/* 2 Key Stat Badges matching user content */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12 text-left">
          
          <div className="sociallyin-card p-6 bg-[#F4F8FE] border-2 border-[#C2DBFE] space-y-2">
            <h3 className="font-gothic text-4xl text-sociallyin-blue">300+ STUDENTS</h3>
            <p className="text-xs font-bold text-slate-700 font-sans uppercase">
              Trained & Certified in Digital Skills
            </p>
          </div>

          <div className="sociallyin-card p-6 bg-[#F4F8FE] border-2 border-[#C2DBFE] space-y-2">
            <h3 className="font-gothic text-4xl text-sociallyin-yellow">100% PRACTICAL</h3>
            <p className="text-xs font-bold text-slate-700 font-sans uppercase">
              Real Studio Equipment & Client Projects
            </p>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/923316996815?text=Hello%20NVC%20Academy!%20I%27m%20interested%20in%20enrolling%20in%20a%20course."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-yellow text-xl px-8 py-3.5 rounded-xl shadow-xl inline-flex items-center gap-2"
          >
            <MessageSquare className="w-5 h-5" />
            <span>ENROLL IN NVC ACADEMY VIA WHATSAPP</span>
          </a>

          <Link
            href="/academy"
            className="font-gothic text-xl text-sociallyin-blue hover:text-sociallyin-darkBlue uppercase tracking-wider underline underline-offset-4 inline-flex items-center gap-1"
          >
            <span>EXPLORE ALL ACADEMY COURSES</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
