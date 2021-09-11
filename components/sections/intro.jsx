import React, { useRef, useEffect } from 'react'
import Throttle from 'lodash/throttle'
import { gsap } from 'gsap/dist/gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'

const Intro = () => {

	const ref = useRef(null);

	useEffect(() => {

		const checkScrollVideo = () => {
			
			// check if scroll is larger than the viewport height
			if (window.scrollY > window.innerHeight) {

				// stop  video
				ref.current.pause();
				
			} else {
				// resume video
				ref.current.play();
			}
		}

		const throttledCheckScrollVideo = Throttle(checkScrollVideo, 200);

		window.addEventListener('scroll', throttledCheckScrollVideo);

		return () => {
			window.removeEventListener('scroll', throttledCheckScrollVideo);
		}

	}, [])

	const handleScroll = (elementId, offsetY = 100) => {
		gsap.to(window, {
			scrollTo: {
				y: elementId,
				offsetY: offsetY
			}
		});
	}

	return (
		<div className="intro" id="intro">
			<div className="intro-background">
				<video ref={ref} preload="metadata" autoPlay={true} loop="loop" muted={true} playsInline="playsinline" poster="/media/video-poster.jpg">
					<source src="/media/lamborghini-intro.mp4" type="video/mp4" />
					<img src="/media/video-poster.jpg" alt="BMW video poster " width="1920" height="1080" />
				</video>
				<div className="intro-scroll" onClick={() => handleScroll("#showcase", 80)}>
					<span>Scroll Down</span>
					<i className="icon">
						<img src="images/icons/icon-scroll-down.png" alt="Icon scroll down" />
					</i>
				</div>
			</div>
		</div>
	)
}

export default Intro
