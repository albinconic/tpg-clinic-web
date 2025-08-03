import type { VideoBackgoundProps } from "@/types/ui";
import { JSX } from "react";
import VideoControlButton from "../ui/video/VideoControlButton";
import VideoFallback from "../ui/video/VideoFallback";
import VideoElement from "../ui/video/VideoElement";

const VideoBackgroundSection = ({
    posterUrl,
    mp4Url,
    webmUrl,
    videoId,

    // Video Control
    controlButtonProps,

    // Video Fallback
    fallbackSrc,
    fallbackAlt,
    //fallbackStyle,
    videoElementProps,
    children,
}: VideoBackgoundProps): JSX.Element => {

    return(
        <div
            data-poster-url={posterUrl}
            data-video-urls={`${mp4Url},${webmUrl}`}
            data-autoplay="true"
            data-loop="true"
            data-wf-ignore="true"
            className="hero-section-w-video w-background-video w-background-video-atom"
            >
            
            <VideoElement 
                videoId={videoId}
                mp4Url={mp4Url}
                webmUrl={webmUrl}
                autoPlay
                loop
                muted
                playsInline
                dataWfIgnore={videoElementProps?.dataWfIgnore}
                dataObjectFit={videoElementProps?.dataObjectFit}
                style={{
                    backgroundImage: `url("${posterUrl}")`
                }}
            />

            <VideoFallback fallbackSrc={fallbackSrc} fallbackAlt={fallbackAlt} />

            <VideoControlButton 
                videoId={videoId} 
                pauseIconUrl={controlButtonProps?.pauseIconUrl} 
                playIconUrl={controlButtonProps?.playIconUrl} 
                pauseAlt={controlButtonProps?.pauseAlt} 
                playAlt={controlButtonProps?.playAlt}
                {...controlButtonProps} 
            />

            {children && (
                <div className="w-layout-blockcontainer container-18 w-container">
                    <div className="div-block-6">{children}</div>
                </div>
            )}

        </div>
    );
}

export default VideoBackgroundSection;