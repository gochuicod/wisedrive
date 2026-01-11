import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  italicPlaceholder?: boolean;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      description,
      label,
      italicPlaceholder = false,
      error,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="flex flex-col items-start w-full">
        {label && (
          <label className="mb-1 font-['Poppins'] text-body font-bold text-[#4D525C]">
            {label}
          </label>
        )}

        <input
          ref={ref}
          className={cn(
            `
            w-full px-4 py-2
            bg-white
            border rounded-[8px]
            text-sm md:text-body text-[#4D525C]
            placeholder:text-[#99A1AF]
            ${italicPlaceholder ? 'placeholder:italic' : ''}
            focus:outline-none focus:ring-2
          `,
            error
              ? 'border-red-500 focus:ring-red-500/20'
              : 'border-[#193CB8] focus:ring-[#193CB8]/20 focus:border-[#122C7B]',
            className,
          )}
          {...props}
        />

        {/* Error OR description */}
        {error ? (
          <span className="mt-1 text-xs text-red-500">{error}</span>
        ) : (
          description && (
            <span className="mt-1 text-xs text-[#4D525C]">{description}</span>
          )
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
export default Input;
