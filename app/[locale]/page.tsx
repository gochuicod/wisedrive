import OurBrands from '@/components/sections/homepage/OurBrands';
import Highlights from '@/components/sections/highlights/Highlights';
import CTA1 from '@/components/sections/cta1/CTA1';
import CTA2 from '@/components/sections/cta2/CTA2';
import Hero from '@/components/sections/Hero';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <OurBrands />
      <Highlights />
      <CTA1 />
      <CTA2 />

    </div>
  );
}
