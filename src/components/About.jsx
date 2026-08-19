import React, { useEffect } from 'react';
import { useCms } from '../data/CmsContext';

export default function About() {
  const { data } = useCms();
  const { about } = data;

  useEffect(() => {
    const gsap = window.gsap;
    if (!gsap) return;
    
    // Animation for title
    gsap.fromTo('#about .section-title', 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#about .section-title',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p className="section-subtitle">Where imagination meets innovation</p>
        
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="about-image">
              <img id="about-image" src={about.image} alt="Founder Intro" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-6" id="about-text-container">
            <p className="lead text-white-50 mb-4" id="about-lead">{about.lead}</p>
            {about.paragraphs.map((p, idx) => (
              <p className="text-secondary mb-4" key={idx}>{p}</p>
            ))}
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="mission-vision-card">
              <i className="fas fa-bullseye"></i>
              <h3>Our Mission</h3>
              <p className="text-secondary mb-0" id="about-mission">{about.mission}</p>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="mission-vision-card">
              <i className="fas fa-eye"></i>
              <h3>Our Vision</h3>
              <p className="text-secondary mb-0" id="about-vision">{about.vision}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
