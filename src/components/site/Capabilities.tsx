import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const items = [
  {
    num: "01/",
    color: "text-brand-blue dark:text-[oklch(0.72_0.13_248)]",
    title: "Web Applications",
    body: "Production-grade web apps built on React, Next.js, and TypeScript. From MVPs to enterprise platforms — engineered to scale.",
    image: project1,
  },
  {
    num: "02/",
    color: "text-brand-pink",
    title: "E-Commerce & Headless",
    body: "Shopify Hydrogen, Medusa, and custom storefronts wired for speed and conversion. Checkout that actually closes.",
    image: project2,
  },
  {
    num: "03/",
    color: "text-foreground",
    title: "Brand & Marketing Sites",
    body: "Strategy, design, and motion-led builds that turn brand sites into your strongest sales channel.",
    image: project3,
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="py-24 md:py-32 px-6 md:px-8 border-t border-border bg-background">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
        <div>
          <h2 className="text-sm text-brand-pink uppercase tracking-[0.3em] font-bold mb-4">Services</h2>
          <p className="text-4xl md:text-6xl font-display font-medium tracking-tight text-foreground">
            Strategy. Creative. <span className="text-muted-foreground">Technology.</span>
          </p>
        </div>
        <div className="md:text-right">
          <p className="text-muted-foreground text-sm max-w-xs md:ml-auto">
            We are a full-stack web development studio. We design the brand, build the product, and ship the code.
          </p>
        </div>
      </div>

      <div id="projects" className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
        {items.map((it) => (
          <div key={it.title} className="bg-surface p-10 md:p-12 hover:bg-surface-2 transition-colors group">
            <div className={`${it.color} mb-8 font-display text-2xl`}>{it.num}</div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">{it.title}</h3>
            <p className="text-muted-foreground text-sm mb-12 leading-relaxed">{it.body}</p>
            <div className="w-full aspect-square overflow-hidden outline outline-1 -outline-offset-1 outline-border">
              <img
                src={it.image}
                alt={it.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
