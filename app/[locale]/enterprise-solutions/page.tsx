
import TechStack from "@/components/b2bSections/techstack/TechStack";
import Contact from "@/components/b2bSections/contact/Contact";
import Hero from "@/components/b2bSections/hero/Hero";
import Infrastructure from "@/components/b2bSections/infrastructure/Infrastructure";
import Models from "@/components/b2bSections/models/Models";
import { Parallax } from "@/components/Parallax";

export default function EnterpriseSolutions() {
  return (
    <div className="min-h-screen overflow-hidden">
        <Hero />
      <Parallax speed={0.03}>
        <TechStack />
      </Parallax>
      <Parallax speed={0.04}>
        <Infrastructure />
      </Parallax>
      <Parallax speed={0.02}>
        <Models />
      </Parallax>
      <Parallax speed={0.03}>
        <Contact />
      </Parallax>
    </div>
  );
}
