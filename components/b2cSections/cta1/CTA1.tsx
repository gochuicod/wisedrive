'use client';

import { AppButton } from '@/components/AppButton';
import { Calendar, MessageSquareText } from 'lucide-react';

import { HighlightedHeading } from '@/components/HighlightedHeading';

interface CTAProps {
  heading: string;
  highlighted: string;
  subheading: string;
  buttons: boolean;
  button1: string;
  button2: string;
}

const CTA1 = ({
  heading,
  highlighted,
  subheading,
  buttons,
  button1,
  button2,
}: CTAProps) => {
  return (
    <section className="flex flex-col items-center w-full py-relaxed max-w-[1034px] gap-8 mx-auto">
      <div
        className="relative w-full md:w-full lg:w-4/5 flex flex-col items-center justify-center p-8 gap-6 rounded-2xl overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: 'url(/cta/wd-cta-1-bg.webp)' }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#003ECC]/80 via-[#13398F]/60 to-[#13398F]/30 z-0" />

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row lg:flex-row items-center justify-center lg:justify-between gap-6 w-full">
          {/* Left side */}
          <div className="flex flex-col md:items-start items-center">
            <HighlightedHeading
              text="Buy With Confidence, Avoid Regrets"
              textClassName="text-white font-body"
              highlight="Confidence"
              highlightClassName="text-accent-500"
              className="text-h5"
            />
            <HighlightedHeading
              text="Clear insights. Smart decisions. No surprises."
              textClassName="font-light md:text-base text-xs text-white font-heading normal-case tracking-wider"
            />
          </div>

          {/* Action button wrapper */}

          <div className="flex flex-col gap-2 md:gap-4">
            <AppButton
              onClick={() => alert('Button Clicked')}
              leftIcon={<Calendar className="text-white" size={16} />}
              size="sm"
              className="px-4 py-2"
            >
              Book Your Inspection
            </AppButton>

            <AppButton
              onClick={() => alert('Button Clicked')}
              leftIcon={<MessageSquareText className="text-white" size={16} />}
              variant="glass"
              size="sm"
              className="px-4 py-2"
            >
              Speak to an expert
            </AppButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA1;
