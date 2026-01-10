import React from 'react';

interface SelectOption {
  label: string;
  value: string | number;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  description?: string;
  label?: string;
  placeholder?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options, description, label, placeholder, ...props }, ref) => {
    return (
      <div className="flex flex-col items-start w-full">
        {/* Optional Label */}
        {label && (
          <label className="mb-1 font-['Poppins'] text-sm text-[#4D525C]">
            {label}
          </label>
        )}

        {/* Container for Select + Icon */}
        <div className="relative w-full">
          <select
            ref={ref}
            // FIX: Set default value here instead of 'selected' on option
            defaultValue=""
            className={`
              /* Reset default browser styles to allow custom icon */
              appearance-none
              
              /* Layout & Sizing */
              w-full
              px-4 py-2
              
              /* Borders & Background */
              bg-white
              border border-[#193CB8]
              
               text-sm md:text-body 
              text-[#4D525C]
              
              /* Interactive States */
              focus:outline-none 
              focus:ring-2 
              focus:ring-[#193CB8]/20
              focus:border-[#122C7B]
              
              /* Placeholder logic (relies on required + empty value) */
              invalid:text-[#99A1AF]
              
              ${className}
            `}
            {...props}
          >
            {/* Placeholder Option */}
            {placeholder && (
              <option value="" disabled hidden>
                {placeholder}
              </option>
            )}
            
            {/* Map Options */}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>

          {/* Custom Dropdown Icon (SVG) */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#193CB8]">
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1.5L6 6.5L11 1.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

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

Select.displayName = 'Select';

export default Select;