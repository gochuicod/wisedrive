'use client';

import React, { useState } from 'react';
import { ReviewCard } from '@/components/ReviewCard';

// Sample review data
const reviewsData = [
  {
    id: 1,
    reviewText: "The inspection was incredibly thorough and the AI-powered insights were eye-opening. I felt confident about my purchase decision.",
    reviewerName: "Sarah Johnson",
    reviewDate: "2 weeks ago",
    rating: 5,
  },
  {
    id: 2,
    reviewText: "Amazing service! The detailed report helped me negotiate a better price. Highly recommended for anyone buying a home.",
    reviewerName: "Michael Chen",
    reviewDate: "1 month ago",
    rating: 5,
  },
  {
    id: 3,
    reviewText: "Professional and efficient. They identified several issues that other inspectors missed. Worth every penny!",
    reviewerName: "Jessica Martinez",
    reviewDate: "3 weeks ago",
    rating: 5,
  },
  {
    id: 4,
    reviewText: "The best inspection experience I've had. The team was knowledgeable and the AI analysis was spot on.",
    reviewerName: "David Thompson",
    reviewDate: "1 week ago",
    rating: 5,
  },
  {
    id: 5,
    reviewText: "Exceeded my expectations. Got a comprehensive report with actionable recommendations. Fantastic!",
    reviewerName: "Emily Rodriguez",
    reviewDate: "10 days ago",
    rating: 5,
  },
  {
    id: 6,
    reviewText: "Professional, thorough, and trustworthy. This is the kind of inspection service everyone deserves.",
    reviewerName: "Robert Wilson",
    reviewDate: "2 months ago",
    rating: 5,
  },
];

export const ReviewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

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
            <path d="M15 18L9 12L15 6" stroke="#1E2939" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Carousel Indicators */}
        <div className="flex gap-1 md:gap-2 justify-center">
          {reviewsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
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
            <path d="M9 18L15 12L9 6" stroke="#1E2939" strokeWidth="2"  strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ReviewsCarousel;
