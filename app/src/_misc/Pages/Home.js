import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaCode, FaPalette, FaMobileAlt, FaRobot, FaSearch, FaTools
} from 'react-icons/fa';
import {
  SiReact, SiNextdotjs, SiNodedotjs,
  SiFigma, SiFramer,
  SiFlutter,
  SiOpenai, SiPython,
  SiGoogleanalytics,
  SiDocker, SiGithubactions,
} from 'react-icons/si';
import FeaturedProjects from '../Components/FeaturedProjects';
import { useTranslation } from '../../hooks/useTranslation';
import './Home.css';

const SERVICE_ICONS = {
    web: <FaCode />,
    design: <FaPalette />,
    mobile: <FaMobileAlt />,
    ai: <FaRobot />,
    seo: <FaSearch />,
    maintenance: <FaTools />
};

const heroTags = [
    { label: 'Identité visuelle', pill: false },
    { label: 'Sites Web', pill: true },
    { label: 'Applications mobiles', pill: false },
    { label: 'Automatisation IA', pill: true },
    { label: 'Identité visuelle', pill: false },
    { label: 'Applications Web', pill: false },
    { label: 'SEO & Performance', pill: false },
    { label: 'Automatisation IA', pill: false },
];

const HERO_BARS = [35, 55, 40, 78, 52, 68, 88, 47];

