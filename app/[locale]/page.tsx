import OurBrands from '@/components/sections/homepage/OurBrands';
import Highlights from '@/components/sections/highlights/Highlights';
import CTA1 from '@/components/sections/cta1/CTA1';
import CTA2 from '@/components/sections/cta2/CTA2';
import Hero from '@/components/sections/Hero';
import FAQSection from '@/components/sections/faq/FAQSection';
import Reviews from '@/components/sections/reviews/Reviews';
import Advantage from '@/components/sections/advantage/Advantage';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <OurBrands />
      <Advantage />
      <Highlights />
      <CTA1 />
      <FAQSection />
      <Reviews />
      <CTA2 />
    </div>
  );
}
