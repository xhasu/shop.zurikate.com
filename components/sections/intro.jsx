import React from 'react'

const Intro = () => {
  return (
    <div className="intro" id="intro">
			<div className="intro-background">
				<video preload="metadata" loop="loop" muted={true} playsInline="playsinline" poster="/media/video-poster.jpg">
					<source src="/media/lamborghini-short.mp4" type="video/mp4" />
					<img src="/media/video-poster.jpg" alt="BMW video poster " width="1920" height="1080" />
				</video>
			</div>
		</div>
  )
}

export default Intro
