'use client';

import React from 'react';
import Image from 'next/image';
import { IconBox } from '@/components/IconBox';
import { useTranslations } from 'next-intl';

const HIGHLIGHT_ITEMS = [
  { id: 1, key: 'highlight_1', iconSrc: '/icons/iconBox/data.webp' },
  { id: 2, key: 'highlight_2', iconSrc: '/icons/iconBox/clock.webp' },
  { id: 3, key: 'highlight_3', iconSrc: '/icons/iconBox/report.webp' },
  { id: 4, key: 'highlight_4', iconSrc: '/icons/iconBox/audit.webp' },
  { id: 5, key: 'highlight_5', iconSrc: '/icons/iconBox/fraud.webp' },
  { id: 6, key: 'highlight_6', iconSrc: '/icons/iconBox/data.webp' },
];

export const Highlights: React.FC = () => {
  const t = useTranslations('Highlights');

  return (
    <section
      className="flex flex-col items-center w-full px-tight lg:mx-auto"
      id="features"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10 w-full md:w-fit lg:w-fit justify-items-center">
        {HIGHLIGHT_ITEMS.map((item) => {
          const title = t(`${item.key}.title`);
          const description = t(`${item.key}.description`);

          return (
            <IconBox
              key={item.id}
              title={title}
              description={description}
              icon={
                <Image
                  src={item.iconSrc}
                  alt={title}
                  width={84}
                  height={79}
                  style={{ objectFit: 'contain' }}
                />
              }
            />
          );
        })}
      </div>
    </section>
  );
};

export default Highlights;