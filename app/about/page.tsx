"use client";

import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  ArrowRight,
  Award,
  Calendar,
  Users,
  Target,
  Shield
} from "lucide-react";
import { allClients } from "@/data/company-data";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative grid-pattern noise-overlay">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="font-mono text-xs tracking-widest text-teal-500 mb-4">
              ABOUT RSASOFT
            </p>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-100 mb-6 leading-tight">
              We've Been Fixing SYSPRO Problems Since 2009
            </h1>

            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              RSASoft started after spending years watching businesses struggle with the gap between
              what SYSPRO CAN do and what it ACTUALLY does for them out of the box. The software is
              powerful. But without customisation, it's like buying a race car and driving it in first gear.
            </p>

            <p className="text-slate-300 font-medium">
              We bridge that gap.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Years Experience" },
              { number: "60+", label: "Active Clients" },
              { number: "500+", label: "Dashboards Deployed" },
              { number: "1M+", label: "EDI Orders Processed" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-teal-gradient font-display text-4xl sm:text-5xl font-semibold mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 mb-6">
                One Thing, Done Extremely Well
              </h2>

              <div className="space-y-6 text-slate-400 leading-relaxed">
                <p>
                  We're not generalists trying to do everything. We do one thing extremely well:
                  <span className="text-slate-200"> make SYSPRO work the way it should</span> for
                  manufacturers and distributors.
                </p>

                <p>
                  Over 15 years, we've seen every possible SYSPRO configuration, every industry
                  quirk, every edge case. We've built dashboards for food manufacturers, logistics
                  companies, hardware distributors, cosmetics brands, and everything in between.
                </p>

                <p>
                  That depth of experience is why SYSPRO themselves hired us for their biggest
                  retail integration project—connecting On The Dot to Pick n Pay's EDI system.
                </p>

                <p>
                  When things get complicated, you want someone who's seen it before. We have.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Award */}
              <div className="bg-teal-500/10 border border-teal-500/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-8 h-8 text-teal-500" />
                  <div>
                    <h3 className="font-display text-lg font-medium text-slate-200">
                      SYSPRO Integration Award 2025
                    </h3>
                    <p className="text-sm text-slate-500">
                      For the On The Dot / Pick n Pay integration
                    </p>
                  </div>
                </div>
                <p className="text-sm text-slate-400">
                  SYSPRO hired us directly for their largest retail integration deployment.
                  58,000+ POs processed with 100% uptime since August 2025.
                </p>
              </div>

              {/* Timeline highlights */}
              <div className="bg-slate-900/50 border border-slate-700/30 rounded-lg p-6">
                <h3 className="font-display text-lg font-medium text-slate-200 mb-4">
                  Key Milestones
                </h3>
                <div className="space-y-4">
                  {[
                    { year: "2009", event: "RSASoft founded" },
                    { year: "2012", event: "First major retail EDI integration" },
                    { year: "2018", event: "500th dashboard deployed" },
                    { year: "2024", event: "On The Dot / Pick n Pay go-live" },
                    { year: "2025", event: "SYSPRO Integration Award" },
                  ].map((milestone) => (
                    <div key={milestone.year} className="flex gap-4">
                      <span className="font-mono text-teal-500 text-sm w-12">{milestone.year}</span>
                      <span className="text-slate-400 text-sm">{milestone.event}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 mb-4">
              What We Believe
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Results Over Activity",
                desc: "We don't bill for hours spent. We bill for problems solved. If it doesn't improve your operations, we keep working until it does."
              },
              {
                icon: Shield,
                title: "Reliability is Non-Negotiable",
                desc: "Your business runs 24/7. Your integrations should too. We build for 99.9% uptime because anything less costs you money."
              },
              {
                icon: Users,
                title: "Partnership, Not Projects",
                desc: "We don't disappear after go-live. Your business evolves, your systems should too. We're here for the long haul."
              },
            ].map((belief) => (
              <div key={belief.title} className="text-center">
                <belief.icon className="w-10 h-10 text-teal-500 mx-auto mb-4" />
                <h3 className="font-display text-xl font-medium text-slate-200 mb-3">
                  {belief.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {belief.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 mb-4">
              Companies That Trust Us
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              From JSE-listed food conglomerates to specialised manufacturers, we help businesses
              across South Africa get control of their SYSPRO operations.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-slate-500">
            {allClients.map((client) => (
              <span
                key={client.name}
                className="hover:text-slate-300 transition-colors cursor-default"
              >
                {client.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 mb-6">
            Let's Talk About Your SYSPRO
          </h2>
          <p className="text-slate-400 mb-8">
            We'll spend 30 minutes understanding your setup and identify where you're losing the
            most time. No sales pitch, just practical advice you can use whether you hire us or not.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-slate-950 font-medium px-8 py-4 rounded text-base transition-all hover:shadow-lg hover:shadow-teal-500/25"
          >
            Book Your Free Audit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
