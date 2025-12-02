"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { 
  ArrowRight, 
  Check, 
  Quote, 
  Award, 
  TrendingUp,
  FileText,
  Mail,
  Zap,
  Building2,
  Newspaper
} from "lucide-react";
import { 
  stats, 
  solutions, 
  painPoints, 
  processSteps, 
  featuredClients,
  retailerIntegrations,
  allClients 
} from "@/data/company-data";

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setSectionRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };

  // Select featured client names for the proof bar
  const proofBarClients = ["On The Dot", "Libstar", "Rhodes Food Group", "Lancewood", "SPAR"];

  return (
    <main className="min-h-screen bg-[#0a0f14] text-slate-200">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden grid-pattern noise-overlay">
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-slate-700/20 rounded-full blur-3xl" />
        <div className="absolute top-32 right-20 w-px h-48 bg-gradient-to-b from-amber-500/50 to-transparent hidden lg:block" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 relative z-10">
          <div className="max-w-4xl">
            {/* Award Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
            >
              <Award className="w-4 h-4 text-amber-500" />
              <span className="text-sm text-amber-400 font-medium">
                SYSPRO Integration Award 2025 — SYSPRO hired us directly
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] mb-8">
              <span
                className="block text-slate-100 opacity-0 animate-fade-up"
                style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
              >
                Your ERP Should Run
              </span>
              <span
                className="block text-slate-100 opacity-0 animate-fade-up"
                style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
              >
                Like a Well-Oiled Machine.
              </span>
              <span
                className="block text-slate-500 opacity-0 animate-fade-up"
                style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
              >
                Right Now, It Doesn't.
              </span>
            </h1>

            {/* Subhead */}
            <p
              className="text-lg sm:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed opacity-0 animate-fade-up"
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
            >
              We build custom SYSPRO dashboards and integrations that eliminate manual work. 
              We've processed <span className="text-amber-400 font-semibold">58,000+ Pick n Pay orders</span> and 
              created <span className="text-amber-400 font-semibold">460,000+ sales orders</span> for 
              On The Dot—South Africa's largest media logistics company.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 mb-16 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-[#0a0f14] font-medium px-8 py-4 rounded text-base transition-all hover:shadow-lg hover:shadow-amber-500/25"
              >
                Book Your Free ERP Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/dashboards"
                className="inline-flex items-center gap-2 border border-slate-700 text-slate-300 hover:border-amber-500 hover:text-amber-400 px-8 py-4 rounded text-base transition-all bg-transparent"
              >
                Browse 60+ Dashboards
              </Link>
            </div>

            {/* Proof bar */}
            <div
              className="opacity-0 animate-fade-up"
              style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
            >
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-4">
                Trusted by leading manufacturers and distributors
              </p>
              <div className="flex flex-wrap items-center gap-6 sm:gap-8">
                {proofBarClients.map((client) => (
                  <span
                    key={client}
                    className="text-slate-500 font-medium text-sm hover:text-slate-300 transition-colors cursor-default"
                  >
                    {client}
                  </span>
                ))}
                <span className="text-slate-600 text-sm">+ 60 more</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-up" 
          style={{ animationDelay: "1s", animationFillMode: "forwards" }}
        >
          <span className="text-xs text-slate-600 uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
        </div>
      </section>

      {/* Featured Case Study - On The Dot */}
      <section
        id="case-study"
        ref={setSectionRef("case-study")}
        className="py-24 lg:py-32 relative bg-gradient-to-b from-slate-900/50 to-transparent"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`reveal ${visibleSections["case-study"] ? "visible" : ""}`}>
            {/* Section label */}
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-4 h-4 text-amber-500" />
              <p className="font-mono text-xs tracking-widest text-amber-500">FEATURED PROJECT</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-100 mb-6 leading-tight">
                  SYSPRO Hired Us for Their Largest Retail Integration
                </h2>
                
                <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                  <span className="text-slate-200 font-medium">On The Dot</span> distributes 95% of South Africa's 
                  magazines and 68% of newspapers. When SYSPRO needed a partner for this critical EDI integration 
                  with Pick n Pay, they called us.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "58,014+ Pick n Pay purchase orders processed since August 2025",
                    "460,000+ sales orders created automatically from forecasts",
                    "Automated invoice generation for every single PO",
                    "Zero integration failures—100% uptime"
                  ].map((stat, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{stat}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/integrations"
                  className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 font-medium transition-colors group"
                >
                  See how we do retail integrations
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Stats Card */}
              <div className="bg-slate-900/80 border border-slate-700/30 rounded-2xl p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <Newspaper className="w-8 h-8 text-amber-500" />
                  <div>
                    <h3 className="font-display text-xl font-semibold text-slate-100">On The Dot</h3>
                    <p className="text-sm text-slate-500">Media Logistics Leader</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                    <div className="text-amber-gradient font-display text-3xl sm:text-4xl font-bold mb-1">58K+</div>
                    <div className="text-sm text-slate-400">POs Processed</div>
                  </div>
                  <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                    <div className="text-amber-gradient font-display text-3xl sm:text-4xl font-bold mb-1">460K+</div>
                    <div className="text-sm text-slate-400">Sales Orders</div>
                  </div>
                  <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                    <div className="text-amber-gradient font-display text-3xl sm:text-4xl font-bold mb-1">100%</div>
                    <div className="text-sm text-slate-400">Uptime</div>
                  </div>
                  <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                    <div className="text-amber-gradient font-display text-3xl sm:text-4xl font-bold mb-1">3mo</div>
                    <div className="text-sm text-slate-400">Since Launch</div>
                  </div>
                </div>

                <p className="mt-6 text-sm text-slate-500 text-center">
                  Stats as of December 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section
        id="problem"
        ref={setSectionRef("problem")}
        className="py-24 lg:py-32 relative"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`reveal ${visibleSections.problem ? "visible" : ""}`}>
            <p className="font-mono text-xs tracking-widest text-rose-500 mb-4">THE REALITY</p>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-100 mb-6 max-w-3xl leading-tight">
              You're Working Too Hard for Information That Should Be Instant
            </h2>
            
            <p className="text-lg text-slate-400 max-w-2xl mb-16">
              Every day, your team wastes hours hunting for data that lives inside SYSPRO—but might 
              as well be locked in a vault.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {painPoints.map((point, i) => (
                <div
                  key={point.title}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/30 p-6 rounded-lg hover:border-rose-500/30 transition-all duration-300"
                >
                  <h3 className="font-display text-xl font-medium text-slate-200 mb-3">
                    {point.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-12 text-slate-500 text-center max-w-2xl mx-auto">
              Your SYSPRO has the data. You just can't access it fast enough to run your business properly.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section
        id="solutions"
        ref={setSectionRef("solutions")}
        className="py-24 lg:py-32 relative bg-slate-900/30"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`reveal ${visibleSections.solutions ? "visible" : ""}`}>
            <p className="font-mono text-xs tracking-widest text-amber-500 mb-4">THREE WAYS WE FIX IT</p>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-100 mb-16 max-w-3xl leading-tight">
              Solutions That Actually Solve Problems
            </h2>

            <div className="space-y-8">
              {solutions.map((solution, i) => (
                <div
                  key={solution.num}
                  className="bg-slate-900/80 border border-slate-700/30 rounded-lg p-8 lg:p-10 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12">
                    <div className="flex-shrink-0">
                      <span className="font-mono text-5xl lg:text-6xl font-medium text-slate-800">
                        {solution.num}
                      </span>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-mono text-sm tracking-wider text-amber-500 mb-4">
                        {solution.title}
                      </h3>
                      <p className="text-lg text-slate-300 mb-4 leading-relaxed">
                        {solution.fullDesc}
                      </p>
                      <p className="text-sm text-emerald-400 mb-6 font-medium">
                        {solution.benefit}
                      </p>
                      <Link
                        href={`/${solution.slug}`}
                        className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 font-medium transition-colors group"
                      >
                        {solution.cta}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SPAR Email Automation Highlight */}
      <section
        id="email-automation"
        ref={setSectionRef("email-automation")}
        className="py-24 lg:py-32 relative"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`reveal ${visibleSections["email-automation"] ? "visible" : ""}`}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Mail className="w-4 h-4 text-amber-500" />
                  <p className="font-mono text-xs tracking-widest text-amber-500">AUTOMATION IN ACTION</p>
                </div>
                
                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 mb-6 leading-tight">
                  10,000+ Invoices Per Month. Zero Manual Effort.
                </h2>
                
                <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                  For SPAR, we built an integration that programmatically calls SSRS reports, 
                  generates PDF invoices, and sends them via custom-designed emails—automatically.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "SSRS reports called programmatically",
                    "PDFs generated automatically from report data",
                    "Custom email templates with your branding",
                    "Sent to the right contact, every time"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <p className="text-slate-500 mb-6">
                  <span className="text-slate-300">The untapped potential:</span> Most companies send 
                  plain text emails with attachments. Imagine branded, dynamic emails that build trust 
                  and professionalism with every invoice.
                </p>

                <Link
                  href="/automation"
                  className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 font-medium transition-colors group"
                >
                  Explore automation solutions
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Visual */}
              <div className="bg-slate-900/80 border border-slate-700/30 rounded-2xl p-8 lg:p-10">
                <div className="space-y-6">
                  {/* Email preview mockup */}
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center">
                        <FileText className="w-4 h-4 text-amber-500" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-200">Invoice #INV-2025-12345</p>
                        <p className="text-xs text-slate-500">Automatically generated</p>
                      </div>
                    </div>
                    <div className="h-2 bg-slate-700/50 rounded w-3/4 mb-2" />
                    <div className="h-2 bg-slate-700/50 rounded w-1/2" />
                  </div>

                  <div className="text-center">
                    <div className="text-amber-gradient font-display text-4xl font-bold mb-1">10K+</div>
                    <div className="text-sm text-slate-400">Invoices sent monthly</div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-slate-200">0</div>
                      <div className="text-xs text-slate-500">Manual steps</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-slate-200">24/7</div>
                      <div className="text-xs text-slate-500">Automated</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-slate-200">100%</div>
                      <div className="text-xs text-slate-500">Branded</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Stats Section */}
      <section
        id="proof"
        ref={setSectionRef("proof")}
        className="py-24 lg:py-32 relative bg-slate-900/30"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`reveal ${visibleSections.proof ? "visible" : ""}`}>
            {/* Testimonial */}
            <div className="max-w-3xl mx-auto text-center mb-20">
              <Quote className="w-12 h-12 text-amber-500/30 mx-auto mb-6" />
              <blockquote className="font-display text-2xl sm:text-3xl text-slate-200 mb-6 leading-relaxed">
                "RSASoft's integration has transformed our operations. What used to take days now 
                happens automatically. We process tens of thousands of orders without lifting a finger."
              </blockquote>
              <cite className="text-slate-500 not-italic">
                — Operations Director, Major Distribution Company
              </cite>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-amber-gradient font-display text-4xl sm:text-5xl lg:text-6xl font-semibold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-300 font-medium mb-1">{stat.label}</div>
                  {stat.sublabel && (
                    <div className="text-slate-600 text-sm">{stat.sublabel}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Clients */}
      <section
        id="clients"
        ref={setSectionRef("clients")}
        className="py-24 lg:py-32 relative"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`reveal ${visibleSections.clients ? "visible" : ""}`}>
            <div className="text-center mb-16">
              <p className="font-mono text-xs tracking-widest text-amber-500 mb-4">TRUSTED BY</p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 mb-4">
                Leading Manufacturers & Distributors
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                From JSE-listed food giants to South Africa's largest media logistics company, 
                we help businesses get control of their SYSPRO operations.
              </p>
            </div>

            {/* Featured clients */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {featuredClients.map((client) => (
                <div
                  key={client.name}
                  className="bg-slate-900/50 border border-slate-700/30 rounded-lg p-6 hover:border-amber-500/30 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 className="w-6 h-6 text-amber-500" />
                    <h3 className="font-display text-lg font-semibold text-slate-200">{client.name}</h3>
                  </div>
                  <p className="text-sm text-slate-400 mb-4">{client.description}</p>
                  {client.website && (
                    <a
                      href={client.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-amber-500 hover:text-amber-400"
                    >
                      Visit website →
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Client logos grid */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600">
              {allClients.slice(3, 20).map((client) => (
                <span key={client.name} className="hover:text-slate-400 transition-colors cursor-default">
                  {client.name}
                </span>
              ))}
              <Link href="/clients" className="text-amber-500 hover:text-amber-400">
                + {allClients.length - 20} more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        id="process"
        ref={setSectionRef("process")}
        className="py-24 lg:py-32 relative bg-slate-900/30"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`reveal ${visibleSections.process ? "visible" : ""}`}>
            <p className="font-mono text-xs tracking-widest text-amber-500 mb-4">THE PROCESS</p>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-100 mb-16 max-w-2xl leading-tight">
              From Chaos to Control in 4 Steps
            </h2>

            <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12">
              {processSteps.map((step) => (
                <div key={step.num} className="flex gap-6 relative">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full border-2 border-amber-500/50 flex items-center justify-center bg-slate-900">
                    <span className="font-mono text-amber-500 font-medium">{step.num}</span>
                  </div>
                  
                  <div className="pt-2">
                    <h3 className="font-display text-xl font-medium text-slate-200 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        id="cta"
        ref={setSectionRef("cta")}
        className="py-24 lg:py-32 relative"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`reveal ${visibleSections.cta ? "visible" : ""}`}>
            <div className="max-w-4xl mx-auto text-center">
              <p className="font-mono text-xs tracking-widest text-emerald-500 mb-4">THE GUARANTEE</p>
              
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-100 mb-8 leading-tight">
                No Improvement, No Invoice.
              </h2>

              <p className="text-lg text-slate-400 mb-6 max-w-2xl mx-auto leading-relaxed">
                We're confident in what we build because we've done it hundreds of times. Here's our promise:
              </p>

              <p className="text-slate-300 mb-4 max-w-2xl mx-auto">
                Start with a free 30-minute audit. We'll identify exactly where you're bleeding time 
                and show you the fix—whether you hire us or not.
              </p>

              <p className="text-slate-300 mb-10 max-w-2xl mx-auto">
                If you do engage us, and you don't see measurable improvement within 90 days of go-live, 
                we keep working at no additional cost until you do.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-[#0a0f14] font-medium px-10 py-5 rounded text-lg transition-all hover:shadow-lg hover:shadow-amber-500/25 amber-glow"
              >
                Book Your Free ERP Audit
                <ArrowRight className="w-5 h-5" />
              </Link>

              <p className="mt-6 text-sm text-slate-500">
                We onboard a maximum of 5 new clients per month to ensure quality.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-slate-600">
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  No credit card required
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  30-minute video call
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  Actionable insights guaranteed
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
