import React, { useState, useEffect } from "react";
import "./video.scss";
import BgVideo from '../media/Waves On The Beach Kissing The Shore  Free Stock Video.mp4'

const Video = () => {

	const [currentIndex, setCurrentIndex] = useState(false);

	useEffect(() => {

		const intervalId = setInterval(() => {
			setCurrentIndex((preve) => !preve);
		}, 2000)

		return () => clearInterval(intervalId);
	}, [])


	const Videotest = () => {

		return (
			<>
				<video src={BgVideo} autoPlay muted loop class="video-bg" />
				<div className="bg-overlay"></div>
				<div className="home-text">
					<h1>The Bubu Island</h1>
					<p>Come live out your ideal vacation with us</p>
				</div>
				<div className="home-btn">Explore</div>
			</>
		);
	}

	const Info = () => {

		return (
			<div className="wraper-test">

				<div className="wraper-info">
					<div className="title">Fiber fix</div>
					<div className="description">planes corporativos</div>
				</div>

				<div className="wraper-info">
					<div className="title">Fiber peru</div>
					<div className="description">Internet hogar residencial</div>
				</div>
			</div>


		);
	}
	if (currentIndex) {
		return (
			<div className="landingpage">
				<Videotest />
			</div>
		);
	}
	else {
		return (
			<div className="landingpage">
				<Info />
			</div>
		);
	}

};
export default Video;