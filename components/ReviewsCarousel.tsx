'use client';

import React, { useState, useMemo } from 'react';
import { ReviewCard } from '@/components/ReviewCard';
import { useTranslations } from 'next-intl';

// Transform review data from i18n
const transformReviewsData = (reviews: Record<string, { customer_name: string; content: string }>) => {
  return Object.entries(reviews).map((entry, index) => {
    const [key, review] = entry;
    return {
      id: index + 1,
      reviewText: review.content,
      reviewerName: review.customer_name,
      reviewDate: "",
      rating: 5,
    };
  });
};

export const ReviewsCarousel = () => {
  const t = useTranslations();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenSize, setScreenSize] = useState('lg'); // 'mobile', 'tablet', 'lg'

  // Get review data from translations
  const reviewsData = useMemo(() => {
    const reviewsObj = t.raw('Reviews.reviews');
    return transformReviewsData(reviewsObj);
  }, [t]);

  // Detect screen size and set cards to display
  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize('mobile');
      } else if (width < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('lg');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine cards per view based on screen size
  const cardsPerView = screenSize === 'mobile' ? 1 : screenSize === 'tablet' ? 2 : 4;

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, reviewsData.length - cardsPerView);
      const nextIndex = prev + cardsPerView;
      return nextIndex > maxIndex ? 0 : nextIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, reviewsData.length - cardsPerView);
      return prev === 0 ? maxIndex : prev - cardsPerView;
    });
  };

  // Calculate number of groups
  const totalGroups = Math.ceil(reviewsData.length / cardsPerView);
  const currentGroup = Math.floor(currentIndex / cardsPerView);

  // Display 4 cards at a time (or adjust based on your layout needs)
  const visibleCards = [
    reviewsData[currentIndex],
    reviewsData[(currentIndex + 1) % reviewsData.length],
    reviewsData[(currentIndex + 2) % reviewsData.length],
    reviewsData[(currentIndex + 3) % reviewsData.length],
  ];

  return (
    <div className="w-full flex flex-col items-center gap-8">
      {/* Carousel Container */}
      <div className="w-full flex items-center justify-start gap-4 md:gap-6 mr-20 md:mr-0 overflow-x-visible">
        {/* Cards Container */}
        <div className="flex gap-4 md:gap-6 justify-center flex-nowrap md:max-w-7xl px-4 md:px-0">
          {visibleCards.map((review, index) => (
            <div key={review.id} className="flex-shrink-0">
              <ReviewCard
                variant={index % 2 === 0 ? 'v1' : 'v2'}
                reviewText={review.reviewText}
                reviewerName={review.reviewerName}
                reviewDate={review.reviewDate}
                rating={review.rating}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Controls Container - Arrow + Pagination + Arrow */}
      <div className="flex items-center justify-center gap-4 md:gap-6">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="w-4 h-4 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
          aria-label="Previous"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-6 md:h-6">
            <path d="M15 18L9 12L15 6" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Carousel Indicators */}
        <div className="flex gap-1 md:gap-2 justify-center">
          {Array.from({ length: totalGroups }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * cardsPerView)}
              className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-colors ${
                index === currentGroup 
                  ? 'bg-[var(--color-primary)]' 
                  : 'border border-[var(--color-primary)] bg-transparent'
              }`}
              aria-label={`Go to group ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="w-4 h-4 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
          aria-label="Next"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-6 md:h-6">
            <path d="M9 18L15 12L9 6" stroke="var(--color-primary)" strokeWidth="2" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ReviewsCarousel;
