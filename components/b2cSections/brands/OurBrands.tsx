import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { OUR_BRANDS_CARS } from '@/constants';
import Image from 'next/image';
import { Parallax } from '@/components/Parallax';

import { Badge } from '@/components/Badge';
import { HighlightedHeading } from '@/components/HighlightedHeading';
import { Marquee } from '@/components/ui/marquee';

export default function OurBrands() {
  const t = useTranslations('OurBrands');

  return (
    <Parallax speed={0.03}>
      <div
      className={cn(
        'px-relaxed',
        'py-relaxed',
        'flex',
        'flex-col',
        'justify-center',
        'items-center',
        'gap-px',
      )}
      id="our-brands"
    >
      <Badge>{t('badge_text')}</Badge>
      <HighlightedHeading
        text={t('heading')}
        highlight={t('heading_highlighted_word')}
        className="md:text-h4 font-heading font-bold text-center"
      />
      <p className={cn('text-body', 'text-center')}>{t('description')}</p>
      <Marquee pauseOnHover className="w-full mt-8 max-w-[1248px]">
        {OUR_BRANDS_CARS.map((car) => {
          return (
            <div key={car.key} className="flex flex-col items-center px-4">
              <Image
                src={car.image}
                alt={car.key}
                width={140}
                height={80}
                className="md:w-[140px] md:h-[80px] w-24 h-14"
              />
            </div>
          );
        })}
      </Marquee>
    </div>
    </Parallax>
  );
}
