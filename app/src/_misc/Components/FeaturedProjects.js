import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import frData from '../../data/data.json';
import enData from '../../data/data.en.json';
import { useTranslation } from '../../hooks/useTranslation';
import './FeaturedProjects.css';

const FeaturedProjects = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const { t, language } = useTranslation();

  useEffect(() => {
    const projectData = language === 'fr' ? frData : enData;
    setFeaturedProjects(projectData.filter(p => p.featured).slice(0, 3));
  }, [language]);

  if (featuredProjects.length === 0) return null;

  const getDomain = (url) => {
    try { return new URL(url).hostname.replace('www.', ''); }
    catch { return 'mwdlabs.ca'; }
  };

  return (
    <section className="fp-root">
      <div className="fp-header">
        <span className="fp-eyebrow">{t('home.projects.featuredTitle')}</span>
        <p className="fp-subtitle">{t('home.projects.featuredSubtitle')}</p>
      </div>

      <div className="fp-grid">
        {featuredProjects.map(project => (
          <div key={project.id} className="fp-card">

            {/* Browser mockup */}
            <div className="fp-browser">
              <div className="fp-browser-bar">
                <span className="fp-dot fp-dot--r" />
                <span className="fp-dot fp-dot--y" />
                <span className="fp-dot fp-dot--g" />
                <span className="fp-url">
                  {project.link ? getDomain(project.link) : 'mwdlabs.ca'}
                </span>
              </div>
              <div className="fp-screenshot-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="fp-screenshot"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Info strip */}
            <div className="fp-info">
              <div className="fp-info-text">
                <span className="fp-type-badge">{project.type}</span>
                <h3 className="fp-title">{project.title}</h3>
              </div>
              <div className="fp-actions">
                <Link to={`/project/${project.id}`} className="fp-btn-details">
                  {t('projects.viewProject')} →
                </Link>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fp-btn-live"
                  >
                    Visiter ↗
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
