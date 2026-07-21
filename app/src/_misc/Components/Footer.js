import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import { useTheme } from '../../contexts/ThemeContext';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const { t, language } = useTranslation();
  const { theme } = useTheme();

  const logoSrc = theme === 'light'
    ? '/images/logo/mwd-labs-logo-transparent-clean.svg'
    : '/images/logo/mwd-labs-logo-white-clean.svg';

  const isFr = language === 'fr';

  const navLinks = [
    { to: '/',         label: t('nav.home') },
    { to: '/about',    label: t('nav.about') },
    { to: '/services', label: t('nav.services') },
    { to: '/projects', label: t('nav.projects') },
    { to: '/contact',  label: t('nav.contact') },
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
              <li key={to}>
                <Link to={to}>{label}</Link>
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
              <FaWhatsapp className="footer-contact-icon" />
              <a href="https://wa.me/15146906138" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
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
          {isFr ? 'Tous droits réservés.' : 'All rights reserved.'}
        </p>
        <div className="footer-socials">
          <a href="https://www.instagram.com/mwdlabs/" target="_blank" rel="noopener noreferrer"
            className="footer-social-btn" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://wa.me/15146906138" target="_blank" rel="noopener noreferrer"
            className="footer-social-btn" aria-label="WhatsApp">
            <FaWhatsapp />
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
