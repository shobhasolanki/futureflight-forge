import { useEffect, useRef, useState } from "react";

interface Props {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageReveal({ src, alt, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`relative overflow-hidden rounded-sm ${className}`}>
      <div
        className="absolute inset-0 bg-electric z-10 origin-left"
        style={{
          transform: visible ? "scaleX(0)" : "scaleX(1)",
          transformOrigin: visible ? "right" : "left",
          transition: "transform 0.8s cubic-bezier(0.77, 0, 0.175, 1) 0.2s",
        }}
      />
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
        width={1920}
        height={1080}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(1.1)",
          transition: "opacity 0.5s ease 0.6s, transform 1.2s ease 0.4s",
        }}
      />
      <div className="absolute inset-0 border border-electric/20 rounded-sm" />
    </div>
  );
}
