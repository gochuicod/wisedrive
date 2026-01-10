import { cn } from "@/lib/utils"
import Image from "next/image"
import { CarFront, ShieldPlus, Coins, Store, SquareArrowOutUpRight } from "lucide-react"

import { HighlightedHeading } from "@/components/HighlightedHeading"
import { AppButton } from "@/components/AppButton"

const pillClasses = "flex flex-row gap-2 bg-primary-50 px-6 py-2 text-body-md items-center"

export default function EnterpriseSolutions () {
    return (
        <div className={cn(
            "flex flex-col",
            "w-full",
            "gap-4",
            "my-relaxed"
        )}>
            {/* Heading and description */}
            <div className={cn(
                "flex flex-col",
                "items-center",
                "gap-px",
                "px-relaxed"
            )}>
                <HighlightedHeading
                    text="We power the industry, not just buyers."
                    className="text-center"
                />
                <p className={cn(
                    "md:w-[45%] w-full",
                    "text-center"
                )}>
                    Join the network of insurers, banks, and dealerships using Wisedrive to prevent fraud, protect your car portfolio, and automate inspections.
                </p>
            </div>
            {/* Items */}
            <div className={cn("flex flex-col", "md:gap-4 gap-2", "text-primary-semantic")}>
                <div className={cn("flex md:flex-row flex-col", "md:gap-0 gap-2")}>
                    <span className={cn(
                        pillClasses,
                        "md:w-[55%] w-[90%] justify-end me-4 rounded-e-full self-start"
                    )}>
                        <CarFront className="size-6" />
                        Dealership Networks & OEMs
                    </span>
                    <span className={cn(
                        pillClasses,
                        "md:w-[45%] w-[90%] justify-start rounded-s-full self-end"
                    )}>
                        <ShieldPlus className="size-6" />
                        Insurance Companies
                    </span>
                </div>
                <div className={cn("flex md:flex-row flex-col", "md:gap-0 gap-2")}>
                    <span className={cn(
                        pillClasses,
                        "md:w-[45%] w-[80%] justify-end me-4 rounded-e-full self-start"
                    )}>
                        <Coins className="size-6" />
                        Bank & Financiers
                    </span>
                    <span className={cn(
                        pillClasses,
                        "md:w-[55%] w-[90%] justify-start rounded-s-full self-end"
                    )}>
                        <Store className="size-6" />
                        Marketplaces & Platforms
                    </span>
                </div>
            </div>
            {/* Highlight Image */}
            <Image
                src="/enterprise_solutions/highlight_image.webp"
                alt="Enterprise solutions"
                width={1920}
                height={1080}
                className="max-w-[1248px] aspect-[3.5/0.8] mx-auto w-full"
            />
            {/* CTA Button */}
            <AppButton
                variant="default"
                size="md"
                leftIcon={<SquareArrowOutUpRight className="size-4" />}
                className="w-fit mx-auto"
            >
                Explore Enterprise Solutions
            </AppButton>
        </div>
    )
}