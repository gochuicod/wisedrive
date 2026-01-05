import React from "react";
import { BaseButton, ButtonVariant, ButtonSize } from "@/styles/button";

// --- Definition Types ---
export interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

// --- App Component ---
export const AppButton: React.FC<AppButtonProps> = ({
  children,
  leftIcon,
  rightIcon,
  className,
  variant,
  size,
  ...props
}) => {
  return (
    <BaseButton className={className} variant={variant} size={size} {...props}>
      {/* Render Left Icon if present */}
      {leftIcon && <span className="flex-none">{leftIcon}</span>}
      
      {/* Main Text */}
      <span className="leading-none">{children}</span>

      {/* Render Right Icon if present */}
      {rightIcon && <span className="flex-none">{rightIcon}</span>}
    </BaseButton>
  );
};