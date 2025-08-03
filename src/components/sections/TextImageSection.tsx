import { JSX } from "react";
import { TextImageSectionProps } from "@/types/ui";
import BlurbList from "../modules/blurb/BlurbList";
import ImageElement from "../ui/ImageElement";
import TextElement from "../ui/TextElement";
import clsx from "clsx";
import TitleElement from "../ui/TitleElement";

const TextImageSection = ({
    sectionProps,
    containerProps,
    infoContentContainerProps,
    colRightProps,
    colLeftProps,
    sectionType = "default",
    title,
    description,
    image,
    imageSide="left",
    button,
    blurbList,
}: TextImageSectionProps): JSX.Element => {
    const { className: sectionClassName, ...sectionPropsRest } = sectionProps ?? {};
    const { className: containerClassName, ...containerPropsRest } = containerProps ?? {};
    const { className: infoContentContainerClassName, ...infoContentContainerPropsRest } = infoContentContainerProps ?? {};
    const { className: colRightClassName, ...colRightPropsRest } = colRightProps ?? {};
    const { className: colLeftClassName, ...colLeftPropsRest } = colLeftProps ?? {};

    let sectionTypeClass = "default-section";
    if ( sectionType === "full-width" ) sectionTypeClass = "full-width-section";

    return (
        <section className={clsx(`tpg-section info-section ${sectionTypeClass}`, sectionClassName)} {...sectionPropsRest}>
            <div className={clsx("tpg-container", containerClassName)} {...containerPropsRest}>
                <div 
                className={clsx("info-content", infoContentContainerClassName)} 
                {...infoContentContainerPropsRest}>
                    <div className={clsx("info-image", 
                        imageSide === "right" ? `${colLeftClassName} order-1 md:order-2` : `${colLeftClassName} order-1 md:order-2`
                    )} {...colLeftPropsRest}>
                        <ImageElement {...image} />
                    </div>
                    <div className={clsx("info-text", 
                        imageSide === "right" ? `${colRightClassName} order-2 md:order-1` : `${colRightClassName} order-1 md:order-2`
                    )} {...colRightPropsRest}>
                        <TitleElement {...{heading: "h2", ...title}} />
                        
                        {description && (
                            <div className="info-description">
                                {description}
                            </div>
                        )}

                        {blurbList && <BlurbList {...blurbList} />}

                        {button && (
                            <div className="info-cta-button">
                                <TextElement {...button} />
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default TextImageSection;