import React from "react";
import { BaseIconBox, IconBoxSize } from "@/styles/iconbox";

// --- Definition Types ---
export interface IconBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  /** * The size variation corresponding to the Figma designs 
   * lg = 288px width (Feature Item 1)
   * md = 162px width (Feature Item 2)
   * sm = 162px width (Feature Item 3)
   */
  size?: IconBoxSize;
  title: string;
  description: string;
  /** * The visual asset (Image, SVG, or Icon component).
   * Per figma, this centers inside the defined dimension slot.
   */
  icon: React.ReactNode;
}

// --- Component ---
export const IconBox: React.FC<IconBoxProps> = ({
  title,
  description,
  icon,
  size,
  className,
  ...props
}) => {
  return (
    <BaseIconBox
      className={className}
      size={size}
      icon={icon}
      title={title}
      description={description}
      {...props}
    />
  );
};