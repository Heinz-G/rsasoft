"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Award, ChevronRight } from "lucide-react";

// Define the type
export type CopyVersion = "full" | "safe";

// Define props interface
interface NavbarProps {
  copyVersion?: CopyVersion;
}

export function Navbar({ copyVersion = "full" }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const awardText =
    copyVersion === "full"
      ? "SYSPRO hired us directly for their largest project"
      : "SYSPRO Integration Excellence Award 2025";

  const navLinks = [
    { href: "/dashboards", label: "Dashboards" },
    { href: "/integrations", label: "Integrations" },
    { href: "/automation", label: "Automation" },
    { href: "/custom", label: "Custom Apps" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-md border-b border-slate-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center shadow-lg shadow-teal-500/20">
              <span className="font-display font-bold text-slate-950 text-lg">
                R
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-semibold text-slate-100">
                RSASoft
              </span>
              <span className="text-[10px] text-teal-500 font-mono tracking-wider hidden sm:block">
                ERP AUTOMATION EXPERTS
              </span>
            </div>
          </Link>

          {/* Award Badge - Desktop Only */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-teal-500/10 border border-teal-500/30 rounded-full">
            <Award className="w-4 h-4 text-teal-500" />
            <span className="text-xs text-teal-400 font-medium">
              {awardText}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-400 hover:text-slate-100 transition-colors text-sm px-4 py-2 rounded-lg hover:bg-slate-800/50"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-slate-950 font-semibold px-5 py-2.5 rounded-lg text-sm transition-all hover:shadow-lg hover:shadow-teal-500/25"
            >
              Get Free Audit
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-slate-100 hover:text-teal-400 p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-6 border-t border-slate-800/50 pt-4 animate-in fade-in slide-in-from-top-2 duration-200">
            {/* Mobile Award Badge */}
            <div className="flex items-center gap-2 px-3 py-2 bg-teal-500/10 border border-teal-500/30 rounded-lg mb-4">
              <Award className="w-4 h-4 text-teal-500" />
              <span className="text-xs text-teal-400 font-medium">
                {awardText}
              </span>
            </div>

            {/* Mobile Links */}
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-slate-300 hover:text-teal-400 hover:bg-slate-800/50 transition-colors py-3 px-3 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-6 pt-4 border-t border-slate-800/50">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-slate-950 font-semibold px-5 py-3.5 rounded-lg transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Your Free Audit
                <ChevronRight className="w-4 h-4" />
              </Link>
              <p className="text-center text-xs text-slate-500 mt-3">
                30 min call • No obligation • Actionable insights
              </p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
