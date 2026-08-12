import React from 'react';
import './AboutSection.css';

export default function AboutSection() {
  const skills = [
    { name: 'React & React Native', level: 95, color: '#6366f1' },
    { name: 'JavaScript / ES6+ & TypeScript', level: 92, color: '#a855f7' },
    { name: 'Node.js, Express & REST APIs', level: 90, color: '#ed733b' },
    { name: 'Canvas 2D, HTML5 & CSS 3D', level: 88, color: '#10b981' },
    { name: 'UI/UX Design & Modern Glassmorphism', level: 94, color: '#ec4899' },
    { name: 'Core Web Vitals & Speed Tuning', level: 91, color: '#ff9f43' }
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="about-grid">
          
          {/* Bio Column */}
          <div className="about-bio-col">
            <div className="section-badge">
              <span className="badge-dot"></span>
              <span>ABOUT ME</span>
            </div>
            <h2 className="section-title text-left">
              Passionate Full Stack <span className="gradient-text">Engineer</span>
            </h2>
            <p className="about-text">
              Hi, I'm <strong>Indu Singh</strong> — a Full Stack Web Developer & Creative UI Engineer dedicated to building high-performance web platforms and interactive user experiences.
            </p>
            <p className="about-text">
              I specialize in bridging technical architecture with aesthetic front-end motion. From pre-decoding 300+ canvas frames in GPU VRAM to crafting resilient MERN backends, I bring clean code and speed to every project.
            </p>

            <div className="about-stats-row">
              <div className="stat-card">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">25+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Skills Column */}
          <div className="about-skills-col">
            <div className="skills-card">
              <h3 className="skills-heading">Technical Proficiency</h3>
              <div className="skills-list">
                {skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-pct">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <div 
                        className="skill-bar-fill"
                        style={{ 
                          width: `${skill.level}%`,
                          background: skill.color,
                          boxShadow: `0 0 12px ${skill.color}`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
