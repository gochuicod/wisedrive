'use client';

import React, { useState } from 'react';
import { BaseDropDown, DropDownSize, DropDownVariant } from '@/styles/dropdown';

// --- Definition Types ---
export interface DropDownProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title' | 'onToggle'> {
  size?: DropDownSize;
  variant?: DropDownVariant;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

// --- App Component ---
export const DropDown: React.FC<DropDownProps> = ({
  size,
  variant,
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
      variant={variant}
      title={title}
      isOpen={isOpen}
      onOpenChange={handleToggle}
      {...props}
    >
      {children}
    </BaseDropDown>
  );
};
