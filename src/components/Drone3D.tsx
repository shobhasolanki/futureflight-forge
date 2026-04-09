import { useEffect, useRef } from "react";

export default function Drone3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let animFrame: number;
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.05;
      currentY += (mouseY - currentY) * 0.05;
      const droneEl = el.querySelector(".drone-model") as HTMLElement;
      if (droneEl) {
        droneEl.style.transform = `rotateY(${currentX}deg) rotateX(${-currentY}deg)`;
      }
      animFrame = requestAnimationFrame(animate);
    };

    el.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center" style={{ perspective: "1200px" }}>
      {/* Glow ring */}
      <div className="absolute w-[280px] h-[280px] rounded-full border border-electric/20 animate-[spin_20s_linear_infinite]" />
      <div className="absolute w-[340px] h-[340px] rounded-full border border-electric/10 animate-[spin_30s_linear_infinite_reverse]" />
      
      {/* 3D Drone SVG */}
      <div className="drone-model transition-transform duration-100" style={{ transformStyle: "preserve-3d" }}>
        <svg viewBox="0 0 400 300" className="w-[320px] h-[240px] drop-shadow-[0_0_40px_oklch(0.6_0.2_250/0.5)]" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Body */}
          <ellipse cx="200" cy="150" rx="60" ry="20" fill="url(#bodyGrad)" stroke="var(--color-electric)" strokeWidth="1" opacity="0.9" />
          <ellipse cx="200" cy="145" rx="50" ry="15" fill="url(#bodyTopGrad)" stroke="var(--color-electric)" strokeWidth="0.5" opacity="0.8" />
          
          {/* Arms */}
          <line x1="160" y1="140" x2="80" y2="100" stroke="var(--color-steel)" strokeWidth="3" strokeLinecap="round" />
          <line x1="240" y1="140" x2="320" y2="100" stroke="var(--color-steel)" strokeWidth="3" strokeLinecap="round" />
          <line x1="160" y1="155" x2="80" y2="195" stroke="var(--color-steel)" strokeWidth="3" strokeLinecap="round" />
          <line x1="240" y1="155" x2="320" y2="195" stroke="var(--color-steel)" strokeWidth="3" strokeLinecap="round" />
          
          {/* Rotors */}
          {[
            { cx: 80, cy: 100 },
            { cx: 320, cy: 100 },
            { cx: 80, cy: 195 },
            { cx: 320, cy: 195 },
          ].map((pos, i) => (
            <g key={i}>
              <circle cx={pos.cx} cy={pos.cy} r="8" fill="var(--color-steel)" stroke="var(--color-electric)" strokeWidth="1" />
              <ellipse cx={pos.cx} cy={pos.cy} rx="35" ry="6" fill="var(--color-electric)" opacity="0.15" className="animate-[spin_0.15s_linear_infinite]" style={{ transformOrigin: `${pos.cx}px ${pos.cy}px` }} />
              <ellipse cx={pos.cx} cy={pos.cy} rx="35" ry="6" fill="var(--color-electric)" opacity="0.1" className="animate-[spin_0.15s_linear_infinite]" style={{ transformOrigin: `${pos.cx}px ${pos.cy}px`, animationDelay: "0.05s" }} />
              {/* Rotor glow */}
              <circle cx={pos.cx} cy={pos.cy} r="40" fill="none" stroke="var(--color-electric)" strokeWidth="0.5" opacity="0.3" className="animate-glow-pulse" />
            </g>
          ))}
          
          {/* Camera */}
          <circle cx="200" cy="160" r="6" fill="var(--color-electric)" opacity="0.8" />
          <circle cx="200" cy="160" r="3" fill="var(--color-background)" />
          
          {/* Landing gear */}
          <line x1="175" y1="165" x2="170" y2="185" stroke="var(--color-steel)" strokeWidth="2" />
          <line x1="225" y1="165" x2="230" y2="185" stroke="var(--color-steel)" strokeWidth="2" />
          <line x1="160" y1="185" x2="240" y2="185" stroke="var(--color-steel)" strokeWidth="1.5" opacity="0.5" />
          
          <defs>
            <linearGradient id="bodyGrad" x1="140" y1="130" x2="260" y2="170">
              <stop offset="0%" stopColor="var(--color-steel)" stopOpacity="0.8" />
              <stop offset="50%" stopColor="var(--color-electric)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--color-steel)" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="bodyTopGrad" x1="150" y1="130" x2="250" y2="160">
              <stop offset="0%" stopColor="var(--color-steel-light)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="var(--color-electric)" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Data points floating around */}
      <div className="absolute top-8 right-12 text-xs text-electric/60 font-mono animate-fade-in" style={{ animationDelay: "1s" }}>
        <div>ALT: 3,200m</div>
        <div className="text-electric/40">SPD: 180 km/h</div>
      </div>
      <div className="absolute bottom-12 left-8 text-xs text-electric/60 font-mono animate-fade-in" style={{ animationDelay: "1.5s" }}>
        <div>STRUCT: NOMINAL</div>
        <div className="text-electric/40">AL-7075-T6</div>
      </div>
    </div>
  );
}