function Home() {
    const { t, language } = useTranslation();

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
        <>
        {/* ── Hero ── */}
        <div className="home-section">

            {/* Tags marquee — full width */}
            <div className="hero-tags-strip" aria-hidden="true">
                <div className="hero-tags-track">
                    {[...heroTags, ...heroTags].map((tag, i) => (
                        <span key={i} className={`hero-tag-item${tag.pill ? ' hero-tag-item--pill' : ''}`}>
                            <span className="hero-tag-plus">✦</span>
                            {tag.label}
                        </span>
                    ))}
                </div>
            </div>

            {/* Split layout: text left / visual right */}
            <div className="hero-split">
                {/* Left — headline + CTA + social proof */}
                <div className="hero-left">
                    <div className="home-hero-content">
                        <h1 className="hero-headline">
                            {language === 'fr' ? (
                                <>Votre idée mérite mieux qu'un <span className="hero-accent">template.</span></>
                            ) : (
                                <>Your idea deserves better than a <span className="hero-accent">template.</span></>
                            )}
                        </h1>
                    </div>
                    <Link to="/contact" className="hero-pill-cta" style={{ alignSelf: 'center' }}>
                        {language === 'fr' ? 'Parler de mon projet' : 'Let\'s talk'}
                        <span className="hero-pill-arrow">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </span>
                    </Link>
                </div>

                {/* Right — dashboard visual */}
                <div className="hero-right" aria-hidden="true">
                    <div className="hero-visual">
                        <div className="hv-dashboard">
                            <div className="hv-dash-tabs">
                                <span>🎨</span>
                                <span className="hv-tab-active">&lt;/&gt;</span>
                                <span>🗄</span>
                                <span>⚙</span>
                            </div>
                            <p className="hv-dash-quote">
                                {language === 'fr'
                                    ? 'On conçoit des sites web, apps et automatisations sur mesure — pour des entrepreneurs qui refusent de passer inaperçus.'
                                    : 'We build custom websites, apps and automations — for entrepreneurs who refuse to blend in.'}
                            </p>
                            <div className="hv-dash-bars">
                                {HERO_BARS.map((h, i) => (
                                    <div key={i} className="hv-bar-col">
                                        <div className="hv-bar" style={{ height: `${h}%` }} />
                                    </div>
                                ))}
                            </div>
                            <div className="hv-dash-skels">
                                <div className="hv-skel" style={{ width: '75%' }} />
                                <div className="hv-skel" style={{ width: '55%' }} />
                                <div className="hv-skel" style={{ width: '65%' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* ── Value Proposition ── */}
        <div className="value-section" id="about-section" data-aos="fade-up">
            <div className="value-left">
                <span className="section-eyebrow">✦ {language === 'fr' ? 'POURQUOI NOUS' : 'WHY US'}</span>
                <h2 className="value-headline">
                    {language === 'fr'
                        ? <>Votre succès en ligne est <span className="text-accent">notre mission.</span></>
                        : <>Your online success is <span className="text-accent">our mission.</span></>
                    }
                </h2>
                <p className="value-desc">{t('home.description')}</p>
                <Link to="/contact" className="hero-pill-cta">
                    {language === 'fr' ? 'Démarrer mon projet' : 'Start my project'}
                    <span className="hero-pill-arrow">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </span>
                </Link>
            </div>
            <div className="value-cards">
                {[
                    {
                        icon: '⚡',
                        title: language === 'fr' ? 'Livraison rapide' : 'Fast delivery',
                        desc: language === 'fr' ? 'Sites lancés en 2 à 4 semaines, sans compromis sur la qualité.' : 'Sites launched in 2 to 4 weeks, no quality compromise.',
                        tag: '< 4 weeks'
                    },
                    {
                        icon: '🧩',
                        title: language === 'fr' ? '100% sur mesure' : '100% custom',
                        desc: language === 'fr' ? 'Aucun template. Chaque projet est conçu de zéro pour vous.' : 'No templates. Every project built from scratch for you.',
                        tag: 'No-template'
                    },
                    {
                        icon: '📈',
                        title: language === 'fr' ? 'SEO & Performance' : 'SEO & Performance',
                        desc: language === 'fr' ? 'Optimisé pour être trouvé sur Google dès le lancement.' : 'Optimized to rank on Google from day one.',
                        tag: 'Core Web Vitals'
                    },
                    {
                        icon: '🤖',
                        title: language === 'fr' ? 'IA & Automatisation' : 'AI & Automation',
                        desc: language === 'fr' ? 'Intégrations intelligentes pour automatiser vos tâches répétitives.' : 'Smart integrations to automate your repetitive tasks.',
                        tag: 'AI-powered'
                    },
                ].map((card, i) => (
                    <div key={i} className="value-card">
                        <div className="value-card-top">
                            <span className="value-card-icon">{card.icon}</span>
                            <span className="value-card-tag">{card.tag}</span>
                        </div>
                        <h3 className="value-card-title">{card.title}</h3>
                        <p className="value-card-desc">{card.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* ── Services ── */}
        <div className="services-preview-section" data-aos="fade-up">
            <div className="services-preview-header">
                <span className="section-eyebrow">✦ {t('home.servicesTitle')}</span>
                <h2 className="services-preview-title">{t('home.servicesSubtitle')}</h2>
                <div className="sps-terminal">
                    <span className="sps-dot" /><span className="sps-dot" /><span className="sps-dot" />
                    <span className="sps-cmd">
                        <span className="sps-prompt">$</span> {language === 'fr' ? 'mwd deploy --all-services' : 'mwd deploy --all-services'}
                    </span>
                </div>
            </div>
            <div className="services-preview-grid">
                {t('home.servicesItems', { returnObjects: true }).map((item, i) => {
                    const techIcons = {
                        web:         [{ icon: <SiReact />, label: 'React' }, { icon: <SiNextdotjs />, label: 'Next.js' }, { icon: <SiNodedotjs />, label: 'Node.js' }],
                        design:      [{ icon: <SiFigma />, label: 'Figma' }, { icon: <SiFramer />, label: 'Framer' }],
                        mobile:      [{ icon: <SiReact />, label: 'React Native' }, { icon: <SiFlutter />, label: 'Flutter' }],
                        ai:          [{ icon: <SiOpenai />, label: 'OpenAI' }, { icon: <SiPython />, label: 'Python' }],
                        seo:         [{ icon: <SiGoogleanalytics />, label: 'Analytics' }],
                        maintenance: [{ icon: <SiDocker />, label: 'Docker' }, { icon: <SiGithubactions />, label: 'CI/CD' }],
                    };
                    return (
                        <Link to="/services" key={i} className="service-card-preview">
                            <div className="scp-header">
                                <span className="scp-num">0{i + 1}</span>
                                <div className="scp-icon">{SERVICE_ICONS[item.icon]}</div>
                            </div>
                            <h3 className="scp-title">{item.title}</h3>
                            <p className="scp-desc">{item.desc}</p>
                            <div className="scp-footer">
                                <div className="scp-stack">
                                    {techIcons[item.icon].map(({ icon, label }) => (
                                        <span key={label} className="scp-stack-icon" title={label}>
                                            {icon}
                                        </span>
                                    ))}
                                </div>
                                <span className="scp-cta">
                                    {language === 'fr' ? 'En savoir plus' : 'Learn more'}
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </div>
            <div className="fp-view-all-row">
                <Link to="/services" className="fp-view-all-link">
                    {t('home.discoverBtn')}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </Link>
            </div>
        </div>

        {/* ── Process ── */}
        <div className="process-section" data-aos="fade-up">
            <div className="process-header">
                <span className="section-eyebrow">✦ {language === 'fr' ? 'COMMENT ÇA MARCHE' : 'HOW IT WORKS'}</span>
                <h2 className="process-title">
                    {language === 'fr'
                        ? <>De l'idée au lancement <span className="text-accent">en 4 étapes.</span></>
                        : <>From idea to launch <span className="text-accent">in 4 steps.</span></>
                    }
                </h2>
                <p className="process-sub">
                    {language === 'fr'
                        ? 'Un processus transparent et structuré pour que votre projet soit livré dans les délais, sans surprise.'
                        : 'A transparent and structured process so your project is delivered on time, no surprises.'}
                </p>
            </div>
            <div className="process-steps">
                {[
                    {
                        num: '01',
                        icon: (
                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.65A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                            </svg>
                        ),
                        title: language === 'fr' ? 'Écoute' : 'Discovery',
                        meta: language === 'fr' ? '30 min · Gratuit' : '30 min · Free',
                        desc: language === 'fr'
                            ? 'Appel gratuit pour comprendre votre projet, vos objectifs et votre budget.'
                            : 'Free call to understand your project, goals, and budget.'
                    },
                    {
                        num: '02',
                        icon: (
                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                            </svg>
                        ),
                        title: language === 'fr' ? 'Stratégie' : 'Strategy',
                        meta: language === 'fr' ? 'Devis · 48h' : 'Quote · 48h',
                        desc: language === 'fr'
                            ? "Plan d'action personnalisé, choix des technologies et proposition de devis claire."
                            : 'Custom action plan, technology choices, and clear quote proposal.'
                    },
                    {
                        num: '03',
                        icon: (
                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                            </svg>
                        ),
                        title: language === 'fr' ? 'Développement' : 'Development',
                        meta: language === 'fr' ? 'Sprints · Validation' : 'Sprints · Reviews',
                        desc: language === 'fr'
                            ? 'On construit votre projet avec des points de suivi réguliers et votre validation à chaque étape.'
                            : 'We build your project with regular check-ins and your approval at every stage.'
                    },
                    {
                        num: '04',
                        icon: (
                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M12 19V5M5 12l7-7 7 7"/><line x1="5" y1="19" x2="19" y2="19"/>
                            </svg>
                        ),
                        title: language === 'fr' ? 'Livraison & Suivi' : 'Launch & Support',
                        meta: language === 'fr' ? 'Deploy · Support' : 'Deploy · Support',
                        desc: language === 'fr'
                            ? 'Lancement, formation et support continu pour assurer la croissance de votre présence en ligne.'
                            : 'Launch, training, and ongoing support to grow your online presence.'
                    }
                ].map((step, i) => (
                    <div key={i} className="process-step">
                        <div className="process-step-top">
                            <div className="process-step-icon">{step.icon}</div>
                            <div className="process-step-connector" aria-hidden="true" />
                        </div>
                        <span className="process-step-num">{step.num}</span>
                        <h3 className="process-step-title">{step.title}</h3>
                        <p className="process-step-desc">{step.desc}</p>
                        <span className="process-step-meta">&gt; {step.meta}</span>
                    </div>
                ))}
            </div>
            <div className="fp-view-all-row" style={{ marginTop: 'var(--spacing-xl)' }}>
                <Link to="/contact" className="hero-pill-cta">
                    {language === 'fr' ? 'Commencer maintenant' : 'Get started now'}
                    <span className="hero-pill-arrow">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </span>
                </Link>
            </div>
        </div>

        {/* ── Featured Projects ── */}
        <div className="featured-projects-section" data-aos="fade-up">
            <div className="section-header-block">
                <span className="section-eyebrow">✦ {language === 'fr' ? 'NOS RÉALISATIONS' : 'OUR WORK'}</span>
                <h2 className="section-title-lg">
                    {language === 'fr'
                        ? <>Des projets <span className="text-accent">concrets.</span></>
                        : <>Real <span className="text-accent">results.</span></>
                    }
                </h2>
            </div>
            <FeaturedProjects />
            <div className="fp-view-all-row">
                <Link to="/projects" className="fp-view-all-link">
                    {t('home.viewProjectsBtn')}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </Link>
            </div>
        </div>

        {/* ── CTA Banner ── */}
        <div className="cta-banner-section" data-aos="fade-up">
            <div className="cta-banner-bg-text" aria-hidden="true">GO</div>
            <div className="cta-banner-inner">
                <span className="section-eyebrow cta-eyebrow">✦ {language === 'fr' ? 'PRÊT À LANCER?' : 'READY TO START?'}</span>
                <h2 className="cta-banner-title">
                    {language === 'fr'
                        ? <>Votre projet mérite<br />le meilleur. <span>Parlons-en.</span></>
                        : <>Your project deserves<br />the best. <span>Let's talk.</span></>
                    }
                </h2>
                <p className="cta-banner-sub">
                    {language === 'fr'
                        ? 'Consultation gratuite · Réponse en 24h · Sans engagement'
                        : 'Free consultation · 24h response · No commitment'}
                </p>
                <button
                    className="cta-banner-btn"
                    onClick={() => document.getElementById('book-meeting').scrollIntoView({ behavior: 'smooth' })}
                >
                    {language === 'fr' ? 'Réserver un appel gratuit' : 'Book a free call'}
                    <span className="cta-banner-arrow">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </span>
                </button>
            </div>
        </div>

        {/* ── Testimonials ── */}
        <div className="testimonials-section" data-aos="fade-up">
            <div className="section-header-block">
                <span className="section-eyebrow">✦ {language === 'fr' ? 'ILS NOUS FONT CONFIANCE' : 'CLIENT REVIEWS'}</span>
                <h2 className="section-title-lg">{t('home.testimonials.title')}</h2>
                <p className="testimonials-subtitle">{t('home.testimonials.subtitle')}</p>
            </div>
            <div className="testimonials-grid">
                {t('home.testimonials.items', { returnObjects: true }).map((item, i) => (
                    <div key={i} className="testimonial-card">
                        <div className="testimonial-stars">{'★'.repeat(5)}</div>
                        <p className="testimonial-text">"{item.text}"</p>
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

        {/* ── Calendly ── */}
        <div id="book-meeting" className="home-calendly-section" data-aos="fade-up">
            <div className="home-calendly-header">
                <span className="section-eyebrow">
                    ✦ {language === 'fr' ? 'PRENDRE RENDEZ-VOUS' : 'BOOK A MEETING'}
                </span>
                <h2 className="home-calendly-title">
                    {language === 'fr'
                        ? <>Planifier une <span className="text-accent">consultation gratuite</span></>
                        : <>Schedule a <span className="text-accent">free consultation</span></>
                    }
                </h2>
                <p className="home-calendly-subtitle">
                    {language === 'fr'
                        ? 'Choisissez un créneau qui vous convient — appel de 30 minutes, sans engagement.'
                        : 'Choose a time slot that works for you — 30-minute call, no commitment.'}
                </p>
            </div>
            <div className="home-calendly-widget-wrapper">
                <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/mwdlabs-contact/30min?primary_color=ff1a00"
                    style={{ minWidth: '320px', height: '700px' }}
                />
            </div>
        </div>
        </>
    );
}

export default Home;
