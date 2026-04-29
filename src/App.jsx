import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import './App.css';

function App() {
  
  // Simple intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          entry.target.style.opacity = 1;
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-animate').forEach(el => {
      el.style.opacity = 0;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-content">
          <div className="nav-logo">TS.</div>
          <div className="nav-links">
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#video-portfolio" className="nav-link">Video</a>
            <a href="#design-portfolio" className="nav-link">Design</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      {/* Page 1: Hero Section */}
      <section id="home" className="hero">
        <div className="bg-circle hero-circle"></div>
        <div className="container">
          <div className="hero-content scroll-animate">
            <h2 className="hero-header">TABISH SHAHID</h2>
            <h1 className="hero-title">MARKETING PORTFOLIO</h1>
            <p className="hero-desc">
              Crafting Digital Experiences & Marketing Masterpieces
            </p>
            <a href="#contact">
              <button className="primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Let's get in touch <ArrowRight size={20} />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Page 2: Experience, Qualifications & Services */}
      <section id="experience">
        <div className="container">
          <div className="resume-grid">
            {/* Left Side: Experience */}
            <div className="resume-column scroll-animate">
              <h3>MY EXPERIENCE</h3>
              
              <div className="resume-item">
                <span className="date">Feb 2024 - Present</span>
                <h4>Digital Marketing Specialist</h4>
                <p>Software Finder · Full-time</p>
              </div>
              
              <div className="resume-item">
                <span className="date">July 2023 - Feb 2024</span>
                <h4>Sales & Marketing Manager</h4>
                <p>LucrumX · Full-time</p>
              </div>

              <div className="resume-item">
                <span className="date">Feb 2023 - July 2023</span>
                <h4>Digital Marketing Executive</h4>
                <p>iTitans · Full-time</p>
              </div>

              <div className="resume-item">
                <span className="date">Aug 2022 - Sep 2022</span>
                <h4>Supply Chain Internee</h4>
                <p>PepsiCo · Internship</p>
              </div>
            </div>

            {/* Right Side: Qualifications */}
            <div className="resume-column scroll-animate delay-200">
              <h3>MY EDUCATION</h3>
              
              <div className="resume-item">
                <span className="date">2018 - 2022</span>
                <h4>Lahore School of Economics</h4>
                <p>BSc. Hons - Double Majors in Finance and Marketing</p>
              </div>
              
              <div className="resume-item">
                <span className="date">2016 - 2018</span>
                <h4>Beaconhouse School System</h4>
                <p>A-Level</p>
              </div>

              <div className="resume-item">
                <span className="date">2014 - 2016</span>
                <h4>Beaconhouse School System</h4>
                <p>O-Level</p>
              </div>
            </div>
          </div>

          <div className="section-divider"></div>

          {/* Services */}
          <div className="scroll-animate">
            <h3 style={{ fontFamily: 'Anton', fontSize: '3rem', color: 'var(--primary-color)' }}>SERVICES</h3>
            <div className="services-grid">
              <div className="service-card">
                <h4>VIDEO EDITING</h4>
                <p>Dynamic short-form and long-form video editing that guarantees high retention and engagement.</p>
              </div>
              <div className="service-card">
                <h4>GRAPHIC DESIGN</h4>
                <p>Striking social media posts, branding, and layouts that capture your audience's attention instantly.</p>
              </div>
              <div className="service-card">
                <h4>ADS & MARKETING</h4>
                <p>Strategic ad campaigns, audience targeting, and end-to-end digital marketing execution.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Page 3: Video Portfolio - Skin Haven */}
      <section id="video-portfolio">
        <div className="container">
          <div className="client-section scroll-animate">
            <div className="client-header">
              <div>
                <p style={{ color: 'var(--primary-color)', margin: 0, fontWeight: 700, letterSpacing: '2px' }}>VIDEO EDITING</p>
                <h3>SKIN HAVEN</h3>
              </div>
              <a href="https://www.instagram.com/skinhavenpk?igsh=bWs2djd6b2ltOGsx" target="_blank" rel="noreferrer">View Instagram</a>
            </div>
            
            <div className="video-grid-4">
              <div className="video-container">
                <iframe src="https://www.youtube.com/embed/aXLweklod1E" allowFullScreen></iframe>
              </div>
              <div className="video-container">
                <iframe src="https://www.youtube.com/embed/KLo-BMtBLRA" allowFullScreen></iframe>
              </div>
              <div className="video-container">
                <iframe src="https://www.youtube.com/embed/53XjYB36IaM" allowFullScreen></iframe>
              </div>
              <div className="video-container">
                <iframe src="https://www.youtube.com/embed/G4H1zQE6APE" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Page 4: Video Portfolio - Artisan & QRG */}
      <section>
        <div className="container">
          <div className="client-section scroll-animate">
            <div className="client-header">
              <div>
                <p style={{ color: 'var(--primary-color)', margin: 0, fontWeight: 700, letterSpacing: '2px' }}>VIDEO EDITING</p>
                <h3>ARTISAN</h3>
              </div>
            </div>
            <div className="video-grid-2">
              <div className="video-container">
                <iframe src="https://www.youtube.com/embed/GitcncN0KU0" allowFullScreen></iframe>
              </div>
              <div className="video-container">
                <iframe src="https://www.youtube.com/embed/3DD7gYFGQio" allowFullScreen></iframe>
              </div>
            </div>
          </div>

          <div className="client-section scroll-animate">
            <div className="client-header">
              <div>
                <p style={{ color: 'var(--primary-color)', margin: 0, fontWeight: 700, letterSpacing: '2px' }}>VIDEO EDITING</p>
                <h3>QRG</h3>
              </div>
            </div>
            <div className="video-grid-2">
              <div className="video-container">
                <iframe src="https://www.youtube.com/embed/bYqF4wtnR6A" allowFullScreen></iframe>
              </div>
              <div className="video-container">
                <iframe src="https://www.youtube.com/embed/tb1IXKcjbgU" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Page 5: Video Portfolio - Beautiful, Irum Khan, Joy Story */}
      <section>
        <div className="container">
          <div className="client-section scroll-animate">
            <div className="client-header">
              <div>
                <p style={{ color: 'var(--primary-color)', margin: 0, fontWeight: 700, letterSpacing: '2px' }}>MIXED CLIENTS</p>
                <h3>VARIOUS WORK</h3>
              </div>
            </div>
            
            <div className="video-grid-3">
              <div className="video-container">
                {/* Beautiful */}
                <iframe src="https://www.youtube.com/embed/DXrcS2_Jntc" allowFullScreen></iframe>
              </div>
              
              <div className="video-container">
                {/* Joy Story (Instagram embed alternative since iframe of IG blocks sometimes, but we try) */}
                <iframe src="https://www.instagram.com/reel/C5gUggjokl7/embed" allowFullScreen></iframe>
              </div>

              <div className="video-container">
                {/* Irum Khan */}
                <iframe src="https://www.youtube.com/embed/glUD3Qp5ooM" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Page 6: Graphic Design Work */}
      <section id="design-portfolio">
        <div className="container">
          <div className="client-section scroll-animate">
            <div className="client-header">
              <div>
                <p style={{ color: 'var(--primary-color)', margin: 0, fontWeight: 700, letterSpacing: '2px' }}>GRAPHIC DESIGN</p>
                <h3>CLIENT SHOWCASE</h3>
              </div>
              <a href="https://www.canva.com/design/DAHIGo_zZtc/fobizWPyJr9YnvBMCfD-lA/edit" target="_blank" rel="noreferrer">View Full Deck</a>
            </div>
            
            <div className="services-grid" style={{ marginTop: '2rem' }}>
              <div className="service-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
                <h4 style={{ margin: 0 }}>ARTISAN COFFEE</h4>
              </div>
              <div className="service-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
                <h4 style={{ margin: 0 }}>JOY STORY</h4>
              </div>
              <div className="service-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
                <h4 style={{ margin: 0 }}>SKIN HAVEN</h4>
              </div>
              <div className="service-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
                <h4 style={{ margin: 0 }}>KOMMERCE HUB</h4>
              </div>
              <div className="service-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
                <h4 style={{ margin: 0 }}>NOIR STREET</h4>
              </div>
              <div className="service-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
                <h4 style={{ margin: 0 }}>REGAL RUG WORKS</h4>
              </div>
            </div>
            <p style={{ marginTop: '2rem', textAlign: 'center' }}>
              (Replace these placeholder cards with actual static post images via the code later!)
            </p>
          </div>
        </div>
      </section>

      {/* Page 7: Contact Me */}
      <section id="contact" style={{ minHeight: '80vh' }}>
        <div className="container scroll-animate">
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '4rem' }}>LET'S GET IN TOUCH</h2>
          
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-label">Email Me</span>
                <a href="mailto:tabishs241@gmail.com" className="contact-value">tabishs241@gmail.com</a>
              </div>
              
              <div className="contact-item">
                <span className="contact-label">Call Me</span>
                <a href="tel:03174127048" className="contact-value">0317 4127048</a>
              </div>
              
              <div className="contact-item">
                <span className="contact-label">Connect</span>
                <a href="https://www.linkedin.com/in/tabish0012" target="_blank" rel="noreferrer" className="contact-value">LinkedIn Profile</a>
              </div>
            </div>
            
            <div>
              <div className="bg-circle" style={{ width: '300px', height: '300px', position: 'relative', margin: '0 auto' }}></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
