import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const items = [
  {
    num: "01/",
    color: "text-brand-blue",
    title: "Cloud OS Design",
    body: "Custom operating environments for distributed server clusters, optimized for zero-trust architectures.",
    image: project1,
  },
  {
    num: "02/",
    color: "text-brand-red",
    title: "Kinetic Hardware",
    body: "Integrating custom firmware with mechanical precision for robotics and autonomous transit systems.",
    image: project2,
  },
  {
    num: "03/",
    color: "text-white",
    title: "Quantum Cryptography",
    body: "Developing the next generation of security protocols resistant to post-quantum computing threats.",
    image: project3,
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="py-24 md:py-32 px-6 md:px-8 border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
        <div>
          <h2 className="text-sm text-brand-red uppercase tracking-[0.3em] font-bold mb-4">Capabilities</h2>
          <p className="text-4xl md:text-6xl font-display font-medium tracking-tight">
            Integrated <span className="text-white/40">Intelligence.</span>
          </p>
        </div>
        <div className="md:text-right">
          <p className="text-white/40 text-sm max-w-xs md:ml-auto">
            We merge deep software engineering with precision industrial design to build products that shouldn't exist yet.
          </p>
        </div>
      </div>

      <div id="projects" className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
        {items.map((it) => (
          <div key={it.title} className="bg-brand-black p-10 md:p-12 hover:bg-white/5 transition-colors group">
            <div className={`${it.color} mb-8 font-display text-2xl`}>{it.num}</div>
            <h3 className="text-2xl font-bold mb-4">{it.title}</h3>
            <p className="text-white/50 text-sm mb-12 leading-relaxed">{it.body}</p>
            <div className="w-full aspect-square overflow-hidden outline outline-1 -outline-offset-1 outline-white/5">
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
