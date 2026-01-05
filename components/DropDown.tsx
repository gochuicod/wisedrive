"use client";

import React, { useState } from "react";
import { BaseDropDown, DropDownSize } from "@/styles/dropdown";

// --- Definition Types ---
export interface DropDownProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  size?: DropDownSize;
  title: string;
  /**
   * The content to be displayed inside the collapsible area.
   */
  children: React.ReactNode;
  /**
   * Optional: If true, the dropdown starts open.
   */
  defaultOpen?: boolean;
}

// --- App Component ---
export const DropDown: React.FC<DropDownProps> = ({
  size,
  title,
  children,
  defaultOpen = false,
  className,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <BaseDropDown
      className={className}
      size={size}
      title={title}
      isOpen={isOpen}
      onToggle={handleToggle}
      {...props}
    >
      {children}
    </BaseDropDown>
  );
};