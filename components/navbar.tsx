"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Award } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0f14]/95 backdrop-blur-md border-b border-slate-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded flex items-center justify-center">
              <span className="font-display font-bold text-[#0a0f14] text-lg">R</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-semibold text-slate-100">RSASoft</span>
              <span className="text-[10px] text-amber-500 font-mono tracking-wider hidden sm:block">
                SYSPRO INTEGRATION EXCELLENCE
              </span>
            </div>
          </Link>

          {/* Award Badge - Desktop */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full">
            <Award className="w-4 h-4 text-amber-500" />
            <span className="text-xs text-amber-400 font-medium">SYSPRO Integration Award 2025</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/dashboards" 
              className="text-slate-400 hover:text-amber-400 transition-colors text-sm"
            >
              Dashboards
            </Link>
            <Link 
              href="/integrations" 
              className="text-slate-400 hover:text-amber-400 transition-colors text-sm"
            >
              Integrations
            </Link>
            <Link 
              href="/automation" 
              className="text-slate-400 hover:text-amber-400 transition-colors text-sm"
            >
              Automation
            </Link>
            <Link 
              href="/about" 
              className="text-slate-400 hover:text-amber-400 transition-colors text-sm"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-[#0a0f14] font-medium px-5 py-2.5 rounded text-sm transition-all hover:shadow-lg hover:shadow-amber-500/25"
            >
              Book Free Audit
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-slate-400 hover:text-slate-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 space-y-4 border-t border-slate-800/50 pt-4">
            {/* Award Badge - Mobile */}
            <div className="flex items-center gap-2 px-3 py-2 bg-amber-500/10 border border-amber-500/30 rounded-lg mb-4">
              <Award className="w-4 h-4 text-amber-500" />
              <span className="text-xs text-amber-400 font-medium">SYSPRO Integration Award 2025</span>
            </div>
            
            <Link 
              href="/dashboards" 
              className="block text-slate-300 hover:text-amber-400 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboards
            </Link>
            <Link 
              href="/integrations" 
              className="block text-slate-300 hover:text-amber-400 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Integrations
            </Link>
            <Link 
              href="/automation" 
              className="block text-slate-300 hover:text-amber-400 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Automation
            </Link>
            <Link 
              href="/about" 
              className="block text-slate-300 hover:text-amber-400 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-[#0a0f14] font-medium px-5 py-3 rounded transition-all mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Free Audit
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
