"use client";

import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  ArrowRight,
  Check,
  Mail,
  FileText,
  Clock,
  CheckCircle,
  AlertCircle,
  RefreshCw,
  Users,
  CreditCard,
  ClipboardList
} from "lucide-react";

const automationTypes = [
  {
    icon: Mail,
    title: "Automated Email Systems",
    description: "Statements, invoices, and reminders sent automatically with professional templates.",
    examples: [
      "Monthly statement distribution",
      "Invoice delivery with PDF attachment",
      "Overdue payment reminders",
      "Order confirmation emails",
      "Shipping notifications",
    ],
    stat: "10,000+ emails/month for SPAR alone",
  },
  {
    icon: FileText,
    title: "Document Generation",
    description: "PDFs generated automatically from SYSPRO data via SSRS, delivered where they're needed.",
    examples: [
      "Invoice PDFs from SSRS reports",
      "Packing slips and delivery notes",
      "Custom formatted statements",
      "Management reports",
      "Compliance documentation",
    ],
    stat: "Programmatic SSRS report generation",
  },
  {
    icon: CheckCircle,
    title: "Approval Workflows",
    description: "Route decisions to the right people automatically. Track approvals. Maintain audit trails.",
    examples: [
      "Purchase order approvals",
      "Credit limit increases",
      "Bank detail changes",
      "New customer setup",
      "New supplier onboarding",
    ],
    stat: "70% faster approval times",
  },
  {
    icon: CreditCard,
    title: "Bank Reconciliation",
    description: "Automatic matching of bank transactions to SYSPRO records. Exception handling built in.",
    examples: [
      "Automated transaction import",
      "Smart matching algorithms",
      "Exception flagging",
      "Deposit management",
      "Multi-currency support",
    ],
    stat: "Hours of manual matching eliminated",
  },
  {
    icon: ClipboardList,
    title: "Scheduled Processing",
    description: "Jobs that run overnight, every hour, or on any schedule. No human intervention needed.",
    examples: [
      "Nightly data synchronisation",
      "Hourly inventory updates",
      "Daily report distribution",
      "Weekly stock takes",
      "Month-end processing",
    ],
    stat: "24/7 automated operations",
  },
  {
    icon: Users,
    title: "Workflow Automation",
    description: "Complex multi-step processes that previously required manual coordination.",
    examples: [
      "New stock code creation workflow",
      "Customer credit review process",
      "Supplier evaluation workflows",
      "Returns and claims processing",
      "Intercompany transactions",
    ],
    stat: "50% faster process completion",
  },
];

