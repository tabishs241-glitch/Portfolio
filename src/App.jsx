import React from 'react';
import { Play, Video, PenTool, Layout, Mail, ArrowRight } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-content">
          <div className="nav-logo">Tabish<span className="text-gradient">Shahid</span></div>
          <div className="nav-links">
            <a href="#services" className="nav-link">Services</a>
            <a href="#portfolio" className="nav-link">Portfolio</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content animate-fade-in">
            <span className="hero-subtitle">Creative Marketing Agency</span>
            <h1>Transforming Ideas into <br/><span className="text-gradient">Digital Masterpieces</span></h1>
            <p>
              I specialize in high-end video editing, impactful social media design, and full-scale marketing campaigns that drive engagement and growth.
            </p>
            <div className="hero-buttons">
              <a href="#portfolio">
                <button className="flex-center" style={{ gap: '0.5rem' }}>
                  View My Work <ArrowRight size={18} />
                </button>
              </a>
              <a href="#contact">
                <button className="btn-outline">Let's Talk</button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <div className="container">
          <h2 className="text-center" style={{ textAlign: 'center' }}>My <span className="text-gradient">Services</span></h2>
          <p className="text-center" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            From pre-production planning to post-production polish and social media strategy, I cover every angle of your digital presence.
          </p>
          
          <div className="services-grid">
            <div className="glass-card service-card animate-fade-in delay-100">
              <div className="service-icon">
                <Video size={32} />
              </div>
              <h3>Video Editing</h3>
              <p>Professional post-production, color grading, sound design, and dynamic editing for both short-form (Reels/Shorts) and long-form content.</p>
            </div>
            
            <div className="glass-card service-card animate-fade-in delay-200">
              <div className="service-icon">
                <Layout size={32} />
              </div>
              <h3>Social Media Marketing</h3>
              <p>Strategic content planning, aesthetic feed design, and targeted campaigns to grow your audience and boost conversions.</p>
            </div>
            
            <div className="glass-card service-card animate-fade-in delay-300">
              <div className="service-icon">
                <PenTool size={32} />
              </div>
              <h3>Graphic Design</h3>
              <p>Eye-catching social media posts, thumbnails, and brand assets tailored to your unique visual identity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio">
        <div className="container">
          <h2 className="text-center" style={{ textAlign: 'center' }}>Selected <span className="text-gradient">Work</span></h2>
          
          <div className="portfolio-grid">
            {/* Video Portfolio Item */}
            <div className="portfolio-item glass-card animate-fade-in delay-100" style={{ padding: 0 }}>
              <div className="video-container">
                <iframe 
                  src="https://www.youtube.com/embed/3DD7gYFGQio?rel=0" 
                  title="YouTube video player" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="portfolio-info">
                <h3>Dynamic Short-Form Content</h3>
                <p>High-retention video editing with engaging captions and effects.</p>
              </div>
            </div>

            {/* Design Portfolio Item 1 */}
            <div className="portfolio-item glass-card animate-fade-in delay-200" style={{ padding: 0 }}>
              <div className="image-container">
                {/* Placeholder for the user's uploaded "Skin Haven" image */}
                <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
                  <PenTool size={48} style={{ margin: '0 auto 1rem auto', opacity: 0.5 }} />
                  <p>Design Portfolio Sample<br/>"Bridal Packages"</p>
                </div>
              </div>
              <div className="portfolio-info">
                <h3>Skin Haven - Service Menu</h3>
                <p>Clean, elegant design for aesthetic clinic packages.</p>
              </div>
            </div>

            {/* Design Portfolio Item 2 */}
            <div className="portfolio-item glass-card animate-fade-in delay-300" style={{ padding: 0, gridColumn: '1 / -1' }}>
              <div className="image-container" style={{ minHeight: '300px' }}>
                 {/* Placeholder for the user's uploaded "Skin's Glow" image */}
                 <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
                  <Layout size={48} style={{ margin: '0 auto 1rem auto', opacity: 0.5 }} />
                  <p>Infographic Sample<br/>"Enhance Your Skin's Glow"</p>
                </div>
              </div>
              <div className="portfolio-info">
                <h3>Educational Infographic</h3>
                <p>Engaging social media graphic breaking down skincare tips.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container">
          <div className="glass-card contact-content animate-fade-in">
            <h2>Let's create something <span className="text-gradient">amazing</span> together.</h2>
            <p style={{ margin: '1.5rem auto' }}>
              Ready to elevate your brand's digital presence? Get in touch to discuss your next project.
            </p>
            <a href="mailto:hello@example.com">
              <button className="flex-center" style={{ gap: '0.5rem', margin: '0 auto' }}>
                <Mail size={18} /> Contact Me
              </button>
            </a>
            
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Instagram">IG</a>
              <a href="#" className="social-link" aria-label="LinkedIn">IN</a>
              <a href="#" className="social-link" aria-label="Twitter">X</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Tabish Shahid. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
