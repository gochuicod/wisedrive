'use client';

import React from "react";
import { BaseModelCard } from "@/styles/modelcard";

export interface ModelCardProps {
  title: string;
  subtitle: string;
  image: string;
  buttonText?: string;
  onAction?: () => void;
  className?: string;
}

export const ModelCard: React.FC<ModelCardProps> = ({
  title,
  subtitle,
  image,
  buttonText = "Explore",
  onAction,
  className,
}) => {
  return (
    <BaseModelCard
      title={title}
      subtitle={subtitle}
      imageSrc={image}
      buttonText={buttonText}
      onButtonClick={onAction}
      className={className}
    />
  );
};