import React from "react";
import { BaseHeading, HeadingAlign } from "@/styles/heading";

export interface HighlightedHeadingProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "children"> {
  align?: HeadingAlign;
  text: string;
  highlight?: string;
  textClassName?: string;      // Tailwind class for default text color/style
  highlightClassName?: string; // Tailwind class for highlighted text
}

const escapeRegExp = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// --- Component ---
export const HighlightedHeading: React.FC<HighlightedHeadingProps> = ({
  align,
  text,
  highlight,
  textClassName = "text-header",            // default class for normal text
  highlightClassName = "text-header-accent", // default class for highlighted text
  className,
  ...props
}) => {
  if (!highlight) {
    return (
      <BaseHeading align={align} className={`${textClassName} ${className}`} {...props}>
        {text}
      </BaseHeading>
    );
  }

  const regex = new RegExp(`(${escapeRegExp(highlight)})`, "i");
  const parts = text.split(regex);

  return (
    <BaseHeading align={align} className={className} {...props}>
      {parts.map((part, index) =>
        regex.test(part) ? (
          <span key={index} className={highlightClassName}>
            {part}
          </span>
        ) : (
          <span key={index} className={textClassName}>
            {part}
          </span>
        )
      )}
    </BaseHeading>
  );
};
