
import React from "react";

// --- Styling Types ---
interface BaseFeatureStatProps extends React.HTMLAttributes<HTMLDivElement> {
  statValue: string;
  statLabel: string;
  backgroundImage?: string;
}

// --- Style Definitions ---
const containerBase = `
  relative
  flex flex-col items-center justify-end
  w-[182px] h-[440px]
  rounded-full
  overflow-hidden
  bg-[#00005A]
  border border-[#8A38F5]/30
  box-border
  shadow-[inset_0px_0px_22.76px_#00005A]
`;

// 2. Background Image Area
// Covers full container with the image displayed fully
const imageLayer = "absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-0";

// 3. Blue Gradient Overlay
// Fades from transparent to #0037B6 at the bottom to blend the dial
const gradientOverlay = `
  absolute bottom-0 left-0 right-0 
  h-[280px] 
  bg-[linear-gradient(180deg,rgba(33,101,255,0)_0%,#0037B6_100%)] 
  z-10
`;

// --- The Glass Dial Components ---

// Container for the Dial (positioned at bottom)
const dialWrapper = "absolute bottom-[12px] z-20 flex items-center justify-center w-[163px] h-[163px]";

// Layer A: The "Glow" behind the dial
const dialGlow = "absolute inset-0 rounded-full filter drop-shadow-[0px_0px_14px_#02D9FF]";

// Layer B: The Outer Glass Ring (Figma "step 8")
// We use inline styles for the box-shadow because Tailwind arbitrary values get too messy with this complexity.
const outerGlassStyle: React.CSSProperties = {
  background: "rgba(255, 255, 255, 0.01)",
  border: "1.13px solid #FFFFFF",
  borderRadius: "50%",
  backdropFilter: "blur(13.8px)",
  boxShadow: `
    inset 0px 10.79px 15.5px -9.96px rgba(255, 255, 255, 0.5), 
    inset 0px 1.94px 3.04px -1.11px #FFFFFF, 
    inset 0px -22.7px 33.14px -17.71px rgba(16, 121, 203, 0.35), 
    inset 0px 27.12px 27.68px -13.28px rgba(46, 168, 229, 0.65), 
    inset 0px 1.11px 4.98px rgba(8, 59, 88, 0.23), 
    inset 0px 0.28px 31.73px rgba(0, 163, 255, 0.6)
  `
};

// Layer C: The Inner Glass Circle (Figma "step 9")
const innerGlassStyle: React.CSSProperties = {
  background: "rgba(255, 255, 255, 0.01)",
  borderRadius: "50%",
  boxShadow: `
    inset 0.56px 1.94px 3.04px -1.11px #FFFFFF, 
    inset 0px -22.7px 18.82px -10.73px rgba(0, 81, 255, 0.3), 
    inset 0px 1.11px 4.98px rgba(0, 183, 255, 0.6), 
    inset 0px 0.28px 32.47px rgba(0, 163, 255, 0.4)
  `
};

// Typography
const valueText = "font-heading font-bold text-[40px] leading-[48px] text-[#F0B100] uppercase tracking-[0.04em]";
const labelText = "font-body font-semibold leading-[16px] text-white text-center text-sm drop-shadow-[0px_1px_1px_rgba(23,9,92,0.75)]";

// --- Helper: Tick Marks SVG ---
// Replaces the 8 individual "Vector" divs with a clean SVG overlay
const TickMarks = () => (
  <svg width="100%" height="100%" viewBox="0 0 162 162" fill="none" className="absolute inset-0 pointer-events-none">
    {/* Top */}
    <rect x="80.5" y="10" width="1" height="10" fill="white" stroke="white" strokeWidth="0.5"/>
    {/* Bottom */}
    <rect x="80.5" y="142" width="1" height="10" fill="white" stroke="white" strokeWidth="0.5"/>
    {/* Left */}
    <rect x="10" y="80.5" width="10" height="1" fill="white" stroke="white" strokeWidth="0.5"/>
    {/* Right */}
    <rect x="142" y="80.5" width="10" height="1" fill="white" stroke="white" strokeWidth="0.5"/>
    
    {/* Diagonals (Simulating the rotated vectors) */}
    <g transform="rotate(45 81 81)">
      <rect x="80.5" y="15" width="1" height="8" fill="white" stroke="white" strokeWidth="0.5"/>
      <rect x="80.5" y="139" width="1" height="8" fill="white" stroke="white" strokeWidth="0.5"/>
      <rect x="15" y="80.5" width="8" height="1" fill="white" stroke="white" strokeWidth="0.5"/>
      <rect x="139" y="80.5" width="8" height="1" fill="white" stroke="white" strokeWidth="0.5"/>
    </g>
  </svg>
);

// --- Base Component ---
export const BaseFeatureStat: React.FC<BaseFeatureStatProps> = ({
  statValue,
  statLabel,
  backgroundImage,
  className = "",
  ...props
}) => {
  return (
    <div className={`${containerBase} ${className}`} {...props}>
      {/* Background Image */}
      <div 
        className={imageLayer} 
        style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined }}
      />
      
      {/* Gradient Blend */}
      <div className={gradientOverlay} />

      {/* The Dial Assembly */}
      <div className={dialWrapper}>
        {/* 1. Glow */}
        <div className={dialGlow} />

        {/* 2. Outer Glass Ring */}
        <div className="absolute inset-0 w-full h-full z-10" style={outerGlassStyle} />

        {/* 3. Tick Marks */}
        <div className="absolute inset-0 z-20 p-2">
           <TickMarks />
        </div>

        {/* 4. Inner Glass Circle */}
        <div className="absolute w-[125px] h-[126px] z-40 flex flex-col items-center justify-center" style={innerGlassStyle}>
            {/* Content */}
            <h3 className={valueText}>{statValue}</h3>
            <span className={labelText}>{statLabel}</span>
        </div>
      </div>
    </div>
  );
};