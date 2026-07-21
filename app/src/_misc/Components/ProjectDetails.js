import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import frData from '../../data/data.json';
import enData from '../../data/data.en.json';
import { useTranslation } from '../../hooks/useTranslation';
import './ProjectDetails.css';

const projectTypes = {
    'Website':                       { fr: 'Site Web',                   en: 'Website' },
    'Web Development':               { fr: 'Développement Web',          en: 'Web Development' },
    'UI/UX Design':                  { fr: 'UI/UX Design',               en: 'UI/UX Design' },
    'Video Game':                    { fr: 'Jeu Vidéo',                  en: 'Video Game' },
    'Game Development':              { fr: 'Développement de Jeu',       en: 'Game Development' },
    'Mobile App':                    { fr: 'Application Mobile',         en: 'Mobile App' },
    'Desktop':                       { fr: 'Logiciel Bureau',            en: 'Desktop Software' },
    'Site Web':                      { fr: 'Site Web',                   en: 'Website' },
    'Développement Web':             { fr: 'Développement Web',          en: 'Web Development' },
    'Jeu Vidéo':                     { fr: 'Jeu Vidéo',                  en: 'Video Game' },
    'Jeux Vidéo':                    { fr: 'Jeu Vidéo',                  en: 'Video Game' },
    'Jeu Vidéo (Simulateur)':        { fr: 'Jeu Vidéo (Simulateur)',     en: 'Video Game (Simulator)' },
    'Application Mobile':            { fr: 'Application Mobile',         en: 'Mobile App' },
    'Modélisation 3D':               { fr: 'Modélisation 3D',            en: '3D Modeling' },
    'Développement Multiplateforme': { fr: 'Multiplateforme',            en: 'Cross-Platform' },
    'Développement de Jeu':          { fr: 'Développement de Jeu',       en: 'Game Development' },
};

