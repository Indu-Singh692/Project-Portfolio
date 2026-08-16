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
            <svg width="42" height="42" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Outer Glowing Hexagon Shield */}
              <path d="M22 3.5L39 12.5V31.5L22 40.5L5 31.5V12.5L22 3.5Z" fill="url(#hex-logo-grad)" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" />
              
              {/* Left Code Bracket < */}
              <path d="M10 16L7 19.5L10 23" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              
              {/* Right Code Bracket > */}
              <path d="M34 21L37 24.5L34 28" stroke="#ff9f43" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>

              {/* Monogram 'I' (Crisp Pillar) */}
              <path d="M15 13.5H19.5M17.25 13.5V30.5M15 30.5H19.5" stroke="#ffffff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
              
              {/* Monogram 'S' (Glowing Wave Intersecting 'I') */}
              <path d="M29.5 16.5C29.5 14 27 12.5 24 12.5C21 12.5 18.5 14.5 18.5 17.5C18.5 21.8 28.5 20.5 28.5 25.5C28.5 29 25.5 31 22.5 31C19.5 31 17.5 29 17.5 27" stroke="url(#hex-s-grad)" strokeWidth="2.8" strokeLinecap="round"/>
              
              {/* Glowing Quantum Sparks */}
              <circle cx="29.5" cy="13" r="2.2" fill="#38bdf8" />
              <circle cx="14.5" cy="31" r="2.2" fill="#ed733b" />

              <defs>
                <linearGradient id="hex-logo-grad" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4f46e5" />
                  <stop offset="0.55" stopColor="#7c3aed" />
                  <stop offset="1" stopColor="#1e1b4b" />
                </linearGradient>
                <linearGradient id="hex-s-grad" x1="17" y1="12" x2="30" y2="31" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#ed733b" />
                  <stop offset="1" stopColor="#ff9f43" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="logo-text-group">
            <span className="logo-title">INDU SINGH</span>
            <span className="logo-subtitle">FULL STACK ENGINEER</span>
          </div>
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
        </div>
      )}
    </header>
  );
}
