import { HighlightedHeading, Highlight } from "@/components/HighlightedHeading";
import { Badge } from "@/components/Badge";
import Image from "next/image";

const WiseDriveAdvantage = () => (
  <Image
    src="/advantage/wd-advantage.webp"
    alt="WiseDrive Advantage Image"
    width={716}
    height={490}
    className="w-full h-full"
  />
);

export const FAQSection = () => {
  return (
    <section className="w-full flex px-relaxed py-relaxed mx-auto items-center justify-center">
      {/* Outer container */}
      <div className="w-full max-w-[1248px] flex flex-col items-center justify-center gap-6 px-4">
        {/* Heading */}
        <div className="w-full flex flex-col lg:flex-row gap-8 items-center ">          
         {/* Left Wrapper - Badge & Heading */}
          <div className="flex-1 flex flex-col lg:items-start items-center gap-2 flex-grow">
            <div className="flex flex-col gap-1 lg:items-start items-center">
             <Badge size="lg">The Wisedrive Advantage</Badge>
              <HighlightedHeading className="text-h4 font-heading font-bold text-center lg:text-left">
                {/* Tablet (md): Single line */}
                <span className="hidden md:inline lg:hidden">Where Human Expertise Meets <Highlight>AI technology</Highlight></span>
                {/* Desktop (lg+): Two lines with break */}
                <span className="hidden lg:inline">Where Human Expertise Meets <br/> <Highlight>AI technology</Highlight></span>
                {/* Mobile (< md): Two lines with break */}
                <span className="inline md:hidden">Where Human Expertise Meets <Highlight>AI technology</Highlight></span>
              </HighlightedHeading>
            </div>
            <p>Our inspection is powered by the expertise of our professional inspectors backed by AI technology built from over one million data points. Together, Wisedrive gives you a report you can completely trust</p>
          </div>

          {/* Right Wrapper - Image */}
          <div className="flex-1 flex items-center flex-grow w-full h-full">
                <WiseDriveAdvantage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
