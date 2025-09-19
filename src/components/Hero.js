import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        {/* <div className="hero-inner panel"> */}
          <h2 className="hero-title">Vanshita Shah</h2>
          <p className="hero-subtitle muted">Python Django Backend Developer
          </p>
          <p className="hero-text muted">with 2+ years of experience in designing and developing scalable web applications. Proficient in Django, Django Rest Framework (DRF), and MySQL, with expertise in building and optimizing RESTful APIs. Skilled in ORM, database design, performance tuning, and backend logic implementation to ensure efficient and secure applications. Adept at debugging, troubleshooting, and improving code quality. Passionate about solving complex problems and contributing to product-based solutions. .</p>
          
          <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>Gujarat, India</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <span>+91 9725085320</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <span>vanshi1405shah@gmail.com</span>
          </div>
        </div>
        <div className="socials" aria-label="Social links">
        <a
          className="icon-btn"
          href="https://www.linkedin.com/in/vanshita-shah-2a2600210/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM8.5 8h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.1c0-1.7-.03-3.9-2.38-3.9-2.38 0-2.75 1.86-2.75 3.78V24h-4V8z"/>
          </svg>
        </a>

        <a
          className="icon-btn"
          href="tel:+919725085320"
          aria-label="Call"
          title="Call"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V22a1 1 0 01-1 1C10.07 23 1 13.93 1 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
          </svg>
        </a>

        <a
          className="icon-btn"
          href="mailto:vanshi1405shah@gmail.com"
          aria-label="Email"
          title="Email"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </a>

        <a
          className="icon-btn"
          href="https://x.com/vanshi_1405"
          // target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          title="Twitter"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 001.87-2.36 8.54 8.54 0 01-2.71 1.04 4.26 4.26 0 00-7.27 3.88A12.09 12.09 0 013 5.15a4.25 4.25 0 001.32 5.68 4.22 4.22 0 01-1.93-.53v.05a4.26 4.26 0 003.42 4.18 4.29 4.29 0 01-1.92.07 4.26 4.26 0 003.98 2.96A8.54 8.54 0 012 19.54a12.05 12.05 0 006.53 1.92c7.84 0 12.13-6.5"/>
             </svg>
        </a>
      </div>
        
        {/* </div> */}
      </div>
    </section>
  );
}

export default Hero;


