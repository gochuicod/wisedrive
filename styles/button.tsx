import React from "react";

// --- Styling Types ---
export type ButtonVariant = "default" | "glass" | "secondary";
export type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
}

// --- Style Definitions ---

// Common logic: Flex container, Font Poppins, White text, Gap 8px
const baseStyles = "flex items-center justify-center font-body gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed";

const variants: Record<ButtonVariant, string> = {
  // Gradient: 132.85deg, #2BA3FF to #374EFF
  default: "bg-[linear-gradient(132.85deg,#2BA3FF_0%,#374EFF_99.57%)] text-white hover:shadow-lg hover:brightness-110",
  
  // Glass: rgba(255, 255, 255, 0.2)
  glass: "bg-white/15 backdrop-blur-md border border-white/20 text-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:bg-white/30 hover:border-white/30",
  
  secondary: "border-2 border-white text-white hover:bg-primary/5",
};

const sizes: Record<ButtonSize, string> = {
  // Based on your specific pixel values:
  
  // H: 32px, Pad: 8px 16px, Font: 14px, Radius: 4px
  sm: "h-[32px] px-4 text-[14px] rounded", 
  
  // H: 56px, Pad: 16px 24px, Font: 16px, Radius: 8px
  md: "h-[56px] px-6 text-[16px] rounded-lg", 
  
  // H: 56px, Pad: 16px 24px, Font: 20px, Radius: 8px
  lg: "h-[56px] px-6 text-[20px] rounded-lg", 
};

// --- Base Component ---
export const BaseButton: React.FC<BaseButtonProps> = ({
  className = "",
  variant = "default",
  size = "md", // Defaulting to MD based on your input
  isLoading = false,
  children,
  ...props
}) => {
  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={combinedClasses} disabled={isLoading || props.disabled} {...props}>
      {isLoading ? (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
      ) : null}
      {children}
    </button>
  );
};