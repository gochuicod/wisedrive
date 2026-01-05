import React from "react";

// --- Styling Types ---
export type IconBoxSize = "sm" | "md" | "lg";

interface BaseIconBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: IconBoxSize;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
}

// --- Style Definitions ---

// Root: Flex col, center align, gap 16px (matches all Figma variations)
const rootBase = "flex flex-col items-center justify-start text-center gap-4 flex-none grow-0";

// Typography Constants
// Title: Oswald (Heading), Header color, Uppercase, Bold
const titleBase = "font-heading font-bold uppercase text-header tracking-widest";
// Desc: Poppins (Body), Body color, Regular
const descBase = "font-body font-normal text-body";

// Icon Wrapper: Flex center relative to hold the asset
const iconWrapperBase = "flex items-center justify-center flex-none relative order-0";

// --- Size Variants (Extracted from Figma) ---
const sizes: Record<
  IconBoxSize,
  { root: string; icon: string; title: string; desc: string }
> = {
  // Variation 3 (Smallest Image)
  // W: 162px, H: 170px | Icon Area: 53x50
  sm: {
    root: "w-[162px]",
    icon: "w-[53.31px] h-[50px]", 
    title: "text-h6",
    desc: "text-body",
  },

  // Variation 2 (Medium Image)
  // W: 162px, H: 195px | Icon Area: 80x75
  md: {
    root: "w-[162px]",
    icon: "w-[79.97px] h-[75px]",
    title: "text-h6",
    desc: "text-body",
  },

  // Variation 1 (Large / Desktop)
  // W: 288px, H: 214px | Icon Area: 106x100
  lg: {
    root: "w-[288px]",
    icon: "w-[106.63px] h-[100px]",
    title: "text-h6",
    desc: "text-body",
  },
};

// --- Base Component ---
export const BaseIconBox: React.FC<BaseIconBoxProps> = ({
  className = "",
  size = "lg", // Defaulting to the largest view based on Figma Var 1
  icon,
  title,
  description,
  ...props
}) => {
  const styles = sizes[size];

  return (
    <div className={`${rootBase} ${styles.root} ${className}`} {...props}>
      {/* Icon Area */}
      {icon && (
        <div className={`${iconWrapperBase} ${styles.icon}`}>
          {icon}
        </div>
      )}

      {/* Content Area */}
      {/* Figma defines a flex-col container for text with gap-4 (16px) */}
      <div className="flex flex-col items-center gap-4 w-full order-1 self-stretch flex-grow-0">
        {title && (
          <h6 className={`${titleBase} ${styles.title}`}>
            {title}
          </h6>
        )}
        
        {description && (
          <p className={`${descBase} ${styles.desc}`}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
};