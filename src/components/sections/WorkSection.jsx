import React, { useState } from 'react';
import './WorkSection.css';
import rsfImg from '../../assets/image/rsfimage.webp';
import omniImg from '../../assets/image/omnirentalimage.webp';

export default function WorkSection() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Client Project', 'MERN Apps', 'E-Commerce', '3D & Motion'];

  const projects = [
    {
      id: 1,
      title: 'Rashtra Seva Foundation (RSF)',
      category: 'Client Project',
      subtitle: 'Real-World Client Project',
      desc: 'Full-stack NGO web application for a real-world client. Features volunteer registration, pledge management, preferred-language support, Cloudinary file uploads, and automated Brevo transactional email notifications.',
      image: rsfImg,
      imageGradient: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Cloudinary', 'Brevo Email'],
      link: 'https://rsf-a.onrender.com/pledge'
    },
    {
      id: 2,
      title: 'OmniRental Platform',
      category: 'MERN Apps',
      subtitle: 'Rental Management Suite',
      desc: 'Full-stack rental management platform with dedicated landlord & tenant workflows, user authentication, role-based access control, profile management, and property CRUD operations.',
      image: omniImg,
      imageGradient: 'linear-gradient(135deg, #ed733b 0%, #ff9f43 100%)',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap'],
      link: 'https://omnirental.onrender.com/'
    },
    {
      id: 3,
      title: 'Catering Services Platform',
      category: 'MERN Apps',
      subtitle: 'Food & Event Catering System',
      desc: 'Full-stack food catering management platform allowing users to browse event menus, customize package bookings, manage reservations, and handle customer order workflows.',
      imageGradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
      link: '#'
    },
    {
      id: 4,
      title: 'Amazon E-Commerce Clone',
      category: 'E-Commerce',
      subtitle: 'Full-Featured Shopping App',
      desc: 'Responsive e-commerce platform clone featuring dynamic product listing, interactive shopping cart management, user authentication, checkout workflows, and order summaries.',
      imageGradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      tags: ['React.js', 'Context API', 'JavaScript', 'CSS3', 'Node.js'],
      link: '#'
    },
    {
      id: 5,
      title: 'Product Listing Web App',
      category: 'MERN Apps',
      subtitle: 'Full-Stack Inventory App',
      desc: 'Product management web application featuring dynamic product listing, end-to-end CRUD functionality, RESTful API integration, and MongoDB-based data persistence.',
      imageGradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
      link: '#'
    },
    {
      id: 6,
      title: '3D Interactive Portfolio',
      category: '3D & Motion',
      subtitle: 'High-Performance Motion Website',
      desc: 'Creative personal portfolio featuring 300-frame GPU pre-decoded canvas animation, instant progressive loading (<0.5s), 60 FPS smooth scroll physics, 3D text emergence, and dark/light themes.',
      imageGradient: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
      tags: ['React.js', 'Vite', 'Canvas 2D/3D', 'CSS3', 'Modern Glassmorphism'],
      link: '#home'
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
            <span>PORTFOLIO PROJECTS</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Real-world client applications, full-stack MERN platforms, E-Commerce apps, and interactive web projects built by Indu Singh.
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
                style={{ 
                  backgroundImage: project.image ? `url(${project.image})` : project.imageGradient,
                  backgroundSize: 'cover',
                  backgroundPosition: 'top center'
                }}
              >
                <div className="work-category-chip">{project.category}</div>
                <div className="preview-overlay">
                  {project.link !== '#' && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="preview-action-btn demo-btn">
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
              <div className="work-info">
                <div className="work-subtitle-badge">{project.subtitle}</div>
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
