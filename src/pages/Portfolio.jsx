import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowRight, HiExternalLink } from 'react-icons/hi';
import AnimatedSection from '../components/AnimatedSection';
import './Portfolio.css';

const categories = ['All', 'Web', 'Mobile', 'Cloud', 'Gaming'];

const projects = [
    {
        title: 'Enterprise Dashboard',
        category: 'Web',
        desc: 'A comprehensive analytics dashboard for real-time business insights.',
        tech: ['React', 'Node.js', 'MongoDB'],
        color: '#9333ea',
    },
    {
        title: 'HealthTrack Mobile',
        category: 'Mobile',
        desc: 'Cross-platform health monitoring app with AI-powered recommendations.',
        tech: ['React Native', 'Firebase', 'TensorFlow'],
        color: '#e91e8c',
    },
    {
        title: 'CloudSync Platform',
        category: 'Cloud',
        desc: 'Scalable cloud infrastructure for seamless data synchronization.',
        tech: ['AWS', 'Docker', 'Kubernetes'],
        color: '#7c3aed',
    },
    {
        title: 'Velocity Racing',
        category: 'Gaming',
        desc: 'High-octane multiplayer racing game with stunning 3D graphics.',
        tech: ['Unity', 'C#', 'Photon'],
        color: '#f43f5e',
    },
    {
        title: 'ShopSmart E-commerce',
        category: 'Web',
        desc: 'Full-featured e-commerce platform with AI product recommendations.',
        tech: ['Next.js', 'Stripe', 'PostgreSQL'],
        color: '#10b981',
    },
    {
        title: 'FleetManager Pro',
        category: 'Mobile',
        desc: 'GPS-powered fleet management app for logistics optimization.',
        tech: ['Flutter', 'Google Maps', 'Node.js'],
        color: '#f59e0b',
    },
];

export default function Portfolio() {
    const [active, setActive] = useState('All');
    const filtered = active === 'All'
        ? projects
        : projects.filter((p) => p.category === active);

    return (
        <main className="portfolio-page">
            {/* HERO */}
            <section className="page-hero">
                <div className="container">
                    <h1>Our Portfolio</h1>
                    <div className="breadcrumb">
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <span>Portfolio</span>
                    </div>
                </div>
            </section>

            {/* PORTFOLIO */}
            <section className="section portfolio-section">
                <div className="container">
                    <AnimatedSection>
                        <span className="section-label">Our Work</span>
                        <h2 className="section-title">Projects We're Proud Of</h2>
                        <p className="section-subtitle">
                            Explore our diverse range of projects spanning web, mobile, cloud, and gaming.
                        </p>
                    </AnimatedSection>

                    {/* Filter Tabs */}
                    <div className="portfolio__filters">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`portfolio__filter-btn ${active === cat ? 'active' : ''}`}
                                onClick={() => setActive(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <motion.div className="portfolio__grid" layout>
                        <AnimatePresence mode="popLayout">
                            {filtered.map((project) => (
                                <motion.div
                                    key={project.title}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.35 }}
                                >
                                    <div className="project-card glass-card">
                                        <div
                                            className="project-card__image"
                                            style={{
                                                background: `linear-gradient(135deg, ${project.color}22, ${project.color}11)`,
                                            }}
                                        >
                                            <div
                                                className="project-card__image-dot"
                                                style={{ background: project.color }}
                                            />
                                            <span className="project-card__category">{project.category}</span>
                                        </div>
                                        <div className="project-card__body">
                                            <h3 className="project-card__title">{project.title}</h3>
                                            <p className="project-card__desc">{project.desc}</p>
                                            <div className="project-card__tech">
                                                {project.tech.map((t) => (
                                                    <span key={t} className="project-card__tag">{t}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="project-card__overlay">
                                            <HiExternalLink className="project-card__overlay-icon" />
                                            <span>View Details</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container">
                    <AnimatedSection variant="scaleIn">
                        <div className="cta-box">
                            <div className="cta-box__glow" />
                            <h2 className="cta-box__title">
                                Have a Project in Mind?
                            </h2>
                            <p className="cta-box__desc">
                                Let's bring your ideas to life with cutting-edge technology and creative solutions.
                            </p>
                            <Link to="/contact" className="btn btn-primary">
                                <span>Start a Project</span>
                                <HiArrowRight />
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </main>
    );
}
