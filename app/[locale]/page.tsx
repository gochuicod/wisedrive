import { useTranslations } from 'next-intl';
import OurBrands from '@/components/sections/homepage/OurBrands';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div className="min-h-screen">
      <OurBrands />
    </div>
  );
}
