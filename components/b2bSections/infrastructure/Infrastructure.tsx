'use client';

import { useState, useEffect } from 'react';
import { Coins, Aperture, Workflow, Store } from 'lucide-react';
import { HighlightedHeading } from '@/components/HighlightedHeading';
import { AppButton } from '@/components/AppButton';
import { InfrastructureCard } from '@/components/InfrastructureCard';
import { cards } from '@/constants';

const buttons = [
  { label: 'Banks and Financiers', icon: <Coins size={20} /> },
  { label: 'Insurance Companies', icon: <Aperture size={20} /> },
  { label: 'Dealership Networks & OEMs', icon: <Workflow size={20} /> },
  { label: 'Marketplaces & Platforms', icon: <Store size={20} /> },
];

export const Infrastructure = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      className="w-full flex px-relaxed py-relaxed mx-auto items-center justify-center overflow-hidden"
      id="audience"
    >
      {/* Outer container */}
      <div className="w-full max-w-[1248px] flex flex-col items-center gap-12">
        {/* Header Section */}
        <div className="w-full md:max-w-[686px] lg:md:max-w-[1248px] flex flex-col gap-8 items-center justify-center">
          <div className="flex-1 flex flex-col items-center gap-2">
            <HighlightedHeading
              text="Infrastructure for the Automotive Ecosystem"
              className="font-heading text-center"
            />
            <p className="font-poppins text-[16px] text-[#1E2939] leading-[19px] text-center">
              Secure your assets and streamline operations with data
              infrastructure tailored to your sector.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-row gap-2 md:gap-4 flex-wrap justify-center items-center max-w-[1000px]">
            {buttons.map((button, index) => (
              <AppButton
                key={index}
                variant={activeTab === index ? 'default' : 'tertiary'}
                size={isMobile ? 'sm' : 'lg'}
                onClick={() => setActiveTab(index)}
                leftIcon={button.icon}
              >
                {button.label}
              </AppButton>
            ))}
          </div>
        </div>

        {/* Content Section - The Card */}
        <div className="w-full max-w-[1248px] flex justify-center mt-4">
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
