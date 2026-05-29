export function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-8 h-20 border-b border-white/10 backdrop-blur-md bg-brand-black/40">
      <a href="#top" className="text-xl font-display font-bold tracking-tighter">
        AXON<span className="text-brand-red">.</span>STUDIO
      </a>
      <div className="hidden md:flex gap-10 text-sm font-medium tracking-widest uppercase">
        <a href="#projects" className="hover:text-brand-blue transition-colors">Projects</a>
        <a href="#capabilities" className="hover:text-brand-blue transition-colors">Intelligence</a>
        <a href="#agency" className="hover:text-brand-blue transition-colors">Agency</a>
        <a href="#contact" className="text-brand-red">Inquire</a>
      </div>
      <div className="flex items-center gap-3">
        <div className="size-2 bg-brand-red rounded-full animate-pulse" />
        <span className="hidden sm:inline text-[10px] uppercase tracking-widest text-white/50">System Active</span>
      </div>
    </nav>
  );
}
