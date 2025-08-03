import { TextSectionProps } from "@/types/ui";
import clsx from "clsx";
import { JSX, ElementType } from "react";
import TitleElement from "../ui/TitleElement";
import TextElement from "../ui/TextElement";
import BlurbList from "../modules/blurb/BlurbList";

const TextSection = <Text extends ElementType = "p"> ({
    sectionProps,
    containerProps,
    title,
    text,
    blurbList,
    moduleList,
    button,
}: TextSectionProps<Text>): JSX.Element => {
    const { className: sectionClassName, ...sectionPropsRest } = sectionProps ?? {};
    const { className: containerClassName, ...containerPropsRest } = containerProps ?? {};

    return (
        <section className={clsx("tpg-section text-section", sectionClassName)} {...sectionPropsRest}>
            <div className={clsx("tpg-container text-container-wrapper", containerClassName)} {...containerPropsRest}>
                {title && <TitleElement {...title} />}

                {text && <TextElement {...text} />}

                {blurbList && <BlurbList {...blurbList} />}

                {moduleList && moduleList.map((Module, index) => (
                    <div key={index} className="module-item">
                        {Module}
                    </div>
                ))}

                {button && (
                    <div className="text-center mt-12 mb-2">
                        <TextElement {...button} />
                    </div>
                )}

            </div>
            
        </section>
    )
}

export default TextSection;