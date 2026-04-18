import { Hero } from "@/components/Hero";
import { TechTicker } from "@/components/TechTicker";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Automations } from "@/components/Automations";
import { Experience } from "@/components/Experience";
import { Publications } from "@/components/Publications";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TechTicker />
      <About />
      <Projects />
      <Automations />
      <Experience />
      <Publications />
      <Education />
      <Contact />
    </>
  );
}
