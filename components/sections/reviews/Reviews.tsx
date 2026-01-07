'use client';

import React from "react";
import { DropDown } from "@/components/DropDown";
import { HighlightedHeading, Highlight } from "@/components/HighlightedHeading";
import { Badge } from "@/components/Badge";
import { GoogleRatingCard } from "@/components/GoogleRatingCard";
import ReviewsCarousel from "@/components/ReviewsCarousel";

export const Reviews = () => {
  return (
    <section className="w-full flex px-relaxed py-relaxed mx-auto items-center justify-center overflow-clip">
      {/* Outer container */}
      <div className="w-full max-w-[1248px] flex flex-col items-center gap-10 px-4">
        
        {/* Heading */}
        <div className="w-full flex flex-col md:flex-row gap-8">          
         {/* Left Wrapper - Badge & Heading */}
          <div className="flex flex-col md:items-start items-center gap-2 flex-grow">
            <Badge size="lg">Our Reviews</Badge>
            <HighlightedHeading className="text-h4 font-heading font-bold">
              Drive Away <Highlight>Happy</Highlight>
            </HighlightedHeading>
            <p className="md:text-left text-center">Join thousands of satisfied customers who bought their vehicle with total peace of mind. </p>
          </div>

          {/* Right Wrapper - Subtitle */}
          <div className="flex items-center justify-center md:justify-end flex-grow">
            <GoogleRatingCard 
              rating="4.8"
              buttonLabel="See Reviews"
              onButtonClick={() => alert('See Reviews clicked')}
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full flex items-center justify-center">
                <ReviewsCarousel />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
