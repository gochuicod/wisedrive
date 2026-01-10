import TechStack from "@/components/b2bSections/techstack/TechStack";
import Contact from "@/components/b2bSections/contact/Contact";
import Hero from "@/components/b2bSections/hero/Hero";

export default function EnterpriseSolutions() {
  return (
    <div className="min-h-screen">
        <Hero />
        <TechStack />
        <Contact />
    </div>
  );
}
