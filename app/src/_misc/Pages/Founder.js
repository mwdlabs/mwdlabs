import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import {
    FaCode, FaMobileAlt, FaGraduationCap, FaRocket,
    FaGithub, FaLinkedin, FaExternalLinkAlt, FaEnvelope,
    FaTrophy, FaLaptopCode, FaGamepad, FaBriefcase, FaCheckCircle
} from 'react-icons/fa';
import { SiReact, SiJavascript, SiNodedotjs, SiAndroid, SiPhp, SiCss3, SiHtml5, SiPython, SiMysql, SiBootstrap, SiTailwindcss } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import waganeImg from '../../assets/images/wagane.jpeg';
import waganeOrdiImg from '../../assets/images/WaganeOrdi.jpg';
import waganeVibesImg from '../../assets/images/WaganeGoodVibes.JPG';
import './Founder.css';

const projects = [
    {
        title: 'Neo Mirror',
        desc_fr: 'Miroir intelligent contrôlé par la voix avec affichage d\'infos en temps réel.',
        desc_en: 'Voice-controlled smart mirror with real-time info display.',
        image: '/images/projects/neo-mirror-app.png',
        type_fr: 'App Bureau',
        type_en: 'Desktop App',
        tech: ['React', 'Electron', 'Node.js'],
        icon: <FaLaptopCode />,
    },
    {
        title: 'Battleship',
        desc_fr: 'Jeu de bataille navale multijoueur en temps réel.',
        desc_en: 'Real-time multiplayer Battleship game.',
        image: '/images/projects/battleship.png',
        type_fr: 'Jeu Vidéo',
        type_en: 'Video Game',
        tech: ['JavaScript', 'HTML5', 'CSS3'],
        icon: <FaGamepad />,
    },
    {
        title: 'Timflix',
        desc_fr: 'Interface clone de Netflix avec gestion de contenu.',
        desc_en: 'Netflix-inspired streaming interface with content management.',
        image: '/images/projects/timflix.png',
        type_fr: 'Site Web',
        type_en: 'Website',
        tech: ['React', 'CSS3', 'API'],
        icon: <FaCode />,
    },
    {
        title: 'Delivery App',
        desc_fr: 'Application mobile de livraison avec suivi en temps réel.',
        desc_en: 'Mobile delivery app with real-time tracking.',
        image: '/images/projects/delivery-app.png',
        type_fr: 'App Mobile',
        type_en: 'Mobile App',
        tech: ['Android Studio', 'Java', 'Firebase'],
        icon: <FaMobileAlt />,
    },
    {
        title: 'École App',
        desc_fr: 'Application mobile de gestion scolaire complète.',
        desc_en: 'Full-featured school management mobile app.',
        image: '/images/projects/ecole-app.png',
        type_fr: 'App Mobile',
        type_en: 'Mobile App',
        tech: ['Android Studio', 'Java'],
        icon: <FaMobileAlt />,
    },
    {
        title: 'Cycloaction',
        desc_fr: 'Site web pour une organisation de cyclisme communautaire.',
        desc_en: 'Website for a community cycling organization.',
        image: '/images/projects/cycloaction.png',
        type_fr: 'Site Web',
        type_en: 'Website',
        tech: ['React', 'Node.js', 'CSS3'],
        icon: <FaCode />,
    },
    {
        title: 'Damier App',
        desc_fr: 'Jeu de dames en application mobile.',
        desc_en: 'Checkers board game mobile app.',
        image: '/images/projects/damier-app.png',
        type_fr: 'Jeu Mobile',
        type_en: 'Mobile Game',
        tech: ['Android Studio', 'Java'],
        icon: <FaGamepad />,
    },
    {
        title: 'Mappa',
        desc_fr: 'Application de cartographie interactive.',
        desc_en: 'Interactive mapping application.',
        image: '/images/projects/app-mappa.png',
        type_fr: 'App Web',
        type_en: 'Web App',
        tech: ['React', 'Leaflet', 'JavaScript'],
        icon: <FaCode />,
    },
    {
        title: 'The Act Ministry',
        desc_fr: 'Site web pour un ministère religieux.',
        desc_en: 'Website for a religious ministry.',
        image: '/images/projects/theactministry2.png',
        type_fr: 'Site Web',
        type_en: 'Website',
        tech: ['React', 'CSS3'],
        icon: <FaCode />,
    },
    {
        title: 'Tic-Tac-Toe',
        desc_fr: 'Jeu de morpion jouable contre l\'IA.',
        desc_en: 'Tic-tac-toe game playable against AI.',
        image: '/images/projects/tic-tac-toe.png',
        type_fr: 'Jeu Web',
        type_en: 'Web Game',
        tech: ['JavaScript', 'HTML5', 'CSS3'],
        icon: <FaGamepad />,
    },
    {
        title: 'Générateur de Citations',
        desc_fr: 'Générateur de citations inspirantes aléatoires.',
        desc_en: 'Random inspirational quotes generator.',
        image: '/images/projects/generateur-citations.png',
        type_fr: 'App Web',
        type_en: 'Web App',
        tech: ['JavaScript', 'HTML5', 'CSS3'],
        icon: <FaCode />,
    },
    {
        title: 'Montréal Race App',
        desc_fr: 'Application de suivi de courses à Montréal.',
        desc_en: 'Montreal racing event tracking app.',
        image: '/images/projects/montreal-race-app.png',
        type_fr: 'App Web',
        type_en: 'Web App',
        tech: ['React', 'JavaScript'],
        icon: <FaCode />,
    },
];

