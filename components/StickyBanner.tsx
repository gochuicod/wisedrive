"use client";

import React, { useState } from "react";

interface StickyBannerProps {
  text?: string;
  ctaLabel?: string;
  ctaLink?: string;
  className?: string;
}

export const StickyBanner: React.FC<StickyBannerProps> = ({
  text = "Are you a Dealer, Insurer, or Financier? See how Wisedrive secures your portfolio.",
  ctaLabel = "Go to Enterprise Solutions",
  ctaLink = "#",
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      className={`
        /* Layout & Positioning */
        relative w-full z-50
        flex flex-row justify-center items-center
        
        /* Padding & Gap */
        px-4 py-4 md:px-12 md:py-0
        gap-4 md:gap-6
        
        /* Sizing */
        min-h-[64px]
        
        /* Styling (Primary/800) */
        bg-[#0D2059]
        text-white
        
        ${className}
      `}
    >
      {/* --- Content Group (Text + Button) --- */}
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">
        
        {/* Main Text */}
        <span className="font-poppins text-[14px] leading-[17px] font-normal text-white">
          {text}
        </span>

        {/* CTA Button */}
        <a
          href={ctaLink}
          className={`
            /* Box Model */
            box-border h-[32px] px-4 py-2 gap-2
            
            /* Layout */
            flex flex-row items-center justify-center
            
            /* Styling */
            border border-white rounded-[4px]
            
            /* Typography */
            font-poppins text-[16px] leading-[19px] font-normal text-white
            
            /* Interaction */
            hover:bg-white hover:text-[#0D2059] transition-colors group
          `}
        >
          <span>{ctaLabel}</span>
          
          {/* Right Arrow Icon */}
          <ArrowRightIcon className="stroke-white group-hover:stroke-[#0D2059] transition-colors" />
        </a>
      </div>

      {/* --- Close Button (Absolute Positioned) --- */}
      <button
        onClick={() => setIsVisible(false)}
        aria-label="Close banner"
        className={`
          /* Position: Absolute Right (from Figma) */
          absolute right-2 md:right-4 top-1/2 -translate-y-1/2
          
          /* Sizing */
          w-[30px] h-[30px]
          flex items-center justify-center
          
          /* Styling */
          rounded hover:bg-white/10 transition-colors
        `}
      >
        <CloseIcon />
      </button>
    </div>
  );
};

// --- Icons ---

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M3.33334 8H12.6667"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 3.33334L12.6667 8.00001L8 12.6667"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseIcon = ({ className }: { className?: string }) => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12.75 4.25L4.25 12.75"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.25 4.25L12.75 12.75"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);