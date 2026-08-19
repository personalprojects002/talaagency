import React, { useEffect, useRef } from 'react';
import { useCms } from '../data/CmsContext';

export default function Counters() {
  const { data } = useCms();
  const { counters } = data;
  const sectionRef = useRef(null);

  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    
    if (!gsap || !ScrollTrigger) return;
    
    const container = sectionRef.current;
    if (!container) return;
    
    const counterNumbers = container.querySelectorAll('.counter-number');
    
    let hasAnimated = false;
    ScrollTrigger.create({
      trigger: container,
      start: 'top 80%',
      onEnter: () => {
        if (!hasAnimated) {
          hasAnimated = true;
          counterNumbers.forEach((counter) => {
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

    return () => {
      ScrollTrigger.getAll().forEach(t => {
        if (t.trigger === container) t.kill();
      });
    };
  }, [counters]);

  return (
    <section ref={sectionRef} className="counter-section">
      <div className="container">
        <div className="row justify-content-center" id="counters-list">
          {counters.map((c, idx) => (
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0" key={idx}>
              <div className="counter-box">
                <div className="counter-icon">
                  <i className={c.icon}></i>
                </div>
                <div className="counter-number" data-target={c.target}>0</div>
                <div className="counter-label">{c.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
