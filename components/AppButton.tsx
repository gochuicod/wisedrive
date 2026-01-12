import React from 'react';
import { BaseButton, ButtonVariant, ButtonSize } from '@/styles/button';

export interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
  download?: boolean | string;
}

export const AppButton: React.FC<AppButtonProps> = ({
  children,
  leftIcon,
  rightIcon,
  className,
  variant,
  size,
  href,
  download,
  type = 'button', // 👈 DEFAULT HERE
  ...props
}) => {
  return (
    <BaseButton
      className={className}
      variant={variant}
      size={size}
      href={href}
      download={download}
      type={type}
      {...props}
    >
      {leftIcon && <span className="flex-none">{leftIcon}</span>}
      <span className="leading-none">{children}</span>
      {rightIcon && <span className="flex-none">{rightIcon}</span>}
    </BaseButton>
  );
};
