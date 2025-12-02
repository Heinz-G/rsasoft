"use client";

import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { 
  ArrowRight, 
  Check, 
  ShoppingCart,
  FileText,
  Users,
  Smartphone,
  Calculator,
  Ticket,
  ClipboardCheck,
  Scan,
  Ship,
  Factory,
  CreditCard,
  Mail,
  FolderOpen
} from "lucide-react";

const customAppCategories = [
  {
    icon: ShoppingCart,
    title: "Ordering Portals",
    description: "B2B and B2C ordering platforms that connect directly to your ERP. Real-time stock, pricing, and order status.",
    examples: [
      "RFG Ordering Platform",
      "ChillBev Sales Portal",
      "Rovic Ordering Portal",
      "Beekman Agent Portal",
    ],
    features: [
      "Real-time ERP integration",
      "Customer-specific pricing",
      "Credit limit enforcement",
      "Order history & reordering",
      "Mobile responsive",
    ],
  },
  {
    icon: Users,
    title: "Supplier & Customer Portals",
    description: "Self-service portals that reduce your admin burden. Suppliers onboard themselves. Customers check their own status.",
    examples: [
      "RFG Supplier Onboarding",
      "ACDC Debtors Portal",
      "Customer Self-Service Portals",
    ],
    features: [
      "Document upload & verification",
      "Status tracking",
      "Automated workflows",
      "Compliance checking",
      "Integration with master data",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Approval Systems",
    description: "Multi-level approval workflows that route to the right people and track everything for audit.",
    examples: [
      "NuWater Approval System",
      "SOILL Approval System",
      "RSA Requisitions",
      "Bank Detail Change Approvals",
    ],
    features: [
      "Configurable approval chains",
      "Mobile approvals",
      "Escalation rules",
      "Full audit trail",
      "ERP integration",
    ],
  },
  {
    icon: Calculator,
    title: "Quoting & Estimation",
    description: "Complex quoting engines for manufacturers. Calculate costs, generate proposals, track conversions.",
    examples: [
      "ACTOM Quoting Application",
      "AEM Estimation Frontend",
      "Transformer Test Bay Integration",
    ],
    features: [
      "BOM costing",
      "Labor calculations",
      "Margin analysis",
      "PDF proposal generation",
      "CRM integration",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile & Field Apps",
    description: "Apps for your people in the field. Capture data, take photos, get signatures—online or offline.",
    examples: [
      "RSASoft EPOD App",
      "Beekman RFID Scanner",
      "RSA Image Capture",
      "RSA Stock Control Mobile",
    ],
    features: [
      "Offline capability",
      "Photo capture",
      "Signature capture",
      "Barcode/QR scanning",
      "GPS tracking",
    ],
  },
  {
    icon: Ticket,
    title: "Ticketing & CRM",
    description: "Track customer issues, manage relationships, and ensure nothing falls through the cracks.",
    examples: [
      "RSASoft Ticketing System",
      "Swartland Tickets",
      "Weylandts Service Request",
    ],
    features: [
      "Email-to-ticket conversion",
      "SLA tracking",
      "Customer history",
      "Assignment rules",
      "Reporting dashboards",
    ],
  },
  {
    icon: CreditCard,
    title: "Banking & Finance",
    description: "Bank integrations, reconciliation automation, and payment processing that ties into your ERP.",
    examples: [
      "ABSA Bank Integration",
      "ABSA Smart Payments",
      "RSA Bank Recon",
      "SYSPRO Smart Payments",
    ],
    features: [
      "Transaction import",
      "Auto-matching",
      "Exception handling",
      "Payment file generation",
      "Reconciliation reports",
    ],
  },
  {
    icon: FolderOpen,
    title: "Document Management",
    description: "Capture, store, retrieve, and route documents with full version control and audit trails.",
    examples: [
      "RSASoft DMS",
      "Swartland Customer Statements",
      "PDF Merger & Converter",
    ],
    features: [
      "Document capture",
      "Version control",
      "Full-text search",
      "Workflow routing",
      "ERP linking",
    ],
  },
  {
    icon: Factory,
    title: "Production & QC",
    description: "Shop floor data capture, quality control, and production tracking integrated with your ERP.",
    examples: [
      "ADT Test Bay Integration",
      "Stripform Production",
      "TransLution Scripts (backup)",
    ],
    features: [
      "Work order tracking",
      "Quality inspection",
      "Defect logging",
      "Time capture",
      "KPI dashboards",
    ],
  },
  {
    icon: Scan,
    title: "Warehouse & Scanning",
    description: "Barcode solutions, label printing, and warehouse processes that update your ERP in real-time.",
    examples: [
      "RSA Stock Control",
      "TransLution Implementations",
      "Lasher Parcel Perfect Dashboard",
      "RC Warehouse Scanning",
    ],
    features: [
      "Barcode scanning",
      "Label printing",
      "Bin management",
      "Stock take",
      "Dispatch verification",
    ],
  },
  {
    icon: Ship,
    title: "Logistics & Delivery",
    description: "Track shipments, capture PODs, manage deliveries, and integrate with couriers.",
    examples: [
      "OTD SCM (Delivery Notes)",
      "Rialto Shipping Dashboard",
      "RFG Triplo Integration",
    ],
    features: [
      "Shipment tracking",
      "POD capture",
      "Courier integration",
      "Route optimization",
      "Delivery reporting",
    ],
  },
  {
    icon: Mail,
    title: "Automated Communications",
    description: "Scheduled emails, PDF generation, and automated notifications that run without intervention.",
    examples: [
      "RSA Mail Service",
      "SSRS Auto-Emailer",
      "Statement Distribution",
      "Invoice Automation",
    ],
    features: [
      "SSRS integration",
      "PDF generation",
      "Email templating",
      "Scheduling",
      "Delivery tracking",
    ],
  },
];

export default function CustomAppsPage() {
  return (
    <main className="min-h-screen bg-[#0a0f14] text-slate-200">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative grid-pattern noise-overlay">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="font-mono text-xs tracking-widest text-amber-500 mb-4">
              100+ CUSTOM APPLICATIONS BUILT
            </p>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-100 mb-6 leading-tight">
              The Exact Tool Your Business Needs
            </h1>
            
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Generic software forces you to change how you work. Custom applications work the way YOU work. 
              From yacht ordering portals to transformer test bay systems—if you can describe it, we can build it.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-[#0a0f14] font-semibold px-8 py-4 rounded text-base transition-all hover:shadow-lg hover:shadow-amber-500/25"
              >
                Describe What You Need
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-amber-gradient font-display text-4xl sm:text-5xl font-bold mb-2">100+</div>
              <div className="text-slate-400">Custom Applications</div>
            </div>
            <div>
              <div className="text-amber-gradient font-display text-4xl sm:text-5xl font-bold mb-2">15+</div>
              <div className="text-slate-400">Years Experience</div>
            </div>
            <div>
              <div className="text-amber-gradient font-display text-4xl sm:text-5xl font-bold mb-2">60+</div>
              <div className="text-slate-400">Active Clients</div>
            </div>
            <div>
              <div className="text-amber-gradient font-display text-4xl sm:text-5xl font-bold mb-2">12</div>
              <div className="text-slate-400">App Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 mb-4">
              What We've Built
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Every application integrates with your ERP. Every one solves a real problem. 
              Here's a sample of what's possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customAppCategories.map((category) => (
              <div
                key={category.title}
                className="bg-slate-900/50 border border-slate-700/30 rounded-lg p-6 hover:border-amber-500/30 transition-all"
              >
                <category.icon className="w-8 h-8 text-amber-500 mb-4" />
                <h3 className="font-display text-lg font-medium text-slate-200 mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="mb-4">
                  <p className="text-xs text-slate-500 mb-2">Examples built:</p>
                  <div className="flex flex-wrap gap-1">
                    {category.examples.slice(0, 3).map((example) => (
                      <span key={example} className="text-xs px-2 py-1 bg-slate-800/50 text-slate-400 rounded">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs text-slate-500 mb-2">Key features:</p>
                  <ul className="space-y-1">
                    {category.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs text-slate-500">
                        <Check className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 mb-6">
                Built For You, Not Modified For You
              </h2>
              
              <p className="text-slate-400 mb-6 leading-relaxed">
                There's a difference between "customizing" off-the-shelf software and building 
                exactly what you need. We do the latter.
              </p>

              <div className="space-y-4">
                {[
                  "Your process, not a vendor's idea of your process",
                  "Your terminology, your workflows, your rules",
                  "Integrates with what you already have",
                  "You own the code—no vendor lock-in",
                  "Built to evolve as your business changes",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/80 border border-slate-700/30 rounded-lg p-8">
              <h3 className="font-display text-xl font-medium text-slate-200 mb-6">
                Our Tech Stack
              </h3>
              <div className="space-y-4">
                {[
                  { category: "Backend", tech: "C#, .NET, Node.js, Python" },
                  { category: "Frontend", tech: "React, Vue, Blazor, MAUI" },
                  { category: "Mobile", tech: "MAUI, React Native, PWA" },
                  { category: "Database", tech: "SQL Server, PostgreSQL" },
                  { category: "Integration", tech: "REST APIs, SOAP, EDI, n8n" },
                  { category: "Reporting", tech: "SSRS, Custom dashboards" },
                ].map((item) => (
                  <div key={item.category} className="flex justify-between items-center py-2 border-b border-slate-700/30">
                    <span className="text-slate-400 text-sm">{item.category}</span>
                    <span className="text-slate-300 text-sm">{item.tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 mb-6">
            What Would Make Your Life Easier?
          </h2>
          <p className="text-slate-400 mb-8">
            Describe the problem. We'll tell you if we can solve it, how long it'll take, 
            and what it'll cost. No obligation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-[#0a0f14] font-semibold px-8 py-4 rounded text-base transition-all hover:shadow-lg hover:shadow-amber-500/25"
          >
            Describe What You Need
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
