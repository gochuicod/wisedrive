import React from "react";

// --- Styling Types ---
// No specific variants in the prompt (just one H4 style), 
// but we keep the interface open for alignment options.
export type HeadingAlign = "left" | "center" | "right";

interface BaseHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  align?: HeadingAlign;
  children: React.ReactNode;
}

// --- Style Definitions ---

// Using the h4 tailwind utility class from tailwind.config.ts
const baseStyles = "text-h4 font-bold uppercase text-[#1E2939]";

// Helper for the "Highlighted" text (assuming the Blue from your other components)
export const highlightSpanStyles = "text-[#193CB8]"; 

const alignments: Record<HeadingAlign, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

// --- Base Component ---
export const BaseHeading: React.FC<BaseHeadingProps> = ({
  className = "",
  align = "left",
  children,
  ...props
}) => {
  const combinedClasses = `${baseStyles} ${alignments[align]} ${className}`;

  // We use h4 because the Figma layer was named "heading/h4"
  return (
    <h4 className={combinedClasses} {...props}>
      {children}
    </h4>
  );
};