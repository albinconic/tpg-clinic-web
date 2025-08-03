import { JSX } from "react";
import { VideoIframeProps } from "@/types/ui";

const VideoIframe = ({
    src,
    style,
    allowFullScreen=true,
    allow,
    ...rest
}: VideoIframeProps): JSX.Element => {

    return(
        <iframe src={src}
            loading="lazy"
            style={{
                border: 0,
                position: 'absolute',
                top: 0,
                height: '100%',
                width: '100%',
                ...style
            }}
            allow={allow ?? "accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"} 
            allowFullScreen={allowFullScreen} 
            {...rest} 
        />
       
    )
}

export default VideoIframe;