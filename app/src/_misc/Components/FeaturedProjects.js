import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import frData from '../../data/data.json';
import enData from '../../data/data.en.json';
import { useTranslation } from '../../hooks/useTranslation';
import './FeaturedProjects.css';

const FeaturedProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { t, language } = useTranslation();

  useEffect(() => {
    const projectData = language === 'fr' ? frData : enData;
    setFeaturedProjects(projectData.filter(project => project.featured).slice(0, 3));
  }, [language]);

  const handleSelect = (index) => {
    if (index === activeIndex || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
    }, 250);
  };

  if (featuredProjects.length === 0) return null;

  const active = featuredProjects[activeIndex];
  const side = featuredProjects.filter((_, i) => i !== activeIndex);
  const sideIndices = featuredProjects
    .map((_, i) => i)
    .filter(i => i !== activeIndex);

  return (
    <section className="fp-root">
      <div className="fp-header">
        <div className="fp-label-row">
          <span className="fp-eyebrow">{t('home.projects.featuredTitle')}</span>
          <span className="fp-count">{String(activeIndex + 1).padStart(2, '0')} / {String(featuredProjects.length).padStart(2, '0')}</span>
        </div>
        <p className="fp-subtitle">{t('home.projects.featuredSubtitle')}</p>
      </div>

      <div className="fp-grid">
        {/* Main hero card */}
        <div className={`fp-hero ${isTransitioning ? 'fp-hero--fading' : ''}`}>
          <div
            className="fp-hero-bg"
            style={{ backgroundImage: `url(${active.image})` }}
          />
          <div className="fp-hero-overlay" />
          <div className="fp-hero-content">
            <div className="fp-hero-top">
              <span className="fp-type-badge">{active.type}</span>
              <span className="fp-number">
                {String(activeIndex + 1).padStart(2, '0')}
              </span>
            </div>
            <div className="fp-hero-bottom">
              <h3 className="fp-hero-title">{active.title}</h3>
              <p className="fp-hero-desc">{active.shortDescription}</p>
              {active.technologies && (
                <div className="fp-tech-row">
                  {active.technologies.slice(0, 4).map(tech => (
                    <span key={tech} className="fp-tech-tag">{tech}</span>
                  ))}
                </div>
              )}
              <div className="fp-hero-actions">
                <Link to={`/project/${active.id}`} className="fp-btn-primary">
                  {t('projects.viewProject')}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
                {active.link && (
                  <a href={active.link} target="_blank" rel="noopener noreferrer" className="fp-btn-ghost">
                    Live
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Side cards */}
        <div className="fp-side">
          {side.map((project, i) => (
            <button
              key={sideIndices[i]}
              className="fp-side-card"
              onClick={() => handleSelect(sideIndices[i])}
              aria-label={`Voir ${project.title}`}
            >
              <div
                className="fp-side-bg"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="fp-side-overlay" />
              <div className="fp-side-content">
                <span className="fp-side-number">
                  {String(sideIndices[i] + 1).padStart(2, '0')}
                </span>
                <div className="fp-side-bottom">
                  <span className="fp-side-type">{project.type}</span>
                  <h4 className="fp-side-title">{project.title}</h4>
                  <p className="fp-side-desc">{project.shortDescription}</p>
                </div>
              </div>
              <div className="fp-side-hover-line" />
            </button>
          ))}
        </div>
      </div>

      {/* Bottom dots */}
      <div className="fp-dots">
        {featuredProjects.map((_, i) => (
          <button
            key={i}
            className={`fp-dot ${i === activeIndex ? 'fp-dot--active' : ''}`}
            onClick={() => handleSelect(i)}
            aria-label={`Projet ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
