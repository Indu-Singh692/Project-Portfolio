import React from 'react';
import './SolutionsSection.css';

export default function SolutionsSection() {
  const solutions = [
    {
      id: 'fullstack',
      dotClass: 'dot-blue',
      badge: 'FULL STACK',
      title: 'MERN Stack Applications',
      desc: 'End-to-end web apps powered by React, Node.js, Express, and MongoDB/PostgreSQL with secure authentication and real-time state management.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      tags: ['React.js', 'Node.js', 'Express', 'MongoDB', 'REST APIs']
    },
    {
      id: 'webdev',
      dotClass: 'dot-orange',
      badge: 'WEB ENGINEERING',
      title: 'High Performance Web Dev',
      desc: 'Pixel-perfect, responsive web solutions engineered for maximum rendering speed, fluid motion, interactive canvas effects, and low latency.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
      tags: ['HTML5/CSS3', 'Canvas 2D/3D', 'Vite', 'JavaScript (ES6+)', 'Tailwind']
    },
    {
      id: 'uiux',
      dotClass: 'dot-purple',
      badge: 'CREATIVE DESIGN',
      title: 'UI/UX & Interactive Design',
      desc: 'Intuitive user interface design with modern glassmorphism, micro-interactions, dark/light modes, and seamless accessibility.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 19l7-7 3 3-7 7-3-3z"/>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
          <path d="M2 2l7.586 7.586"/>
          <circle cx="11" cy="11" r="2"/>
        </svg>
      ),
      tags: ['Figma', 'Prototyping', 'Design Systems', 'Micro-Animations', 'A11y']
    },
    {
      id: 'seo',
      dotClass: 'dot-emerald',
      badge: 'OPTIMIZATION',
      title: 'SEO & Speed Optimization',
      desc: 'Core Web Vitals tuning, LCP & INP optimization, GPU hardware acceleration, semantic structured data, and search visibility.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      tags: ['Core Web Vitals', 'LCP Optimization', 'SEO Analytics', 'Fast Loading', 'PWA']
    }
  ];

  return (
    <section id="solutions" className="solutions-section">
      <div className="section-container">
        <div className="section-header text-center">
          <div className="section-badge">
            <span className="badge-dot"></span>
            <span>WHAT I DO</span>
          </div>
          <h2 className="section-title">
            Tailored <span className="gradient-text">Solutions</span> for Modern Web
          </h2>
          <p className="section-subtitle">
            Delivering robust engineering, beautiful designs, and performance-focused code to turn vision into digital reality.
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((item) => (
            <div key={item.id} id={item.id} className="solution-card">
              <div className="card-top">
                <div className={`icon-wrapper ${item.dotClass}`}>
                  {item.icon}
                </div>
                <span className="card-tag-badge">{item.badge}</span>
              </div>
              <h3 className="solution-card-title">{item.title}</h3>
              <p className="solution-card-desc">{item.desc}</p>
              <div className="solution-tags">
                {item.tags.map((tag, idx) => (
                  <span key={idx} className="sol-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
