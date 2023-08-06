import React, { useState } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { ShopIcon } from "./icons";

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
				<div className="header-brand" onClick={() => handleScroll("#showcase")}>
					<img src="/images/brand.png" alt="Zurikate two tone wheels" width="221" height="59" />
				</div>
				<div className={`header-nav ${isOpen ? 'open' : ''}`}>
					<nav className="navbar" onClick={handleMenu}>
						<ul className="flex">
							<li className="cursor-pointer" onClick={() => handleScroll("#showcase")}>
								<div className="p-3 md:p-5 text-white hover:text-primary transition-colors uppercase tracking-[6px]">
									Home
								</div>
							</li>
							<li className="cursor-pointer">
								<div className="p-3 md:p-5 text-white hover:text-primary transition-colors inline-flex gap-2 items-center uppercase tracking-[6px]" onClick={() => handleScroll("#brands", 300)}>
									<div className="w-4">
										<ShopIcon />
									</div>
									Shop Now
								</div>
							</li>
							<li className="cursor-pointer" onClick={() => handleScroll("#bestsellers")}>
								<div className="p-3 md:p-5 text-white hover:text-primary transition-colors uppercase tracking-[6px]">
									Best Sellers
								</div>
							</li>
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
