import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { ArrowRight, ArrowLeft, Image as ImageIcon } from 'lucide-react';
import './App.css';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const staggerGrid = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// Animated video card with hover effects
const VideoCard = ({ src }) => (
  <motion.div 
    className="video-card"
    variants={scaleIn}
    whileHover={{ y: -10, transition: { duration: 0.3 } }}
  >
    <div className="video-container">
      <iframe src={src} allowFullScreen></iframe>
    </div>
  </motion.div>
);

// Creative section divider
const Divider = ({ text }) => (
  <div className="creative-divider">
    <span className="divider-line"></span>
    <span className="divider-text">{text}</span>
    <span className="divider-line"></span>
  </div>
);

// Reusable animated section component
const AnimatedSection = ({ children, className, id }) => {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
    >
      {children}
    </motion.section>
  );
};

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero">
        {/* Floating Sticker */}
        <svg className="sticker" viewBox="0 0 120 120">
          <path id="circlePath" d="M 60, 60 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" fill="none"/>
          <text fontSize="10" fontFamily="Outfit" fontWeight="700" fill="#f8f8f8" letterSpacing="4">
            <textPath href="#circlePath">CREATIVE ✦ MARKETING ✦ DESIGN ✦ VIDEO ✦ </textPath>
          </text>
        </svg>

        <div className="container">
          <motion.div 
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="badge">✦ Digital & Creative Marketing</motion.div>
            <motion.h1 variants={fadeInUp}>
              Tabish Shahid.<br/><span className="text-outline">Portfolio.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="hero-desc">
              Crafting elevated digital experiences, high-retention video content, and aesthetic marketing masterpieces for modern brands.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <a href="#contact">
                <button>
                  Let's get in touch <ArrowRight size={18} />
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Banner */}
      <div className="marquee-container">
        <div className="marquee-content">
          <span className="marquee-item">✦ Video Editing</span>
          <span className="marquee-item">✦ Graphic Design</span>
          <span className="marquee-item">✦ Social Media</span>
          <span className="marquee-item">✦ Ads & Marketing</span>
          <span className="marquee-item">✦ Brand Strategy</span>
          <span className="marquee-item">✦ Content Creation</span>
          <span className="marquee-item">✦ Video Editing</span>
          <span className="marquee-item">✦ Graphic Design</span>
          <span className="marquee-item">✦ Social Media</span>
          <span className="marquee-item">✦ Ads & Marketing</span>
          <span className="marquee-item">✦ Brand Strategy</span>
          <span className="marquee-item">✦ Content Creation</span>
        </div>
      </div>

      {/* Experience & Education */}
      <AnimatedSection id="experience">
        <div className="container">
          <div className="section-header">
            <h2>Experience &<br/>Education</h2>
          </div>
          
          <div className="resume-section">
            <div className="resume-column">
              <div className="resume-item glass-panel">
                <span className="date">Feb 2024 - Present</span>
                <h4>Digital Marketing Specialist</h4>
                <p>Software Finder</p>
              </div>
              <div className="resume-item glass-panel">
                <span className="date">July 2023 - Feb 2024</span>
                <h4>Sales & Marketing Manager</h4>
                <p>LucrumX</p>
              </div>
              <div className="resume-item glass-panel">
                <span className="date">Feb 2023 - July 2023</span>
                <h4>Digital Marketing Executive</h4>
                <p>iTitans</p>
              </div>
              <div className="resume-item glass-panel">
                <span className="date">Aug 2022 - Sep 2022</span>
                <h4>Supply Chain Internee</h4>
                <p>PepsiCo</p>
              </div>
            </div>

            <div className="resume-column">
              <div className="resume-item glass-panel">
                <span className="date">2018 - 2022</span>
                <h4>Lahore School of Economics</h4>
                <p>BSc. Hons - Double Majors in Finance and Marketing</p>
              </div>
              <div className="resume-item glass-panel">
                <span className="date">2016 - 2018</span>
                <h4>Beaconhouse School System</h4>
                <p>A-Level</p>
              </div>
              <div className="resume-item glass-panel">
                <span className="date">2014 - 2016</span>
                <h4>Beaconhouse School System</h4>
                <p>O-Level</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Services */}
      <AnimatedSection id="services">
        <div className="container">
          <div className="section-header">
            <h2>Capabilities</h2>
          </div>
          <div className="services-grid">
            <div className="service-card glass-panel">
              <h4>Video Editing</h4>
              <p>Dynamic short-form and long-form video editing focused on storytelling, pacing, and high audience retention.</p>
            </div>
            <div className="service-card glass-panel">
              <h4>Graphic Design</h4>
              <p>Striking social media posts, branding materials, and aesthetic layouts that capture your audience instantly.</p>
            </div>
            <div className="service-card glass-panel">
              <h4>Ads & Marketing</h4>
              <p>Strategic ad campaigns, audience targeting, and end-to-end digital marketing execution for growth.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Video Portfolio */}
      <AnimatedSection id="video-portfolio">
        <div className="container">
          <div className="section-header">
            <h2>Video Editing</h2>
            <p>Selected works from various clients</p>
          </div>

          <div style={{ marginBottom: '6rem' }}>
            <h3 style={{ marginBottom: '2rem' }}>Skin Haven</h3>
            <motion.div className="video-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerGrid}>
              <VideoCard src="https://www.youtube.com/embed/aXLweklod1E" />
              <VideoCard src="https://www.youtube.com/embed/KLo-BMtBLRA" />
              <VideoCard src="https://www.youtube.com/embed/53XjYB36IaM" />
              <VideoCard src="https://www.youtube.com/embed/G4H1zQE6APE" />
              <VideoCard src="https://www.youtube.com/embed/xrsCSg7lf50" />
              <VideoCard src="https://www.youtube.com/embed/-0TGhmGT2zs" />
            </motion.div>
          </div>

          <Divider text="✦" />

          <div style={{ marginBottom: '6rem' }}>
            <h3 style={{ marginBottom: '2rem' }}>Artisan</h3>
            <motion.div className="video-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerGrid}>
              <VideoCard src="https://www.youtube.com/embed/-ITOLUl-8bg" />
              <VideoCard src="https://www.youtube.com/embed/sATjgUd-irM" />
              <VideoCard src="https://www.youtube.com/embed/EjWltiHlKKM" />
            </motion.div>
          </div>

          <Divider text="✦" />

          <div style={{ marginBottom: '6rem' }}>
            <h3 style={{ marginBottom: '2rem' }}>QRG</h3>
            <motion.div className="video-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerGrid}>
              <VideoCard src="https://www.youtube.com/embed/c03r_J1KyNI" />
              <VideoCard src="https://www.youtube.com/embed/cj252cb89MM" />
              <VideoCard src="https://www.youtube.com/embed/WmLap3silEU" />
            </motion.div>
          </div>

          <Divider text="✦" />

          <div>
            <h3 style={{ marginBottom: '2rem' }}>Some of my other work</h3>
            <motion.div className="video-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerGrid}>
              <VideoCard src="https://www.youtube.com/embed/DXrcS2_Jntc" />
              <VideoCard src="https://drive.google.com/file/d/19ampIJ7pJyxmbmE1INR9Uhup-ueBFkPp/preview" />
              <VideoCard src="https://www.youtube.com/embed/glUD3Qp5ooM" />
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Graphic Design */}
      <AnimatedSection id="design-portfolio">
        <div className="container">
          <div className="section-header">
            <h2>Design Showcase</h2>
            <p>Click on a client to view their static posts & creatives.</p>
          </div>
          
          <div className="design-grid">
            <Link to="/client/artisan-coffee" className="design-card">
              <h3>Artisan Coffee</h3>
              <span>View Slides <ArrowRight size={16} /></span>
            </Link>
            <Link to="/client/joy-story" className="design-card">
              <h3>Joy Story</h3>
              <span>View Slides <ArrowRight size={16} /></span>
            </Link>
            <Link to="/client/skin-haven" className="design-card">
              <h3>Skin Haven</h3>
              <span>View Slides <ArrowRight size={16} /></span>
            </Link>
            <Link to="/client/kommerce-hub" className="design-card">
              <h3>Kommerce Hub</h3>
              <span>View Slides <ArrowRight size={16} /></span>
            </Link>
            <Link to="/client/noir-street" className="design-card">
              <h3>Noir Street</h3>
              <span>View Slides <ArrowRight size={16} /></span>
            </Link>
            <Link to="/client/regal-rug-works" className="design-card">
              <h3>Regal Rug Works</h3>
              <span>View Slides <ArrowRight size={16} /></span>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact */}
      <AnimatedSection id="contact">
        <div className="container">
          <div className="section-header" style={{ justifyContent: 'center', textAlign: 'center' }}>
            <h2 style={{ margin: '0 auto' }}>Ready to collaborate?</h2>
          </div>
          <div className="contact-grid">
            <a href="mailto:tabishs241@gmail.com" className="contact-card glass-panel">
              <p>Email</p>
              <h4>tabishs241@gmail.com</h4>
            </a>
            <a href="tel:03174127048" className="contact-card glass-panel">
              <p>Phone</p>
              <h4>0317 4127048</h4>
            </a>
            <a href="https://www.linkedin.com/in/tabish0012" target="_blank" rel="noreferrer" className="contact-card glass-panel">
              <p>Social</p>
              <h4>LinkedIn</h4>
            </a>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
};

