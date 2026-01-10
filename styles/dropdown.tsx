import React from 'react';

// --- Styling Types ---
export type DropDownSize = 'sm' | 'md' | 'lg';
export type DropDownVariant = 'default' | 'gradient';

interface BaseDropDownProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onClick" | "onToggle"> {
  size?: DropDownSize;
  variant?: DropDownVariant;
  title: string;
  isOpen: boolean;
  onOpenChange: () => void;
  children: React.ReactNode;
}

// --- Style Definitions ---
const containerBase = `
  flex flex-col justify-start items-start
  px-6 py-4
  transition-all duration-300 ease-in-out
  cursor-pointer
  overflow-hidden
  w-full
`;

const activeStyle =
  'bg-[#E9EEFC] shadow-[2px_2px_4px_rgba(25,33,61,0.06)]';
const inactiveStyle = 'bg-[#F9FAFB]';

// Gradient variant styles
const gradientStyle = `
  bg-gradient-to-r from-white to-[rgba(228,247,255,0.6)]
  shadow-[inset_-8px_-8px_24px_rgba(0,183,255,0.08)]
  backdrop-blur-[2px]
  rounded-lg
  max-w-[500px]
`;

const headerBase = 'flex flex-row justify-between items-center w-full select-none';
const arrowBtnBase =
  'flex items-center justify-center w-[29.33px] h-[29.33px] rounded-[5.33px] transition-transform duration-300';

// --- Size Variants ---
const sizes: Record<
  DropDownSize,
  { root: string; titleSize: string; content: string }
> = {
  lg: {
    root: 'w-full',
    titleSize: 'text-[16px] leading-[19px]',
    content: 'font-body font-normal text-[16px] leading-[19px] text-[#364153]',
  },
  md: {
    root: 'w-full',
    titleSize: 'text-[14px] leading-[17px]',
    content:
      'font-body font-normal text-[14px] leading-[17px] text-[#364153] text-justify',
  },
  sm: {
    root: 'w-full',
    titleSize: 'text-[14px] leading-[17px]',
    content:
      'font-body font-normal text-[14px] leading-[17px] text-[#364153] text-justify',
  },
};

// --- Helper Icon ---
// We use a single Chevron and rotate it.
// 0deg = Down (Inactive/Closed) matches 'keyboard_arrow_down'
// 180deg = Up (Active/Open) matches 'keyboard_arrow_up'
const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 9L12 15L18 9"
      stroke="#193CB8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// --- Base Component ---
export const BaseDropDown: React.FC<BaseDropDownProps> = ({
  size = 'lg',
  variant = 'default',
  title,
  isOpen,
  onOpenChange,
  children,
  className = '',
  ...props
}) => {
  const styles = sizes[size];

  // Dynamic Classes based on isOpen state and variant
  const variantClasses = variant === 'gradient' 
    ? gradientStyle 
    : (isOpen ? activeStyle : inactiveStyle);
  const containerClasses = `${containerBase} ${styles.root} ${variantClasses} ${className}`;

  // Title Logic: Bold (700) when Open, Regular (400) when Closed
  const titleWeight = isOpen ? 'font-bold' : 'font-normal';
  const titleClasses = `font-body text-[#1E2939] ${styles.titleSize} ${titleWeight} flex-grow transition-all`;

  return (
    <div className={containerClasses} onClick={onOpenChange} {...props}>
      {/* Header Row */}
      <div className={headerBase}>
        <span className={titleClasses}>{title}</span>

        {/* Toggle Icon */}
        {/* Rotate 180 when open (Up), 0 when closed (Down) */}
        <div
          className={`${arrowBtnBase} ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        >
          <ChevronDownIcon className="w-[21.33px] h-[21.33px]" />
        </div>
      </div>

      {/* Content Row */}
      {isOpen && (
        <div className={`w-full animate-fadeIn ${styles.content} mt-4`}>
          {children}
        </div>
      )}
    </div>
  );
};
