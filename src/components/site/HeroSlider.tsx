import { useEffect, useState } from "react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

type Slide = {
  tag: string;
  sector: string;
  title: React.ReactNode;
  body: string;
  image: string;
};

const slides: Slide[] = [
  {
    tag: "Case Study 01",
    sector: "Fintech Infrastructure",
    title: (<>NEURAL<br /><span className="text-brand-blue">LEDGER</span></>),
    body: "Architecting high-frequency trading systems for the next generation of decentralized finance protocols. Redefining latency boundaries.",
    image: hero1,
  },
  {
    tag: "Case Study 02",
    sector: "Aerospace Systems",
    title: (<>ORBITAL<br /><span className="text-brand-red">FRAMEWORK</span></>),
    body: "Mission-critical control surfaces and telemetry pipelines deployed across a constellation of low-earth observation satellites.",
    image: hero2,
  },
  {
    tag: "Case Study 03",
    sector: "Industrial Robotics",
    title: (<>KINETIC<br /><span className="text-brand-blue">PROTOCOL</span></>),
    body: "Firmware-to-cloud integration suite powering autonomous fleets across precision manufacturing floors at sub-millisecond cadence.",
    image: hero3,
  },
];

export function HeroSlider() {
  const [i, setI] = useState(0);
  const n = slides.length;

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % n), 6000);
    return () => clearInterval(t);
  }, [n]);

  const next = () => setI((p) => (p + 1) % n);
  const prev = () => setI((p) => (p - 1 + n) % n);
  const s = slides[i];

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background slides */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: idx === i ? 1 : 0 }}
          aria-hidden={idx !== i}
        >
          <img
            src={slide.image}
            alt=""
            className={`w-full h-full object-cover ${idx === i ? "animate-ken-burns" : ""}`}
            key={`${idx}-${i === idx}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-brand-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black/60 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-8 flex flex-col justify-end pb-28 md:pb-32 h-full">
        <div key={i} className="animate-hero-in">
          <div className="flex items-center gap-4 mb-6 flex-wrap">
            <span className="px-3 py-1 border border-brand-red text-brand-red text-[10px] font-bold uppercase tracking-widest">
              {s.tag}
            </span>
            <div className="h-px w-16 md:w-24 bg-white/20" />
            <span className="text-white/60 text-xs font-medium uppercase tracking-widest">
              {s.sector}
            </span>
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-9xl font-display font-bold leading-[0.9] tracking-tighter mb-8">
            {s.title}
          </h1>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-end">
            <p className="max-w-md text-white/60 text-base md:text-lg leading-relaxed">
              {s.body}
            </p>
            <div className="flex gap-2 md:pb-2">
              <button
                onClick={prev}
                aria-label="Previous slide"
                className="size-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-black transition-all cursor-pointer"
              >
                ←
              </button>
              <button
                onClick={next}
                aria-label="Next slide"
                className="size-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-black transition-all cursor-pointer"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="absolute right-6 md:right-8 bottom-32 hidden sm:flex flex-col gap-4 items-center z-10">
        <span className="text-[10px] text-white/40 font-mono tracking-widest">
          {String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
        </span>
        <div className="w-px h-32 bg-white/10 relative overflow-hidden">
          <div
            key={i}
            className="absolute top-0 left-0 w-full bg-brand-red origin-top"
            style={{
              height: "100%",
              animation: "slide-progress 6s linear forwards",
            }}
          />
        </div>
      </div>
    </section>
  );
}
