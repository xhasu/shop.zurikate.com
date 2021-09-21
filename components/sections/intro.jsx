import React, { useState, useRef, useEffect } from 'react'
import Throttle from 'lodash/throttle'
import { gsap } from 'gsap/dist/gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import ModalVideo from 'react-modal-video'

const Intro = () => {

	const ref = useRef(null);
	const [isOpen, setOpen] = useState(false);
	const isBrowser = () => typeof window !== 'undefined';

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
					<source src="/media/zurikate-intro.mp4" type="video/mp4" />
					<img src="/media/video-poster.jpg" alt="Zurikate video poster" width="1920" height="1080" />
				</video>
				<div className="intro-play-button" onClick={() => setOpen(true)}>
					<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
					<span>Play video</span>
				</div>
				<div className="intro-scroll" onClick={() => handleScroll("#showcase", 80)}>
					<span>Scroll Down</span>
					<i className="icon">
						<img src="images/icons/icon-scroll-down.png" alt="Icon scroll down" />
					</i>
				</div>
			</div>
			<ModalVideo channel='youtube' isOpen={isOpen} videoId='dxUC_iJjoUc' onClose={() => setOpen(false)} />
		</div>
	)
}

export default Intro
