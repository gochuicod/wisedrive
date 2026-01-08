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
const rootBase = "flex flex-col items-center justify-start text-center gap-4 flex-none grow-0";
const titleBase = "font-heading font-bold uppercase text-header tracking-widest";
const descBase = "font-body font-normal text-body";
const iconWrapperBase = "flex items-center justify-center flex-none relative order-0";
const sizes: Record<
  IconBoxSize,
  { root: string; icon: string; title: string; desc: string }
> = {
  sm: {
    root: "w-[162px]",
    icon: "w-[53.31px] h-[50px]", 
    title: "text-h6",
    desc: "text-body",
  },
  md: {
    root: "w-[162px]",
    icon: "w-[79.97px] h-[75px]",
    title: "text-h6",
    desc: "text-body",
  },
  lg: {
    root: "w-[288px]",
    icon: "w-full h-[100px]",
    title: "text-h6",
    desc: "text-body",
  },
};

// --- Base Component ---
export const BaseIconBox: React.FC<BaseIconBoxProps> = ({
  className = "",
  size = "lg",
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