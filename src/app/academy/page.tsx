import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Sparkles, CheckCircle2, MessageSquare 
} from 'lucide-react';

const coursesData = [
  {
    title: '4K VIDEO EDITING & REELS MASTERY',
    desc: 'Master Premiere Pro, DaVinci Resolve, and CapCut. Learn pacing, sound design, motion graphics, and high-retention reel edits.',
    duration: '2 Months Intensive',
    level: 'Beginner to Advanced'
  },
  {
    title: 'GRAPHIC DESIGN & THUMBNAIL ART',
    desc: 'Learn Adobe Photoshop and Illustrator. Design high-CTR YouTube thumbnails, Instagram carousels, and brand identity kits.',
    duration: '2 Months Intensive',
    level: 'Beginner to Professional'
  },
  {
    title: 'YOUTUBE AUTOMATION & CHANNEL SEO',
    desc: 'Scriptwriting, channel monetization, video SEO ranking, analytics modeling, and building automated cash-cow channels.',
    duration: '6 Weeks Fast Track',
    level: 'Intermediate'
  },
  {
    title: 'SOCIAL MEDIA MARKETING & META ADS',
    desc: 'Campaign setup, Facebook/Instagram ad targeting, cost-per-lead optimization, Notion CRM integration, and client acquisition.',
    duration: '2 Months Intensive',
    level: 'Career Track'
  }
];

export default function AcademyPage() {
  return (
    <main className="min-h-screen bg-white text-sociallyin-textDark font-sans">
      <Navbar />

      {/* Hero Banner for NVC Academy */}
      <section className="pt-36 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-sociallyin-blue font-gothic text-xl font-normal uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4 fill-sociallyin-blue" />
            <span>NVC ACADEMY — SKILL EMPOWERMENT</span>
          </div>

          <h1 className="font-gothic text-4xl sm:text-5xl lg:text-6xl font-normal text-sociallyin-blue uppercase tracking-tight leading-none mb-6">
            TRAINING NEXT-GEN CREATORS & <span className="yellow-underline-stroke hero-title-yellow">DIGITAL TALENT.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-sans max-w-3xl mx-auto font-medium leading-relaxed mb-12">
            Beyond agency services, NVC operates a specialized training academy in Kamoke, Gujranwala, Pakistan. We train passionate youth in video editing, graphic design, and YouTube SEO — empowering them with high-income digital skills.
          </p>

          {/* 2 Key Stats Badges */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
            <div className="sociallyin-card p-6 text-center bg-[#F4F8FE] border-2 border-[#C2DBFE]">
              <h3 className="font-gothic text-4xl text-sociallyin-blue">300+</h3>
              <p className="text-sm font-bold text-slate-700 font-sans uppercase">Students Trained & Certified in Digital Skills</p>
            </div>

            <div className="sociallyin-card p-6 text-center bg-[#F4F8FE] border-2 border-[#C2DBFE]">
              <h3 className="font-gothic text-4xl text-sociallyin-yellow">100% PRACTICAL</h3>
              <p className="text-sm font-bold text-slate-700 font-sans uppercase">Real Studio Equipment & Client Projects</p>
            </div>
          </div>

          {/* Course Offerings Grid */}
          <div className="text-left space-y-6 mb-16">
            <h2 className="font-gothic text-4xl text-sociallyin-blue uppercase text-center mb-8">
              OUR CERTIFICATION COURSES
            </h2>

            <div className="grid sm:grid-cols-2 gap-8">
              {coursesData.map((crs, idx) => (
                <div 
                  key={idx}
                  className="sociallyin-card p-8 bg-white border-2 border-[#C2DBFE] hover:border-sociallyin-blue rounded-2xl space-y-4 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold bg-blue-50 text-sociallyin-blue px-3 py-1 rounded-lg border border-blue-200 uppercase">
                      {crs.duration}
                    </span>
                    <span className="text-xs font-bold bg-amber-50 text-amber-800 px-3 py-1 rounded-lg border border-amber-200 uppercase">
                      {crs.level}
                    </span>
                  </div>

                  <h3 className="font-gothic text-3xl font-normal text-sociallyin-blue uppercase leading-tight">
                    {crs.title}
                  </h3>

                  <p className="text-sm text-slate-600 font-sans font-medium leading-relaxed">
                    {crs.desc}
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-xs font-bold text-emerald-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Includes Hands-on Studio Practice</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* High-Contrast Visible CTA Banner for Academy */}
          <div className="sociallyin-card p-8 sm:p-12 bg-[#0F172A] text-white rounded-3xl space-y-6 text-center max-w-3xl mx-auto shadow-2xl border-4 border-[#FFD000]">
            <h3 className="font-gothic text-3xl sm:text-4xl lg:text-5xl font-normal uppercase leading-tight text-[#FFD000]">
              READY TO LEARN HIGH-INCOME CREATOR SKILLS?
            </h3>
            
            <p className="text-sm sm:text-base text-slate-200 font-sans max-w-xl mx-auto font-medium leading-relaxed">
              Join our upcoming hands-on physical & online batch in Kamoke, Gujranwala. Get trained directly on real studio camera gear and client video projects.
            </p>

            <div className="pt-2">
              <a 
                href="https://wa.me/923316996815?text=Hello%20NVC%20Academy!%20I%27m%20interested%20in%20enrolling%20in%20a%20course."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-yellow text-lg sm:text-xl px-8 py-3.5 rounded-xl shadow-2xl inline-flex items-center gap-3"
              >
                <MessageSquare className="w-6 h-6" />
                <span>ENROLL IN NVC ACADEMY VIA WHATSAPP</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
