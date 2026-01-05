import React from "react";

// --- Styling Types ---
export type DropDownSize = "sm" | "md" | "lg";

interface BaseDropDownProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: DropDownSize;
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

// --- Style Definitions ---

// Common Layout: Flex col, px-24px (6), py-16px (4), Radius 8px
const containerBase = `
  flex flex-col justify-center items-start 
  px-6 py-4 
  rounded-lg 
  transition-all duration-300 ease-in-out
  cursor-pointer
`;

// State-Specific Styles
// Active: #E9EEFC, Shadow, Gap 24px (between title and content)
const activeStyle = "bg-[#E9EEFC] shadow-[2px_2px_4px_rgba(25,33,61,0.06)] gap-6";

// Inactive: #F9FAFB (Gray/50), No Shadow, No Gap (since content is hidden)
const inactiveStyle = "bg-[#F9FAFB] gap-0";

// Header Row: Space between, aligned center
const headerBase = "flex flex-row justify-between items-center w-full select-none";

// Arrow Button Wrapper: 29.33px square, rounded, flex center
const arrowBtnBase = "flex items-center justify-center w-[29.33px] h-[29.33px] rounded-[5.33px] transition-transform duration-300";

// --- Size Variants ---
const sizes: Record<
  DropDownSize,
  { root: string; titleSize: string; content: string }
> = {
  // Large: 501px
  lg: {
    root: "w-[501px]",
    titleSize: "text-[16px] leading-[19px]",
    content: "font-body font-normal text-[16px] leading-[19px] text-[#364153]",
  },

  // Medium: 348px
  md: {
    root: "w-[348px]",
    titleSize: "text-[14px] leading-[17px]",
    content: "font-body font-normal text-[14px] leading-[17px] text-[#364153] text-justify",
  },

  // Small: 358px
  sm: {
    root: "w-[358px]",
    titleSize: "text-[14px] leading-[17px]",
    content: "font-body font-normal text-[14px] leading-[17px] text-[#364153] text-justify",
  },
};

// --- Helper Icon ---
// We use a single Chevron and rotate it. 
// 0deg = Down (Inactive/Closed) matches 'keyboard_arrow_down'
// 180deg = Up (Active/Open) matches 'keyboard_arrow_up'
const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9L12 15L18 9" stroke="#193CB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// --- Base Component ---
export const BaseDropDown: React.FC<BaseDropDownProps> = ({
  size = "lg",
  title,
  isOpen,
  onToggle,
  children,
  className = "",
  ...props
}) => {
  const styles = sizes[size];

  // Dynamic Classes based on isOpen state
  const containerClasses = `${containerBase} ${styles.root} ${isOpen ? activeStyle : inactiveStyle} ${className}`;
  
  // Title Logic: Bold (700) when Open, Regular (400) when Closed
  const titleWeight = isOpen ? "font-bold" : "font-normal";
  const titleClasses = `font-body text-[#1E2939] ${styles.titleSize} ${titleWeight} flex-grow transition-all`;

  return (
    <div className={containerClasses} onClick={onToggle} {...props}>
      {/* Header Row */}
      <div className={headerBase}>
        <span className={titleClasses}>{title}</span>
        
        {/* Toggle Icon */}
        {/* Rotate 180 when open (Up), 0 when closed (Down) */}
        <div className={`${arrowBtnBase} ${isOpen ? "rotate-180" : "rotate-0"}`}>
           <ChevronDownIcon className="w-[21.33px] h-[21.33px]" />
        </div>
      </div>

      {/* Content Row */}
      {isOpen && (
        <div className={`w-full animate-fadeIn ${styles.content}`}>
          {children}
        </div>
      )}
    </div>
  );
};