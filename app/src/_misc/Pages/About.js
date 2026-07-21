import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import { useTheme } from '../../contexts/ThemeContext';
import { FaCode, FaMobile, FaPalette, FaLightbulb, FaGraduationCap, FaBriefcase, FaHeart, FaCheckCircle } from 'react-icons/fa';
import { SiReact, SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiFigma, SiFlutter, SiPhp } from 'react-icons/si';
import './About.css';

function About() {
    const { t } = useTranslation();
    const { theme } = useTheme();

    const logoSrc = theme === 'light'
        ? '/images/logo/mwd-labs-logo-transparent-clean.svg'
        : '/images/logo/mwd-labs-logo-white-clean.svg';

    const values = t('about.values', { returnObjects: true });

    return (
        <div className='about-section'>
            <div className='wrapper'>

                {/* ── Hero ── */}
                <section className='hero-section'>
                    <div className='about-bg-text' aria-hidden='true'>ABOUT</div>
                    <div className='hero-content'>
                        <div className='hero-text' data-aos='fade-right'>
                            <span className='about-eyebrow'>
                                {t('about.badge')}
                            </span>
                            <h1 className='hero-title'>{t('about.history.title')}</h1>
                            <p className='hero-subtitle'>{t('about.history.content1')}</p>

                            <ul className='value-list'>
                                {values.map((v, i) => (
                                    <li key={i} className='value-item'>
                                        <FaCheckCircle className='value-icon' />
                                        <span>{v}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className='hero-stats'>
                                <div className='stat-chip'>
                                    <strong>{t('about.stats.experience.number')}</strong>
                                    <span>{t('about.stats.experience.label')}</span>
                                </div>
                                <span className='stat-divider' />
                                <div className='stat-chip'>
                                    <strong>{t('about.stats.projects.number')}</strong>
                                    <span>{t('about.stats.projects.label')}</span>
                                </div>
                                <span className='stat-divider' />
                                <div className='stat-chip'>
                                    <strong>{t('about.stats.clients.number')}</strong>
                                    <span>{t('about.stats.clients.label')}</span>
                                </div>
                            </div>
                        </div>

                        {/* ── Tech Hub (replaces profile photo) ── */}
                        <div className='hero-image' data-aos='fade-left'>
                            <div className='tech-hub'>
                                {/* Center core */}
                                <div className='hub-center'>
                                    <img src={logoSrc} alt='MWD Labs' className='hub-logo' />
                                </div>

                                {/* Inner orbit: React · HTML5 · CSS3 · JavaScript */}
                                <div className='orbit orbit-inner'>
                                    <span className='orbit-logo logo-react' title='React'>
                                        <SiReact />
                                    </span>
                                    <span className='orbit-logo logo-html' title='HTML5'>
                                        <SiHtml5 />
                                    </span>
                                    <span className='orbit-logo logo-css' title='CSS3'>
                                        <SiCss3 />
                                    </span>
                                    <span className='orbit-logo logo-js' title='JavaScript'>
                                        <SiJavascript />
                                    </span>
                                </div>

                                {/* Outer orbit: Node.js · Figma · Flutter · PHP */}
                                <div className='orbit orbit-outer'>
                                    <span className='orbit-logo logo-node' title='Node.js'>
                                        <SiNodedotjs />
                                    </span>
                                    <span className='orbit-logo logo-figma' title='Figma'>
                                        <SiFigma />
                                    </span>
                                    <span className='orbit-logo logo-flutter' title='Flutter'>
                                        <SiFlutter />
                                    </span>
                                    <span className='orbit-logo logo-php' title='PHP'>
                                        <SiPhp />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Journey / Approach ── */}
                <section className='journey-section'>
                    <h2 className='section-title' data-aos='fade-up'>{t('about.journey.title')}</h2>
                    <div className='timeline'>
                        <div className='timeline-item' data-aos='fade-up' data-aos-delay='0'>
                            <div className='timeline-icon'><FaGraduationCap /></div>
                            <div className='timeline-content'>
                                <h3>{t('about.history.title2')}</h3>
                                <p>{t('about.history.content2')}</p>
                            </div>
                        </div>
                        <div className='timeline-item' data-aos='fade-up' data-aos-delay='100'>
                            <div className='timeline-icon'><FaBriefcase /></div>
                            <div className='timeline-content'>
                                <h3>{t('about.history.title3')}</h3>
                                <p>{t('about.history.content3')}</p>
                            </div>
                        </div>
                        <div className='timeline-item' data-aos='fade-up' data-aos-delay='200'>
                            <div className='timeline-icon'><FaHeart /></div>
                            <div className='timeline-content'>
                                <h3>{t('about.journey.passion.title')}</h3>
                                <p>{t('about.journey.passion.content')}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Expertise ── */}
                <section className='expertise-section'>
                    <h2 className='section-title' data-aos='fade-up'>{t('about.expertise.title')}</h2>
                    <div className='expertise-grid'>
                        {[
                            { icon: <FaPalette />, title: t('about.expertise.design.title'), desc: t('about.expertise.design.description') },
                            { icon: <FaCode />,    title: t('about.expertise.development.title'), desc: t('about.expertise.development.description') },
                            { icon: <FaMobile />,  title: t('about.expertise.mobile.title'), desc: t('about.expertise.mobile.description') },
                            { icon: <FaLightbulb />, title: t('about.expertise.ai.title'), desc: t('about.expertise.ai.description') },
                        ].map((card, i) => (
                            <div key={i} className='expertise-card' data-aos='fade-up' data-aos-delay={i * 80}>
                                <div className='card-icon'>{card.icon}</div>
                                <h3>{card.title}</h3>
                                <p>{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Vision / Mission ── */}
                <section className='vision-section'>
                    <div className='vision-content' data-aos='fade-up'>
                        <h2 className='section-title'>{t('about.vision.title')}</h2>
                        <p className='vision-text'>{t('about.vision.content')}</p>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className='cta-section'>
                    <div className='cta-content' data-aos='zoom-in'>
                        <h2 className='cta-title'>{t('about.cta.title')}</h2>
                        <p className='cta-subtitle'>{t('about.cta.message')}</p>
                        <div className='cta-buttons'>
                            <Link to='/contact' className='btn btn-primary'>
                                {t('about.cta.button')}
                            </Link>
                            <Link to='/projects' className='btn btn-outline'>
                                {t('about.cta.viewWork')}
                            </Link>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}

export default About;
