import { DropDown } from "@/components/DropDown";
import { HighlightedHeading } from "@/components/HighlightedHeading";
import { Badge } from "@/components/Badge";

import { useTranslations } from "next-intl";

export const FAQSection = () => {
  const t = useTranslations("FAQSection");

  return (
    <section className="w-full flex px-relaxed py-relaxed mx-auto items-center justify-center">
      {/* Outer container */}
      <div className="w-full max-w-[1248px] flex flex-col items-center gap-6 px-4">
        
        {/* Heading */}
        <div className="w-full flex flex-col md:flex-row gap-8">          
         {/* Left Wrapper - Badge & Heading */}
          <div className="flex-1 flex flex-col md:items-start items-center gap-1 flex-grow">
            <Badge size="lg">FAQs</Badge>
            <HighlightedHeading
              text={t("heading")}
              highlight={t("heading_highlighted_word")}
              className="font-heading md:text-start text-center"
            />
          </div>

          {/* Right Wrapper - Subtitle */}
          <div className="flex-1 flex items-center flex-grow">
            <p className="text-body md:text-start text-center">
              {t("subtitle")}
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
