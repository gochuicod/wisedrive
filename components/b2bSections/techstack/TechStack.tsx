import { DropDown } from "@/components/DropDown";
import { HighlightedHeading, Highlight } from "@/components/HighlightedHeading";
import { Badge } from "@/components/Badge";

export const TechStack = () => {
  return (
    <section className="w-full flex px-relaxed py-relaxed mx-auto items-center justify-center">
      {/* Outer container */}
      <div className="w-full max-w-[1248px] flex flex-col items-center gap-6">
        
        {/* Heading */}
        <div className="w-full flex flex-col md:flex-row gap-8">          
         {/* Left Wrapper - Badge & Heading */}
          <div className="flex-1 flex flex-col items-center gap-2">
            <HighlightedHeading className="text-h4 font-heading font-bold">
              The Wisedrive Tech Stack: How We Validate Assets
            </HighlightedHeading>
              <p className="font-poppins text-[16px] text-[#1E2939] leading-[19px]">
              Beyond simple visual checks. We use proprietary technology to uncover the mechanical and financial reality of every asset.
            </p>
          </div>

        </div>

        {/* Content */}
        <div className="w-full flex flex-col md:flex-row gap-8 py-6">
          
          {/* Column 1 */}
          <div className="flex-1 border-none rounded-2xl overflow-hidden flex flex-col h-fit gap-2">
            <DropDown title="What does an AI-powered inspection include?" variant="gradient">
              <p>
                Placeholder content for this FAQ item.
              </p>
            </DropDown>

            <DropDown title="How long does the inspection take?" variant="gradient">
              <p>
                Placeholder content for this FAQ item.
              </p>
            </DropDown>

            <DropDown title="What areas of the home are inspected?" variant="gradient">
              <p>
                Placeholder content for this FAQ item.
              </p>
            </DropDown>

            <DropDown title="Do I get a detailed report?" variant="gradient">
              <p>
                Placeholder content for this FAQ item.
              </p>
            </DropDown>
          </div>

          {/* Column 2 */}
          <div className="flex-1 border-none rounded-2xl overflow-hidden flex flex-col h-fit gap-2">

          </div>

        </div>
      </div>
    </section>
  );
};

export default TechStack;
