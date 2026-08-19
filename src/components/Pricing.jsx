import React, { useEffect, useRef } from 'react';
import { useCms } from '../data/CmsContext';

export default function Pricing({ onNavigate }) {
  const { data } = useCms();
  const { pricing } = data;
  const gridRef = useRef(null);

  useEffect(() => {
    const gsap = window.gsap;
    if (!gsap) return;
    
    const container = gridRef.current;
    if (!container) return;
    
    const cards = container.querySelectorAll('.pricing-card');
    
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
  }, [pricing]);

  const handleAction = (e) => {
    e.preventDefault();
    onNavigate('contact');
  };

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <h2 className="section-title">Pricing Plans</h2>
        <p className="section-subtitle">Simple, transparent pricing to power your creative vision</p>
        
        <div className="row g-4 justify-content-center" ref={gridRef} id="pricing-list">
          {pricing.map((plan, idx) => (
            <div className="col-lg-4 col-md-6" key={idx}>
              <div className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
                {plan.featured && <div className="pricing-badge">Most Popular</div>}
                <div className="pricing-header">
                  <h3 className="pricing-name">{plan.name}</h3>
                  <p className="pricing-description">{plan.description}</p>
                  <div className="pricing-price">
                    {plan.price}
                    <span>/month</span>
                  </div>
                  <div className="pricing-original">{plan.original}/month</div>
                </div>
                
                <ul className="pricing-features">
                  {plan.features.map((feat, fIdx) => (
                    <li className={feat.included ? '' : 'not-included'} key={fIdx}>
                      <i className={feat.included ? 'fas fa-check-circle' : 'fas fa-times-circle'}></i>
                      {feat.name}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="#contact"
                  onClick={handleAction}
                  className={`btn-pricing ${plan.featured ? 'btn-pricing-primary' : 'btn-pricing-outline'}`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="row mt-5 justify-content-center">
          <div className="col-lg-8">
            <div className="pricing-guarantee text-center">
              <i className="fas fa-shield-alt"></i>
              <h4>100% Satisfaction Guarantee</h4>
              <p>We are committed to delivering premium quality work. If you are not completely satisfied with our services in the first 14 days, we will work with you to make it right or refund your investment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