function ProjectDetails() {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [activeTab, setActiveTab] = useState('overview');
    const { t, language } = useTranslation();

    const getTranslatedType = (type) => projectTypes[type]?.[language] || type;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    useEffect(() => {
        const projectData = language === 'fr' ? frData : enData;
        const found = projectData.find(proj => proj.id === parseInt(id, 10));
        setProject(found);
        setActiveTab('overview');
    }, [id, language]);

    const allProjects = language === 'fr' ? frData : enData;
    const currentIndex = project ? allProjects.findIndex(p => p.id === project.id) : -1;
    const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
    const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

    if (!project) {
        return (
            <div className="pd-loading">
                <div className="pd-spinner"></div>
                <p>{t('projects.loading')}</p>
            </div>
        );
    }

    const hasDemo = project.demoVideo || project.demoLink;
    const hasFeatures = project.features && project.features.length > 0;
    const hasDetails = project.challenges || project.learnings;

    const tabs = [
        { id: 'overview', label: t('projects.overview') },
        ...(hasFeatures ? [{ id: 'features', label: t('projects.features') }] : []),
        ...(hasDetails  ? [{ id: 'details',  label: t('projects.details')  }] : []),
        ...(hasDemo     ? [{ id: 'demo',     label: t('projects.demo')     }] : []),
    ];

    return (
        <div className="pd-container">

            {/* ── HERO ── */}
            <div className="pd-hero">
                <img
                    src={project.image}
                    alt={project.title}
                    className={`pd-hero-bg${project.type.includes('Mobile') ? ' mobile' : ''}`}
                />
                <div className="pd-hero-overlay" />

                <div className="pd-hero-content">
                    <Link to="/projects" className="pd-back">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {t('projects.backToProjects')}
                    </Link>

                    <div className="pd-hero-body">
                        <div className="pd-badges">
                            <span className="pd-type-badge">{getTranslatedType(project.type)}</span>
                            {project.link && (
                                <span className="pd-status-badge live">
                                    <span className="pd-live-dot" />
                                    Live
                                </span>
                            )}
                            {project.status === 'unavailable' && (
                                <span className="pd-status-badge locked">
                                    {t('projects.unavailable')}
                                </span>
                            )}
                        </div>
                        <h1 className="pd-title">{project.title}</h1>
                        <p className="pd-subtitle">{project.shortDescription}</p>

                        <div className="pd-hero-actions">
                            {project.link && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer"
                                    className="pd-btn pd-btn-primary">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M6 3H3a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1v-3M9 2h5m0 0v5m0-5L7 10"
                                            stroke="currentColor" strokeWidth="1.8"
                                            strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    {project.type === 'Site Web' || project.type === 'Website'
                                        ? t('projects.visitProject')
                                        : t('projects.viewOnline')}
                                </a>
                            )}
                            {project.githubLink && (
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                                    className="pd-btn pd-btn-ghost">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
                                            0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13
                                            -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66
                                            .07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15
                                            -.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0
                                            1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82
                                            1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01
                                            1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                                    </svg>
                                    {t('projects.sourceCode')}
                                </a>
                            )}
                            {hasDemo && (
                                <button className="pd-btn pd-btn-ghost"
                                    onClick={() => setActiveTab('demo')}>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.8"/>
                                        <path d="M6 5.5l5 2.5-5 2.5V5.5z" fill="currentColor"/>
                                    </svg>
                                    {t('projects.watchDemo')}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── MAIN LAYOUT ── */}
            <div className="pd-main">

                {/* ── CONTENT AREA ── */}
                <div className="pd-content">
                    {/* Tab nav */}
                    {tabs.length > 1 && (
                        <div className="pd-tabs">
                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    className={`pd-tab${activeTab === tab.id ? ' active' : ''}`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Overview */}
                    {activeTab === 'overview' && (
                        <div className="pd-panel fade-in">
                            <h2 className="pd-section-title">{t('projects.description')}</h2>
                            <p className="pd-description">{project.longDescription}</p>

                            {project.link && (
                                <div className="pd-live-banner">
                                    <span className="pd-live-banner-text">
                                        <span className="pd-live-banner-dot" />
                                        {language === 'fr' ? 'Ce projet est en ligne' : 'This project is live'}
                                    </span>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        {language === 'fr' ? 'Visiter le site' : 'Visit website'}
                                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                                            <path d="M4 2H2a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V8M7 1h5m0 0v5m0-5L5.5 7.5"
                                                stroke="currentColor" strokeWidth="1.6"
                                                strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </a>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Features */}
                    {activeTab === 'features' && hasFeatures && (
                        <div className="pd-panel fade-in">
                            <h2 className="pd-section-title">{t('projects.features')}</h2>
                            <ul className="pd-features">
                                {project.features.map((f, i) => (
                                    <li key={i} className="pd-feature-item">
                                        <span className="pd-check">
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                <path d="M2.5 7L5.5 10L11.5 4" stroke="currentColor"
                                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </span>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Details */}
                    {activeTab === 'details' && hasDetails && (
                        <div className="pd-panel fade-in">
                            {project.challenges && (
                                <div className="pd-detail-block">
                                    <h2 className="pd-section-title">{t('projects.challenges')}</h2>
                                    <p className="pd-description">{project.challenges}</p>
                                </div>
                            )}
                            {project.learnings && (
                                <div className="pd-detail-block">
                                    <h2 className="pd-section-title">{t('projects.learnings')}</h2>
                                    <p className="pd-description">{project.learnings}</p>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Demo */}
                    {activeTab === 'demo' && hasDemo && (
                        <div className="pd-panel fade-in">
                            <h2 className="pd-section-title">{t('projects.demoVideo')}</h2>
                            {project.demoVideo ? (
                                <div className="pd-video-wrap">
                                    <video controls className="pd-video" poster={project.image}>
                                        <source src={project.demoVideo} type="video/mp4" />
                                        {t('projects.browserNotSupported')}
                                    </video>
                                </div>
                            ) : (
                                <div className="pd-no-demo">
                                    <div className="pd-no-demo-icon">
                                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                            <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2"/>
                                            <path d="M18 16l16 8-16 8V16z" fill="currentColor"/>
                                        </svg>
                                    </div>
                                    <h3>{t('projects.noDemo')}</h3>
                                    <p>{t('projects.noDemoDescription')}</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* ── SIDEBAR ── */}
                <aside className="pd-sidebar">
                    {/* Meta */}
                    <div className="pd-card">
                        <h3 className="pd-card-title">{t('projects.type')}</h3>
                        <div className="pd-meta-list">
                            <div className="pd-meta-row">
                                <span className="pd-meta-icon">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <rect x="1" y="1" width="14" height="14" rx="2"
                                            stroke="currentColor" strokeWidth="1.5"/>
                                        <path d="M4 8h8M4 5h8M4 11h5" stroke="currentColor"
                                            strokeWidth="1.5" strokeLinecap="round"/>
                                    </svg>
                                </span>
                                <span>{getTranslatedType(project.type)}</span>
                            </div>
                            {project.duration && (
                                <div className="pd-meta-row">
                                    <span className="pd-meta-icon">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                                            <path d="M8 4v4l3 2" stroke="currentColor"
                                                strokeWidth="1.5" strokeLinecap="round"/>
                                        </svg>
                                    </span>
                                    <span>{project.duration}</span>
                                </div>
                            )}
                            {project.teamSize > 0 && (
                                <div className="pd-meta-row">
                                    <span className="pd-meta-icon">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <circle cx="6" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
                                            <path d="M1 13c0-2.76 2.24-5 5-5s5 2.24 5 5"
                                                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                            <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="1.5"/>
                                            <path d="M14 13c0-1.86-1.06-3.48-2.6-4.28"
                                                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                        </svg>
                                    </span>
                                    <span>
                                        {project.teamSize} {project.teamSize > 1
                                            ? t('projects.people')
                                            : t('projects.person')}
                                    </span>
                                </div>
                            )}
                            {project.status && (
                                <div className="pd-meta-row">
                                    <span className="pd-meta-icon">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                                            <path d="M5 8l2 2 4-4" stroke="currentColor"
                                                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                    <span className={`pd-status-text pd-status-${project.status}`}>
                                        {project.status === 'available'
                                            ? t('projects.available')
                                            : t('projects.unavailable')}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Tech stack */}
                    {project.technologies && project.technologies.length > 0 && (
                        <div className="pd-card">
                            <h3 className="pd-card-title">{t('projects.technologies')}</h3>
                            <div className="pd-tech-grid">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="pd-tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Links */}
                    {(project.link || project.githubLink) && (
                        <div className="pd-card">
                            <h3 className="pd-card-title">{t('projects.links')}</h3>
                            <div className="pd-link-list">
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                                        className="pd-sidebar-link">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <path d="M5 2H2a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1V8M8 1h5m0 0v5m0-5L6 9"
                                                stroke="currentColor" strokeWidth="1.5"
                                                strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        {project.type === 'Site Web' || project.type === 'Website'
                                            ? t('projects.visitProject')
                                            : t('projects.viewOnline')}
                                    </a>
                                )}
                                {project.githubLink && (
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                                        className="pd-sidebar-link">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                                            <path d="M7 0C3.13 0 0 3.13 0 7c0 3.09 2 5.96 4.78 6.93.35.07.48-.15.48-.33
                                                0-.17-.01-.72-.01-1.3-1.75.32-2.21-.43-2.35-.82-.08-.2-.42-.82-.72-.99
                                                -.24-.13-.59-.45-.01-.46.55-.01.94.51 1.07.72.63 1.06 1.64.76 2.04.58
                                                .06-.45.24-.76.44-.93-1.56-.18-3.18-.78-3.18-3.46 0-.76.27-1.39.72-1.88
                                                -.07-.18-.31-.89.07-1.86 0 0 .58-.18 1.93.71.56-.16 1.15-.24 1.75-.24
                                                .59 0 1.19.08 1.75.24 1.34-.91 1.93-.71 1.93-.71.38.96.14 1.68.07 1.86
                                                .45.49.72 1.11.72 1.88 0 2.69-1.63 3.28-3.19 3.46.25.22.47.64.47 1.29
                                                0 .94-.01 1.69-.01 1.92 0 .19.13.4.48.33A7 7 0 0014 7c0-3.87-3.13-7-7-7z"/>
                                        </svg>
                                        {t('projects.sourceCode')}
                                    </a>
                                )}
                            </div>
                        </div>
                    )}
                </aside>
            </div>

            {/* ── FOOTER NAV ── */}
            <div className="pd-footer">
                <div className="pd-footer-nav">
                    {prevProject ? (
                        <Link to={`/project/${prevProject.id}`} className="pd-nav-card pd-nav-prev">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <div className="pd-nav-info">
                                <span className="pd-nav-label">{language === 'fr' ? 'Précédent' : 'Previous'}</span>
                                <span className="pd-nav-title">{prevProject.title}</span>
                            </div>
                        </Link>
                    ) : <div />}

                    <Link to="/projects" className="pd-nav-all">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <rect x="1" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.6"/>
                            <rect x="9" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.6"/>
                            <rect x="1" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.6"/>
                            <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.6"/>
                        </svg>
                        {t('projects.viewAll')}
                    </Link>

                    {nextProject ? (
                        <Link to={`/project/${nextProject.id}`} className="pd-nav-card pd-nav-next">
                            <div className="pd-nav-info">
                                <span className="pd-nav-label">{language === 'fr' ? 'Suivant' : 'Next'}</span>
                                <span className="pd-nav-title">{nextProject.title}</span>
                            </div>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Link>
                    ) : <div />}
                </div>

                <div className="pd-footer-cta">
                    <p>{language === 'fr' ? 'Un projet similaire en tête ?' : 'Got a similar project in mind?'}</p>
                    <Link to="/contact" className="pd-btn pd-btn-primary">
                        {t('nav.contact')}
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;
