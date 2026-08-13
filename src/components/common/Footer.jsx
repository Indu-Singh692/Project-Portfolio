import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="section-container footer-content">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <span className="logo-title">INDU SINGH</span>
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
