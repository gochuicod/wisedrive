"use client";

import React, { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { useTranslations } from "next-intl";

interface StickyBannerProps {
  className?: string;
}

export const StickyBanner: React.FC<StickyBannerProps> = ({
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const t = useTranslations("StickyBanner");

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
          {t("text")}
        </span>

        {/* CTA Button */}
        <a
          href={t("ctaLink")}
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
          <span>{t("ctaLabel")}</span>
          
          {/* Right Arrow Icon */}
          <ArrowRight 
            size={16} 
            className="stroke-white group-hover:stroke-[#0D2059] transition-colors ml-2" 
          />
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
        <X size={17} className="text-white" />
      </button>
    </div>
  );
};