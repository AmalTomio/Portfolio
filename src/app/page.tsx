import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Experience />
      <Contact />
    </div>
  );
}