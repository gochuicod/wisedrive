"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AppButton } from "./AppButton";
import { X, ArrowUpRight } from "lucide-react";
import { HighlightedHeading } from "./HighlightedHeading";

interface PopUpProps {
  title?: string;
  description?: string;
  features?: string[];
  ctaLabel?: string;
  onClose?: () => void;
  onCtaClick?: () => void;
  imageSrc?: string;
  className?: string;
}

export const PopUp: React.FC<PopUpProps> = ({
  description = "Detailed description text goes here. Explain the value proposition clearly to the user.",
  features = [
    "Feature Item One",
    "Feature Item Two",
    "Feature Item Three",
    "Feature Item Four",
  ],
  ctaLabel = "Get Started",
  onClose,
  onCtaClick,
  imageSrc = "/icons/componentIcons/car-icon.svg", 
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  if (!isVisible) return null;

  return (
    <div
      className={`
        /* Layout & Dimensions */
        relative flex flex-col items-center w-full
        md:max-w-[280px] h-auto min-h-[509px]
        p-4
        
        /* Styling */
        bg-white
        rounded-2xl
        shadow-[0px_4px_25px_rgba(44,87,241,0.3)]
        
        /* Isolation */
        z-50
        ${className}
      `}
    >
      {/* --- Close Button --- */}
      <button
        onClick={handleClose}
        className="absolute right-[2px] top-[1px] w-[44px] h-[44px] flex items-center justify-center rounded-lg hover:bg-gray-50 transition-colors z-10"
        aria-label="Close"
      >
        <X size={24} color="#717680" strokeWidth={2} />
      </button>

      {/* --- Main Content Wrapper --- */}
      <div className="flex flex-col items-center w-[248px] py-6 gap-0 z-0">
        
        {/* Image/Icon Section */}
        <div className="relative w-[64px] h-[60px] shrink-0 mb-4">
           {/* Using a placeholder div for the specific 'bg_removal' image in your CSS.
             Replace 'src' with your actual asset.
           */}
           <div className="w-full h-full flex items-center justify-center">
             <Image 
               src={imageSrc} 
               alt="Icon" 
               width={64} 
               height={60} 
               className="object-contain"
             />
           </div>
        </div>

        {/* Text & Features Wrapper */}
        <div className="flex flex-col items-center gap-4 w-full">
              <HighlightedHeading
                text="Scale your portfolio with data you can trust"
                className="font-heading text-base text-center md:max-w-none lg:max-w-none"
              />

          {/* Feature Pills List */}
          <div className="flex flex-col items-center gap-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-[#E9EEFC] rounded-lg py-2 px-2 w-fit"
              >
                <span className="text-body">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Description Text */}
          <p className="text-body text-center items-center justify-center">
            {description}
          </p>

        </div>
      </div>

      {/* --- CTA Button --- */}
      <AppButton
        onClick={onCtaClick}
        variant="default"
        size="sm"
        rightIcon={<ArrowUpRight size={16} />}
      >
        {ctaLabel}
      </AppButton>
    </div>
  );
};

// --- Icons (Using lucide-react) are now imported at the top ---