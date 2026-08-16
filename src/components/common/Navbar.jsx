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
            <svg width="38" height="38" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="12" fill="url(#is-logo-grad)" />
              <rect x="1" y="1" width="38" height="38" rx="11" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              
              {/* Monogram 'I' */}
              <path d="M12 11H17M14.5 11V29M12 29H17" stroke="#ffffff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
              
              {/* Monogram 'S' */}
              <path d="M28 14.5C28 12.5 25.8 11 23.5 11C21.2 11 19 12.8 19 15.2C19 18.5 27 17.5 27 21.8C27 24.5 24.5 26 22 26C19.5 26 17.5 24.2 17.5 22.5" stroke="url(#is-s-grad)" strokeWidth="2.8" strokeLinecap="round"/>
              
              {/* Glowing Core Tech Dot */}
              <circle cx="28" cy="11.5" r="2" fill="#38bdf8" />
              <circle cx="12" cy="28.5" r="2" fill="#ed733b" />

              <defs>
                <linearGradient id="is-logo-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4f46e5" />
                  <stop offset="0.5" stopColor="#7c3aed" />
                  <stop offset="1" stopColor="#1e1b4b" />
                </linearGradient>
                <linearGradient id="is-s-grad" x1="18" y1="11" x2="28" y2="26" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#ed733b" />
                  <stop offset="1" stopColor="#ff9f43" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="logo-text-group">
            <span className="logo-title">INDU SINGH</span>
            <span className="logo-subtitle">MERN DEVELOPER</span>
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
