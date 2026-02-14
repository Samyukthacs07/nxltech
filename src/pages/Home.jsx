import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    HiOutlineGlobeAlt,
    HiOutlineDeviceMobile,
    HiOutlineCube,
    HiOutlineCloud,
    HiOutlinePuzzle,
    HiOutlineLightBulb,
    HiOutlineSpeakerphone,
    HiOutlineCode,
    HiOutlineDesktopComputer,
    HiOutlineLightningBolt,
    HiOutlineFire,
    HiOutlineStar,
    HiArrowRight,
    HiCheck,
} from 'react-icons/hi';
import AnimatedSection from '../components/AnimatedSection';
import StatsCounter from '../components/StatsCounter';
import Tilt3DCard from '../components/Tilt3DCard';
import '../components/Tilt3DCard.css';
import './Home.css';

/* ── Two flagship services shown as large hero cards ── */
const flagshipServices = [
    {
        icon: <HiOutlineCode />,
        title: 'Software Development',
        desc: 'Scalable, enterprise-grade software solutions driving real business results.',
        highlights: ['Custom Web & Mobile Apps', 'SaaS Platforms', 'API & Microservices', 'Legacy Modernization'],
        gradient: 'linear-gradient(135deg, #9333ea 0%, #7c3aed 100%)',
    },
    {
        icon: <HiOutlineSpeakerphone />,
        title: 'Digital Marketing',
        desc: 'Data-driven strategies to amplify your brand and deliver measurable ROI.',
        highlights: ['SEO & SEM', 'Social Media Strategy', 'Content Marketing', 'Performance Analytics'],
        gradient: 'linear-gradient(135deg, #e91e8c 0%, #9333ea 100%)',
    },
];

/* ── Other services (compact cards) ── */
const otherServices = [
    {
        icon: <HiOutlineDesktopComputer />,
        title: 'Website Development',
        desc: 'Stunning, responsive, SEO-optimized websites that convert.',
    },
    {
        icon: <HiOutlineDeviceMobile />,
        title: 'Mobile Apps',
        desc: 'High-performance native & cross-platform mobile apps.',
    },
    {
        icon: <HiOutlineCube />,
        title: 'ERP Solutions',
        desc: 'Streamline operations with intelligent enterprise systems.',
    },
    {
        icon: <HiOutlineCloud />,
        title: 'Cloud Solutions',
        desc: 'Scalable, secure cloud infrastructure & migration.',
    },
    {
        icon: <HiOutlinePuzzle />,
        title: 'Gaming Apps',
        desc: 'Immersive gaming experiences across all platforms.',
    },
    {
        icon: <HiOutlineLightBulb />,
        title: 'IT Consulting',
        desc: 'Expert advice to optimize your tech strategy.',
    },
];

const values = [
    { icon: <HiOutlineLightningBolt />, label: 'Innovation' },
    { icon: <HiOutlineFire />, label: 'Empowerment' },
    { icon: <HiOutlineStar />, label: 'Excellence' },
];

const integrations = [
    { name: 'Microsoft Teams', color: '#5B5FC7' },
    { name: 'Zoho CRM', color: '#E42527' },
    { name: 'Google Workspace', color: '#4285F4' },
    { name: 'Slack', color: '#4A154B' },
];

