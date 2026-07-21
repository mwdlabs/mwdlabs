import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaInstagram, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from '../../hooks/useTranslation';
import './Contact.css';
import { faEnvelope, faPhoneSquareAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Contact = () => {
  const form = useRef(null);
  const [messageSent, setMessageSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
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

  // WhatsApp click handler
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hello! I found your website and would like to discuss a project.');
    window.open(`https://wa.me/15146906138?text=${message}`, '_blank');
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm('service_g36nv0r', 'template_ekv1e8r', form.current, 'Gow9sCb56iBjWfWQ5')
      .then(
        () => {
          setMessageSent(true);
          setFormData({ user_name: '', user_email: '', subject: '', message: '' });
          setTimeout(() => setMessageSent(false), 5000);
        },
        (error) => {
          console.error('FAILED...', error.text);
          alert('Failed to send message. Please try again.');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  // Effet pour réinitialiser le formulaire après l'envoi
  useEffect(() => {
    if (messageSent) {
      const timer = setTimeout(() => setMessageSent(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [messageSent]);

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
                <div className="contact-method whatsapp-contact" onClick={handleWhatsAppClick}>
                  <FaWhatsapp className="contact-icon" />
                  <span>WhatsApp</span>
                </div>
              </div>
              
              <p className="social-title">{t('contact.social.title')}</p>
              <div className='social-icons'>
                <a href='https://www.instagram.com/mwdlabs/' target="_blank" 
                   rel="noopener noreferrer" aria-label={t('contact.social.instagram')} className="social-link">
                  <FaInstagram className="social-icon" aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className='contact-right'>
              <form ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="form-group">
                  <input 
                    type="text" 
                    name="user_name" 
                    value={formData.user_name}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.name')} 
                    required 
                    className="form-input"
                    aria-label={t('contact.form.name')}
                  />
                </div>
                
                <div className="form-group">
                  <input 
                    type="email" 
                    name="user_email" 
                    value={formData.user_email}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.email')} 
                    required 
                    className="form-input"
                    aria-label={t('contact.form.email')}
                  />
                </div>
                
                <div className="form-group">
                  <input 
                    type="text" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.subject')} 
                    required 
                    className="form-input"
                    aria-label={t('contact.form.subject')}
                  />
                </div>
                
                <div className="form-group">
                  <textarea 
                    name='message' 
                    rows="6" 
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.message')}
                    className="form-textarea"
                    aria-label={t('contact.form.message')}
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
                  <span>{isSubmitting ? 'Sending...' : t('contact.form.send')}</span>
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
    </div>
  );
};

export default Contact;
