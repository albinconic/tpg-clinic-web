import type { VideoElementProps } from "@/types/ui";
import { JSX } from "react";

const VideoElement = ({
    videoId,
    posterUrl,
    mp4Url,
    webmUrl,
    dataWfIgnore = true,
    dataObjectFit = 'cover',
    style,
    ...rest
}: VideoElementProps): JSX.Element => {

    return(
        <video
                id={videoId}
                
                style={{ 
                    backgroundImage: `url("${posterUrl}")`,
                    ...style,
                }}
                 {...(dataWfIgnore ? { 'data-wf-ignore': 'true' } : {})}
                {...(dataObjectFit ? { 'data-object-fit': dataObjectFit } : {})}
                {...rest} // autoPlay, loop, muted, playsInline,...
            >
                <source src={mp4Url} {...(dataWfIgnore ? {'data-wf-ignore': 'true'} : {})} />
                {webmUrl && <source src={webmUrl} {...(dataWfIgnore ? {'data-wf-ignore': 'true'} : {})} />}
            </video>
    )
}

export default VideoElement;