export default function Home() {
    return (
        <main className="home">
            {/* ===== HERO ===== */}
            <section className="hero">
                <div className="hero__bg">
                    <div className="hero__grid" />
                    <div className="gradient-orb gradient-orb-blue hero__orb-1" />
                    <div className="gradient-orb gradient-orb-cyan hero__orb-2" />
                    <div className="gradient-orb gradient-orb-purple hero__orb-3" />
                </div>
                <div className="container hero__content">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <span className="section-label">NXL Technologies</span>
                        <h1 className="hero__title">
                            Next Level <br />
                            <span className="hero__title-accent">Innovations</span>
                        </h1>
                        <p className="hero__subtitle">
                            Empowering businesses with cutting-edge technology for growth and innovation.
                        </p>
                    </motion.div>
                    <motion.div
                        className="hero__actions"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <Link to="/contact" className="btn btn-primary">
                            <span>Get Started</span>
                            <HiArrowRight />
                        </Link>
                        <Link to="/services" className="btn btn-outline">
                            Explore Services
                        </Link>
                    </motion.div>

                    {/* Floating 3D shapes */}
                    <div className="hero__shapes">
                        <motion.div
                            className="hero__shape hero__shape--cube"
                            animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
                            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        />
                        <motion.div
                            className="hero__shape hero__shape--ring"
                            animate={{ rotateX: [30, 390], rotateZ: [0, 360] }}
                            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                        />
                        <motion.div
                            className="hero__shape hero__shape--sphere"
                            animate={{ y: [0, -30, 0], rotateZ: [0, 360] }}
                            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                        />
                    </div>

                    {/* Floating Particles */}
                    <div className="hero__particles">
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="hero__particle"
                                animate={{
                                    y: [0, -20, 0],
                                    opacity: [0.3, 0.7, 0.3],
                                }}
                                transition={{
                                    duration: 3 + i * 0.5,
                                    repeat: Infinity,
                                    delay: i * 0.4,
                                }}
                            />
                        ))}
                    </div>
                </div>
                <div className="hero__scroll-indicator">
                    <motion.div
                        className="hero__scroll-dot"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </div>
            </section>

            {/* ===== FLAGSHIP SERVICES ===== */}
            <section className="section flagship-section">
                <div className="container">
                    <AnimatedSection>
                        <span className="section-label">Core Expertise</span>
                        <h2 className="section-title">
                            Our Flagship Services
                        </h2>
                        <p className="section-subtitle">
                            Software Development and Digital Marketing are at the heart
                            of NXL Technologies — powering digital transformation for businesses worldwide.
                        </p>
                    </AnimatedSection>

                    <div className="flagship__grid">
                        {flagshipServices.map((s, i) => (
                            <AnimatedSection key={i} variant={i === 0 ? 'fadeLeft' : 'fadeRight'} delay={0.2}>
                                <Tilt3DCard className="flagship-card glass-card" maxTilt={10}>
                                    <div className="flagship-card__ribbon" style={{ background: s.gradient }}>
                                        ★ Flagship Service
                                    </div>
                                    <div className="flagship-card__icon" style={{ background: s.gradient }}>
                                        {s.icon}
                                    </div>
                                    <h3 className="flagship-card__title">{s.title}</h3>
                                    <p className="flagship-card__desc">{s.desc}</p>
                                    <ul className="flagship-card__highlights">
                                        {s.highlights.map((h, j) => (
                                            <li key={j}>
                                                <HiCheck className="flagship-card__check" />
                                                {h}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link to="/services" className="btn btn-primary flagship-card__cta">
                                        <span>Explore {s.title}</span>
                                        <HiArrowRight />
                                    </Link>
                                </Tilt3DCard>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== VISION ===== */}
            <section className="section vision">
                <div className="container">
                    <AnimatedSection>
                        <span className="section-label">Our Vision</span>
                        <h2 className="section-title">
                            Constantly exploring new ways to use technology<br />
                            to solve business challenges.
                        </h2>
                        <p className="section-subtitle">
                            Your trusted partner for transformative digital solutions driving efficiency and success.
                        </p>
                    </AnimatedSection>
                    <div className="vision__values">
                        {values.map((v, i) => (
                            <AnimatedSection key={i} variant="scaleIn" delay={0.2 + i * 0.15}>
                                <Tilt3DCard className="vision__value glass-card" maxTilt={15}>
                                    <span className="vision__value-icon">{v.icon}</span>
                                    <span className="vision__value-label">{v.label}</span>
                                </Tilt3DCard>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== OTHER SERVICES ===== */}
            <section className="section services-home">
                <div className="gradient-orb gradient-orb-blue services-orb" />
                <div className="container">
                    <AnimatedSection>
                        <span className="section-label">What We Also Do</span>
                        <h2 className="section-title">
                            More Solutions to Elevate Your Business
                        </h2>
                    </AnimatedSection>
                    <div className="services-home__grid">
                        {otherServices.map((s, i) => (
                            <AnimatedSection key={i} variant="fadeUp" delay={i * 0.1}>
                                <Tilt3DCard className="service-card glass-card" maxTilt={14}>
                                    <div className="service-card__icon">{s.icon}</div>
                                    <h3 className="service-card__title">{s.title}</h3>
                                    <p className="service-card__desc">{s.desc}</p>
                                    <Link to="/services" className="service-card__link">
                                        Learn More <HiArrowRight />
                                    </Link>
                                </Tilt3DCard>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TAILORED SOLUTIONS ===== */}
            <section className="section tailored">
                <div className="container">
                    <AnimatedSection>
                        <span className="section-label">Why Choose Us</span>
                        <h2 className="section-title">
                            Experience the Power of Tailored IT Solutions
                        </h2>
                        <p className="section-subtitle">
                            Innovation and efficiency tailored to your specific business goals.
                        </p>
                    </AnimatedSection>
                    <div className="tailored__grid">
                        <AnimatedSection variant="fadeLeft" delay={0.2}>
                            <Tilt3DCard className="tailored__card glass-card" maxTilt={8}>
                                <div className="tailored__card-badge">Featured</div>
                                <HiOutlineCode className="tailored__card-icon" />
                                <h3>Software Development</h3>
                                <p>End-to-end software solutions — from idea to deployment and beyond.</p>
                                <Link to="/services" className="service-card__link">
                                    Explore Now <HiArrowRight />
                                </Link>
                            </Tilt3DCard>
                        </AnimatedSection>
                        <AnimatedSection variant="fadeRight" delay={0.3}>
                            <Tilt3DCard className="tailored__card glass-card" maxTilt={8}>
                                <div className="tailored__card-badge">Popular</div>
                                <HiOutlineSpeakerphone className="tailored__card-icon" />
                                <h3>Digital Marketing</h3>
                                <p>Boost your online presence with data-driven marketing strategies.</p>
                                <Link to="/services" className="service-card__link">
                                    Learn More <HiArrowRight />
                                </Link>
                            </Tilt3DCard>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* ===== STATS ===== */}
            <StatsCounter />

            {/* ===== INTEGRATIONS ===== */}
            <section className="section integrations">
                <div className="container">
                    <AnimatedSection>
                        <span className="section-label">Seamless Integration</span>
                        <h2 className="section-title">
                            Use The Apps Designed for Seamless Integration
                        </h2>
                    </AnimatedSection>
                    <div className="integrations__grid">
                        {integrations.map((app, i) => (
                            <AnimatedSection key={i} variant="scaleIn" delay={i * 0.12}>
                                <div className="integration-card glass-card">
                                    <div
                                        className="integration-card__dot"
                                        style={{ background: app.color }}
                                    />
                                    <span className="integration-card__name">{app.name}</span>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="section cta-section">
                <div className="container">
                    <AnimatedSection variant="scaleIn">
                        <div className="cta-box">
                            <div className="cta-box__glow" />
                            <h2 className="cta-box__title">
                                Ready to Take Your Business<br />to the Next Level?
                            </h2>
                            <p className="cta-box__desc">
                                Let's collaborate to craft innovative solutions that drive
                                transformation, efficiency, and growth.
                            </p>
                            <Link to="/contact" className="btn btn-primary">
                                <span>Start Your Project</span>
                                <HiArrowRight />
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </main>
    );
}
