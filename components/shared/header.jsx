import React, { useState } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin);

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(prev => !prev);
  };

	const handleScroll = (elementId, offsetY = 100) => {
		gsap.to(window, {
			scrollTo: {
				y: elementId,
				offsetY: offsetY
			}
		});
	}

  return (
    <header className="header">
			<section className="section header-section">
				<div className="header-brand" onClick={() => handleScroll("#intro")}>
					<img src="/images/brand.png" alt="Zurikate two tone wheels" width="221" height="59" />
				</div>
				<div className={`header-nav ${isOpen ? 'open' : ''}`}>
					<nav className="navbar" onClick={handleMenu}>
						<ul>
							<li><span onClick={() => handleScroll("#intro")}>Home</span></li>
							<li><span onClick={() => handleScroll("#brands", 300)}>Find your make</span></li>
							<li><span onClick={() => handleScroll("#bestsellers")}>Best Sellers</span></li>
						</ul>
					</nav>
					<div className="navbar-icon" onClick={handleMenu}>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</section>
		</header>
  )
}

export default Header
