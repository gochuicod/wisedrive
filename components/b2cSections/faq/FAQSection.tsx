import { DropDown } from '@/components/DropDown';
import { HighlightedHeading } from '@/components/HighlightedHeading';
import { Badge } from '@/components/Badge';
import { Parallax } from '@/components/Parallax';

import { useTranslations } from 'next-intl';

export const FAQSection = () => {
  const t = useTranslations('FAQSection');

  // Create an array of FAQ items from the translations
  const faqItems = Array.from({ length: 14 }, (_, i) => ({
    question: t(`q${i + 1}.question`),
    answer: t(`q${i + 1}.answer`),
  }));

  // Split into two columns (7 items each)
  const column1 = faqItems.slice(0, 7);
  const column2 = faqItems.slice(7, 14);

  return (
    <Parallax speed={0.02}>
      <section
        className="w-full flex px-relaxed py-relaxed mx-auto items-center justify-center"
        id="faqs"
      >
      {/* Outer container */}
      <div className="w-full max-w-[1248px] flex flex-col items-center gap-6 px-4">
        {/* Heading */}
        <div className="w-full flex flex-col md:flex-row gap-8">
          {/* Left Wrapper - Badge & Heading */}
          <div className="flex-1 flex flex-col md:items-start items-center gap-1 flex-grow">
            <Badge size="lg">{t('badge_text')}</Badge>
            <HighlightedHeading
              text={t('heading')}
              highlight={t('heading_highlighted_word')}
              className="font-heading md:text-start text-center"
            />
          </div>

          {/* Right Wrapper - Subtitle */}
          <div className="flex-1 flex items-center flex-grow">
            <p className="text-body md:text-start text-center">
              {t('subtitle')}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="w-full flex flex-col md:flex-row gap-8">
          {/* Column 1 */}
          <div className="flex-1 border border-[#D1D5DC] rounded-2xl overflow-hidden flex flex-col h-fit">
            {column1.map((faq, index) => (
              <DropDown
                key={index}
                title={faq.question}
              >
                <p className="font-poppins text-[16px] text-[#364153]">
                  {faq.answer}
                </p>
              </DropDown>
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex-1 border border-[#D1D5DC] rounded-2xl overflow-hidden flex flex-col h-fit">
            {column2.map((faq, index) => (
              <DropDown key={index + 7} title={faq.question}>
                <p className="font-poppins text-[16px] text-[#364153]">
                  {faq.answer}
                </p>
              </DropDown>
            ))}
          </div>
        </div>
      </div>
    </section>
    </Parallax>
  );
};

export default FAQSection;
