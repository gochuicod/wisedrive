import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { AppButton } from '@/components/AppButton';
import { ArrowRight, Calendar } from 'lucide-react';

export default function Hero() {
  const t = useTranslations('B2BHero');

  return (
    <div
      className={cn(
        'relative',
        'bg-primary-100',
        'lg:min-h-[848px] md:min-h-[584px] min-h-[600px]',
        'm-tight',
        'lg:rounded-5xl md:rounded-[24px] rounded-[16px]',
        'overflow-hidden',
      )}
    >
      <div
        className={cn(
          'absolute inset-0 w-full h-full',
          "bg-[url('/b2b_hero/b2b-hero.webp')]",
          'bg-bottom',
          'bg-no-repeat',
          'lg:bg-[length:100%_auto] md:bg-[length:100%_80%] bg-[length:180%_auto]',
          '[mask-image:linear-gradient(to_top,black_40%,transparent)]',
        )}
      />
      <div
        className={cn(
          'relative z-10',
          'text-header',
          'font-body',
          'lg:pt-[88px] md:pt-[72px] pt-[40px]',
          '3xl:px-[304px] lg:px-12 px-4',
          'flex flex-col',
          'justify-between items-center',
          'lg:min-h-[848px] md:min-h-[584px] min-h-[600px]',
        )}
      >
        {/* Top Part */}
        <div
          className={cn(
            'flex',
            'lg:flex-row flex-col',
            'justify-between items-end',
            'w-full',
          )}
        >
          {/* Text on left */}
          <div
            className={cn(
              'flex flex-col',
              'items-start',
              'lg:w-[821px] md:w-auto',
              'gap-4',
            )}
          >
            <h1
              className={cn(
                'text-h1',
                'uppercase',
                'font-heading',
                'font-semibold',
                'lg:text-start text-center',
                'md:w-full w-[50%] md:mx-0 mx-auto',
              )}
            >
              {t('heading')}
            </h1>
            <p
              className={cn(
                'font-body lg:text-base text-body-sm',
                'lg:text-start text-center',
              )}
            >
              {t('description')}
            </p>
          </div>
          {/* Buttons on right */}
          <div
            className={cn(
              'flex lg:flex-col md:flex-row flex-col',
              'lg:justify-end justify-center',
              'lg:w-[288px] md:w-full w-[75%]',
              'gap-4',
              'lg:mt-0 mt-4',
              'md:mx-0 mx-auto',
            )}
          >
            <AppButton
              variant="default"
              size="lg"
              leftIcon={<Calendar className="size-6" />}
              className="capitalize"
            >
              {t('partner_with_button')}
            </AppButton>
            <AppButton
              variant="tertiary"
              size="lg"
              className="capitalize"
              rightIcon={<ArrowRight className="size-6" />}
            >
              {t('view_enterprise_solution_button')}
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  );
}
