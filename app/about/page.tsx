"use client";

import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  ArrowRight,
  Check,
  Server,
  Network,
  Award,
  Users,
} from "lucide-react";
import {
  CopyVersion,
  copyVariants,
  aboutData,
  productsWithStats,
  guarantee,
} from "@/data/company-data";

// ============================================================================
// COPY VERSION TOGGLE
// ============================================================================
const COPY_VERSION: CopyVersion = "full";

const copy = copyVariants[COPY_VERSION];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0f14] text-slate-200">
      <Navbar copyVersion={COPY_VERSION} />

      {/* ================================================================== */}
      {/* HERO */}
      {/* ================================================================== */}
      <section className="pt-32 pb-20 relative grid-pattern noise-overlay">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <p className="font-mono text-xs tracking-widest text-amber-500 mb-4">
              ABOUT RSASOFT
            </p>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-100 mb-6 leading-tight">
              {aboutData.headline}
            </h1>

            <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-3xl">
              {aboutData.subhead}
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* THE STORY */}
      {/* ================================================================== */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="font-mono text-xs tracking-widest text-amber-500 mb-4">
                OUR STORY
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 mb-6">
                How We Got Here
              </h2>

              <div className="space-y-4 text-slate-400 leading-relaxed">
                {aboutData.story.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 space-y-4">
                <p className="text-slate-300 font-medium">Over 15 years, we've built:</p>
                <ul className="space-y-2">
                  {aboutData.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-400">
                      <Check className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-8 text-slate-400 leading-relaxed">
                {copy.aboutStory} That project—SAP to SYSPRO, 25,000 stores, 15 warehouses,
                12 automated stages, 1.4 million transactions per month—is what's possible
                when ERP integration is done right.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 content-start">
              {aboutData.stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-slate-900/50 border border-slate-700/30 rounded-lg p-6 text-center"
                >
                  <div className="text-amber-gradient font-display text-3xl font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* PRODUCTS */}
      {/* ================================================================== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-mono text-xs tracking-widest text-amber-500 mb-4">
            OUR PRODUCTS
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 mb-12">
            The Technology Behind It
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* RSI */}
            <div className="bg-slate-900/50 border border-slate-700/30 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Server className="w-10 h-10 text-amber-500" />
                <div>
                  <h3 className="font-display text-xl font-medium text-slate-100">
                    {productsWithStats.rsi.name}
                  </h3>
                  <p className="text-sm text-slate-400">{productsWithStats.rsi.tagline}</p>
                </div>
              </div>

              <p className="text-slate-400 mb-4 leading-relaxed">
                Licensed to 90% of our clients. Posts to SYSPRO via business objects
                with full error handling, retry logic, and audit trail.
              </p>

              <p className="text-sm text-slate-500 mb-4">
                One trigger → Multiple SYSPRO calls → Verified result
              </p>

              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded p-4">
                <p className="text-emerald-400 font-medium">
                  {productsWithStats.rsi.stats.transactionsMonthly} transactions processed monthly across all clients.
                </p>
              </div>
            </div>

            {/* RSATalk */}
            <div className="bg-slate-900/50 border border-slate-700/30 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Network className="w-10 h-10 text-amber-500" />
                <div>
                  <h3 className="font-display text-xl font-medium text-slate-100">
                    {productsWithStats.rsatalk.name}
                  </h3>
                  <p className="text-sm text-slate-400">{productsWithStats.rsatalk.tagline}</p>
                </div>
              </div>

              <p className="text-slate-400 mb-4 leading-relaxed">
                Connects SYSPRO to retailers, APIs, email, and file systems.
                Validation-first EDI ensures bad data doesn't reach your ERP.
              </p>

              <p className="text-sm text-slate-500 mb-4">
                Components: EDI Engine, API Automator, Mail Service, SFTP Handler
              </p>

              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded p-4">
                <p className="text-emerald-400 font-medium">
                  Every major SA retailer connected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* PARTNERSHIPS */}
      {/* ================================================================== */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-mono text-xs tracking-widest text-amber-500 mb-4">
            PARTNERSHIPS
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 mb-12">
            Our Partners
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {aboutData.partnerships.map((partner, i) => (
              <div
                key={i}
                className="bg-slate-900/50 border border-slate-700/30 rounded-lg p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-6 h-6 text-amber-500" />
                  <h3 className="font-display text-lg font-medium text-slate-200">
                    {partner.name}
                  </h3>
                </div>
                <div className="text-xs text-amber-500 mb-2">{partner.type}</div>
                <p className="text-sm text-slate-400">{partner.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* TEAM */}
      {/* ================================================================== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="w-6 h-6 text-amber-500" />
              <p className="font-mono text-xs tracking-widest text-amber-500">
                THE TEAM
              </p>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 mb-6">
              Small Team. Big Impact.
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              We're not a 500-person consultancy. We're a focused team of specialists
              who've spent 15+ years doing one thing: making ERPs actually work.
              When you work with us, you work with the people who built RSI and RSATalk.
            </p>
            <p className="text-slate-400 leading-relaxed">
              That's why we limit ourselves to 5 new clients per month. Quality over
              quantity. Every time.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* CTA */}
      {/* ================================================================== */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 mb-4">
            {guarantee.headline}
          </h2>
          <p className="text-slate-400 mb-8">{guarantee.subhead}</p>

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