export default function AutomationPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative grid-pattern noise-overlay">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="font-mono text-xs tracking-widest text-teal-500 mb-4">
              WORKFLOW AUTOMATION
            </p>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-100 mb-6 leading-tight">
              Stop Being the Bottleneck in Your Own Business
            </h1>

            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Approval workflows, automated emails, scheduled reports, bank reconciliation—all the
              repetitive tasks that eat your day, running automatically while you focus on what matters.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-slate-950 font-medium px-8 py-4 rounded text-base transition-all hover:shadow-lg hover:shadow-teal-500/25"
              >
                Automate Your Processes
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SPAR Case Study */}
      <section className="py-20 bg-gradient-to-b from-slate-900/50 to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Mail className="w-5 h-5 text-teal-500" />
                <p className="font-mono text-xs tracking-widest text-teal-500">AUTOMATION IN ACTION</p>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 mb-6">
                10,000 Invoices Per Month. Zero Manual Steps.
              </h2>

              <p className="text-slate-400 mb-6 leading-relaxed">
                For SPAR, we built an end-to-end invoice automation system that demonstrates what's
                possible when you stop doing things manually.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "SSRS reports called programmatically",
                  "PDF invoices generated automatically",
                  "Custom-designed email templates",
                  "Sent to the correct contact every time",
                  "Full audit trail for compliance"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-800/50 border border-slate-700/30 rounded-lg p-4">
                <p className="text-sm text-slate-400">
                  <span className="text-teal-400 font-medium">The opportunity:</span> Most companies
                  send plain-text emails with attachments. Branded, dynamic emails build trust and
                  professionalism with every invoice sent.
                </p>
              </div>
            </div>

            <div className="bg-slate-900/80 border border-slate-700/30 rounded-2xl p-8">
              <h3 className="font-display text-xl font-medium text-slate-200 mb-6">
                The Automation Flow
              </h3>

              <div className="space-y-4">
                {[
                  { step: "1", label: "Invoice created in SYSPRO", icon: FileText },
                  { step: "2", label: "SSRS report triggered automatically", icon: RefreshCw },
                  { step: "3", label: "PDF generated and attached", icon: FileText },
                  { step: "4", label: "Branded email sent to customer", icon: Mail },
                  { step: "5", label: "Delivery logged for audit trail", icon: CheckCircle },
                ].map((item, i) => (
                  <div key={item.step} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="font-mono text-teal-500 text-sm">{item.step}</span>
                    </div>
                    <div className="flex-1 flex items-center gap-3 py-3 border-b border-slate-700/30">
                      <item.icon className="w-4 h-4 text-slate-500" />
                      <span className="text-slate-300">{item.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <div className="text-teal-gradient font-display text-3xl font-bold mb-1">10K+</div>
                <div className="text-sm text-slate-400">Invoices sent monthly</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-mono text-xs tracking-widest text-teal-500 mb-4">WHAT WE AUTOMATE</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 mb-4">
              Every Repetitive Task is a Candidate
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              If you're doing it more than once a week, we can probably automate it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationTypes.map((type) => (
              <div
                key={type.title}
                className="bg-slate-900/50 border border-slate-700/30 rounded-lg p-6 hover:border-teal-500/30 transition-all"
              >
                <type.icon className="w-8 h-8 text-teal-500 mb-4" />
                <h3 className="font-display text-lg font-medium text-slate-200 mb-2">
                  {type.title}
                </h3>
                <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                  {type.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {type.examples.slice(0, 3).map((example) => (
                    <li key={example} className="flex items-center gap-2 text-xs text-slate-500">
                      <div className="w-1 h-1 bg-teal-500 rounded-full" />
                      {example}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-emerald-400 font-medium">{type.stat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 mb-4">
              The Difference Automation Makes
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-rose-500/5 border border-rose-500/30 rounded-lg p-8">
              <h3 className="flex items-center gap-2 font-display text-xl font-medium text-rose-400 mb-6">
                <AlertCircle className="w-5 h-5" />
                Before Automation
              </h3>
              <ul className="space-y-4">
                {[
                  "Finance spends 4 hours daily on manual report compilation",
                  "Invoices sent inconsistently, often late",
                  "Approvals bottleneck with key people",
                  "Month-end takes 5+ days",
                  "Bank rec done manually in spreadsheets",
                  "No audit trail for compliance"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-400">
                    <span className="text-rose-500 mt-1">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="bg-emerald-500/5 border border-emerald-500/30 rounded-lg p-8">
              <h3 className="flex items-center gap-2 font-display text-xl font-medium text-emerald-400 mb-6">
                <CheckCircle className="w-5 h-5" />
                After Automation
              </h3>
              <ul className="space-y-4">
                {[
                  "Reports generated and distributed automatically",
                  "Every invoice sent within minutes of creation",
                  "Approvals routed and tracked automatically",
                  "Month-end closes in hours, not days",
                  "Bank rec happens overnight, exceptions flagged",
                  "Complete audit trail for every action"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 mb-6">
            What's Eating Your Team's Time?
          </h2>
          <p className="text-slate-400 mb-8">
            Book a free audit. We'll identify the 3-5 processes where automation will give you
            the biggest return—and show you exactly how it works.
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
