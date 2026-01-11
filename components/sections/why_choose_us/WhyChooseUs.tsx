import { cn } from "@/lib/utils"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Badge } from "@/components/Badge"
import { HighlightedHeading } from "@/components/HighlightedHeading"
import { AppButton } from "@/components/AppButton"

export default function WhyChooseUs () {
    return (
        <div className={cn(
            "max-w-[1034px] max-h-[438px]",
            "min-h-[438px]",
            "mx-auto my-relaxed",
            "flex",
            "lg:flex-row flex-col-reverse",
            "lg:px-0 px-relaxed",
            "relative"
        )}>
            {/* left side */}
            <div className={cn(
                "relative",
                "overflow-hidden",
                "lg:w-[50%] w-full",
                "lg:min-h-0 md:min-h-[438px] min-h-[319px]", 
                "lg:h-auto", 
                "rounded-3xl",
            )}>
                <Image
                    src="/why_choose_us/why_choose_us_carousel_image_1.webp"
                    alt="why choose us carousel image"
                    width={1920}
                    height={1080}
                    className={cn(
                        "absolute",
                        "left-1/2 -translate-x-1/2 -top-[50px]",
                        "w-full h-full object-cover",
                        "scale-[190%]"
                    )}
                />
                <div className={cn(
                    "absolute inset-0",
                    "bg-gradient-to-t from-[#0037B6]/40 to-[#2165FF]/5", 
                    "z-0"
                )}/>
            </div>
            
            {/* right side */}
            <div className={cn(
                "flex flex-col",
                "lg:items-end items-center",
                "lg:justify-start justify-center",
                "lg:w-[50%] w-full",
                "lg:mb-0 mb-8"
            )}>
                <Badge>
                    Why Choose Us
                </Badge>
                <HighlightedHeading
                    text="what our ai does for you"
                    highlight="ai"
                />
            </div>

            {/* Swiper panel */}
            <div className={cn(
                "absolute",
                "bottom-0 right-0",
            )}>
                <div
                    className={cn(
                        "relative",
                        "shadow-[0px_1px_24px_-1px_rgba(0,0,0,0.01)]",
                        "backdrop-blur-[2px]",
                        "max-w-[591px] min-h-[211px]",
                        "p-8",
                        "flex flex-col"
                    )}
                    style={{
                        background: 'rgba(255, 255, 255, 0.01)',
                    }}
                >
                    {/* glossy highlight overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/80 to-white/80 pointer-events-none rounded-2xl -z-10" />
                    <span className={cn("text-h5 font-bold font-heading")}>
                        SOUND AI
                    </span>
                    <span className="mt-6 mb-px">
                        Detects internal engine faults and wear that are inaudible to the human ear, preventing future breakdowns
                    </span>
                    <AppButton
                        variant="tertiary"
                        size="sm"
                        rightIcon={<ArrowRight className="size-4" />}
                        className="w-fit self-end"
                    >
                        Visual AI
                    </AppButton>
                </div>
            </div>
        </div>
    )
}