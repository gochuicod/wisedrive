import { HighlightedHeading } from "@/components/HighlightedHeading";
import { Badge } from "@/components/Badge";
import Image from "next/image";

import { useTranslations } from "next-intl";

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
  const t = useTranslations("Advantage")

  return (
    <section className="w-full flex px-relaxed py-relaxed mx-auto items-center justify-center">
      {/* Outer container */}
      <div className="w-full max-w-[1248px] flex flex-col items-center justify-center gap-6 px-4">
        {/* Heading */}
        <div className="w-full flex flex-col lg:flex-row gap-8 items-center ">          
         {/* Left Wrapper - Badge & Heading */}
          <div className="flex-1 flex flex-col lg:items-start items-center gap-2 flex-grow">
            <div className="flex flex-col gap-1 lg:items-start items-center">
             <Badge size="lg">
              {t("badge_text")}
             </Badge>
              <HighlightedHeading
                text={t("heading")}
                highlight={t("heading_highlighted_word")}
                className="text-h4 font-heading font-bold text-center lg:text-left max-w-[22ch] lg:max-w-none"
              />
            </div>
            <p>
              {t("description")}
            </p>
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
