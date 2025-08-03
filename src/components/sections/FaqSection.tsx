import { FaqSectionProps } from "@/types/ui";
import clsx from "clsx";
import { JSX } from "react";
import FaqList from "../modules/faq/FaqList";
import { globalFaqItems } from "@/constants/faq";
import { FaqListProps } from "@/types/modules/faq";

const FaqSection = ({
    sectionProps,
    title,
    faqList,
}: FaqSectionProps): JSX.Element => {
    const { className, ...sectionPropsRest } = sectionProps ?? {};

    let prepareFaq: FaqListProps = faqList ?? {faqs: globalFaqItems};

    if ( !faqList ) {
        prepareFaq = {
            faqs: globalFaqItems,
        }
    } 

    return (
        <section className={clsx("faq", className)} {...sectionPropsRest}>
            <div className="w-container">
                <div className="div-block-10">
                <div
                    className="div-block-9"
                    data-w-id="77a48426-fb73-2c91-16f5-61f13d961bb2"
                    style={{ opacity: 0 }}>
                    <h2 className="heading-6">{title || "Frequently Asked Questions"}</h2>
                </div>

                    <FaqList {...prepareFaq} />

                </div>
            </div>
        </section>

    )
}

export default FaqSection;