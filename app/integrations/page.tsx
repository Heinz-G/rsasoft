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
  Award
} from "lucide-react";

const retailers = [
  { 
    name: "Pick n Pay", 
    status: "Live", 
    stat: "58,014+ POs processed",
    highlight: true 
  },
  { 
    name: "SPAR", 
    status: "Live", 
    stat: "10,000+ invoices/month" 
  },
  { 
    name: "Shoprite / Checkers", 
    status: "Live", 
    stat: "Full EDI integration" 
  },
  { 
    name: "Woolworths", 
    status: "Live", 
    stat: "Full EDI integration" 
  },
  { 
    name: "Dis-Chem", 
    status: "Live", 
    stat: "Full EDI integration" 
  },
  { 
    name: "Takealot", 
    status: "Live", 
    stat: "API integration" 
  },
  { 
    name: "Amazon.co.za", 
    status: "Live", 
    stat: "Full marketplace integration" 
  },
  { 
    name: "TFG (The Foschini Group)", 
    status: "Live", 
    stat: "Full EDI integration" 
  },
];

const integrationTypes = [
  {
    icon: ShoppingCart,
    title: "Retail EDI",
    description: "Direct connections to major SA retailers. Orders flow into SYSPRO automatically. Invoices and ASNs flow out.",
    features: [
      "Purchase order import (850/ORDERS)",
      "Invoice export (810/INVOIC)",
      "Advanced shipping notice (856/DESADV)",
      "Inventory reports (846)",
      "Order acknowledgements",
    ],
  },
  {
    icon: Truck,
    title: "3PL & Courier",
    description: "Connect your warehouse and logistics partners directly to SYSPRO for seamless fulfilment.",
    features: [
      "Warehouse management sync",
      "Shipping label generation",
      "Track & trace integration",
      "Proof of delivery capture",
      "Returns processing",
    ],
  },
  {
    icon: RefreshCw,
    title: "API & Webhooks",
    description: "Modern API integrations for e-commerce, CRM, and any system that needs real-time SYSPRO data.",
    features: [
      "RESTful API endpoints",
      "Real-time webhooks",
      "Custom data transformations",
      "Rate limiting & queuing",
      "Error handling & retry logic",
    ],
  },
  {
    icon: FileText,
    title: "File-Based Integration",
    description: "Automated file imports and exports for systems that work with CSV, XML, or flat files.",
    features: [
      "Scheduled file polling",
      "Format transformation",
      "Validation & error reporting",
      "SFTP/FTP support",
      "Archive & audit trail",
    ],
  },
];

