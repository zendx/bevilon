import logo from "@/assets/bevilon-logo.png";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-8 h-20 border-b border-border backdrop-blur-xl bg-background/70">
      <a href="#top" className="flex items-center gap-3">
        <img src={logo} alt="Bevilon" className="h-8 md:h-9 w-auto dark:brightness-0 dark:invert" />
      </a>
      <div className="hidden md:flex gap-10 text-sm font-medium tracking-wide">
        <a href="#capabilities" className="hover:text-brand-blue transition-colors">Services</a>
        <a href="#projects" className="hover:text-brand-blue transition-colors">Work</a>
        <a href="#agency" className="hover:text-brand-blue transition-colors">Studio</a>
        <a href="#contact" className="text-brand-pink">Start a project</a>
      </div>
      <div className="flex items-center gap-3">
        <ThemeToggle />
      </div>
    </nav>
  );
}
