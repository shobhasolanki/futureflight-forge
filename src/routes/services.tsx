import { createFileRoute, Link } from "@tanstack/react-router";
import PageHero from "@/components/PageHero";
import ScrollAnimator from "@/components/ScrollAnimator";
import ImageReveal from "@/components/ImageReveal";
import manufacturing from "@/assets/manufacturing.jpg";
import feaSimulation from "@/assets/fea-simulation.jpg";
import wireframeComponent from "@/assets/wireframe-component.webp";
import aircraftEngineering from "@/assets/aircraft-engineering.jpeg";
import labWorkshop from "@/assets/lab-workshop.jpeg";
import microscopeLab from "@/assets/microscope-lab.jpeg";
import oesTesting from "@/assets/oes-testing.jpg";
import utmTesting from "@/assets/utm-testing.jpg";
import { Cog, Target, Atom, Shield, Wrench, FlaskConical, Microscope, Search, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

function ServicesPage() {
  const engineeringServices = [
    { icon: Cog, title: "Aerospace Structural Design", items: ["Concept Design", "3D CAD Modeling (SolidWorks)", "Design Optimization"], img: wireframeComponent },
    { icon: Target, title: "Load & Stress Analysis", items: ["Static Load Analysis", "Flight Condition Assumptions", "Safety Factor Calculations"], img: feaSimulation },
    { icon: Atom, title: "FEA Simulation & Validation", items: ["Stress Analysis", "Deformation Study", "Result Interpretation"], img: aircraftEngineering },
    { icon: Wrench, title: "Aluminium Component Manufacturing", items: ["Sheet Metal Structures", "Machined Parts", "Assembly Support"], img: labWorkshop },
    { icon: Shield, title: "Prototype Development", items: ["Functional prototypes", "Testing & validation", "Demonstration models"], img: manufacturing },
  ];

  const labServices = [
    { icon: FlaskConical, title: "Chemical Analysis", desc: "High-resolution Optical Emission Spectrometry (OES) for precise alloying element detection in 7xxx and 6xxx series aluminum alloys.", img: oesTesting },
    { icon: Target, title: "Mechanical Testing", desc: "Tensile (UTM), Yield, Elongation, and Hardness testing (Brinell/Rockwell) per ASTM/AMS standards.", img: utmTesting },
    { icon: Microscope, title: "Metallography", desc: "Microstructure analysis, grain size measurement, and inclusion rating for flight-critical components.", img: microscopeLab },
    { icon: Search, title: "Failure Analysis", desc: "Root cause investigation for industrial and aerospace components with comprehensive reporting.", img: labWorkshop },
  ];

  return (
    <div className="snap-y snap-mandatory">
      <PageHero title="Our Services" subtitle="Integrated engineering solutions from concept to manufacturing-ready components" backgroundImage={aircraftEngineering} />

      {/* Engineering Services */}
      <section className="section-padding snap-start">
        <div className="mx-auto max-w-7xl">
          <ScrollAnimator>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-electric">Engineering</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">Engineering Services</h2>
            </div>
          </ScrollAnimator>

          <div className="space-y-16">
            {engineeringServices.map((svc, i) => (
              <ScrollAnimator key={svc.title} direction={i % 2 === 0 ? "left" : "right"}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-sm bg-electric/10 border border-electric/20">
                        <svc.icon className="w-6 h-6 text-electric" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{svc.title}</h3>
                    </div>
                    <ul className="mt-6 space-y-3">
                      {svc.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-electric shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <ImageReveal src={svc.img} alt={svc.title} className="h-64 lg:h-80" />
                  </div>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width image band */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden snap-start">
        <div className="absolute inset-0">
          <img src={wireframeComponent} alt="" className="w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
          <div className="absolute inset-0 bg-background/60" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <ScrollAnimator>
            <div className="text-center px-4">
              <h2 className="text-4xl md:text-6xl font-bold text-gradient">Simulation-Driven Development</h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                We validate every design digitally before a single part is manufactured.
              </p>
            </div>
          </ScrollAnimator>
        </div>
      </section>

      {/* Lab Services */}
      <section className="section-padding bg-gradient-section snap-start">
        <div className="mx-auto max-w-7xl">
          <ScrollAnimator>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-electric">Testing Catalog</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">Metallurgical Testing Services</h2>
            </div>
          </ScrollAnimator>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {labServices.map((svc, i) => (
              <ScrollAnimator key={svc.title} delay={i * 100}>
                <div className="group bg-gradient-card border border-border rounded-sm hover-lift h-full overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={svc.img}
                      alt={svc.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      width={960}
                      height={540}
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-sm bg-electric/10 border border-electric/20 shrink-0 -mt-10 relative z-10">
                        <svc.icon className="w-6 h-6 text-electric" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2">{svc.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
                      </div>
                    </div>
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
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">Ready to Get Started?</h2>
            <p className="mt-6 text-muted-foreground">Request a detailed quotation or schedule a test with our engineering team.</p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 px-10 py-4 bg-electric text-primary-foreground font-semibold text-sm tracking-wide uppercase rounded-sm transition-all hover:bg-electric-glow hover:shadow-lg hover:shadow-electric/20 hover:scale-105 group"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollAnimator>
        </div>
      </section>
    </div>
  );
}
