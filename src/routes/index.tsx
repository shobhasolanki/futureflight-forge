import { createFileRoute, Link } from "@tanstack/react-router";
import ScrollAnimator from "@/components/ScrollAnimator";
import Drone3D from "@/components/Drone3D";
import AnimatedCounter from "@/components/AnimatedCounter";
import ParticleField from "@/components/ParticleField";
import ImageReveal from "@/components/ImageReveal";
import wireframeHero from "@/assets/wireframe-hero.jpg";
import teamEngineering from "@/assets/team-engineering.jpeg";
import aerospaceLabImg from "@/assets/aerospace-lab.jpeg";
import aircraftEngineering from "@/assets/aircraft-engineering.jpeg";
import labWorkshop from "@/assets/lab-workshop.jpeg";
import wireframeComponent from "@/assets/wireframe-component.webp";
import microscopeLab from "@/assets/microscope-lab.jpeg";
import manufacturing from "@/assets/manufacturing.jpg";
import feaSimulation from "@/assets/fea-simulation.jpg";
import uavFlight from "@/assets/uav-flight.jpg";
import bamrlLogo from "@/assets/bamrl-logo.jpeg";
import { ArrowRight, Atom, Shield, Zap, Target, Microscope, Cog, Plane, FlaskConical, Play } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";


