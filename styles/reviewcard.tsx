import React from "react";
import Image from "next/image";

// --- Styling Types ---
export type ReviewCardVariant = "v1" | "v2";

interface BaseReviewCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: ReviewCardVariant;
  reviewText: string;
  rating?: number; // 1-5
  reviewerName: string;
  reviewDate: string;
  reviewerImage?: string;
}

// --- Style Definitions ---

// Container:
// W: 288px (Fixed), Pad: 16px, Gap: 16px
// Border: #99A1AF, Radius: 16px, Bg: White
// Flex Col, Justify End (Content sits at bottom)
const containerBase = `
  box-border
  flex flex-col justify-end items-center 
  p-4 gap-4 
  max-w-[288px] 
  bg-white 
  border border-[#99A1AF] rounded-2xl 
  shadow-sm
`;

// Height Variants
const heights: Record<ReviewCardVariant, string> = {
  v1: "max-h-[354px]",
  v2: "max-h-[314px]",
};

const textWrapper = "flex flex-col items-center gap-8 max-w-[256px]";
const reviewParagraph = "font-body font-normal text-[13.26px] leading-[20px] text-center text-[#1E2939]";
const clientInfoWrapper = "flex flex-row items-center gap-2 w-[256px] h-[52px]";
const avatarWrapper = "relative w-[46.4px] h-[46.4px] rounded-full overflow-hidden flex-none bg-gray-100";
const clientDetails = "flex flex-col justify-center items-start pl-2";
const clientName = "font-body font-bold text-[20px] leading-[24px] text-[#1E2939]";
const clientDate = "font-body font-normal text-[16px] leading-[19px] text-[#1E2939]";

// --- Assets ---

const StarIcon = () => (
  <Image
    src="/icons/componentIcons/star.svg"
    alt="Star Icon"
    width={15}
    height={15}
    className="w-full h-full"
  />
);

const NoPhotoIcon = () => (
  <Image
    src="/icons/componentIcons/no-photo.svg"
    alt="No Photo"
    width={40}
    height={40}
    className="w-full h-full"
  />
);

// --- Base Component ---
export const BaseReviewCard: React.FC<BaseReviewCardProps> = ({
  variant = "v1",
  reviewText,
  rating = 5,
  reviewerName,
  reviewDate,
  reviewerImage,
  className = "",
  ...props
}) => {
  return (
    <div className={`${containerBase} ${heights[variant]} ${className}`} {...props}>

    {/* 2. Client Info (Order 1) */}
    <div className={clientInfoWrapper}>
        {/* Avatar */}
        <div className={avatarWrapper}>
        {reviewerImage ? (
                <Image src={reviewerImage} alt={reviewerName} width={40} height={40} className="w-full h-full object-cover" />
            ) : (
                <NoPhotoIcon />
            )}
            </div>

        {/* Name & Date */}
        <div className={clientDetails}>
            <span className={clientName}>{reviewerName}</span>
            <span className={clientDate}>{reviewDate}</span>
        </div>
      </div>
      
      {/* 1. Review Text & Stars (Order 0) */}
      <div className={textWrapper}>
        <p className={reviewParagraph}>
          {reviewText}
        </p>
        
        {/* Stars Gap 3.09px */}
        <div className="flex flex-row gap-0 w-fit max-w-20">
          {[...Array(5)].map((_, i) => (
            // Simple logic: If index < rating, render colored star. 
            // Figma implies all stars are filled #FF9F01 based on vector data.
            <div key={i}>
               <StarIcon />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};