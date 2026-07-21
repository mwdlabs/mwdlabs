import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import frData from '../../data/data.json';
import enData from '../../data/data.en.json';
import { useTranslation } from '../../hooks/useTranslation';
import { FaGlobe, FaPalette, FaMobileAlt, FaGamepad, FaDesktop, FaThLarge } from 'react-icons/fa';

function Projects() {
    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState('all');
    const { t, language } = useTranslation();

    const projectTypes = {
        'Website':                       { fr: 'Site Web',             en: 'Website' },
        'Web Development':               { fr: 'Développement Web',    en: 'Web Dev' },
        'UI/UX Design':                  { fr: 'UI/UX Design',         en: 'UI/UX Design' },
        'Video Game':                    { fr: 'Jeu Vidéo',            en: 'Video Game' },
        'Game Development':              { fr: 'Jeu',                  en: 'Game Dev' },
        'Mobile App':                    { fr: 'Application Mobile',   en: 'Mobile App' },
        'Desktop':                       { fr: 'Logiciel Bureau',      en: 'Desktop' },
        'Design':                        { fr: 'Design / 3D',          en: 'Design / 3D' },
        'Site Web':                      { fr: 'Site Web',             en: 'Website' },
        'Développement Web':             { fr: 'Dev Web',              en: 'Web Dev' },
        'Jeu Vidéo':                     { fr: 'Jeu Vidéo',            en: 'Video Game' },
        'Jeux Vidéo':                    { fr: 'Jeu Vidéo',            en: 'Video Game' },
        'Jeu Vidéo (Simulateur)':        { fr: 'Simulateur',           en: 'Simulator' },
        'Application Mobile':            { fr: 'App Mobile',           en: 'Mobile App' },
        'Modélisation 3D':               { fr: '3D',                   en: '3D Modeling' },
        'Développement Multiplateforme': { fr: 'Multiplateforme',      en: 'Cross-Platform' },
    };

    const normalizeProjectType = (type) => {
        const map = {
            'Site Web': 'Website', 'Développement Web': 'Website',
            'UI/UX Design': 'UI/UX Design', 'Modélisation 3D': 'UI/UX Design',
            'Jeu Vidéo': 'Video Game', 'Jeux Vidéo': 'Video Game',
            'Jeu Vidéo (Simulateur)': 'Video Game', 'Développement de Jeu': 'Video Game',
            'Application Mobile': 'Mobile App', 'Logiciel Bureau': 'Desktop',
            'Développement Multiplateforme': 'Desktop',
            'Website': 'Website', 'Web Development': 'Website',
            'Video Game': 'Video Game', 'Game Development': 'Video Game',
            'Mobile App': 'Mobile App', 'Desktop Software': 'Desktop',
        };
        return map[type] || type;
    };

    useEffect(() => {
        setProjects(language === 'fr' ? frData : enData);
    }, [language]);

    const isWebsite = (p) => normalizeProjectType(p.type) === 'Website';

    const filteredProjects = (filter === 'all'
        ? [...projects].sort((a, b) => {
            if (isWebsite(a) && !isWebsite(b)) return -1;
            if (!isWebsite(a) && isWebsite(b)) return 1;
            return 0;
          })
        : projects.filter(p => normalizeProjectType(p.type) === filter || p.type === filter));

    const getCount = (key) => key === 'all'
        ? projects.length
        : projects.filter(p => normalizeProjectType(p.type) === key || p.type === key).length;

    const getTranslatedType = (type) => projectTypes[type]?.[language] || type;

    const liveCount = projects.filter(p => p.link && normalizeProjectType(p.type) === 'Website').length;

    const allFilterTypes = [
        { key: 'all',          label: language === 'fr' ? 'Tout'      : 'All',      icon: <FaThLarge /> },
        { key: 'Website',      label: language === 'fr' ? 'Sites Web' : 'Websites', icon: <FaGlobe /> },
        { key: 'UI/UX Design', label: 'Design',                                      icon: <FaPalette /> },
        { key: 'Mobile App',   label: 'Mobile',                                      icon: <FaMobileAlt /> },
        { key: 'Video Game',   label: language === 'fr' ? 'Jeux'      : 'Games',    icon: <FaGamepad /> },
        { key: 'Desktop',      label: 'Desktop',                                     icon: <FaDesktop /> },
    ];

    // Only show filters for categories that actually have projects
    const activeCategories = allFilterTypes.filter(
        f => f.key === 'all' || getCount(f.key) > 0
    );
    // Hide entire filter bar if every project is the same type (only 1 real category)
    const showFilters = activeCategories.filter(f => f.key !== 'all').length > 1;
    const filterTypes = showFilters ? activeCategories : [];

    return (
        <div className="projects-container">

            {/* ── Header ── */}
            <header className="projects-header">
                <div className="projects-header-inner">
                    <span className="projects-eyebrow">
                        {language === 'fr' ? '✦ Nos Réalisations' : '✦ Our Work'}
                    </span>
                    <h1 className="projects-title">{t('projects.title')}</h1>
                    <p className="projects-subtitle">{t('projects.subtitle')}</p>
                </div>
                <div className="projects-bg-text" aria-hidden="true">WORK</div>

                {/* Stats */}
                <div className="portfolio-stats">
                    <div className="stat-chip">
                        <strong>{projects.length}+</strong>
                        <span>{language === 'fr' ? 'Projets livrés' : 'Projects delivered'}</span>
                    </div>
                    <span className="stat-divider" />
                    <div className="stat-chip">
                        <strong>{liveCount}</strong>
                        <span>{language === 'fr' ? 'Sites en ligne' : 'Live websites'}</span>
                    </div>
                    <span className="stat-divider" />
                    <div className="stat-chip">
                        <strong>5+</strong>
                        <span>{language === 'fr' ? "Ans d'expérience" : 'Years experience'}</span>
                    </div>
                </div>
            </header>

            {/* ── Filters — only rendered when multiple categories exist ── */}
            {showFilters && (
                <div className="projects-filters">
                    {filterTypes.map(f => (
                        <button
                            key={f.key}
                            className={`filter-pill${filter === f.key ? ' active' : ''}`}
                            onClick={() => setFilter(f.key)}
                        >
                            <span className="filter-icon">{f.icon}</span>
                            <span className="filter-label">{f.label}</span>
                            <span className="filter-count">{getCount(f.key)}</span>
                        </button>
                    ))}
                </div>
            )}

            {/* ── Grid ── */}
            <div className="projects-grid">
                {filteredProjects.map((project, idx) => {
                    const featured = project.featured || isWebsite(project);
                    return (
                        <Link
                            to={`/project/${project.id}`}
                            key={project.id}
                            className={`project-card${featured ? ' featured' : ''}`}
                            data-aos="fade-up"
                            data-aos-delay={idx < 6 ? idx * 60 : 0}
                        >
                            {/* Background image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className={`project-bg-img${project.type.includes('Mobile') ? ' mobile' : ''}`}
                                loading="lazy"
                            />

                            {/* Gradient */}
                            <div className="card-gradient" />

                            {/* Top row: badges + number */}
                            <div className="card-top">
                                <div className="project-badges">
                                    <span className="project-type-badge">
                                        {getTranslatedType(project.type)}
                                    </span>
                                    {project.link && (
                                        <span className="live-badge">
                                            <span className="live-dot" />
                                            Live
                                        </span>
                                    )}
                                </div>
                                <span className="project-number">
                                    {String(idx + 1).padStart(2, '0')}
                                </span>
                            </div>

                            {/* Slide-up content */}
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.shortDescription}</p>

                                {project.technologies && (
                                    <div className="tech-chips">
                                        {project.technologies.slice(0, 4).map((tech, i) => (
                                            <span key={i} className="tech-chip">{tech}</span>
                                        ))}
                                    </div>
                                )}

                                <div className="project-actions">
                                    <span className="action-view">
                                        {t('projects.viewProject')}
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14M12 5l7 7-7 7"/>
                                        </svg>
                                    </span>
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="action-live"
                                            onClick={e => e.stopPropagation()}
                                        >
                                            Live ↗
                                        </a>
                                    )}
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>

            {filteredProjects.length === 0 && (
                <div className="no-projects">
                    <p>{language === 'fr' ? 'Aucun projet dans cette catégorie.' : 'No projects in this category.'}</p>
                </div>
            )}
        </div>
    );
}

export default Projects;
