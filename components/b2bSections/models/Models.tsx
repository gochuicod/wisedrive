'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { HighlightedHeading } from '@/components/HighlightedHeading';
import { ModelCard } from '@/components/ModelCard';
import { modelsData } from '@/constants';

export const Models = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenSize, setScreenSize] = useState('lg');

  // Detect screen size
  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize('mobile');
      } else {
        setScreenSize('lg');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine cards per view based on screen size
  const cardsPerView = screenSize === 'mobile' ? 1 : 2;

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, modelsData.length - cardsPerView);
      const nextIndex = prev + 1;
      return nextIndex > maxIndex ? 0 : nextIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, modelsData.length - cardsPerView);
      return prev === 0 ? maxIndex : prev - 1;
    });
  };

  // Calculate number of groups
  const totalGroups = screenSize === 'mobile' ? modelsData.length : 1;
  const currentGroup = screenSize === 'mobile' ? currentIndex : 0;

  // Get visible cards
  const visibleCards =
    screenSize === 'mobile' ? [modelsData[currentIndex]] : modelsData;

  return (
    <section
      className="w-full flex justify-center px-relaxed py-relaxed bg-white"
      id="partnership-models"
    >
      <div className="relative isolate w-full max-w-[1248px] md:h-[744px] flex items-end">
        {/* BACKGROUND LAYER */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/model_card/bg-image.webp"
            alt="Background Image"
            width={1920}
            height={1080}
            className="object-cover overflow-visible translate-x-10 -translate-y-16 md:translate-x-0 md:translate-y-20 lg:translate-x-0 lg:-translate-y-0 md:scale-[1] sm:scale-[0.75] sm:translate-x-40 sm:-translate-y-24"
          />
        </div>

        {/* CONTENT LAYER */}
        <div className="relative z-10 w-full flex flex-col gap-6 pb-8">
          {/* Heading */}
          <div className="max-w-[592px] flex flex-col gap-2">
            <HighlightedHeading
              text="Partnership Models"
              className="font-heading"
            />
            <p className="text-body">
              Enterprise-grade engagement models designed for scale.
            </p>
          </div>

          {/* Cards Container */}
          <div className="flex flex-col md:flex-row gap-8">
            {visibleCards.map((model) => (
              <ModelCard
                key={model.id}
                title={model.title}
                subtitle={model.subtitle}
                image={model.image}
                content={model.content}
              />
            ))}
          </div>

          {/* Mobile Carousel Controls */}
          {screenSize === 'mobile' && (
            <div className="flex items-center justify-center gap-4 mt-4">
              {/* Previous Button */}
              <button
                onClick={handlePrev}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
                aria-label="Previous"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="var(--color-primary)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Carousel Indicators */}
              <div className="flex gap-2 justify-center">
                {Array.from({ length: totalGroups }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentGroup
                        ? 'bg-[var(--color-primary)]'
                        : 'border border-[var(--color-primary)] bg-transparent'
                    }`}
                    aria-label={`Go to card ${index + 1}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
                aria-label="Next"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="var(--color-primary)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Models;
