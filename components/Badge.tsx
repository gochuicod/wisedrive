import React from "react";
import { BaseBadge, BadgeSize } from "@/styles/badge";

// --- Definition Types ---
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * The size/style variation:
   * - lg: 20px text, 4px spacing
   * - md: 16px text, 2px spacing
   * - sm: 16px text, no extra spacing
   */
  size?: BadgeSize;
  children: React.ReactNode;
}

// --- Component ---
export const Badge: React.FC<BadgeProps> = ({
  children,
  size,
  className,
  ...props
}) => {
  return (
    <BaseBadge className={className} size={size} {...props}>
      {children}
    </BaseBadge>
  );
};