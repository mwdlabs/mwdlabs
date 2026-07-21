import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { skillsData } from '../../data/skillsData';
import './Skills.css';

const Skills = () => {
  const { t } = useTranslation();
  
  
  // Get categories from skills data with translations
  const categories = Object.keys(skillsData).map(key => ({
    ...skillsData[key],
    id: key,
    skills: skillsData[key].skills.map(skill => ({
      ...skill,
      translatedName: skill.name.includes(' ') ? skill.name : t(`skills.${skill.name.toLowerCase()}`),
      translatedDesc: t(`skills.descriptions.${skill.description}`)
    }))
  }));

  const getProficiency = (level) => {
    if (level >= 80) return t('skills.proficiency.expert');
    if (level >= 65) return t('skills.proficiency.advanced');
    if (level >= 50) return t('skills.proficiency.intermediate');
    return t('skills.proficiency.beginner');
  };

  const getLevelColor = (level) => {
    if (level >= 85) return '#4CAF50'; // Vert pour expert
    if (level >= 70) return '#2196F3'; // Bleu pour avancé
    if (level >= 55) return '#FFC107'; // Jaune pour intermédiaire
    return '#F44336'; // Rouge pour débutant
  };


  // Get translated section title and subtitle
  const sectionTitle = t('skills.title', 'My Skills');
  const sectionSubtitle = t('skills.subtitle', 'Technologies and tools I work with');

  return (
    <div className="skills-container">
      <div className="skills-header page-header">
        <h1>{sectionTitle}</h1>
        <p>{sectionSubtitle}</p>
      </div>
      
      <div className="skills-grid">
        {categories.map((category, index) => (
          <div key={index} className="skills-category">
            <h2>{t(`skills.skillCategories.${category.id}`, category.id)}</h2>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.translatedName || skill.name}</span>
                    <span className="skill-level">{getProficiency(skill.level)}</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: getLevelColor(skill.level)
                      }}
                    ></div>
                  </div>
                  {skill.translatedDesc && (
                    <p className="skill-description">{skill.translatedDesc}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="skills-summary">
        <div className="summary-card">
          <h3>{t('skills.summaryCards.aiCollaboration.title')}</h3>
          <p>{t('skills.summaryCards.aiCollaboration.description')}</p>
        </div>
        
        <div className="summary-card">
          <h3>{t('skills.summaryCards.designCode.title')}</h3>
          <p>{t('skills.summaryCards.designCode.description')}</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
