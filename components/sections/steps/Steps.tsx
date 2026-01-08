import { HighlightedHeading, Highlight } from "@/components/HighlightedHeading";
import { StepCard } from "@/components/StepCard";
import { Disclaimer } from "@/components/Disclaimer";

export const Steps = () => {
  return (
    <section 
      className="w-full flex flex-col px-tight lg:py-tight py-relaxed mx-auto items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url(/stepsSection/wisedrive-steps-section.webp)" }}
    >
      {/* Outer container */}
      <div className="w-full max-w-[1248px] flex flex-col items-center justify-center gap-6 px-4">
               {/* Heading */}
                <div className="w-full flex flex-col md:flex-row gap-8">          
                  {/* Left Wrapper - Badge & Heading */}
                  <div className="flex-1 flex flex-col md:items-start items-center gap-2 flex-grow">
                    <HighlightedHeading className="text-h4 font-heading font-bold text-center md:text-left text-white">
                      Buy Your Car <br/> With Total <Highlight className="text-accent-500" >Confidence</Highlight>
                    </HighlightedHeading>
                    <Disclaimer />
                  </div>                  {/* Right Wrapper - Subtitle */}
                  <div className="flex-1 flex flex-col md:items-start items-center flex-grow text-center md:text-left gap-4">
                    <p className="font-poppins text-[16px] text-white leading-[19px]">
                      Have questions or ready to book? 
                    </p>
                     <p className="font-poppins text-[16px] text-white leading-[19px]">
                      Send “Hi” to <span className="text-accent-500 font-bold">+60 12 255 9610</span> on WhatsApp. Our experts are ready to schedule your inspection or assist you with your purchase.
                    </p>
                  </div>
                </div>
      </div>

      <div className="flex flex-wrap md:flex-row items-start justify-center gap-6 mt-8 w-full mx-auto md:flex-nowrap">
          {/* Step 1 */}
          <StepCard heading="01. Buy the Plan">
            <p>Pay online in minutes.</p>
          </StepCard>

          {/* Step 2 */}
          <StepCard heading="02. Schedule">
            <p>Pick a time/place (home, dealer, seller’s location) via web or WhatsApp.</p>
          </StepCard>

          {/* Step 3 (From your Figma Data) */}
          <StepCard heading="03. Inspection">
            <p>Physical checks + OBD-II/ECM/BCM scans + photo-AI exterior review.</p>
            <p>We call out critical faults, repair estimates, and fair price guidance.</p>
          </StepCard>

         {/* Step 3 (From your Figma Data) */}
          <StepCard heading="04. Report">
            <p>Get a mobile-friendly link with photos, diagnostics, and next steps. Cars that pass get Wisedrive-Certified.</p>
          </StepCard>

          
      </div>
    </section>
  );
};

export default Steps;
