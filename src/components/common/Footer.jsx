import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="section-container footer-content">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <div className="logo-badge-modern">
              <svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="12" fill="url(#footer-is-grad)" />
                <rect x="1" y="1" width="38" height="38" rx="11" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <path d="M12 11H17M14.5 11V29M12 29H17" stroke="#ffffff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M28 14.5C28 12.5 25.8 11 23.5 11C21.2 11 19 12.8 19 15.2C19 18.5 27 17.5 27 21.8C27 24.5 24.5 26 22 26C19.5 26 17.5 24.2 17.5 22.5" stroke="url(#footer-s-grad)" strokeWidth="2.8" strokeLinecap="round"/>
                <circle cx="28" cy="11.5" r="2" fill="#38bdf8" />
                <circle cx="12" cy="28.5" r="2" fill="#ed733b" />
                <defs>
                  <linearGradient id="footer-is-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4f46e5" />
                    <stop offset="0.5" stopColor="#7c3aed" />
                    <stop offset="1" stopColor="#1e1b4b" />
                  </linearGradient>
                  <linearGradient id="footer-s-grad" x1="18" y1="11" x2="28" y2="26" gradientUnits="userSpaceOnUse">
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
