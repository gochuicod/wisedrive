'use client';

import { AppButton } from '@/components/AppButton';
import { IconBox } from '@/components/IconBox';
import { Badge } from '@/components/Badge';
import { DropDown } from '@/components/DropDown';
import { HighlightedHeading, Highlight } from '@/components/HighlightedHeading';

import Image from 'next/image';

// --- Icons (Simple SVG placeholders) ---
const CalendarIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" />
    <path d="M16 2V6" />
    <path d="M8 2V6" />
    <path d="M3 10H21" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
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

      <div className="mb-12 p-8 bg-white rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold mb-6 text-gray-700 border-b pb-2">
          Buttons: All Variants
        </h2>

        {/* Default Variant */}
        <div className="mb-8 p-6 rounded-lg bg-gray-300">
          <h3 className="text-lg font-semibold text-white mb-4">Glass</h3>
          <div className="flex flex-row gap-6 items-center flex-wrap">
            <div className="flex flex-col items-center gap-2">
              <AppButton
                variant="default"
                size="lg"
                rightIcon={<ArrowRightIcon />}
              >
                Default (LG)
              </AppButton>
              <span className="text-xs text-gray-300 font-mono">LG</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <AppButton
                variant="default"
                size="md"
                rightIcon={<ArrowRightIcon />}
              >
                Default (MD)
              </AppButton>
              <span className="text-xs text-gray-300 font-mono">MD</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <AppButton
                variant="default"
                size="sm"
                rightIcon={<ArrowRightIcon />}
              >
                Default (SM)
              </AppButton>
              <span className="text-xs text-gray-300 font-mono">SM</span>
            </div>
          </div>
        </div>

        {/* Glass Variant */}
        <div className="mb-8 p-6 rounded-lg bg-[linear-gradient(132.85deg,#1e1e2e_0%,#4a4a6a_100%)]">
          <h3 className="text-lg font-semibold text-white mb-4">Glass</h3>
          <div className="flex flex-row gap-6 items-center flex-wrap">
            <div className="flex flex-col items-center gap-2">
              <AppButton
                variant="glass"
                size="lg"
                rightIcon={<ArrowRightIcon />}
              >
                Glass (LG)
              </AppButton>
              <span className="text-xs text-gray-300 font-mono">LG</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <AppButton
                variant="glass"
                size="md"
                rightIcon={<ArrowRightIcon />}
              >
                Glass (MD)
              </AppButton>
              <span className="text-xs text-gray-300 font-mono">MD</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <AppButton
                variant="glass"
                size="sm"
                rightIcon={<ArrowRightIcon />}
              >
                Glass (SM)
              </AppButton>
              <span className="text-xs text-gray-300 font-mono">SM</span>
            </div>
          </div>
        </div>

        {/* Secondary Variant */}
        <div className="mb-8 p-6 rounded-lg bg-[linear-gradient(132.85deg,#2BA3FF_0%,#374EFF_99.57%)]">
          <h3 className="text-lg font-semibold text-white mb-4">
            Secondary (Outlined)
          </h3>
          <div className="flex flex-row gap-6 items-center flex-wrap">
            <div className="flex flex-col items-center gap-2">
              <AppButton
                variant="secondary"
                size="lg"
                rightIcon={<ArrowRightIcon />}
              >
                Secondary (LG)
              </AppButton>
              <span className="text-xs text-gray-300 font-mono">LG</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <AppButton
                variant="secondary"
                size="md"
                rightIcon={<ArrowRightIcon />}
              >
                Secondary (MD)
              </AppButton>
              <span className="text-xs text-gray-300 font-mono">MD</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <AppButton
                variant="secondary"
                size="sm"
                rightIcon={<ArrowRightIcon />}
              >
                Secondary (SM)
              </AppButton>
              <span className="text-xs text-gray-300 font-mono">SM</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          SECTION 2: FEATURE ICON BOXES
      ========================================= */}

      <div className="mb-12 p-8 bg-white rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold mb-10 text-gray-700 border-b pb-2">
          Feature Icon Boxes
        </h2>

        {/* Grid to show them side-by-side */}
        <div className="flex flex-wrap items-start justify-center gap-12 bg-gray-50 p-10 rounded-lg border border-dashed border-gray-300">
          {/* 1. Large Variation */}
          <div className="flex flex-col items-center gap-4">
            <IconBox
              size="lg"
              title="Verified Cars"
              description="Every car undergoes a strict 200-point inspection process."
              icon={
                <Image
                  src="/icons/iconBox/audit.svg"
                  alt="Audit"
                  width={96}
                  height={96}
                />
              }
            />
            <span className="text-xs text-blue-500 font-mono mt-4">
              Size: LG (288px)
            </span>
          </div>

          {/* 2. Medium Variation */}
          <div className="flex flex-col items-center gap-4">
            <IconBox
              size="md"
              title="Secure"
              description="Transactions are fully insured and protected."
              icon={
                <Image
                  src="/icons/iconBox/fraud.svg"
                  alt="Fraud Protection"
                  width={96}
                  height={96}
                />
              }
            />
            <span className="text-xs text-blue-500 font-mono mt-4">
              Size: MD (162px)
            </span>
          </div>

          {/* 3. Small Variation */}
          <div className="flex flex-col items-center gap-4 ">
            <IconBox
              size="sm"
              title="Fast"
              description="Quick processing and instant approval."
              icon={
                <Image
                  src="/icons/iconBox/clock.svg"
                  alt="Fast Processing"
                  width={96}
                  height={96}
                />
              }
            />
            <span className="text-xs text-blue-500 font-mono mt-4">
              Size: SM (162px)
            </span>
          </div>
        </div>
      </div>

      {/* =========================================
          SECTION 3: BADGES (Text Tags)
      ========================================= */}

      <div className="mb-12 p-8 bg-white rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold mb-6 text-gray-700 border-b pb-2">
          Badges / Text Tags
        </h2>
        <div className="flex flex-col gap-8 items-start">
          {/* Large */}
          <div className="flex flex-col gap-2">
            <Badge size="lg">Our Brands</Badge>
            <span className="text-xs text-gray-400 font-mono">
              Size: LG | 20px | Tracking 4px
            </span>
          </div>

          {/* Medium */}
          <div className="flex flex-col gap-2">
            <Badge size="md">Our Brands</Badge>
            <span className="text-xs text-gray-400 font-mono">
              Size: MD | 16px | Tracking 2px
            </span>
          </div>

          {/* Small */}
          <div className="flex flex-col gap-2">
            <Badge size="sm">Our Brands</Badge>
            <span className="text-xs text-gray-400 font-mono">
              Size: SM | 16px | Tracking Normal
            </span>
          </div>
        </div>
      </div>

      {/* =========================================
          SECTION 4: DROPDOWNS
      ========================================= */}

      <div className="mb-12 p-8 bg-white rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold mb-10 text-gray-700 border-b pb-2">
          DropDowns (Accordions)
        </h2>

        <div className="flex flex-wrap items-start justify-center gap-12 bg-white p-4">
          {/* 1. Large Variation (501px) */}
          <div className="flex flex-col gap-2">
            <span className="text-xs text-gray-400 font-mono mb-2">
              Size: LG (501px)
            </span>
            <DropDown
              size="lg"
              title="What is the inspection process?"
              defaultOpen={true}
            >
              Our engineers conduct a comprehensive 200-point inspection
              covering the engine, suspension, interior, and exterior to ensure
              the car is in perfect condition before listing.
            </DropDown>
          </div>

          {/* 2. Medium Variation (348px) */}
          <div className="flex flex-col gap-2">
            <span className="text-xs text-gray-400 font-mono mb-2">
              Size: MD (348px) | Justified
            </span>
            <DropDown size="md" title="Is there a warranty?" defaultOpen={true}>
              Yes, all our cars come with a standard 6-month warranty that
              covers major mechanical and electrical components, ensuring you
              have peace of mind with your purchase.
            </DropDown>
          </div>

          {/* 3. Small Variation (358px) */}
          <div className="flex flex-col gap-2">
            <span className="text-xs text-gray-400 font-mono mb-2">
              Size: SM (358px) | Justified
            </span>
            <DropDown size="sm" title="How does financing work?">
              We partner with multiple banks to provide you with the best
              interest rates. The process is paperless and approvals are
              typically received within 24 hours.
            </DropDown>
          </div>
        </div>
      </div>

      <div className="mb-12 p-8 bg-white rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold mb-6 text-gray-700 border-b pb-2">
          Badges / Text Tags
        </h2>
        <div className="flex flex-col gap-8 items-start">
          <HighlightedHeading align="center">
            Where Human Expertise Meets <Highlight>AI technology</Highlight>
          </HighlightedHeading>
        </div>
      </div>

    </div>
  );
};

export default ComponentShowcase;
