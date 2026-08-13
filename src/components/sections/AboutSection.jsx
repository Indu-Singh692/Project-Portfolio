import React from 'react';
import './AboutSection.css';
import induImg from '../../assets/image/indu.png';

export default function AboutSection() {
  const skills = [
    { name: 'JavaScript (ES6+) & Core Java', level: 94, color: '#6366f1' },
    { name: 'React.js & Frontend Architecture', level: 95, color: '#a855f7' },
    { name: 'Node.js & Express.js (REST APIs)', level: 92, color: '#ed733b' },
    { name: 'MongoDB & MySQL Database', level: 90, color: '#10b981' },
    { name: 'HTML5, CSS3, Bootstrap & Glassmorphism', level: 96, color: '#ec4899' },
    { name: 'Cloudinary, Brevo Email & Developer Tools', level: 88, color: '#ff9f43' }
  ];

  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Medi-Caps University',
      location: 'Indore, Madhya Pradesh',
      score: 'CGPA: 8.34',
      badge: 'POST GRADUATION'
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Chandra Shekhar Azad P.G Govt. College',
      location: 'Sehore, Madhya Pradesh',
      score: 'Percentage: 69.5%',
      badge: 'GRADUATION'
    }
  ];

  const certifications = [
    { title: 'Programming in Java', provider: 'NPTEL', icon: '☕' },
    { title: 'Practical HTML and CSS', provider: 'Infosys (SpringBoot)', icon: '💻' },
    { title: 'MERN Stack Developer', provider: 'Universal Informatics', icon: '🚀' }
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="about-grid">

          {/* Left Column: Name, Bio, Education & Certifications */}
          <div className="about-bio-col">
            <div className="section-badge">
              <span className="badge-dot"></span>
              <span>ABOUT ME & BACKGROUND</span>
            </div>
            <h2 className="section-title text-left">
              MERN Stack <span className="gradient-text">Developer</span>
            </h2>

            {/* Author Header Meta */}
            <div className="author-meta-block">
              <h3 className="author-name">Indu Singh</h3>
              <p className="author-role">MERN Stack Developer & Software Engineer</p>
              <div className="author-chips-row">
                <span className="meta-chip">🎓 MCA (8.34 CGPA)</span>
                <span className="meta-chip">📍 Indore, MP</span>
                <span className="meta-chip">💻 Full-Stack Dev</span>
              </div>
            </div>

            <p className="about-text">
              I am <strong>Indu Singh</strong>, an enthusiastic and detail-oriented Master of Computer Applications (MCA) graduate from Medi-Caps University with a strong academic record (<strong>CGPA 8.34</strong>).
            </p>
            <p className="about-text">
              I specialize in building user-friendly, scalable web applications using <strong>JavaScript, Core Java, React.js, Node.js, Express.js, and MongoDB</strong>. Known for quick adaptability and problem-solving, I create high-performance client solutions and modern digital platforms.
            </p>

            {/* Academic Education Block */}
            <div className="education-block">
              <h3 className="sub-heading">Academic Education</h3>
              <div className="education-list">
                {education.map((edu, idx) => (
                  <div key={idx} className="edu-card">
                    <div className="edu-header">
                      <span className="edu-badge">{edu.badge}</span>
                      <span className="edu-score">{edu.score}</span>
                    </div>
                    <h4 className="edu-degree">{edu.degree}</h4>
                    <div className="edu-inst">{edu.institution} • <span className="edu-loc">{edu.location}</span></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Block */}
            <div className="cert-block">
              <h3 className="sub-heading">Certifications</h3>
              <div className="cert-grid">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="cert-chip">
                    <span className="cert-icon">{cert.icon}</span>
                    <div>
                      <div className="cert-title">{cert.title}</div>
                      <div className="cert-provider">{cert.provider}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Perfectly Framed Profile Image & Technical Skills */}
          <div className="about-skills-col">

            {/* Clean Portrait Image Frame (Zero Text Overlay, Face Perfectly Centered) */}
            <div className="profile-portrait-frame">
              <img src={induImg} alt="Indu Singh" className="portrait-img" />
            </div>

            {/* Technical Skills Card */}
            <div className="skills-card">
              <h3 className="skills-heading">Technical Skills & Proficiency</h3>
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

              {/* Developer Tools & IDEs */}
              <div className="tools-sub-block">
                <h4 className="tools-heading">Developer Tools & IDEs</h4>
                <div className="tools-tags">
                  <span className="tool-tag">VS Code</span>
                  <span className="tool-tag">IntelliJ IDEA</span>
                  <span className="tool-tag">Figma</span>
                  <span className="tool-tag">Spring Tool Suite</span>
                  <span className="tool-tag">Git & GitHub</span>
                  <span className="tool-tag">Vite</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
