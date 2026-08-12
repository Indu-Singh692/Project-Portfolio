import React, { useState } from 'react';
import './WorkSection.css';

export default function WorkSection() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'MERN Apps', 'UI/UX', '3D & Motion'];

  const projects = [
    {
      id: 1,
      title: 'AI Portfolio Platform',
      category: '3D & Motion',
      desc: 'Interactive 3D canvas portfolio with 300-frame GPU pre-decoding, dynamic theme switching, and fluid scroll acceleration.',
      imageGradient: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
      tags: ['React', 'Canvas 2D', 'CSS 3D', 'Vite'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Real-time SaaS Dashboard',
      category: 'MERN Apps',
      desc: 'Full-stack enterprise analytics platform with live data sync, secure JWT authentication, and interactive charts.',
      imageGradient: 'linear-gradient(135deg, #ed733b 0%, #ff9f43 100%)',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'E-Commerce Experience Engine',
      category: 'UI/UX',
      desc: 'Ultra-fast storefront with instant search, smooth micro-interactions, dark mode, and seamless payment integration.',
      imageGradient: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Stripe'],
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Cloud Workstream Manager',
      category: 'MERN Apps',
      desc: 'Collaborative task management suite featuring Kanban boards, drag-and-drop UI, and role-based permissions.',
      imageGradient: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
      tags: ['React', 'Redux Toolkit', 'Node.js', 'PostgreSQL'],
      link: '#',
      github: '#'
    }
  ];

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="work" className="work-section">
      <div className="section-container">
        <div className="section-header text-center">
          <div className="section-badge">
            <span className="badge-dot"></span>
            <span>PORTFOLIO</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of full-stack web applications, interactive experiments, and UI/UX engineering work.
          </p>

          {/* Filter Tabs */}
          <div className="work-tabs">
            {categories.map((tab) => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="work-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="work-card">
              <div 
                className="work-preview" 
                style={{ background: project.imageGradient }}
              >
                <div className="work-category-chip">{project.category}</div>
                <div className="preview-overlay">
                  <a href={project.link} className="preview-btn" target="_blank" rel="noreferrer">
                    Live Demo ↗
                  </a>
                </div>
              </div>
              <div className="work-info">
                <h3 className="work-title">{project.title}</h3>
                <p className="work-desc">{project.desc}</p>
                <div className="work-tags">
                  {project.tags.map((t, idx) => (
                    <span key={idx} className="work-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
