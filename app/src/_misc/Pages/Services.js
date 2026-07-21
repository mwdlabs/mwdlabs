import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import {
  FaLaptopCode,
  FaPalette,
  FaServer,
  FaShieldAlt,
  FaChartLine,
  FaSyncAlt,
  FaHeadset,
  FaCheck,
  FaCode,
  FaMobileAlt,
  FaTools,
  FaLock,
  FaRocket,
  FaSearch,
  FaPencilAlt,
  FaCogs,
  FaCheckCircle,
  FaCloudUploadAlt,
  FaChevronDown,
  FaStar
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Services.css';

function Services() {
  const { t, language } = useTranslation();
  const isFr = language === 'fr';
  const trustItems = t('services.trust', { returnObjects: true });

  const forfaits = [
    {
      titre: t('services.packages.essential.title'),
      prix: t('services.packages.essential.price'),
      originalPrix: t('services.packages.essential.originalPrice'),
      desc: t('services.packages.essential.description'),
      features: t('services.packages.essential.features', { returnObjects: true }),
      icon: <FaLaptopCode />,
      popular: false
    },
    {
      titre: t('services.packages.premium.title'),
      prix: t('services.packages.premium.price'),
      originalPrix: t('services.packages.premium.originalPrice'),
      desc: t('services.packages.premium.description'),
      features: t('services.packages.premium.features', { returnObjects: true }),
      icon: <FaPalette />,
      popular: true
    },
    {
      titre: t('services.packages.enterprise.title'),
      prix: t('services.packages.enterprise.price'),
      originalPrix: t('services.packages.enterprise.originalPrice'),
      desc: t('services.packages.enterprise.description'),
      features: t('services.packages.enterprise.features', { returnObjects: true }),
      icon: <FaServer />,
      popular: false
    },
    {
      titre: t('services.packages.custom.title'),
      prix: t('services.packages.custom.price'),
      desc: t('services.packages.custom.description'),
      features: t('services.packages.custom.features', { returnObjects: true }),
      icon: <FaCogs />,
      popular: false,
      custom: true
    }
  ];

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
              {isFr ? '✦ Ce que nous faisons' : '✦ What We Do'}
            </span>
            <h1>{t('services.title')}</h1>
            <p>{t('services.subtitle')}</p>
          </div>
          <div className="trust-bar">
            {trustItems.map((item, i) => (
              <div key={i} className="trust-item">
                <FaCheckCircle className="trust-icon" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────────── */}
      <section className="forfaits">
        <div className="wrapper">
          <h2 className="section-title">{t('services.packages.title')}</h2>
          <p className="section-subtitle">{t('services.packages.subtitle')}</p>

          <div className="forfait-list">
            {forfaits.map((forfait, idx) => (
              <motion.div
                key={idx}
                className={`forfait-item${forfait.popular ? ' popular' : ''}${forfait.custom ? ' custom-quote' : ''}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
              >
                {forfait.popular && (
                  <div className="popular-badge">
                    <FaStar className="popular-star" />
                    {t('services.popular')}
                  </div>
                )}

                <div className="forfait-header">
                  <div className="forfait-icon">{forfait.icon}</div>
                  <h3 className="forfait-title">{forfait.titre}</h3>
                  {forfait.originalPrix && (
                    <div className="forfait-launch-badge">
                      🏷 {t('services.packages.launchBadge')}
                    </div>
                  )}
                  <div className="forfait-price-wrap">
                    {forfait.originalPrix && (
                      <span className="forfait-price-original">{forfait.originalPrix}</span>
                    )}
                    <div className="forfait-price">{forfait.prix}</div>
                  </div>
                  <p className="forfait-desc">{forfait.desc}</p>
                </div>

                <ul className="forfait-features">
                  {Array.isArray(forfait.features) && forfait.features.map((feature, i) => (
                    <li key={i} className="forfait-feature">
                      <FaCheck className="feature-check" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="btn-cta">
                  {t('services.ctaButton')}
                </Link>
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
