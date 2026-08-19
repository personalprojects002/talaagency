import React, { useEffect, useRef } from 'react';
import { useCms } from '../data/CmsContext';

export default function Hero({ onNavigate }) {
  const { data } = useCms();
  const { hero } = data;
  const statsRef = useRef(null);

  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    
    if (!gsap || !ScrollTrigger) return;
    
    const statsContainer = statsRef.current;
    if (!statsContainer) return;
    
    const counters = statsContainer.querySelectorAll('.counter');
    
    // Animate stats counters
    let hasAnimated = false;
    ScrollTrigger.create({
      trigger: statsContainer,
      start: 'top 85%',
      onEnter: () => {
        if (!hasAnimated) {
          hasAnimated = true;
          counters.forEach((counter) => {
            const targetVal = parseInt(counter.getAttribute('data-target'), 10) || 0;
            gsap.fromTo(counter, 
              { innerText: 0 },
              {
                innerText: targetVal,
                duration: 2,
                snap: { innerText: 1 },
                ease: 'power2.out'
              }
            );
          });
        }
      }
    });

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach(t => {
        if (t.trigger === statsContainer) t.kill();
      });
    };
  }, [hero.stats]);

  const handleExplore = (e) => {
    e.preventDefault();
    onNavigate('services');
  };

  const handlePortfolio = (e) => {
    e.preventDefault();
    onNavigate('portfolio');
  };

  const handleArrowScroll = (e) => {
    e.preventDefault();
    onNavigate('about');
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 hero-content">
            <div className="hero-badge" id="hero-badge-container">
              <span className="pulse"></span>
              <span id="hero-badge-text">{hero.badge}</span>
            </div>
            <h1 id="hero-title">{hero.title}</h1>
            <p className="lead" id="hero-lead">{hero.lead}</p>
            <p className="hero-description" id="hero-description">{hero.description}</p>
            
            <div className="d-flex flex-wrap gap-3">
              <a href="#services" onClick={handleExplore} className="btn-primary-custom">
                Explore Services
                <i className="fas fa-arrow-right"></i>
              </a>
              <a href="#portfolio" onClick={handlePortfolio} className="btn-outline-custom">
                <i className="fas fa-play-circle"></i>
                View Portfolio
              </a>
            </div>
            
            <div className="hero-stats" ref={statsRef} id="hero-stats-list">
              {hero.stats.map((stat, idx) => (
                <div className="stat-item" key={idx}>
                  <h3 className="counter" data-target={stat.target}>0</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <a href="#about" onClick={handleArrowScroll} className="scroll-indicator">
        <i className="fas fa-chevron-down fa-2x"></i>
      </a>
    </section>
  );
}
