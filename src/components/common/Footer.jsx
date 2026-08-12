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
            Building modern web applications with speed, precision, and interactive motion.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Navigation</h4>
            <a href="#home">Home</a>
            <a href="#solutions">Solutions</a>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-col">
            <h4>Solutions</h4>
            <a href="#fullstack">MERN Apps</a>
            <a href="#webdev">Web Development</a>
            <a href="#uiux">UI/UX Design</a>
            <a href="#seo">SEO & Speed</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Indu Singh. All rights reserved.</p>
      </div>
    </footer>
  );
}
