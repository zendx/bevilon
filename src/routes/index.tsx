import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { HeroSlider } from "@/components/site/HeroSlider";
import { Capabilities } from "@/components/site/Capabilities";
import { Agency } from "@/components/site/Agency";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bevilon — Strategy. Creative. Technology." },
      { name: "description", content: "Bevilon is a web development studio building high-performance websites, web apps, and e-commerce platforms. Strategy, design and engineering under one roof." },
      { property: "og:title", content: "Bevilon — Strategy. Creative. Technology." },
      { property: "og:description", content: "Web development studio building high-performance websites, web apps, and e-commerce." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main id="top" className="bg-background text-foreground font-sans min-h-screen">
      <Nav />
      <HeroSlider />
      <Capabilities />
      <Agency />
      <Footer />
    </main>
  );
}
