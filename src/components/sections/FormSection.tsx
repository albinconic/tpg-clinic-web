import { FormSectionProps } from "@/types/ui";
import BookNowForm from "../modules/forms/BookNowForm";
import clsx from "clsx";
import TitleElement from "../ui/TitleElement";
import TextElement from "../ui/TextElement";

const FormSection = ({
    sectionProps,
    containerProps,
    title,
    text,
    form,
}: FormSectionProps) => {
    const { className: sectionClassName, ...sectionPropsRest } = sectionProps ?? {};
    const { className: containerClassName, ...containerPropsRest } = containerProps ?? {};

    return (
        <section className={clsx("tpg-section form-section", sectionClassName)} {...sectionPropsRest}>
            <div className={clsx("tpg-container form-container-wrapper", containerClassName)} {...containerPropsRest}>
                 
                 {title && (
                    <TitleElement 
                        heading="h2"
                        className={clsx("tpg-title", title?.className)}
                        {...title} 
                    />
                 )}
                 
                {text && (
                    <TextElement 
                        as="p"
                        className={clsx("hero-subheading-v2", text?.className)}
                        {...text}
                    />
                )}

                <div className="form-content">
                    {form || <BookNowForm />}
                </div>
            </div>
        </section>
    );
}

export default FormSection;