const stats = [
  { k: "80+", v: "Sites Shipped" },
  { k: "98", v: "Avg. Lighthouse" },
  { k: "12", v: "Industries Served" },
  { k: "2019", v: "Building Since" },
];

export function Agency() {
  return (
    <section id="agency" className="py-24 md:py-32 px-6 md:px-8 border-t border-border bg-surface-2">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <h2 className="text-sm text-brand-blue dark:text-[oklch(0.72_0.13_248)] uppercase tracking-[0.3em] font-bold mb-6">The Studio</h2>
          <p className="text-3xl md:text-5xl font-display font-medium tracking-tight leading-tight text-balance text-foreground">
            Bevilon is a team of strategists, designers and engineers building <span className="text-brand-pink">web products</span> that move <span className="text-brand-blue dark:text-[oklch(0.72_0.13_248)]">business</span> forward.
          </p>
        </div>
        <div className="lg:col-span-5 grid grid-cols-2 gap-px bg-border border border-border self-start">
          {stats.map((s) => (
            <div key={s.v} className="bg-surface p-8">
              <div className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-2 text-foreground">{s.k}</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
