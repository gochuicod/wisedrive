"use client";

import { use, useState } from "react";
import { Coins, Aperture, Workflow, Store } from "lucide-react";
import { HighlightedHeading } from "@/components/HighlightedHeading";
import { AppButton } from "@/components/AppButton";
import { InfrastructureCard } from "@/components/InfrastructureCard";

export const Infrastructure = () => {
  const [activeTab, setActiveTab] = useState(0);

  const cards = [
    {
      title: "Banks & Financiers",
      tag: "THE WISEDRIVE ADVANTAGE",
      description: "Secure your Loan-to-Value (LTV) ratios with hard technical data. We verify the true mileage and mechanical condition of collateral before approval. By detecting potential mechanical failures early, we reduce the risk of assets becoming Non-Performing Loans (NPLs) due to sudden depreciation or abandonment by the borrower.",
      image: "/infrastructure/infrastructure1.webp",
    },
    {
      title: "Insurance Companies",
      tag: "THE WISEDRIVE ADVANTAGE",
      description: "Reduce claim fraud and optimize premium calculations with verified vehicle data. Our technology detects odometer tampering and hidden mechanical issues before claims are filed, protecting your bottom line.",
      image: "/infrastructure/infrastructure2.webp",
    },
    {
      title: "Dealership Networks & OEMs",
      tag: "THE WISEDRIVE ADVANTAGE",
      description: "Enhance used vehicle inventory management and warranty claims processing. Verify true vehicle condition and maintenance history to improve customer satisfaction and reduce warranty costs.",
      image: "/infrastructure/infrastructure3.webp",
    },
    {
      title: "Marketplaces & Platforms",
      tag: "THE WISEDRIVE ADVANTAGE",
      description: "Build trust with buyers through transparent vehicle reports. Our technical data verification increases conversion rates and reduces post-purchase disputes on your platform.",
      image: "/infrastructure/infrastructure4.webp",
    },
  ];

  const buttons = [
    { label: "Banks and Financiers", icon: <Coins size={20} /> },
    { label: "Insurance Companies", icon: <Aperture size={20} /> },
    { label: "Dealership Networks & OEMs", icon: <Workflow size={20} /> },
    { label: "Marketplaces & Platforms", icon: <Store size={20} /> },
  ];
  return (
    <section className="w-full flex px-relaxed py-relaxed mx-auto items-center justify-center overflow-hidden">
      {/* Outer container */}
      <div className="w-full max-w-[1248px] flex flex-col items-center gap-12">
        
        {/* Header Section */}
        <div className="w-full flex flex-col gap-8 items-center justify-center">          
          <div className="flex-1 flex flex-col items-center gap-2">
            <HighlightedHeading
              text="Infrastructure for the Automotive Ecosystem"
              className="font-heading text-center"
            />
            <p className="font-poppins text-[16px] text-[#1E2939] leading-[19px] text-center">
              Secure your assets and streamline operations with data infrastructure tailored to your sector.
            </p>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex flex-row gap-4 flex-wrap justify-center items-center max-w-[1000px]">
            {buttons.map((button, index) => (
              <AppButton 
                key={index}
                variant={activeTab === index ? "default" : "tertiary"}
                onClick={() => setActiveTab(index)}
                leftIcon={button.icon}
              >
                {button.label}
              </AppButton>
            ))}
          </div>
        </div>

        {/* Content Section - The Card */}
        <div className="w-full flex justify-center mt-4">

           <InfrastructureCard 
             title={cards[activeTab].title}
             tag={cards[activeTab].tag}
             description={cards[activeTab].description}
             image={cards[activeTab].image}
           />
        </div>

      </div>
    </section>
  );
};

export default Infrastructure;