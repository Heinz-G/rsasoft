"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { 
  ArrowRight, 
  Check, 
  Mail,
  Phone,
  MapPin,
  Clock,
  Calendar,
  MessageSquare
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    interest: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#0a0f14] text-slate-200">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12 relative grid-pattern noise-overlay">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-widest text-amber-500 mb-4">
              GET IN TOUCH
            </p>
            
            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-slate-100 mb-6 leading-tight">
              Book Your Free ERP Audit
            </h1>
            
            <p className="text-lg text-slate-400 leading-relaxed">
              30 minutes. Zero obligation. We'll identify where you're bleeding time and show you 
              the fix—whether you hire us or not.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-8 text-center">
                  <Check className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                  <h2 className="font-display text-2xl font-medium text-slate-100 mb-2">
                    Thanks for reaching out!
                  </h2>
                  <p className="text-slate-400">
                    We'll be in touch within 24 hours to schedule your free audit.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-slate-400 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-900/50 border border-slate-700/50 rounded-lg px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-amber-500/50 transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-slate-400 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-900/50 border border-slate-700/50 rounded-lg px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-amber-500/50 transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-slate-400 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-slate-900/50 border border-slate-700/50 rounded-lg px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-amber-500/50 transition-colors"
                        placeholder="Acme Manufacturing"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-slate-400 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-900/50 border border-slate-700/50 rounded-lg px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-amber-500/50 transition-colors"
                        placeholder="+27 82 123 4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-slate-400 mb-2">
                      What are you interested in? *
                    </label>
                    <select
                      required
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full bg-slate-900/50 border border-slate-700/50 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-amber-500/50 transition-colors"
                    >
                      <option value="">Select an option</option>
                      <option value="dashboards">SYSPRO Dashboards</option>
                      <option value="edi">EDI / Retail Integrations</option>
                      <option value="automation">Workflow Automation</option>
                      <option value="custom">Custom Development</option>
                      <option value="audit">Free ERP Audit</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-slate-400 mb-2">
                      Tell us about your needs
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-900/50 border border-slate-700/50 rounded-lg px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-amber-500/50 transition-colors resize-none"
                      placeholder="What problems are you trying to solve? What does your current SYSPRO setup look like?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-[#0a0f14] font-medium px-8 py-4 rounded text-base transition-all hover:shadow-lg hover:shadow-amber-500/25"
                  >
                    Submit Request
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* What to expect */}
              <div className="bg-slate-900/50 border border-slate-700/30 rounded-lg p-6">
                <h3 className="font-display text-lg font-medium text-slate-200 mb-4">
                  What Happens Next
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: Calendar, text: "We'll respond within 24 hours to schedule a call" },
                    { icon: Clock, text: "30-minute video call to understand your needs" },
                    { icon: MessageSquare, text: "We'll identify 3-5 quick wins for your SYSPRO" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <item.icon className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-400">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact details */}
              <div className="bg-slate-900/50 border border-slate-700/30 rounded-lg p-6">
                <h3 className="font-display text-lg font-medium text-slate-200 mb-4">
                  Contact Details
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-slate-500">Email</p>
                      <a 
                        href="mailto:info@rsasoft.co.za" 
                        className="text-slate-300 hover:text-amber-400 transition-colors"
                      >
                        info@rsasoft.co.za
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-slate-500">Location</p>
                      <p className="text-slate-300">South Africa</p>
                      <p className="text-xs text-slate-500 mt-1">Serving clients globally</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantee */}
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
                <h3 className="font-display text-lg font-medium text-slate-200 mb-2">
                  Our Guarantee
                </h3>
                <p className="text-sm text-slate-400">
                  If you don't see measurable improvement within 90 days of go-live, we keep 
                  working at no additional cost until you do. No risk, no excuses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
