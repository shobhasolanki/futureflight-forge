import { createFileRoute, Link } from "@tanstack/react-router";
import PageHero from "@/components/PageHero";
import ScrollAnimator from "@/components/ScrollAnimator";
import ImageReveal from "@/components/ImageReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import teamEngineering from "@/assets/team-engineering.jpeg";
import aerospaceLabImg from "@/assets/aerospace-lab.jpeg";
import aircraftEngineering from "@/assets/aircraft-engineering.jpeg";
import labWorkshop from "@/assets/lab-workshop.jpeg";
import manufacturing from "@/assets/manufacturing.jpg";
import { Eye, Target, Rocket, Shield, Zap, Award, Users, Clock, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="snap-y snap-mandatory">
      <PageHero title="About BAMRL" subtitle="Engineering excellence in aluminium aerospace structures since inception" backgroundImage={aircraftEngineering} />

      {/* Stats */}
      <section className="relative py-16 overflow-hidden snap-start">
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-background to-surface" />
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter end={48} suffix="hr" label="Turnaround Time" />
            <AnimatedCounter end={100} suffix="%" label="Report Accuracy" />
            <AnimatedCounter end={2} suffix="" label="Expert Directors" />
            <AnimatedCounter end={4} suffix="" label="Pillars of Mission" />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding snap-start">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollAnimator direction="left">
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-electric">Company Overview</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">Bharati Advance Material Research Lab</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                BAMRL Pvt Ltd is an emerging aerospace engineering company dedicated to the design, validation, and manufacturing of aluminium structural components. Our focus is to deliver precision-engineered solutions that meet modern aerospace performance standards.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { icon: Target, label: "Precision in Every Micron", desc: "100% accurate reports, 100% of the time" },
                  { icon: Zap, label: "Technological Agility", desc: "Adapting to new alloy developments faster" },
                  { icon: Shield, label: "Founder-Driven", desc: "Personal oversight on every high-stakes project" },
                ].map((item) => (
                  <div key={item.label} className="p-4 bg-gradient-card border border-border rounded-sm hover-lift group">
                    <item.icon className="w-6 h-6 text-electric mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="text-sm font-semibold text-foreground">{item.label}</h4>
                    <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollAnimator>

            <ScrollAnimator direction="right" delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <ImageReveal src={aerospaceLabImg} alt="Aerospace Lab" className="h-48" />
                <ImageReveal src={manufacturing} alt="Manufacturing" className="h-48 mt-8" />
                <ImageReveal src={teamEngineering} alt="Team" className="h-48 col-span-2" />
              </div>
            </ScrollAnimator>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative py-24 overflow-hidden snap-start">
        <div className="absolute inset-0">
          <img src={labWorkshop} alt="" className="w-full h-full object-cover opacity-15" loading="lazy" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollAnimator direction="left">
              <div className="p-8 bg-gradient-card border border-border rounded-sm border-glow h-full">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-6 h-6 text-electric" />
                  <h3 className="text-xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  To become India's most trusted and technologically advanced center for Metallurgical Research and Material Validation, empowering the global Aerospace and Defense supply chain through uncompromising precision and innovation.
                </p>
              </div>
            </ScrollAnimator>

            <ScrollAnimator direction="right" delay={200}>
              <div className="p-8 bg-gradient-card border border-border rounded-sm h-full">
                <div className="flex items-center gap-3 mb-4">
                  <Rocket className="w-6 h-6 text-electric" />
                  <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  To accelerate the 'Make in India' initiative by providing High-Performance Alloy Characterization with world-class accuracy and an industry-leading 48-hour turnaround time.
                </p>
              </div>
            </ScrollAnimator>
          </div>
        </div>
      </section>

      {/* 4 Pillars */}
      <section className="section-padding bg-gradient-section snap-start">
        <div className="mx-auto max-w-7xl">
          <ScrollAnimator>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-electric">Foundation</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">The 4 Pillars of Our Mission</h2>
            </div>
          </ScrollAnimator>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: "Speed", desc: "Eliminating the 10-day testing bottleneck to keep production lines moving." },
              { icon: Target, title: "Specialization", desc: "Mastering the complexities of 7xxx and 6xxx series Aluminum alloys." },
              { icon: Shield, title: "National Pride", desc: "Directly supporting the growth of the Indian Defense ecosystem." },
              { icon: Award, title: "Traceability", desc: "Ensuring every atom is documented to international standards (ASTM/AMS)." },
            ].map((item, i) => (
              <ScrollAnimator key={item.title} delay={i * 100}>
                <div className="p-8 bg-gradient-card border border-border rounded-sm hover-lift text-center h-full group">
                  <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-electric/10 border border-electric/20 mb-6 group-hover:bg-electric/20 group-hover:scale-110 transition-all">
                    <item.icon className="w-7 h-7 text-electric" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* Team image band */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden snap-start">
        <img src={teamEngineering} alt="BAMRL Team" className="w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <ScrollAnimator>
            <h2 className="text-4xl md:text-6xl font-bold text-gradient text-center">Our Team. Our Strength.</h2>
          </ScrollAnimator>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding snap-start">
        <div className="mx-auto max-w-7xl">
          <ScrollAnimator>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-electric">Leadership</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">Meet Our Directors</h2>
            </div>
          </ScrollAnimator>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Anil Ramji Pawar",
                role: "Managing Director",
                degree: "B.E. Mechanical Engineering",
                desc: "At BAMRL, we believe that the strength of a nation's defense is found in the integrity of its materials. We founded BAMRL to break the testing bottleneck in India's aerospace supply chain.",
              },
              {
                name: "Mohammed Fahim Khan",
                role: "Director — Technical Operations & Strategy",
                degree: "B.E. Mechanical Engineering",
                desc: "Architect of our 'Rapid Response' model, reducing material certification lead times to 48 hours. Integrating advanced data-driven reporting with lean laboratory management.",
              },
            ].map((person, i) => (
              <ScrollAnimator key={person.name} delay={i * 200}>
                <div className="p-8 bg-gradient-card border border-border rounded-sm hover-lift group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-electric/10 border border-electric/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Users className="w-8 h-8 text-electric" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{person.name}</h3>
                      <p className="text-sm text-electric">{person.role}</p>
                      <p className="text-xs text-muted-foreground">{person.degree}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">"{person.desc}"</p>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-section snap-start">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollAnimator>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">Join Our Mission</h2>
            <p className="mt-6 text-muted-foreground">Partner with BAMRL for world-class aerospace engineering and testing.</p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 px-10 py-4 bg-electric text-primary-foreground font-semibold text-sm tracking-wide uppercase rounded-sm transition-all hover:bg-electric-glow hover:shadow-lg hover:shadow-electric/20 hover:scale-105 group"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollAnimator>
        </div>
      </section>
    </div>
  );
}
