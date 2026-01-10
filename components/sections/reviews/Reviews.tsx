'use client';

import { HighlightedHeading } from "@/components/HighlightedHeading";
import { Badge } from "@/components/Badge";
import { GoogleRatingCard } from "@/components/GoogleRatingCard";
import ReviewsCarousel from "@/components/ReviewsCarousel";

import { useTranslations } from "next-intl";

export const Reviews = () => {
  const t = useTranslations("Reviews")

  return (
    <section className="w-full flex px-relaxed py-relaxed mx-auto items-center justify-center overflow-clip">
      {/* Outer container */}
      <div className="w-full max-w-[1248px] flex flex-col items-center gap-10 px-4">
        
        {/* Heading */}
        <div className="w-full flex flex-col md:flex-row gap-8">          
         {/* Left Wrapper - Badge & Heading */}
          <div className="flex flex-col md:items-start items-center gap-2 flex-grow">
            <Badge size="lg">Our Reviews</Badge>
            <HighlightedHeading
              text={t("heading")}
              highlight={t("heading_highlighted_word")}
              className="text-h4 font-heading font-bold"
            />
            <p className="md:text-left text-center">
              {t("description")}
            </p>
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
