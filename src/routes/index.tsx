import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { HeroSlider } from "@/components/site/HeroSlider";
import { Capabilities } from "@/components/site/Capabilities";
import { Agency } from "@/components/site/Agency";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AXON.STUDIO — Integrated Design & Technology" },
      { name: "description", content: "An integrated design and software engineering firm building precision systems for fintech, aerospace, and industrial robotics." },
      { property: "og:title", content: "AXON.STUDIO — Integrated Design & Technology" },
      { property: "og:description", content: "Precision systems at the boundary of software and design." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main id="top" className="bg-brand-black text-brand-white font-sans min-h-screen">
      <Nav />
      <HeroSlider />
      <Capabilities />
      <Agency />
      <Footer />
    </main>
  );
}
