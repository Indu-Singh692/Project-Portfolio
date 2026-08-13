import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <a href="#home" className="navbar-logo">
          <div className="logo-badge-modern">
            <svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="10" fill="url(#logo-grad-bg)" />
              <path d="M12 14L7 20L12 26" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M28 14L33 20L28 26" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="20" cy="20" r="4.5" fill="url(#logo-grad-core)" />
              <defs>
                <linearGradient id="logo-grad-bg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6366f1" />
                  <stop offset="1" stopColor="#8b5cf6" />
                </linearGradient>
                <linearGradient id="logo-grad-core" x1="15" y1="15" x2="25" y2="25" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#ed733b" />
                  <stop offset="1" stopColor="#ff9f43" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="logo-title">INDU SINGH</span>
        </a>

        {/* Desktop Menu */}
        <nav className="desktop-menu">
          <a href="#home" className="nav-link">Home</a>

          {/* Solutions Dropdown */}
          <div
            className="nav-item-dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="nav-link dropdown-toggle">
              <span>Solutions</span>
              <svg
                className={`chevron-icon ${dropdownOpen ? 'open' : ''}`}
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="dropdown-menu">
                <a href="https://rsf-a.onrender.com/pledge" target="_blank" rel="noreferrer" className="dropdown-item">
                  <span className="item-dot dot-blue"></span>
                  <div>
                    <div className="item-title">MERN Stack Apps ↗</div>
                    <div className="item-desc">RSF Client & OmniRental Live Demos</div>
                  </div>
                </a>
                <a href="#solutions" className="dropdown-item">
                  <span className="item-dot dot-orange"></span>
                  <div>
                    <div className="item-title">Web Development</div>
                    <div className="item-desc">High performance web platforms</div>
                  </div>
                </a>
                <a href="#work" className="dropdown-item">
                  <span className="item-dot dot-purple"></span>
                  <div>
                    <div className="item-title">UI/UX & 3D Projects</div>
                    <div className="item-desc">Interactive motion portfolio apps</div>
                  </div>
                </a>
                <a href="#solutions" className="dropdown-item">
                  <span className="item-dot dot-emerald"></span>
                  <div>
                    <div className="item-title">SEO & Speed</div>
                    <div className="item-desc">Core Web Vitals & organic growth</div>
                  </div>
                </a>
              </div>
            )}
          </div>

          <a href="#work" className="nav-link">Work</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#process" className="nav-link">Process</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/* Theme Toggle & Mobile Toggle */}
        <div className="navbar-actions">
          {/* Dark / Light Theme Toggle Button */}
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" fill="#ffb703" stroke="#ffb703"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="#ffb703" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="#6366f1" stroke="#6366f1"/>
              </svg>
            )}
          </button>

          <button
            className={`hamburger-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#solutions" onClick={() => setMobileMenuOpen(false)}>Solutions</a>
          <a href="#work" onClick={() => setMobileMenuOpen(false)}>Work</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#process" onClick={() => setMobileMenuOpen(false)}>Process</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <div className="mobile-theme-row">
            <span>Theme Mode:</span>
            <button className="theme-toggle-btn" onClick={toggleTheme}>
              {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
