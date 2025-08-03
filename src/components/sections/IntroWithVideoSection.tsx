import { IntroWithVideoSectionProps } from "@/types/ui";
import TextElement from "../ui/TextElement";
import TitleElement from "../ui/TitleElement";
import VideoIframe from "../ui/video/VideoIframe";
import { JSX } from "react";

const IntroWithVideoSection = ({
    sectionProps,
    title,
    text,
    video,
    button
}: IntroWithVideoSectionProps): JSX.Element => {
    return (
        <section className="tpg-section what-we-do-section" {...sectionProps}>
            <div className="tpg-container">
                <div className="what-we-do-header">

                    {/* Title */}
                    <TitleElement className="heading-2" {...title} />

                    {/* Description */}
                    <TextElement {...text}/>
                    
                </div>

                <div className="what-we-do-video">
                    <div style={{position: "relative", paddingTop: "56.25%"}}>
                        <VideoIframe {...video} />
                    </div>
                </div>

                {button && (
                    <div className="what-we-do-cta">
                        <TextElement {...button}/>
                    </div>
                )}
                
            </div>
        </section>
    )
}

export default IntroWithVideoSection;