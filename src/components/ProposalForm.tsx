'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, MessageSquare, Sparkles, Building, Phone, Mail, MapPin, Clock } from 'lucide-react';

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
      // 1. Submit to Notion API endpoint
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

      // 2. Trigger instant WhatsApp message to agency number (0331-6996815)
      const waMessage = `*New Agency Strategy Request (NVC Website)*%0A%0A` +
        `*Name:* ${formData.name}%0A` +
        `*Phone:* ${formData.phone}%0A` +
        `*Email:* ${formData.email || 'N/A'}%0A` +
        `*Industry:* ${formData.vertical}%0A` +
        `*Budget:* ${formData.budgetTier}%0A` +
        `*Goals:* ${formData.goals}%0A` +
        `*Notes:* ${formData.notes || 'None'}`;

      window.open(`https://wa.me/923316996815?text=${waMessage}`, '_blank');

      // Reset form
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
    <section id="proposal-form" className="py-24 bg-[#08080C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left Agency Address & Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Let's Discuss Growth
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Request Your Custom Strategy & Proposal.
              </h2>

              <p className="text-gray-300 text-base leading-relaxed">
                Fill out the form to send your project details directly into our <strong className="text-white">Notion Lead Database</strong> and trigger an instant WhatsApp consultation call.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 text-sm">
              
              <div className="glass-panel p-5 rounded-2xl border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Direct Phone & WhatsApp</h4>
                  <a href="https://wa.me/923316996815" target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-semibold hover:underline">
                    0331-6996815 (+92 331 6996815)
                  </a>
                </div>
              </div>

              <div className="glass-panel p-5 rounded-2xl border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Official Agency Email</h4>
                  <a href="mailto:nextvisioncreators@gmail.com" className="text-blue-400 font-semibold hover:underline">
                    nextvisioncreators@gmail.com
                  </a>
                </div>
              </div>

              <div className="glass-panel p-5 rounded-2xl border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Agency Studio Address</h4>
                  <p className="text-gray-300">Main GT Road, near Taxi Stand, Kamoke, District Gujranwala, Punjab, Pakistan</p>
                </div>
              </div>

              <div className="glass-panel p-5 rounded-2xl border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Business Hours</h4>
                  <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM | Sat: 10:00 AM - 4:00 PM</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Strategy Proposal Submitted!</h3>
                  <p className="text-gray-300 text-sm max-w-md mx-auto">
                    Your details have been logged directly into our Notion Database API. Our senior strategy lead will contact you via WhatsApp shortly!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <h3 className="text-xl font-bold text-white">Get Custom Growth Plan</h3>
                    <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      Notion CRM Connected
                    </span>
                  </div>

                  {errorMsg && (
                    <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-300">Your Full Name *</label>
                      <input 
                        type="text" 
                        name="name" 
                        required
                        value={formData.name} 
                        onChange={handleChange}
                        placeholder="e.g. Talal Ahmad"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-300">Phone / WhatsApp Number *</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        required
                        value={formData.phone} 
                        onChange={handleChange}
                        placeholder="e.g. 0331-6996815"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-300">Email Address</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange}
                        placeholder="e.g. client@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-300">Target Industry Vertical *</label>
                      <select 
                        name="vertical" 
                        value={formData.vertical} 
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#121320] border border-white/10 text-white focus:outline-none focus:border-blue-500 text-sm"
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
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-300">Estimated Monthly Budget</label>
                      <select 
                        name="budgetTier" 
                        value={formData.budgetTier} 
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#121320] border border-white/10 text-white focus:outline-none focus:border-blue-500 text-sm"
                      >
                        <option value="$300 - $500 / month (Starter Plan)">$300 - $500 / month (PKR 85k-140k)</option>
                        <option value="$600 - $1,000 / month (Scale Blueprint)">$600 - $1,000 / month (PKR 170k-280k)</option>
                        <option value="$1,200 - $2,500+ / month (Dominance Suite)">$1,200 - $2,500+ / month (PKR 340k-700k+)</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-300">Primary Goal</label>
                      <select 
                        name="goals" 
                        value={formData.goals} 
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#121320] border border-white/10 text-white focus:outline-none focus:border-blue-500 text-sm"
                      >
                        <option value="Qualified Lead Generation">Qualified Lead Generation</option>
                        <option value="Brand Authority & Legal Consultations">Brand Authority & Consultations</option>
                        <option value="E-Commerce Sales & ROAS">E-Commerce Sales & ROAS</option>
                        <option value="Student Admissions">Student Course Admissions</option>
                        <option value="Full Social Media Overhaul">Full Social Media Overhaul</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-300">Tell Us About Your Project & Requirements</label>
                    <textarea 
                      name="notes" 
                      rows={4}
                      value={formData.notes} 
                      onChange={handleChange}
                      placeholder="Mention any current website links, social channels, or specific targets..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-bold text-base shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-60"
                  >
                    {loading ? (
                      <span>Sending To Notion...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Submit Strategy Request & Open WhatsApp</span>
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
