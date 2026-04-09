import { createFileRoute } from "@tanstack/react-router";
import ScrollAnimator from "@/components/ScrollAnimator";
import ParticleField from "@/components/ParticleField";
import { useState } from "react";
import { MapPin, Mail, Phone, Send, Lock, Clock, Shield } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-20">
      {/* Hero-style header */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface to-background" />
        <ParticleField />
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(var(--color-electric) 1px, transparent 1px), linear-gradient(90deg, var(--color-electric) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div className="relative z-10">
          <ScrollAnimator>
            <div className="text-center px-4">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-12 bg-electric" />
                <span className="text-xs font-semibold tracking-[0.3em] uppercase text-electric">Contact</span>
                <div className="h-px w-12 bg-electric" />
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gradient">Get in Touch</h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                Share your requirements with our engineering team and get a professional solution tailored to your needs.
              </p>
            </div>
          </ScrollAnimator>
        </div>
      </section>

      {/* Quick info cards */}
      <section className="pb-12 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: "48-Hr Response", desc: "Our engineering team responds within 48 hours" },
              { icon: Shield, title: "Confidential", desc: "All data handled with strict confidentiality" },
              { icon: Mail, title: "Direct Access", desc: "Speak directly with our technical experts" },
            ].map((item, i) => (
              <ScrollAnimator key={item.title} delay={i * 100}>
                <div className="p-6 bg-gradient-card border border-border rounded-sm text-center hover-lift">
                  <item.icon className="w-8 h-8 text-electric mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <ScrollAnimator direction="left">
              <div className="space-y-6">
                <div className="p-6 bg-gradient-card border border-border rounded-sm hover-lift">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-electric" />
                    <h3 className="font-semibold text-foreground">Location</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">BAMRL Pvt Ltd<br />Pune, Maharashtra, India</p>
                </div>

                <div className="p-6 bg-gradient-card border border-border rounded-sm hover-lift">
                  <div className="flex items-center gap-3 mb-3">
                    <Mail className="w-5 h-5 text-electric" />
                    <h3 className="font-semibold text-foreground">Email</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">info@bamrl.com</p>
                </div>

                <div className="p-6 bg-gradient-card border border-border rounded-sm hover-lift">
                  <div className="flex items-center gap-3 mb-3">
                    <Phone className="w-5 h-5 text-electric" />
                    <h3 className="font-semibold text-foreground">Phone</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Contact us for details</p>
                </div>

                <div className="p-6 bg-gradient-card border border-border rounded-sm border-glow">
                  <div className="flex items-center gap-3 mb-3">
                    <Lock className="w-5 h-5 text-electric" />
                    <h3 className="font-semibold text-foreground">Confidentiality</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    All client data, project designs, and technical information are handled with strict confidentiality and professional engineering ethics.
                  </p>
                </div>
              </div>
            </ScrollAnimator>

            {/* Form */}
            <ScrollAnimator direction="right" delay={200} className="lg:col-span-2">
              {submitted ? (
                <div className="p-12 bg-gradient-card border border-electric/20 rounded-sm text-center">
                  <div className="w-16 h-16 mx-auto bg-electric/10 rounded-full flex items-center justify-center mb-6">
                    <Send className="w-8 h-8 text-electric" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Thank You!</h3>
                  <p className="mt-4 text-muted-foreground">Your inquiry has been submitted. Our engineering team will respond within 24 hours.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="p-8 bg-gradient-card border border-border rounded-sm space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-steel mb-2">Name *</label>
                      <input type="text" required className="w-full px-4 py-3 bg-input border border-border rounded-sm text-foreground text-sm focus:outline-none focus:border-electric transition-colors" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-steel mb-2">Email *</label>
                      <input type="email" required className="w-full px-4 py-3 bg-input border border-border rounded-sm text-foreground text-sm focus:outline-none focus:border-electric transition-colors" placeholder="you@company.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-steel mb-2">Phone</label>
                      <input type="tel" className="w-full px-4 py-3 bg-input border border-border rounded-sm text-foreground text-sm focus:outline-none focus:border-electric transition-colors" placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-steel mb-2">Company</label>
                      <input type="text" className="w-full px-4 py-3 bg-input border border-border rounded-sm text-foreground text-sm focus:outline-none focus:border-electric transition-colors" placeholder="Company name" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-steel mb-2">Service Required</label>
                    <select className="w-full px-4 py-3 bg-input border border-border rounded-sm text-foreground text-sm focus:outline-none focus:border-electric transition-colors">
                      <option value="">Select a service</option>
                      <option value="design">Aerospace Structural Design</option>
                      <option value="fea">FEA Simulation</option>
                      <option value="testing">Metallurgical Testing</option>
                      <option value="manufacturing">Component Manufacturing</option>
                      <option value="prototype">Prototype Development</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-steel mb-2">Project Details *</label>
                    <textarea required rows={5} className="w-full px-4 py-3 bg-input border border-border rounded-sm text-foreground text-sm focus:outline-none focus:border-electric transition-colors resize-none" placeholder="Describe your project requirements, materials, testing needs..." />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-electric text-primary-foreground font-semibold text-sm tracking-wide uppercase rounded-sm transition-all hover:bg-electric-glow hover:shadow-lg hover:shadow-electric/20"
                  >
                    <Send className="w-4 h-4" />
                    Submit Inquiry
                  </button>
                </form>
              )}
            </ScrollAnimator>
          </div>
        </div>
      </section>
    </div>
  );
}
