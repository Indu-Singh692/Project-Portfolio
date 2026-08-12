import React from 'react';
import './ProcessSection.css';

export default function ProcessSection() {
  const steps = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      desc: 'Understanding product objectives, user personas, wireframing, and planning high-level web architecture.'
    },
    {
      step: '02',
      title: 'UI/UX & Interactive Design',
      desc: 'Creating visual design systems, color tokens, dynamic canvas prototypes, and accessible user interfaces.'
    },
    {
      step: '03',
      title: 'Full-Stack Development',
      desc: 'Writing clean, modular React components, pre-decoding GPU assets, and building robust RESTful Node.js APIs.'
    },
    {
      step: '04',
      title: 'Optimization & Launch',
      desc: 'Auditing Core Web Vitals, LCP tuning, multi-browser QA testing, and automated zero-downtime deployment.'
    }
  ];

  return (
    <section id="process" className="process-section">
      <div className="section-container">
        <div className="section-header text-center">
          <div className="section-badge">
            <span className="badge-dot"></span>
            <span>HOW I WORK</span>
          </div>
          <h2 className="section-title">
            My Development <span className="gradient-text">Process</span>
          </h2>
          <p className="section-subtitle">
            A systematic, outcome-driven approach to turning concepts into scalable production web apps.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((item, idx) => (
            <div key={idx} className="process-card">
              <div className="step-num">{item.step}</div>
              <h3 className="process-title">{item.title}</h3>
              <p className="process-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
