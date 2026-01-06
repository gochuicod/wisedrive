import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { AppButton } from '@/components/AppButton';
import { ArrowRight, Calendar } from 'lucide-react';
import Counter from '@/components/Counter';

export default function Hero() {
  const t = useTranslations('B2CHero');

  return (
    <div
      className={cn(
        'relative',
        'bg-black',
        'xl:min-h-[848px] md:min-h-[584px] min-h-[600px]',
        'm-tight',
        'lg:rounded-5xl md:rounded-[24px] rounded-[16px]',
        'overflow-hidden',
      )}
    >
      <div
        className={cn(
          'absolute inset-0 w-full h-full',
          "bg-[url('/b2cHero/b2c_hero_bg_image.webp')]",
          'bg-bottom',
          'bg-no-repeat',
          'xl:bg-[length:100%_auto] md:bg-[length:100%_65%] bg-[length:180%_auto]',
          '[mask-image:linear-gradient(to_top,black_40%,transparent)]',
        )}
      />
      <div
        className={cn(
          'relative z-10',
          'text-white',
          'font-body',
          'xl:pt-[88px] md:pt-[72px] pt-[40px]',
          '3xl:px-[304px] xl:px-12 px-4',
          'flex flex-col',
          'justify-between items-center',
          'xl:min-h-[848px] md:min-h-[584px] min-h-[600px]',
        )}
      >
        {/* Top Part */}
        <div
          className={cn(
            'flex',
            'xl:flex-row flex-col',
            'justify-between items-end',
            'w-full',
          )}
        >
          {/* Text on left */}
          <div
            className={cn(
              'flex flex-col',
              'items-start',
              'xl:w-[821px] md:w-auto',
              'gap-4',
            )}
          >
            <h1
              className={cn(
                'text-h1',
                'uppercase',
                'font-heading',
                'font-semibold',
                'xl:text-start text-center',
                'md:w-full w-[50%] md:mx-0 mx-auto',
              )}
            >
              {t('heading')}
            </h1>
            <p
              className={cn(
                'font-body lg:text-base text-body-sm',
                'xl:text-start text-center',
              )}
            >
              {t('description')}
            </p>
          </div>
          {/* Buttons on right */}
          <div
            className={cn(
              'flex xl:flex-col md:flex-row flex-col',
              'xl:justify-end justify-center',
              'xl:w-[288px] md:w-full w-[75%]',
              'gap-4',
              'xl:mt-0 mt-4',
              'md:mx-0 mx-auto',
            )}
          >
            <AppButton
              variant="default"
              size="sm"
              leftIcon={<Calendar className="size-6" />}
              className="capitalize"
            >
              {t('book_your_inspection_button')}
            </AppButton>
            <AppButton
              variant="glass"
              size="sm"
              className="capitalize"
              rightIcon={<ArrowRight className="size-6" />}
            >
              {t('how_it_works_button')}
            </AppButton>
          </div>
        </div>
        {/* Bottom Part */}
        <div
          className={cn(
            'flex lg:flex-row flex-col justify-center items-center w-full mb-3 rounded-2xl px-6 py-4',
            'shadow-[0px_1px_24px_-1px_rgba(0,0,0,0.01)]',
            'backdrop-blur-[5px]',
            'relative overflow-hidden',
            'md:gap-4 gap-px',
          )}
          style={{
            background: 'rgba(255, 255, 255, 0.01)',
            border: '1px solid rgba(255,255,255,0.03)',
          }}
        >
          {/* glossy highlight overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-white/5 to-white/0 pointer-events-none rounded-2xl" />

          <span className="font-body font-bold lg:text-md text-body-sm">
            {t('counter_text_1')}
          </span>
          <Counter currency="RM" amount={664002} />
          <span className="font-body font-bold lg:text-md text-body-sm">
            {t('counter_text_2')}
          </span>
        </div>
      </div>
    </div>
  );
}
