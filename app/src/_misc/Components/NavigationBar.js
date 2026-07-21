import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './NavigationBar.css';
import { useTranslation } from '../../hooks/useTranslation';
import LanguageToggle from '../../components/LanguageToggle';
import { useTheme } from '../../contexts/ThemeContext';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  // Use clean logos in dark mode, transparent clean logo in light mode
  const logoSrc = theme === 'light' 
    ? '/images/logo/mwd-labs-logo-transparent-clean.svg'
    : '/images/logo/mwd-labs-logo-white-clean.svg';

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    closeMenu();
  }, [location]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/services', label: t('nav.services') },
    { path: '/contact', label: t('nav.contact') }
  ];

  return (
    <nav className={`navbar${isScrolled ? ' scrolled' : ''}`}>
      <div className="navbar-container">

        {/* Brand */}
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <div className="navbar-logo">
            <img src={logoSrc} alt="MWD Labs" className="logo-image" />
          </div>
        </Link>

        {/* Desktop nav links — centre */}
        <ul className={`navbar-menu${isMenuOpen ? ' active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.path} className="navbar-item">
              <Link
                to={item.path}
                className={`navbar-link${location.pathname === item.path ? ' active' : ''}`}
                onClick={closeMenu}
              >
                {item.label}
                <span className="nav-indicator" />
              </Link>
            </li>
          ))}
          {/* CTA inside mobile menu too */}
          <li className="navbar-item mobile-cta-item">
            <button
              className="navbar-cta navbar-cta--mobile"
              onClick={() => { navigate('/contact'); closeMenu(); }}
            >
              {t('nav.getQuote')}
            </button>
          </li>
        </ul>

        {/* Right-side controls */}
        <div className="navbar-controls">
          <button
            className="navbar-cta navbar-cta--desktop"
            onClick={() => { navigate('/contact'); closeMenu(); }}
            aria-label={t('nav.getQuote')}
          >
            {t('nav.getQuote')}
          </button>

          <div className="navbar-icon-group">
            <LanguageToggle />

            <button
              className="icon-btn theme-toggle-navbar"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              <span className="theme-toggle-icon">
                {theme === 'dark' ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M12 3V4M12 20V21M4 12H3M6.31 6.31L5.5 5.5M17.69 6.31L18.5 5.5M6.31 17.69L5.5 18.5M17.69 17.69L18.5 18.5M21 12H20M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
            </button>
          </div>

          <button
            className={`menu-toggle${isMenuOpen ? ' active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile overlay backdrop */}
      {isMenuOpen && <div className="menu-backdrop" onClick={closeMenu} />}
    </nav>
  );
};

export default NavigationBar;
