import { HighlightedHeading, Highlight } from "@/components/HighlightedHeading";
import { FeatureStat } from "@/components/FeatureStat";

export const FAQSection = () => {
  return (
    <section className="w-full flex px-tight py-relaxed mx-auto items-center justify-center">
      {/* Outer container */}
      <div className="w-full max-w-[1248px] flex flex-col items-center gap-10 px-4">
        
        {/* Heading */}
          <div className="flex flex-col items-center gap-1 flex-grow">
            <HighlightedHeading className="md:text-h4 font-heading font-bold text-center">
              Wisedrive is the new standard of <Highlight>trust & accuracy?</Highlight>
            </HighlightedHeading>
          </div>

        {/* Content */}

        <div className="w-full h-full lg:min-h-[608px] md:min-h-[508px] min-h-[700px] flex flex-row gap-4 lg:gap-8 justify-center">
          
          {/* Left Col */}
          <div className="flex md:flex-row justify-start flex-col gap-4 lg:gap-8">
          {/* Card 1: Engine */}
          <div className="flex items-center justify-center">
            <FeatureStat 
              value="20x"
              label="more accurate engine analysis"
              image="/featurestat/engine.webp"
            />
          </div>

          {/* Card 2: Engine */}
          <div className="flex items-end justify-center">
            <FeatureStat 
              value="95%"
              label="reduction in human error"
              image='/featurestat/headlight.webp'
            />
          </div>
          </div>

        {/* Right Col */}
          <div className="flex md:flex-row justify-end flex-col gap-4 lg:gap-8">
          {/* Card 1: Engine */}
          <div className="flex items-start justify-center">
            <FeatureStat 
              value="75%"
              label="faster reporting"
              image="/featurestat/seat.webp" 
            />
          </div>

          {/* Card 2: Engine */}
          <div className="flex items-center justify-center">
            <FeatureStat 
              value="99%"
              label="diagnostic accuracy"
              image="/featurestat/wheel.webp" 
            />
          </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
