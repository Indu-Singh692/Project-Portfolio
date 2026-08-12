import React, { useEffect, useState } from 'react';
import './ScrollTextOverlay.css';

export default function ScrollTextOverlay() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        const progress = Math.max(0, Math.min(1, scrollTop / maxScroll));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to calculate opacity and transform based on scroll range
  const getStageStyle = (start, peakStart, peakEnd, end) => {
    if (scrollProgress < start || scrollProgress > end) {
      return { opacity: 0, transform: 'translate3d(0, 40px, -50px) scale(0.92)', pointerEvents: 'none', filter: 'blur(10px)' };
    }

    let opacity = 1;
    let translateY = 0;
    let scale = 1;
    let blur = 0;

    if (scrollProgress < peakStart) {
      // Entering stage
      const factor = (scrollProgress - start) / (peakStart - start);
      opacity = factor;
      translateY = (1 - factor) * 40;
      scale = 0.92 + factor * 0.08;
      blur = (1 - factor) * 8;
    } else if (scrollProgress > peakEnd) {
      // Exiting stage
      const factor = (end - scrollProgress) / (end - peakEnd);
      opacity = factor;
      translateY = (1 - factor) * -40;
      scale = 0.92 + factor * 0.08;
      blur = (1 - factor) * 8;
    }

    return {
      opacity,
      transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
      pointerEvents: opacity > 0.6 ? 'auto' : 'none',
      filter: `blur(${blur}px)`
    };
  };

  // Stage ranges (0 to 1)
  const heroStyle = getStageStyle(0, 0.02, 0.15, 0.22);
  const stage1Style = getStageStyle(0.24, 0.30, 0.44, 0.50);
  const stage2Style = getStageStyle(0.52, 0.58, 0.72, 0.78);
  const stage3Style = getStageStyle(0.80, 0.85, 0.97, 1.0);

  return (
    <div className="scroll-overlay-container">

      {/* Hero Section Overlay */}
      <div className="scroll-stage hero-stage" style={heroStyle}>
        <div className="stage-badge">
          <span className="badge-pulse"></span>
          <span>CREATIVE DEVELOPER & DESIGNER</span>
        </div>
        <h1 className="hero-title">
          INDU <span className="gradient-text">SINGH</span>
        </h1>
        <p className="hero-subtitle">
          Crafting High-Performance Web Applications & 60FPS Immersive Digital Experiences
        </p>
        <div className="scroll-indicator">
          <div className="mouse-icon">
            <div className="mouse-wheel"></div>
          </div>
          <span>Scroll to explore</span>
        </div>
      </div>

      {/* Stage 1: Full Stack & Innovation */}
      <div className="scroll-stage text-card-stage" style={stage1Style}>
        <div className="glass-card">
          <div className="card-badge">01 // INNOVATION & ARCHITECTURE</div>
          <h2 className="card-title">
            Building Next-Gen <span className="gradient-text-alt">Web Solutions</span>
          </h2>
          <p className="card-desc">
            Transforming complex requirements into clean, scalable code with lightning-fast performance and seamless animations.
          </p>
          <div className="tech-tags">
            <span className="tag">React</span>
            <span className="tag">Node.js</span>
            <span className="tag">Canvas 2D/3D</span>
            <span className="tag">UI/UX Design</span>
            <span className="tag">REST APIs</span>
          </div>
        </div>
      </div>

      {/* Stage 2: Expertise & Performance */}
      <div className="scroll-stage text-card-stage" style={stage2Style}>
        <div className="glass-card glow-purple">
          <div className="card-badge">02 // PERFORMANCE & SPEED</div>
          <h2 className="card-title">
            300+ Frames <span className="gradient-text-purple">GPU Decoded</span>
          </h2>
          <p className="card-desc">
            Engineered for ultra-smooth 60 FPS scrolling with pre-cached frame buffers and zero-lag rendering pipeline.
          </p>
          <div className="metrics-grid">
            <div className="metric-box">
              <div className="metric-num">60 FPS</div>
              <div className="metric-label">Smooth Scroll</div>
            </div>
            <div className="metric-box">
              <div className="metric-num">100%</div>
              <div className="metric-label">Responsive</div>
            </div>
            <div className="metric-box">
              <div className="metric-num">&lt;50ms</div>
              <div className="metric-label">Frame Latency</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stage 3: Call to Action */}
      <div className="scroll-stage text-card-stage" style={stage3Style}>
        <div className="glass-card cta-card">
          <div className="card-badge">03 // LET'S CONNECT</div>
          <h2 className="card-title">
            Ready to Build <span className="gradient-text">Something Great?</span>
          </h2>
          <p className="card-desc">
            Available for freelance opportunities, full-time positions, and innovative web projects.
          </p>
          <div className="cta-actions">
            <a href="#contact" className="cta-button primary-btn">
              Get In Touch
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#work" className="cta-button secondary-btn">
              View All Work
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
