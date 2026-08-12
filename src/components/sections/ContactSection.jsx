import React, { useState } from 'react';
import './ContactSection.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'MERN Stack App',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: 'MERN Stack App', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="contact-grid">
          
          {/* Left Info Column */}
          <div className="contact-info-col">
            <div className="section-badge">
              <span className="badge-dot"></span>
              <span>GET IN TOUCH</span>
            </div>
            <h2 className="section-title text-left">
              Let's Build Something <span className="gradient-text">Extraordinary</span>
            </h2>
            <p className="contact-text">
              Have an ambitious project idea, a freelance inquiry, or full-time opportunity? Drop a message below and I'll get back to you within 24 hours.
            </p>

            <div className="contact-methods">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <div className="item-label">Direct Email</div>
                  <a href="mailto:indusingh.dev@gmail.com" className="item-val">indusingh.dev@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <div className="item-label">Location</div>
                  <div className="item-val">India • Available Worldwide</div>
                </div>
              </div>
            </div>

            <div className="availability-badge">
              <span className="online-dot"></span>
              <span>Currently Available for New Projects</span>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="contact-form-col">
            <div className="form-card">
              {submitted ? (
                <div className="form-success">
                  <div className="success-icon">✓</div>
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for reaching out, Indu will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <h3 className="form-title">Send a Message</h3>
                  
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Project Type</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option value="MERN Stack App">MERN Stack App</option>
                      <option value="Web Development">High Performance Web Dev</option>
                      <option value="UI/UX Design">UI/UX & Animation</option>
                      <option value="SEO & Speed">SEO & Core Web Vitals</option>
                      <option value="Other">Other Inquiry</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Project Details</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project goals, timelines, and ideas..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-btn">
                    Send Message 🚀
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
