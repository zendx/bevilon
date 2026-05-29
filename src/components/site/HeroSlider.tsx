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
    sector: "SaaS Platform",
    title: (<>BUILT FOR<br /><span className="text-[oklch(0.72_0.13_248)]">SCALE</span></>),
    body: "A multi-tenant SaaS rebuilt on Next.js and edge infrastructure — shipping features 4× faster and serving customers in 22 countries.",
    image: hero1,
  },
  {
    tag: "Case Study 02",
    sector: "E-Commerce",
    title: (<>COMMERCE,<br /><span className="text-brand-pink">REIMAGINED</span></>),
    body: "Headless storefronts engineered for conversion. Sub-second page loads, frictionless checkout, and a CMS your team actually enjoys.",
    image: hero2,
  },
  {
    tag: "Case Study 03",
    sector: "Brand Experience",
    title: (<>WEBSITES THAT<br /><span className="text-[oklch(0.72_0.13_248)]">PERFORM</span></>),
    body: "Strategy, design, and engineering under one roof. Award-winning brand sites built to rank, convert, and last.",
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
    <section className="relative h-screen w-full overflow-hidden flex items-center bg-brand-ink text-white">
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
          <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/60 to-brand-ink/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/70 to-transparent" />
        </div>
      ))}

      <div className="relative z-10 container mx-auto px-6 md:px-8 flex flex-col justify-end pb-28 md:pb-32 h-full">
        <div key={i} className="animate-hero-in">
          <div className="flex items-center gap-4 mb-6 flex-wrap">
            <span className="px-3 py-1 border border-brand-pink text-brand-pink text-[10px] font-bold uppercase tracking-widest">
              {s.tag}
            </span>
            <div className="h-px w-16 md:w-24 bg-white/20" />
            <span className="text-white/70 text-xs font-medium uppercase tracking-widest">
              {s.sector}
            </span>
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-9xl font-display font-bold leading-[0.9] tracking-tighter mb-8">
            {s.title}
          </h1>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-end">
            <p className="max-w-md text-white/70 text-base md:text-lg leading-relaxed">
              {s.body}
            </p>
            <div className="flex gap-2 md:pb-2">
              <button
                onClick={prev}
                aria-label="Previous slide"
                className="size-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-brand-ink transition-all cursor-pointer"
              >
                ←
              </button>
              <button
                onClick={next}
                aria-label="Next slide"
                className="size-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-brand-ink transition-all cursor-pointer"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-6 md:right-8 bottom-32 hidden sm:flex flex-col gap-4 items-center z-10">
        <span className="text-[10px] text-white/50 font-mono tracking-widest">
          {String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
        </span>
        <div className="w-px h-32 bg-white/15 relative overflow-hidden">
          <div
            key={i}
            className="absolute top-0 left-0 w-full bg-brand-pink origin-top"
            style={{ height: "100%", animation: "slide-progress 6s linear forwards" }}
          />
        </div>
      </div>
    </section>
  );
}