const skills = [
    { icon: <SiReact />,        name: 'React',          color: '#61DAFB' },
    { icon: <SiJavascript />,   name: 'JavaScript',     color: '#F7DF1E' },
    { icon: <FaJava />,         name: 'Java',           color: '#ED8B00' },
    { icon: <SiPython />,       name: 'Python',         color: '#3776AB' },
    { icon: <SiPhp />,          name: 'PHP',            color: '#777BB4' },
    { icon: <SiMysql />,        name: 'MySQL',          color: '#4479A1' },
    { icon: <SiHtml5 />,        name: 'HTML5',          color: '#E34F26' },
    { icon: <SiCss3 />,         name: 'CSS3',           color: '#1572B6' },
    { icon: <SiBootstrap />,    name: 'Bootstrap',      color: '#7952B3' },
    { icon: <SiTailwindcss />,  name: 'Tailwind',       color: '#06B6D4' },
    { icon: <SiAndroid />,      name: 'Android Studio', color: '#3DDC84' },
    { icon: <SiNodedotjs />,    name: 'Node.js',        color: '#339933' },
];

function Founder() {
    const { language } = useTranslation();
    const [activeFilter, setActiveFilter] = useState('all');

    const fr = language === 'fr';

    const filterTypes = [
        { key: 'all',     label: fr ? 'Tous' : 'All' },
        { key: 'Website', label: fr ? 'Sites Web' : 'Websites' },
        { key: 'Mobile',  label: 'Mobile' },
        { key: 'Game',    label: fr ? 'Jeux' : 'Games' },
    ];

    const matchFilter = (p) => {
        if (activeFilter === 'all') return true;
        const type = fr ? p.type_fr : p.type_en;
        if (activeFilter === 'Website') return type.toLowerCase().includes('site') || type.toLowerCase().includes('website') || type.toLowerCase().includes('web app') || type.toLowerCase().includes('app web');
        if (activeFilter === 'Mobile') return type.toLowerCase().includes('mobile');
        if (activeFilter === 'Game') return type.toLowerCase().includes('jeu') || type.toLowerCase().includes('game');
        return true;
    };

    const filtered = projects.filter(matchFilter);

    return (
        <div className="founder-page">

            {/* ── HERO ── */}
            <section className="founder-hero">
                <div className="founder-hero-bg" />
                <div className="founder-hero-inner">
                    <div className="founder-photo-col" data-aos="fade-right">
                        <div className="founder-photo-frame">
                            <img src={waganeImg} alt="Mohammad Wagane Diouf" className="founder-photo-main" />
                            <div className="founder-photo-badge">
                                <FaRocket />
                                <span>{fr ? 'Fondateur' : 'Founder'}</span>
                            </div>
                        </div>
                    </div>

                    <div className="founder-intro-col" data-aos="fade-left">
                        <span className="founder-tag">✦ MWD Labs</span>
                        <h1 className="founder-name">
                            Mouhammad Wagane<br />
                            <span className="founder-name-accent">Diouf</span>
                        </h1>
                        <p className="founder-role">
                            {fr
                                ? 'Fondateur MWD Labs · Développeur Full-Stack & Mobile'
                                : 'Founder of MWD Labs · Full-Stack & Mobile Developer'}
                        </p>
                        <p className="founder-bio">
                            {fr
                                ? "Diplômé en Technique de l'informatique au Cégep Saint-Jean-sur-Richelieu, j'ai fondé MWD Labs pour créer des expériences numériques qui ont un vrai impact. Fort d'un stage en TI chez Exo et de projets concrets en web et mobile, je développe des applications du début à la fin. Ouvert aux opportunités de développement logiciel ou web."
                                : "Graduate in Computer Science from Cégep Saint-Jean-sur-Richelieu, I founded MWD Labs to build digital experiences that make a real difference. With an IT internship at Exo and hands-on web & mobile projects, I develop applications end to end. Open to software or web development opportunities."}
                        </p>

                        <div className="founder-tags-row">
                            <span className="founder-pill"><FaGraduationCap /> DEC Informatique</span>
                            <span className="founder-pill"><FaCode /> Full-Stack</span>
                            <span className="founder-pill"><FaMobileAlt /> Mobile</span>
                            <span className="founder-pill">Montréal, QC</span>
                        </div>

                        <div className="founder-cta-row">
                            <Link to="/contact" className="btn btn-primary">
                                {fr ? 'Me contacter' : 'Contact me'}
                            </Link>
                            <a
                                href="/docs/MouhammadWaganeDiouf_CV.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline"
                            >
                                {fr ? 'Voir mon CV' : 'View my CV'}
                            </a>
                        </div>

                        <div className="founder-socials">
                            <a href="mailto:dioufmouhammad@gmail.com" className="social-icon-btn" aria-label="Email">
                                <FaEnvelope />
                            </a>
                            <a href="https://github.com/Diouf10" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/mouhammad-wagane-diouf-b5943320b/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── STATS ── */}
            <section className="founder-stats-bar" data-aos="fade-up">
                <div className="fstat">
                    <strong>3</strong>
                    <span>{fr ? 'Clients accompagnés' : 'Clients served'}</span>
                </div>
                <div className="fstat-divider" />
                <div className="fstat">
                    <strong>DEC</strong>
                    <span>{fr ? 'Diplômé Informatique' : 'CS Graduate'}</span>
                </div>
                <div className="fstat-divider" />
                <div className="fstat">
                    <strong>Full-Stack</strong>
                    <span>{fr ? 'Web & Mobile' : 'Web & Mobile'}</span>
                </div>
                <div className="fstat-divider" />
                <div className="fstat">
                    <strong className="fstat-open">{fr ? 'Ouvert' : 'Open'}</strong>
                    <span>{fr ? 'aux opportunités' : 'to opportunities'}</span>
                </div>
            </section>

            {/* ── GALLERY ── */}
            <section className="founder-gallery" data-aos="fade-up">
                <div className="gallery-grid">
                    <div className="gallery-item gallery-item--main">
                        <img src={waganeImg} alt="Mohammad Wagane Diouf" />
                        <div className="gallery-caption">{fr ? 'Le fondateur' : 'The founder'}</div>
                    </div>
                    <div className="gallery-item">
                        <img src={waganeOrdiImg} alt="Wagane coding" />
                        <div className="gallery-caption">{fr ? 'Dans le flow' : 'In the flow'}</div>
                    </div>
                    <div className="gallery-item">
                        <img src={waganeVibesImg} alt="Wagane good vibes" />
                        <div className="gallery-caption">{fr ? 'Bonne énergie' : 'Good vibes'}</div>
                    </div>
                </div>
            </section>

            {/* ── PARCOURS ── */}
            <section className="founder-journey" data-aos="fade-up">
                <div className="founder-section-header">
                    <h2>{fr ? 'Mon Parcours' : 'My Journey'}</h2>
                    <p>{fr ? 'De la passion à la profession' : 'From passion to profession'}</p>
                </div>

                <div className="founder-timeline">
                    <div className="ftl-item" data-aos="fade-up" data-aos-delay="0">
                        <div className="ftl-icon"><FaGraduationCap /></div>
                        <div className="ftl-content">
                            <h3>{fr ? 'Technique de l\'informatique — Cégep Saint-Jean-sur-Richelieu' : 'Computer Science — Cégep Saint-Jean-sur-Richelieu'}</h3>
                            <span className="ftl-date">2022 – 2026</span>
                            <p>
                                {fr
                                    ? "Formation en développement logiciel, POO, bases de données, développement web & mobile. Diplômé — DEC en Technique de l'informatique."
                                    : "Training in software development, OOP, databases, web & mobile development. Graduate — DEC in Computer Science Technology."}
                            </p>
                        </div>
                    </div>

                    <div className="ftl-item" data-aos="fade-up" data-aos-delay="100">
                        <div className="ftl-icon"><FaBriefcase /></div>
                        <div className="ftl-content">
                            <h3>{fr ? 'Stage TI — Exo (Montréal)' : 'IT Internship — Exo (Montréal)'}</h3>
                            <span className="ftl-date">{fr ? 'Mai – Août 2023' : 'May – Aug 2023'}</span>
                            <p>
                                {fr
                                    ? "Installation et configuration de postes de travail, dépannage à distance, diagnostic d'incidents logiciels, matériels et réseaux."
                                    : "Workstation setup and configuration, remote troubleshooting, diagnosis of software, hardware and network incidents."}
                            </p>
                        </div>
                    </div>

                    <div className="ftl-item ftl-item--current" data-aos="fade-up" data-aos-delay="200">
                        <div className="ftl-icon"><FaRocket /></div>
                        <div className="ftl-content">
                            <h3>IPQWERY</h3>
                            <span className="ftl-date ftl-date--current">
                                {fr ? 'Avr. 2025 – Aujourd\'hui · Stage de fin d\'études' : 'Apr. 2025 – Present · Final Internship'}
                            </span>
                            <p>
                                {fr
                                    ? "Plus d'un an d'expérience chez IPQWERY : d'abord en stage (avr.–août), puis à temps partiel pendant l'année scolaire, et maintenant en stage de fin d'études à temps plein (8 semaines). Une immersion complète dans le développement en entreprise."
                                    : "Over a year at IPQWERY: first as an intern (Apr.–Aug.), then part-time during the school year, and now full-time for my final internship (8 weeks). Full immersion in professional software development."}
                            </p>
                        </div>
                    </div>

                    <div className="ftl-item" data-aos="fade-up" data-aos-delay="300">
                        <div className="ftl-icon"><FaTrophy /></div>
                        <div className="ftl-content">
                            <h3>{fr ? 'Fondation de MWD Labs' : 'Founding MWD Labs'}</h3>
                            <p>
                                {fr
                                    ? "J'ai fondé MWD Labs pour aider entrepreneurs et organisations à avoir une présence numérique professionnelle, à prix accessible."
                                    : "I founded MWD Labs to help entrepreneurs and organizations build a professional digital presence at an accessible price."}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── COMPÉTENCES ── */}
            <section className="founder-skills" data-aos="fade-up">
                <div className="founder-section-header">
                    <h2>{fr ? 'Mes Technologies' : 'My Stack'}</h2>
                    <p>{fr ? 'Les outils avec lesquels je construis' : 'The tools I build with'}</p>
                </div>
                <div className="founder-skills-grid">
                    {skills.map((s, i) => (
                        <div key={i} className="fskill-card" data-aos="zoom-in" data-aos-delay={i * 60}>
                            <span className="fskill-icon" style={{ color: s.color }}>{s.icon}</span>
                            <span className="fskill-name">{s.name}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── PROJETS ── */}
            <section className="founder-projects" data-aos="fade-up">
                <div className="founder-section-header">
                    <h2>{fr ? 'Mes Projets' : 'My Projects'}</h2>
                    <p>{fr ? 'Ce que j\'ai construit' : 'What I\'ve built'}</p>
                </div>

                <div className="fproject-filters">
                    {filterTypes.map(f => (
                        <button
                            key={f.key}
                            className={`ffilter-pill${activeFilter === f.key ? ' active' : ''}`}
                            onClick={() => setActiveFilter(f.key)}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>

                <div className="fproject-grid">
                    {filtered.map((p, i) => (
                        <div key={i} className="fproject-card" data-aos="fade-up" data-aos-delay={i < 6 ? i * 60 : 0}>
                            <div className="fproject-img-wrap">
                                <img src={p.image} alt={p.title} loading="lazy" />
                                <div className="fproject-type-badge">
                                    {fr ? p.type_fr : p.type_en}
                                </div>
                            </div>
                            <div className="fproject-body">
                                <h3>{p.title}</h3>
                                <p>{fr ? p.desc_fr : p.desc_en}</p>
                                <div className="fproject-techs">
                                    {p.tech.map((t, j) => (
                                        <span key={j} className="ftech-chip">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="founder-projects-cta" data-aos="fade-up">
                    <Link to="/projects" className="btn btn-outline">
                        {fr ? 'Voir tous les projets' : 'See all projects'} <FaExternalLinkAlt style={{ marginLeft: 6, fontSize: 12 }} />
                    </Link>
                </div>
            </section>

            {/* ── RECRUTEMENT ── */}
            <section className="founder-hire" data-aos="fade-up">
                <div className="founder-section-header">
                    <h2>{fr ? 'Disponible pour un poste' : 'Available for hire'}</h2>
                    <p>{fr ? 'Développeur logiciel & web à la recherche d\'opportunités' : 'Software & web developer looking for opportunities'}</p>
                </div>
                <div className="founder-hire-inner">
                    <div className="founder-hire-text">
                        <p>
                            {fr
                                ? "Diplômé en Technique de l'informatique (Cégep Saint-Jean-sur-Richelieu), avec un stage de fin d'études chez IPQWERY et des projets concrets en web & mobile. Je m'adapte vite, j'apprends encore plus vite, et je livre du code propre et fonctionnel. Disponible à temps plein."
                                : "Graduate in Computer Science Technology (Cégep Saint-Jean-sur-Richelieu), with a final internship at IPQWERY and hands-on web & mobile projects. I adapt fast, learn even faster, and deliver clean, working code. Available full-time."}
                        </p>
                        <ul className="founder-hire-list">
                            <li><FaCheckCircle /> {fr ? 'Développeur web (React, JavaScript, PHP, Node.js)' : 'Web Developer (React, JavaScript, PHP, Node.js)'}</li>
                            <li><FaCheckCircle /> {fr ? 'Développeur mobile Android (Java, Android Studio)' : 'Android Mobile Developer (Java, Android Studio)'}</li>
                            <li><FaCheckCircle /> {fr ? 'Développeur logiciel junior (Java, Python, C#)' : 'Junior Software Developer (Java, Python, C#)'}</li>

                            <li><FaCheckCircle /> {fr ? 'Temps plein · Saint-Hubert / Montréal' : 'Full-time · Saint-Hubert / Montréal'}</li>
                        </ul>
                        <div className="founder-hire-actions">
                            <a
                                href="/docs/MouhammadWaganeDiouf_CV.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                <FaBriefcase style={{ marginRight: 8 }} />
                                {fr ? 'Télécharger mon CV' : 'Download my CV'}
                            </a>
                            <Link to="/contact" className="btn btn-outline">
                                {fr ? 'Me recruter' : 'Hire me'}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA FINAL ── */}
            <section className="founder-final-cta" data-aos="zoom-in">
                <h2>{fr ? 'Travaillons ensemble' : "Let's work together"}</h2>
                <p>
                    {fr
                        ? "Un projet à lancer ou un poste à combler ? Je suis là."
                        : "A project to launch or a role to fill? I'm here."}
                </p>
                <div className="founder-cta-row" style={{ justifyContent: 'center' }}>
                    <Link to="/contact" className="btn btn-primary btn-lg">
                        {fr ? 'Me contacter' : 'Contact me'}
                    </Link>
                    <a
                        href="/docs/MouhammadWaganeDiouf_CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline btn-lg"
                    >
                        {fr ? 'Mon CV' : 'My CV'}
                    </a>
                </div>
            </section>

        </div>
    );
}

export default Founder;
