import React from "react";

// --- Styling Types ---
export type HeadingAlign = "left" | "center" | "right";

interface BaseHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  align?: HeadingAlign;
  children: React.ReactNode;
}

// --- Style Definitions ---
const baseStyles = "text-h4 font-bold uppercase text-[#1E2939]";
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

  return (
    <h4 className={combinedClasses} {...props}>
      {children}
    </h4>
  );
};
