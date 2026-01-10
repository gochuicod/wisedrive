import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { OUR_BRANDS_CARS } from '@/constants';
import Image from 'next/image';

import { Badge } from '@/components/Badge';
import { HighlightedHeading } from '@/components/HighlightedHeading';

export default function OurBrands() {
  const t = useTranslations('OurBrands');

  return (
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
    >
      <Badge size="md" className={cn('font-heading')}>
        {t('badge_text')}
      </Badge>
      <HighlightedHeading
        text={t("heading")}
        highlight={t("heading_highlighted_word")}
        className="md:text-h4 font-heading font-bold text-center"
      />
      <p
        className={cn('text-nav', 'font-body-md', 'font-normal', 'text-center')}
      >
        {t('description')}
      </p>
      <div className="flex lg:flex-row flex-wrap justify-center items-center md:gap-4 gap-2 mt-8">
        {OUR_BRANDS_CARS.map((car) => {
          return (
            <div key={car.key} className="flex flex-col items-center">
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
      </div>
    </div>
  );
}
