"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
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
  Plug,
  BarChart3,
  Code,
  Package,
  Clock,
  Shield,
  Target
} from "lucide-react";
import { 
  stats, 
  solutions, 
  painPoints, 
  processSteps, 
  featuredClients,
  retailerIntegrations,
  allClients,
  erpSystems,
  partnerships,
  guarantee,
  valueEquation,
  copyVariants,
  type CopyVersion
} from "@/data/company-data";

// Toggle this to switch between full disclosure and safe copy
const COPY_VERSION: CopyVersion = "full"; // Change to "safe" for anonymous version

export default function Home() {
  const copy = copyVariants[COPY_VERSION];
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

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

  return (
    <main className="min-h-screen bg-[#0a0f14] text-slate-200">
      <Navbar copyVersion={COPY_VERSION} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden grid-pattern noise-overlay">
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
                {copy.heroAward}
              </span>
            </div>

            {/* Headline - Hormozi style: lead with the problem */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] mb-8">
              <span
                className="block text-slate-100 opacity-0 animate-fade-up"
                style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
              >
                Your ERP Has The Data.
              </span>
              <span
                className="block text-slate-100 opacity-0 animate-fade-up"
                style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
              >
                You Just Can't Get To It
              </span>
              <span
                className="block text-slate-500 opacity-0 animate-fade-up"
                style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
              >
                Fast Enough To Matter.
              </span>
            </h1>

            {/* Subhead - specific, credible */}
            <p
              className="text-lg sm:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed opacity-0 animate-fade-up"
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
            >
              {copy.heroSubhead}
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 mb-16 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-[#0a0f14] font-semibold px-8 py-4 rounded text-base transition-all hover:shadow-lg hover:shadow-amber-500/25"
              >
                Get Your Free ERP Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/dashboards"
                className="inline-flex items-center gap-2 border border-slate-700 text-slate-300 hover:border-amber-500 hover:text-amber-400 px-8 py-4 rounded text-base transition-all bg-transparent"
              >
                See 60+ Ready Dashboards
              </Link>
            </div>

            {/* Trust signals - specific, not generic */}
            <div
              className="opacity-0 animate-fade-up"
              style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
            >
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  SYSPRO • Sage • SAP
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  TransLution Partner
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  n8n Automation
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  60+ Active Clients
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section - Hormozi: articulate the pain */}
      <section
        id="problem"
        ref={setSectionRef("problem")}
        className="py-24 lg:py-32 relative"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`reveal ${visibleSections.problem ? "visible" : ""}`}>
            <p className="font-mono text-xs tracking-widest text-rose-500 mb-4">THE REAL COST</p>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-100 mb-6 max-w-3xl leading-tight">
              Every Day You're Losing Money on Work That Shouldn't Exist
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 mt-12">
              {painPoints.map((point, i) => (
                <div
                  key={point.title}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/30 p-8 rounded-lg hover:border-rose-500/30 transition-all"
                >
                  <h3 className="font-display text-xl font-medium text-slate-200 mb-3">
                    {point.title}
                  </h3>
                  <p className="text-slate-400 mb-4 leading-relaxed">
                    {point.problem}
                  </p>
                  <p className="text-sm text-rose-400 font-medium">
                    {point.cost}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Case Study */}
      <section
        id="case-study"
        ref={setSectionRef("case-study")}
        className="py-24 lg:py-32 relative bg-gradient-to-b from-slate-900/50 to-transparent"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`reveal ${visibleSections["case-study"] ? "visible" : ""}`}>
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-4 h-4 text-amber-500" />
              <p className="font-mono text-xs tracking-widest text-amber-500">FLAGSHIP PROJECT</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-100 mb-6 leading-tight">
                  {copy.otdHeadline}
                </h2>
                
                <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                  {copy.otdSubhead}
                </p>

                <p className="text-slate-400 mb-6 leading-relaxed">
                  {copy.otdClient} {copy.otdDescription}. The integration had to be bulletproof.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "58,014+ Pick n Pay purchase orders processed since August 2024",
                    "460,000+ sales orders created automatically from forecasts",
                    "Custom SSRS invoice automation for SPAR—10,000+ emails/month",
                    "Zero integration failures—100% uptime since go-live"
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
                  See how we build retail integrations
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Stats Card */}
              <div className="bg-slate-900/80 border border-amber-500/30 rounded-2xl p-8 lg:p-10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                    <div className="text-amber-gradient font-display text-3xl sm:text-4xl font-bold mb-1">58K+</div>
                    <div className="text-sm text-slate-400">PnP Orders</div>
                  </div>
                  <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                    <div className="text-amber-gradient font-display text-3xl sm:text-4xl font-bold mb-1">460K+</div>
                    <div className="text-sm text-slate-400">Sales Orders</div>
                  </div>
                  <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                    <div className="text-amber-gradient font-display text-3xl sm:text-4xl font-bold mb-1">10K+</div>
                    <div className="text-sm text-slate-400">Emails/Month</div>
                  </div>
                  <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                    <div className="text-amber-gradient font-display text-3xl sm:text-4xl font-bold mb-1">100%</div>
                    <div className="text-sm text-slate-400">Uptime</div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-amber-500/10 rounded-lg">
                  <p className="text-sm text-amber-400">
                    <strong>The SPAR automation:</strong> We built a system that programmatically calls SSRS reports, 
                    generates branded PDF invoices, and emails them automatically—10,000+ per month with zero manual intervention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section - Hormozi: sell the destination */}
      <section
        id="solutions"
        ref={setSectionRef("solutions")}
        className="py-24 lg:py-32 relative bg-slate-900/30"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`reveal ${visibleSections.solutions ? "visible" : ""}`}>
            <p className="font-mono text-xs tracking-widest text-amber-500 mb-4">WHAT WE BUILD</p>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-100 mb-6 max-w-3xl leading-tight">
              Four Ways to Get Your Time Back
            </h2>
            
            <p className="text-lg text-slate-400 max-w-2xl mb-12">
              We've built 100+ custom applications across these categories. Pick what hurts most—we'll fix it first.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {solutions.map((solution) => (
                <div
                  key={solution.num}
                  className="bg-slate-900/80 border border-slate-700/30 rounded-lg p-8 hover:border-amber-500/40 transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="font-mono text-4xl font-medium text-slate-800 group-hover:text-amber-500/30 transition-colors">
                      {solution.num}
                    </span>
                  </div>
                  
                  <h3 className="font-mono text-sm tracking-wider text-amber-500 mb-3">
                    {solution.title}
                  </h3>
                  
                  <p className="text-lg text-slate-200 mb-3 font-medium">
                    {solution.destination}
                  </p>
                  
                  <p className="text-sm text-slate-400 mb-4">
                    {solution.how}
                  </p>
                  
                  <p className="text-sm text-emerald-400 mb-6">
                    {solution.proof}
                  </p>
                  
                  <Link
                    href={`/${solution.slug}`}
                    className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 font-medium transition-colors text-sm group/link"
                  >
                    {solution.cta}
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Ecosystem */}
      <section
        id="ecosystem"
        ref={setSectionRef("ecosystem")}
        className="py-24 lg:py-32 relative"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`reveal ${visibleSections.ecosystem ? "visible" : ""}`}>
            <p className="font-mono text-xs tracking-widest text-amber-500 mb-4">INTEGRATION ECOSYSTEM</p>
            
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 mb-12">
              We Connect Everything to Everything
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* ERP Systems */}
              <div className="bg-slate-900/50 border border-slate-700/30 rounded-lg p-6">
                <h3 className="font-display text-lg font-medium text-slate-200 mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-amber-500" />
                  ERP Systems
                </h3>
                <div className="space-y-3">
                  {erpSystems.map((erp) => (
                    <div key={erp.name} className="flex justify-between items-start">
                      <div>
                        <span className="text-slate-300 font-medium">{erp.name}</span>
                        <p className="text-xs text-slate-500">{erp.description}</p>
                      </div>
                      <span className="text-xs px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded">
                        {erp.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Retailers */}
              <div className="bg-slate-900/50 border border-slate-700/30 rounded-lg p-6">
                <h3 className="font-display text-lg font-medium text-slate-200 mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-amber-500" />
                  Retail EDI
                </h3>
                <div className="space-y-2">
                  {retailerIntegrations.slice(0, 6).map((retailer) => (
                    <div key={retailer.name} className="flex justify-between items-center">
                      <span className="text-slate-400 text-sm">{retailer.name}</span>
                      <Check className="w-4 h-4 text-emerald-500" />
                    </div>
                  ))}
                  <p className="text-xs text-slate-500 mt-2">+ more</p>
                </div>
              </div>

              {/* Partnerships */}
              <div className="bg-slate-900/50 border border-slate-700/30 rounded-lg p-6">
                <h3 className="font-display text-lg font-medium text-slate-200 mb-4 flex items-center gap-2">
                  <Plug className="w-5 h-5 text-amber-500" />
                  Partnerships
                </h3>
                <div className="space-y-3">
                  {partnerships.map((partner) => (
                    <div key={partner.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-slate-300 font-medium">{partner.name}</span>
                        <span className="text-xs text-amber-400">{partner.type}</span>
                      </div>
                      <p className="text-xs text-slate-500">{partner.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Equation Section - Hormozi framework */}
      <section
        id="value"
        ref={setSectionRef("value")}
        className="py-24 lg:py-32 relative bg-slate-900/30"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`reveal ${visibleSections.value ? "visible" : ""}`}>
            <p className="font-mono text-xs tracking-widest text-amber-500 mb-4">WHY US</p>
            
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 mb-12">
              The RSASoft Difference
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6">
                <Target className="w-10 h-10 text-amber-500 mx-auto mb-4" />
                <h3 className="font-display text-lg font-medium text-slate-200 mb-2">
                  {valueEquation.dreamOutcome.headline}
                </h3>
                <p className="text-sm text-slate-400">
                  {valueEquation.dreamOutcome.description}
                </p>
              </div>
              <div className="text-center p-6">
                <Shield className="w-10 h-10 text-amber-500 mx-auto mb-4" />
                <h3 className="font-display text-lg font-medium text-slate-200 mb-2">
                  {valueEquation.likelihood.headline}
                </h3>
                <p className="text-sm text-slate-400">
                  {valueEquation.likelihood.description}
                </p>
              </div>
              <div className="text-center p-6">
                <Clock className="w-10 h-10 text-amber-500 mx-auto mb-4" />
                <h3 className="font-display text-lg font-medium text-slate-200 mb-2">
                  {valueEquation.timeDelay.headline}
                </h3>
                <p className="text-sm text-slate-400">
                  {valueEquation.timeDelay.description}
                </p>
              </div>
              <div className="text-center p-6">
                <Zap className="w-10 h-10 text-amber-500 mx-auto mb-4" />
                <h3 className="font-display text-lg font-medium text-slate-200 mb-2">
                  {valueEquation.effort.headline}
                </h3>
                <p className="text-sm text-slate-400">
                  {valueEquation.effort.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        id="process"
        ref={setSectionRef("process")}
        className="py-24 lg:py-32 relative"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`reveal ${visibleSections.process ? "visible" : ""}`}>
            <p className="font-mono text-xs tracking-widest text-amber-500 mb-4">HOW IT WORKS</p>
            
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 mb-12">
              From Problem to Solution in 4 Steps
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step) => (
                <div key={step.num} className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full border-2 border-amber-500/50 flex items-center justify-center bg-slate-900">
                      <span className="font-mono text-amber-500 font-medium">{step.num}</span>
                    </div>
                    <span className="font-mono text-xs text-slate-500">{step.timeframe}</span>
                  </div>
                  
                  <h3 className="font-display text-lg font-medium text-slate-200 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400 mb-2">
                    {step.description}
                  </p>
                  <p className="text-xs text-slate-500">
                    {step.effort}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Guarantee Section */}
      <section
        id="cta"
        ref={setSectionRef("cta")}
        className="py-24 lg:py-32 relative bg-slate-900/30"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`reveal ${visibleSections.cta ? "visible" : ""}`}>
            <div className="max-w-3xl mx-auto text-center">
              <p className="font-mono text-xs tracking-widest text-emerald-500 mb-4">THE GUARANTEE</p>
              
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-100 mb-8 leading-tight">
                {guarantee.headline}
              </h2>

              <p className="text-lg text-slate-400 mb-8">
                {guarantee.subhead}
              </p>

              <div className="text-left bg-slate-900/80 border border-slate-700/30 rounded-lg p-8 mb-8">
                {guarantee.terms.map((term, i) => (
                  <div key={i} className="flex items-start gap-3 mb-4 last:mb-0">
                    <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">{term}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-[#0a0f14] font-semibold px-10 py-5 rounded text-lg transition-all hover:shadow-lg hover:shadow-amber-500/25 amber-glow"
              >
                Get Your Free ERP Audit
                <ArrowRight className="w-5 h-5" />
              </Link>

              <p className="mt-6 text-sm text-slate-500">
                {guarantee.scarcity}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
