import { useState } from "react";

interface Props {
  videoUrl: string;
  posterImage: string;
  children: React.ReactNode;
}

export default function VideoHero({ videoUrl, posterImage, children }: Props) {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Poster fallback */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${videoLoaded ? "opacity-0" : "opacity-100"}`}>
        <img src={posterImage} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
      </div>

      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        onCanPlay={() => setVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? "opacity-100" : "opacity-0"}`}
        poster={posterImage}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />

      {children}
    </section>
  );
}
