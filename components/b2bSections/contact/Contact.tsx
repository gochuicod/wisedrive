import Image from "next/image";
import { HighlightedHeading } from "@/components/HighlightedHeading";


export const Contact = () => {
  return (
    <section className="w-full flex px-relaxed py-relaxed mx-auto items-center justify-center">
               
        {/* Content */}
        <div className="w-full flex flex-col md:flex-row gap-8">
          
          {/* Column 1 */}
          <div className="flex-1 flex flex-col">
             <Image
               src="/contact/contact.webp"
               alt="Contact Image"
               width={1920}
               height={1080}
               className=""
            />
          </div>

          {/* Column 2 */}
          <div className="flex-1 flex flex-col bg-gradient-to-r from-white to-[#E4F7FF]/60 rounded-2xl p-8 md:py-16 md:px-12 justify-center items-center text-center gap-6">
            <HighlightedHeading className="text-h4 font-heading font-bold text-center">
              Let’s Engineer Your Asset Risk Solution.
            </HighlightedHeading>
            <p className="font-poppins text-[16px] text-[#1E2939] leading-[24px] text-center">
                Every enterprise workflow involves different risk parameters. Tell us your requirements, and we will demonstrate how our data layer integrates to protect your bottom line.
                </p>

          </div>
        </div>
    </section>
  );
};

export default Contact;
