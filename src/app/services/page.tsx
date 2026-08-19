import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  Lightbulb, ShieldCheck, Users, Video, DollarSign, Target, ShoppingBag, 
  MessageSquare, Share2, BarChart3, Bot, Cog, Puzzle, Package, Radio, ArrowRight 
} from 'lucide-react';

const servicesList = [
  {
    id: 'strategy',
    icon: Lightbulb,
    title: 'SOCIAL MEDIA STRATEGY',
    desc: 'Tailored research, platform selection, content pillars, and ROI-focused roadmaps for your business goals.',
    buttonText: 'DISCOVER SOCIAL STRATEGY'
  },
  {
    id: 'management',
    icon: ShieldCheck,
    title: 'SOCIAL MEDIA MANAGEMENT',
    desc: 'End-to-end multi-channel posting, brand voice curation, scheduling, and consistent audience growth.',
    buttonText: 'DISCOVER MANAGEMENT'
  },
  {
    id: 'community',
    icon: Users,
    title: 'COMMUNITY MANAGEMENT & LISTENING',
    desc: 'Proactive comment replies, DM monitoring, sentiment analysis, and active customer engagement.',
    buttonText: 'DISCOVER COMMUNITY'
  },
  {
    id: 'content',
    icon: Video,
    title: 'SOCIAL CONTENT PRODUCTION',
    desc: 'Custom high-retention video reels, graphic design, copywriting, thumbnails, and creative ad assets.',
    buttonText: 'DISCOVER CONTENT PRODUCTION'
  },
  {
    id: 'paid-ads',
    icon: DollarSign,
    title: 'PAID SOCIAL ADVERTISING',
    desc: 'High-ROAS Meta, TikTok, and Google ad campaigns targeting qualified clients, students, and buyers.',
    buttonText: 'DISCOVER PAID ADVERTISING'
  },
  {
    id: 'influencer',
    icon: Target,
    title: 'INFLUENCER MARKETING',
    desc: 'Strategic creator outreach, campaign management, product seeding, and performance measurement.',
    buttonText: 'DISCOVER INFLUENCER MARKETING'
  },
  {
    id: 'social-selling',
    icon: ShoppingBag,
    title: 'SOCIAL SELLING',
    desc: 'Direct-to-consumer social shop funnels, Instagram & TikTok storefront setup, and conversion optimization.',
    buttonText: 'DISCOVER SOCIAL SELLING'
  },
  {
    id: 'consulting',
    icon: MessageSquare,
    title: 'SOCIAL MEDIA CONSULTING',
    desc: 'One-on-one executive training, internal team audits, and custom strategy blueprints for scaling in-house.',
    buttonText: 'DISCOVER CONSULTING'
  },
  {
    id: 'outbound',
    icon: Share2,
    title: 'OUTBOUND ENGAGEMENT',
    desc: 'Active outreach to industry leaders, niche communities, and prospective B2B clients on LinkedIn & Instagram.',
    buttonText: 'DISCOVER ENGAGEMENT'
  },
  {
    id: 'data-analysis',
    icon: BarChart3,
    title: 'ROI DATA ANALYSIS & REPORTING',
    desc: 'In-depth monthly reports tracking cost-per-lead, conversion rates, campaign ROAS, and bottom-line growth.',
    buttonText: 'DISCOVER DATA REPORTING'
  },
  {
    id: 'assistant',
    icon: Bot,
    title: 'SOCIAL SELLING ASSISTANT',
    desc: 'AI-driven chat assistants and automated DM funnels to qualify leads 24/7 and book appointments.',
    buttonText: 'DISCOVER ASSISTANT'
  },
  {
    id: 'automation',
    icon: Cog,
    title: 'SOCIAL SELLING AUTOMATION',
    desc: 'Streamlined lead capture connecting social ads directly to your Notion CRM Database & WhatsApp alerts.',
    buttonText: 'DISCOVER AUTOMATION'
  },
  {
    id: 'workshop',
    icon: Puzzle,
    title: 'SOCIAL SELLING WORKSHOP',
    desc: 'Interactive team workshops teaching modern social sales techniques, storytelling, and content creation.',
    buttonText: 'DISCOVER WORKSHOP'
  },
  {
    id: 'white-label',
    icon: Package,
    title: 'SOCIAL SELLING WHITE LABEL',
    desc: 'White-label agency execution for corporate partners and consulting firms wanting behind-the-scenes delivery.',
    buttonText: 'DISCOVER WHITE LABEL'
  },
  {
    id: 'creatives',
    icon: Radio,
    title: 'NVC CREATIVE PRODUCTIONS',
    desc: 'Specialized video shoots, studio podcast recordings, product photography, and brand cinematic reels.',
    buttonText: 'DISCOVER CREATIVES'
  },
  {
    id: 'reddit',
    icon: MessageSquare,
    title: 'REDDIT MARKETING AGENCY',
    desc: 'Niche subreddit community building, sponsored posts, and organic brand integration on Reddit.',
    buttonText: 'DISCOVER REDDIT MARKETING'
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-sociallyin-textDark font-sans">
      <Navbar />

      {/* Main Services Banner matching screenshot */}
      <section className="pt-36 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
          
          <h1 className="font-gothic text-5xl sm:text-6xl lg:text-7xl font-normal text-sociallyin-blue uppercase tracking-tight leading-none mb-14">
            OUR <span className="yellow-underline-stroke hero-title-yellow">SERVICES</span>
          </h1>

          {/* 2-Column Grid of Light Blue Cards matching attached screenshot */}
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {servicesList.map((srv) => (
              <div 
                key={srv.id}
                id={srv.id}
                className="sociallyin-card p-8 flex flex-col justify-between space-y-6 bg-[#F4F8FE] border-2 border-[#C2DBFE] rounded-2xl hover:border-sociallyin-blue transition-all"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-white border border-blue-200 text-sociallyin-blue flex items-center justify-center shadow-sm">
                    <srv.icon className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="font-gothic text-3xl font-normal text-sociallyin-blue uppercase leading-tight">
                    {srv.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm font-medium text-slate-600 font-sans leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                {/* Yellow Button matching screenshot */}
                <div>
                  <Link 
                    href="/#proposal-form" 
                    className="btn-yellow text-lg px-6 py-2.5 rounded-xl w-full sm:w-auto justify-center"
                  >
                    <span>{srv.buttonText}</span>
                    <ArrowRight className="w-4 h-4 stroke-[3]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Bottom Blue Wavy CTA Banner matching attached screenshot bottom */}
      <section className="relative bg-sociallyin-blue text-white py-24 overflow-hidden">
        
        {/* Top Wave */}
        <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none z-10">
          <svg className="relative block w-full h-12 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor"></path>
          </svg>
        </div>

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

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-10">
          <svg className="relative block w-full h-12 text-sociallyin-textDark" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>

      </section>

      <Footer />
    </main>
  );
}
