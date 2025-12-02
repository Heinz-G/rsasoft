import Link from "next/link";
import { Award, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-800/50 py-16 bg-[#0a0f14]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded flex items-center justify-center">
                <span className="font-display font-bold text-[#0a0f14] text-sm">R</span>
              </div>
              <span className="font-display text-lg font-semibold text-slate-200">RSASoft</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">
              Award-winning SYSPRO implementation partner. Custom dashboards, EDI integrations, 
              and workflow automation for manufacturers and distributors.
            </p>
            {/* Award badge */}
            <div className="flex items-center gap-2 px-3 py-2 bg-amber-500/10 border border-amber-500/30 rounded-lg">
              <Award className="w-4 h-4 text-amber-500" />
              <span className="text-xs text-amber-400">SYSPRO Integration Award 2025</span>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-medium text-slate-300 mb-4">Solutions</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/dashboards" className="text-slate-500 hover:text-amber-400 transition-colors">
                  SYSPRO Dashboards
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="text-slate-500 hover:text-amber-400 transition-colors">
                  EDI & Integrations
                </Link>
              </li>
              <li>
                <Link href="/automation" className="text-slate-500 hover:text-amber-400 transition-colors">
                  Workflow Automation
                </Link>
              </li>
              <li>
                <Link href="/warehouse" className="text-slate-500 hover:text-amber-400 transition-colors">
                  Warehouse Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-medium text-slate-300 mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-slate-500 hover:text-amber-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-slate-500 hover:text-amber-400 transition-colors">
                  Our Clients
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-500 hover:text-amber-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-slate-300 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500" />
                <a href="mailto:info@rsasoft.co.za" className="hover:text-amber-400 transition-colors">
                  info@rsasoft.co.za
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-500" />
                <span>South Africa</span>
              </li>
            </ul>
            
            {/* International note */}
            <p className="mt-4 text-xs text-slate-600">
              Serving clients globally. US pricing available.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} RSA Enterprise Software Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-600">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
