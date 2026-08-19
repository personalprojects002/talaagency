import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  Lightbulb, Video, Users, DollarSign, Target, Code, ArrowRight, CheckCircle2 
} from 'lucide-react';

const coreServicesData = [
  {
    id: 'strategy',
    icon: Lightbulb,
    title: 'SOCIAL MEDIA STRATEGY & CONSULTING',
    bullets: [
      'Building Your Roadmap for Social Success',
      'Target Audience & Competitor Analysis',
      'Platform Selection & Content Pillars',
      'ROI & Lead Goal Setting'
    ]
  },
  {
    id: 'content',
    icon: Video,
    title: 'SOCIAL CONTENT PRODUCTION',
    bullets: [
      'High-Impact 4K Video Production',
      'Engaging Reels, Shorts & Ad Creatives',
      'Graphic Design, Branding & Thumbnails',
      'Custom Scripting & Post-Production'
    ]
  },
  {
    id: 'management',
    icon: Users,
    title: 'SOCIAL MEDIA MANAGEMENT & COMMUNITY',
    bullets: [
      'Consistent Posting Across All Platforms',
      'Proactive Community DM & Comment Management',
      'Brand Voice & Reputation Monitoring',
      'Monthly Analytics & Growth Audits'
    ]
  },
  {
    id: 'paid-ads',
    icon: DollarSign,
    title: 'PAID SOCIAL ADVERTISING',
    bullets: [
      'Targeted Lead Campaigns for Consultants & Lawyers',
      'Meta, TikTok & Google Ads Optimization',
      'A/B Creative Testing & Retargeting',
      'High-ROAS E-Commerce Sales Funnels'
    ]
  },
  {
    id: 'automation',
    icon: Target,
    title: 'INFLUENCER & YOUTUBE AUTOMATION',
    bullets: [
      'YouTube Channel Setup & Monetization',
      'High-CTR Custom Thumbnail Design',
      'Influencer Vetting & Campaign Strategy',
      'Performance Measurement & Reporting'
    ]
  },
  {
    id: 'integration',
    icon: Code,
    title: 'WEBSITE & NOTION CRM INTEGRATION',
    bullets: [
      'Custom Responsive Next.js / React Websites',
      'Direct WhatsApp Consultation Booking',
      'Automated Notion Database Lead Capture',
      'Mobile Conversion Funnel Optimization'
    ]
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-sociallyin-textDark font-sans">
      <Navbar />

      {/* Main Services Banner */}
      <section className="pt-36 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
          
          <h1 className="font-gothic text-5xl sm:text-6xl lg:text-7xl font-normal text-sociallyin-blue uppercase tracking-tight leading-none mb-14">
            OUR <span className="yellow-underline-stroke hero-title-yellow">SERVICES</span>
          </h1>

          {/* 6 Core Services Grid matching exact user request */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {coreServicesData.map((srv) => (
              <div 
                key={srv.id}
                id={srv.id}
                className="sociallyin-card p-8 flex flex-col justify-between space-y-6 bg-[#F4F8FE] border-2 border-[#C2DBFE] rounded-2xl hover:border-sociallyin-blue transition-all"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-white border border-blue-200 text-sociallyin-blue flex items-center justify-center shadow-sm">
                    <srv.icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="font-gothic text-2xl sm:text-3xl font-normal text-sociallyin-blue uppercase leading-tight">
                    {srv.title}
                  </h3>

                  {/* Bullets */}
                  <div className="space-y-2 pt-2 border-t border-blue-200">
                    {srv.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs font-semibold text-slate-800 font-sans">
                        <CheckCircle2 className="w-4 h-4 text-sociallyin-blue shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Yellow Request Strategy Button matching user request */}
                <div>
                  <Link 
                    href="/#proposal-form" 
                    className="btn-yellow text-lg px-6 py-2.5 rounded-xl w-full justify-center"
                  >
                    <span>REQUEST STRATEGY</span>
                    <ArrowRight className="w-4 h-4 stroke-[3]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Bottom Blue Wavy CTA Banner */}
      <section className="relative bg-sociallyin-blue text-white py-24 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-20 space-y-6">
          <h2 className="font-gothic text-4xl sm:text-5xl lg:text-6xl font-normal uppercase tracking-tight leading-none">
            READY TO LEVERAGE SOCIAL MEDIA TO CONNECT WITH <span className="yellow-underline-stroke hero-title-yellow">YOUR</span> AUDIENCE?
          </h2>

          <div className="pt-4">
            <Link 
              href="/#proposal-form" 
              className="btn-yellow text-xl px-10 py-4 rounded-xl shadow-2xl"
            >
              GET A FREE PROPOSAL
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
