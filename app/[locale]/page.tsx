import OurBrands from '@/components/sections/homepage/OurBrands';
import Highlights from '@/components/sections/highlights/Highlights';
import Hero from '@/components/sections/Hero';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <OurBrands />
      <Highlights />
    </div>
  );
}
