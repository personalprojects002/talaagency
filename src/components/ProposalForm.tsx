'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, Mail, MapPin } from 'lucide-react';

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

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      // Submit to Notion API endpoint
      const res = await fetch('/api/proposals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || 'Failed to submit proposal request.');
      }

      setSubmitted(true);
      setLoading(false);

      // WhatsApp dispatch to 0331-6996815
      const waMessage = `*New Strategy Proposal Request (NVC Website)*%0A%0A` +
        `*Name:* ${formData.name}%0A` +
        `*Phone:* ${formData.phone}%0A` +
        `*Email:* ${formData.email || 'N/A'}%0A` +
        `*Industry:* ${formData.vertical}%0A` +
        `*Budget:* ${formData.budgetTier}%0A` +
        `*Goals:* ${formData.goals}%0A` +
        `*Notes:* ${formData.notes || 'None'}`;

      window.open(`https://wa.me/923316996815?text=${waMessage}`, '_blank');

      setFormData({
        name: '',
        email: '',
        phone: '',
        vertical: 'Immigration & Visa Consultancy',
        budgetTier: '$600 - $1,000 / month (Scale Blueprint)',
        goals: 'Qualified Lead Generation',
        notes: ''
      });

    } catch (err: any) {
      console.error('Submission error:', err);
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <section id="proposal-form" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Contact Info */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <span className="font-gothic text-xl font-normal text-sociallyin-blue uppercase tracking-widest bg-blue-50 px-4 py-1 rounded-full border border-blue-200 inline-block">
                GET IN TOUCH
              </span>

              <h2 className="font-gothic text-4xl sm:text-5xl font-normal text-sociallyin-blue uppercase tracking-tight leading-none">
                REQUEST YOUR CUSTOM <span className="yellow-underline-stroke hero-title-yellow">STRATEGY & PROPOSAL</span>
              </h2>

              <p className="text-slate-600 text-base font-sans font-medium leading-relaxed">
                Send your business requirements directly to our senior strategy team. All proposals are saved directly into our <strong className="text-slate-900 font-bold">Notion CRM Database</strong> and trigger instant WhatsApp consultation follow-ups.
              </p>
            </div>

            <div className="space-y-4 text-sm font-sans font-semibold">
              <div className="sociallyin-card p-5 flex items-start gap-4 bg-white border border-blue-200">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-gothic text-xl font-normal text-sociallyin-blue uppercase leading-none">PHONE & WHATSAPP</h4>
                  <a href="https://wa.me/923316996815" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline font-bold text-xs mt-1 block">
                    0331-6996815 (+92 331 6996815)
                  </a>
                </div>
              </div>

              <div className="sociallyin-card p-5 flex items-start gap-4 bg-white border border-blue-200">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-sociallyin-blue flex items-center justify-center shrink-0 font-bold">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-gothic text-xl font-normal text-sociallyin-blue uppercase leading-none">AGENCY EMAIL</h4>
                  <a href="mailto:nextvisioncreators@gmail.com" className="text-sociallyin-blue hover:underline font-bold text-xs mt-1 block">
                    nextvisioncreators@gmail.com
                  </a>
                </div>
              </div>

              <div className="sociallyin-card p-5 flex items-start gap-4 bg-white border border-blue-200">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-gothic text-xl font-normal text-sociallyin-blue uppercase leading-none">PAKISTAN AGENCY HEADQUARTERS</h4>
                  <p className="text-slate-700 font-bold text-xs mt-1">Main GT Road, near Taxi Stand, Kamoke, District Gujranwala, Punjab, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="sociallyin-card p-8 sm:p-10 shadow-2xl bg-white border-2 border-sociallyin-blue">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-gothic text-3xl font-normal text-sociallyin-blue uppercase">PROPOSAL REQUEST RECEIVED!</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto font-sans font-medium">
                    Your details have been logged into our Notion CRM. Our senior strategist will message you on WhatsApp shortly!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-yellow text-sm px-6 py-2.5 rounded-md"
                  >
                    SUBMIT ANOTHER REQUEST
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                    <h3 className="font-gothic text-3xl font-normal text-sociallyin-blue uppercase">FREE STRATEGY PROPOSAL</h3>
                    <span className="text-xs text-emerald-700 font-bold uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 font-sans">
                      ● Notion CRM Connected
                    </span>
                  </div>

                  {errorMsg && (
                    <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2 font-sans">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5 text-left">
                      <label className="font-gothic text-lg font-normal uppercase text-sociallyin-blue">Your Full Name *</label>
                      <input 
                        type="text" 
                        name="name" 
                        required
                        value={formData.name} 
                        onChange={handleChange}
                        placeholder="e.g. Talal Ahmad"
                        className="w-full px-4 py-3 rounded-lg bg-[#F8FAFC] border border-gray-300 text-slate-900 placeholder-gray-400 focus:outline-none focus:border-sociallyin-blue text-sm font-bold font-sans"
                      />
                    </div>

                    <div className="space-y-1.5 text-left">
                      <label className="font-gothic text-lg font-normal uppercase text-sociallyin-blue">Phone / WhatsApp Number *</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        required
                        value={formData.phone} 
                        onChange={handleChange}
                        placeholder="e.g. 0331-6996815"
                        className="w-full px-4 py-3 rounded-lg bg-[#F8FAFC] border border-gray-300 text-slate-900 placeholder-gray-400 focus:outline-none focus:border-sociallyin-blue text-sm font-bold font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5 text-left">
                      <label className="font-gothic text-lg font-normal uppercase text-sociallyin-blue">Email Address</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange}
                        placeholder="e.g. client@company.com"
                        className="w-full px-4 py-3 rounded-lg bg-[#F8FAFC] border border-gray-300 text-slate-900 placeholder-gray-400 focus:outline-none focus:border-sociallyin-blue text-sm font-bold font-sans"
                      />
                    </div>

                    <div className="space-y-1.5 text-left">
                      <label className="font-gothic text-lg font-normal uppercase text-sociallyin-blue">Target Industry Vertical *</label>
                      <select 
                        name="vertical" 
                        value={formData.vertical} 
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-[#F8FAFC] border border-gray-300 text-slate-900 focus:outline-none focus:border-sociallyin-blue text-sm font-bold font-sans"
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

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5 text-left">
                      <label className="font-gothic text-lg font-normal uppercase text-sociallyin-blue">Monthly Investment Budget</label>
                      <select 
                        name="budgetTier" 
                        value={formData.budgetTier} 
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-[#F8FAFC] border border-gray-300 text-slate-900 focus:outline-none focus:border-sociallyin-blue text-sm font-bold font-sans"
                      >
                        <option value="$300 - $500 / month (Starter Plan)">$300 - $500 / month (Starter Plan)</option>
                        <option value="$600 - $1,000 / month (Scale Blueprint)">$600 - $1,000 / month (Scale Blueprint)</option>
                        <option value="$1,200 - $2,500+ / month (Dominance Suite)">$1,200 - $2,500+ / month (Dominance Suite)</option>
                      </select>
                    </div>

                    <div className="space-y-1.5 text-left">
                      <label className="font-gothic text-lg font-normal uppercase text-sociallyin-blue">Primary Business Goal</label>
                      <select 
                        name="goals" 
                        value={formData.goals} 
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-[#F8FAFC] border border-gray-300 text-slate-900 focus:outline-none focus:border-sociallyin-blue text-sm font-bold font-sans"
                      >
                        <option value="Qualified Lead Generation">Qualified Lead Generation</option>
                        <option value="Brand Authority & Consultations">Brand Authority & Consultations</option>
                        <option value="E-Commerce Sales & ROAS">E-Commerce Sales & ROAS</option>
                        <option value="Student Course Admissions">Student Course Admissions</option>
                        <option value="Full Social Media Overhaul">Full Social Media Overhaul</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className="font-gothic text-lg font-normal uppercase text-sociallyin-blue">Tell Us About Your Project & Requirements</label>
                    <textarea 
                      name="notes" 
                      rows={3}
                      value={formData.notes} 
                      onChange={handleChange}
                      placeholder="Mention your current website, target goals, or specific questions..."
                      className="w-full px-4 py-3 rounded-lg bg-[#F8FAFC] border border-gray-300 text-slate-900 placeholder-gray-400 focus:outline-none focus:border-sociallyin-blue text-sm font-bold font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-yellow text-xl w-full justify-center py-4 rounded-xl shadow-xl"
                  >
                    {loading ? (
                      <span>SENDING TO NOTION...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>SUBMIT PROPOSAL & OPEN WHATSAPP</span>
                      </>
                    )}
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
