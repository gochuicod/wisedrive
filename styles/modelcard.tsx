import React from "react";
import Image from "next/image";
import { AppButton } from "@/components/AppButton";
import { ChevronsDown } from "lucide-react";

interface BaseModelCardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  buttonText: string;
  onButtonClick?: () => void;
  className?: string;
}

export const BaseModelCard: React.FC<BaseModelCardProps> = ({
  title,
  subtitle,
  imageSrc,
  buttonText,
  onButtonClick,
  className = "",
}) => {
  return (
    <div
      className={`
        min-w-[398px] min-h-[370px]
        p-4 gap-4
        
        flex flex-col items-center

        bg-gradient-to-r from-[#FFFFFF] to-[rgba(228,247,255,0.6)]
        shadow-[inset_0px_0px_20px_rgba(106,200,255,0.2)]
        rounded-2xl
        
        ${className}
      `}
    >
      {/* --- Image Section --- */}
      <div className="relative w-[358px] h-[180px] shrink-0 rounded-3xl overflow-hidden bg-[#050717]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />

        {/* Gradient Overlays (Rectangles 1048 & 1050) */}
        <div 
          className="absolute inset-x-0 bottom-[-20%] top-[75%] bg-gradient-to-b from-[#003CC500] to-[#001D5F] mix-blend-multiply opacity-80" 
          aria-hidden="true"
        />
        <div 
          className="absolute inset-x-0 bottom-[-19%] top-[75%] bg-gradient-to-b from-[#2165FF00] to-[#0037B6] opacity-90" 
          aria-hidden="true"
        />
      </div>

      {/* --- Content Section --- */}
      <div className="flex flex-col items-center max-w-[400px] gap-1 grow">
        
        {/* Text Group */}
        <div className="flex flex-col items-center gap-6 grow">
          <div className="flex flex-col items-center gap-2 w-full">
            {/* Title */}
            <p className="text-body-lg font-bold text-center">
              {title}
            </p>
            
            {/* Subtitle */}
            <p className="text-body-sm" dangerouslySetInnerHTML={{ __html: subtitle }} />
          </div>

          {/* Button */}
          <AppButton
            variant="tertiary"
            size="sm"
            onClick={onButtonClick}
            rightIcon={<ChevronsDown size={16} />}
            leftIcon={<ChevronsDown size={16} />}
          >
            {buttonText}
          </AppButton>
        </div>
      </div>
    </div>
  );
};