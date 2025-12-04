"use client";

import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  ArrowRight,
  Check,
  ShoppingCart,
  Truck,
  FileText,
  RefreshCw,
  Shield,
  Zap,
  Building2,
  Award,
  Database,
  Workflow,
  Package
} from "lucide-react";
import { retailerIntegrations, erpSystems, partnerships } from "@/data/company-data";

const integrationTypes = [
  {
    icon: ShoppingCart,
    title: "Retail EDI",
    description: "Direct connections to every major SA retailer. Orders flow into your ERP automatically. Invoices and ASNs flow out. No manual data entry.",
    features: [
      "Purchase order import (850/ORDERS)",
      "Invoice export (810/INVOIC)",
      "Advanced shipping notice (856/DESADV)",
      "Inventory reports (846)",
      "Order acknowledgements",
      "Claims and deductions processing",
    ],
  },
  {
    icon: Database,
    title: "Multi-ERP Support",
    description: "We don't just do SYSPRO. TransLution partnership gives us Sage and SAP integration capabilities. Your ERP choice shouldn't limit your options.",
    features: [
      "SYSPRO (15+ years expertise)",
      "Sage 200 (via TransLution)",
      "SAP (EDI & data exchange)",
      "Custom ERP integrations",
      "Cross-ERP data sync",
      "Migration assistance",
    ],
  },
  {
    icon: Workflow,
    title: "n8n Automation",
    description: "Visual workflow automation for complex multi-system integrations. Connect any API, automate any process, without writing code for every connection.",
    features: [
      "500+ pre-built connectors",
      "Visual workflow designer",
      "Conditional logic & branching",
      "Error handling & retry",
      "Scheduled automations",
      "Real-time webhooks",
    ],
  },
  {
    icon: Package,
    title: "TransLution WMS",
    description: "Official TransLution partner. Warehouse management, production floor data capture, barcode scanning—all integrated with your ERP.",
    features: [
      "Receiving & put-away",
      "Pick, pack, ship",
      "Production floor tracking",
      "Lot & serial control",
      "Cycle counting",
      "KPI dashboards",
    ],
  },
  {
    icon: Truck,
    title: "3PL & Courier",
    description: "Connect your warehouse and logistics partners directly to your ERP for seamless fulfilment.",
    features: [
      "Warehouse sync",
      "Shipping label generation",
      "Track & trace integration",
      "Proof of delivery capture",
      "Returns processing",
      "Rate shopping",
    ],
  },
  {
    icon: RefreshCw,
    title: "API & Webhooks",
    description: "Modern API integrations for e-commerce, CRM, and any system that needs real-time data.",
    features: [
      "RESTful API endpoints",
      "Real-time webhooks",
      "Data transformations",
      "Rate limiting & queuing",
      "Error handling",
      "Full audit trail",
    ],
  },
];

