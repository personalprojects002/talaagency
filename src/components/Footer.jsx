import React from 'react';
import { useCms } from '../data/CmsContext';

export default function Footer({ onNavigate }) {
  const { data } = useCms();
  const { general, socials } = data;

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    onNavigate(id);
  };

  const renderLogo = () => {
    if (general.logoType === 'image') {
      return (
        <img
          src={general.logoImage}
          alt="Logo"
          style={{ maxHeight: '50px', width: 'auto' }}
        />
      );
    }
    return (
      <>
        <i className={general.logoIcon}></i>
        {general.footerLogoText}
      </>
    );
  };

  return (
    <footer>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="footer-brand">
              {renderLogo()}
            </div>
            <p className="footer-text">
              We create videos, brands, and digital success stories. Premium digital media agency based in Pakistan, serving clients worldwide.
            </p>
            <div className="footer-social">
              {socials.youtube && socials.youtube !== '#' && (
                <a href={socials.youtube} aria-label="YouTube">
                  <i className="fab fa-youtube"></i>
                </a>
              )}
              {socials.instagram && socials.instagram !== '#' && (
                <a href={socials.instagram} aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              )}
              {socials.facebook && socials.facebook !== '#' && (
                <a href={socials.facebook} aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
              )}
              {socials.tiktok && socials.tiktok !== '#' && (
                <a href={socials.tiktok} aria-label="TikTok">
                  <i className="fab fa-tiktok"></i>
                </a>
              )}
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6 footer-links">
            <h5>Quick Links</h5>
            <ul>
              <li>
                <a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>Home</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About Us</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, 'services')}>Services</a>
              </li>
              <li>
                <a href="#courses" onClick={(e) => handleLinkClick(e, 'courses')}>Courses</a>
              </li>
              <li>
                <a href="#pricing" onClick={(e) => handleLinkClick(e, 'pricing')}>Pricing Plans</a>
              </li>
              <li>
                <a href="#portfolio" onClick={(e) => handleLinkClick(e, 'portfolio')}>Portfolio Grid</a>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6 footer-links">
            <h5>Our Services</h5>
            <ul>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, 'services')}>Video Editing</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, 'services')}>Graphic Designing</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, 'services')}>Digital Marketing &amp; SEO</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, 'services')}>YouTube Automation</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, 'services')}>E-Commerce Support</a>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6 footer-links">
            <h5>Contact Details</h5>
            <ul className="text-secondary" style={{ padding: 0 }}>
              <li className="d-flex align-items-center gap-2 mb-2">
                <i className="fas fa-map-marker-alt text-danger"></i>
                <span id="footer-address">{general.address}</span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-2">
                <i className="fas fa-envelope text-danger"></i>
                <span id="footer-email">{general.email}</span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-2">
                <i className="fas fa-phone-alt text-danger"></i>
                <span id="footer-phone">{general.phone}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="copyright">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Next Vision Creators. Developed with <i className="fas fa-heart text-danger"></i> for Premium Creators.
          </p>
        </div>
      </div>
    </footer>
  );
}
