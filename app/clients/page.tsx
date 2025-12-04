"use client";

import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  ArrowRight,
  Building2,
  Award,
  ExternalLink
} from "lucide-react";
import { allClients, featuredClients } from "@/data/company-data";

export default function ClientsPage() {
  // Group clients by first letter
  const groupedClients = allClients.reduce((acc, client) => {
    const firstLetter = client.name[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(client);
    return acc;
  }, {} as Record<string, typeof allClients>);

  const sortedLetters = Object.keys(groupedClients).sort();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 relative grid-pattern noise-overlay">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="font-mono text-xs tracking-widest text-teal-500 mb-4">
              OUR CLIENTS
            </p>

            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-slate-100 mb-6 leading-tight">
              Trusted by South Africa's Leading Manufacturers & Distributors
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed">
              From JSE-listed food conglomerates to specialised manufacturers, we help businesses
              across industries get control of their SYSPRO operations.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Clients */}
      <section className="py-16 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-slate-100 mb-8">
            Featured Clients
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredClients.map((client) => (
              <div
                key={client.name}
                className="bg-slate-900/80 border border-slate-700/30 rounded-lg p-6 hover:border-teal-500/30 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Building2 className="w-8 h-8 text-teal-500" />
                    <h3 className="font-display text-lg font-semibold text-slate-200">
                      {client.name}
                    </h3>
                  </div>
                  {client.featured && (
                    <Award className="w-5 h-5 text-teal-500" />
                  )}
                </div>

                {client.description && (
                  <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                    {client.description}
                  </p>
                )}

                {client.caseStudy && (
                  <div className="bg-teal-500/10 border border-teal-500/30 rounded p-3 mb-4">
                    <p className="text-xs text-teal-400 font-medium mb-2">
                      {client.caseStudy.headline}
                    </p>
                    {client.caseStudy.stats && (
                      <ul className="space-y-1">
                        {client.caseStudy.stats.slice(0, 2).map((stat, i) => (
                          <li key={i} className="text-xs text-slate-500">• {stat}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}

                {client.website && (
                  <a
                    href={client.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-teal-500 hover:text-teal-400 transition-colors"
                  >
                    Visit website
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Clients */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-slate-100 mb-8">
            All Clients
          </h2>

          <div className="space-y-8">
            {sortedLetters.map((letter) => (
              <div key={letter}>
                <h3 className="font-mono text-teal-500 text-lg mb-4 border-b border-slate-800 pb-2">
                  {letter}
                </h3>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {groupedClients[letter].map((client) => (
                    <span
                      key={client.name}
                      className={`text-sm ${
                        client.featured
                          ? "text-teal-400 font-medium"
                          : "text-slate-400 hover:text-slate-200"
                      } transition-colors cursor-default`}
                    >
                      {client.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900/30">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-semibold text-slate-100 mb-6">
            Join Them
          </h2>
          <p className="text-slate-400 mb-8">
            Ready to transform your SYSPRO operations? Let's talk about what's possible.
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
