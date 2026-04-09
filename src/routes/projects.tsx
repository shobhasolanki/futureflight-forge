import { createFileRoute, Link } from "@tanstack/react-router";
import PageHero from "@/components/PageHero";
import ScrollAnimator from "@/components/ScrollAnimator";
import ImageReveal from "@/components/ImageReveal";
import feaSimulation from "@/assets/fea-simulation.jpg";
import manufacturing from "@/assets/manufacturing.jpg";
import wireframeComponent from "@/assets/wireframe-component.webp";
import wireframeHero from "@/assets/wireframe-hero.jpg";
import uavFlight from "@/assets/uav-flight.jpg";
import teamEngineering from "@/assets/team-engineering.jpeg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="snap-y snap-mandatory">
      <PageHero title="Our Projects" subtitle="Engineering excellence demonstrated through real-world aerospace applications" backgroundImage={wireframeHero} />

      <section className="section-padding snap-start">
        <div className="mx-auto max-w-7xl">
          {/* Project 01 */}
          <ScrollAnimator direction="left">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
              <ImageReveal src={feaSimulation} alt="UAV Wing FEA Simulation" className="h-72 lg:h-96" />
              <div>
                <span className="px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-electric/10 text-electric border border-electric/20 rounded-sm">Project 01</span>
                <h3 className="mt-4 text-2xl md:text-3xl font-bold text-foreground">UAV Wing Structural Design & Validation</h3>
                <div className="mt-6 space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-steel mb-2">Scope of Work</h4>
                    <ul className="space-y-1.5">
                      {["Requirement Analysis", "Load Calculation", "CAD Modeling", "FEA Simulation"].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-electric" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-steel mb-2">Outcome</h4>
                    <ul className="space-y-1.5">
                      {["Lightweight optimized design", "Validated stress and deformation results", "Manufacturing-ready structure"].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-electric" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimator>

          {/* Full-width image band */}
          <div className="relative h-[30vh] min-h-[200px] overflow-hidden rounded-sm mb-24 snap-start">
            <img src={wireframeComponent} alt="" className="w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
            <div className="absolute inset-0 bg-background/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <ScrollAnimator>
                <h3 className="text-3xl md:text-5xl font-bold text-gradient text-center">CAD-Driven Engineering</h3>
              </ScrollAnimator>
            </div>
          </div>

          {/* Project 02 */}
          <ScrollAnimator direction="right">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
              <div className="lg:order-2">
                <ImageReveal src={teamEngineering} alt="Team Engineering" className="h-72 lg:h-96" />
              </div>
              <div className="lg:order-1">
                <span className="px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-electric/10 text-electric border border-electric/20 rounded-sm">Project 02</span>
                <h3 className="mt-4 text-2xl md:text-3xl font-bold text-foreground">Aluminium Bracket Structural Optimization</h3>
                <div className="mt-6 space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-steel mb-2">Scope</h4>
                    <ul className="space-y-1.5">
                      {["Design improvement", "Weight reduction", "Stress validation"].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-electric" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-steel mb-2">Outcome</h4>
                    <ul className="space-y-1.5">
                      {["Reduced weight by 30%", "Improved performance under load", "Ready for CNC manufacturing"].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-electric" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimator>

          {/* Project 03 */}
          <ScrollAnimator direction="left">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ImageReveal src={uavFlight} alt="UAV Flight Testing" className="h-72 lg:h-96" />
              <div>
                <span className="px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-electric/10 text-electric border border-electric/20 rounded-sm">Project 03</span>
                <h3 className="mt-4 text-2xl md:text-3xl font-bold text-foreground">UAV Full-System Integration & Flight Validation</h3>
                <div className="mt-6 space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-steel mb-2">Scope</h4>
                    <ul className="space-y-1.5">
                      {["Structural integration", "Flight load validation", "Material certification", "Ground & flight testing"].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-electric" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-steel mb-2">Outcome</h4>
                    <ul className="space-y-1.5">
                      {["Successful flight validation", "Certified aluminium alloy components", "Production-ready platform"].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-electric" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-section snap-start">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollAnimator>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">Have a Similar Challenge?</h2>
            <p className="mt-6 text-muted-foreground">Let our engineering team design, simulate, and manufacture your next aerospace component.</p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 px-10 py-4 bg-electric text-primary-foreground font-semibold text-sm tracking-wide uppercase rounded-sm transition-all hover:bg-electric-glow hover:shadow-lg hover:shadow-electric/20 hover:scale-105 group"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollAnimator>
        </div>
      </section>
    </div>
  );
}
