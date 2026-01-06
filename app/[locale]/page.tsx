import { useTranslations } from 'next-intl';
import OurBrands from '@/components/sections/homepage/OurBrands';
import Highlights from '@/components/sections/highlights/Highlights';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div className="min-h-screen">
      <OurBrands />
      <Highlights />
    </div>
  );
}
