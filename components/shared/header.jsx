import React, { useState } from 'react'

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <header className="header">
			<section className="section header-section">
				<div className="header-brand" data-to-view="#app">
					<img src="/images/brand.png" alt="Zurikate two tone wheels" width="221" height="59" />
				</div>
				<div className={`header-nav ${isOpen ? 'open' : ''}`}>
					<nav className="navbar" onClick={handleMenu}>
						<ul>
							<li><span data-to-view="#embed">Home</span></li>
							<li><span data-to-view="#colorsboard">Find your make</span></li>
							<li><span data-to-view="#bestsellers">Best Sellers</span></li>
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
