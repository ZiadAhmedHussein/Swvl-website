import React from "react";

import { DefaultPlayer as Video } from "react-html5video/dist";
import "react-html5video/dist/styles.css";

const CaptainVideo = (props) => {
  return (
		<Video className={props.className} poster={require("../IMGES/landing-poster.jpg")}>
			<source
			  src={require("./كباتن سويڤل _ كابتن مصطفى(720P_HD).mp4")} 
				type="video/webm"  
			/>
		</Video>
	);
};

export default CaptainVideo;