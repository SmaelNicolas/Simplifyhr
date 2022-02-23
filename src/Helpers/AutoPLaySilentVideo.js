import React, { useRef, useEffect } from "react";
import styled from "styled-components";

export const Video = styled.video`
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
	opacity: 0.8;
`;

export default function AutoPlaySilentVideo(props) {
	const videoRef = useRef(undefined);
	useEffect(() => {
		videoRef.current.defaultMuted = true;
	});
	return (
		<Video
			className={props.className}
			ref={videoRef}
			loop
			autoPlay
			muted
			playsInline
			src={props.video}
			type="video/mp4"
		></Video>
	);
}
