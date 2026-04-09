import { Link, useLocation } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import bamrlLogo from "@/assets/bamrl-logo.jpeg";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/lab", label: "Lab" },
  { to: "/collaboration", label: "Collaboration" },
  { to: "/contact", label: "Contact" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-border shadow-lg shadow-background/50" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo only — large, animated, no text */}
          <Link to="/" className="group relative">
            <div className="relative w-16 h-16 overflow-hidden rounded-full border-2 border-electric/30 group-hover:border-electric transition-all duration-500 group-hover:shadow-[0_0_25px_oklch(0.6_0.2_250/0.4)]">
              <img
                src={bamrlLogo}
                alt="BAMRL Logo"
                className="w-full h-full object-contain animate-glow-pulse transition-transform duration-700 group-hover:scale-110"
                width={64}
                height={64}
              />
              {/* Spinning ring around logo */}
              <div className="absolute inset-[-4px] rounded-full border border-electric/20 animate-[spin_12s_linear_infinite]" />
            </div>
          </Link>

          {/* Desktop nav — RTX/Airbus style minimal links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative px-4 py-2 text-sm font-medium tracking-wide uppercase text-muted-foreground transition-all duration-300 hover:text-foreground group"
                activeProps={{ className: "!text-electric" }}
                activeOptions={{ exact: link.to === "/" }}
              >
                {link.label}
                {/* Animated underline */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-electric transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-6 py-2.5 text-sm font-semibold tracking-wide uppercase bg-electric text-primary-foreground rounded-sm transition-all duration-300 hover:bg-electric-glow hover:shadow-lg hover:shadow-electric/25 hover:scale-105"
            >
              Get Quote
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-foreground p-2 hover:text-electric transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden glass border-t border-border animate-fade-in">
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block px-4 py-3 text-sm font-medium tracking-wide uppercase text-muted-foreground transition-colors hover:text-foreground hover:bg-surface-elevated rounded-sm"
                activeProps={{ className: "!text-electric !bg-surface-elevated" }}
                activeOptions={{ exact: link.to === "/" }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block mt-4 px-4 py-3 text-sm font-semibold tracking-wide uppercase bg-electric text-primary-foreground rounded-sm text-center"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
