import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import VerticalsShowcase from '@/components/VerticalsShowcase';
import BudgetPlanner from '@/components/BudgetPlanner';
import StudioShowcase from '@/components/StudioShowcase';
import ServicesGrid from '@/components/ServicesGrid';
import CaseStudies from '@/components/CaseStudies';
import AcademyShowcase from '@/components/AcademyShowcase';
import Testimonials from '@/components/Testimonials';
import ProposalForm from '@/components/ProposalForm';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#08080C] text-gray-100 overflow-x-hidden selection:bg-blue-600 selection:text-white">
      <Navbar />
      <Hero />
      <VerticalsShowcase />
      <BudgetPlanner />
      <StudioShowcase />
      <ServicesGrid />
      <CaseStudies />
      <AcademyShowcase />
      <Testimonials />
      <ProposalForm />
      <Footer />
    </main>
  );
}
