import Image from 'next/image';
import { HighlightedHeading } from '@/components/HighlightedHeading';
import ContactForm from '@/components/ContactForm';

export const Contact = () => {
  return (
    <section
      className="w-full flex md:px-relaxed md:py-relaxed px-tight mx-auto items-center justify-center"
      id="contact-us"
    >
      {/* Content */}
      <div className="w-full max-w-[1248px] flex flex-col lg:flex-row md:flex-col gap-8 items-center justify-center">
        {/* Column 1 */}
        <div className="flex-1 flex flex-col w-full h-full">
          <Image
            src="/contact/contact.webp"
            alt="Contact Image"
            width={1440}
            height={1080}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Column 2 */}
        <div className="flex-1 flex flex-col bg-gradient-to-r from-white to-[#E4F7FF]/60 rounded-2xl p-8 md:py-16 md:px-12 justify-center items-center text-center gap-2">
          <HighlightedHeading
            text="Let’s Engineer Your Asset Risk Solution."
            className="font-heading text-center"
          />
          <p className="font-poppins text-[16px] text-[#1E2939] leading-[24px] text-center">
            Every enterprise workflow involves different risk parameters. Tell
            us your requirements, and we will demonstrate how our data layer
            integrates to protect your bottom line.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
