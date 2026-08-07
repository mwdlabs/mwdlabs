import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import { useTheme } from '../../contexts/ThemeContext';
import { FaInstagram, FaFacebook, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const { t, language } = useTranslation();
  const { theme } = useTheme();
  const location = useLocation();

  const handleServiceClick = (e) => {
    if (location.pathname === '/services') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const logoSrc = theme === 'light'
    ? '/images/logo/mwd-labs-logo-transparent-clean.svg'
    : '/images/logo/mwd-labs-logo-white-clean.svg';

  const isFr = language === 'fr';

  const navLinks = [
    { to: '/',         label: t('nav.home') },
    { to: '/projects', label: t('nav.projects') },
    { to: '/services', label: t('nav.services') },
    { to: '/contact',  label: t('nav.contact') },
  ];

  const serviceLinks = [
    { to: '/services#nos-services', label: isFr ? 'Développement Web' : 'Web Development' },
    { to: '/services#nos-services', label: isFr ? 'Applications Mobiles' : 'Mobile Apps' },
    { to: '/services#nos-services', label: isFr ? 'Design UI/UX' : 'UI/UX Design' },
    { to: '/services#nos-services', label: isFr ? 'Automatisation IA' : 'AI Automation' },
    { to: '/services#nos-services', label: 'SEO & Performance' },
  ];

  return (
    <footer className="footer">

      {/* ── Brand block — full width centered ── */}
      <div className="footer-brand">
        <Link to="/">
          <img src={logoSrc} alt="MWD Labs" className="footer-logo" />
        </Link>
        <p className="footer-tagline">{t('footer.about.description')}</p>
        <div className="footer-avail">
          <span className="footer-avail-dot" />
          {isFr ? 'Disponible pour nouveaux projets' : 'Available for new projects'}
        </div>
      </div>

      {/* ── Columns ── */}
      <div className="footer-cols">

        <div className="footer-col">
          <h4 className="footer-col-title">{t('footer.quickLinks.title')}</h4>
          <ul className="footer-links">
            {navLinks.map(({ to, label }) => (
              <li key={label}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">{isFr ? 'Services' : 'Services'}</h4>
          <ul className="footer-links">
            {serviceLinks.map(({ to, label }) => (
              <li key={label}>
                <Link to={to} onClick={handleServiceClick}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">{t('footer.contact.title')}</h4>
          <ul className="footer-contact-list">
            <li>
              <FaEnvelope className="footer-contact-icon" />
              <a href="mailto:mwdlabs.contact@gmail.com">mwdlabs.contact@gmail.com</a>
            </li>
            <li>
              <FaPhone className="footer-contact-icon" />
              <a href="tel:+15146906138">+1 514-690-6138</a>
            </li>
            <li>
              <FaInstagram className="footer-contact-icon" />
              <a href="https://www.instagram.com/mwdlabs/" target="_blank" rel="noopener noreferrer">
                @mwdlabs
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div className="footer-bottom">
        <p className="footer-copy">
          © {new Date().getFullYear()} MWD Labs.&nbsp;
          {isFr ? 'Tous droits réservés.' : 'All rights reserved.'}&nbsp;
          <a href="https://mwdlabs.ca" target="_blank" rel="noopener noreferrer">
            <img src="/images/logo/favicon.svg" alt="MWD Labs" className="footer-copy-logo" />
          </a>
        </p>
        <div className="footer-bottom-links">
          <Link to="/privacy" className="footer-bottom-link">
            {isFr ? 'Politique de confidentialité' : 'Privacy Policy'}
          </Link>
          <button
            className="footer-cookie-btn"
            onClick={() => {
              localStorage.removeItem('cookieConsent');
              window.dispatchEvent(new Event('showCookieBanner'));
            }}
          >
            🍪 {isFr ? 'Préférences cookies' : 'Cookie preferences'}
          </button>
        </div>
        <div className="footer-socials">
          <a href="https://www.instagram.com/mwdlabs/" target="_blank" rel="noopener noreferrer"
            className="footer-social-btn" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61592185799236&locale=fr_CA" target="_blank" rel="noopener noreferrer"
            className="footer-social-btn" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="mailto:mwdlabs.contact@gmail.com"
            className="footer-social-btn" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
