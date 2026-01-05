"use client";

import React from "react";

// --- Types ---

interface ComponentShowcaseProps {
  locale: string;
}

interface ComponentWrapperProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

// --- Helper Component ---
const ComponentWrapper: React.FC<ComponentWrapperProps> = ({
  title,
  children,
  className = "",
}) => (
  <div className="p-8 my-8 border rounded-lg bg-white shadow">
    <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
    {/* Simple string interpolation allows flexible styling without external deps */}
    <div className={`space-y-4 ${className}`}>{children}</div>
  </div>
);

// --- Main Page Component ---

const ComponentShowcase: React.FC<ComponentShowcaseProps> = ({ locale }) => {
  return (
    <div className="py-5 px-5 bg-gray-50 font-sans min-h-screen">
      <h1 className="text-h1 text-center mb-10">
        ShipX Component Library ({locale})
      </h1>

      {/* --- Placeholder Section --- */}
      <ComponentWrapper title="Placeholder Component">
        <div className="p-12 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50 text-gray-500">
          <p>Import and place your first component here.</p>
        </div>
      </ComponentWrapper>
    </div>
  );
};

export default ComponentShowcase;