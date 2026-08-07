import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import './CookieBanner.css';

function CookieBanner() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) setVisible(true);

    const handleShow = () => setVisible(true);
    window.addEventListener('showCookieBanner', handleShow);
    return () => window.removeEventListener('showCookieBanner', handleShow);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label={t('cookies.title')}>
      <div className="cookie-banner-inner">
        <div className="cookie-icon" aria-hidden="true">🍪</div>
        <div className="cookie-text">
          <strong className="cookie-title">{t('cookies.title')}</strong>
          <p className="cookie-desc">
            {t('cookies.description')}{' '}
            <Link to="/privacy" className="cookie-link" onClick={handleDecline}>
              {t('cookies.learnMore')}
            </Link>
          </p>
        </div>
        <div className="cookie-actions">
          <button className="btn btn-secondary btn-sm cookie-btn-decline" onClick={handleDecline}>
            {t('cookies.decline')}
          </button>
          <button className="btn btn-primary btn-sm cookie-btn-accept" onClick={handleAccept}>
            {t('cookies.accept')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;
