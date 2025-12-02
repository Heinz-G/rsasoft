"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { 
  ArrowRight, 
  Check, 
  BarChart3, 
  Clock, 
  DollarSign, 
  Package, 
  Users, 
  TrendingUp,
  FileText,
  AlertTriangle,
  Truck,
  Factory
} from "lucide-react";

const dashboardCategories = [
  {
    title: "Finance & AR",
    icon: DollarSign,
    dashboards: [
      { name: "Accounts Receivable Aging", benefit: "See who owes what, instantly" },
      { name: "Cash Flow Forecast", benefit: "Predict cash position 30/60/90 days" },
      { name: "Credit Control Dashboard", benefit: "Stop shipping to bad debtors" },
      { name: "Overdue Invoice Tracker", benefit: "Prioritise collection calls" },
      { name: "Payment Performance", benefit: "Track customer payment trends" },
      { name: "Debtors Age Analysis", benefit: "Detailed aging by customer" },
    ],
  },
  {
    title: "Sales & Orders",
    icon: TrendingUp,
    dashboards: [
      { name: "Open Orders Status", benefit: "Every order, every stage, live" },
      { name: "Sales Pipeline", benefit: "Quotes to orders conversion" },
      { name: "Customer Order History", benefit: "Full customer purchase patterns" },
      { name: "Backorder Management", benefit: "Clear backlogs systematically" },
      { name: "Sales Rep Performance", benefit: "Track targets vs actual" },
      { name: "Quote Conversion Rates", benefit: "Find where you're losing deals" },
    ],
  },
  {
    title: "Inventory & Stock",
    icon: Package,
    dashboards: [
      { name: "Stock Levels Live", benefit: "Real-time inventory visibility" },
      { name: "Reorder Point Alerts", benefit: "Never run out of critical items" },
      { name: "Slow-Moving Stock", benefit: "Identify dead inventory" },
      { name: "Stock Valuation", benefit: "Accurate COGS at any moment" },
      { name: "Warehouse Location", benefit: "Find anything in seconds" },
      { name: "Stock Take Variance", benefit: "Spot shrinkage immediately" },
    ],
  },
  {
    title: "Production & Manufacturing",
    icon: Factory,
    dashboards: [
      { name: "Production Schedule", benefit: "Visual job scheduling" },
      { name: "WIP Tracking", benefit: "Work in progress visibility" },
      { name: "Machine Utilisation", benefit: "Maximise equipment uptime" },
      { name: "Quality Control", benefit: "Track defect rates" },
      { name: "BOM Cost Analysis", benefit: "True product costing" },
      { name: "Capacity Planning", benefit: "Plan ahead, not behind" },
    ],
  },
  {
    title: "Purchasing & Suppliers",
    icon: Truck,
    dashboards: [
      { name: "Purchase Order Status", benefit: "Track every PO to delivery" },
      { name: "Supplier Performance", benefit: "On-time delivery rates" },
      { name: "GRN Matching", benefit: "Invoice vs receipt discrepancies" },
      { name: "Outstanding Creditors", benefit: "What you owe, when it's due" },
      { name: "Lead Time Analysis", benefit: "Supplier reliability data" },
      { name: "Price Variance", benefit: "Catch supplier price creep" },
    ],
  },
  {
    title: "Management & Executive",
    icon: BarChart3,
    dashboards: [
      { name: "Executive Summary", benefit: "One-page business health" },
      { name: "KPI Scorecard", benefit: "All metrics at a glance" },
      { name: "Profitability by Product", benefit: "Know your winners and losers" },
      { name: "Customer Profitability", benefit: "True cost-to-serve analysis" },
      { name: "Budget vs Actual", benefit: "Real-time variance tracking" },
      { name: "Month-End Dashboard", benefit: "Accelerate close process" },
    ],
  },
];

