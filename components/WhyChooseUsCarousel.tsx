// @/components/WhyChooseUsCarousel.tsx
'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Badge } from './Badge';
import { AppButton } from './AppButton';
import { HighlightedHeading } from './HighlightedHeading';
import { ArrowRight } from 'lucide-react';

// Swiper Imports
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

// 1. Helper component to access Swiper context for the button
const NextSlideButton = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const swiper = useSwiper();
  return (
    <AppButton
      variant="tertiary"
      size="sm"
      onClick={() => swiper.slideNext()}
      rightIcon={<ArrowRight className="size-4" />}
      className={className}
    >
      {text}
    </AppButton>
  );
};

// 2. Props Interface
interface SlideData {
  id: string;
  imgSrc: string;
  imgAlt: string;
  panelHeading: string;
  panelText: string;
  buttonText: string;
}

interface WhyChooseUsCarouselProps {
  badgeText?: string;
  headingText?: string;
  headingTextHighlight?: string;
  slides: SlideData[];
}

export default function WhyChooseUsCarousel({
  badgeText = 'Why Choose Us',
  headingText = 'What our ai does for you',
  headingTextHighlight = 'ai',
  slides,
}: WhyChooseUsCarouselProps) {
  return (
    <div
      className={cn(
        'max-w-[1034px] mx-auto lg:my-relaxed my-[144px]',
        'flex lg:flex-row flex-col-reverse',
        'lg:px-0 px-relaxed relative',
      )}
    >
      {/* LEFT SIDE: SWIPER (Image + Floating Panel) */}
      <div className="lg:w-[50%] w-full relative z-0">
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          speed={700}
          autoplay={{ delay: 5000, disableOnInteraction: true }}
          className="!overflow-visible"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              {/* Image Container */}
              <div
                className={cn(
                  'relative overflow-hidden rounded-3xl',
                  'lg:min-h-0 md:min-h-[438px] min-h-[319px]',
                  'lg:h-[438px] w-full',
                  'aspect-16/9',
                )}
              >
                <Image
                  src={slide.imgSrc}
                  alt={slide.imgAlt}
                  width={1920}
                  height={1080}
                  className={cn(
                    'absolute left-1/2 -translate-x-1/2 -top-[50px]',
                    'w-full h-full object-cover scale-[190%]',
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0037B6]/40 to-[#2165FF]/5 z-0" />
              </div>

              {/* Floating Swiper Panel */}
              <div
                className={cn(
                  'absolute z-10',
                  'lg:bottom-0 bottom-[-30%]',
                  'left-1/2 -translate-x-1/2 lg:left-0',
                  'lg:translate-x-[85%]',
                  'lg:w-auto w-[85%] lg:mx-0 mx-auto',
                )}
              >
                <div
                  className={cn(
                    'relative shadow-[0px_1px_24px_-1px_rgba(0,0,0,0.01)] backdrop-blur-[2px]',
                    'lg:max-w-[591px] min-h-[211px]',
                    'p-8 flex flex-col rounded-2xl',
                  )}
                  style={{ background: 'rgba(255, 255, 255, 0.01)' }}
                >
                  {/* Glossy Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/80 to-white/80 pointer-events-none rounded-2xl -z-10" />

                  <span className="text-h5 font-bold font-heading lg:text-start text-center uppercase">
                    {slide.panelHeading}
                  </span>

                  <span className="mt-6 mb-4 lg:text-body-lg text-body-md lg:text-start text-center">
                    {slide.panelText}
                  </span>

                  {/* Navigation Button */}
                  <NextSlideButton
                    text={slide.buttonText}
                    className="w-fit lg:self-end self-center mt-auto lg:text-body-lg text-body-md"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* RIGHT SIDE: STATIC HEADINGS */}
      <div
        className={cn(
          'flex flex-col lg:items-end items-center lg:justify-start justify-center',
          'lg:w-[50%] w-full lg:mb-0 mb-8 lg:pl-8',
        )}
      >
        <Badge>{badgeText}</Badge>
        <HighlightedHeading
          text={headingText}
          highlight={headingTextHighlight}
        />
      </div>
    </div>
  );
}