const ClientPage = () => {
  const { clientId } = useParams();
  
  // Format the ID to a readable title
  const title = clientId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="client-page container">
      <Link to="/" className="back-link">
        <ArrowLeft size={20} /> Back to Home
      </Link>
      
      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>{title}</h1>
        <p>Static Posts & Design Creatives</p>
        
        <div className="upload-placeholder">
          <ImageIcon size={48} />
          <h3>Upload Slides Here</h3>
          <p style={{ textAlign: 'center' }}>
            Save your PPT slides as images (e.g., slide1.png) and add them to the <code>public/</code> folder. <br/>
            Then reference them here using <code>&lt;img src="/slide1.png" /&gt;</code> in the App.jsx file.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="noise-overlay"></div>
        <nav className="navbar">
          <div className="container nav-content">
            <Link to="/" className="nav-logo">Tabish.</Link>
            <div className="nav-links">
              <a href="/#experience" className="nav-link">Experience</a>
              <a href="/#video-portfolio" className="nav-link">Work</a>
              <a href="/#contact" className="nav-link">Contact</a>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/client/:clientId" element={<ClientPage />} />
        </Routes>
        
        <footer style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-secondary)', borderTop: '1px solid var(--border-color)', marginTop: '4rem' }}>
          <p>&copy; {new Date().getFullYear()} Tabish Shahid. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
