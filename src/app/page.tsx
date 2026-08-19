import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import WaveAboutSection from '@/components/WaveAboutSection';
import ServicesGrid from '@/components/ServicesGrid';
import BudgetPlanner from '@/components/BudgetPlanner';
import StudioShowcase from '@/components/StudioShowcase';
import WhyChooseSection from '@/components/WhyChooseSection';
import CaseStudies from '@/components/CaseStudies';
import AcademyShowcase from '@/components/AcademyShowcase';
import Testimonials from '@/components/Testimonials';
import ProposalForm from '@/components/ProposalForm';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-sociallyin-textDark font-sans overflow-x-hidden selection:bg-sociallyin-yellow selection:text-black">
      <Navbar />
      <Hero />
      <ProblemSection />
      <WaveAboutSection />
      <ServicesGrid />
      <BudgetPlanner />
      <StudioShowcase />
      <WhyChooseSection />
      <CaseStudies />
      <AcademyShowcase />
      <Testimonials />
      <ProposalForm />
      <Footer />
    </main>
  );
}
