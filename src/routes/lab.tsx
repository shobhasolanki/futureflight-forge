import { createFileRoute, Link } from "@tanstack/react-router";
import PageHero from "@/components/PageHero";
import ScrollAnimator from "@/components/ScrollAnimator";
import ImageReveal from "@/components/ImageReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import ParticleField from "@/components/ParticleField";
import labWorkshop from "@/assets/lab-workshop.jpeg";
import microscopeLab from "@/assets/microscope-lab.jpeg";
import aerospaceLabImg from "@/assets/aerospace-lab.jpeg";
import metallography from "@/assets/metallography.jpg";
import tensileTesting from "@/assets/tensile-testing.jpg";
import oesTesting from "@/assets/oes-testing.jpg";
import utmTesting from "@/assets/utm-testing.jpg";
import { FlaskConical, Microscope, Target, Search, Shield, Award, ArrowRight, FileText, Activity, Beaker } from "lucide-react";

export const Route = createFileRoute("/lab")({
  component: LabPage,
});

function LabPage() {
  return (
    <div className="snap-y snap-mandatory">
      <PageHero title="Lab & Research" subtitle="NABL-accredited metallurgical testing facility for aerospace-grade materials" backgroundImage={labWorkshop} />

      {/* Lab Stats */}
      <section className="relative py-16 overflow-hidden snap-start">
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-background to-surface" />
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter end={48} suffix="hr" label="Turnaround Time" />
            <AnimatedCounter end={9} suffix="+" label="Elements Detected" />
            <AnimatedCounter end={100} suffix="%" label="Accuracy Rate" />
            <AnimatedCounter end={15} suffix="+" label="Test Parameters" />
          </div>
        </div>
      </section>

      {/* Lab Overview — Element/Novelis style split */}
      <section className="section-padding snap-start">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimator direction="left">
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-electric">Our Laboratory</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground line-accent">Advanced Material Testing Facility</h2>
              <p className="mt-8 text-muted-foreground leading-relaxed">
                Our state-of-the-art laboratory in Pune is equipped with the latest testing equipment for comprehensive metallurgical analysis. We specialize in testing and validation of advanced alloys essential for aerospace structural integrity.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: "48-Hr", desc: "Turnaround Time" },
                  { label: "7xxx/6xxx", desc: "Series Alloys" },
                  { label: "ASTM/AMS", desc: "Standards" },
                  { label: "NABL", desc: "Accredited" },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 bg-gradient-card border border-border rounded-sm text-center hover-lift group">
                    <div className="text-2xl font-bold text-electric group-hover:scale-110 transition-transform">{stat.label}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.desc}</div>
                  </div>
                ))}
              </div>
            </ScrollAnimator>

            <ScrollAnimator direction="right" delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <ImageReveal src={microscopeLab} alt="Microscope Lab" className="h-48" />
                <ImageReveal src={oesTesting} alt="OES Testing" className="h-48 mt-8" />
                <ImageReveal src={aerospaceLabImg} alt="Aerospace Lab" className="h-48 -mt-4" />
                <ImageReveal src={utmTesting} alt="UTM" className="h-48 mt-4" />
              </div>
            </ScrollAnimator>
          </div>
        </div>
      </section>

      {/* Full-width lab image band */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden snap-start">
        <img src={labWorkshop} alt="Lab Workshop" className="w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <ScrollAnimator>
            <h2 className="text-4xl md:text-6xl font-bold text-gradient text-center px-4">World-Class Equipment</h2>
          </ScrollAnimator>
        </div>
      </section>

      {/* Testing Capabilities — alternating layout */}
      <section className="section-padding bg-gradient-section snap-start">
        <div className="mx-auto max-w-7xl">
          <ScrollAnimator>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-electric">Capabilities</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">Testing & Analysis</h2>
            </div>
          </ScrollAnimator>

          <div className="space-y-16">
            {[
              {
                icon: FlaskConical, title: "Chemical Analysis (OES)",
                desc: "High-resolution Optical Emission Spectrometry for precise alloying element detection. Identifying composition of 7xxx (Zinc-based) and 6xxx (Mg-Si) series alloys with exceptional accuracy.",
                specs: ["Element detection: Al, Zn, Mg, Cu, Si, Fe, Mn, Cr, Ti", "Standards: ASTM E1251, AMS 2248"],
                img: oesTesting,
              },
              {
                icon: Target, title: "Mechanical Testing",
                desc: "Comprehensive mechanical property determination using state-of-the-art Universal Testing Machine and hardness testers.",
                specs: ["Tensile Strength, Yield Strength, Elongation", "Hardness: Brinell (HB), Rockwell (HRC/HRB)"],
                img: tensileTesting,
              },
              {
                icon: Microscope, title: "Metallography",
                desc: "Advanced microscopy for microstructure analysis revealing grain boundaries, phases, and material behavior under stress.",
                specs: ["Grain size measurement (ASTM E112)", "Inclusion rating and phase identification"],
                img: microscopeLab,
              },
              {
                icon: Search, title: "Failure Analysis",
                desc: "Expert root cause investigation for flight-critical components combining visual, chemical, and mechanical analysis.",
                specs: ["Fracture surface analysis", "Material degradation assessment"],
                img: aerospaceLabImg,
              },
            ].map((item, i) => (
              <ScrollAnimator key={item.title} direction={i % 2 === 0 ? "left" : "right"}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 flex items-center justify-center rounded-sm bg-electric/10 border border-electric/20 shrink-0 group">
                        <item.icon className="w-7 h-7 text-electric" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.desc}</p>
                        <div className="space-y-1.5">
                          {item.specs.map((spec) => (
                            <div key={spec} className="flex items-center gap-2 text-xs text-steel">
                              <div className="w-1 h-1 rounded-full bg-electric" />
                              {spec}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <ImageReveal src={item.img} alt={item.title} className="h-64 lg:h-80" />
                  </div>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* Metallography showcase — unique bg */}
      <section className="relative section-padding overflow-hidden snap-start">
        <div className="absolute inset-0">
          <img src={metallography} alt="" className="w-full h-full object-cover opacity-20" loading="lazy" width={1024} height={1024} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        </div>
        <ParticleField />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimator direction="left">
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-electric">Research Focus</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">Metallurgy Research</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Our dedicated metallurgy research program focuses on understanding the behavior of high-performance aluminium alloys at the microstructural level.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "7xxx Series: High-strength zinc-based alloys (AA7075, AA7050)",
                  "6xxx Series: Versatile Mg-Si alloys (AA6061, AA6082)",
                  "Heat treatment optimization and aging studies",
                  "Corrosion behavior and surface treatment analysis",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-electric shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </ScrollAnimator>

            <ScrollAnimator direction="right" delay={200}>
              <ImageReveal src={metallography} alt="Aluminum Microstructure" />
            </ScrollAnimator>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-gradient-section snap-start">
        <div className="mx-auto max-w-7xl">
          <ScrollAnimator>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-electric">Certifications</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">Certification Roadmap</h2>
            </div>
          </ScrollAnimator>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Award, title: "NABL Accreditation", status: "Active", desc: "National Accreditation Board for Testing and Calibration Laboratories" },
              { icon: Shield, title: "AS9100", status: "In Progress", desc: "Aerospace Quality Management System certification roadmap" },
              { icon: FileText, title: "ASTM/AMS", status: "Compliant", desc: "Testing per ASTM and Aerospace Material Specifications standards" },
            ].map((cert, i) => (
              <ScrollAnimator key={cert.title} delay={i * 100}>
                <div className="p-8 bg-gradient-card border border-border rounded-sm hover-lift text-center h-full group">
                  <cert.icon className="w-10 h-10 text-electric mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-bold text-foreground">{cert.title}</h3>
                  <span className={`mt-2 inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-sm ${
                    cert.status === "Active" ? "bg-green-900/30 text-green-400 border border-green-500/30" :
                    cert.status === "In Progress" ? "bg-yellow-900/30 text-yellow-400 border border-yellow-500/30" :
                    "bg-electric/10 text-electric border border-electric/20"
                  }`}>{cert.status}</span>
                  <p className="mt-4 text-sm text-muted-foreground">{cert.desc}</p>
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
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">Schedule a Test</h2>
            <p className="mt-6 text-muted-foreground">Get your materials certified with 48-hour turnaround time.</p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 px-10 py-4 bg-electric text-primary-foreground font-semibold text-sm tracking-wide uppercase rounded-sm transition-all hover:bg-electric-glow hover:shadow-lg hover:shadow-electric/20 hover:scale-105 group"
            >
              Schedule a Test
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollAnimator>
        </div>
      </section>
    </div>
  );
}
