import React from "react";
import "./video.scss";
import BgVideo from '../media/Waves On The Beach Kissing The Shore  Free Stock Video.mp4'

const Video = () => {
	return (
		<div className="landingpage">

			<video src={BgVideo} autoPlay muted loop class="video-bg" />
			<div className="bg-overlay"></div>
			<div className="home-text">
				<h1>The Bubu Island</h1>
				<p>Come live out your ideal vacation with us</p>
			</div>

			<div className="home-btn">Explore</div>

		</div>
	);
};
export default Video;