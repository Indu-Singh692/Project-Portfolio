import React, { useState } from 'react';
import './ContactSection.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'MERN Stack Development',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    try {
      // Automatic direct delivery via Web3Forms API to indusingh7746@gmail.com
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "eb6c33e8-5b43-4217-91f8-08471b058bf6", // Public Web3Forms API service key
          name: formData.name,
          email: formData.email,
          subject: `${formData.subject} - Portfolio Inquiry from ${formData.name}`,
          message: formData.message,
          to_email: "indusingh7746@gmail.com"
        })
      });

      const result = await res.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        // Fallback mailto compose redirection if key is pending
        const mailtoUrl = `mailto:indusingh7746@gmail.com?subject=${encodeURIComponent(formData.subject + ' from ' + formData.name)}&body=${encodeURIComponent('Name: ' + formData.name + '\nEmail: ' + formData.email + '\n\nMessage:\n' + formData.message)}`;
        window.location.href = mailtoUrl;
        setSubmitted(true);
      }
    } catch (err) {
      // Fallback mailto redirect
      const mailtoUrl = `mailto:indusingh7746@gmail.com?subject=${encodeURIComponent(formData.subject + ' from ' + formData.name)}&body=${encodeURIComponent('Name: ' + formData.name + '\nEmail: ' + formData.email + '\n\nMessage:\n' + formData.message)}`;
      window.location.href = mailtoUrl;
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: 'MERN Stack Development', message: '' });
      }, 5000);
    }
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
              Looking for a dedicated MERN Stack Developer, Software Engineer, or Full-Stack Project Collaborator? Send a direct message below or click my email address to compose an email!
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
                  <div className="item-label">Direct Email (Click to Compose)</div>
                  <a href="mailto:indusingh7746@gmail.com" className="item-val">indusingh7746@gmail.com ✉️</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <div className="item-label">Phone</div>
                  <a href="tel:+919516067746" className="item-val">+91-9516067746</a>
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
                  <div className="item-val">Indore, Madhya Pradesh • India</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-links-row">
              <a href="https://linkedin.com/in/indu-singh" target="_blank" rel="noreferrer" className="social-chip linkedin">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                LinkedIn Profile
              </a>
              <a href="https://github.com/Indu-Singh" target="_blank" rel="noreferrer" className="social-chip github">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
                GitHub Profile
              </a>
            </div>

            <div className="availability-badge mt-16">
              <span className="online-dot"></span>
              <span>Open for Full-time Roles & Projects</span>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="contact-form-col">
            <div className="form-card">
              {submitted ? (
                <div className="form-success">
                  <div className="success-icon">✓</div>
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for reaching out! Your message has been delivered directly to Indu Singh (`indusingh7746@gmail.com`).</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <h3 className="form-title">Send a Direct Message</h3>
                  
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
                    <label htmlFor="subject">Subject / Project Type</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option value="MERN Stack Development">MERN Stack Development</option>
                      <option value="Full Stack Web App">Full Stack Web App</option>
                      <option value="Client Project / Freelance">Client Project / Freelance</option>
                      <option value="Full-time Opportunity">Full-time Job Opportunity</option>
                      <option value="Other">Other Inquiry</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message Details</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share project details, job opportunities, or inquiries..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending Message...' : 'Send Message 🚀'}
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
