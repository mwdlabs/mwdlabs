import React, { useState, useEffect } from 'react';
import { FaInstagram, FaFacebook, FaPaperPlane } from 'react-icons/fa';
import { useTranslation } from '../../hooks/useTranslation';
import './Contact.css';
import { faEnvelope, faPhoneSquareAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    subject: '',
    project_type: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const { t, language } = useTranslation();

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Phone number click handler
  const handlePhoneClick = () => {
    if (navigator.userAgent.match(/mobile|tablet/i)) {
      window.location.href = 'tel:+15146906138';
    }
  };

const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send');

      setMessageSent(true);
      setFormData({ user_name: '', user_email: '', user_phone: '', subject: '', project_type: '', budget: '', timeline: '', message: '' });
    } catch (error) {
      console.error('Failed to send message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Effet pour réinitialiser le formulaire après l'envoi
  useEffect(() => {
    if (messageSent) {
      const timer = setTimeout(() => setMessageSent(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [messageSent]);

  // Chargement du script Calendly
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='contact-section'>
      <div className="contact-hero">
        <div className="contact-hero-bg-text" aria-hidden="true">CONTACT</div>
        <div className="contact-header-inner">
          <span className="contact-eyebrow">
            {language === 'fr' ? '✦ Nous Contacter' : '✦ Get In Touch'}
          </span>
          <h1>{t('contact.title')}</h1>
          <p>{t('contact.subtitle')}</p>
        </div>
      </div>
      <div id='contact'>
        <div className='container'>
          <div className='row'>
            <div className='contact-left'>
              <div className="availability-badge">
                <span className="avail-dot" />
                {t('contact.info.availability')}
              </div>
              <h1 className='sub-title'>{t('contact.info.title')}</h1>
              
              <div className="contact-info">
                <h2 className="visually-hidden">{t('contact.info.title')}</h2>
                <div className="contact-method">
                  <FontAwesomeIcon icon={faEnvelope} className="contact-icon" aria-hidden="true" />
                  <a href="mailto:mwdlabs.contact@gmail.com" className="contact-link">mwdlabs.contact@gmail.com</a>
                </div>
                <div className="contact-method clickable" onClick={handlePhoneClick}>
                  <FontAwesomeIcon icon={faPhoneSquareAlt} className="contact-icon" aria-hidden="true" />
                  <a href="tel:+15146906138" className="contact-link" onClick={(e) => e.stopPropagation()}>+1 514-690-6138</a>
                </div>
                <div className="contact-method">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" aria-hidden="true" />
                  <span>{t('contact.info.location')}</span>
                </div>
              </div>
              
              <p className="social-title">{t('contact.social.title')}</p>
              <div className='social-icons'>
                <a href='https://www.instagram.com/mwdlabs/' target="_blank"
                   rel="noopener noreferrer" aria-label={t('contact.social.instagram')} className="social-link">
                  <FaInstagram className="social-icon" aria-hidden="true" />
                </a>
                <a href='https://www.facebook.com/profile.php?id=61592185799236&locale=fr_CA' target="_blank"
                   rel="noopener noreferrer" aria-label="Facebook" className="social-link">
                  <FaFacebook className="social-icon" aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className='contact-right'>
              <form onSubmit={sendEmail} className="contact-form">

                {/* Row 1 : Nom + Email */}
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="user_name">{t('contact.form.name')} <span className="form-required">*</span></label>
                    <input
                      id="user_name"
                      type="text"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleInputChange}
                      placeholder={language === 'fr' ? 'Jean Tremblay' : 'John Smith'}
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="user_email">{t('contact.form.email')} <span className="form-required">*</span></label>
                    <input
                      id="user_email"
                      type="email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleInputChange}
                      placeholder="you@example.com"
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Row 2 : Téléphone + Sujet */}
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="user_phone">{t('contact.form.phone')}</label>
                    <input
                      id="user_phone"
                      type="tel"
                      name="user_phone"
                      value={formData.user_phone}
                      onChange={handleInputChange}
                      placeholder="+1 514-000-0000"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="subject">{t('contact.form.subject')} <span className="form-required">*</span></label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder={language === 'fr' ? 'Création de site web' : 'Website creation'}
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Row 3 : Type de projet + Budget */}
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="project_type">{t('contact.form.projectType')}</label>
                    <select
                      id="project_type"
                      name="project_type"
                      value={formData.project_type}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="">{t('contact.form.projectTypePlaceholder')}</option>
                      <option value={language === 'fr' ? 'Site web' : 'Website'}>{language === 'fr' ? 'Site web' : 'Website'}</option>
                      <option value={language === 'fr' ? 'Application mobile' : 'Mobile app'}>{language === 'fr' ? 'Application mobile' : 'Mobile app'}</option>
                      <option value="Design UI/UX">Design UI/UX</option>
                      <option value={language === 'fr' ? 'Référencement SEO' : 'SEO'}>{language === 'fr' ? 'Référencement SEO' : 'SEO'}</option>
                      <option value={language === 'fr' ? 'Intégration IA' : 'AI Integration'}>{language === 'fr' ? 'Intégration IA' : 'AI Integration'}</option>
                      <option value={language === 'fr' ? 'Autre' : 'Other'}>{language === 'fr' ? 'Autre' : 'Other'}</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="budget">{t('contact.form.budget')}</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="">{t('contact.form.budgetPlaceholder')}</option>
                      <option value="< $1 500">{language === 'fr' ? 'Moins de 1 500 $' : 'Under $1,500'}</option>
                      <option value="$1 500 – $3 000">$1 500 – $3 000</option>
                      <option value="$3 000 – $6 000">$3 000 – $6 000</option>
                      <option value="> $6 000">{language === 'fr' ? 'Plus de 6 000 $' : 'Over $6,000'}</option>
                      <option value={language === 'fr' ? 'À discuter' : 'To be discussed'}>{language === 'fr' ? 'À discuter' : 'To be discussed'}</option>
                    </select>
                  </div>
                </div>

                {/* Row 4 : Délai */}
                <div className="form-group">
                  <label className="form-label" htmlFor="timeline">{t('contact.form.timeline')}</label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="">{t('contact.form.timelinePlaceholder')}</option>
                    <option value={language === 'fr' ? 'Dès que possible' : 'As soon as possible'}>{language === 'fr' ? 'Dès que possible' : 'As soon as possible'}</option>
                    <option value={language === 'fr' ? 'Dans 1 mois' : 'Within 1 month'}>{language === 'fr' ? 'Dans 1 mois' : 'Within 1 month'}</option>
                    <option value={language === 'fr' ? 'Dans 2–3 mois' : 'Within 2–3 months'}>{language === 'fr' ? 'Dans 2–3 mois' : 'Within 2–3 months'}</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>

                {/* Row 5 : Message */}
                <div className="form-group">
                  <label className="form-label" htmlFor="message">{t('contact.form.message')} <span className="form-required">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={language === 'fr' ? 'Décrivez votre projet, vos objectifs et tout détail utile...' : 'Describe your project, goals, and any relevant details...'}
                    className="form-textarea"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-contact"
                  aria-label={t('contact.form.send')}
                  disabled={isSubmitting}
                >
                  <FaPaperPlane className="btn-icon" aria-hidden="true" />
                  <span>{isSubmitting ? t('contact.form.sending') : t('contact.form.send')}</span>
                </button>
              </form>
              
              {messageSent && (
                <div className='confirmation-message' role="alert">
                  <div className="confirmation-content">
                    <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                      <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                      <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                    </svg>
                    <p>{t('contact.form.success')}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Calendly inline widget */}
      <div className="calendly-section">
        <div className="calendly-header">
          <span className="contact-eyebrow">{t('contact.calendly.eyebrow')}</span>
          <h2 className="calendly-title">{t('contact.calendly.title')}</h2>
          <p className="calendly-subtitle">{t('contact.calendly.subtitle')}</p>
        </div>
        <div className="calendly-widget-wrapper">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/mwdlabs-contact/30min?primary_color=ff1a00"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
