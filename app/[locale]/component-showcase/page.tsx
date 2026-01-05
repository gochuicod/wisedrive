"use client";

import { AppButton } from "@/components/AppButton";
import { IconBox } from "@/components/IconBox";

import Image from "next/image";

// --- Icons (Simple SVG placeholders) ---
const CalendarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" />
    <path d="M16 2V6" />
    <path d="M8 2V6" />
    <path d="M3 10H21" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12H19" />
    <path d="M12 5L19 12L12 19" />
  </svg>
);

// --- Showcase Component ---

const ComponentShowcase = () => {
  return (
    <div className="py-10 px-10 font-sans min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-16 text-gray-800 uppercase tracking-widest">
        Component Showcase
      </h1>

      {/* =========================================
          SECTION 1: BUTTONS
      ========================================= */}
      
      {/* --- Variant 1: Default (Gradient) --- */}
      <div className="mb-12 p-8 bg-white rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold mb-6 text-gray-700 border-b pb-2">Buttons: Default (Gradient)</h2>
        <div className="flex flex-col gap-6 items-start">
          
          {/* Large */}
          <div className="flex items-center gap-6">
            <AppButton variant="default" size="lg" leftIcon={<CalendarIcon />}>
              Button Label (LG)
            </AppButton>
            <span className="text-sm text-gray-400 font-mono">Size: LG | H: 56px | Text: 20px</span>
          </div>

          {/* Medium */}
          <div className="flex items-center gap-6">
             <AppButton variant="default" size="md" leftIcon={<CalendarIcon />}>
              Button Label (MD)
            </AppButton>
            <span className="text-sm text-gray-400 font-mono">Size: MD | H: 56px | Text: 16px</span>
          </div>

           {/* Small */}
           <div className="flex items-center gap-6">
             <AppButton variant="default" size="sm" leftIcon={<CalendarIcon />}>
              Button Label (SM)
            </AppButton>
            <span className="text-sm text-gray-400 font-mono">Size: SM | H: 32px | Text: 14px</span>
          </div>
        </div>
      </div>

      {/* --- Variant 2: Glass --- */}
      <div className="mb-12 p-8 rounded-xl shadow-lg bg-[linear-gradient(132.85deg,#1e1e2e_0%,#4a4a6a_100%)]">
        <h2 className="text-xl font-bold mb-6 text-white border-b border-gray-500 pb-2">Buttons: Glass</h2>
        <div className="flex flex-col gap-6 items-start">
          
          {/* Large */}
          <div className="flex items-center gap-6">
            <AppButton variant="glass" size="lg" rightIcon={<ArrowRightIcon />}>
              Glass Action (LG)
            </AppButton>
             <span className="text-sm text-gray-300 font-mono">Opacity 20% | Backdrop Blur</span>
          </div>

          {/* Medium */}
          <div className="flex items-center gap-6">
             <AppButton variant="glass" size="md" rightIcon={<ArrowRightIcon />}>
              Glass Action (MD)
            </AppButton>
          </div>

           {/* Small */}
           <div className="flex items-center gap-6">
             <AppButton variant="glass" size="sm" rightIcon={<ArrowRightIcon />}>
              Glass Action (SM)
            </AppButton>
          </div>
        </div>
      </div>

      {/* =========================================
          SECTION 2: FEATURE ICON BOXES
      ========================================= */}
      
      <div className="mb-12 p-8 bg-white rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold mb-10 text-gray-700 border-b pb-2">Feature Icon Boxes</h2>
        
        {/* Grid to show them side-by-side */}
        <div className="flex flex-wrap items-start justify-center gap-12 bg-gray-50 p-10 rounded-lg border border-dashed border-gray-300">
          
          {/* 1. Large Variation */}
          <div className="flex flex-col items-center gap-4">
            <IconBox 
              size="lg"
              title="Verified Cars"
              description="Every car undergoes a strict 200-point inspection process."
              icon={<Image src="/icons/iconBox/audit.svg" alt="Audit" width={96} height={96} />}
            />
            <span className="text-xs text-blue-500 font-mono mt-4">Size: LG (288px)</span>
          </div>

          {/* 2. Medium Variation */}
          <div className="flex flex-col items-center gap-4">
            <IconBox 
              size="md"
              title="Secure"
              description="Transactions are fully insured and protected."
              icon={<Image src="/icons/iconBox/fraud.svg" alt="Fraud Protection" width={96} height={96} />}
            />
            <span className="text-xs text-blue-500 font-mono mt-4">Size: MD (162px)</span>
          </div>

          {/* 3. Small Variation */}
          <div className="flex flex-col items-center gap-4">
            <IconBox 
              size="sm"
              title="Fast"
              description="Quick processing and instant approval."
              icon={<Image src="/icons/iconBox/clock.svg" alt="Fast Processing" width={96} height={96} />}
            />
            <span className="text-xs text-blue-500 font-mono mt-4">Size: SM (162px)</span>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ComponentShowcase;