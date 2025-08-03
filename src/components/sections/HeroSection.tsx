import { HeroSectionProps } from "@/types/ui";
import { JSX } from "react";
import TitleElement from "../ui/TitleElement";
import clsx from "clsx";
import TextElement from "../ui/TextElement";

const HeroSection = ({
    sectionProps,
    containerProps,
    title,
    description,
    button,
}: HeroSectionProps<"a", "div">): JSX.Element => {
    const {className: sectionClassName, ...sectionPropsRest} = sectionProps ?? {};
    const {className: containerClassName, ...containerPropsRest} = containerProps ?? {};

    return (
        <section 
            className={clsx("hero-section", sectionClassName)} 
            {...sectionPropsRest}
        >
            <div 
                className={clsx("hero-content-wrapper", containerClassName)}
                {...containerPropsRest}
            >
                <div className="hero-copy-container">
                    <TitleElement 
                        className="hero-heading-v2" 
                        {...title} 
                    />
                    {description && (
                        <TextElement 
                            as="div"
                            className={clsx("hero-subheading-v2", description?.className)}
                            {...description}
                        />
                    )}
                </div>
                {button && (
                    <TextElement
                        className="cta-button"
                        as="a"
                        {...button}
                    />
                )}
                
            </div>
        </section>
    )
}

export default HeroSection;