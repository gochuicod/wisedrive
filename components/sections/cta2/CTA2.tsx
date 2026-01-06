'use client';

import { AppButton } from '@/components/AppButton';
import { FunnelCard } from '@/components/FunnelCard';

const ExternalLinkIcon = ({ className }: { className?: string }) => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 16 16" 
    fill="none" 
    className={className} 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M13.3333 13.3333H2.66667V2.66667H8V1.33333H2.66667C1.92667 1.33333 1.33333 1.93333 1.33333 2.66667V13.3333C1.33333 14.0667 1.92667 14.6667 2.66667 14.6667H13.3333C14.0667 14.6667 14.6667 14.0667 14.6667 13.3333V8H13.3333V13.3333ZM9.33333 1.33333V2.66667H12.3933L4.98 10.08L5.92 11.02L13.3333 3.60667V6.66667H14.6667V1.33333H9.33333Z" 
      fill="currentColor"
    />
  </svg>
);

const CTA1 = () => {
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
                rightIcon={<ExternalLinkIcon className="text-white" />}
                size='sm'
                className='px-4 py-2 lg:px-2'

                >
                Book Your Inspection
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
                leftIcon={<ExternalLinkIcon className="text-white" />}
                variant="glass"
                size="lg"
                className="px-4 py-2"
            >
                Speak to an expert
            </AppButton>
            </div>
        </div>
        </div>

        
      </div>
    </div>
  );
};

export default CTA1;
