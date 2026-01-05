import React from "react";
import { BaseHeading, highlightSpanStyles, HeadingAlign } from "@/styles/heading";

export interface HighlightedHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  align?: HeadingAlign;
   // The full text or React nodes. 
   // Use the <Highlight> component (exported below) to colorize words.
  children: React.ReactNode;
}

 //A helper sub-component to wrap specific words in the highlight color.

export const Highlight: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = "" 
}) => {
  return <span className={`${highlightSpanStyles} ${className}`}>{children}</span>;
};

// --- App Component ---
export const HighlightedHeading: React.FC<HighlightedHeadingProps> = ({
  align,
  children,
  className,
  ...props
}) => {
  return (
    <BaseHeading align={align} className={className} {...props}>
      {children}
    </BaseHeading>
  );
};