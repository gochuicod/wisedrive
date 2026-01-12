'use client';

import OurBrands from '@/components/b2cSections/brands/OurBrands';
import Highlights from '@/components/b2cSections/highlights/Highlights';
import Hero from '@/components/b2cSections/hero/Hero';
import FAQSection from '@/components/b2cSections/faq/FAQSection';
import Reviews from '@/components/b2cSections/reviews/Reviews';
import Advantage from '@/components/b2cSections/advantage/Advantage';
import Steps from '@/components/b2cSections/steps/Steps';
import HighlightPill from '@/components/b2cSections/highlightpill/HighlightPill';
import Inspection from '@/components/b2cSections/inspection/Inspection';
import EnterpriseSolutions from '@/components/b2cSections/enterprise_solutions/EnterpriseSolutions';
import WhyChooseUs from '@/components/b2cSections/why_choose_us/WhyChooseUs';
import CTA from '@/components/CTA';
import { useHomeCTAs } from '@/hooks/useHomeCTAs';
import { FixedPopUp } from '@/components/FixedPopUp';
import { Parallax } from '@/components/Parallax';

export default function B2CHomepage() {
  const ctas = useHomeCTAs();

  return (
    <div className="min-h-screen overflow-hidden">
        <Hero />
      <Parallax speed={0.03}>
        <OurBrands />
      </Parallax>
      <Parallax speed={0.04}>
        <Advantage />
      </Parallax>
      <Parallax speed={0.02}>
        <Highlights />
      </Parallax>
      <CTA {...ctas.confidence} />
      <Parallax speed={0.05}>
        <WhyChooseUs />
      </Parallax>
      <Parallax speed={0.03}>
        <EnterpriseSolutions />
      </Parallax>
      <Parallax speed={0.04}>
        <HighlightPill />
      </Parallax>
      <Parallax speed={0.03}>
        <Inspection />
      </Parallax>
        <Steps />
      <CTA {...ctas.consultation} />
      <Parallax speed={0.02}>
        <FAQSection />
      </Parallax>
      <Parallax speed={0.04}>
        <Reviews />
      </Parallax>
      <CTA {...ctas.secure} />
      <FixedPopUp />
    </div>
  );
}
