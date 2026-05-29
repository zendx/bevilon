import logo from "@/assets/bevilon-logo.png";

export function Footer() {
  const marqueeWords = ["Strategy", "Creative", "Technology", "Web Development"];
  return (
    <footer id="contact" className="bg-brand-ink text-white pt-24 md:pt-32 pb-8 border-t border-border overflow-hidden">
      <div className="border-y border-white/10 py-6 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 2 }).map((_, dup) => (
            <div key={dup} className="flex shrink-0">
              {marqueeWords.map((w, i) => (
                <span key={`${dup}-${i}`} className="font-display text-5xl md:text-7xl uppercase px-8 tracking-tighter">
                  <span className={i % 2 ? "text-[oklch(0.72_0.13_248)]" : "text-white/25"}>{w}</span>
                  <span className="text-brand-pink px-4">/</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 md:px-8 pt-16 md:pt-24">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20 md:mb-32">
          <div className="flex-1">
            <h2 className="text-7xl sm:text-8xl md:text-[14vw] font-display font-bold leading-[0.85] tracking-tighter">
              LET'S<span className="text-[oklch(0.72_0.13_248)]">BUILD</span>
            </h2>
          </div>
          <div className="flex flex-col gap-10 shrink-0">
            <div>
              <p className="text-brand-pink font-bold uppercase tracking-widest text-xs mb-3">Start a project</p>
              <a href="mailto:hello@bevilon.com" className="text-2xl hover:text-[oklch(0.72_0.13_248)] transition-colors">
                hello@bevilon.com
              </a>
            </div>
            <div>
              <p className="text-[oklch(0.72_0.13_248)] font-bold uppercase tracking-widest text-xs mb-3">Studio</p>
              <p className="text-sm text-white/60 leading-relaxed">
                Remote-first<br />
                Working worldwide
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {["Twitter / X", "LinkedIn", "GitHub", "Instagram"].map((s) => (
            <a key={s} href="#" className="p-6 md:p-8 bg-brand-ink flex justify-between items-center hover:bg-white/5 transition-colors group">
              <span className="text-xs text-white/60 uppercase tracking-widest">{s}</span>
              <span className="text-xs text-white/40 group-hover:text-brand-pink group-hover:translate-x-1 transition-all">↗</span>
            </a>
          ))}
        </div>

        <div className="mt-20 md:mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <img src={logo} alt="Bevilon" className="h-7 w-auto brightness-0 invert" />
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-white/40">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
          <div className="text-[10px] uppercase tracking-widest text-white/40">© {new Date().getFullYear()} Bevilon</div>
        </div>
      </div>
    </footer>
  );
}
