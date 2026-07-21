import { ReactTyped } from "react-typed";
import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedProjects from '../Components/FeaturedProjects';
import { useTranslation } from '../../hooks/useTranslation';
import { useTheme } from '../../contexts/ThemeContext';
import './Home.css';

const techStack = [
    'React', 'JavaScript', 'Node.js', 'Figma', 'HTML5',
    'CSS3', 'Flutter', 'PHP', 'Vercel', 'SEO', 'Mobile', 'UI/UX'
];

/**
 *  La page Home.
 * @return {jsx}
 */
function Home() {
    const { t } = useTranslation();
    const { theme } = useTheme();

    const logoSrc = theme === 'light'
        ? '/images/logo/mwd-labs-logo-transparent.svg'
        : '/images/logo/mwd-labs-logo-white.svg';

    return (
        <>
        {/* ── Aurora background ── */}
        <div className="hero-aurora" aria-hidden="true">
            <div className="aurora-orb orb-1" />
            <div className="aurora-orb orb-2" />
            <div className="aurora-orb orb-3" />
            <div className="hero-dot-grid" />
        </div>

        {/* ── Hero ── */}
        <div className="home-section floating" data-aos="fade-up">
            <div className="hero-content">
                <div className="hero-badge">
                    <span className="badge-dot" />
                    Web Agency · Montréal
                </div>
                <img src={logoSrc} alt="MWD Labs" className="hero-logo" />
                <div className="typed-container">
                    <ReactTyped
                        strings={t('home.typedText')}
                        typeSpeed={80}
                        backSpeed={100}
                        loop
                        className="typed-text"
                    />
                </div>
                <div className="hero-cta-buttons">
                    <Link to="/contact">
                        <button className="btn btn-primary btn-lg">{t('home.getQuoteBtn')}</button>
                    </Link>
                    <Link to="/projects">
                        <button className="btn btn-secondary btn-lg">{t('home.viewProjectsBtn')}</button>
                    </Link>
                </div>
            </div>
            <a href="#about-section" className="scroll-indicator" aria-label="Scroll down">
                <span className="scroll-arrow" />
            </a>
        </div>

        {/* ── Marquee tech strip ── */}
        <div className="marquee-strip" aria-hidden="true">
            <div className="marquee-track">
                {[...techStack, ...techStack].map((item, i) => (
                    <span key={i} className="marquee-item">
                        <span className="marquee-dot">◆</span>
                        {item}
                    </span>
                ))}
            </div>
        </div>

        {/* ── About ── */}
        <div className="about-part" data-aos="fade-up" id="about-section">
            <div className="browser-mockup">
                <div className="browser-topbar">
                    <span className="browser-dot bd-red" />
                    <span className="browser-dot bd-yellow" />
                    <span className="browser-dot bd-green" />
                    <span className="browser-urlbar">mwdlabs.ca</span>
                </div>
                <img
                    src="/images/projects/new-boretudes.png"
                    alt="MWD Labs — Projet Boretudes"
                    className="browser-screenshot"
                    loading="lazy"
                />
            </div>
            <div>
                <h2 className="about-headline">{t('home.expertiseTitle')}</h2>
                <p className="about-description">{t('home.description')}</p>
                <div className="hero-cta-buttons">
                    <Link to={`/contact`}>
                        <button className="btn btn-primary btn-lg">{t('home.getQuoteBtn')}</button>
                    </Link>
                    <Link to={`/services`}>
                        <button className="btn btn-secondary btn-lg">{t('home.discoverBtn')}</button>
                    </Link>
                </div>
            </div>
        </div>

        <div className="featured-projects-section" data-aos="fade-up" data-aos-duration="800">
            <FeaturedProjects />
            <div className="fp-view-all-row">
                <Link to={`/projects`} className="fp-view-all-link">
                    {t('home.viewProjectsBtn')}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </Link>
            </div>
        </div>

        <div className="testimonials-section" data-aos="fade-up">
            <h2>{t('home.testimonials.title')}</h2>
            <p className="testimonials-subtitle">{t('home.testimonials.subtitle')}</p>
            <div className="testimonials-grid">
                {t('home.testimonials.items', { returnObjects: true }).map((item, i) => (
                    <div key={i} className="testimonial-card">
                        <div className="testimonial-quote-icon">"</div>
                        <p className="testimonial-text">{item.text}</p>
                        <div className="testimonial-author">
                            <div className="testimonial-avatar">{item.name.charAt(0)}</div>
                            <div>
                                <strong>{item.name}</strong>
                                <span>{item.role}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}

export default Home;
