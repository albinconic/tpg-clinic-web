import { ElementType, JSX } from "react";
import { CallToActionSectionProps } from "@/types/ui";
import TextElement from "../ui/TextElement";

const CallToActionSection = <Button extends ElementType = "a">({
    style,
    title,
    description,
    button
}: CallToActionSectionProps<Button>): JSX.Element => {

    return (
        <figure data-w-id="96486499-ed80-1569-3d9f-4f7c6d09abbb" style={{opacity: "0", ...style}} className="hero-section">
            <div className="small-container-4">
                <div className="hero-content-wrapper">
                    <div className="hero-copy-container">
                        <div className="hero-heading">{title}</div>
                        
                        {description && (
                            <div className="hero-subheading">{description}</div>
                        )}
                        
                    </div>
                    
                    {button && (
                        <TextElement 
                            data-w-id="96486499-ed80-1569-3d9f-4f7c6d09abc3" 
                            style={{opacity: "0"}} 
                            className="button-2" 
                            data-mp-track 
                            data-mp-event="Button Clicked" 
                            data-mp-props='{"button_name": "Get Started on Work With Us"}' 
                            as="a" 
                            {...button} 
                        />
                    )}
                    
                </div>
            </div>
        </figure>
    )
}

export default CallToActionSection;