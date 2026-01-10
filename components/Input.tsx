import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  description?: string;
  label?: string;
  italicPlaceholder?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, description, label, italicPlaceholder = false, ...props }, ref) => {
    return (
      <div className="flex flex-col items-start w-full">
        {label && (
          <label className="mb-1 font-['Poppins'] text-body font-bold text-[#4D525C]">
            {label}
          </label>
        )}

        {/* The Input Field */}
        <input
          ref={ref}
          className={`
            /* Layout & Sizing */
            flex flex-col justify-center items-center
            w-full 
            px-4 py-2
            
            /* Borders & Background */
            bg-white
            border border-[#193CB8]
            rounded-[8px]
            
            text-sm md:text-body 
            text-[#4D525C]
            
            /* Placeholder Styling */
            placeholder:text-[#99A1AF]
            ${italicPlaceholder ? 'placeholder:italic' : 'placeholder:font-normal'}
            
            /* Interactive States */
            focus:outline-none 
            focus:ring-2 
            focus:ring-[#193CB8]/20
            focus:border-[#122C7B]
            
            /* Merge any custom classes passed via props */
            ${className}
          `}
          {...props}
        />

        {/* Description / Helper Text */}
        {description && (
          <div className="mt-1 w-full flex items-center justify-end">
            <span
              className="
                font-['Inter']
                font-normal
                text-[12px]
                leading-[14px]
                text-right
                text-[#4D525C]
              "
            >
              {description}
            </span>
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;