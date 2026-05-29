export function Footer() {
  const marqueeWords = ["Integrated Design", "Software Engineering", "Systems Architecture", "Industrial Precision"];
  return (
    <footer id="contact" className="bg-brand-black pt-24 md:pt-32 pb-8 border-t border-white/10 overflow-hidden">
      {/* Marquee */}
      <div className="border-y border-white/10 py-6 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 2 }).map((_, dup) => (
            <div key={dup} className="flex shrink-0">
              {marqueeWords.map((w, i) => (
                <span key={`${dup}-${i}`} className="font-display text-5xl md:text-7xl uppercase px-8 tracking-tighter">
                  <span className={i % 2 ? "text-brand-blue" : "text-white/20"}>{w}</span>
                  <span className="text-brand-red px-4">/</span>
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
              WORK<span className="text-brand-blue">WITH</span>US
            </h2>
          </div>
          <div className="flex flex-col gap-10 shrink-0">
            <div>
              <p className="text-brand-red font-bold uppercase tracking-widest text-xs mb-3">Direct Contact</p>
              <a href="mailto:hello@axon.studio" className="text-2xl hover:text-brand-blue transition-colors">
                hello@axon.studio
              </a>
            </div>
            <div>
              <p className="text-brand-blue font-bold uppercase tracking-widest text-xs mb-3">Offices</p>
              <p className="text-sm text-white/60 leading-relaxed">
                Technopark II, Berlin<br />
                Silicon Docks, Dublin
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {["Twitter / X", "LinkedIn", "GitHub", "Instagram"].map((s) => (
            <a key={s} href="#" className="p-6 md:p-8 bg-brand-black flex justify-between items-center hover:bg-white/5 transition-colors group">
              <span className="text-xs text-white/60 uppercase tracking-widest">{s}</span>
              <span className="text-xs text-white/40 group-hover:text-brand-red group-hover:translate-x-1 transition-all">↗</span>
            </a>
          ))}
        </div>

        <div className="mt-20 md:mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-white/30">
          <div>© {new Date().getFullYear()} AXON Integrated Design. All Rights Reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white/60">Privacy Architecture</a>
            <a href="#" className="hover:text-white/60">Terms of Operation</a>
          </div>
          <div className="text-brand-red">40.7128° N, 74.0060° W</div>
        </div>
      </div>
    </footer>
  );
}
