import Image from "next/image";
import { DropDown } from "@/components/DropDown";
import { HighlightedHeading } from "@/components/HighlightedHeading";

export const TechStack = () => {
  return (
    <section className="w-full flex px-tight py-relaxed mx-auto items-center justify-center">
      {/* Outer container */}
      <div className="w-full max-w-[1248px] flex flex-col items-center gap-6">
        
        {/* Heading */}
        <div className="w-full flex flex-col md:flex-row gap-8">          
         {/* Left Wrapper - Badge & Heading */}
          <div className="flex-1 flex flex-col items-center gap-2">
              <HighlightedHeading
                text="The Wisedrive Tech Stack: How We Validate Assets"
              />
              <p className="font-poppins text-[16px] text-[#1E2939] leading-[19px] text-center">
              Beyond simple visual checks. We use proprietary technology to uncover the mechanical and financial reality of every asset.
            </p>
          </div>

        </div>

        {/* Content */}
        <div className="w-full flex lg:min-h-[600px] md:min-h-[500px] flex-col-reverse md:flex-row gap-6 py-6 items-center pt-0 pb-20 md:px-10 px-0">
          
          {/* Column 1 */}
          <div className="flex-1 h-fit border-none rounded-2xl flex flex-col gap-2 items-end justify-center md:pt-0 pt-[200px]">
            <DropDown title="Deep ECU & OBD-II Diagnostics" variant="gradient">
              <p>
                We don't just listen to the engine; we interrogate the onboard computer. 
                Our scanners analyze live data streams for hidden fault codes, transmission slippage, and historical error logs that standard visual inspections miss.
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
          <div className="flex-1 relative overflow-visible w-full h-fit ">
            <Image
              src="/techstack/tech-stack.webp"
              alt="Tech Stack Visualization"
              width={1920}
              height={1080}
              className="absolute overflow-visible lg:-right-[180px] lg:-top-[200px] md:-right-[140px] md:-top-[180px] -right-14  object-cover lg:w-[900px] lg:h-[600px] md:w-[650px] md:h-[350px] w-[320px] h-[220px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechStack;
