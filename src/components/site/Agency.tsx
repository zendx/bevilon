const stats = [
  { k: "120+", v: "Systems Deployed" },
  { k: "99.99%", v: "Uptime Average" },
  { k: "14", v: "Countries Served" },
  { k: "2024", v: "Operating Since" },
];

export function Agency() {
  return (
    <section id="agency" className="py-24 md:py-32 px-6 md:px-8 border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <h2 className="text-sm text-brand-blue uppercase tracking-[0.3em] font-bold mb-6">The Agency</h2>
          <p className="text-3xl md:text-5xl font-display font-medium tracking-tight leading-tight text-balance">
            A studio of engineers, designers and researchers operating at the boundary between <span className="text-brand-red">software</span> and <span className="text-brand-blue">systems</span>.
          </p>
        </div>
        <div className="lg:col-span-5 grid grid-cols-2 gap-px bg-white/10 border border-white/10 self-start">
          {stats.map((s) => (
            <div key={s.v} className="bg-brand-black p-8">
              <div className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-2">{s.k}</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