export default function IntegrationsPage() {
  return (
    <main className="min-h-screen bg-[#0a0f14] text-slate-200">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative grid-pattern noise-overlay">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            {/* Award badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6">
              <Award className="w-4 h-4 text-amber-500" />
              <span className="text-sm text-amber-400 font-medium">
                SYSPRO Integration Award 2025
              </span>
            </div>

            <p className="font-mono text-xs tracking-widest text-amber-500 mb-4">
              EDI & SYSTEMS INTEGRATIONS
            </p>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-100 mb-6 leading-tight">
              Connect SYSPRO to Everything. Automatically.
            </h1>
            
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Orders from Pick n Pay, Shoprite, SPAR, and Takealot flow directly into SYSPRO. 
              Invoices flow out. No manual data entry. No copy-paste errors. No delays.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-[#0a0f14] font-medium px-8 py-4 rounded text-base transition-all hover:shadow-lg hover:shadow-amber-500/25"
              >
                Discuss Your Integration
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* On The Dot Case Study */}
      <section className="py-20 bg-gradient-to-b from-slate-900/50 to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-slate-900/80 border border-amber-500/30 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-amber-500" />
                  <p className="font-mono text-xs tracking-widest text-amber-500">FLAGSHIP PROJECT</p>
                </div>
                
                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 mb-6">
                  SYSPRO Hired Us for On The Dot
                </h2>
                
                <p className="text-slate-400 mb-6 leading-relaxed">
                  When SYSPRO needed to integrate South Africa's largest media logistics company with 
                  Pick n Pay's EDI system, they didn't do it themselves—they called RSASoft.
                </p>
                
                <p className="text-slate-400 mb-6 leading-relaxed">
                  On The Dot distributes 95% of South Africa's magazines and 68% of newspapers to 
                  22,000 retail outlets. The integration had to be bulletproof.
                </p>

                <div className="space-y-3">
                  {[
                    "58,014+ Pick n Pay POs processed since August 2025",
                    "460,000+ sales orders created automatically",
                    "Automated invoice generation for every order",
                    "100% uptime since go-live"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-800/50 rounded-lg p-6 text-center">
                  <div className="text-amber-gradient font-display text-4xl font-bold mb-2">58K+</div>
                  <div className="text-sm text-slate-400">Pick n Pay POs</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-6 text-center">
                  <div className="text-amber-gradient font-display text-4xl font-bold mb-2">460K+</div>
                  <div className="text-sm text-slate-400">Sales Orders</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-6 text-center">
                  <div className="text-amber-gradient font-display text-4xl font-bold mb-2">22K</div>
                  <div className="text-sm text-slate-400">Retail Outlets</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-6 text-center">
                  <div className="text-amber-gradient font-display text-4xl font-bold mb-2">100%</div>
                  <div className="text-sm text-slate-400">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retailer Integrations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-mono text-xs tracking-widest text-amber-500 mb-4">RETAIL CONNECTIONS</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 mb-4">
              Every Major SA Retailer. Covered.
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We've built integrations with every major South African retailer. If they send EDI, 
              we can connect them to your SYSPRO.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {retailers.map((retailer) => (
              <div
                key={retailer.name}
                className={`bg-slate-900/50 border rounded-lg p-6 transition-all ${
                  retailer.highlight 
                    ? "border-amber-500/50 bg-amber-500/5" 
                    : "border-slate-700/30 hover:border-slate-600"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium text-slate-200">{retailer.name}</h3>
                  <span className="text-xs px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded">
                    {retailer.status}
                  </span>
                </div>
                <p className="text-sm text-slate-500">{retailer.stat}</p>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 text-slate-500">
            Need a retailer not listed? We build custom EDI integrations.{" "}
            <Link href="/contact" className="text-amber-500 hover:text-amber-400">
              Get in touch →
            </Link>
          </p>
        </div>
      </section>

      {/* Integration Types */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-mono text-xs tracking-widest text-amber-500 mb-4">INTEGRATION TYPES</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 mb-4">
              Multiple Ways to Connect
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {integrationTypes.map((type) => (
              <div
                key={type.title}
                className="bg-slate-900/80 border border-slate-700/30 rounded-lg p-8 hover:border-amber-500/30 transition-all"
              >
                <type.icon className="w-10 h-10 text-amber-500 mb-4" />
                <h3 className="font-display text-xl font-medium text-slate-200 mb-3">
                  {type.title}
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {type.description}
                </p>
                <ul className="space-y-2">
                  {type.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-400">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 mb-6">
                Why SYSPRO Trusts Us With Their Biggest Clients
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "Battle-Tested Reliability",
                    desc: "We've processed millions of transactions without failure. Our integrations run 24/7 with 99.9% uptime."
                  },
                  {
                    icon: Zap,
                    title: "Deep SYSPRO Expertise",
                    desc: "We've been inside SYSPRO's architecture for 15 years. We know every quirk, every edge case, every workaround."
                  },
                  {
                    icon: Building2,
                    title: "Enterprise-Grade Support",
                    desc: "When something needs attention, we respond in hours, not days. Your operations don't wait."
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <item.icon className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
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
                  { phase: "Testing with Retailer", weeks: "1-2 weeks" },
                  { phase: "Go-Live & Support", weeks: "Ongoing" },
                ].map((phase, i) => (
                  <div key={phase.phase} className="flex justify-between items-center py-3 border-b border-slate-700/30">
                    <span className="text-slate-300">{phase.phase}</span>
                    <span className="text-amber-400 font-mono text-sm">{phase.weeks}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-slate-500">
                Total: 4-8 weeks from kickoff to live orders flowing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 mb-6">
            Ready to Connect Your Systems?
          </h2>
          <p className="text-slate-400 mb-8">
            Tell us which retailers or systems you need to connect. We'll map out exactly how it 
            works and give you a realistic timeline.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-[#0a0f14] font-medium px-8 py-4 rounded text-base transition-all hover:shadow-lg hover:shadow-amber-500/25"
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
