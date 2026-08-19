import React, { useEffect, useRef } from 'react';
import { useCms } from '../data/CmsContext';

export default function Team() {
  const { data } = useCms();
  const { team } = data;
  const gridRef = useRef(null);

  useEffect(() => {
    const gsap = window.gsap;
    if (!gsap) return;
    
    const container = gridRef.current;
    if (!container) return;
    
    const cards = container.querySelectorAll('.team-card');
    
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
  }, [team]);

  return (
    <section id="team" className="team">
      <div className="container">
        <h2 className="section-title">Our Team</h2>
        <p className="section-subtitle">Experts dedicated to your success</p>
        
        <div className="row g-4" ref={gridRef} id="team-list">
          {team.map((member, idx) => (
            <div className="col-lg-4 col-md-6" key={idx}>
              <div className="team-card">
                <div className="team-img-wrapper">
                  <img src={member.image} alt={member.name} />
                </div>
                <h4>{member.name}</h4>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
                <div className="social-links">
                  {member.social?.facebook && member.social.facebook !== '#' && (
                    <a href={member.social.facebook} aria-label="Facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  )}
                  {member.social?.twitter && member.social.twitter !== '#' && (
                    <a href={member.social.twitter} aria-label="Twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                  )}
                  {member.social?.linkedin && member.social.linkedin !== '#' && (
                    <a href={member.social.linkedin} aria-label="LinkedIn">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
