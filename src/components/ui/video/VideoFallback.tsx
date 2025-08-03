import type { VideoFallbackProps } from "@/types/ui";
import { JSX } from "react";

const VideoFallback = ({
    fallbackSrc,
    fallbackAlt,
    fallbackStyle
}: VideoFallbackProps): JSX.Element => {
    return (
        <noscript>
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                        [data-wf-bgvideo-fallback-img] {
                            display: none;
                        }
                        @media (prefers-reduced-motion: reduce) {
                            [data-wf-bgvideo-fallback-img] {
                                position: absolute;
                                z-index: -100;
                                display: inline-block;
                                height: 100%;
                                width: 100%;
                                object-fit: cover;
                            }
                        }
                    `,
                }}
            />
             <img
                data-wf-bgvideo-fallback-img="true"
                src={fallbackSrc}
                alt={fallbackAlt}
                style={fallbackStyle}
            />
        </noscript>
    );
}

export default VideoFallback;