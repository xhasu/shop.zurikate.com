import React from 'react'

const Intro = () => {
  return (
    <div className="intro" id="intro">
				<div className="intro-head">
					<div className="intro-title">
						Skins for <br/>
						<span>wheels</span>
					</div>
					<div className="intro-subtitle">
						<i>Here is the start of a <b>new way to <br /> customize and protect your wheels.</b></i>
					</div>
				</div>
				<div className="intro-media">
					<video id="promovideo" preload="metadata" controls controlsList="nodownload" loop="loop" muted={true} playsInline="playsinline" poster="/media/video-poster.jpg">
						<source src="/media/BMW-Zurikate-Mobile.mp4" type="video/mp4" />
						<img src="/media/video-poster.jpg" alt="BMW video poster " width="1920" height="1080" />
					</video>
				</div>
				<div className="intro-scroll" data-to-view="#hero">
					<span>Scroll Down</span>
					<i className="icon">
						<img src="/images/icons/icon-scroll-down.png" alt="icon scroll down" width="22" height="19" />
					</i>
				</div>
			</div>
  )
}

export default Intro
