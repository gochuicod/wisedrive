import React from "react";
import { BaseIconBox, IconBoxSize } from "@/styles/iconbox";

// --- Definition Types ---
export interface IconBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: IconBoxSize;
  title: string;
  description: string;
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