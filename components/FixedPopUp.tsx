'use client';

import { PopUp } from '@/components/PopUp';

interface FixedPopUpProps {
  description?: string;
  features?: string[];
  ctaLabel?: string;
  onClose?: () => void;
  onCtaClick?: () => void;
  imageSrc?: string;
}

export function FixedPopUp({
  description,
  features,
  ctaLabel,
  onClose,
  onCtaClick,
  imageSrc,
}: FixedPopUpProps) {
  return (
    <div className="fixed bottom-6 right-6 left-6 md:left-auto z-50">
      <PopUp
        description={description}
        features={features}
        ctaLabel={ctaLabel}
        onClose={onClose}
        onCtaClick={onCtaClick}
        imageSrc={imageSrc}
      />
    </div>
  );
}
