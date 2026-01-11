'use client';

import { AppButton } from '@/components/AppButton';
import { FunnelCard } from '@/components/FunnelCard';
import { useEffect, useState } from 'react';
import { ExternalLink, MessageSquareText } from 'lucide-react';

const CTA1 = () => {
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsLarge(window.innerWidth >= 1024);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return (
    <div className="flex flex-col items-center w-full px-relaxed py-relaxed gap-8 mx-auto">
      <div className="flex flex-col md:flex-col lg:flex-row w-full gap-8 lg:max-w-6xl mx-auto">
        {/* Card 1: Individual */}
        <div className="w-full md:w-full lg:w-2/5">
          <FunnelCard 
            title="Representing a Dealership or Bank?"
            backgroundImage="/cta/wd-funnel-cta.webp"
          >
            <AppButton 
                onClick={() => alert('Button Clicked')}
                rightIcon={<ExternalLink className="text-white" size={16} />}
                size='sm'
                className='px-4 py-2 lg:px-2'

                >
                Partner With Us
                </AppButton>
          </FunnelCard>
        </div>

        {/* Card 2: Dealership */}
        <div
        className="relative w-full md:w-full lg:w-4/5 flex flex-col items-center justify-center p-8 gap-6 rounded-2xl overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url(/cta/wd-cta-1-bg.webp)" }}
        >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#003ECC]/80 via-[#13398F]/60 to-[#13398F]/30 z-0" />

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-col lg:flex-row items-center justify-center lg:justify-between md:justify-center gap-6 w-full">
            {/* Content */}
            <div className="flex flex-col lg:items-start items-center gap-4 lg:max-w-sm">
                <h5 className="font-heading font-bold text-xl md:text-2xl leading-7 tracking-wider uppercase text-white text-center md:text-left">
                    Having DoubtS on a Car? <br /> Get a <span className='text-[--accent-500]'>Free Consultation.</span>
                </h5>
                <p className="font-body font-normal md:text-base text-xs leading-5 text-white text-center md:text-left">
                    Get a free, no-obligation consultation to answer your questions instantly.
                </p>
            </div>

            {/* Action button wrapper */}
            <div className="flex flex-col gap-2 md:gap-4">
            <AppButton
                onClick={() => alert('Button Clicked')}
                leftIcon={<MessageSquareText className="text-white" size={16} />}
                variant="glass"
                size={isLarge ? "lg" : "sm"}
                className="px-4 py-2 md:px-6 md:py-3 lg:text-base md:text-xl"
            >
                Request Free Callback
            </AppButton>
            </div>
        </div>
        </div>

        
      </div>
    </div>
  );
};

export default CTA1;
