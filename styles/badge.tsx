import React from "react";

// --- Styling Types ---
export type BadgeSize = "sm" | "md" | "lg";

interface BaseBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: BadgeSize;
  children: React.ReactNode;
}

// --- Style Definitions ---

// Common: Oswald, SemiBold (600), Uppercase, Color Tag
const baseStyles = "font-heading font-semibold text-tag uppercase inline-block";

const sizes: Record<BadgeSize, string> = {
  // Variant 3 (Smallest - No spacing)
  // Font: 16px, Line: 19px, Spacing: Normal/0
  sm: "text-[16px] leading-[19px] tracking-normal",

  // Variant 2 (Medium - Moderate spacing)
  // Font: 16px, Line: 19px, Spacing: 2px
  md: "text-[16px] leading-[19px] tracking-[2px]",

  // Variant 1 (Large - Wide spacing)
  // Uses text-tag utility which includes font size, line height, and letter spacing
  lg: "text-tag",
};

// --- Base Component ---
export const BaseBadge: React.FC<BaseBadgeProps> = ({
  className = "",
  size = "lg", // Defaulting to largest based on first Figma snippet
  children,
  ...props
}) => {
  const combinedClasses = `${baseStyles} ${sizes[size]} ${className}`;

  return (
    <span className={combinedClasses} {...props}>
      {children}
    </span>
  );
};