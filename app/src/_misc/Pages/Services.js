import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import {
  FaLaptopCode,
  FaPalette,
  FaMobileAlt,
  FaRocket,
  FaSearch,
  FaTools,
  FaShieldAlt,
  FaChartLine,
  FaSyncAlt,
  FaHeadset,
  FaCode,
  FaLock,
  FaCogs,
  FaCheckCircle,
  FaPencilAlt,
  FaCloudUploadAlt,
  FaChevronDown,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Services.css';

function Services() {
  const { t, language } = useTranslation();
  const isFr = language === 'fr';
  const serviceIcons = [
    <FaLaptopCode />, <FaPalette />, <FaMobileAlt />,
    <FaRocket />, <FaSearch />, <FaTools />
  ];
  const serviceItems = t('services.items', { returnObjects: true }) || [];

  const subscriptionFeatures = t('services.subscription.features', { returnObjects: true }) || [];
  const processSteps = t('services.process.steps', { returnObjects: true }) || [];
  const processIcons = [<FaSearch />, <FaPencilAlt />, <FaCogs />, <FaCheckCircle />, <FaCloudUploadAlt />];
  const faqItems = t('services.faq.items', { returnObjects: true }) || [];
  const [openFaq, setOpenFaq] = useState(null);

  const subIcons = [
    <FaShieldAlt />, <FaChartLine />, <FaSyncAlt />,
    <FaHeadset />, <FaCode />, <FaMobileAlt />,
    <FaTools />, <FaLock />
  ];


  return (
    <div className="service-section">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="service-hero">
        <div className="service-hero-bg-text" aria-hidden="true">SERVICES</div>
        <div className="wrapper">
          <div className="page-header">
            <span className="service-eyebrow">
              <span className="eyebrow-dollar">$</span> init_services()
            </span>
            <h1>{t('services.title')}</h1>
            <p>{t('services.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* ── Services Grid ─────────────────────────────────────────── */}
      <section className="services-grid-section" id="nos-services">
        <div className="wrapper">
          <h2 className="section-title">{t('services.packages.title')}</h2>
          <p className="section-subtitle">{t('services.packages.subtitle')}</p>
          <div className="services-grid">
            {serviceItems.map((item, idx) => (
              <motion.div
                key={idx}
                className="service-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                whileHover={{ y: -4 }}
              >
                <span className="service-num" aria-hidden="true">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div className="service-card-icon">{serviceIcons[idx]}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────── */}
      <section className="processus">
        <div className="wrapper">
          <h2 className="section-title">{t('services.process.title')}</h2>
          <div className="process-steps">
            {Array.isArray(processSteps) && processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                className="process-step"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.12 }}
              >
                <div className="step-badge">
                  <span className="step-number">{idx + 1}</span>
                  <div className="step-icon">{processIcons[idx]}</div>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Maintenance ──────────────────────────────────────────── */}
      <section className="abonnement">
        <div className="wrapper">
          <h2 className="abonnement-title">{t('services.subscription.title')}</h2>
          <p className="abonnement-subtitle">{t('services.subscription.subtitle')}</p>
          <div className="subscription-features">
            {Array.isArray(subscriptionFeatures) && subscriptionFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                className="subscription-feature"
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.07 }}
              >
                <div className="feature-icon">{subIcons[idx % subIcons.length]}</div>
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="faq-section">
        <div className="wrapper">
          <h2 className="section-title">{t('services.faq.title')}</h2>
          <p className="section-subtitle">{t('services.faq.subtitle')}</p>
          <div className="faq-list">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className={`faq-item${openFaq === idx ? ' open' : ''}`}
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  aria-expanded={openFaq === idx}
                >
                  <span>{item.question}</span>
                  <FaChevronDown className="faq-chevron" />
                </button>
                <div className="faq-body">
                  <p className="faq-answer">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="contactService">
        <div className="wrapper">
          <h2>{t('services.partnership.title')}</h2>
          <p>{t('services.partnership.description')}</p>
          <div className="cta-actions">
            <Link to="/contact" className="cta-btn-primary">
              {t('services.contactBtn')}
              <FaRocket className="cta-icon" />
            </Link>
            <Link to="/projects" className="cta-btn-outline">
              {isFr ? 'Voir nos réalisations' : 'View our work'}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Services;