export default function DashboardsPage() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <main className="min-h-screen bg-[#0a0f14] text-slate-200">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative grid-pattern noise-overlay">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="font-mono text-xs tracking-widest text-amber-500 mb-4">
              60+ READY-TO-DEPLOY DASHBOARDS
            </p>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-100 mb-6 leading-tight">
              Stop Digging Through SYSPRO. Start Making Decisions.
            </h1>
            
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Your data already lives in SYSPRO. We surface it in dashboards that update every minute—so 
              you're never waiting for reports that are already outdated by the time you get them.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-[#0a0f14] font-medium px-8 py-4 rounded text-base transition-all hover:shadow-lg hover:shadow-amber-500/25"
              >
                Book Dashboard Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 mb-6">
                Month-End Shouldn't Take 5 Days
              </h2>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Most SYSPRO users spend their month-end pulling the same reports, copying data into 
                Excel, and manually building the same summaries. Every. Single. Month.
              </p>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Meanwhile, critical decisions wait. Cash flow problems sneak up. Overdue invoices 
                pile up unnoticed.
              </p>
              <p className="text-slate-300 font-medium">
                Our clients cut month-end from 5 days to 6 hours. Some do it in half a day.
              </p>
            </div>
            
            <div className="bg-slate-900/80 border border-slate-700/30 rounded-lg p-8">
              <h3 className="font-display text-xl font-medium text-slate-200 mb-6">
                Time Saved Per Week
              </h3>
              <div className="space-y-4">
                {[
                  { task: "AR Aging Reports", before: "4 hours", after: "Instant" },
                  { task: "Stock Level Checks", before: "2 hours", after: "Instant" },
                  { task: "Sales Summary", before: "3 hours", after: "Instant" },
                  { task: "Open Order Status", before: "2 hours", after: "Instant" },
                ].map((item) => (
                  <div key={item.task} className="flex justify-between items-center py-3 border-b border-slate-700/30">
                    <span className="text-slate-300">{item.task}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-rose-400 line-through text-sm">{item.before}</span>
                      <ArrowRight className="w-4 h-4 text-slate-600" />
                      <span className="text-emerald-400 font-medium">{item.after}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-amber-400 font-medium">
                Average: 15-20 hours saved per week
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-mono text-xs tracking-widest text-amber-500 mb-4">DASHBOARD LIBRARY</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 mb-4">
              60+ Dashboards Across Every Function
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Most deploy in 2-4 weeks. Pick what you need now, add more later.
            </p>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {dashboardCategories.map((category, i) => (
              <button
                key={category.title}
                onClick={() => setActiveCategory(i)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all ${
                  activeCategory === i
                    ? "bg-amber-500 text-[#0a0f14] font-medium"
                    : "bg-slate-800/50 text-slate-400 hover:text-slate-200 hover:bg-slate-800"
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.title}
              </button>
            ))}
          </div>

          {/* Dashboard list */}
          <div className="bg-slate-900/50 border border-slate-700/30 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              {(() => {
                const Icon = dashboardCategories[activeCategory].icon;
                return <Icon className="w-6 h-6 text-amber-500" />;
              })()}
              <h3 className="font-display text-xl font-medium text-slate-200">
                {dashboardCategories[activeCategory].title} Dashboards
              </h3>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {dashboardCategories[activeCategory].dashboards.map((dashboard) => (
                <div
                  key={dashboard.name}
                  className="bg-slate-800/50 border border-slate-700/30 rounded-lg p-4 hover:border-amber-500/30 transition-all"
                >
                  <h4 className="font-medium text-slate-200 mb-2">{dashboard.name}</h4>
                  <p className="text-sm text-slate-500">{dashboard.benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center mt-8 text-slate-500">
            Don't see what you need? We build custom dashboards too.{" "}
            <Link href="/contact" className="text-amber-500 hover:text-amber-400">
              Let's talk →
            </Link>
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 mb-4">
              Deployed in Weeks, Not Months
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Audit", desc: "We analyse your SYSPRO data structure and identify quick wins" },
              { num: "02", title: "Configure", desc: "We configure dashboards to match your specific business logic" },
              { num: "03", title: "Deploy", desc: "Dashboards go live with your data, accessible via browser" },
              { num: "04", title: "Train", desc: "Your team learns to use and customise their new tools" },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-16 h-16 rounded-full border-2 border-amber-500/50 flex items-center justify-center mx-auto mb-4 bg-slate-900">
                  <span className="font-mono text-amber-500 font-medium">{step.num}</span>
                </div>
                <h3 className="font-display text-lg font-medium text-slate-200 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 mb-6">
            See Your Data Come Alive
          </h2>
          <p className="text-slate-400 mb-8">
            Book a 30-minute demo. We'll show you exactly what's possible with your SYSPRO data—using 
            real examples from your industry.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-[#0a0f14] font-medium px-8 py-4 rounded text-base transition-all hover:shadow-lg hover:shadow-amber-500/25"
          >
            Book Dashboard Demo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