export default function IntegrationsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative grid-pattern noise-overlay">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-full mb-6">
              <Award className="w-4 h-4 text-teal-500" />
              <span className="text-sm text-teal-400 font-medium">
                SYSPRO Integration Excellence Award 2024
              </span>
            </div>

            <p className="font-mono text-xs tracking-widest text-teal-500 mb-4">
              SYSTEM INTEGRATIONS
            </p>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-100 mb-6 leading-tight">
              Connect Everything. Automate Everything.
            </h1>

            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Retail EDI. Multi-ERP support. TransLution WMS. n8n automation.
              We build the bridges between your systems so data flows without you in the middle.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-slate-950 font-semibold px-8 py-4 rounded text-base transition-all hover:shadow-lg hover:shadow-teal-500/25"
              >
                Discuss Your Integration
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Overview */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* ERP Systems */}
            <div className="bg-slate-900/80 border border-slate-700/30 rounded-lg p-6">
              <h3 className="font-display text-lg font-medium text-slate-200 mb-4 flex items-center gap-2">
                <Database className="w-5 h-5 text-teal-500" />
                ERP Systems
              </h3>
              <div className="space-y-4">
                {erpSystems.map((erp) => (
                  <div key={erp.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-slate-300 font-medium">{erp.name}</span>
                      <span className="text-xs px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded">
                        {erp.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">{erp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Partnerships */}
            <div className="bg-slate-900/80 border border-slate-700/30 rounded-lg p-6">
              <h3 className="font-display text-lg font-medium text-slate-200 mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-teal-500" />
                Technology Partners
              </h3>
              <div className="space-y-4">
                {partnerships.map((partner) => (
                  <div key={partner.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-slate-300 font-medium">{partner.name}</span>
                      <span className="text-xs text-teal-400">{partner.type}</span>
                    </div>
                    <p className="text-xs text-slate-500">{partner.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Retailers */}
            <div className="bg-slate-900/80 border border-slate-700/30 rounded-lg p-6">
              <h3 className="font-display text-lg font-medium text-slate-200 mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-teal-500" />
                Retail EDI
              </h3>
              <div className="space-y-2">
                {retailerIntegrations.map((retailer) => (
                  <div key={retailer.name} className="flex justify-between items-center">
                    <span className="text-slate-400 text-sm">{retailer.name}</span>
                    <Check className="w-4 h-4 text-emerald-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Case Study */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-slate-900/80 border border-teal-500/30 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-teal-500" />
                  <p className="font-mono text-xs tracking-widest text-teal-500">FLAGSHIP PROJECT</p>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 mb-6">
                  South Africa's Largest Media Logistics Integration
                </h2>

                <p className="text-slate-400 mb-6 leading-relaxed">
                  A major media distributor processes 95% of SA's magazines and 68% of newspapers
                  through 22,000 retail outlets. They needed bulletproof Pick n Pay EDI integration
                  and automated SPAR invoice distribution.
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    "58,014+ Pick n Pay POs processed since August 2024",
                    "460,000+ sales orders created automatically from forecasts",
                    "10,000+ SPAR invoices emailed monthly—automated SSRS + PDF generation",
                    "Custom branded email templates (see the design below)",
                    "100% uptime since go-live"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 rounded-lg p-6 text-center">
                  <div className="text-teal-gradient font-display text-3xl font-bold mb-1">58K+</div>
                  <div className="text-xs text-slate-400">Pick n Pay POs</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-6 text-center">
                  <div className="text-teal-gradient font-display text-3xl font-bold mb-1">460K+</div>
                  <div className="text-xs text-slate-400">Sales Orders</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-6 text-center">
                  <div className="text-teal-gradient font-display text-3xl font-bold mb-1">10K+</div>
                  <div className="text-xs text-slate-400">Emails/Month</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-6 text-center">
                  <div className="text-teal-gradient font-display text-3xl font-bold mb-1">100%</div>
                  <div className="text-xs text-slate-400">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Types */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-mono text-xs tracking-widest text-teal-500 mb-4">INTEGRATION CAPABILITIES</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 mb-4">
              Every Way to Connect
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              From traditional EDI to modern API-first integrations—we've built them all.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrationTypes.map((type) => (
              <div
                key={type.title}
                className="bg-slate-900/80 border border-slate-700/30 rounded-lg p-6 hover:border-teal-500/30 transition-all"
              >
                <type.icon className="w-8 h-8 text-teal-500 mb-4" />
                <h3 className="font-display text-lg font-medium text-slate-200 mb-2">
                  {type.title}
                </h3>
                <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                  {type.description}
                </p>
                <ul className="space-y-2">
                  {type.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-slate-500">
                      <Check className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 mb-6">
                Results in Weeks, Not Months
              </h2>

              <p className="text-slate-400 mb-6 leading-relaxed">
                We've done this so many times we've eliminated the guesswork.
                Here's a realistic timeline for most integration projects.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "Battle-Tested Reliability",
                    desc: "Millions of transactions processed without failure. 99.9% uptime."
                  },
                  {
                    icon: Zap,
                    title: "Deep Expertise",
                    desc: "15 years of SYSPRO. TransLution partnership. n8n certified. We know the edge cases."
                  },
                  {
                    icon: Building2,
                    title: "Enterprise Support",
                    desc: "When something needs attention, we respond in hours, not days."
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <item.icon className="w-6 h-6 text-teal-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-slate-200 mb-1">{item.title}</h3>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/80 border border-slate-700/30 rounded-lg p-8">
              <h3 className="font-display text-xl font-medium text-slate-200 mb-6">
                Typical Integration Timeline
              </h3>
              <div className="space-y-4">
                {[
                  { phase: "Discovery & Mapping", weeks: "1-2 weeks" },
                  { phase: "Development", weeks: "2-4 weeks" },
                  { phase: "Testing with Trading Partners", weeks: "1-2 weeks" },
                  { phase: "Go-Live & Stabilization", weeks: "1 week" },
                  { phase: "Ongoing Support", weeks: "Continuous" },
                ].map((phase) => (
                  <div key={phase.phase} className="flex justify-between items-center py-3 border-b border-slate-700/30">
                    <span className="text-slate-300">{phase.phase}</span>
                    <span className="text-teal-400 font-mono text-sm">{phase.weeks}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-slate-500">
                Total: 4-8 weeks from kickoff to live data flowing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 mb-6">
            What Systems Do You Need to Connect?
          </h2>
          <p className="text-slate-400 mb-8">
            Tell us what you're working with. We'll map out exactly how it connects
            and give you a realistic timeline.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-slate-950 font-semibold px-8 py-4 rounded text-base transition-all hover:shadow-lg hover:shadow-teal-500/25"
          >
            Discuss Your Integration
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
