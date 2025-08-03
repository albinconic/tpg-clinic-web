import { JSX } from "react";
import { VideoControlButtonProps } from "@/types/ui";

const VideoControlButton = ({
  videoId,
  pauseIconUrl = 'https://uploads-ssl.webflow.com/6022af993a6b2191db3ed10c/628299f8aa233b83918e24fd_Pause.svg',
  playIconUrl = 'https://uploads-ssl.webflow.com/6022af993a6b2191db3ed10c/628298b20ae0236682d4b87f_Play-24.svg',
  pauseAlt = 'Pause video',
  playAlt = 'Play video',
  ...rest
}: VideoControlButtonProps): JSX.Element => {

    return (
		<div aria-live="polite">
			<button
				data-w-bg-video-control="true"
				aria-controls={videoId}
				className="w-backgroundvideo-backgroundvideoplaypausebutton w-background-video--control"
				{...rest}
			>
				<span>
				<img src={pauseIconUrl} loading="lazy" alt={pauseAlt} />
				</span>
				<span hidden>
				<img src={playIconUrl} loading="lazy" alt={playAlt} />
				</span>
			</button>
		</div>
    )
}

export default VideoControlButton;