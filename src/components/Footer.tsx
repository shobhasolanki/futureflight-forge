import { Link } from "@tanstack/react-router";
import bamrlLogo from "@/assets/bamrl-logo.jpeg";
import { ArrowRight, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-surface border-t border-border overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-electric) 1px, transparent 0)`,
        backgroundSize: '30px 30px',
      }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            {/* Logo only, no text */}
            <Link to="/" className="inline-block mb-6 group">
              <div className="w-14 h-14 rounded-full border-2 border-electric/30 overflow-hidden group-hover:border-electric transition-all group-hover:shadow-[0_0_20px_oklch(0.6_0.2_250/0.3)]">
                <img src={bamrlLogo} alt="BAMRL" className="w-full h-full object-contain" width={56} height={56} />
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Bharati Advance Material Research Lab — Precision aluminium engineering for aerospace & defense applications.
            </p>
            <p className="mt-4 text-xs text-electric italic">Innovation in Every Atom.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["NABL", "ASTM", "AMS"].map((badge) => (
                <span key={badge} className="px-2 py-1 text-[10px] font-semibold tracking-wider uppercase bg-electric/10 text-electric border border-electric/20 rounded-sm">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-steel mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/projects", label: "Projects" },
                { to: "/lab", label: "Lab & Research" },
                { to: "/collaboration", label: "Collaboration" },
              ].map((l) => (
                <Link key={l.to} to={l.to} className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-electric transition-colors">
                  <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-steel mb-4">Services</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Chemical Analysis (OES)</p>
              <p>Mechanical Testing</p>
              <p>Metallography</p>
              <p>Failure Analysis</p>
              <p>FEA Simulation</p>
              <p>Prototype Development</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-steel mb-4">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-electric shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">BAMRL Pvt Ltd<br />Pune, Maharashtra, India</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-electric shrink-0" />
                <p className="text-sm text-muted-foreground">info@bamrl.com</p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-electric text-primary-foreground text-xs font-semibold tracking-wide uppercase rounded-sm transition-all hover:bg-electric-glow hover:shadow-lg hover:shadow-electric/20 hover:scale-105"
              >
                Request Consultation
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} BAMRL Pvt Ltd. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">NABL Accredited | AS9100 Certification Roadmap</p>
        </div>
      </div>
    </footer>
  );
}
