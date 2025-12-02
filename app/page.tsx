"use client";

import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  ArrowRight,
  Check,
  Target,
  Shield,
  Clock,
  Zap,
  Server,
  Network,
  ChevronRight,
} from "lucide-react";
import {
  CopyVersion,
  copyVariants,
  heroData,
  painPoints,
  flagshipStages,
  flagshipStats,
  flagshipAdditionalIntegrations,
  products,
  solutions,
  integrationEcosystem,
  valueProposition,
  process,
  guarantee,
} from "@/data/company-data";

// ============================================================================
// COPY VERSION TOGGLE - Change this to switch between full and safe versions
// ============================================================================
const COPY_VERSION: CopyVersion = "full";

const copy = copyVariants[COPY_VERSION];

// Icon mapping for value proposition
const iconMap: Record<string, React.ElementType> = {
  target: Target,
  shield: Shield,
  clock: Clock,
  zap: Zap,
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0f14] text-slate-200">
      <Navbar copyVersion={COPY_VERSION} />

      {/* ================================================================== */}
      {/* HERO SECTION */}
      {/* ================================================================== */}
      <section className="pt-32 pb-20 relative grid-pattern noise-overlay">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            {/* Award Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-8">
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-xs font-medium text-amber-400">
                {copy.heroAward}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-100 mb-6 leading-tight">
              {heroData.headline.line1}
              <br />
              <span className="text-amber-gradient">{heroData.headline.line2}</span>
              <br />
              {heroData.headline.line3}
            </h1>

            {/* Subhead */}
            <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-3xl">
              {copy.heroSubhead}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-[#0a0f14] font-semibold px-8 py-4 rounded text-base transition-all hover:shadow-lg hover:shadow-amber-500/25"
              >
                {heroData.primaryCta}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#flagship"
                className="inline-flex items-center gap-2 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-slate-100 px-8 py-4 rounded text-base transition-all"
              >
                {heroData.secondaryCta}
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
              {heroData.trustSignals.map((signal, i) => (
                <span key={i} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  {signal}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* PAIN POINTS - THE REAL COST */}
      {/* ================================================================== */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-mono text-xs tracking-widest text-amber-500 mb-4">
            THE REAL COST
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 mb-12">
            Every Day You're Losing Money on Work That Shouldn't Exist
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {painPoints.map((point, i) => (
              <div
                key={i}
                className="bg-slate-900/50 border border-slate-700/30 rounded-lg p-6 hover:border-red-500/30 transition-all"
              >
                <h3 className="font-display text-lg font-medium text-slate-200 mb-3">
                  "{point.title}"
                </h3>
                <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                  {point.problem}
                </p>
                <div className="border-t border-slate-700/30 pt-4">
                  <p className="text-xs text-slate-500 leading-relaxed">
                    <span className="text-amber-500 font-medium">The cost:</span>{" "}
                    {point.cost}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* FLAGSHIP CASE STUDY */}
      {/* ================================================================== */}
      <section id="flagship" className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-mono text-xs tracking-widest text-amber-500 mb-4">
            {copy.flagshipLabel}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 mb-8">
            {copy.flagshipHeadline}
          </h2>

          {/* The Story */}
          <div className="max-w-3xl mb-12">
            {copy.flagshipStory.map((paragraph, i) => (
              <p key={i} className="text-slate-400 mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {flagshipStats.map((stat, i) => (
              <div
                key={i}
                className="bg-slate-900/50 border border-slate-700/30 rounded-lg p-4 text-center"
              >
                <div className="text-amber-gradient font-display text-2xl font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* 12 Stages */}
          <div className="mb-12">
            <h3 className="font-display text-xl font-medium text-slate-200 mb-6">
              12 Automated Stages. Zero Manual Handoffs.
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {flagshipStages.map((stage) => (
                <div
                  key={stage.number}
                  className="bg-slate-900/30 border border-slate-700/20 rounded p-4 flex gap-4"
                >
                  <div className="text-amber-500 font-mono text-sm font-bold">
                    {stage.number}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-300 mb-1">
                      {stage.title}
                    </div>
                    <div className="text-xs text-slate-500">{stage.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Integrations */}
          <div className="bg-slate-900/50 border border-slate-700/30 rounded-lg p-6">
            <h4 className="text-sm font-medium text-slate-300 mb-4">
              Additional Integrations Built:
            </h4>
            <ul className="space-y-2">
              {flagshipAdditionalIntegrations.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                  <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* PRODUCTS - RSI & RSATalk */}
      {/* ================================================================== */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-mono text-xs tracking-widest text-amber-500 mb-4">
            THE ENGINES BEHIND IT
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 mb-4">
            Two Products. 1.5 Million Transactions.
          </h2>
          <p className="text-slate-400 mb-12">
            90% of our clients run on RSI. If you're on SYSPRO, these change everything.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* RSI */}
            <div className="bg-slate-900/80 border border-slate-700/30 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Server className="w-8 h-8 text-amber-500" />
                <div>
                  <h3 className="font-display text-xl font-medium text-slate-100">
                    {products.rsi.name}
                  </h3>
                  <p className="text-sm text-slate-400">{products.rsi.tagline}</p>
                </div>
              </div>

              <p className="text-slate-400 mb-6 leading-relaxed">
                {products.rsi.description}
              </p>

              <div className="mb-6">
                <p className="text-xs text-slate-500 mb-3">How it works:</p>
                <ul className="space-y-2">
                  {products.rsi.howItWorks.map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                      <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded p-4 mb-4">
                <p className="text-sm text-emerald-400">{products.rsi.proof}</p>
              </div>

              <p className="text-xs text-slate-500">
                <span className="text-amber-500">Key capability:</span> {products.rsi.keyCapability}
              </p>
            </div>

            {/* RSATalk */}
            <div className="bg-slate-900/80 border border-slate-700/30 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Network className="w-8 h-8 text-amber-500" />
                <div>
                  <h3 className="font-display text-xl font-medium text-slate-100">
                    {products.rsatalk.name}
                  </h3>
                  <p className="text-sm text-slate-400">{products.rsatalk.tagline}</p>
                </div>
              </div>

              <p className="text-slate-400 mb-6 leading-relaxed">
                {products.rsatalk.description}
              </p>

              <div className="mb-6">
                <p className="text-xs text-slate-500 mb-3">Components:</p>
                <ul className="space-y-3">
                  {products.rsatalk.components.map((comp, i) => (
                    <li key={i} className="text-sm">
                      <span className="text-slate-300 font-medium">{comp.name}</span>
                      <span className="text-slate-500"> — {comp.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded p-4 mb-4">
                <p className="text-sm text-emerald-400">{products.rsatalk.proof}</p>
              </div>

              <p className="text-xs text-slate-500">
                <span className="text-amber-500">Key capability:</span> {products.rsatalk.keyCapability}
              </p>
            </div>
          </div>

          <p className="text-center text-sm text-slate-500 mt-8">
            {products.licensingNote}
          </p>
        </div>
      </section>

      {/* ================================================================== */}
      {/* SOLUTIONS */}
      {/* ================================================================== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-mono text-xs tracking-widest text-amber-500 mb-4">
            WHAT WE BUILD
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 mb-12">
            Four Ways to Get Your Time Back
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((solution) => (
              <div
                key={solution.number}
                className="bg-slate-900/50 border border-slate-700/30 rounded-lg p-6 hover:border-amber-500/30 transition-all group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-amber-gradient font-display text-3xl font-bold">
                    {solution.number}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium text-slate-200 mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {solution.destination}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <p className="text-xs text-slate-500">
                    <span className="text-slate-400">How:</span> {solution.how}
                  </p>
                  <p className="text-xs text-slate-500">
                    <span className="text-emerald-500">Proof:</span> {solution.proof}
                  </p>
                </div>

                <Link
                  href={solution.href}
                  className="inline-flex items-center gap-1 text-sm text-amber-500 hover:text-amber-400 transition-colors"
                >
                  {solution.cta}
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* INTEGRATION ECOSYSTEM */}
      {/* ================================================================== */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-mono text-xs tracking-widest text-amber-500 mb-4">
            INTEGRATION ECOSYSTEM
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 mb-12">
            We Connect Everything to Everything
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* ERP Systems */}
            <div>
              <h3 className="text-sm font-medium text-slate-300 mb-4 pb-2 border-b border-slate-700/30">
                ERP Systems
              </h3>
              <ul className="space-y-3">
                {integrationEcosystem.erpSystems.map((erp, i) => (
                  <li key={i} className="text-sm">
                    <div className="text-slate-200 font-medium">{erp.name}</div>
                    <div className="text-xs text-slate-500">
                      {erp.status} — {erp.detail}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Retail EDI */}
            <div>
              <h3 className="text-sm font-medium text-slate-300 mb-4 pb-2 border-b border-slate-700/30">
                Retail EDI
              </h3>
              <ul className="space-y-2">
                {integrationEcosystem.retailEdi.map((retailer, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-emerald-500">{retailer.status}</span>
                    <div>
                      <span className="text-slate-300">{retailer.name}</span>
                      <span className="text-slate-500 text-xs block">{retailer.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partners */}
            <div>
              <h3 className="text-sm font-medium text-slate-300 mb-4 pb-2 border-b border-slate-700/30">
                Technology Partners
              </h3>
              <ul className="space-y-3">
                {integrationEcosystem.partners.map((partner, i) => (
                  <li key={i} className="text-sm">
                    <div className="text-slate-200 font-medium">{partner.name}</div>
                    <div className="text-xs text-slate-500">
                      {partner.status} — {partner.detail}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* VALUE PROPOSITION - WHY US */}
      {/* ================================================================== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-mono text-xs tracking-widest text-amber-500 mb-4">
            WHY US
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 mb-12">
            The RSASoft Difference
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProposition.map((item, i) => {
              const Icon = iconMap[item.icon] || Target;
              return (
                <div
                  key={i}
                  className="bg-slate-900/50 border border-slate-700/30 rounded-lg p-6"
                >
                  <Icon className="w-8 h-8 text-amber-500 mb-4" />
                  <h3 className="font-display text-lg font-medium text-slate-200 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* PROCESS - HOW IT WORKS */}
      {/* ================================================================== */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-mono text-xs tracking-widest text-amber-500 mb-4">
            HOW IT WORKS
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 mb-12">
            From Problem to Solution
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step) => (
              <div
                key={step.number}
                className="bg-slate-900/80 border border-slate-700/30 rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-amber-gradient font-display text-2xl font-bold">
                    {step.number}
                  </div>
                  <div className="text-xs text-slate-500 px-2 py-1 bg-slate-800/50 rounded">
                    {step.timeframe}
                  </div>
                </div>
                <h3 className="font-display text-lg font-medium text-slate-200 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-400 mb-3 leading-relaxed">
                  {step.description}
                </p>
                <p className="text-xs text-slate-500">
                  <span className="text-amber-500">Your effort:</span> {step.effort}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* GUARANTEE CTA */}
      {/* ================================================================== */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="font-mono text-xs tracking-widest text-amber-500 mb-4">
            THE GUARANTEE
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 mb-4">
            {guarantee.headline}
          </h2>
          <p className="text-slate-400 mb-8">{guarantee.subhead}</p>

          <div className="bg-slate-900/50 border border-slate-700/30 rounded-lg p-8 mb-8 text-left">
            <ul className="space-y-4">
              {guarantee.terms.map((term, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">{term}</span>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-[#0a0f14] font-semibold px-8 py-4 rounded text-base transition-all hover:shadow-lg hover:shadow-amber-500/25"
          >
            {guarantee.cta}
            <ArrowRight className="w-4 h-4" />
          </Link>

          <p className="text-sm text-slate-500 mt-6">{guarantee.scarcity}</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
