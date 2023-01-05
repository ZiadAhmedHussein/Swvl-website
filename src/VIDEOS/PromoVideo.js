import React from "react";

import { DefaultPlayer as Video } from "react-html5video/dist";
import "react-html5video/dist/styles.css";

const PromoVideo = (props) => {
  return (
		<Video className={props.className} poster={require("../IMGES/landing-poster.jpg")}>
			<source
			  src={require("./سويڤل منطقي(1080P_HD).mp4")} 
				type="video/webm"  
			/>
		</Video>
	);
};

export default PromoVideo;