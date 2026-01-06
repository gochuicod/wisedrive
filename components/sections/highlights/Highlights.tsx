import React from "react";
import Image from "next/image";
import { IconBox } from "@/components/IconBox"; // Adjust path to where your IconBox is located

const HIGHLIGHT_ITEMS = [
  {
    id: 1,
    title: "AI-Powered", // Placeholder based on 'data' icon
    description: "Our AI sees and hears what most might miss, saving you from expensive repairs",
    iconSrc: "/icons/iconBox/data.svg",
    alt: "AI-Powered Icon",
  },
  {
    id: 2,
    title: "Fast Inspection", // Placeholder based on 'clock' icon
    description: "A complete 200+ point audit just under 90 mins, speeding up your buying decision.",
    iconSrc: "/icons/iconBox/clock.svg",
    alt: "Inspection Icon",
  },
  {
    id: 3,
    title: "Instant Report", 
    description: "Your detailed, easy-to-read report is ready the moment we're done.",
    iconSrc: "/icons/iconBox/report.svg",
    alt: "Report Icon",
  },
  {
    id: 4,
    title: "200+ Point Audit", 
    description: "A rigorous, unbiased protocol, ensuring consistent results you can trust.",
    iconSrc: "/icons/iconBox/audit.svg",
    alt: "Audit Icon",
  },
  {
    id: 5,
    title: "Fraud Protection",
    description: "We verify mileage and data to protect you from tampering and false claims.",
    iconSrc: "/icons/iconBox/fraud.svg",
    alt: "Fraud Prevention Icon",
  },
  {
    id: 6,
    title: "Objective Image Data", 
    description: "AI scans photos for hidden repairs, giving you undeniable visual proof.",
    iconSrc: "/icons/iconBox/data.svg",
    alt: "Objective Image Data Icon",
  },
];

export const Highlights: React.FC = () => {
  return (
    <section className="flex flex-col items-center w-full px-tight lg:mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10 w-full md:w-fit lg:w-fit justify-items-center">
        {HIGHLIGHT_ITEMS.map((item) => (
          <React.Fragment key={item.id}>
            <IconBox
              className="lg:hidden"
              size="sm"
              title={item.title}
              description={item.description}
              icon={
                <Image
                  src={item.iconSrc}
                  alt={item.alt}
                  width={84}
                  height={79}
                  style={{ objectFit: "contain" }}
                />
              }
            />
            <IconBox
              className="hidden lg:block"
              size="lg"
              title={item.title}
              description={item.description}
              icon={
                <Image
                  src={item.iconSrc}
                  alt={item.alt}
                  width={84}
                  height={79}
                  style={{ objectFit: "contain" }}
                />
              }
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Highlights;