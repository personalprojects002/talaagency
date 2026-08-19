import React, { useState, useEffect, useRef } from 'react';
import { useCms } from '../data/CmsContext';

export default function Portfolio({ onPlayVideo }) {
  const { data } = useCms();
  const { portfolio } = data;
  const [activeFilter, setActiveFilter] = useState('all');
  const gridRef = useRef(null);

  const filteredItems = portfolio.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  useEffect(() => {
    const gsap = window.gsap;
    if (!gsap) return;

    const container = gridRef.current;
    if (!container) return;

    const items = container.querySelectorAll('.portfolio-item');
    gsap.fromTo(items, 
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        stagger: 0.05,
        ease: 'power2.out'
      }
    );
  }, [activeFilter, portfolio]);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const handleItemClick = (item) => {
    if (item.category === 'video') {
      // Trigger video play using a default video id if none exists in the json
      const videoId = item.videoId || 'qYgpnwH3F4M'; // Default YouTube video id
      onPlayVideo(videoId);
    }
  };

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="section-title">Our Portfolio</h2>
        <p className="section-subtitle">Showcasing our creative excellence</p>
        
        <div className="text-center mb-5">
          <button
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterClick('all')}
          >
            All
          </button>
          <button
            className={`filter-btn ${activeFilter === 'video' ? 'active' : ''}`}
            onClick={() => handleFilterClick('video')}
          >
            Video
          </button>
          <button
            className={`filter-btn ${activeFilter === 'design' ? 'active' : ''}`}
            onClick={() => handleFilterClick('design')}
          >
            Design
          </button>
          <button
            className={`filter-btn ${activeFilter === 'marketing' ? 'active' : ''}`}
            onClick={() => handleFilterClick('marketing')}
          >
            Marketing
          </button>
        </div>
        
        <div className="row" ref={gridRef} id="portfolio-grid">
          {filteredItems.map((item, idx) => (
            <div
              className="col-lg-4 col-md-6 portfolio-item"
              data-category={item.category}
              onClick={() => handleItemClick(item)}
              key={idx}
            >
              <img src={item.image} alt={item.title} />
              <div className="portfolio-overlay">
                <h3 className="portfolio-title">{item.title}</h3>
                <p className="portfolio-category">
                  {item.category === 'video'
                    ? 'Video Production'
                    : item.category === 'design'
                    ? 'Graphic Design'
                    : 'Digital Marketing'}
                </p>
                {item.category === 'video' && (
                  <div className="mt-3 text-white">
                    <i className="fas fa-play-circle fa-2x"></i>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
