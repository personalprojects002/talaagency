import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useCms } from '../data/CmsContext';

export default function Navbar() {
  const { data } = useCms();
  const { general } = data;
  const [scrolled, setScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const close = () => setIsExpanded(false);

  const renderLogo = () => {
    if (general.logoType === 'image') {
      return (
        <img
          src={general.logoImage}
          alt="Logo"
          style={{ maxHeight: '40px', width: 'auto' }}
        />
      );
    }
    return (
      <>
        <i className={general.logoIcon}></i>
        {general.logoText}
      </>
    );
  };

  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? '#a78bfa' : undefined,
    fontWeight: isActive ? 700 : undefined,
  });

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={close}>
          {renderLogo()}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
        </button>
        <div className={`collapse navbar-collapse ${isExpanded ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end style={navLinkStyle} onClick={close}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services" style={navLinkStyle} onClick={close}>
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/courses" style={navLinkStyle} onClick={close}>
                Courses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/team" style={navLinkStyle} onClick={close}>
                Team
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog" style={navLinkStyle} onClick={close}>
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin" style={navLinkStyle} onClick={close}>
                Admin Portal
              </NavLink>
            </li>
            <li className="nav-item ms-lg-3">
              <a
                href={`https://wa.me/${general.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-nav"
                onClick={close}
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
