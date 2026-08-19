import React, { useEffect, useRef } from 'react';
import { useCms } from '../data/CmsContext';

export default function Services() {
  const { data } = useCms();
  const { services } = data;
  const gridRef = useRef(null);

  useEffect(() => {
    const gsap = window.gsap;
    if (!gsap) return;
    
    const container = gridRef.current;
    if (!container) return;
    
    const cards = container.querySelectorAll('.glass-card');
    
    gsap.fromTo(cards, 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, [services]);

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Comprehensive digital solutions tailored to accelerate your growth</p>
        
        <div className="row g-4" ref={gridRef} id="services-list">
          {services.map((srv, idx) => (
            <div className="col-lg-4 col-md-6" key={idx}>
              <div className="glass-card">
                <div className="service-icon">
                  <i className={srv.icon}></i>
                </div>
                <h3 className="service-title">{srv.title}</h3>
                <p className="service-text">{srv.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