export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  return (
    <div className="snap-y snap-mandatory">
      {/* Hero with Video background */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden snap-start">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster={wireframeHero}
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <ParticleField />

        {/* Animated grid overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(var(--color-electric) 1px, transparent 1px), linear-gradient(90deg, var(--color-electric) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6 animate-fade-up">
                <div className="h-px w-12 bg-electric" />
                <span className="text-xs font-semibold tracking-[0.3em] uppercase text-electric">NABL Accredited</span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <span className="text-gradient">Innovation</span>
                <br />
                <span className="text-foreground">in Every</span>
                <br />
                <span className="text-foreground">Atom.</span>
              </h1>

              <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: '0.3s' }}>
                Precision Aluminium Engineering for Aerospace Applications.
                Design • Simulation • Validation • Manufacturing.
              </p>

              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-electric/10 border border-electric/20 animate-fade-up" style={{ animationDelay: '0.4s' }}>
                <Zap className="w-4 h-4 text-electric" />
                <span className="text-sm font-medium text-electric">48-Hour Turnaround for Chemical & Mechanical Certification</span>
              </div>

              <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.5s' }}>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-electric text-primary-foreground font-semibold text-sm tracking-wide uppercase rounded-sm transition-all hover:bg-electric-glow hover:shadow-lg hover:shadow-electric/20 hover:scale-105"
                >
                  Request Consultation
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-steel/30 text-foreground font-semibold text-sm tracking-wide uppercase rounded-sm transition-all hover:border-electric/50 hover:bg-surface-elevated"
                >
                  Our Services
                </Link>
              </div>
            </div>

            {/* 3D Drone Model */}
            <div className="hidden lg:block h-[450px] animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <Drone3D />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '1s' }}>
          <span className="text-xs tracking-widest uppercase text-muted-foreground">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-electric to-transparent animate-float" />
        </div>
      </section>

      {/* Stats Counter Section - Fixed */}
<section className="relative py-16 md:py-24 overflow-hidden snap-start">
  <div className="absolute inset-0 bg-black/40" />
  
  <div className="relative z-10 mx-auto max-w-6xl px-4">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-center">

      <AnimatedCounter end={48} suffix="hr" label="Turnaround Time" />
      <AnimatedCounter end={100} suffix="%" label="Accuracy" />
      <AnimatedCounter end={7} suffix="xxx" label="Alloy Series" />
      <AnimatedCounter end={15} suffix="+" label="Testing Parameters" />

    </div>
  </div>
</section>

      {/* About Section - Premium */}
<section className="section-padding bg-gradient-section snap-start">
  <div className="mx-auto max-w-7xl px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

      {/* Image FIRST on mobile */}
      <ScrollAnimator direction="right" delay={200}>
        <div className="overflow-hidden rounded-sm">
          <ImageReveal 
            src={teamEngineering} 
            alt="BAMRL Engineering Team"
            className="w-full h-[300px] md:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </ScrollAnimator>

      {/* Text */}
      <ScrollAnimator direction="left">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-electric" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-electric">About BAMRL</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
            Engineering Precision for Aerospace Excellence
          </h2>

          <p className="mt-6 text-muted-foreground leading-relaxed">
            BAMRL Pvt Ltd (Bharati Advance Material Research Lab) is a specialized aerospace engineering company focused on aluminium structural systems. We deliver high-performance, lightweight, and validated engineering solutions from concept to manufacturing-ready components.
          </p>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            Supporting India's Aatmanirbhar Bharat initiative with NABL-accredited testing and world-class precision.
          </p>

          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 border border-electric text-electric text-sm font-medium uppercase tracking-wide hover:bg-electric hover:text-black transition-all"
          >
            Learn More
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </ScrollAnimator>

    </div>
  </div>
</section>

      {/* Core Capabilities — unique images per card */}
      <section className="section-padding snap-start">
        <div className="mx-auto max-w-7xl">
          <ScrollAnimator>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-electric">What We Do</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-white">Core Capabilities</h2>
            </div>
          </ScrollAnimator>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: Cog, title: "Aerospace Structural Design", desc: "Complete structural design solutions for lightweight, high-strength aluminium structures", img: wireframeComponent },
              { icon: Target, title: "Load & Stress Analysis", desc: "Accurate engineering calculations ensuring structural safety under real-world conditions", img: feaSimulation },
              { icon: Atom, title: "FEA Simulation", desc: "Advanced simulation techniques to validate structural integrity before manufacturing", img: aircraftEngineering },
              { icon: Shield, title: "Component Manufacturing", desc: "Precision manufacturing of aluminium aerospace components with quality focus", img: labWorkshop },
              { icon: FlaskConical, title: "Metallurgical Testing", desc: "Chemical analysis, mechanical testing, metallography, and failure analysis", img: microscopeLab },
              { icon: Plane, title: "Prototype Development", desc: "Functional prototypes for testing, validation, and demonstration", img: manufacturing },
            ].map((item, i) => (
              <ScrollAnimator key={item.title} delay={i * 100}>
                <div className="group relative overflow-hidden rounded-md border border-electric/20 bg-black/40 backdrop-blur-md transition-all duration-500 hover:scale-[1.03] hover:border-electric/60 hover:shadow-[0_0_30px_rgba(0,150,255,0.2)]">

  {/* Image */}
  <div className="h-44 overflow-hidden">
    <img
      src={item.img}
      alt={item.title}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
  </div>

  {/* Content */}
  <div className="p-5">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-10 h-10 flex items-center justify-center rounded-md bg-electric/10 border border-electric/30 group-hover:bg-electric/20 transition">
        <item.icon className="w-5 h-5 text-electric" />
      </div>
      <h3 className="text-base font-semibold text-white">{item.title}</h3>
    </div>

    <p className="text-sm text-muted-foreground leading-relaxed">
      {item.desc}
    </p>
  </div>

  {/* Bottom Glow Line */}
  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-electric transition-all duration-500 group-hover:w-full" />
</div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width parallax image band — aircraft engineering */}
      <section className="relative h-[120vh] min-h-[900px] overflow-hidden snap-start">
        <div className="absolute inset-0">
          <motion.img
  src={aircraftEngineering}
  alt="Aircraft Engineering"
  className="absolute inset-0 w-full h-[120%] object-cover"
  style={{ y }}
/>
<div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-background/60" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <ScrollAnimator>
            <div className="text-center px-4">
              <h2 className="text-4xl md:text-6xl font-bold text-gradient">Precision in Every Micron</h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                From concept to certification — engineering excellence at every stage.
              </p>
              
            </div>
          </ScrollAnimator>
        </div>
      </section>

      {/* Why BAMRL — aerospace lab + wireframe images */}
      <section className="section-padding bg-gradient-section snap-start">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimator direction="left">
              <div className="grid grid-cols-2 gap-4">
                <ImageReveal src={aerospaceLabImg} alt="Aerospace Lab" className="h-48" />
                <ImageReveal src={wireframeComponent} alt="Wireframe Component" className="h-48 mt-8" />
                <ImageReveal src={labWorkshop} alt="Lab Workshop" className="h-48 -mt-4" />
                <ImageReveal src={microscopeLab} alt="Microscope Lab" className="h-48 mt-4" />
              </div>
            </ScrollAnimator>

            <ScrollAnimator direction="right" delay={200}>
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-electric">Why Choose Us</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-foreground">Why BAMRL</h2>
              <div className="mt-8 space-y-6">
                {[
                  { title: "Technical Specialization", desc: "Niche expertise in 7xxx & 6xxx series aluminium aerospace structures" },
                  { title: "Integrated Engineering", desc: "Design + Simulation + Manufacturing under one roof" },
                  { title: "Speed & Precision", desc: "48-hour turnaround time for chemical & mechanical certification" },
                  { title: "National Mission", desc: "Supporting Make in India defense ecosystem with world-class accuracy" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="mt-1 w-3 h-3 rounded-full bg-electric shrink-0 group-hover:scale-150 transition-transform" />
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollAnimator>
          </div>
        </div>
      </section>

      {/* Industries — unique images */}
      <section className="section-padding snap-start">
        <div className="mx-auto max-w-7xl text-center">
          <ScrollAnimator>
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-electric">Industries</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-foreground">Industries We Serve</h2>
          </ScrollAnimator>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Plane, label: "UAV / Drone Development", img: uavFlight },
              { icon: Shield, label: "Defense & Research", img: aircraftEngineering },
              { icon: Atom, label: "Aerospace Startups", img: wireframeComponent },
              { icon: Microscope, label: "Engineering Institutions", img: microscopeLab },
            ].map((item, i) => (
              <ScrollAnimator key={item.label} delay={i * 150} direction="scale">
                <div className="relative group overflow-hidden rounded-sm border border-border hover-lift">
                  <div className="h-32 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.label}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40"
                      loading="lazy"
                      width={480}
                      height={270}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4">
                    <item.icon className="w-10 h-10 text-electric group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-foreground text-center">{item.label}</span>
                  </div>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* FEA Showcase — uses wireframe hero */}
      <section className="relative section-padding overflow-hidden snap-start">
        <div className="absolute inset-0">
          <img src={wireframeHero} alt="" className="w-full h-full object-cover opacity-30" loading="lazy" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        </div>
        <ParticleField />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimator>
              <div className="max-w-2xl">
                <span className="text-xs font-semibold tracking-[0.3em] uppercase text-electric">Advanced Engineering</span>
                <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-foreground">Simulation-Driven Development</h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  We use state-of-the-art FEA simulation and validation tools to ensure every component meets aerospace-grade standards before manufacturing begins.
                </p>
                <Link
                  to="/projects"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-electric hover:text-electric-glow transition-colors group"
                >
                  View Our Projects
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollAnimator>
            <ScrollAnimator direction="right" delay={200}>
              <ImageReveal src={feaSimulation} alt="FEA Simulation" />
            </ScrollAnimator>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-section snap-start">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollAnimator>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Have a Project in Mind?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Share your requirements with our engineering team and get a professional solution tailored to your needs.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-10 py-4 bg-electric text-primary-foreground font-semibold text-sm tracking-wide uppercase rounded-sm transition-all hover:bg-electric-glow hover:shadow-lg hover:shadow-electric/20 hover:scale-105"
              >
                Submit Your Project
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-10 py-4 border border-steel/30 text-foreground font-semibold text-sm tracking-wide uppercase rounded-sm transition-all hover:border-electric/50 hover:bg-surface-elevated"
              >
                Explore Services
              </Link>
            </div>
          </ScrollAnimator>
        </div>
      </section>
    </div>
  );
}
