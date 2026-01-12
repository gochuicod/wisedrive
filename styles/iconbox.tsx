import React from "react";

// --- Styling Types ---
export type IconBoxSize = "sm" | "md" | "lg";

interface BaseIconBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
}

// --- Style Definitions ---
const rootBase = "flex flex-col items-center justify-start text-center gap-4 flex-none grow-0 w-[162px] md:w-[162px] lg:w-[288px]";
const titleBase = "font-heading font-bold uppercase text-header tracking-widest text-h6";
const descBase = "font-body font-normal text-body";
const iconWrapperBase = "flex items-center justify-center flex-none relative order-0 w-[53.31px] h-[50px] md:w-[79.97px] md:h-[75px] lg:w-full lg:h-[100px]";

// --- Base Component ---
export const BaseIconBox: React.FC<BaseIconBoxProps> = ({
  className = "",
  icon,
  title,
  description,
  ...props
}) => {
  return (
    <div className={`${rootBase} ${className}`} {...props}>
      {/* Icon Area */}
      {icon && (
        <div className={iconWrapperBase}>
          {icon}
        </div>
      )}

      {/* Content Area */}
      <div className="flex flex-col items-center gap-4 w-full order-1 self-stretch flex-grow-0">
        {title && (
          <h6 className={titleBase}>
            {title}
          </h6>
        )}
        
        {description && (
          <p className={descBase}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
};