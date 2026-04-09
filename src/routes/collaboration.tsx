import { createFileRoute, Link } from "@tanstack/react-router";
import PageHero from "@/components/PageHero";
import ScrollAnimator from "@/components/ScrollAnimator";
import ImageReveal from "@/components/ImageReveal";
import teamEngineering from "@/assets/team-engineering.jpeg";
import aerospaceLabImg from "@/assets/aerospace-lab.jpeg";
import aircraftEngineering from "@/assets/aircraft-engineering.jpeg";
import { GraduationCap, Building2, Handshake, BookOpen, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/collaboration")({
  component: CollaborationPage,
});

function CollaborationPage() {
  return (
    <div className="snap-y snap-mandatory">
      <PageHero title="Collaboration" subtitle="Building partnerships for aerospace innovation across academia and industry" backgroundImage={teamEngineering} />

      {/* Academic */}
      <section className="section-padding snap-start">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimator direction="left">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-electric" />
                <span className="text-xs font-semibold tracking-[0.3em] uppercase text-electric">Academic Partnerships</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground line-accent">Academic Collaboration</h2>
              <p className="mt-8 text-muted-foreground leading-relaxed">
                BAMRL collaborates with engineering institutions for research and development in aerospace structures. We bridge the gap between academic theory and industrial application.
              </p>
              <div className="mt-8 space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-steel">Opportunities</h3>
                {["Final Year Projects — Hands-on aerospace engineering experience", "Internships — Work with real aerospace testing equipment", "Joint Research Programs — Collaborative R&D on advanced alloys", "Lab Development Support — Help institutions build testing capabilities"].map((item, i) => (
                  <div key={i} className="flex gap-3 p-4 bg-gradient-card border border-border rounded-sm hover-lift group">
                    <BookOpen className="w-5 h-5 text-electric shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </ScrollAnimator>

            <ScrollAnimator direction="right" delay={200}>
              <div className="grid grid-cols-1 gap-4">
                <ImageReveal src={aerospaceLabImg} alt="Aerospace Lab" className="h-64" />
                <ImageReveal src={teamEngineering} alt="Team" className="h-48" />
              </div>
            </ScrollAnimator>
          </div>
        </div>
      </section>

      {/* Full-width image band */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden snap-start">
        <img src={aircraftEngineering} alt="Aircraft Engineering" className="w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <ScrollAnimator>
            <h2 className="text-4xl md:text-6xl font-bold text-gradient text-center px-4">Stronger Together</h2>
          </ScrollAnimator>
        </div>
      </section>

      {/* Industry */}
      <section className="section-padding bg-gradient-section snap-start">
        <div className="mx-auto max-w-7xl">
          <ScrollAnimator>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Building2 className="w-6 h-6 text-electric" />
                <span className="text-xs font-semibold tracking-[0.3em] uppercase text-electric">Industry Partnerships</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">Industry Collaboration</h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                We partner with aerospace startups, MSMEs, and Tier-1 defense contractors for design, analysis, and manufacturing support.
              </p>
            </div>
          </ScrollAnimator>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Handshake, title: "Design Partnership", desc: "Collaborative aerospace structural design from concept to production-ready engineering", img: aerospaceLabImg },
              { icon: Building2, title: "Testing Services", desc: "Comprehensive material certification for MSMEs entering the aerospace supply chain", img: aircraftEngineering },
              { icon: GraduationCap, title: "R&D Collaboration", desc: "Joint research on advanced alloy characterization and innovative testing methods", img: teamEngineering },
            ].map((item, i) => (
              <ScrollAnimator key={item.title} delay={i * 150}>
                <div className="group bg-gradient-card border border-border rounded-sm hover-lift h-full overflow-hidden">
                  <div className="h-40 overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" loading="lazy" width={640} height={360} />
                    <div className="absolute inset-0 h-40 bg-gradient-to-t from-card to-transparent" />
                  </div>
                  <div className="p-8 text-center">
                    <item.icon className="w-10 h-10 text-electric mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding snap-start">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollAnimator>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">Partner With Us</h2>
            <p className="mt-6 text-muted-foreground">Whether you're an academic institution or aerospace company, let's build the future together.</p>
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
