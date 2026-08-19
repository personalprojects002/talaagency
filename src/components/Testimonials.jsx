import React, { useEffect, useRef } from 'react';
import { useCms } from '../data/CmsContext';

export default function Testimonials() {
  const { data } = useCms();
  const { testimonials } = data;
  const gridRef = useRef(null);

  useEffect(() => {
    const gsap = window.gsap;
    if (!gsap) return;
    
    const container = gridRef.current;
    if (!container) return;
    
    const cards = container.querySelectorAll('.testimonial-card');
    
    gsap.fromTo(cards, 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, [testimonials]);

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="section-title">Client Testimonials</h2>
        <p className="section-subtitle">What our clients say about us</p>
        
        <div className="row g-4" ref={gridRef} id="testimonials-list">
          {testimonials.map((t, idx) => (
            <div className="col-lg-4 col-md-6" key={idx}>
              <div className="testimonial-card">
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  <img src={t.image} alt={t.author} />
                  <div>
                    <h5>{t.author}</h5>
                    <p>{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
