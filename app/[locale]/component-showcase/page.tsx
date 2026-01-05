"use client";

import { AppButton } from "@/components/AppButton";

// --- Icons (Simple SVG placeholders based on your Figma descriptions) ---
const CalendarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// --- Showcase Component ---

const ComponentShowcase = () => {
  return (
    <div className="py-10 px-10 font-sans min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Component Showcase
      </h1>

      {/* --- Variant 1: Default (Gradient) --- */}
      <div className="mb-12 p-8 bg-white rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold mb-6 text-gray-700">Variant 1: Default (Gradient)</h2>
        <div className="flex flex-col gap-6 items-start">
          
          {/* Large */}
          <div className="flex items-center gap-4">
            <AppButton variant="default" size="lg" leftIcon={<CalendarIcon />}>
              Button Label (LG)
            </AppButton>
            <span className="text-sm text-gray-400">H: 56px, Text: 20px</span>
          </div>

          {/* Medium */}
          <div className="flex items-center gap-4">
             <AppButton variant="default" size="md" leftIcon={<CalendarIcon />}>
              Button Label (MD)
            </AppButton>
            <span className="text-sm text-gray-400">H: 56px, Text: 16px</span>
          </div>

           {/* Small */}
           <div className="flex items-center gap-4">
             <AppButton variant="default" size="sm" leftIcon={<CalendarIcon />}>
              Button Label (SM)
            </AppButton>
            <span className="text-sm text-gray-400">H: 32px, Text: 14px</span>
          </div>
        </div>
      </div>

      {/* --- Variant 2: Glass --- */}
      {/* Background is dark/blue to demonstrate the Glass effect */}
      <div className="mb-12 p-8 rounded-xl shadow-sm bg-[linear-gradient(132.85deg,#1e1e2e_0%,#4a4a6a_100%)]">
        <h2 className="text-xl font-bold mb-6 text-white">Variant 2: Glass</h2>
        <div className="flex flex-col gap-6 items-start">
          
          {/* Large */}
          <div className="flex items-center gap-4">
            <AppButton variant="glass" size="lg" rightIcon={<ArrowRightIcon />}>
              Glass Action (LG)
            </AppButton>
             <span className="text-sm text-gray-300">Opacity 20%</span>
          </div>

          {/* Medium */}
          <div className="flex items-center gap-4">
             <AppButton variant="glass" size="md" rightIcon={<ArrowRightIcon />}>
              Glass Action (MD)
            </AppButton>
          </div>

           {/* Small */}
           <div className="flex items-center gap-4">
             <AppButton variant="glass" size="sm" rightIcon={<ArrowRightIcon />}>
              Glass Action (SM)
            </AppButton>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ComponentShowcase;