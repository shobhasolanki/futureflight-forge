import { useState } from "react";

interface Props {
  title: string;
  subtitle: string;
  backgroundImage: string;
  videoUrl?: string;
}

export default function PageHero({ title, subtitle, backgroundImage, videoUrl }: Props) {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt=""
          className={`w-full h-full object-cover transition-opacity duration-1000 ${videoUrl && videoLoaded ? "opacity-0" : "opacity-100"}`}
          width={1920}
          height={1080}
        />
        {videoUrl && (
          <video
            autoPlay
            muted
            loop
            playsInline
            onCanPlay={() => setVideoLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? "opacity-100" : "opacity-0"}`}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(var(--color-electric) 1px, transparent 1px), linear-gradient(90deg, var(--color-electric) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6 animate-fade-up">
          <div className="h-px w-12 bg-electric" />
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-electric">BAMRL</span>
          <div className="h-px w-12 bg-electric" />
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gradient animate-fade-up" style={{ animationDelay: "0.1s" }}>
          {title}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
          {subtitle}
        </p>
        <div className="mt-8 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-electric to-transparent animate-fade-in" style={{ animationDelay: "0.5s" }} />
      </div>

      {/* Bottom fade with scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1s" }}>
        <span className="text-xs tracking-widest uppercase text-muted-foreground">Explore</span>
        <div className="w-px h-8 bg-gradient-to-b from-electric to-transparent" />
      </div>
    </section>
  );
}
