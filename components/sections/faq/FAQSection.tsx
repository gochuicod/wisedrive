import React from "react";
import { DropDown } from "@/components/DropDown";
import { HighlightedHeading, Highlight } from "@/components/HighlightedHeading";
import { Badge } from "@/components/Badge";

export const FAQSection = () => {
  return (
    <section className="w-full flex px-relaxed py-relaxed mx-auto items-center justify-center">
      {/* Outer container */}
      <div className="w-full flex flex-col items-center gap-6 px-4">
        
        {/* Heading */}
        <div className="w-full flex flex-col md:flex-row gap-8">          
         {/* Left Wrapper - Badge & Heading */}
          <div className="flex-1 flex flex-col items-start gap-1 flex-grow">
            <Badge size="lg">FAQs</Badge>
            <HighlightedHeading className="text-h4 font-heading font-bold">
              Got Questions about our <br/> <Highlight>inspection?</Highlight>
            </HighlightedHeading>
          </div>

          {/* Right Wrapper - Subtitle */}
          <div className="flex-1 flex items-center flex-grow">
            <p className="font-poppins text-[16px] text-[#1E2939] leading-[19px]">
              Find answers to your questions about our AI-powered inspections and how we protect you from costly, hidden repairs.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="w-full flex flex-col md:flex-row gap-8">
          
          {/* Column 1 */}
          <div className="flex-1 border border-[#D1D5DC] rounded-2xl overflow-hidden flex flex-col h-fit">
            <DropDown title="What does an AI-powered inspection include?" defaultOpen>
              <p className="font-poppins text-[16px] text-[#364153]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is placeholder text for the expanded FAQ content.
              </p>
            </DropDown>

            <DropDown title="How long does the inspection take?">
              <p className="font-poppins text-[16px] text-[#364153]">
                Placeholder content for this FAQ item.
              </p>
            </DropDown>

            <DropDown title="What areas of the home are inspected?">
              <p className="font-poppins text-[16px] text-[#364153]">
                Placeholder content for this FAQ item.
              </p>
            </DropDown>

            <DropDown title="Do I get a detailed report?">
              <p className="font-poppins text-[16px] text-[#364153]">
                Placeholder content for this FAQ item.
              </p>
            </DropDown>
          </div>

          {/* Column 2 */}
          <div className="flex-1 border border-[#D1D5DC] rounded-2xl overflow-hidden flex flex-col h-fit">
            <DropDown title="Is the inspection suitable for older homes?">
              <p className="font-poppins text-[16px] text-[#364153]">
                Placeholder content for this FAQ item.
              </p>
            </DropDown>

            <DropDown title="How soon can I book an inspection?">
              <p className="font-poppins text-[16px] text-[#364153]">
                Placeholder content for this FAQ item.
              </p>
            </DropDown>

            <DropDown title="What makes this different from traditional inspections?">
              <p className="font-poppins text-[16px] text-[#364153]">
                Placeholder content for this FAQ item.
              </p>
            </DropDown>

            <DropDown title="Can I ask follow-up questions?">
              <p className="font-poppins text-[16px] text-[#364153]">
                Placeholder content for this FAQ item.
              </p>
            </DropDown>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
