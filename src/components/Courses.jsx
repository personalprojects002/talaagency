import React, { useEffect, useRef } from 'react';
import { useCms } from '../data/CmsContext';

export default function Courses({ onNavigate }) {
  const { data } = useCms();
  const { courses } = data;
  const gridRef = useRef(null);

  useEffect(() => {
    const gsap = window.gsap;
    if (!gsap) return;
    
    const container = gridRef.current;
    if (!container) return;
    
    const cards = container.querySelectorAll('.course-card');
    
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
  }, [courses]);

  const handleEnroll = (e) => {
    e.preventDefault();
    onNavigate('contact');
  };

  return (
    <section id="courses" className="courses">
      <div className="container">
        <h2 className="section-title">Courses &amp; Training</h2>
        <p className="section-subtitle">Master the skills that drive digital success</p>
        
        <div className="row g-4" ref={gridRef} id="courses-list">
          {courses.map((crs, idx) => (
            <div className="col-lg-4 col-md-6" key={idx}>
              <div className="course-card">
                <div className="course-image">
                  <img src={crs.image} alt={crs.title} />
                </div>
                <div className="course-content">
                  <h3 className="course-title">{crs.title}</h3>
                  <p className="course-text">{crs.text}</p>
                  <a href="#contact" onClick={handleEnroll} className="btn-primary-custom w-100 justify-content-center">
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
