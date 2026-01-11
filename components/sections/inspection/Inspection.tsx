import { cn } from "@/lib/utils"
import { Calendar, MessageSquare } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"

import { HighlightedHeading } from "@/components/HighlightedHeading"
import { AppButton } from "@/components/AppButton"
import Checkbox from "@/components/Checkbox"

export default function Inspection () {
    const t = useTranslations("Inspection");
    const items = t("checkbox_items_text").split("|");

    return (
        <section className={cn("p-relaxed my-36")}>
            <div
                className={cn(
                    "flex flex-col",
                    "rounded-3xl",
                    "max-w-[1248px]",
                    "max-h-[617px]",
                    "bg-gray-100",
                    "mx-auto",
                    "shadow-inspection-card-glow",
                    "p-6",
                    "gap-6"
                )}
            >
                {/* Top part */}
                <div
                    className={cn(
                        "w-full",
                        "md:aspect-[4/1] aspect-[5/1]",
                        "text-white",
                        "bg-[url('/inspection/bg_image.webp')] bg-no-repeat bg-cover bg-center",
                        "rounded-3xl",
                        "relative overflow-visible"
                    )}
                >
                    <Image
                        width={1920}
                        height={1080}
                        src="/inspection/bg_image_offset.webp"
                        alt="inspection car image"
                        className={cn(
                            "absolute",
                            "w-full", 
                            "h-auto", 
                            "left-1/2 -translate-x-1/2",
                            "-bottom-[15%] md:-bottom-[5%] lg:-bottom-[5%]" 
                        )}
                    />
                </div>
                {/* Bottom part */}
                <div className={cn(
                    "flex md:flex-row flex-col",
                    "px-4",
                    "gap-4"
                )}>
                    {/* left part */}
                    <div className={cn("flex flex-col", "md:w-[50%] w-full", "gap-4")}>
                        <HighlightedHeading
                            text={t("heading")}
                            highlight={t("heading_highlighted_word")}
                            className={cn("lg:w-[70%] w-full", "md:text-start text-center")}
                        />
                        <span
                            className={cn(
                                "text-body text-body-md",
                                "md:text-start text-center"
                            )}
                        >
                            {t("description")}
                        </span>
                        {/* cta buttons */}
                        <div className={cn("flex", "lg:flex-row flex-col", "w-fit", "gap-4", "md:mx-0 mx-auto")}>
                            <AppButton
                                variant="default"
                                size="sm"
                                leftIcon={<Calendar className="size-4" />}
                            >
                                {t("book_your_inspection_button")}
                            </AppButton>
                            <AppButton
                                variant="tertiary"
                                size="sm"
                                leftIcon={<MessageSquare className="size-4" />}
                            >
                                {t("speak_to_an_expert_button")}
                            </AppButton>
                        </div>
                    </div>
                    {/* right part */}
                    <div 
                        className={cn(
                            "flex flex-col", 
                            "md:w-[50%] w-full", 
                            "justify-center", 
                            "md:items-start items-center" 
                        )}
                    >
                        <div className={cn("flex flex-col gap-2 w-fit")}>
                            {items.map((text, index) => (
                                <Checkbox key={index} text={text} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}