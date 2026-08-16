import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="section-container footer-content">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <div className="logo-badge-modern">
              <svg width="38" height="38" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 3.5L39 12.5V31.5L22 40.5L5 31.5V12.5L22 3.5Z" fill="url(#footer-hex-grad)" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" />
                <path d="M10 16L7 19.5L10 23" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M34 21L37 24.5L34 28" stroke="#ff9f43" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 13.5H19.5M17.25 13.5V30.5M15 30.5H19.5" stroke="#ffffff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M29.5 16.5C29.5 14 27 12.5 24 12.5C21 12.5 18.5 14.5 18.5 17.5C18.5 21.8 28.5 20.5 28.5 25.5C28.5 29 25.5 31 22.5 31C19.5 31 17.5 29 17.5 27" stroke="url(#footer-hex-s)" strokeWidth="2.8" strokeLinecap="round"/>
                <circle cx="29.5" cy="13" r="2.2" fill="#38bdf8" />
                <circle cx="14.5" cy="31" r="2.2" fill="#ed733b" />
                <defs>
                  <linearGradient id="footer-hex-grad" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4f46e5" />
                    <stop offset="0.55" stopColor="#7c3aed" />
                    <stop offset="1" stopColor="#1e1b4b" />
                  </linearGradient>
                  <linearGradient id="footer-hex-s" x1="17" y1="12" x2="30" y2="31" gradientUnits="userSpaceOnUse">
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
          <p className="footer-tagline">
            MERN Stack Developer & Master of Computer Applications (MCA - 8.34 CGPA). Building user-friendly, efficient, and scalable web apps.
          </p>
          <div className="footer-contact-info">
            <div>📍 Indore, Madhya Pradesh</div>
            <div>📧 <a href="mailto:indusingh7746@gmail.com">indusingh7746@gmail.com</a></div>
            <div>📞 <a href="tel:+919516067746">+91-9516067746</a></div>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Navigation</h4>
            <a href="#home">Home</a>
            <a href="#solutions">Solutions</a>
            <a href="#work">Work</a>
            <a href="#about">About Me</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-col">
            <h4>Connect</h4>
            <a href="https://github.com/Indu-Singh" target="_blank" rel="noreferrer">GitHub Portfolio</a>
            <a href="https://linkedin.com/in/indu-singh" target="_blank" rel="noreferrer">LinkedIn Profile</a>
            <a href="mailto:indusingh7746@gmail.com">Send Email</a>
            <a href="tel:+919516067746">Call Direct</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Indu Singh. Master of Computer Applications (MCA). All rights reserved.</p>
      </div>
    </footer>
  );
}
