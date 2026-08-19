'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';

export default function ProposalForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vertical: 'Immigration & Visa Consultancy',
    budgetTier: '$600 - $1,000 / month (Scale Blueprint)',
    goals: 'Qualified Lead Generation',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format message for WhatsApp
    const waMessage = `*New Strategy Proposal Request (NVC Agency Website)*%0A%0A` +
      `*Full Name:* ${formData.name}%0A` +
      `*Phone/WhatsApp:* ${formData.phone}%0A` +
      `*Email:* ${formData.email || 'Not Provided'}%0A` +
      `*Industry Vertical:* ${formData.vertical}%0A` +
      `*Monthly Investment Budget:* ${formData.budgetTier}%0A` +
      `*Primary Business Goal:* ${formData.goals}%0A` +
      `*Project Notes & Requirements:* ${formData.notes || 'None'}`;

    // Open WhatsApp directly with formatted proposal parameters
    window.open(`https://wa.me/923316996815?text=${waMessage}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="proposal-form" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Contact Info */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-3">
              <span className="font-gothic text-lg font-normal text-sociallyin-blue uppercase tracking-widest bg-blue-50 px-3.5 py-0.5 rounded-full border border-blue-200 inline-block">
                GET IN TOUCH
              </span>

              <h2 className="font-gothic text-3xl sm:text-4xl font-normal text-sociallyin-blue uppercase tracking-tight leading-none">
                REQUEST YOUR CUSTOM <span className="yellow-underline-stroke hero-title-yellow">STRATEGY & PROPOSAL</span>
              </h2>

              <p className="text-slate-600 text-sm font-sans font-medium leading-relaxed">
                Send your business requirements directly to our senior strategy team. Submitting this form opens WhatsApp directly with your formatted details for instant follow-up!
              </p>
            </div>

            <div className="space-y-3 text-xs font-sans font-semibold">
              <div className="sociallyin-card p-4 flex items-start gap-3 bg-white border border-blue-200">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-gothic text-lg font-normal text-sociallyin-blue uppercase leading-none">PHONE & WHATSAPP</h4>
                  <a href="https://wa.me/923316996815" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline font-bold text-xs mt-1 block">
                    0331-6996815 (+92 331 6996815)
                  </a>
                </div>
              </div>

              <div className="sociallyin-card p-4 flex items-start gap-3 bg-white border border-blue-200">
                <div className="w-9 h-9 rounded-lg bg-blue-100 text-sociallyin-blue flex items-center justify-center shrink-0 font-bold">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-gothic text-lg font-normal text-sociallyin-blue uppercase leading-none">AGENCY EMAIL</h4>
                  <a href="mailto:nextvisioncreators@gmail.com" className="text-sociallyin-blue hover:underline font-bold text-xs mt-1 block">
                    nextvisioncreators@gmail.com
                  </a>
                </div>
              </div>

              <div className="sociallyin-card p-4 flex items-start gap-3 bg-white border border-blue-200">
                <div className="w-9 h-9 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 font-bold">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-gothic text-lg font-normal text-sociallyin-blue uppercase leading-none">PAKISTAN AGENCY HEADQUARTERS</h4>
                  <p className="text-slate-700 font-bold text-xs mt-1">Main GT Road, near Taxi Stand, Kamoke, District Gujranwala, Punjab, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="sociallyin-card p-6 sm:p-8 shadow-xl bg-white border-2 border-sociallyin-blue">
              
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-gothic text-3xl font-normal text-sociallyin-blue uppercase">WHATSAPP CHAT OPENED!</h3>
                  <p className="text-slate-600 text-xs max-w-md mx-auto font-sans font-medium">
                    Your formatted proposal request has been sent to WhatsApp. Our senior strategist will respond shortly!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-yellow text-xs px-5 py-2 rounded-md"
                  >
                    SUBMIT ANOTHER PROPOSAL
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                    <h3 className="font-gothic text-2xl font-normal text-sociallyin-blue uppercase">FREE STRATEGY PROPOSAL</h3>
                    <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-sans">
                      ● DIRECT WHATSAPP CONNECTED
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="space-y-1 text-left">
                      <label className="font-gothic text-base font-normal uppercase text-sociallyin-blue">Your Full Name *</label>
                      <input 
                        type="text" 
                        name="name" 
                        required
                        value={formData.name} 
                        onChange={handleChange}
                        placeholder="e.g. Talal Ahmad"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#F8FAFC] border border-gray-300 text-slate-900 placeholder-gray-400 focus:outline-none focus:border-sociallyin-blue text-xs font-bold font-sans"
                      />
                    </div>

                    <div className="space-y-1 text-left">
                      <label className="font-gothic text-base font-normal uppercase text-sociallyin-blue">Phone / WhatsApp Number *</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        required
                        value={formData.phone} 
                        onChange={handleChange}
                        placeholder="e.g. 0331-6996815"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#F8FAFC] border border-gray-300 text-slate-900 placeholder-gray-400 focus:outline-none focus:border-sociallyin-blue text-xs font-bold font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="space-y-1 text-left">
                      <label className="font-gothic text-base font-normal uppercase text-sociallyin-blue">Email Address</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange}
                        placeholder="e.g. client@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#F8FAFC] border border-gray-300 text-slate-900 placeholder-gray-400 focus:outline-none focus:border-sociallyin-blue text-xs font-bold font-sans"
                      />
                    </div>

                    <div className="space-y-1 text-left">
                      <label className="font-gothic text-base font-normal uppercase text-sociallyin-blue">Target Industry Vertical *</label>
                      <select 
                        name="vertical" 
                        value={formData.vertical} 
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#F8FAFC] border border-gray-300 text-slate-900 focus:outline-none focus:border-sociallyin-blue text-xs font-bold font-sans"
                      >
                        <option value="Immigration & Visa Consultancy">Immigration & Visa Consultancy</option>
                        <option value="Law Firm & Legal Practice">Law Firm & Legal Practice</option>
                        <option value="Educational Institute / Academy">Educational Institute / Academy</option>
                        <option value="E-Commerce Brand / Amazon Store">E-Commerce Brand / Amazon Store</option>
                        <option value="Corporate & Business Consulting">Corporate & Business Consulting</option>
                        <option value="Local Service Business">Local Service Business</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="space-y-1 text-left">
                      <label className="font-gothic text-base font-normal uppercase text-sociallyin-blue">Monthly Investment Budget</label>
                      <select 
                        name="budgetTier" 
                        value={formData.budgetTier} 
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#F8FAFC] border border-gray-300 text-slate-900 focus:outline-none focus:border-sociallyin-blue text-xs font-bold font-sans"
                      >
                        <option value="$300 - $500 / month (Starter Plan)">$300 - $500 / month (Starter Plan)</option>
                        <option value="$600 - $1,000 / month (Scale Blueprint)">$600 - $1,000 / month (Scale Blueprint)</option>
                        <option value="$1,200 - $2,500+ / month (Dominance Suite)">$1,200 - $2,500+ / month (Dominance Suite)</option>
                        <option value="Custom Budget / Flexible Range">Custom Budget / Flexible Range</option>
                      </select>
                    </div>

                    <div className="space-y-1 text-left">
                      <label className="font-gothic text-base font-normal uppercase text-sociallyin-blue">Primary Business Goal</label>
                      <select 
                        name="goals" 
                        value={formData.goals} 
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#F8FAFC] border border-gray-300 text-slate-900 focus:outline-none focus:border-sociallyin-blue text-xs font-bold font-sans"
                      >
                        <option value="Qualified Lead Generation">Qualified Lead Generation</option>
                        <option value="Brand Authority & Consultations">Brand Authority & Consultations</option>
                        <option value="E-Commerce Sales & ROAS">E-Commerce Sales & ROAS</option>
                        <option value="Student Course Admissions">Student Course Admissions</option>
                        <option value="Full Social Media Overhaul">Full Social Media Overhaul</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1 text-left">
                    <label className="font-gothic text-base font-normal uppercase text-sociallyin-blue">Tell Us About Your Project & Requirements</label>
                    <textarea 
                      name="notes" 
                      rows={3}
                      value={formData.notes} 
                      onChange={handleChange}
                      placeholder="Mention your current website, target goals, or custom budget details..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#F8FAFC] border border-gray-300 text-slate-900 placeholder-gray-400 focus:outline-none focus:border-sociallyin-blue text-xs font-bold font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-yellow text-lg w-full justify-center py-3 rounded-xl shadow-lg"
                  >
                    <Send className="w-5 h-5" />
                    <span>SUBMIT PROPOSAL & OPEN WHATSAPP</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
